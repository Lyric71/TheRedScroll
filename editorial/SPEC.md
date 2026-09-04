# Article output spec

The contract every finished article meets. `CLAUDE.md` covers voice, rules
and the pipeline. This file covers structure, format and the checks.

## File shape

Filename equals the slug. `output/<slug>.md`. Hard-wrap body lines at about 80
characters.

```markdown
---
title: <= 52 characters
slug: <slug>
description: <= 152 characters
excerpt: <= 25 words
template: insight
---

<!-- HERO SECTION -->

<H1 from the brief, rewritten if the finished piece needs it>

<one or two sentences that state the answer, not the promise>

<!-- INTRODUCTION -->

<200 words maximum. For cost pieces, the answer table goes here, above
everything else. A reader who leaves after this block should already have
what they came for.>

<!-- SECTION: <name> -->

<body>

<!-- SECTION: FAQ -->

<the FAQ questions from the brief, 40 to 70 words each>

<!-- CTA -->

CTA: <label from the brief>

<!-- FEATURE IMAGE block, per createarticle -->
<!-- SCHEMA block, see below -->
<!-- ASSET BRIEF block, see below -->
```

`template` values: `insight` for `/insights/`, `industry` for `/industries/`,
`tool` for `/tools/`. All three sections exist. Insights publish into the
`blog` collections (five locales). Industry and tool pages publish into the
`industries` and `tools` collections (English only) and render through
`src/components/pages/EditorialArticle.astro`.

The publish step (`createblogarticle`) maps this frontmatter onto the blog
schema: `title`, `description` (the hero standfirst), `metaTitle` (the SEO
title, cap 60), `metaDescription` (cap 155), `publishDate`, `author`
"TheRedScroll", `category` (one of Strategy, Platforms, Content),
`platforms`, `keywords`, `featured`, `featuredImage`.

Industry and tool pages take the same fields plus three optional ones:
`faqs` (a list of `q` / `a` pairs, moved out of the body FAQ section so the
page renders an accordion and emits FAQPage schema), `serviceType` (for the
Service schema on industry pages, default "Social Media Marketing") and `cta`
(the button label, default "Book a call"). Use `category` "Industry" or
"Tool".

## Length

Word counts in briefs are body only. Exclude frontmatter and all HTML comments,
per the createarticle char-count rule. Report both prose-only and
body-with-tables counts at the end, then land on target.

Being 10% under is fine. Being 25% under means a section was skipped.

## Tables

Minimum two per article.

1. A comparison or answer table in the first screen.
2. A topical table inside the densest section.

Markdown tables only. Keep columns aligned in the source. No nested tables, no
merged cells, no more than five columns.

## Citations

Blockquote format, consistently, every time.

> Figure and claim in one sentence.
> Source: Publisher, Month Year. https://url

Rules:

- A source with no date is not a source. Find the date or cut the claim.
- Research in Chinese first. The cited source may be Chinese-language; give
  the publisher name in English with the Chinese name in parentheses on first
  use, for example QuestMobile, or 36Kr (36氪).
- Every source is validated twice: at research time and again in iteration 8
  by re-fetching the URL. Both dates go in the ledger. One check is not
  enough.
- Never cite a competitor's blog as the source for a platform fact. Go to the
  platform's own documentation, a regulator, or a dated trade publication.
- Never cite our own earlier article as the source for an external figure.
  Cite what that article cited.
- Where a figure comes from our own accounts, say so explicitly and give the
  sample size and period. "Across 14 client accounts, January to August 2026."

## Internal links

Plain-text references by name in body copy. No markdown links.

Good: "Our pricing page lists all three packages."
Bad: "Our [pricing page](/pricing/) lists all three packages."

List the actual URLs in the ASSET BRIEF block at the end so the publish step
can wire them.

Every cost article links to the pricing page, by name, without quoting any
figure from it. Every platform article links to its money page. The brief
names the specific targets.

## The three appended blocks

All three are HTML comments. None render. None count toward the word target.

### 1. Feature image

Exactly as createarticle specifies. Path convention for this site:

```
Save to:    public/images/blog/<slug>.webp
Reference:  /images/blog/<slug>.webp
```

The same folder serves industry and tool pages.

**China rule, permanent (Cyril, Sept 4, 2026).** Every hero image must be
visibly China-related and must show Chinese social platforms on a screen:
a phone, laptop or studio monitor running WeChat, Xiaohongshu, Douyin, Weibo,
WeCom or Bilibili with their recognizable interface, in a China setting.
Not only Shanghai: rotate through typical Chinese cities and everyday places
(Chengdu, Hangzhou, Guangzhou, Shenzhen, Wuhan, Xi'an, Chongqing, Nanjing, a
second-tier city street, a wet market, a mall, a tea house, a small office, a
livestream studio). Name the place in the prompt and vary it across
articles.
The brief's feature-image line is only a subject hint. A generic desk, an
invoice, a globe, a handshake or a Western office fails the rule and the
image is regenerated. Chinese characters on the screens are expected.

