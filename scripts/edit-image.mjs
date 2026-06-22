import 'dotenv/config';
import fs from 'fs';

const API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/edit';
const API_KEY = process.env.WAVESPEED_API_KEY;

// Get args: edit-image.mjs <image-path> <prompt>
const imagePath = process.argv[2];
const prompt = process.argv.slice(3).join(' ');

if (!imagePath || !prompt) {
  console.error('Usage: node edit-image.mjs <image-path-or-url> <prompt>');
  process.exit(1);
}

async function getImageUrl(pathOrUrl) {
  // If it's already a URL, use it directly
  if (pathOrUrl.startsWith('http')) return pathOrUrl;

  // Otherwise, convert local file to base64 data URL
  const buffer = fs.readFileSync(pathOrUrl);
  const ext = pathOrUrl.split('.').pop().toLowerCase();
  const mime = ext === 'png' ? 'image/png' : 'image/jpeg';
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

async function editImage() {
  console.log(`Image: ${imagePath}`);
  console.log(`Prompt: "${prompt}"`);

  const imageUrl = await getImageUrl(imagePath);
  console.log(`Image prepared (${imageUrl.startsWith('data:') ? 'base64' : 'url'})`);

  // Submit task
  const submitRes = await fetch(`${API_URL}/${MODEL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      images: [imageUrl],
      prompt,
      output_format: 'png',
      resolution: '1k',
    }),
  });

  const submitData = await submitRes.json();
  if (submitData.code !== 200 || !submitData.data?.id) {
    console.error('Failed:', submitData.message || JSON.stringify(submitData));
    process.exit(1);
  }

  const taskId = submitData.data.id;
  console.log(`Task ID: ${taskId}`);

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
      const filename = `edited-${Date.now()}.png`;
      fs.writeFileSync(filename, buffer);

      console.log(`\nSaved: ${filename}`);
      return;
    }

    if (statusData.data?.status === 'failed') {
      console.error('\nEdit failed.');
      process.exit(1);
    }
  }

  console.error('\nTimed out.');
  process.exit(1);
}

editImage();
