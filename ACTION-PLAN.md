# TheRedScroll — SEO Action Plan

**Source:** [FULL-AUDIT-REPORT.md](FULL-AUDIT-REPORT.md)
**Overall Health Score:** 72 / 100
**Generated:** 2026-05-26

Issues are ordered by leverage (impact × effort). Most "Critical" items here are one-line config fixes.

---

## CRITICAL (fix today — under 30 minutes total)

### 1. Fix the apex/www domain mismatch
**Effort:** 2 minutes + redeploy
**Impact:** Lifts Technical (72→85), Schema (72→78), Sitemap (61→78), On-Page (73→82) simultaneously.

```diff
- // astro.config.mjs line 35
- site: 'https://theredscroll.com',
+ site: 'https://www.theredscroll.com',
```

```diff
- // src/layouts/BaseLayout.astro line 30
- const siteUrl = 'https://theredscroll.com';
+ const siteUrl = 'https://www.theredscroll.com';
```

```diff
- # public/robots.txt last line
- Sitemap: https://theredscroll.com/sitemap-index.xml
+ Sitemap: https://www.theredscroll.com/sitemap-index.xml
```

Also fix the URLs in [public/llms.txt](public/llms.txt) — search-replace `theredscroll.com` → `www.theredscroll.com` everywhere.

Verify after deploy:
```bash
curl -sI https://www.theredscroll.com/ | grep -i canonical
curl -s https://www.theredscroll.com/sitemap.xml | grep -oE 'https://[^<]+' | head -3
```

Resubmit sitemap in Search Console (Settings → Sitemaps → resubmit `sitemap-index.xml`).

---

### 2. Add baseline security headers to `vercel.json`
**Effort:** 5 minutes
**Impact:** Lifts Security (Technical sub-score) from 52 → 90.

Add to [vercel.json](vercel.json) `headers` array:

```json
{
  "source": "/(.*)",
  "headers": [
    { "key": "X-Content-Type-Options", "value": "nosniff" },
    { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
    { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
    { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
  ]
}
```

CSP is worth doing but should be `Content-Security-Policy-Report-Only` first to inventory script sources (Clarity tag, `_astro/` bundles). Not required for this initial pass.

---

### 3. Add `sameAs` and `Person` (founder) schema
**Effort:** 10 minutes
**Impact:** Direct E-E-A-T lift; Schema category 72 → 85; AI Search Readiness category 72 → 78.

In [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro), inside `orgSchema`:

```json
"sameAs": ["https://www.linkedin.com/company/theredscroll"]
```

Replace with the actual LinkedIn URL. If a Twitter/X or Crunchbase profile exists, include those too.

In the same file, add a new `personSchema` to the `allSchemas` array:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.theredscroll.com/#founder",
  "name": "Cyril Drouin",
  "jobTitle": "Founder and CEO",
  "worksFor": { "@id": "https://www.theredscroll.com/#organization" },
  "url": "https://www.theredscroll.com/about",
  "sameAs": ["https://www.linkedin.com/in/cyrildrouin"]
}
```

Update Organization `founder` ref to `{ "@id": "https://www.theredscroll.com/#founder" }`.

---

## HIGH (this week — under 4 hours total)

### 4. Add author bylines to every `insights/` article
**Effort:** ~2 hours (template edit + frontmatter for 7 posts)
**Impact:** Largest single E-E-A-T lift available. Directly addresses Bing Copilot and Google AIO authority weighting.

In [src/layouts/BlogLayout.astro](src/layouts/BlogLayout.astro), add a byline block beneath H1:

```astro
<p class="byline">
  By <a href="/about">Cyril Drouin</a>, former CEO of Publicis Commerce China &amp; North Asia, writing from Shanghai.
  <span>Published {publishDate} · Updated {updatedDate ?? publishDate}</span>
