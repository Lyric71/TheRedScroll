---
brief_id: 06A
publish_date: 2026-10-12
week: 06
slot: A
slot_job: the money question
week_theme: "Name the costs nobody quotes"
content_type: Cost page
status: not_started
---

# BRIEF 06A: The hidden costs of China social media nobody puts in the proposal

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
| Working H1 | The hidden costs of China social media nobody puts in the proposal |
| Slug | `/insights/china-marketing-hidden-costs/` |
| Output file | `output/china-marketing-hidden-costs.md` |
| Primary query | `china marketing hidden costs` |
| Secondary queries | `unexpected costs china marketing`, `china social media budget overrun`, `china agency extra fees` |
| Search intent | Cost |
| Body length | 2,000 words (body only, per the char-count rule) |

## The angle

The most shareable piece in the cost cluster. Every buyer who has been burned once will read it, and it makes fixed price feel like the safe choice without us having to argue for it. Twelve cost lines, each with a real number.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Why proposals leave these out
2. Verification and annual renewal fees
3. Ad account deposits you do not get back quickly
4. Translation and transcreation, which is not the same as translation
5. Trademark registration before you can verify
6. ICP filing if you touch a website
7. Legal review of claims under advertising law
8. Product sampling and shipping for KOC seeding
9. Local phone numbers and identity verification
10. Platform commission on social commerce
11. Rush fees and out-of-scope requests
12. The twelve costs in one table, with ranges

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Each cost line needs its own dated source: platform documentation, a regulator, or our own invoices labeled as ours
- Trademark registration timeline and fee, cite CNIPA or a professional source

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- The twelve hidden costs table. This is the whole page.
- Sample budget: quoted versus actual, side by side
- Feature image: a receipt curling off the edge of a table, high contrast. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo with real-life defects, no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the cost pillar and both platform cost pages. Out: /pricing/, /contact/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **See the full rate card**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | The Hidden Costs of China Social Media (38 chars) |
| Meta description | 152 chars | Twelve costs that China marketing proposals leave out, with real figures: verification, ad deposits, transcreation, trademarks, legal review and more. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. What costs are usually missing from a China marketing proposal?
2. Do I need a trademark before verifying a social account in China?
3. Are ad account deposits refundable?

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
- [ ] File saved as `output/china-marketing-hidden-costs.md`
