#!/usr/bin/env node
/**
 * convert-hero.mjs
 *
 * Converts a generated hero PNG to the webp the site serves, and refuses the
 * job if the image is soft. Required by editorial/SPEC.md, "Feature image"
 * (sharpness rule, Cyril, Sept 10, 2026).
 *
 *   node editorial/scripts/convert-hero.mjs <png> <slug> [--force]
 *
 * What it does, in order:
 *   1. Scores sharpness on the full image with a variance-of-Laplacian
 *      measure taken on the green channel of a normalized 1024px-wide copy.
 *   2. Writes a 100% (unscaled) centre crop next to the PNG as
 *      <png-basename>.crop.png, so the screens can be inspected at full size.
 *   3. Scores the crop too. A soft crop is the failure the rule is about:
 *      a whole-image score can pass while the phone screens are smeared.
 *   4. Only if both scores clear the thresholds, writes
 *      public/images/blog/<slug>.webp at quality 90, no resize, no
 *      enlargement.
 *
 * Exit codes: 0 written, 1 refused (too soft), 2 usage or read error.
 */

import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const FULL_MIN = 120; // variance-of-Laplacian floor for the whole image
const CROP_MIN = 200; // the 100% crop must be sharper than the downscaled full frame
const WEBP_QUALITY = 90;
const CROP_W = 1024;
const CROP_H = 683;

const args = process.argv.slice(2);
const force = args.includes('--force');
const [pngPath, slug] = args.filter((a) => !a.startsWith('--'));

if (!pngPath || !slug) {
  console.error('usage: node editorial/scripts/convert-hero.mjs <png> <slug> [--force]');
  process.exit(2);
}
if (!existsSync(pngPath)) {
  console.error(`convert-hero: no such file: ${pngPath}`);
  process.exit(2);
}

/** Variance of the Laplacian over the green channel. Higher is sharper. */
async function sharpness(input, { normalizeWidth } = {}) {
  let pipeline = sharp(input).removeAlpha();
  if (normalizeWidth) {
    pipeline = pipeline.resize({ width: normalizeWidth, withoutEnlargement: true });
  }
  const { data, info } = await pipeline
    .extractChannel('green')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: w, height: h } = info;
  let sum = 0;
  let sumSq = 0;
  let n = 0;
  for (let y = 1; y < h - 1; y += 1) {
    for (let x = 1; x < w - 1; x += 1) {
      const i = y * w + x;
      const lap =
        4 * data[i] - data[i - 1] - data[i + 1] - data[i - w] - data[i + w];
      sum += lap;
      sumSq += lap * lap;
      n += 1;
    }
  }
  const mean = sum / n;
  return sumSq / n - mean * mean;
}

const meta = await sharp(pngPath).metadata();
console.log(`convert-hero: source ${pngPath} (${meta.width}x${meta.height})`);

const fullScore = await sharpness(pngPath, { normalizeWidth: 1024 });
console.log(`convert-hero: full-frame sharpness ${fullScore.toFixed(1)} (floor ${FULL_MIN})`);

const cropPath = pngPath.replace(/\.png$/i, '') + '.crop.png';
const left = Math.max(0, Math.round((meta.width - CROP_W) / 2));
const top = Math.max(0, Math.round((meta.height - CROP_H) / 2));
await sharp(pngPath)
  .extract({
    left,
    top,
    width: Math.min(CROP_W, meta.width),
    height: Math.min(CROP_H, meta.height),
  })
  .png()
  .toFile(cropPath);
console.log(`convert-hero: 100% crop written to ${cropPath}`);

const cropScore = await sharpness(cropPath);
console.log(`convert-hero: crop sharpness ${cropScore.toFixed(1)} (floor ${CROP_MIN})`);

const soft = fullScore < FULL_MIN || cropScore < CROP_MIN;
if (soft && !force) {
  console.error('convert-hero: REFUSED, image is soft. Regenerate with a sharper prompt.');
  console.error('convert-hero: open the crop above before deciding. Use --force only if the crop is genuinely sharp.');
  process.exit(1);
}
if (soft && force) {
  console.warn('convert-hero: below threshold but --force given, writing anyway.');
}

const outDir = path.join('public', 'images', 'blog');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, `${slug}.webp`);

const info = await sharp(pngPath)
  .webp({ quality: WEBP_QUALITY })
  .toFile(outPath);

console.log(
  `convert-hero: wrote ${outPath} (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB, webp q${WEBP_QUALITY})`
);
console.log(`convert-hero: reference it as /images/blog/${slug}.webp`);
