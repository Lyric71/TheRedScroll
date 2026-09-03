---
brief_id: 01A
publish_date: 2026-09-07
week: 01
slot: A
slot_job: the money question
week_theme: "Plant the flag on cost"
content_type: Pillar
status: not_started
---

# BRIEF 01A: How much does China social media marketing cost in 2026

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.theredscroll.com |
| audience | people out of China |
| reader stage | pre-entry and in-market |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How much does China social media marketing cost in 2026 |
| Slug | `/insights/china-social-media-marketing-cost/` |
| Output file | `output/china-social-media-marketing-cost.md` |
| Primary query | `china social media marketing cost` |
| Secondary queries | `cost of marketing in china`, `china social media budget`, `china marketing agency cost` |
| Search intent | Cost |
| Body length | 2,800 words (body only, per the char-count rule) |

## The angle

The flagship. Nobody currently owns this answer with real numbers and a named source. Rivals either dodge it or bury ranges inside a blog post. We answer it completely, then show our own rate card at the bottom. The page has to be the last one a buyer needs to read.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. The short answer, in a table, in the first 200 words
2. What you are actually paying for: the five cost lines nobody separates
3. Account setup and verification: one-time costs by platform
4. Content production: per post, per video, per campaign
5. Media spend: minimum viable budgets by platform
6. Influencer fees: KOC, mid-tier, top-tier
7. Agency fees: retainer, project and fixed price compared
8. Three realistic budgets: testing, building, scaling
9. Why TheRedScroll publishes its prices, and where to find them (no figures in this article)

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- WeChat Official Account verification fee, current year, cite Tencent's own documentation
- Xiaohongshu Blue V annual fee, cite the platform
- Mainland ad account minimum deposit, cite the platform or a dated agency source
- KOC and KOL fee ranges, cite Campaign Asia's 2026 influencer market piece and Long Advisory
- Our pricing page, referenced by name only. Never quote monthly figures, per-item rates or tier names (STYLE_GUIDE.md 6.4)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Master cost table: five cost lines by platform, one row each
- Three budget scenario cards: $2K, $6K, $15K a month, what each buys
- Bar chart: share of a typical $6K month by cost line
- Feature image: a clean itemized invoice on a desk, warm light, no faces, no branding

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from /pricing/, the homepage insights strip, and every future Slot A piece. Out: /pricing/, /services/, /rednote-agency/, /wechat-agency/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **See the full rate card, then Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | China Social Media Marketing Cost 2026 (38 chars) |
| Meta description | 152 chars | What China social media marketing actually costs in 2026, line by line, with real figures for setup, content, media, influencers and agency fees. (145 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. What is a realistic monthly budget for China social media?
2. How much does it cost to open a WeChat Official Account as a foreign company?
3. Do agencies mark up ad spend in China?
4. What is the minimum budget to test one platform?
5. Why do most China agencies not publish prices?

## Definition of done

- [ ] Every statistic carries a dated, linked blockquote citation
- [ ] New figures appended to `sources/verified-sources.md`
- [ ] Zero em dashes
- [ ] Zero deliberate typos or planted errors
- [ ] No summary or conclusion section
- [ ] Chinese terms formatted as English (中文) on first reference per section
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] At least two tables
- [ ] Internal links present as plain-text name references
- [ ] Feature image block appended with the correct slug path
- [ ] Body character count reported and on target
- [ ] File saved as `output/china-social-media-marketing-cost.md`
