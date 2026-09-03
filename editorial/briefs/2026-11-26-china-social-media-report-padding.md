---
brief_id: 12C
publish_date: 2026-11-26
week: 12
slot: C
slot_job: audience piece
week_theme: "Arm the buyer against bad agencies"
content_type: Audience
status: not_started
---

# BRIEF 12C: How to read a China social media report and spot the padding

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
| Working H1 | How to read a China social media report and spot the padding |
| Slug | `/insights/china-social-media-report-padding/` |
| Output file | `output/china-social-media-report-padding.md` |
| Primary query | `china social media reporting metrics` |
| Secondary queries | `china agency report review`, `vanity metrics china`, `how to audit agency reporting` |
| Search intent | Problem |
| Body length | 1,900 words (body only, per the char-count rule) |

## The angle

The sharpest switcher piece in the plan. Teach a client to audit their current agency's monthly deck. It costs us nothing because our own reporting survives the test, and it will be forwarded internally, which is how it reaches the decision maker.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. The five metrics that mean almost nothing
2. Impressions versus reach versus views, and why the labels shift
3. The follower growth trick: bought, seeded or earned
4. Engagement rate: which denominator did they use
5. Attribution windows that flatter a campaign
6. The screenshot problem: cherry-picked posts
7. The six metrics that actually matter
8. Ten questions to send your agency this month
9. What our reporting shows, as a comparison

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Standard metric definitions per platform, cite platform documentation
- Use a real, anonymized report page of ours as the counter-example

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Table: metric, how it gets padded, what to ask instead
- Ten-question audit list, formatted to be copied into an email
- Sample report page, anonymized, annotated
- Feature image: a printed report with several lines highlighted, overhead

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from every audience-slot problem piece. Out: /services/strategy-campaigns/, /contact/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Request an account audit**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Spot Padding in a China Report (37 chars) |
| Meta description | 152 chars | Five metrics that mean nothing, how engagement rates get inflated, attribution windows that flatter campaigns, and ten questions to send your agency. (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. What metrics should a China social media report include?
2. How is engagement rate calculated in China?
3. How do I know if my agency's numbers are real?

## Calendar note for this week

Double 12 falls on Dec 12, after the plan ends. Add a Double 12 piece to week 14 if the cadence continues.

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
- [ ] File saved as `output/china-social-media-report-padding.md`
