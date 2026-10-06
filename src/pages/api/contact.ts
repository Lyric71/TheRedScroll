export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// "How did you hear about us?" answers: the slugs every contact page sends, with the label used in the email
const SOURCES: Record<string, string> = {
  google: 'Google or another search engine',
  ai: 'An AI assistant (ChatGPT, Gemini, Claude, Perplexity…)',
  exhibition: 'An exhibition or a trade show',
  referral: 'A referral, someone recommended us',
  other: 'Somewhere else',
};
const SOURCES_WITH_DETAIL = ['referral', 'exhibition', 'other'];
const SOURCE_DETAIL_MAX = 120;

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const POST: APIRoute = async ({ request }) => {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  let body: { name?: string; email?: string; company?: string; message?: string; source?: string; sourceDetail?: string | null; honeypot?: string; captcha?: string; captchaAnswer?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400 });
  }

  const { name, email, company, message, source, sourceDetail, honeypot, captcha, captchaAnswer } = body;

  // Honeypot check — bots fill this hidden field
  if (honeypot) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  // Captcha check
  if (!captcha || !captchaAnswer || captcha.trim() !== captchaAnswer.trim()) {
    return new Response(JSON.stringify({ error: 'Incorrect captcha answer.' }), { status: 400 });
  }

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), { status: 400 });
  }

  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email address.' }), { status: 400 });
  }

  if (typeof source !== 'string' || !Object.hasOwn(SOURCES, source)) {
    return new Response(JSON.stringify({ error: 'Please tell us how you heard about us.' }), { status: 400 });
  }

  // The detail only counts for the answers that reveal it
  const detail = SOURCES_WITH_DETAIL.includes(source) && typeof sourceDetail === 'string' ? sourceDetail.trim() : '';
  if (detail.length > SOURCE_DETAIL_MAX) {
    return new Response(JSON.stringify({ error: `Keep the source detail under ${SOURCE_DETAIL_MAX} characters.` }), { status: 400 });
  }
  const sourceLine = `${SOURCES[source]}${detail ? `: ${escapeHtml(detail)}` : ''}`;

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
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Heard about us</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #1A1F2E;">${sourceLine}</td>
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
    to: 'cyril.drouin@outlook.com',
    replyTo: email,
    subject: `New enquiry from ${name}${company ? ` - ${company}` : ''}`,
    html,
  });

  if (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
