// Generate brand-consistent Open Graph images (1200x630 JPG).
//
// OG images are rendered deterministically from an SVG so the brand mark and
// Inter wordmark stay pixel-crisp (AI text-to-image can't render logos/text).
// Colors, fonts (Inter 400/500), and the no-shadow/no-gradient rules follow
// DESIGN_GUIDE.md exactly.
//
// Usage: node scripts/generate-og-images.mjs
// Output: public/images/og-default.jpg, public/images/og/{work,insights}.jpg

import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const INK = '#1A1A1A';
const WHITE = '#FFFFFF';
const VERMILLION = '#CC3333';
const WARM_GRAY = '#E8E0D8';
const STONE_LIGHT = 'rgba(255,255,255,0.55)';

// Inter Medium (500) is used for all text. The renderer (resvg) matches the
// font by internal name + weight, and the Medium face is the most reliable
// match; Medium also reads cleaner than Regular at social-thumbnail size.
// DESIGN_GUIDE permits weights 400 and 500 only.
const inter500 = readFileSync(join(__dirname, 'fonts/inter-500.ttf')).toString('base64');

const W = 1200;
const H = 630;
const PAD = 80;

// Brand mark (the scroll card glyph from the dark logo), scaled up.
function mark(x, y, scale) {
  return `<g transform="translate(${x},${y}) scale(${scale})">
    <rect x="0" y="0" width="38" height="58" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
    <rect x="0" y="0" width="38" height="14" rx="6" fill="${VERMILLION}"/>
    <rect x="0" y="8" width="38" height="6" fill="${VERMILLION}"/>
    <line x1="8" y1="24" x2="30" y2="24" stroke="rgba(255,255,255,0.2)" stroke-width="0.8" stroke-linecap="round"/>
    <line x1="8" y1="32" x2="26" y2="32" stroke="rgba(255,255,255,0.2)" stroke-width="0.8" stroke-linecap="round"/>
    <line x1="8" y1="40" x2="22" y2="40" stroke="rgba(255,255,255,0.2)" stroke-width="0.8" stroke-linecap="round"/>
    <path d="M38 46 Q44 46 44 52 Q44 58 38 58" fill="none" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/>
  </g>`;
}

function svg({ overline, headline, subline }) {
  // headline may be an array of lines
  const lines = Array.isArray(headline) ? headline : [headline];
  const headFont = 64;
  const headLh = 78;
  const headBlockTop = 250;
  const headTspans = lines
    .map((l, i) => `<tspan x="${PAD}" y="${headBlockTop + i * headLh}">${l}</tspan>`)
    .join('');
  const subY = headBlockTop + lines.length * headLh + 26;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <style>
      @font-face{font-family:Inter;src:url(data:font/ttf;base64,${inter500});}
      text{font-family:Inter;font-weight:500;}
    </style>
  </defs>
  <rect width="${W}" height="${H}" fill="${INK}"/>
  <!-- Logo lockup -->
  ${mark(PAD, 70, 1.15)}
  <text x="${PAD + 70}" y="118" font-size="34" letter-spacing="0">
    <tspan fill="${WHITE}">The</tspan><tspan fill="${VERMILLION}">Red</tspan><tspan fill="${WHITE}">Scroll</tspan>
  </text>
  <!-- Overline -->
  <text x="${PAD}" y="200" font-size="20" letter-spacing="3" fill="${VERMILLION}">${overline.toUpperCase()}</text>
  <!-- Headline -->
  <text font-size="${headFont}" fill="${WHITE}" letter-spacing="-1">${headTspans}</text>
  <!-- Subline -->
  <text x="${PAD}" y="${subY}" font-size="26" fill="${STONE_LIGHT}">${subline}</text>
  <!-- Bottom rule -->
  <rect x="${PAD}" y="${H - 70}" width="56" height="4" fill="${VERMILLION}"/>
  <text x="${PAD}" y="${H - 36}" font-size="20" fill="${WARM_GRAY}">theredscroll.com</text>
</svg>`;
}

const images = [
  {
    file: 'public/images/og-default.jpg',
    overline: 'China Social Media Agency',
    headline: ['We grow Western brands', 'on China’s social platforms.'],
    subline: 'WeChat · Douyin · RedNote · Weibo + 14 more',
  },
  {
    file: 'public/images/og/work.jpg',
    overline: 'Our Work',
    headline: ['Case studies from brands', 'growing in China.'],
    subline: 'Fixed scope. Fixed price. Team on the ground.',
  },
  {
    file: 'public/images/og/insights.jpg',
    overline: 'Insights',
    headline: ['Guides on China social', 'media and commerce.'],
    subline: 'WeChat, Douyin, RedNote, live commerce, KOL/KOC.',
  },
];

for (const img of images) {
  const out = join(root, img.file);
  await sharp(Buffer.from(svg(img)))
    .jpeg({ quality: 88, chromaSubsampling: '4:4:4' })
    .toFile(out);
  console.log('wrote', img.file);
}
