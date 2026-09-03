---
brief_id: 03B
publish_date: 2026-09-22
week: 03
slot: B
slot_job: platform depth
week_theme: "Make the pricing model the story"
content_type: Operational how-to
status: not_started
---

# BRIEF 03B: Xiaohongshu business account setup for foreign companies, step by step

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.theredscroll.com |
| audience | people out of China |
| reader stage | pre-entry |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Xiaohongshu business account setup for foreign companies, step by step |
| Slug | `/insights/xiaohongshu-business-account-setup/` |
| Output file | `output/xiaohongshu-business-account-setup.md` |
| Primary query | `xiaohongshu business account setup` |
| Secondary queries | `xiaohongshu blue v verification`, `rednote business account`, `open xiaohongshu account foreign company` |
| Search intent | How-to |
| Body length | 1,800 words (body only, per the char-count rule) |

## The angle

This is the shape that already ranks for us. Our WeCom guide sits at position six on the same kind of query. Replicate it exactly: numbered steps, real screenshots, the document list, the rejection reasons.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. What you need before you start: the document checklist
2. Step 1: choosing the account type
3. Step 2: submitting business licence and trademark
4. Step 3: Blue V verification and the annual fee
5. Step 4: setting up the store or the lead form
6. Step 5: linking the ad account
7. The five reasons applications get rejected
8. What changes if you have no Chinese entity
9. Timeline and total cost

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Blue V fee and document requirements, cite platform documentation
- Rejection reasons from our own submission history, labeled as ours

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Numbered screenshots of the actual application flow, five to seven images
- Document checklist table: with entity versus without
- Feature image: a stack of stamped documents, overhead, cool neutral

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the Xiaohongshu guide and the 90-day piece. Out: /rednote-agency/, /services/market-entry/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Xiaohongshu Business Account Setup Guide (40 chars) |
| Meta description | 152 chars | Step-by-step Xiaohongshu business account setup for foreign companies: documents, Blue V verification, fees, rejection reasons and timeline. (140 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. Can I open a Xiaohongshu business account without a Chinese company?
2. What does Blue V verification cost and how long does it take?
3. Why was my Xiaohongshu application rejected?

## Calendar note for this week

Mid-Autumn Festival runs Sept 25 to 27. Friday's piece still publishes, since the audience is English-speaking and largely outside China, but China-side review has to finish by Thursday.

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
- [ ] File saved as `output/xiaohongshu-business-account-setup.md`