**People and look, permanent (Cyril, Sept 4, 2026).** Only Chinese people
in the image, never a Western subject, whatever the article's audience. Not
a perfect AI render: vivid, candid, normal-life photography with normal-life
defects (handheld feel, slight motion blur, uneven light, clutter, cables, a
smudged screen, someone mid-gesture). The prompt must ask for those
imperfections. No studio polish, no cinematic grade, no diagrams, no
infographics, no watermark.

The image is generated with the `generate-image-openai` skill in step 3 of
the pipeline: landscape 3:2, high quality, then converted to webp with sharp
(quality about 78, max width 2000, no enlargement). Intermediates stay in the
session scratchpad. The generated image is opened and checked before it is
saved to the repo.

### 2. Schema

```
<!-- SCHEMA
Type: Article (or Service for /industries/ pages)
FAQPage: yes, <n> questions
Breadcrumb: Home > Insights > <title>
Author: TheRedScroll
datePublished: YYYY-MM-DD
-->
```

The site already runs FAQPage and Service schema correctly. Match what is
there. Do not invent new types.

### 3. Asset brief

Everything the designer and developer need, in one block.

```
<!-- ASSET BRIEF
TABLES: <list, with the data each needs>
CHARTS: <type, axes, data source, what it must show>
SCREENSHOTS: <what to capture, what to blur>
DOWNLOADS: <file, format, gate or no gate>
INTERNAL LINKS: <anchor text> -> <url>, one per line
CLIENT SIGN-OFF NEEDED: <any client figure used>
-->
```

## SEO

| Field | Ceiling | How |
|---|---|---|
| Title | 52 characters | Count it. Do not estimate. |
| Meta description | 152 characters | Count it. |
| Excerpt | 25 words | Count it. |

These ceilings also override the looser ones inside `content-quality-us`
(60 / 156). When that skill's iteration 8 or 17 proposes longer fields, trim
them back.

The brief supplies an approved title and description already inside these
ceilings. Use them. Only rewrite if the finished article makes them inaccurate,
and then stay inside the ceilings and note the change in your log.

Primary query appears in the H1, the first 100 words, and one H2. Do not force
it anywhere else. Secondary queries appear where they fit naturally or not at
all.

## The iteration workflow

Run createarticle's 13 iterations in order. Print the tracker. State what
changed at each step. No approval pauses.

**Iteration 7 is a cadence pass.** Vary sentence length deliberately, break
at least three parallel structures, let one paragraph run long and the next
run to a single line. No planted errors. Say in your log that you ran the
cadence variant.

**Iteration 8** includes the second source validation: re-fetch every cited
URL.

**Iteration 13** produces five visual concepts, then one photorealistic feature
image prompt.

Then run `content-quality-us` (18 passes) on the same file, in place, before
the image step.

## Status values in schedule.csv

| Status | Set when |
|---|---|
| `not_started` | Default |
| `drafted` | createarticle finished, `output/<slug>.md` saved |
| `quality_passed` | content-quality-us finished on the file |
| `image_ready` | hero image checked and saved to `public/images/blog/` |
| `published` | createblogarticle finished, build passed, Resend email sent |
| `blocked` | stopped on one of the four flag conditions, see `notes` |

## Definition of done (steps 0 to 3)

Verify each by counting or checking, not by assuming.

- [ ] Research note written before drafting, Chinese sources first.
- [ ] Every cited source passed check 1 and check 2, both dates in the ledger.
- [ ] Zero em dashes. Search the file for the character.
- [ ] Zero exclamation marks.
- [ ] Zero deliberate typos or planted errors.
- [ ] No summary or conclusion section. File ends on the CTA plus comment blocks.
- [ ] No "why work with us" framing.
- [ ] No banned words from `STYLE_GUIDE.md`.
- [ ] No monthly price, per-item rate or package tier name anywhere in the file (`STYLE_GUIDE.md` 6.4). Search for `$` and for the tier names.
- [ ] Every statistic in a blockquote with a named source and a date.
- [ ] New figures appended to `sources/verified-sources.md`.
- [ ] Chinese terms as English (中文) on first reference per section.
- [ ] Title, meta and excerpt counted and inside ceilings, after the quality pass too.
- [ ] At least two markdown tables.
- [ ] Internal references present as plain text, URLs listed in the asset brief.
- [ ] Feature image, schema and asset brief blocks all present.
- [ ] Body character count reported.
- [ ] Saved as `output/<slug>.md`.
- [ ] content-quality-us run, all 18 passes shown.
- [ ] Hero image generated, checked visually, saved as `public/images/blog/<slug>.webp`.
- [ ] `schedule.csv` row updated with status and the three dates.
- [ ] `logs/YYYY-MM-DD.md` written.

## When to stop and ask

Draft without pausing, with four exceptions. In each case, write the draft up
to that point, leave a clear marker, and flag it in the log.

1. **A required figure cannot be sourced.** Cut the claim, mark
   `TODO: unsourced claim removed`, and say which section is now thinner.
2. **A client number is needed and is not in the ledger.** Mark
   `TODO: client sign-off` and leave the sentence incomplete rather than
   estimating.
3. **A competitor claim in a listicle cannot be verified on their live site.**
   Drop that competitor from the list rather than publishing an unsourced
   claim about a named company. This one is not negotiable.
4. **The brief conflicts with what the site actually says.** The site wins.
   Note the conflict so the brief can be corrected.
