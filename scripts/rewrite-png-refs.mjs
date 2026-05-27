/**
 * Rewrite `/images/<anything>.png` references to `.webp` across source files.
 *
 * Walks src/**, replaces matches in .astro / .md / .mdx / .ts / .tsx / .js / .mjs / .json (excluded) files,
 * and reports per-file change counts. Safe to rerun.
 *
 * Excludes Lighthouse JSON reports, root-level HTML snapshots, and the
 * generate-*.mjs files at the project root (those produce PNGs).
 */

import fs from 'node:fs';
import path from 'node:path';
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';

const SRC = path.resolve('src');
const EXTS = new Set(['.astro', '.md', '.mdx', '.ts', '.tsx', '.js', '.mjs']);
// Quote, paren, newline, angle — terminate the URL. Spaces are allowed inside
// quoted URL strings (some filenames contain spaces, e.g. "Blue Insurance 1.png").
const RE = /(\/images\/[^"'`)\n<>]+?)\.png/gi;

async function walk(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function main() {
  const files = await walk(SRC);
  let touched = 0;
  let totalReplacements = 0;

  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    if (!EXTS.has(ext)) continue;

    const content = await readFile(f, 'utf-8');
    let count = 0;
    const next = content.replace(RE, (_m, base) => {
      count++;
      return `${base}.webp`;
    });
    if (count > 0 && next !== content) {
      await writeFile(f, next, 'utf-8');
      const rel = path.relative(process.cwd(), f);
      console.log(`  ${rel}: ${count} replacement(s)`);
      touched++;
      totalReplacements += count;
    }
  }

  console.log(`\nDone. Files touched: ${touched}. Total replacements: ${totalReplacements}.`);
}

main().catch((err) => {
  console.error('Rewrite failed:', err);
  process.exit(1);
});
