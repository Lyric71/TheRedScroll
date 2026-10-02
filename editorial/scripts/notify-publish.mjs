#!/usr/bin/env node
/**
 * Publish notification for the editorial pipeline. Sends one email through
 * Resend (the same provider the contact form uses) when an article has been
 * published. No npm dependencies: native fetch, Node 18+.
 *
 * Run from the repo root:
 *
 *   node editorial/scripts/notify-publish.mjs --slug <slug> --title "<title>"
 *        [--section insights|industries|tools] [--to <email>]
 *        [--image /images/blog/<slug>.webp] [--build passed|failed]
 *        [--log editorial/logs/YYYY-MM-DD.md] [--note "<text>"]
 *
 * The email never carries a TODO or an open item. A publish run closes every
 * item it finds before it publishes, or it stops without publishing (see
 * editorial/CLAUDE.md, "No TODO leaves a run"). The script refuses to send
 * when it is given --todo, --open, --followup, or a --note that reads like
 * an open item list.
 *
 * Locale URLs are derived from which content files exist for the slug:
 * Uses the live localized section routes for insights, industries and tools.
 *
 * RESEND_API_KEY is read from .env.local / .env in the current directory or
 * from the environment. Pass --dry-run to print the email without sending.
 */

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const SITE = 'https://www.theredscroll.com';
// Resend is in testing mode: it only delivers to the account owner's address.
// Switch to cyril.drouin@gmail.com once a sending domain is verified at
// resend.com/domains and FROM uses that domain.
const DEFAULT_TO = 'cyril.drouin@outlook.com';
const FROM = 'TheRedScroll <onboarding@resend.dev>';

function loadEnv() {
  for (const file of ['.env.local', '.env']) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!m || process.env[m[1]]) continue;
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

// Options that used to carry open items into the email. They are refused,
// not ignored, so a run that tries to defer work fails loudly.
const REFUSED_OPTIONS = ['todo', 'todos', 'open', 'open-item', 'open-items', 'followup', 'follow-up'];
const OPEN_ITEM_PATTERN = /\b(TODO|FIXME|TBD)\b|open items?|for a person|phase 2|follow[ -]?ups?\b/i;

function parseArgs(argv) {
  const out = { refused: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    if (key === 'dry-run') { out.dryRun = true; continue; }
    if (REFUSED_OPTIONS.includes(key)) out.refused.push(key);
    const val = argv[i + 1];
    if (val === undefined || val.startsWith('--')) { out[key] = true; continue; }
    out[key] = val;
    i++;
  }
  return out;
}

