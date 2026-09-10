import 'dotenv/config';
import fs from 'fs';
import path from 'path';

// OpenAI Images (gpt-image-2), called directly. One synchronous request per
// image: no third-party proxy, no task id, no polling.
const API_URL = 'https://api.openai.com/v1/images/generations';
const MODEL = process.env.OPENAI_IMAGE_MODEL ?? 'gpt-image-2';
const API_KEY = process.env.OPENAI_API_KEY;

const images = [
  // Hero
  { prompt: 'Professional photo of a Chinese person browsing multiple social media apps on a large smartphone screen in a modern office, Bilibili Zhihu Kuaishou app icons visible on screen, warm lighting, shallow depth of field, lifestyle photography', output: 'public/images/hero/additional-platforms-hero.png' },

  // Platform images (9 platforms - each showing platform being used or screenshot)
  { prompt: 'Young Chinese person watching Bilibili video content on laptop with danmu bullet comments scrolling across screen, anime and tech content visible, modern room with LED lighting, lifestyle photography', output: 'public/images/platforms/additional-platforms/bilibili.png' },
  { prompt: 'Chinese woman doing live commerce selling on Kuaishou short video app on smartphone, showing products to camera, rural Chinese setting with authentic vibe, candid photography', output: 'public/images/platforms/additional-platforms/kuaishou.png' },
  { prompt: 'Chinese professional reading detailed answers on Zhihu Q&A platform on tablet device, coffee shop setting, intellectual atmosphere, clean photography with shallow depth of field', output: 'public/images/platforms/additional-platforms/zhihu.png' },
  { prompt: 'Chinese commuter scrolling through Toutiao news feed on smartphone during subway ride, news articles and trending headlines visible on screen, candid urban photography', output: 'public/images/platforms/additional-platforms/toutiao.png' },
  { prompt: 'Chinese teenager using QQ messaging app on smartphone, colorful chat interface with stickers and emojis, campus university setting, youthful vibrant photography', output: 'public/images/platforms/additional-platforms/qq.png' },
  { prompt: 'Person browsing Baidu Tieba forum discussion threads on desktop computer, Chinese forum interface with community posts visible, home office setting, natural lighting', output: 'public/images/platforms/additional-platforms/baidu-tieba.png' },
  { prompt: 'Chinese family checking restaurant reviews on Meituan Dianping app on smartphone before entering a restaurant, street scene in Chinese city, authentic lifestyle photography', output: 'public/images/platforms/additional-platforms/meituan.png' },
  { prompt: 'Chinese woman shopping on Pinduoduo app showing group buying deals and discounts on smartphone, excited expression, product packages in background, lifestyle photography', output: 'public/images/platforms/additional-platforms/pinduoduo.png' },
  { prompt: 'Young Chinese woman browsing Lemon8 lifestyle app showing curated beauty and travel content on smartphone, aesthetic flat lay with flowers and cosmetics, clean photography', output: 'public/images/platforms/additional-platforms/lemon8.png' },

  // Why section (3 cards)
  { prompt: 'Close-up of person deeply engaged watching long-form video content on laptop screen with headphones on, focused attention, warm ambient lighting, cinematic photography', output: 'public/images/platforms/additional-why/focused-attention.png' },
  { prompt: 'Chinese e-commerce delivery packages stacked high in a sorting facility, conveyor belts and logistics, massive scale of online shopping in China, professional photography', output: 'public/images/platforms/additional-why/ecommerce-power.png' },
  { prompt: 'Person searching on Baidu search engine on laptop showing Chinese search results with Zhihu answers ranking high, SEO visibility concept, clean office photography', output: 'public/images/platforms/additional-why/search-longevity.png' },

  // Services (6)
  { prompt: 'Marketing team in modern Shanghai office setting up brand social media accounts on multiple computer screens, collaborative professional environment, warm lighting', output: 'public/images/platforms/additional-services/account-setup.png' },
  { prompt: 'Chinese creative team producing vertical video content with professional camera and lighting equipment, content production studio, behind the scenes photography', output: 'public/images/platforms/additional-services/content-production.png' },
  { prompt: 'Social media manager scheduling posts across multiple Chinese platform dashboards on widescreen monitor, organized workspace, professional photography', output: 'public/images/platforms/additional-services/publishing.png' },
  { prompt: 'Digital advertising specialist analyzing campaign performance metrics on multiple screens showing Chinese ad platform dashboards, data-driven marketing office', output: 'public/images/platforms/additional-services/advertising.png' },
  { prompt: 'Chinese KOL influencer filming product review video with ring light and camera setup, authentic content creation for brand collaboration, lifestyle photography', output: 'public/images/platforms/additional-services/kol-campaigns.png' },
  { prompt: 'Marketing analyst reviewing monthly performance report with charts and graphs on screen, clean modern office, data visualization and analytics, professional photography', output: 'public/images/platforms/additional-services/analytics.png' },
];

async function generateOne({ prompt, output }) {
  const label = path.basename(output);
  console.log(`[START] ${label}`);

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        prompt,
        size: '1024x1024',
        quality: 'high',
        output_format: 'png',
        n: 1,
      }),
    });

    const body = await res.json().catch(() => ({}));
    if (!res.ok || body.error) {
      console.error(`[FAIL] ${label}: ${body.error?.message ?? `HTTP ${res.status}`}`);
      return;
    }

    const b64 = body.data?.[0]?.b64_json;
    if (!b64) {
      console.error(`[FAIL] ${label}: no image returned`);
      return;
    }

    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, Buffer.from(b64, 'base64'));
    console.log(`[DONE] ${label}`);
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
