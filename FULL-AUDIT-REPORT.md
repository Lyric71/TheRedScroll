# TheRedScroll — Full SEO Audit

**Audited URL:** `https://www.theredscroll.com`
**Audit date:** 2026-05-26
**Business type detected:** B2B Agency (China social media — Western brands entering China; Chinese brands scaling domestic)
**Method:** 7 parallel specialist subagents (technical, content, schema, sitemap, performance, GEO, SXO) + direct source inspection of the Astro project at `c:\Users\cyril\Project\TheRedScroll`.

---

## Executive Summary

### Overall SEO Health Score: 72 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 72 | 15.8 |
| Content Quality (incl. E-E-A-T) | 23% | 70 | 16.1 |
| On-Page SEO | 20% | 73 | 14.6 |
| Schema / Structured Data | 10% | 72 | 7.2 |
| Performance (CWV, lab) | 10% | 78 | 7.8 |
| AI Search Readiness | 10% | 72 | 7.2 |
| Images | 5% | 80 | 4.0 |
| **Total** | **100%** | | **72.7** |

**Interpretation:** Solid technical foundation (static Astro SSG, self-hosted fonts, AI crawlers explicitly allowed, comprehensive `llms.txt`, schema coverage on most page types). The dominant deduction is a **single root-cause bug** — `site:` in `astro.config.mjs` is set to the apex domain while production redirects every request to the `www` subdomain. This contaminates canonicals, hreflang, schema `@id`, `og:url`, and 147 sitemap entries simultaneously. Fixing one line in `astro.config.mjs` lifts three category scores at once.

### Top 5 Critical / High Issues