</p>
```

Add `updatedDate` (optional) to the insights content collection schema in [src/content/config.ts](src/content/config.ts) so `dateModified` populates in `BlogPosting` schema. Then update the `articleSchema` call in [src/pages/insights/[...slug].astro](src/pages/insights/%5B...slug%5D.astro):

```ts
const postSchema = articleSchema({
  ...
  dateModified: post.data.updatedDate
    ? new Date(post.data.updatedDate).toISOString()
    : new Date(post.data.publishDate).toISOString(),
  authorName: post.data.author === 'TheRedScroll' ? undefined : post.data.author,
});
```

---

### 5. Fix the two broken hreflang clusters
**Effort:** ~30 minutes investigation + ~1 hour (whichever fix path)
**Impact:** Removes 4 URLs from hreflang error reports.

- `/ai/` page: present in `src/pages/` but absent from sitemap → FR + ZH `/ai/` emit incomplete hreflang. Either add the EN page to the sitemap (check for `noindex` or filter exclusion) or remove the `en` alternate from the FR/ZH `/ai/` pages.
- `/zh/services/market-entry/` is missing → 2 URLs emit hreflang without ZH alternate. Either create the ZH page or strip the `zh-Hans` alternate from `/services/market-entry/` and its FR sibling.

---

### 6. Deploy the `0 out of 37` differentiator across decision-stage pages
**Effort:** 1–2 hours
**Impact:** SXO category 50 → 65+. Procurement and CMO personas served on every page they land on, not just the homepage.

Add a single sentence or a small callout module to:
- [src/pages/pricing.astro](src/pages/pricing.astro)
- [src/pages/platforms/wechat.astro](src/pages/platforms/wechat.astro)
- [src/pages/platforms/rednote.astro](src/pages/platforms/rednote.astro)
- [src/pages/services/market-entry.astro](src/pages/services/market-entry.astro)

Suggested copy: "Across 37 China social agencies we benchmarked in April 2026, 0 offer fixed scope and fixed price. We do."

---

### 7. Verify meta descriptions across all pages
**Effort:** 30 minutes
**Impact:** Direct CTR lift on any organic position currently held.

Homepage was confirmed to have a meta description; SXO flagged absence on WeChat, RedNote, and market-entry pages (with low confidence — its own limitations noted the WebFetch output didn't render head tags reliably). Sample-fetch each page in browser DevTools or via:

```bash
for p in / /platforms/wechat/ /platforms/rednote/ /services/market-entry/ /insights/kol-vs-koc-china-influencer-guide/; do
  echo "=== $p ===";
  curl -s "https://www.theredscroll.com$p" | grep -oE 'name="description" content="[^"]+"' | head -1;
done
```

Add `metaDescription` to any page returning empty. For insights, add to the content collection schema.

---

## MEDIUM (this month — under 1 day total)

### 8. Create `/llms-full.txt`
**Effort:** 2–3 hours (one-time build script + concat)
**Impact:** GEO category 72 → 82. Biggest GEO lever after fixing `llms.txt` apex URLs.

Concatenate full text of:
- All 7 insights articles
- The 4 main platform pages (WeChat, Douyin, RedNote, Weibo)
- About page

Build as a separate Astro endpoint at `src/pages/llms-full.txt.ts` that reads the content collection at build time and emits plain text.

---

### 9. Enrich `llms.txt` factual anchors
**Effort:** 15 minutes
**Impact:** Citation-ready proprietary data exposed to AI crawlers.

Add to the `## Factual anchors` section of [public/llms.txt](public/llms.txt):

- Camper case: 43K → 187K Douyin followers, 31% sales lift, 18 months
- Mission Foods case (market entry, name + outcome)
- 37-agency benchmark methodology one-liner: how agencies were selected, geographic scope, date range
- Cost benchmark: Tmall Global entry ¥100K+ vs social-first ¥15–30K/month

Move "Founder: Cyril Drouin, former CEO Publicis Commerce and Performance Marketing, China and North Asia" into the opening two-sentence description so one-paragraph AI summaries include the credential.

Add ZH and FR platform URLs to the multilingual section.

---

### 10. Strip `changefreq` + `priority` from sitemap; fix `lastmod`
**Effort:** 10 minutes
**Impact:** Cleaner sitemap; per-page `lastmod` gives Google a real recency signal.

In [astro.config.mjs](astro.config.mjs), remove `changefreq: 'weekly'` and `priority: 0.7` from the sitemap integration config. Replace the global `lastmod: new Date()` with a `serialize` callback that pulls per-page modification times from the content collections (or git `mtime` for static pages).

---

### 11. Build a `/why-fixed-price` (or `/agency-model`) page
**Effort:** 4–6 hours (page design + copy + schema)
**Impact:** Intercepts decision-stage buyers; only missing page type in the SXO audit; no direct competitor equivalent in SERP.

