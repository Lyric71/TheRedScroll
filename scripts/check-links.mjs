#!/usr/bin/env node
/**
 * WO-3.2 — keep the outbound group links honest.
 *
 * Two failure modes this catches:
 *
 *  1. A sister site linked on a non-canonical host. Each one costs a redirect
 *     hop, and a wrong TLD is a plain 404 that nobody notices because footers
 *     are the last thing anyone clicks in testing.
 *  2. A link to a retired host. Compass moved off bearingbridge.com; anything
 *     still pointing there sends visitors through somebody else's redirect.
 *
 * It also asserts the reciprocal link exists at all: the group only reads as a
 * group if each site names the others in its own pages.
 *
 *   node scripts/check-links.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const EXTENSIONS = ['.astro', '.ts', '.tsx', '.mjs', '.js', '.md', '.mdx'];

/** Canonical host per sister site, from each repo's astro.config.mjs `site:`. */
const CANONICAL_HOSTS = {
  'thechinapath.com': 'https://www.thechinapath.com',
  'chinawebfoundry.com': 'https://www.chinawebfoundry.com',
  'hubstudio.ai': 'https://www.hubstudio.ai',
  'beyondbridge.ai': 'https://www.beyondbridge.ai',
  'bearingbridge.com': 'https://www.bearingbridge.com',
};

const RETIRED_HOSTS = [
  'compass.bearingbridge.com',
  'beyondcompass.beyondbordergroup.com',
  // Does not resolve. BeyondBridge is at www.beyondbridge.ai; the group
  // site is www.bearingbridge.com. They are different companies.
  'beyondbridge.com',
];

/** Every one of these must appear somewhere in src/. */
const REQUIRED_LINKS = ['https://www.thechinapath.com', 'https://www.chinawebfoundry.com'];

const ALLOWED = ['scripts/check-links.mjs'];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXTENSIONS.some((e) => entry.endsWith(e))) out.push(full);
  }
  return out;
}

const problems = [];
const seen = new Set();

for (const file of walk(join(ROOT, 'src'))) {
  const rel = relative(ROOT, file).split('\\').join('/');
  const allowed = ALLOWED.includes(rel);
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);

  lines.forEach((line, i) => {
    const at = `${rel}:${i + 1}`;

    for (const [bare, canonical] of Object.entries(CANONICAL_HOSTS)) {
      if (line.includes(canonical)) seen.add(canonical);
      const wrong = new RegExp(`https://(?!www\\.)${bare.replace(/\./g, '\\.')}`);
      if (wrong.test(line)) {
        problems.push(`${at}  non-canonical host, use ${canonical}\n    ${line.trim()}`);
      }
    }

    if (!allowed) {
      for (const host of RETIRED_HOSTS) {
        if (line.includes(host)) {
          problems.push(`${at}  retired host "${host}"\n    ${line.trim()}`);
        }
      }
    }
  });
}

for (const required of REQUIRED_LINKS) {
  if (!seen.has(required)) {
    problems.push(`missing reciprocal link to ${required} anywhere in src/`);
  }
}

if (problems.length) {
  console.error(`\n${problems.length} link problem(s):\n`);
  for (const p of problems) console.error('  ' + p + '\n');
  process.exit(1);
}

console.log('Links OK: canonical sister hosts, no retired hosts, reciprocal links present.');
