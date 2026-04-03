# WaveSpeed API - Integration Guide

## 1. Get your API key

Sign up at [WaveSpeed AI](https://wavespeed.ai) and grab your API key. Add it to your `.env`:

```
WAVESPEED_API_KEY=your_api_key_here
```

---

## 2. How it works - Two-step async pattern

WaveSpeed uses **submit + poll**, not a single synchronous call:

```
POST (submit task) --> get task ID --> GET (poll for result) --> image URL
```

No SDK needed - plain `fetch` calls work perfectly. (The `wavespeed` npm package exists but direct calls are simpler.)

---

## 3. API Reference

| Step | Method | Endpoint |
|------|--------|----------|
| Submit | `POST` | `https://api.wavespeed.ai/api/v3/{model}` |
| Poll | `GET` | `https://api.wavespeed.ai/api/v3/predictions/{taskId}/result` |

**Auth header:** `Authorization: Bearer {API_KEY}`

**Available model (text-to-image):** `google/nano-banana-2/text-to-image`

---

## 4. Request payload

```json
{
  "prompt": "A futuristic city skyline at sunset",
  "output_format": "png",
  "quality": "1K"
}
```

---

## 5. Response structures

**Submit response:**

```json
{
  "code": 200,
  "data": { "id": "task_id_string" }
}
```

**Poll response (completed):**

```json
{
  "data": {
    "status": "completed",
    "outputs": ["https://...image-url.png"],
    "timings": { ... }
  }
}
```

**Poll statuses:** `"completed"` | `"processing"` | `"failed"`

---

## 6. Backend integration (copy-paste utility)

Works in any Node.js / TypeScript project:

```typescript
const WAVESPEED_API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/text-to-image';

async function generateImage(prompt: string, apiKey: string) {
  // Step 1 - Submit task
  const submitRes = await fetch(`${WAVESPEED_API_URL}/${MODEL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt.trim(),
      output_format: 'png',
      quality: '1K',
    }),
  });

  const submitData = await submitRes.json();

  if (submitData.code !== 200 || !submitData.data?.id) {
    throw new Error(submitData.message || 'Failed to submit generation task.');
  }

  const taskId = submitData.data.id;

  // Step 2 - Poll for result (max 60 seconds)
  for (let i = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 1000));

    const statusRes = await fetch(
      `${WAVESPEED_API_URL}/predictions/${taskId}/result`,
      { headers: { 'Authorization': `Bearer ${apiKey}` } }
    );

    const statusData = await statusRes.json();
    const status = statusData.data?.status;

    if (status === 'completed') {
      return {
        imageUrl: statusData.data.outputs[0],
        timings: statusData.data.timings,
      };
    }

    if (status === 'failed') {
      throw new Error('Image generation failed.');
    }
  }

  throw new Error('Image generation timed out (60s).');
}
```

**Usage:**

```typescript
const { imageUrl, timings } = await generateImage(
  'A futuristic city skyline',
  process.env.WAVESPEED_API_KEY
);
```

---

## 7. Express.js example route

```typescript
import express from 'express';

const app = express();
app.use(express.json());

app.post('/api/generate-image', async (req, res) => {
  const { prompt } = req.body;
  const apiKey = process.env.WAVESPEED_API_KEY;

  if (!apiKey) return res.status(500).json({ error: 'API key not configured.' });
  if (!prompt?.trim()) return res.status(400).json({ error: 'Prompt is required.' });

  try {
    const result = await generateImage(prompt, apiKey);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});
```

---

## 8. CLI script (standalone Node.js)

For quick testing or batch generation:

```javascript
import 'dotenv/config';
import fs from 'fs';
import path from 'path';

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
```

Run with: `node generate-image.mjs A futuristic city skyline at sunset`

---

## 9. Error handling cheat sheet

| Scenario | HTTP Status | Check |
|----------|-------------|-------|
| Missing API key | 500 | `!apiKey` |
| Bad request body | 400 | JSON parse failure |
| Empty prompt | 400 | `!prompt` |
| Submit fails | 502 | `submitData.code !== 200` |
| Generation fails | 502 | `status === 'failed'` |
| Timeout (60s) | 504 | Poll loop exhausted |

---

## 10. Key notes

- **No SDK needed** - plain `fetch` calls work perfectly
- **Polling interval** - 1 second is the sweet spot (don't go faster)
- **Timeout** - 60s for web, 120s for CLI/batch is reasonable
- **Output** - returns a temporary URL to the generated image (download/host it yourself)
- **Format/quality** - can use `png` or `jpg`, quality options include `1K`
