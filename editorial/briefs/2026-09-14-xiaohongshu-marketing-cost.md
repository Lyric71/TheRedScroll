---
brief_id: 02A
publish_date: 2026-09-14
week: 02
slot: A
slot_job: the money question
week_theme: "Own the Xiaohongshu cost answer"
content_type: Cost page
status: not_started
---

# BRIEF 02A: Xiaohongshu marketing cost: what brands actually pay in 2026

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
| Working H1 | Xiaohongshu marketing cost: what brands actually pay in 2026 |
| Slug | `/insights/xiaohongshu-marketing-cost/` |
| Output file | `output/xiaohongshu-marketing-cost.md` |
| Primary query | `xiaohongshu marketing cost` |
| Secondary queries | `rednote marketing cost`, `little red book advertising cost`, `xiaohongshu kol price` |
| Search intent | Cost |
| Body length | 2,200 words (body only, per the char-count rule) |

## The angle

GMA publishes KOC and KOL ranges on their agency page. We can beat them by being more specific and better sourced, then adding the number they will never publish: what an agency charges to run it. Cite their figures openly. Confidence reads as authority.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. The one-page answer: a full cost table up front
2. Account and verification: the fixed costs
3. Content production: what a note costs to make properly
4. KOC seeding: price per post by follower tier, and how many you need
5. KOL fees: mid-tier and top-tier ranges, and what drives them
6. Paid: minimum spend, CPC and CPM ranges by objective
7. Agency management: retainer versus fixed price
8. Three worked examples with real totals
9. Where brands waste money on Xiaohongshu

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Blue V annual verification fee, cite platform documentation
- KOC and KOL fee bands, cite Campaign Asia and Long Advisory, dated
- Ad account minimum deposit, cite the platform
- Our pricing page, referenced by name only. Never quote monthly figures, per-item rates or tier names (STYLE_GUIDE.md 6.4)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Master cost table, the page's centerpiece
- KOL tier pricing table: follower band, typical fee, typical reach
- Three worked-example cards with line-item totals
- Feature image: a calculator and notebook with handwritten figures, warm neutral tones. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo with real-life defects, no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the cost pillar and the Xiaohongshu guide. Out: /pricing/, /rednote-agency/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **See the full rate card**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Xiaohongshu Marketing Cost in 2026 (34 chars) |
| Meta description | 152 chars | What Xiaohongshu marketing costs in 2026: verification, content, KOC seeding, KOL fees, ad spend and agency management, with worked examples. (141 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. How much does a Xiaohongshu KOC post cost?
2. What is the minimum ad budget on Xiaohongshu?
3. How much does Blue V verification cost?
4. Is Xiaohongshu cheaper than Douyin?

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
- [ ] File saved as `output/xiaohongshu-marketing-cost.md`
