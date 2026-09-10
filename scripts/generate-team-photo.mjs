import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';

// OpenAI Images edit endpoint (gpt-image-2), called directly. The two portraits
// go up as reference images; input_fidelity=high keeps both faces recognizable.
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

async function generate() {
  if (!API_KEY) {
    console.error('OPENAI_API_KEY is not set. Add it to .env.');
    process.exit(1);
  }

  const img1 = 'public/images/team/Cyil-Drouin.jpg';
  const img2 = 'public/images/team/Liyan-Ye.jpg';

  for (const p of [img1, img2]) {
    if (!fs.existsSync(p)) {
      console.error(`Missing input image: ${p}`);
      process.exit(1);
    }
  }

  console.log('Submitting team photo edit...');

  const form = new FormData();
  form.append('model', MODEL);
  form.append(
    'prompt',
    "Create a candid team photo in an office kitchen during a coffee break. The European man with glasses and dark suit from the first image is standing on the left side holding a coffee mug, talking to a colleague. The Chinese woman with bangs and white blazer from the second image is on the right side, sitting on a counter edge, laughing. Between them are 5 other team members who are ALL Chinese young professionals in their 20s and 30s, both men and women. Some are holding mugs, one is eating a snack, another is looking at a phone. The kitchen has a coffee machine, mugs on shelves, some takeaway containers on the counter. Warm natural lighting. Candid, not posed. Everyone looks relaxed. Ultra realistic candid workplace photography. The man and woman from the reference photos must be clearly recognizable.",
  );
  form.append('size', '1536x1024');
  form.append('quality', 'high');
  form.append('input_fidelity', 'high');
  form.append('output_format', 'png');
  form.append('n', '1');
  form.append('image[]', fileToBlob(img1), path.basename(img1));
  form.append('image[]', fileToBlob(img2), path.basename(img2));

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

  const filename = `team-photo-${Date.now()}.png`;
  fs.writeFileSync(filename, Buffer.from(b64, 'base64'));
  console.log(`Saved: ${filename}`);
}

generate().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
