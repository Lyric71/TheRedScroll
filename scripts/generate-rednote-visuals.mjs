import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const STYLE = 'Ultra realistic photography, cinematic lighting, 8k detail. ';
const XHS = 'Xiaohongshu app (小红书 Little Red Book) ';

const images = [
  // Hero
  {
    dest: 'public/images/hero/rednote-hero.png',
    prompt: STYLE + 'Young Chinese woman in a Shanghai cafe holding her iPhone showing the ' + XHS + 'home feed with the distinctive red and white interface, red logo visible, scrolling through lifestyle posts with photos and Chinese text captions, warm golden hour light streaming through the window, shallow depth of field on the phone screen.',
  },

  // Stats — show Xiaohongshu app being used, screen visible
  {
    dest: 'public/images/platforms/rednote-stats/monthly-active-users.png',
    prompt: STYLE + 'Crowded Shanghai metro train with multiple Chinese commuters all looking at their phones, several screens clearly showing the ' + XHS + 'red and white interface with lifestyle post grids, warm fluorescent lighting, candid street photography style.',
  },
  {
    dest: 'public/images/platforms/rednote-stats/daily-post-views.png',
    prompt: STYLE + 'Close-up over-the-shoulder shot of a Chinese woman browsing the ' + XHS + 'Explore feed on her iPhone, the screen shows a grid of lifestyle photo posts with Chinese captions and red heart icons, the distinctive red navigation bar at bottom, cozy bedroom with warm lamp light.',
  },
  {
    dest: 'public/images/platforms/rednote-stats/monthly-search-queries.png',
    prompt: STYLE + 'Close-up of Chinese hands typing in the ' + XHS + 'search bar on a smartphone, the screen shows search suggestions in Chinese characters with trending hashtags, the red Xiaohongshu logo visible at top, cafe table with latte art beside the phone.',
  },
  {
    dest: 'public/images/platforms/rednote-stats/users-aged-18-35.png',
    prompt: STYLE + 'Three stylish young Chinese women in their twenties sitting in a trendy Shanghai brunch spot, one is showing her ' + XHS + 'post to the others on her phone screen, red app interface visible, laughing together, avocado toast and matcha lattes on the table, natural daylight.',
  },
  {
    dest: 'public/images/platforms/rednote-stats/user-generated-content.png',
    prompt: STYLE + 'Chinese content creator filming a skincare routine flat lay with her phone mounted on a tripod, the ' + XHS + 'posting interface visible on a second phone showing the note editor with Chinese text and hashtags, beauty products arranged neatly, ring light glow, overhead angle.',
  },
  {
    dest: 'public/images/platforms/rednote-stats/conversion-rate.png',
    prompt: STYLE + 'Close-up of a Chinese woman tapping the buy button on a ' + XHS + 'shoppable product post on her phone, the screen shows a beauty product listing with price in yuan, reviews count, and the red purchase button, shopping bags from luxury brands visible beside her.',
  },
  {
    dest: 'public/images/platforms/rednote-stats/daily-time-per-user.png',
    prompt: STYLE + 'Young Chinese woman curled up on a couch at night scrolling through ' + XHS + 'on her phone, the screen glowing with the red and white app interface showing lifestyle posts, warm ambient lighting from a floor lamp, cozy blanket, relaxed evening scene.',
  },
  {
    dest: 'public/images/platforms/rednote-stats/purchase-advice-users.png',
    prompt: STYLE + 'Two young Chinese women in a cosmetics store comparing product reviews on ' + XHS + 'on their phones, both screens showing the app with product review posts featuring star ratings and Chinese comments, testing lipstick shades, warm retail lighting.',
  },

  // Why essential — showing Xiaohongshu use cases
  {
    dest: 'public/images/platforms/rednote-why/purchase-decision.png',
    prompt: STYLE + 'Over-the-shoulder shot of a Chinese consumer searching for product reviews on ' + XHS + ', the phone screen shows the search results page with multiple review posts featuring product photos, star ratings, and Chinese text, the red search icon visible, sitting at a cafe table.',
  },
  {
    dest: 'public/images/platforms/rednote-why/trust-distribution.png',
    prompt: STYLE + 'Chinese woman sitting cross-legged on her bed filming an honest skincare review for ' + XHS + ', her phone on a tripod showing the recording interface, products laid out in front of her, natural window light, authentic unfiltered bedroom setting, genuine expression.',
  },
  {
    dest: 'public/images/platforms/rednote-why/spending-power.png',
    prompt: STYLE + 'Young affluent Chinese woman in a luxury boutique browsing ' + XHS + 'reviews of a designer handbag on her phone, the app screen shows a detailed review post with product photos, she is holding the actual bag in her other hand comparing, elegant store interior.',
  },
  {
    dest: 'public/images/platforms/rednote-why/social-commerce.png',
    prompt: STYLE + 'Close-up of hands holding a phone showing a ' + XHS + 'shoppable note with product images, price tag in yuan, buy now button in red, and user comments in Chinese, a delivered package being unboxed in the background, warm home lighting.',
  },

  // Services — Xiaohongshu-specific professional scenarios
  {
    dest: 'public/images/platforms/rednote-services/account-setup.png',
    prompt: STYLE + 'Professional laptop screen showing the ' + XHS + 'Business Account backend dashboard with the Blue V verification badge, Chinese business documents and company stamp on the desk beside the laptop, verification checklist visible on screen, warm office desk lamp.',
  },
  {
    dest: 'public/images/platforms/rednote-services/content-strategy.png',
    prompt: STYLE + 'Marketing team workspace with a large monitor showing ' + XHS + 'analytics and a content calendar, printed mood boards with Xiaohongshu post screenshots pinned to a board, Chinese editorial notes, team member pointing at the screen, modern Shanghai office.',
  },
  {
    dest: 'public/images/platforms/rednote-services/kol-koc.png',
    prompt: STYLE + 'Chinese beauty KOL doing a live product review on ' + XHS + ', her phone shows the Xiaohongshu live streaming interface with viewer count and comments in Chinese, professional ring light setup, beauty products displayed, her laptop shows the Pugongying influencer platform.',
  },
  {
    dest: 'public/images/platforms/rednote-services/paid-advertising.png',
    prompt: STYLE + 'Marketing professional managing ' + XHS + 'Juguang ad campaigns on a large desktop monitor, the screen shows the Xiaohongshu advertising dashboard with campaign metrics, bid settings, ad creative previews showing sponsored posts, Chinese interface, modern office with warm lighting.',
  },
  {
    dest: 'public/images/platforms/rednote-services/ecommerce-live.png',
    prompt: STYLE + 'Chinese live commerce host doing a fashion haul livestream on ' + XHS + ', phone mounted showing the Xiaohongshu live interface with floating hearts, viewer count, and product links, clothing rack behind her, energetic presentation, professional studio with ring lights.',
  },
  {
    dest: 'public/images/platforms/rednote-services/analytics-listening.png',
    prompt: STYLE + 'Close-up of a laptop showing ' + XHS + 'brand analytics dashboard with follower growth charts, engagement rates, post performance metrics in Chinese, a second screen showing social listening data with brand mentions and sentiment analysis, coffee cup, clean modern desk.',
  },

  // Algorithm — Xiaohongshu-specific mechanics
  {
    dest: 'public/images/platforms/rednote-algorithm/staged-distribution.png',
    prompt: STYLE + 'Split screen concept: left side shows a new ' + XHS + 'post with low view count (300 views), right side shows the same post gone viral with 300K views and thousands of comments, the red Xiaohongshu interface visible, notification badges showing engagement growth, dramatic warm lighting.',
  },
  {
    dest: 'public/images/platforms/rednote-algorithm/ces-scoring.png',
    prompt: STYLE + 'Close-up of a phone screen showing a popular ' + XHS + 'post with high engagement: many saves (bookmarks), comments in Chinese, and shares visible, a users finger tapping the yellow bookmark save icon, the red Xiaohongshu interface, warm natural backlighting.',
  },
  {
    dest: 'public/images/platforms/rednote-algorithm/authenticity-enforced.png',
    prompt: STYLE + 'Side by side: a genuine authentic ' + XHS + 'review post with real photos and detailed Chinese text getting high engagement, next to a polished ad-like branded post with lower engagement, showing how Xiaohongshu rewards authenticity, phone screen, warm lighting.',
  },
  {
    dest: 'public/images/platforms/rednote-algorithm/dual-engine.png',
    prompt: STYLE + 'Phone showing ' + XHS + 'with two tabs highlighted: the Explore discovery feed showing recommended lifestyle posts in a grid, and the Search page with trending search terms in Chinese and search results, the distinctive red Xiaohongshu navigation, warm ambient lighting.',
  },
];

async function run() {
  console.log(`Generating ${images.length} images for RedNote page...\n`);

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const label = path.basename(img.dest, '.png');
    console.log(`\n[${i + 1}/${images.length}] ${label}`);

    try {
      // Find existing generated files to know what's new
      const before = new Set(
        fs.readdirSync('.').filter((f) => f.startsWith('generated-') && f.endsWith('.png'))
      );

      // Call generate-image.mjs
      execSync(`node generate-image.mjs ${JSON.stringify(img.prompt)}`, {
        stdio: 'inherit',
        timeout: 180000,
      });

      // Find the new generated file
      const after = fs.readdirSync('.').filter((f) => f.startsWith('generated-') && f.endsWith('.png'));
      const newFile = after.find((f) => !before.has(f));

      if (newFile) {
        fs.mkdirSync(path.dirname(img.dest), { recursive: true });
        fs.renameSync(newFile, img.dest);
        console.log(`  -> Saved to ${img.dest}`);
      } else {
        console.log(`  -> WARNING: No generated file found`);
      }
    } catch (err) {
      console.log(`  -> FAILED: ${err.message}`);
    }
  }

  console.log('\nAll done.');
}

run();
