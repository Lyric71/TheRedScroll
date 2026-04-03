export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  let body: { name?: string; email?: string; company?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400 });
  }

  const { name, email, company, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), { status: 400 });
  }

  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email address.' }), { status: 400 });
  }

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f7fb; padding: 32px;">
      <div style="background: linear-gradient(135deg, #991b1b 0%, #dc2626 100%); border-radius: 12px; padding: 32px; margin-bottom: 24px;">
        <h1 style="color: #ffffff; font-size: 22px; margin: 0;">New Contact Form Submission</h1>
      </div>
      <div style="background: #ffffff; border-radius: 12px; padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px; width: 120px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; font-weight: 600; color: #1A1F2E;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2;">
              <a href="mailto:${email}" style="color: #dc2626;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #1A1F2E;">${company || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #56687A; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #1A1F2E; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
          </tr>
        </table>
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: 'TheRedScroll <onboarding@resend.dev>',
    to: 'cyril@theredscroll.com',
    replyTo: email,
    subject: `New enquiry from ${name}${company ? ` - ${company}` : ''}`,
    html,
  });

  if (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