Page structure:
1. Hero: the 0-of-37 stat with date + methodology link
2. The agency-model problem: time-and-materials creep, scope ambiguity, opaque pricing
3. Our model: fixed scope, fixed price, written into the contract
4. What you get vs what competitors hide
5. Procurement-friendly fact sheet (downloadable PDF or inline)
6. CTA: book a call

Target query cluster: "China social media agency pricing transparency", "fixed price China marketing agency", "agency pricing model comparison".

---

### 12. Add FAQ JSON-LD on service and platform pages
**Effort:** 1 hour
**Impact:** AI Overviews extraction. FAQ content already exists on market-entry, WeChat, RedNote — just wrap in schema using existing `faqPageSchema` helper in [src/lib/schema.ts](src/lib/schema.ts).

Note: Google rich-results restriction (Aug 2023) means no visual rich result for commercial sites. Value is in AI/LLM citation, not SERP appearance.

---

### 13. Beef up KOL vs KOC guide
**Effort:** 3–5 hours
**Impact:** Direct ranking lift on a query where the page is already on-topic but thin (1,800 vs 2,500–4,000 words on ranking pages).

Add:
- Visual comparison table (KOL vs KOC vs KOS attributes — reach, cost, conversion, content style, platforms, sample brands)
- Platform-specific breakdown (KOL/KOC dynamics on Douyin vs RedNote vs WeChat)
- Decision framework: "use KOC when…", "use KOL when…"
- Compensation cost ranges (already partially present)
- Update publish date when reissued

---

## LOW (backlog — pick up between bigger work)

### 14. Fix invalid `industry` property in caseStudySchema
[src/lib/schema.ts:98](src/lib/schema.ts#L98) → replace `industry` with `knowsAbout` (or remove). Rich Results Test warning, not a ranking issue.

### 15. Add `CollectionPage` + `ItemList` schema to Insights index
[src/pages/insights.astro](src/pages/insights.astro). Use existing `PageLayout` `schema` prop. Helps Google understand the archive structure.

### 16. Add `loading="eager" fetchpriority="high"` to LCP image on inner pages
Hero images on platform and service pages (homepage LCP is the H1 text, low risk).

### 17. Enable HSTS preload
Update HSTS header to include `includeSubDomains; preload`, then submit at hstspreload.org. Confirm all subdomains are HTTPS-only first.

### 18. Implement IndexNow
Generate a key at bing.com/indexnow, add `<key>.txt` to [public/](public/), declare in robots.txt, ping on deploys for Bing/Yandex.

### 19. Verify and remove keyframe animations in `about.astro`
DESIGN_GUIDE bans keyframe animations. Content audit flagged this as a possible violation. If present, replace with CSS transitions.

### 20. Add `H1` candidate optimization for platform pages
Anchor H1 on buyer job, not platform stats. Example for WeChat: "Run your WeChat brand account without getting ripped off" (or in TheRedScroll voice). The 1.4B-user stat moves to the lede beneath.

---

## Tracking checklist

```
[ ] 1. astro.config.mjs + BaseLayout.astro site URL fix
[ ] 2. vercel.json security headers
[ ] 3. sameAs + Person schema for founder
[ ] 4. Author bylines on insights
[ ] 5. Two broken hreflang clusters fixed
[ ] 6. 0/37 stat deployed on pricing + 3 platform/service pages
[ ] 7. Meta descriptions verified across all pages
[ ] 8. llms-full.txt created
[ ] 9. llms.txt factual anchors enriched
[ ] 10. Sitemap changefreq/priority removed; per-page lastmod
[ ] 11. /why-fixed-price page shipped
[ ] 12. FAQ JSON-LD on service + platform pages
[ ] 13. KOL/KOC guide expanded
[ ] 14. caseStudySchema industry → knowsAbout
[ ] 15. CollectionPage schema on /insights
[ ] 16. fetchpriority on inner-page hero images
[ ] 17. HSTS preload
[ ] 18. IndexNow
[ ] 19. about.astro keyframes verified/removed
[ ] 20. Platform page H1s rewritten to buyer job
```

Re-run `/seo audit https://www.theredscroll.com` after completing items 1–6 to confirm score lift.
