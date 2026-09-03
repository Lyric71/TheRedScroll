# Site profile cache: theredscroll.com

Replaces the CreateArticle Step 0 fetch. Read this instead of fetching the site
on every run.

**Refresh on the first working day of each month.** Ask Claude:
`Fetch theredscroll.com and refresh sources/site-profile.md.`

Last refreshed: 2026-09-03
Next refresh due: 2026-10-01

## Positioning

Headline: We grow your brand on China's social platforms.
Sub: More followers. More engagement. More conversions. Fixed scope. Fixed
price. No surprises.

Offices in Shanghai and Hong Kong. Part of the BearingBridge group.
Eighteen platforms covered. Five languages: English, French, Chinese, Spanish,
German.

Process as stated on the site: 30-minute discovery call, then proposal, then
live in two weeks.

## Pricing, as published

Three monthly packages and per-item rates are published at `/pricing/`.
Six-month minimum contract on all packages. Ad spend billed separately with
no markups.

**Do not copy the figures or tier names into this file or into any article.**
`STYLE_GUIDE.md` 6.4 forbids prices and tier names in public content. Articles
refer to the pricing page by name only.

No competitor in the market publishes a monthly retainer figure. This is the
wedge.

## Live page inventory, English

48 pages as of 2026-09-03.

**Core**
`/` `/about/` `/ai/` `/contact/` `/pricing/` `/insights/` `/platforms/`
`/services/` `/work/`

**Services (7)**
`/services/strategy-campaigns/` `/services/advertising/`
`/services/content-production/` `/services/influencer-marketing/`
`/services/market-entry/` `/services/crm-private-domain/`
`/services/training-consulting/`

**Platforms (5)**
`/platforms/wechat/` `/platforms/rednote/` `/platforms/douyin/`
`/platforms/weibo/` `/platforms/others/`

**Money pages (4)**
`/wechat-agency/` `/rednote-agency/` `/douyin-agency/` `/weibo-agency/`

**Case studies (11)**
`/work/camper/` `/work/marriott/` `/work/jaguar-land-rover/`
`/work/viessmann/` `/work/iguzzini/` `/work/jac-motors/` `/work/langnese/`
`/work/master-martini/` `/work/mission-foods/` `/work/age20s/`
`/work/blue-insurance/`

**Existing articles (12)**
`/insights/china-social-media-platforms-2026/`
`/insights/sell-on-wechat/`
`/insights/what-is-wecom/`
`/insights/wechat-advertising-formats-costs/`
`/insights/douyin-marketing-western-brands/`
`/insights/douyin-social-commerce-profitability/`
`/insights/china-engagement-rate-drop/`
`/insights/content-mix-china/`
`/insights/kol-vs-koc-china-influencer-guide/`
`/insights/live-commerce-china-how-it-works/`
`/insights/why-livestream-shopping-took-over-china/`
`/insights/ai-content-production-china/`

**New sections this plan creates**
`/industries/` (8 pages) and `/tools/` (1 page). Both sections exist as of
2026-09-03 with empty collections. The first published page in each fills
the listing.

## Existing article shapes worth matching

Two of the twelve already rank in English search. Copy their shape.

- `/insights/what-is-wecom/` ranks around position 6 for WeCom setup queries.
  Operational how-to. Numbered steps. Document lists.
- `/insights/china-social-media-platforms-2026/` ranks around position 9.
  Reference guide with a comparison table.

`/insights/wechat-advertising-formats-costs/` is the model for every ad-format
article in this plan. Same structure, different platform.

## Technical setup already in place

FAQPage and Service schema on money pages. BlogPosting and BreadcrumbList on
articles. Organization, Person, ContactPoint and PostalAddress site-wide.

`robots.txt` explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot,
anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended,
Applebot-Extended and CCBot. IndexNow is live.

This is better AI-search hygiene than any of the ten competitors. Article 11B
on GEO uses our own setup as its worked example.

## Naming

The site says "RedNote / Xiaohongshu" in navigation and
"RedNote Agency | Xiaohongshu (Little Red Book) Marketing" in the money page
title. URLs use `rednote`.

**Use Xiaohongshu as the primary term in body copy and in new slugs.** It
carries the search volume. RedNote is the secondary. Do not change existing
URLs.

## CTA language

"Book a call" is the site's own wording. Use it.
"Request an account audit" and "See the full rate card" are the two variants
this plan adds. Both are approved.

Never "Schedule a complimentary consultation" or similar.

## Sister brands in the group

BearingBridge (www.bearingbridge.org), HubStudio.ai, The China Path, ChinaWebFoundry,
BeyondBridge. Referenced in the site footer. Do not link to them from article
body copy.

## Corrections against the repo, 2026-09-03

Checked against `src/` on install. The repo wins over the crawl.

- **Hero images** live at `public/images/blog/<slug>.webp` and are referenced
  as `/images/blog/<slug>.webp` in `featuredImage`. There is no
  `images/insights/` folder. Use `images/blog/` for every article, including
  industry and tool pages.
- **Blog schema** (`src/content.config.ts`): `title`, `description`,
  `metaTitle` (max 60), `metaDescription` (max 155), `publishDate`, `author`,
  `category`, `platforms` (wechat, rednote, douyin, weibo), `keywords`,
  `featured`, `featuredImage`, optional `keyFacts`. Existing categories:
  Strategy, Platforms, Content. Locale collections: `blog-fr`, `blog-zh`,
  `blog-de`, `blog-es`.
- **Twelve existing articles** confirmed in `src/content/blog/`. The list
  above is complete.
- **`/industries/` and `/tools/` were built on 2026-09-03.** Collections
  `industries` and `tools` in `src/content.config.ts`, listing pages at
  `src/pages/industries/index.astro` and `src/pages/tools/index.astro`,
  article routes at `[...slug].astro` in each, shared template
  `src/components/pages/EditorialArticle.astro`. English only, hreflang
  suppressed for the other locales. Not yet linked from navigation or footer.
  Nine briefs target them (01D, 02D, 04D, 05D, 07D, 09D, 11D, 12D, 13A).
- **Pricing rule, decided 2026-09-03.** `STYLE_GUIDE.md` 6.4 is the source
  of truth: no prices, no tier names in any article. The pricing page is the
  only place figures appear. Brief 04A was renamed to drop the price from
  its H1, title and slug.
- **Pages** match the inventory above: 7 services, 5 platform pages, 4 money
  pages, 11 case studies, plus about, ai, contact, pricing, insights,
  thank-you and the legal pages.
