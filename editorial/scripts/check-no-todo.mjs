#!/usr/bin/env node
/**
 * Fails when published content carries a TODO marker.
 *
 * A publishing job never leaves a TODO behind (editorial/CLAUDE.md, "No TODO
 * leaves a run"). This check is the backstop: it scans every markdown file in
 * src/content (all collections, all locales), frontmatter, body and HTML
 * comments alike, and exits 1 on the first run that finds a marker.
 *
 *   node editorial/scripts/check-no-todo.mjs              scan src/content
 *   node editorial/scripts/check-no-todo.mjs <file>...    scan these files only
 *                                                         (the publish step runs
 *                                                         it on editorial/output/<slug>.md
 *                                                         before anything moves)
 *
 * Wired into `npm run build` through `prebuild`, so no build, local or on
 * Vercel, can ship a marker. Code comments in application source are not
 * scanned: this is about published content, not code.
 */

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = 'src/content';

// Uppercase markers only, as whole words, so prose such as "todo list" in a
// French or Spanish sentence is not caught. The phrases are the deferral
// formats earlier runs used inside drafts.
const PATTERNS = [
  { re: /\bTODO\b/, label: 'TODO' },
  { re: /\bFIXME\b/, label: 'FIXME' },
  { re: /\bTBD\b/, label: 'TBD' },
  { re: /\bTKTK\b/, label: 'TKTK' },
  { re: /\bXXX\b/, label: 'XXX' },
  { re: /OPEN TODOS?/i, label: 'open TODOs' },
  { re: /CLIENT SIGN-OFF NEEDED/i, label: 'client sign-off placeholder' },
];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else if (/\.(md|mdx)$/i.test(name)) out.push(p);
  }
  return out;
}

const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
let files;
if (args.length) {
  const missing = args.filter((f) => !existsSync(f));
  if (missing.length) {
    console.error(`check-no-todo: file not found: ${missing.join(', ')}`);
    process.exit(2);
  }
  files = args;
} else {
  files = existsSync(ROOT) ? walk(ROOT) : [];
}

const hits = [];
for (const file of files) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const { re, label } of PATTERNS) {
      if (re.test(line)) {
        hits.push(`${file.split(path.sep).join('/')}:${i + 1}  [${label}]  ${line.trim().slice(0, 140)}`);
        break;
      }
    }
  });
}

if (hits.length) {
  console.error(`check-no-todo: ${hits.length} marker(s) found.\n`);
  for (const h of hits) console.error(`  ${h}`);
  console.error(
    '\nClose each item inside the run: research it to the source standard or cut the claim,' +
      '\nthen remove the marker. Never publish with a TODO attached. See editorial/CLAUDE.md.',
  );
  process.exit(1);
}

console.log(`check-no-todo: ${files.length} file(s) clean.`);
