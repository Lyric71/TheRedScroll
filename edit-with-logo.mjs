import 'dotenv/config';
import fs from 'fs';

const API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/edit';
const API_KEY = process.env.WAVESPEED_API_KEY;

function imageToBase64(path) {
  const buffer = fs.readFileSync(path);
  const ext = path.split('.').pop().toLowerCase();
  const mime = ext === 'png' ? 'image/png' : ext === 'svg' ? 'image/svg+xml' : 'image/jpeg';
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

async function run() {
  const officeImg = imageToBase64('public/images/team/studio photo Hong Kong template.png');
  const logoImg = imageToBase64('public/images/logo/theredscroll-logo-5B-light.svg');

  console.log('Submitting edit with logo reference...');

  const submitRes = await fetch(`${API_URL}/${MODEL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      images: [officeImg, logoImg],
      prompt: "In the first image, replace the Nuvora Studio logo on the wall with the logo shown in the second image. Place the second image's logo on the wall in the same position and scale as the original Nuvora Studio logo. Keep everything else in the office exactly the same.",
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

  for (let i = 0; i < 120; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    process.stdout.write('.');

    const statusRes = await fetch(`${API_URL}/predictions/${taskId}/result`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` },
    });
    const statusData = await statusRes.json();

    if (statusData.data?.status === 'completed') {
      const url = statusData.data.outputs[0];
      const imgRes = await fetch(url);
      const buffer = Buffer.from(await imgRes.arrayBuffer());
      const filename = `edited-logo-${Date.now()}.png`;
      fs.writeFileSync(filename, buffer);
      console.log(`\nSaved: ${filename}`);
      return;
    }
    if (statusData.data?.status === 'failed') {
      console.error('\nFailed.');
      process.exit(1);
    }
  }
  console.error('\nTimed out.');
  process.exit(1);
}

run();
