---
brief_id: 08B
publish_date: 2026-10-27
week: 08
slot: B
slot_job: platform depth
week_theme: "Answer the ROI objection"
content_type: Cluster guide
status: not_started
---

# BRIEF 08B: Douyin ads: formats, bidding and what actually converts

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
| Working H1 | Douyin ads: formats, bidding and what actually converts |
| Slug | `/insights/douyin-advertising-formats/` |
| Output file | `output/douyin-advertising-formats.md` |
| Primary query | `douyin advertising` |
| Secondary queries | `douyin ad formats`, `douyin ads for foreign brands`, `douyin bidding` |
| Search intent | Informational |
| Body length | 2,000 words (body only, per the char-count rule) |

## The angle

Completes the ad-format trio alongside WeChat and Xiaohongshu. Focus on the bidding model, which is where most foreign advertisers lose money, and on the creative rules that decide whether a spend works at all.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. The ad products in one table
2. In-feed ads and the three-second rule
3. TopView and Brand Takeover: when the premium is worth it
4. Search ads on Douyin, which most brands ignore
5. Live-stream ads and traffic to a room
6. The bidding model explained plainly
7. Creative rules that decide delivery
8. Benchmarks: CPM, CPC and cost per order
9. The three mistakes that burn a Douyin budget

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Ad format specifications, cite the platform
- Benchmark ranges from our own managed accounts, labeled as ours

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Ad format table: format, objective, cost, verdict
- Benchmark table by objective
- Annotated creative example: what makes the first three seconds work
- Feature image: a vertical video frame with a visible progress bar, abstracted

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the Douyin cost page. Out: /services/advertising/, /douyin-agency/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Douyin Ads: Formats, Bidding, Conversion (40 chars) |
| Meta description | 152 chars | Every Douyin ad format with cost ranges, how the bidding model works, the creative rules that decide delivery and three mistakes that burn budget. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. How does Douyin ad bidding work?
2. What is a typical CPM on Douyin?
3. Do Douyin search ads work for foreign brands?

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
- [ ] File saved as `output/douyin-advertising-formats.md`
