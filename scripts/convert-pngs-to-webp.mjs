/**
 * One-shot PNG → WebP converter for TheRedScroll.
 *
 * Walks public/images/**, writes a .webp sibling for every .png, and
 * resizes a small set of oversized files down to their on-page footprint
 * before encoding. Existing .webp siblings are kept (rerun is idempotent
 * unless --force is passed).
 *
 * Output references swap PNG → WebP across the site after this runs.
 *
 * Run: node scripts/convert-pngs-to-webp.mjs [--force] [--delete-png]
 */

import fs from 'node:fs';
import path from 'node:path';
import { readdir, stat, readFile, writeFile, unlink } from 'node:fs/promises';
import sharp from 'sharp';

const PUBLIC_IMAGES = path.resolve('public/images');
const FORCE = process.argv.includes('--force');
const DELETE_PNG = process.argv.includes('--delete-png');

const DEFAULT_QUALITY = 78;

// Per-path overrides — keyed by POSIX-style path relative to public/images/.
// `resize.width` is enforced as a max; aspect ratio is preserved.
const OVERRIDES = {
  // LCP background, parallax — keep wider for crisp display
  'hero/hero-phones-shanghai.png': { quality: 80, maxWidth: 2000 },
  // Decorative bg at 15% opacity — quality can drop further
  'hero/why-theredscroll-bg.png':  { quality: 65, maxWidth: 2000 },
  // Team office collage tiles — resize to 2x of largest displayed footprint
  'team/china-office.png':         { quality: 78, maxWidth: 1200 },
  'team/hongkong-office.png':      { quality: 78, maxWidth: 1200 },
  'team/team-photo.png':           { quality: 78, maxWidth: 1200 },
  'team/shanghai-office.png':      { quality: 78, maxWidth: 1200 },
  // Ecosystem cards displayed at ~360x420 each
  'ecosystem/audience.png':        { quality: 75, maxWidth: 800 },
  'ecosystem/commerce.png':        { quality: 75, maxWidth: 800 },
  'ecosystem/content.png':         { quality: 75, maxWidth: 800 },
  'ecosystem/influencers.png':     { quality: 75, maxWidth: 800 },
  'ecosystem/platforms.png':       { quality: 75, maxWidth: 800 },
};

async function collectPngs(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await collectPngs(full)));
    } else if (entry.name.toLowerCase().endsWith('.png')) {
      out.push(full);
    }
  }
  return out;
}

function relKey(filePath) {
  return path.relative(PUBLIC_IMAGES, filePath).replace(/\\/g, '/');
}

async function convertOne(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, '.webp');
  const key = relKey(pngPath);

  if (!FORCE && fs.existsSync(webpPath)) {
    return { skipped: true, key };
  }

  const buf = await readFile(pngPath);
  const originalSize = buf.length;
  const override = OVERRIDES[key] ?? {};
  const quality = override.quality ?? DEFAULT_QUALITY;

  let pipeline = sharp(buf);
  const meta = await pipeline.metadata();
  if (override.maxWidth && meta.width && meta.width > override.maxWidth) {
    pipeline = pipeline.resize({ width: override.maxWidth, withoutEnlargement: true });
  }

  // Logos / palette-heavy files in clients/Logo benefit from near-lossless
  // — small files, hard edges, brand-critical
  const isLogo = key.startsWith('clients/Logo/');
  const out = isLogo
    ? await pipeline.webp({ quality: 90, effort: 6, smartSubsample: true }).toBuffer()
    : await pipeline.webp({ quality, effort: 6, smartSubsample: true }).toBuffer();

  await writeFile(webpPath, out);
  const newSize = out.length;
  const saved = originalSize - newSize;
  const pct = ((saved / originalSize) * 100).toFixed(1);

  if (DELETE_PNG) {
    await unlink(pngPath);
  }

  return { key, originalSize, newSize, saved, pct };
}

async function main() {
  if (!fs.existsSync(PUBLIC_IMAGES)) {
    console.log('No public/images directory found.');
    return;
  }

  const pngs = await collectPngs(PUBLIC_IMAGES);
  console.log(`Found ${pngs.length} PNG files.\n`);

  let converted = 0;
  let skipped = 0;
  let totalOriginal = 0;
  let totalNew = 0;

  for (const png of pngs) {
    try {
      const r = await convertOne(png);
      if (r.skipped) {
        skipped++;
        continue;
      }
      converted++;
      totalOriginal += r.originalSize;
      totalNew += r.newSize;
      const origKB = (r.originalSize / 1024).toFixed(0);
      const newKB = (r.newSize / 1024).toFixed(0);
      console.log(`  ${r.key}: ${origKB}KB -> ${newKB}KB (-${r.pct}%)`);
    } catch (err) {
      console.error(`  Error on ${relKey(png)}: ${err.message}`);
    }
  }

  const savedMB = ((totalOriginal - totalNew) / (1024 * 1024)).toFixed(2);
  console.log(`\nDone.`);
  console.log(`  Converted:    ${converted}`);
  console.log(`  Skipped:      ${skipped} (existing .webp)`);
  console.log(`  Total saved:  ${savedMB} MB`);
  if (DELETE_PNG) console.log(`  Source PNGs deleted.`);
}

main().catch((err) => {
  console.error('Conversion failed:', err);
  process.exit(1);
});
