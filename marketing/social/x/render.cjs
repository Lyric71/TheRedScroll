// Renders avatar.html and banner.html to PNG. This repo has no Playwright, so it borrows BearingBridgeCOM's.
// repo's Playwright, then writes an X-style preview with the avatar overlaid.
const path = require('node:path');
const { createRequire } = require('node:module');
const req = createRequire('C:/Users/cyril/Project/BearingBridgeCOM/package.json');
const { chromium } = req('playwright');
const sharp = req('sharp');

const dir = __dirname;
const shots = [
  { html: 'avatar.html', out: 'theredscroll-x-avatar.png', w: 400, h: 400 },
  { html: 'banner.html', out: 'theredscroll-x-banner.png', w: 1500, h: 500 },
];

(async () => {
  const browser = await chromium.launch();
  for (const s of shots) {
    const page = await browser.newPage({ viewport: { width: s.w, height: s.h }, deviceScaleFactor: 1 });
    await page.goto('file:///' + path.join(dir, s.html).replace(/\\/g, '/'));
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(dir, s.out) });
    await page.close();
  }
  await browser.close();

  // Preview: banner at X desktop scale (600x200) with the round avatar where X puts it.
  const S = 2;
  const W = 600 * S, BH = 200 * S, A = 134 * S;
  const banner = await sharp(path.join(dir, 'theredscroll-x-banner.png')).resize(W, BH).toBuffer();
  const ring = A + 8 * S;
  const mask = Buffer.from(`<svg width="${A}" height="${A}"><circle cx="${A / 2}" cy="${A / 2}" r="${A / 2}"/></svg>`);
  const avatar = await sharp(path.join(dir, 'theredscroll-x-avatar.png')).resize(A, A)
    .composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
  const ringSvg = Buffer.from(`<svg width="${ring}" height="${ring}"><circle cx="${ring / 2}" cy="${ring / 2}" r="${ring / 2}" fill="#000"/></svg>`);
  const top = 130 * S;
  await sharp({ create: { width: W, height: BH + 120 * S, channels: 4, background: '#000000' } })
    .composite([
      { input: banner, left: 0, top: 0 },
      { input: ringSvg, left: 16 * S, top },
      { input: avatar, left: 20 * S, top: top + 4 * S },
    ])
    .png().toFile(path.join(dir, 'preview-x-profile.png'));
  console.log('done');
})();