function localeUrls(slug, section) {
  const routes = {
    insights: { en: '/insights', fr: '/fr/decryptages', zh: '/zh/guandian', de: '/de/analysen', es: '/es/analisis' },
    industries: { en: '/industries', fr: '/fr/secteurs', zh: '/zh/hangye', de: '/de/branchen', es: '/es/sectores' },
    tools: { en: '/tools', fr: '/fr/outils', zh: '/zh/gongju', de: '/de/tools', es: '/es/herramientas' },
  };
  if (!routes[section]) throw new Error(`Unknown section: ${section}`);
  const collection = section === 'insights' ? 'blog' : section;
  return Object.entries(routes[section])
    .filter(([lang]) => existsSync(path.join('src', 'content', `${collection}${lang === 'en' ? '' : `-${lang}`}`, `${slug}.md`)))
    .map(([lang, route]) => ({ lang, url: `${SITE}${route}/${slug}/` }));
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

async function main() {
  loadEnv();
  const args = parseArgs(process.argv.slice(2));
  if (!args.slug || !args.title) {
    console.error('Usage: node editorial/scripts/notify-publish.mjs --slug <slug> --title "<title>" [options]');
    process.exit(2);
  }
  if (args.refused.length) {
    console.error(`Refused: --${args.refused.join(', --')}. The publish email carries no TODO or open item.`);
    console.error('Close the item inside the run, or stop before publishing. See editorial/CLAUDE.md, "No TODO leaves a run".');
    process.exit(2);
  }
  if (args.note && OPEN_ITEM_PATTERN.test(String(args.note))) {
    console.error('Refused: --note reads like an open item (TODO, FIXME, TBD, open items, follow up, for a person, Phase 2).');
    console.error('Close the item inside the run, or stop before publishing. See editorial/CLAUDE.md, "No TODO leaves a run".');
    process.exit(2);
  }
  const section = args.section || 'insights';
  const to = args.to || DEFAULT_TO;
  const urls = localeUrls(args.slug, section);
  const when = new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai', hour12: false });

  const lines = [
    `Published: ${args.title}`,
    '',
    `Slug: ${args.slug}`,
    `Section: /${section}/`,
    `Time (Shanghai): ${when}`,
    '',
    'Live URLs:',
    ...(urls.length ? urls.map((u) => `  ${u.lang}  ${u.url}`) : ['  none found in src/content for this slug']),
    '',
    `Hero image: ${args.image || `/images/blog/${args.slug}.webp`}`,
    `Build: ${args.build || 'not reported'}`,
    `Run log: ${args.log || 'not reported'}`,
  ];
  if (args.note) lines.push('', `Note: ${args.note}`);
  const text = lines.join('\n');

  const html = `
<div style="font-family:Inter,-apple-system,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#FFFFFF;color:#1A1A1A;">
  <p style="font-size:11px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:#CC3333;margin:0 0 8px;">Editorial system</p>
  <h1 style="font-size:22px;font-weight:500;line-height:1.25;margin:0 0 24px;">Published: ${esc(args.title)}</h1>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    <tr><td style="padding:8px 0;color:#5C5C5C;width:130px;border-bottom:0.5px solid #E8E0D8;">Slug</td><td style="padding:8px 0;border-bottom:0.5px solid #E8E0D8;">${esc(args.slug)}</td></tr>
    <tr><td style="padding:8px 0;color:#5C5C5C;border-bottom:0.5px solid #E8E0D8;">Section</td><td style="padding:8px 0;border-bottom:0.5px solid #E8E0D8;">/${esc(section)}/</td></tr>
    <tr><td style="padding:8px 0;color:#5C5C5C;border-bottom:0.5px solid #E8E0D8;">Time (Shanghai)</td><td style="padding:8px 0;border-bottom:0.5px solid #E8E0D8;">${esc(when)}</td></tr>
    <tr><td style="padding:8px 0;color:#5C5C5C;border-bottom:0.5px solid #E8E0D8;vertical-align:top;">Live URLs</td><td style="padding:8px 0;border-bottom:0.5px solid #E8E0D8;line-height:1.8;">${
      urls.length ? urls.map((u) => `<span style="color:#5C5C5C;">${u.lang}</span> <a href="${u.url}" style="color:#CC3333;text-decoration:none;">${u.url}</a>`).join('<br/>') : 'none found in src/content for this slug'
    }</td></tr>
    <tr><td style="padding:8px 0;color:#5C5C5C;border-bottom:0.5px solid #E8E0D8;">Hero image</td><td style="padding:8px 0;border-bottom:0.5px solid #E8E0D8;">${esc(args.image || `/images/blog/${args.slug}.webp`)}</td></tr>
    <tr><td style="padding:8px 0;color:#5C5C5C;border-bottom:0.5px solid #E8E0D8;">Build</td><td style="padding:8px 0;border-bottom:0.5px solid #E8E0D8;">${esc(args.build || 'not reported')}</td></tr>
    <tr><td style="padding:8px 0;color:#5C5C5C;">Run log</td><td style="padding:8px 0;">${esc(args.log || 'not reported')}</td></tr>
  </table>
  ${args.note ? `<p style="font-size:14px;line-height:1.6;margin:24px 0 0;">${esc(args.note)}</p>` : ''}
</div>`;

  const payload = { from: FROM, to: [to], subject: `Published: ${args.title}`, text, html };

  if (args.dryRun) {
    console.log(text);
    console.log(`\n[dry run] would send to ${to}`);
    return;
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('RESEND_API_KEY missing. Add it to .env at the repo root.');
    process.exit(1);
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error(`Resend error ${res.status}: ${JSON.stringify(data)}`);
    process.exit(1);
  }
  console.log(`Sent to ${to} (id ${data.id || 'n/a'})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
