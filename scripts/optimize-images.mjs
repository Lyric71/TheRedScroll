/**
 * Image optimization script for TheRedScroll
 *
 * Compresses PNG and JPG/JPEG images in public/images/ using sharp.
 * - PNGs: lossy compression via palette quantization + zlib level 9
 * - JPGs: quality 80, progressive, mozjpeg encoder
 * - Skips SVGs, AVIFs, and already-optimized files (tracks via manifest)
 * - Resizes images wider than 2400px down to 2400px (preserving aspect ratio)
 *
 * Run: node scripts/optimize-images.mjs
 * Flags:
 *   --force   re-optimize every image (ignore manifest)
 */

import fs from 'node:fs';
import path from 'node:path';
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const PUBLIC_IMAGES = path.resolve('public/images');
const MANIFEST_PATH = path.resolve('scripts/.image-manifest.json');
const MAX_WIDTH = 2400;
const JPG_QUALITY = 80;
const PNG_QUALITY = 80; // sharp uses 1-100 for palette-based quantisation
const FORCE = process.argv.includes('--force');

// Extensions we optimize
const OPTIMIZABLE = new Set(['.png', '.jpg', '.jpeg']);

async function loadManifest() {
  try {
    const data = await readFile(MANIFEST_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function saveManifest(manifest) {
  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

async function collectImages(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(fullPath)));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (OPTIMIZABLE.has(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

function fileKey(filePath) {
  return path.relative(PUBLIC_IMAGES, filePath).replace(/\\/g, '/');
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalBuf = await readFile(filePath);
  const originalSize = originalBuf.length;

  let pipeline = sharp(originalBuf);

  // Get metadata to check dimensions
  const meta = await pipeline.metadata();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  let outputBuf;
  if (ext === '.png') {
    outputBuf = await pipeline
      .png({ quality: PNG_QUALITY, compressionLevel: 9, effort: 10 })
      .toBuffer();
  } else {
    // jpg / jpeg
    outputBuf = await pipeline
      .jpeg({ quality: JPG_QUALITY, progressive: true, mozjpeg: true })
      .toBuffer();
  }

  const newSize = outputBuf.length;
  const saved = originalSize - newSize;
  const pct = ((saved / originalSize) * 100).toFixed(1);

  // Only write if we actually saved space
  if (newSize < originalSize) {
    await writeFile(filePath, outputBuf);
    return { optimized: true, originalSize, newSize, saved, pct };
  }
  return { optimized: false, originalSize, newSize, saved: 0, pct: '0.0' };
}

async function main() {
  if (!fs.existsSync(PUBLIC_IMAGES)) {
    console.log('No public/images directory found. Skipping.');
    return;
  }

  console.log('Scanning for images to optimize...');
  const images = await collectImages(PUBLIC_IMAGES);
  console.log(`Found ${images.length} optimizable images.\n`);

  const manifest = FORCE ? {} : await loadManifest();
  let totalSaved = 0;
  let optimizedCount = 0;
  let skippedCount = 0;

  for (const filePath of images) {
    const key = fileKey(filePath);
    const fileStat = await stat(filePath);
    const mtimeMs = fileStat.mtimeMs;

    // Skip if already optimized and file hasn't changed
    if (manifest[key] && manifest[key].mtimeMs >= mtimeMs) {
      skippedCount++;
      continue;
    }

    try {
      const result = await optimizeImage(filePath);
      const updatedStat = await stat(filePath);

      manifest[key] = { mtimeMs: updatedStat.mtimeMs, size: result.newSize };

      if (result.optimized) {
        optimizedCount++;
        totalSaved += result.saved;
        const origKB = (result.originalSize / 1024).toFixed(0);
        const newKB = (result.newSize / 1024).toFixed(0);
        console.log(`  ${key}: ${origKB}KB -> ${newKB}KB (-${result.pct}%)`);
      } else {
        skippedCount++;
      }
    } catch (err) {
      console.error(`  Error optimizing ${key}: ${err.message}`);
    }
  }

  await saveManifest(manifest);

  const totalMB = (totalSaved / (1024 * 1024)).toFixed(2);
  console.log(`\nDone.`);
  console.log(`  Optimized: ${optimizedCount} images`);
  console.log(`  Skipped:   ${skippedCount} images (already optimized or no savings)`);
  console.log(`  Saved:     ${totalMB} MB total`);
}

main().catch((err) => {
  console.error('Image optimization failed:', err);
  process.exit(1);
});