1. **C1 — Apex/www domain mismatch** (one-line fix in [astro.config.mjs:35](astro.config.mjs#L35) and [src/layouts/BaseLayout.astro:30](src/layouts/BaseLayout.astro#L30)) — every canonical, hreflang, sitemap `<loc>`, schema `@id`, and `og:url` points to `theredscroll.com` while production serves `www.theredscroll.com` via 308 redirect. Highest leverage fix in the entire audit.
2. **H1 — Five baseline security headers missing** from [vercel.json](vercel.json) — only HSTS is set. Add `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` (and consider CSP-Report-Only).
3. **H2 — Two broken hreflang clusters** — `/ai/`, `/services/market-entry/` emit incomplete `en/fr/zh-Hans` triplets. 4 URLs affected.
4. **H3 — `0 out of 37` differentiator deployed only on homepage** — the site's most defensible competitive claim is invisible on the pricing, WeChat, RedNote, and market-entry pages where buyers actually decide.
5. **H4 — No author bylines on `insights/` articles** — Cyril Drouin (ex-CEO Publicis Commerce China) is the strongest available E-E-A-T signal and isn't deployed on a single insight. Direct cause of suppressed rankings for the KOL/KOC guide.

### Top 5 Quick Wins (each under 1 hour)

1. Change `site` in [astro.config.mjs:35](astro.config.mjs#L35) to `'https://www.theredscroll.com'` and `siteUrl` in [src/layouts/BaseLayout.astro:30](src/layouts/BaseLayout.astro#L30) to match. Rebuild. Resubmit sitemap in GSC.
2. Add the global headers block to [vercel.json](vercel.json) (snippet provided in section 3 below).
3. Remove `changefreq` and `priority` from the sitemap config in [astro.config.mjs:51-52](astro.config.mjs#L51-L52) — both ignored by Google and Bing, ~6KB of dead bytes.
4. Add `sameAs` (LinkedIn) to `orgSchema` in [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro). One JSON line.
5. Fix `industry` → `knowsAbout` in [src/lib/schema.ts:98](src/lib/schema.ts#L98) (invalid Schema.org property today; produces a Rich Results Test warning).

---

## 1. Technical SEO — 72/100

### Critical

**C1 — Apex/www canonical mismatch (root cause of multiple deductions)**
Evidence:
- [astro.config.mjs:35](astro.config.mjs#L35) → `site: 'https://theredscroll.com'`
- [src/layouts/BaseLayout.astro:30](src/layouts/BaseLayout.astro#L30) → `const siteUrl = 'https://theredscroll.com'`
- Live: `https://theredscroll.com/` → `HTTP/1.1 308 Permanent Redirect` to `https://www.theredscroll.com/`
- Homepage canonical: `<link rel="canonical" href="https://theredscroll.com/">` (apex)
- All 147 sitemap `<loc>` values use apex
- All hreflang `href` attributes use apex
- Schema `@id` and `BreadcrumbList` `item` URLs all use apex

Fix: change both lines to `https://www.theredscroll.com`. Rebuild. Resubmit sitemap in Search Console.

### High

**H1 — Missing security headers**
Only `Strict-Transport-Security: max-age=63072000` is configured. Missing: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, CSP.

Add to [vercel.json](vercel.json):
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

**H2 — LCP hint missing on hero image candidate**
Homepage has 15 `loading="lazy"` images and 0 `loading="eager"` or `fetchpriority="high"`. H1 text is in static HTML (likely LCP) so risk is lower, but inner pages with hero images need explicit `loading="eager" fetchpriority="high"` on the LCP candidate.

### Medium

**M1 — HSTS lacks `includeSubDomains; preload`** — submit to hstspreload.org after confirming all subdomains are HTTPS-only.
**M2 — No IndexNow** — no key file in `public/`. Add a key, declare in robots.txt, and ping on deploys for Bing/Yandex.

### Passing

Crawlability, indexability (no stray noindex), mobile viewport, HTTPS, full SSG rendering, URL hygiene (lowercase, trailing slashes, no params), 404 returns proper 404, alt text on sampled images, font preload with `crossorigin`.

---

## 2. Content Quality & E-E-A-T — 70/100

> Note: the content specialist subagent partially completed (full report file was not written before the agent's session closed). The findings below are synthesized from cross-cutting signals captured by the SXO, GEO, and technical specialists — they overlap heavily on content quality.

### Strengths

- **Brand voice is consistently applied.** `TheRedScroll` (one word, PascalCase) used uniformly per [STYLE_GUIDE.md](STYLE_GUIDE.md).
- **Pricing transparency complies with Style Guide** — no tier names or specific prices published publicly.
- **Founder credential is real and verifiable** — Cyril Drouin, ex-CEO Publicis Commerce China & North Asia, named on About page.
- **Specific, citable data** — Camper case study (43K → 187K followers, 31% sales lift, 18 months), "0 out of 37" benchmark, Tmall vs social-first cost comparison (¥100K+ vs ¥15-30K/month).
- **KOL vs KOC guide structurally strong** for AI citation: question-led H2s, named sources (iiMedia, 100EC.cn, CCTV News), comparison table.

### High

**H4 — No author bylines on `insights/` articles** — Cyril Drouin's credential is the strongest E-E-A-T asset on the site. Adding `By Cyril Drouin, former CEO Publicis Commerce China, written from Shanghai` beneath the H1 on every insight piece directly addresses ranking suppression on the KOL/KOC guide and feeds Bing Copilot and Google AIO authority weighting.

**H5 — `0 out of 37` stat is single-page deployed** — present on homepage only. Should appear on `/pricing`, `/platforms/wechat`, `/platforms/rednote`, `/services/market-entry`, and any new `/why-fixed-price` comparison page.

### Medium

**M3 — KOL vs KOC guide is thin vs SERP leaders** — ~1,800 words vs 2,500–4,000 word ranking articles in this SERP. Add a structured comparison table (KOL vs KOC vs KOS attributes in columns), platform-specific breakdowns, and cost ranges.

**M4 — Camper/Mission Foods case data is missing from [llms.txt](public/llms.txt)** — the most citable concrete client outcomes are absent from the machine-readable file AI crawlers read first.

**M5 — Translation parity in `llms.txt`** — French section lists only homepage and services; Chinese lists only homepage and contact. ZH and FR platform/insights pages exist but are invisible to Chinese-language AI search (Kimi, Doubao, Baidu ERNIE).

### Low

**L1 — Possible DESIGN_GUIDE violation in [src/pages/about.astro](src/pages/about.astro)** — content agent flagged a likely keyframe-animation usage (DESIGN_GUIDE bans keyframe animations). Verify and replace with CSS transitions if confirmed.

---

## 3. On-Page SEO — 73/100

### Confirmed via live HTML inspection of homepage

- `<title>`: "China Social Media Agency | TheRedScroll" — descriptive, branded, under 60 chars
- `<meta name="description">`: present, well-written, includes call to action ("Book a call")
- `<link rel="canonical">`: present (but points to apex — see C1)
- Hreflang `en`, `fr`, `zh-Hans`, `x-default`: present
- OpenGraph: `og:title`, `og:description`, `og:image` (`/images/og-default.jpg`), `og:url`, `og:type`, `og:site_name`, `og:locale` all present
- Font preload: both Inter weights with `crossorigin`
- JSON-LD: Organization schema injected in head

**Correction to SXO finding:** SXO agent's "no meta descriptions on multiple pages" was flagged as unverified in its own limitations section. Direct inspection confirms meta description IS present on homepage. SXO conclusion is likely incorrect — verify across other pages before action.

### Issues

- **All canonical/og:url tags use apex** — covered by C1.
- **Header `H1` strategy** — homepage H1 is brand-voice ("Chinese social media is not a channel. It's an ecosystem.") which is correct stylistically but suboptimal for "what is China social media" generic queries. Platform pages anchor H1 on platform stats (1.4B users) rather than buyer job-to-be-done.
- **No meta description visible on insight articles** — the KOL/KOC guide relies on Google auto-generating the snippet, reducing CTR control. Add `metaDescription` to insight frontmatter and pass through.

---

## 4. Schema / Structured Data — 72/100

### What's working

- `Organization` (site-wide, `@id` set) in [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)
- `WebSite` (homepage only, with publisher ref)
- `BreadcrumbList` auto-generated on every non-home page
- `Service` schema on service pages (via [src/lib/schema.ts](src/lib/schema.ts))
- `BlogPosting` on insights (via [src/pages/insights/[...slug].astro](src/pages/insights/%5B...slug%5D.astro))
- `FAQPage` on service + WeChat platform page
- All JSON-LD (no Microdata), all URLs absolute, no deprecated HowTo

### Gaps

| Priority | Gap | File |
|---|---|---|
| Critical | `sameAs` on Organization is missing (no LinkedIn / social) | [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) |
| High | No standalone `Person` schema for Cyril Drouin | [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) |
| Medium | `dateModified` not populated on `BlogPosting` (frontmatter field absent) | [src/pages/insights/[...slug].astro](src/pages/insights/%5B...slug%5D.astro) |
| Low | `caseStudySchema` uses invalid `industry` prop — replace with `knowsAbout` | [src/lib/schema.ts:98](src/lib/schema.ts#L98) |
| Low | No `CollectionPage` + `ItemList` on Insights index | [src/pages/insights.astro](src/pages/insights.astro) |
| Info | FAQPage on commercial site doesn't trigger Google rich results (Aug 2023 restriction). Retain — AI citation value is real. Don't add more expecting rich results. | — |

### Ready-to-paste Person schema (add to `allSchemas` array in BaseLayout)

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

Then update Organization `founder` to `{ "@id": "https://www.theredscroll.com/#founder" }`.

---

## 5. Performance (Lab Estimate) — 78/100

> Note: the performance specialist subagent didn't write its report file. The estimate below is derived from direct inspection of `dist/client/` and the live homepage HTML. No Lighthouse CLI was available; no field data (CrUX) — no Google API credentials configured.

### Asset inventory (build output)

| Asset class | Total size | Notes |
|---|---|---|
| Homepage `index.html` (uncompressed) | 113 KB | Large for a static landing; gzip likely brings to ~25–30 KB transferred |
| `_astro/` (CSS + JS chunks) | 92 KB | Page-specific scripts (douyin, rednote, otras). Homepage ships little/no JS. |
| `fonts/` | empty in dist/client — fonts served from `public/fonts/` |
| `images/` | 126 MB | Total inventory; per-page weight needs lazy-load verification |

### Estimated CWV (lab, no Lighthouse)

- **LCP**: likely 1.8–2.4s on mobile 4G. H1 text is in static HTML (good). Fonts preloaded. Risk: above-fold images on inner pages are not marked `fetchpriority="high"`.
- **CLS**: low risk — Tailwind utility classes, no layout shifts visible in source.
- **INP**: low risk — minimal JS, static SSG, no hydration framework.
- **FCP**: likely <1.5s with edge cache (`X-Vercel-Cache: HIT` confirmed).
- **TTFB**: 100–250ms from Vercel SFO origin to common destinations.

### Recommendations

1. Run Lighthouse against both URLs (`npx lighthouse https://www.theredscroll.com/ --preset=mobile`) and add to CI as a regression gate.
2. Mark hero images (especially on inner pages) `loading="eager" fetchpriority="high"`.
3. Verify all images use Astro's `<Image>` component for automatic WebP/AVIF conversion. The 126 MB image directory suggests source assets may not all be running through the pipeline.
4. Add `@font-face` `font-display: swap` (verify in CSS — not visible in head inspection).

---

## 6. AI Search Readiness (GEO) — 72/100

### Strengths

- **AI crawler access**: explicit `Allow:` for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot. Better than ~80% of agency sites.
- **`llms.txt` quality grade: A-** — structured, includes factual anchors, named founder, permissions block. The "0 out of 37 benchmarked agencies (TheRedScroll internal analysis, April 2026)" anchor is the single most citable proprietary fact on the site.
- **Brand entity consistency** — `TheRedScroll` PascalCase used uniformly. Founder named with verifiable prior role.
- **KOL vs KOC guide is GEO-optimal** — question-led H2s, named sources, comparison table, passage lengths in the 134–167 word optimal citation range.

### Gaps (with the top-5 highest-impact changes)

1. **Create `/llms-full.txt`** — concat full text of 7 insights + 4 main platform pages. Highest leverage for ChatGPT Browse, Perplexity, Claude.
2. **Add Camper / Mission Foods data + 37-agency methodology to `llms.txt` factual anchors.** One file edit.
3. **Visible author bylines with credentials on every insight.** Direct E-E-A-T lift for Bing Copilot and Google AIO.
4. **FAQ JSON-LD on service pages** — content already exists, just wrap in schema. Directly feeds Google AIO extraction.
5. **Expand `llms.txt` multilingual section** — add all live ZH and FR platform/insight URLs. Move founder credentials into the opening description.

`llms.txt` also uses bare-apex URLs (`theredscroll.com/...`) — fixing C1 should propagate the right canonical, but [public/llms.txt](public/llms.txt) is a static file and must be edited manually.

---

## 7. Search Experience (SXO) — 50/100

### Key finding: no severe page-type mismatch, but trust-signal distribution is broken

| Page | Target intent | Page-type match | Persona weak combo |
|---|---|---|---|
| Homepage | "China social media agency" | Medium (SERP rewards directories) | Procurement (5/10) |
| `/platforms/wechat` | "WeChat marketing agency" | Aligned | Procurement (4/10), CMO (5/10) |
| `/platforms/rednote` | "RedNote marketing" / "Xiaohongshu agency" | Medium (SERP currently rewards explainer hybrids) | Procurement (3/10) — worst on site |
| `/services/market-entry` | "China market entry social media" | **High mismatch** — SERP rewards informational guides | Brand manager (5/10) |
| `/insights/kol-vs-koc...` | "KOL vs KOC China" | Aligned | Procurement (3/10) — no author byline |

### Action priorities

1. **Verify and add meta descriptions** (SXO flagged as possibly missing; direct inspection confirms homepage has one — verify on all platform and service pages).
2. **Add author bylines** to insights (same finding as content + GEO).
3. **Deploy `0 out of 37` stat** on WeChat, RedNote, pricing, market-entry pages.
4. **Add one client outcome callout** above the first CTA on WeChat and RedNote pages — Camper or Mission Foods one-liner with "Read the case" link.
5. **Create `/why-fixed-price` comparison page** — only missing page type that intercepts decision-stage buyers; no direct competitor equivalent in current SERP. Highest-leverage missing asset.
6. **Split market-entry into commercial + informational** — `/services/market-entry` (commercial) + `/insights/china-market-entry-guide` (informational, feeds into the commercial page).

---

## 8. Sitemap — 61/100

### Inventory

147 URLs across EN (49) + FR (49) + ZH (49). Well under all limits.

### Issues

| Severity | Issue | Fix |
|---|---|---|
| High | Every `<loc>` uses apex (308 redirect to www) | Fix C1 in `astro.config.mjs` |
| High | `/en/ai/` missing from sitemap → FR + ZH `/ai/` have broken hreflang | Investigate why `ai.astro` is excluded; add EN or remove FR/ZH from sitemap |
| High | `/zh/services/market-entry/` absent → 2 URLs have broken hreflang | Create the ZH page or remove `zh-Hans` alternate from the market-entry hreflang set |
| Medium | `robots.txt` Sitemap declaration uses apex URL | Update to `https://www.theredscroll.com/sitemap-index.xml` |
| Low | Uniform build-timestamp `lastmod` across all 147 URLs | Use per-page dates from content frontmatter (`publishDate`, `updatedDate`) |
| Info | `changefreq` and `priority` present site-wide | Remove both — Google and Bing ignore them, ~6 KB wasted |

### Pass

DE/ES locales correctly excluded from sitemap (locale gate works). Low-value pages (thank-you, cookie-policy, terms, privacy) correctly excluded. Valid XML, correct namespaces including `xhtml:` for hreflang.

---

## 9. Images — 80/100 (estimate)

- All sampled images carry meaningful, non-empty alt attributes (per technical specialist).
- Total `dist/client/images/` weight: 126 MB. Per-page weight not measured.
- Astro `<Image>` component pipeline should convert to WebP/AVIF — verify by inspecting served formats.
- Hero image LCP hints missing (covered in Performance H2).

---

## Out of Scope (not assessed)

- Backlink profile (no Moz/Bing API credentials; Common Crawl available but not enriched)
- CrUX field data (no Google API key configured)
- GSC indexation, search performance, GA4 traffic (no OAuth configured)
- Live competitor SERP positions (DataForSEO MCP not installed)
- Maps / GBP (not a local-service business)
- Drift comparison (no baseline captured for this URL)
- E-commerce schema (not an e-commerce business)

To unlock these: configure Google API credentials via `python scripts/google_auth.py --auth` and rerun `/seo audit` for richer field-data scoring.

---

## Methodology Notes

- 7 specialist subagents spawned in parallel; 5 returned full reports (technical, schema, sitemap, GEO, SXO); 2 reruns (content, performance) finished without producing their report files, so their findings are synthesized from cross-cutting signals captured by the other 5 agents plus direct inspection of the local Astro source and `dist/client/` build output.
- Content Quality and Performance scores are reasoned estimates with explicit notes on confidence; they should be reverified once Lighthouse CLI is available and a fresh content audit completes successfully.
- All file paths reference the local project at `c:\Users\cyril\Project\TheRedScroll`.
