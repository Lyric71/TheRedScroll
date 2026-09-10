import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';

// OpenAI Images edit endpoint (gpt-image-2), called directly. Multipart upload,
// synchronous response: no third-party proxy, no task id, no polling.
const API_URL = 'https://api.openai.com/v1/images/edits';
const MODEL = process.env.OPENAI_IMAGE_MODEL ?? 'gpt-image-2';
const API_KEY = process.env.OPENAI_API_KEY;

const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };

function fileToBlob(p) {
  const ext = path.extname(p).toLowerCase();
  const type = MIME[ext];
  if (!type) throw new Error(`Unsupported input for the edit endpoint: ${p} (use png, jpg or webp)`);
  return new Blob([fs.readFileSync(p)], { type });
}

async function run() {
  if (!API_KEY) {
    console.error('OPENAI_API_KEY is not set. Add it to .env.');
    process.exit(1);
  }

  // The logo ships as SVG, and the edit endpoint only takes raster input, so
  // this needs a PNG export first. public/images/logo/theredscroll-logo-mark-512.png
  // is the mark only; export the full light lockup to the path below to run this.
  const office = 'public/images/team/studio photo Hong Kong template.png';
  const logo = 'public/images/logo/theredscroll-logo-5B-light.png';

  for (const p of [office, logo]) {
    if (!fs.existsSync(p)) {
      console.error(`Missing input image: ${p}`);
      process.exit(1);
    }
  }

  console.log('Submitting edit with logo reference...');

  const form = new FormData();
  form.append('model', MODEL);
  form.append(
    'prompt',
    "In the first image, replace the Nuvora Studio logo on the wall with the logo shown in the second image. Place the second image's logo on the wall in the same position and scale as the original Nuvora Studio logo. Keep everything else in the office exactly the same.",
  );
  form.append('quality', 'high');
  form.append('input_fidelity', 'high');
  form.append('output_format', 'png');
  form.append('n', '1');
  form.append('image[]', fileToBlob(office), path.basename(office));
  form.append('image[]', fileToBlob(logo), path.basename(logo));

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${API_KEY}` },
    body: form,
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.error) {
    console.error('Failed:', body.error?.message ?? `HTTP ${res.status}`);
    process.exit(1);
  }

  const b64 = body.data?.[0]?.b64_json;
  if (!b64) {
    console.error('OpenAI returned no image.');
    process.exit(1);
  }

  const filename = `edited-logo-${Date.now()}.png`;
  fs.writeFileSync(filename, Buffer.from(b64, 'base64'));
  console.log(`Saved: ${filename}`);
}

run().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
