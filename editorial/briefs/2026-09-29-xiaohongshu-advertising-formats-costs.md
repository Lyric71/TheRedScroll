---
brief_id: 04B
publish_date: 2026-09-29
week: 04
slot: B
slot_job: platform depth
week_theme: "Show what the money buys"
content_type: Cluster guide
status: not_started
---

# BRIEF 04B: Xiaohongshu ads: every format, what it costs, when it works

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.theredscroll.com |
| audience | people out of China |
| reader stage | in-market |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Xiaohongshu ads: every format, what it costs, when it works |
| Slug | `/insights/xiaohongshu-advertising-formats-costs/` |
| Output file | `output/xiaohongshu-advertising-formats-costs.md` |
| Primary query | `xiaohongshu advertising cost` |
| Secondary queries | `xiaohongshu ads`, `rednote advertising`, `xiaohongshu ad formats` |
| Search intent | Cost |
| Body length | 2,100 words (body only, per the char-count rule) |

## The angle

Direct mirror of our WeChat ad formats article, which is one of our better pages. Same structure, new platform. Format by format, with cost ranges and a plain verdict on when each is worth buying.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. The ad products in one table
2. Feed ads: cost, targeting, what they are for
3. Search ads: the most underused product on the platform
4. Note boosting: promoting an organic note versus creating an ad
5. KOL content amplification
6. Store and lead-form ads
7. Minimum budgets and account deposits
8. Benchmarks: CPC, CPM and cost per lead ranges
9. Which format to buy first with a small budget

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Ad account minimum deposit, cite the platform
- CPC and CPM ranges, from our own managed accounts, labeled as ours, plus one external dated source

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Format comparison table: format, objective, typical cost, verdict
- Benchmark table: CPC, CPM, cost per lead by objective
- Annotated ad unit screenshots, three formats
- Feature image: a phone feed with a sponsored label visible, close crop. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo with real-life defects, no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the Xiaohongshu cost page. Out: /services/advertising/, /rednote-agency/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Xiaohongshu Ads: Formats and Real Costs (39 chars) |
| Meta description | 152 chars | Every Xiaohongshu ad format explained with real cost ranges: feed, search, note boosting, KOL amplification, store ads and minimum budgets. (139 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. What is the minimum ad spend on Xiaohongshu?
2. Are Xiaohongshu search ads worth it?
3. What is a typical CPC on Xiaohongshu?

## Calendar note for this week

Golden Week starts Oct 1. Thursday and Friday pieces must be written, reviewed and scheduled by Sept 30. The China team is off from Oct 1 to 7.

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
- [ ] File saved as `output/xiaohongshu-advertising-formats-costs.md`
