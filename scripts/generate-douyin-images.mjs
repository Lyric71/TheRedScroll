import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/text-to-image';
const API_KEY = process.env.WAVESPEED_API_KEY;

const images = [
  // Hero
  { prompt: 'Professional photo of a young Chinese woman scrolling through Douyin short video app on her smartphone in a modern Shanghai cafe, warm lighting, shallow depth of field, lifestyle photography, cinematic', output: 'public/images/hero/douyin-hero.png' },

  // Stats (8)
  { prompt: 'Close-up of a smartphone screen showing Douyin app with millions of views on a viral short video, Chinese social media interface, clean photography', output: 'public/images/platforms/douyin-stats/daily-active-users.png' },
  { prompt: 'Aerial view of a crowded Chinese shopping district at night with neon lights, people using smartphones, vibrant urban scene representing massive user base', output: 'public/images/platforms/douyin-stats/monthly-active-users.png' },
  { prompt: 'Young Chinese professional watching Douyin videos on phone during commute on subway train, candid lifestyle photo, natural lighting', output: 'public/images/platforms/douyin-stats/daily-time.png' },
  { prompt: 'Chinese e-commerce warehouse with packages being sorted, modern logistics center, Douyin live commerce orders, professional photography', output: 'public/images/platforms/douyin-stats/ecommerce-sales.png' },
  { prompt: 'Graph trending upward displayed on a modern monitor screen in a Chinese marketing office, growth analytics dashboard, clean professional photo', output: 'public/images/platforms/douyin-stats/yoy-growth.png' },
  { prompt: 'Chinese woman doing a live commerce stream on Douyin, showing beauty products to camera with ring light, professional live selling setup', output: 'public/images/platforms/douyin-stats/live-commerce.png' },
  { prompt: 'Multiple smartphones showing different Douyin video content arranged on a minimal white desk, flat lay photography, clean aesthetic', output: 'public/images/platforms/douyin-stats/content-variety.png' },
  { prompt: 'Chinese content creator filming a vertical video with professional lighting setup in a modern studio, behind the scenes of Douyin content production', output: 'public/images/platforms/douyin-stats/creator-economy.png' },

  // Why Douyin (3)
  { prompt: 'Smartphone showing Douyin For You algorithm feed with engaging short videos, Chinese social media app interface, person discovering new brand content, clean product photography', output: 'public/images/platforms/douyin-why/algorithm.png' },
  { prompt: 'Split screen showing Douyin video on top and checkout purchase screen on bottom, seamless shopping experience on Chinese short video app, product photography', output: 'public/images/platforms/douyin-why/full-funnel.png' },
  { prompt: 'Chinese livestream host selling products on Douyin with real-time viewer count and shopping cart overlay, energetic live commerce session, professional photography', output: 'public/images/platforms/douyin-why/live-built-in.png' },

  // Ecosystem (6)
  { prompt: 'Close-up of Douyin For You page feed showing trending short videos on a smartphone, Chinese app interface with engagement metrics, clean photography', output: 'public/images/platforms/douyin-ecosystem/for-you-feed.png' },
  { prompt: 'Professional Douyin live commerce studio with host presenting fashion items, ring lights and cameras, Chinese live selling setup, modern studio', output: 'public/images/platforms/douyin-ecosystem/live-commerce.png' },
  { prompt: 'Douyin Shop storefront interface on smartphone showing product listings and reviews, Chinese e-commerce in-app shopping, clean product photo', output: 'public/images/platforms/douyin-ecosystem/douyin-shop.png' },
  { prompt: 'Marketing dashboard showing Douyin advertising campaign analytics on a large monitor, Chinese digital advertising data visualization, office setting', output: 'public/images/platforms/douyin-ecosystem/ocean-engine.png' },
  { prompt: 'Chinese KOL influencer creating engaging Douyin content with professional camera and lighting, influencer marketing production, lifestyle photo', output: 'public/images/platforms/douyin-ecosystem/xingtu.png' },
  { prompt: 'Smartphone showing Douyin DOU+ boost interface with video performance metrics, Chinese social media promotion tool, minimal clean photography', output: 'public/images/platforms/douyin-ecosystem/dou-plus.png' },

  // Services (6)
  { prompt: 'Team of Chinese marketing professionals in a modern Shanghai office setting up a brand account on computer screens, collaborative work environment', output: 'public/images/platforms/douyin-services/setup-strategy.png' },
  { prompt: 'Chinese video production team filming vertical short-form content for Douyin with professional equipment, creative studio environment, behind the scenes', output: 'public/images/platforms/douyin-services/content-production.png' },
  { prompt: 'Professional Douyin live commerce session with host showcasing products, multiple camera angles, real-time sales notifications, energetic atmosphere', output: 'public/images/platforms/douyin-services/live-commerce.png' },
  { prompt: 'Chinese KOL influencer reviewing products on camera for Douyin collaboration, authentic content creation, natural lighting, lifestyle setting', output: 'public/images/platforms/douyin-services/kol-campaigns.png' },
  { prompt: 'Digital advertising specialist managing Douyin ad campaigns on multiple screens showing Ocean Engine dashboard, Chinese marketing office', output: 'public/images/platforms/douyin-services/advertising.png' },
  { prompt: 'Douyin Shop product page on smartphone with customer reviews and purchase button, Chinese in-app commerce, clean e-commerce photography', output: 'public/images/platforms/douyin-services/douyin-shop.png' },
];

async function generateOne({ prompt, output }) {
  const label = path.basename(output);
  console.log(`[START] ${label}`);

  try {
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
      console.error(`[FAIL] ${label}: ${submitData.message || JSON.stringify(submitData)}`);
      return;
    }

    const taskId = submitData.data.id;

    for (let i = 0; i < 120; i++) {
      await new Promise((r) => setTimeout(r, 1000));

      const statusRes = await fetch(`${API_URL}/predictions/${taskId}/result`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` },
      });

      const statusData = await statusRes.json();

      if (statusData.data?.status === 'completed') {
        const imageUrl = statusData.data.outputs[0];
        const imgRes = await fetch(imageUrl);
        const buffer = Buffer.from(await imgRes.arrayBuffer());
        fs.mkdirSync(path.dirname(output), { recursive: true });
        fs.writeFileSync(output, buffer);
        console.log(`[DONE] ${label}`);
        return;
      }

      if (statusData.data?.status === 'failed') {
        console.error(`[FAIL] ${label}: generation failed`);
        return;
      }
    }

    console.error(`[TIMEOUT] ${label}`);
  } catch (err) {
    console.error(`[ERROR] ${label}: ${err.message}`);
  }
}

// Run in batches of 5 to avoid rate limits
async function runBatch(batch) {
  await Promise.all(batch.map(generateOne));
}

async function main() {
  console.log(`Generating ${images.length} images...`);
  const batchSize = 5;
  for (let i = 0; i < images.length; i += batchSize) {
    const batch = images.slice(i, i + batchSize);
    console.log(`\nBatch ${Math.floor(i / batchSize) + 1}/${Math.ceil(images.length / batchSize)}`);
    await runBatch(batch);
  }
  console.log('\nAll done!');
}

main();
