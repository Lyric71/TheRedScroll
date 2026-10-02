# Site profile cache: theredscroll.com

Replaces the CreateArticle Step 0 fetch. Read this instead of fetching the site
on every run.

**Refresh on the first working day of each month.** Ask Claude:
`Fetch theredscroll.com and refresh sources/site-profile.md.`

Last refreshed: 2026-10-01
Next refresh due: 2026-11-02

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

63 pages as of 2026-10-01 (48 on 2026-09-03). The count covers core
pages, services, platforms, money pages, case studies, published articles
and published industry and tool pages. It leaves out `/thank-you/`, the
three legal pages and the `/industries/` and `/tools/` listing pages.

**Core (10)**
`/` `/about/` `/ai/` `/contact/` `/pricing/` `/insights/` `/platforms/`
`/services/` `/work/` `/insights/ceo-opinion/`

`/insights/ceo-opinion/` is new since 2026-09-03 (added 2026-09-19). It
lists signed CEO columns, meaning blog posts with `column: true`. None is
published yet, so the page and its menu column show a "first column coming
soon" placeholder. English only.

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

**Existing articles (24)**
The original twelve:
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

Published by this plan since 2026-09-03:
`/insights/xiaohongshu-marketing-foreign-brands/`
`/insights/china-social-media-marketing-cost/`
`/insights/first-90-days-china-social-media/`
`/insights/xiaohongshu-marketing-cost/`
`/insights/xiaohongshu-algorithm/`
`/insights/xiaohongshu-account-not-growing/`
`/insights/china-agency-pricing-models/`
`/insights/xiaohongshu-business-account-setup/`
`/insights/chinese-entity-social-media/`
`/insights/camper-china-teardown/`
`/insights/china-social-media-package-includes/`
`/insights/xiaohongshu-advertising-formats-costs/`

Categories in use: Strategy (13), Platforms (10), Content (1). No article
has `column: true` yet.

**Industry pages (2 of 8 planned)**
`/industries/beauty-skincare/` (published 2026-09-11)
`/industries/fashion-apparel/` (published 2026-09-18)

Both are live in all five locales: `/fr/secteurs/`, `/zh/hangye/`,
`/de/branchen/`, `/es/sectores/`.

**Tool pages (0 of 1 planned)**
`src/content/tools/` is still empty, and so are `tools-fr`, `tools-zh`,
`tools-de` and `tools-es`. A comment in `src/i18n/navigation.ts` schedules
the first tool page for 2026-11-30. Until then the Tools menu column shows a
placeholder that links to `/tools/`.

## Existing article shapes worth matching

Two of the original twelve already rank in English search. Copy their shape.

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

## Corrections against the repo, 2026-10-01

Monthly refresh. Checked against `src/` first, then the live site. The repo
wins over the crawl.

- **Page inventory** rose from 48 to 63. New pages are
  `/insights/ceo-opinion/`, twelve articles and two industry pages. Nothing
  was removed. Services (7), platforms (5), money pages (4) and case studies
  (11) are unchanged.
- **Industries and tools are now in the navigation.** Since 2026-09-11 the
  Insights mega menu has four columns: By platform, By industry, Tools and
  CEO's Opinion (the last one in English only). The menu reads the
  collections, so new pages appear in it on publish. The footer still does
  not link to `/industries/` or `/tools/`.
- **Industries and tools are no longer English only.** Locale collections
  `industries-fr`, `industries-zh`, `industries-de`, `industries-es` and the
  four `tools-*` collections are in `src/content.config.ts`, with routes
  under `/fr/secteurs/`, `/zh/hangye/`, `/de/branchen/`, `/es/sectores/`,
  `/fr/outils/`, `/zh/gongju/`, `/de/tools/` and `/es/herramientas/`.
  Hreflang is no longer blanket-suppressed. Each page leaves out only the
  locales it is missing (`missingEditorialLocales` in `src/lib/`).
- **Blog schema** gained `column` (boolean, default false) in every blog
  collection. It marks a signed CEO column for `/insights/ceo-opinion/`.
- **Unchanged:** the seven service names, the four money pages, the hero
  headline, sub and tagline, "Book a call" as the CTA, the 30-minute
  discovery call and "Live in 2 weeks" process, 18+ platforms, the RedNote
  money page title and the footer sister brands.
- **Live site** was reachable on 2026-10-01. The homepage H1, hero lines,
  CTAs and menu match the repo. `/pricing/` H1 is still "Fixed scope. Fixed
  price. No surprises." Its section headings are unchanged in shape. No
  figures or tier names were copied. The `/insights/` fetch listed 21 cards.
  The three it missed (`kol-vs-koc-china-influencer-guide`,
  `live-commerce-china-how-it-works`, `why-livestream-shopping-took-over-china`)
  are in the repo, and a spot check confirmed the first one loads live.
  The likely cause is the fetch truncating the listing.
