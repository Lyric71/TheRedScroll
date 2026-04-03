import 'dotenv/config';
import fs from 'fs';

const API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/text-to-image';
const API_KEY = process.env.WAVESPEED_API_KEY;

const prompt = process.argv.slice(2).join(' ');

if (!prompt) {
  console.error('Usage: node generate-image.mjs <prompt>');
  process.exit(1);
}

async function generate() {
  console.log(`Prompt: "${prompt}"`);

  // Submit task
  const submitRes = await fetch(`${API_URL}/${MODEL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt, output_format: 'png', quality: '1K' }),
  });

  const submitData = await submitRes.json();
  if (submitData.code !== 200 || !submitData.data?.id) {
    console.error('Failed:', submitData.message || submitData);
    process.exit(1);
  }

  const taskId = submitData.data.id;

  // Poll for result (max 120s)
  for (let i = 0; i < 120; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    process.stdout.write('.');

    const statusRes = await fetch(`${API_URL}/predictions/${taskId}/result`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` },
    });

    const statusData = await statusRes.json();

    if (statusData.data?.status === 'completed') {
      const imageUrl = statusData.data.outputs[0];

      // Download and save
      const imgRes = await fetch(imageUrl);
      const buffer = Buffer.from(await imgRes.arrayBuffer());
      const filename = `generated-${Date.now()}.png`;
      fs.writeFileSync(filename, buffer);

      console.log(`\nSaved: ${filename}`);
      return;
    }

    if (statusData.data?.status === 'failed') {
      console.error('\nGeneration failed.');
      process.exit(1);
    }
  }

  console.error('\nTimed out.');
  process.exit(1);
}

generate();
