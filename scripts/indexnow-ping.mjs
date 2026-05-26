#!/usr/bin/env node
/**
 * IndexNow ping for Bing, Yandex, Naver, Seznam.
 * Pings the sitemap so all listed URLs get refreshed at once.
 *
 * Usage:
 *   node scripts/indexnow-ping.mjs
 *
 * Run after a production deploy, e.g. via a Vercel deploy hook or GitHub Action.
 */
const KEY = '2025f93e911e587ed9023d01cec1ce56';
const HOST = 'www.theredscroll.com';
const SITEMAP = `https://${HOST}/sitemap-index.xml`;

async function main() {
  const url = `https://api.indexnow.org/IndexNow?url=${encodeURIComponent(SITEMAP)}&key=${KEY}`;
  const res = await fetch(url, { method: 'GET' });
  console.log(`[indexnow] ${res.status} ${res.statusText}`);
  if (!res.ok && res.status !== 202) {
    const body = await res.text();
    console.error(body);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
