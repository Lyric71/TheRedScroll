import 'dotenv/config';
import fs from 'fs';

const API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/edit';
const API_KEY = process.env.WAVESPEED_API_KEY;

function imageToBase64(path) {
  const buffer = fs.readFileSync(path);
  const ext = path.split('.').pop().toLowerCase();
  const mime = ext === 'png' ? 'image/png' : 'image/jpeg';
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

async function generate() {
  const img1 = imageToBase64('public/images/team/Cyil-Drouin.jpg');
  const img2 = imageToBase64('public/images/team/Liyan-Ye.jpg');

  console.log('Submitting team photo edit...');

  const submitRes = await fetch(`${API_URL}/${MODEL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      images: [img1, img2],
      prompt: "Create a candid team photo in an office kitchen during a coffee break. The European man with glasses and dark suit from the first image is standing on the left side holding a coffee mug, talking to a colleague. The Chinese woman with bangs and white blazer from the second image is on the right side, sitting on a counter edge, laughing. Between them are 5 other team members who are ALL Chinese young professionals in their 20s and 30s, both men and women. Some are holding mugs, one is eating a snack, another is looking at a phone. The kitchen has a coffee machine, mugs on shelves, some takeaway containers on the counter. Warm natural lighting. Candid, not posed. Everyone looks relaxed. Ultra realistic candid workplace photography. The man and woman from the reference photos must be clearly recognizable.",
      output_format: 'png',
      resolution: '1k',
      aspect_ratio: '16:9',
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
      const imageUrl = statusData.data.outputs[0];
      const imgRes = await fetch(imageUrl);
      const buffer = Buffer.from(await imgRes.arrayBuffer());
      const filename = `team-photo-${Date.now()}.png`;
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
