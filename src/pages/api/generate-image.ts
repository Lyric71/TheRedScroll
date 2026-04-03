export const prerender = false;

import type { APIRoute } from 'astro';

const WAVESPEED_API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/text-to-image';

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.WAVESPEED_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured.' }), { status: 500 });
  }

  let body: { prompt?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400 });
  }

  const prompt = body.prompt?.trim();
  if (!prompt) {
    return new Response(JSON.stringify({ error: 'Prompt is required.' }), { status: 400 });
  }

  // Step 1 — Submit task
  const submitRes = await fetch(`${WAVESPEED_API_URL}/${MODEL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      output_format: 'png',
      quality: '1K',
    }),
  });

  const submitData = await submitRes.json();

  if (submitData.code !== 200 || !submitData.data?.id) {
    return new Response(
      JSON.stringify({ error: submitData.message || 'Failed to submit generation task.' }),
      { status: 502 },
    );
  }

  const taskId = submitData.data.id;

  // Step 2 — Poll for result (max 60 seconds)
  for (let i = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 1000));

    const statusRes = await fetch(`${WAVESPEED_API_URL}/predictions/${taskId}/result`, {
      headers: { 'Authorization': `Bearer ${apiKey}` },
    });

    const statusData = await statusRes.json();
    const status = statusData.data?.status;

    if (status === 'completed') {
      return new Response(
        JSON.stringify({
          success: true,
          imageUrl: statusData.data.outputs[0],
          timings: statusData.data.timings,
        }),
        { status: 200 },
      );
    }

    if (status === 'failed') {
      return new Response(JSON.stringify({ error: 'Image generation failed.' }), { status: 502 });
    }
  }

  return new Response(JSON.stringify({ error: 'Image generation timed out (60s).' }), { status: 504 });
};
