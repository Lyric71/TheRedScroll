---
brief_id: 04A
publish_date: 2026-09-28
week: 04
slot: A
slot_job: the money question
week_theme: "Show what the money buys"
content_type: Cost page
status: not_started
---

# BRIEF 04A: What an entry-level China social media package actually includes

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
| Working H1 | What an entry-level China social media package actually includes |
| Slug | `/insights/china-social-media-package-includes/` |
| Output file | `output/china-social-media-package-includes.md` |
| Primary query | `china social media package` |
| Secondary queries | `china social media management pricing`, `what does a china agency deliver` |
| Search intent | Cost |
| Body length | 1,800 words (body only, per the char-count rule) |

## The angle

No rival can publish this page. It is a deliverable-by-deliverable walkthrough of our entry package: how many posts, how many hours, who does what, what is excluded. The exclusions section is the point. It is the most credible thing on the page. The price itself stays on the pricing page (STYLE_GUIDE.md 6.4): this article describes what the entry package contains and points to the page for the figure.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. The package in one table
2. Month one: what setup actually involves
3. Content: how many pieces, in what formats, produced how
4. Community management: hours, response times, escalation
5. Reporting: what the monthly deck contains
6. What is not included, and what those things cost
7. When you should buy the bigger package instead
8. How to compare this against a proposal you already have

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- All figures from our own delivery scopes: content volumes, hours, response
  times, report contents. Cite them as ours.
- Never the monthly price, a per-item rate or a tier name. STYLE_GUIDE.md 6.4.
  Send the reader to the pricing page by name for the number.
- No external stats needed. The page's authority comes from specificity.

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Full deliverable table: item, volume, who does it
- Exclusions table: what it is, what it costs separately
- Sample monthly report page, one screenshot, anonymized
- Feature image: a printed scope-of-work document, clean, overhead

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the cost pillar and the pricing model piece. Out: /pricing/, /services/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **See the full rate card** (link to the pricing page, no figure in the copy)

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | What a China Social Media Package Includes (42 chars) |
| Meta description | 152 chars | A deliverable-by-deliverable breakdown of an entry-level China social media package: content volume, community hours, reporting, and what is excluded. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. How many posts a month should a China package include?
2. Is ad spend included in an agency retainer?
3. What is usually excluded from a China social media package?

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
- [ ] File saved as `output/china-social-media-package-includes.md`
