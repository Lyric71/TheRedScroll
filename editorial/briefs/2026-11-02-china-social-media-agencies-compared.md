---
brief_id: 09A
publish_date: 2026-11-02
week: 09
slot: A
slot_job: the money question
week_theme: "Enter the comparison layer"
content_type: Listicle
status: not_started
---

# BRIEF 09A: China social media agencies compared: who publishes prices and who does not

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
| Working H1 | China social media agencies compared: who publishes prices and who does not |
| Slug | `/insights/china-social-media-agencies-compared/` |
| Output file | `output/china-social-media-agencies-compared.md` |
| Primary query | `best china social media agencies` |
| Secondary queries | `top china social media agency`, `china marketing agency comparison`, `china agency list 2026` |
| Search intent | Comparison |
| Body length | 2,600 words (body only, per the char-count rule) |

## The angle

Our first listicle. The rule that makes it work: be genuinely fair. Rank on published criteria, include agencies that beat us on scale, and let the pricing transparency column do the arguing. A listicle that praises rivals is the one people cite. (Amended 2026-10-16 by the 09A draft run: STYLE_GUIDE 5.3 and `.claude/CLAUDE.md` forbid naming competitors in external content, and `CLAUDE.md` says those apply on top of the editorial rules. The article names no rival agency. It compares agency types, checks each type's pricing position on rivals' live sites, and publishes only the aggregate, beside the approved "0 out of 37" line. The rival list and the evidence stay in the ledger. SPEC settled fallbacks 5 and 11.)

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. How we built this list, and our own conflict of interest, stated up front
2. The comparison table: agency types across at most five columns (amended 2026-10-16: types, not named agencies; SPEC settled fallback 11)
3. Best for enterprise scale
4. Best for search and Baidu depth
5. Best for influencer-led launches
6. Best for market entry and e-commerce
7. Best for a first, small budget
8. Where TheRedScroll fits, and where we do not
9. How to run your own shortlist in an afternoon

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Every claim about a rival must be checkable on their live site and dated
- Check each agency's own page for its pricing position, log it with the URL and date in the ledger, and publish the result as an aggregate only (amended 2026-10-16: no rival named or linked in the article; SPEC settled fallback 11)
- Do not publish a claim about competitors we cannot back with a logged, twice-checked page

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- The master comparison table: agency type, best-fit work, evidence, pricing check, risk to test (amended 2026-10-16: agency type in place of agency name; SPEC settled fallback 11)
- Shortlisting checklist the reader can use
- Feature image: a set of index cards fanned out, typographic, no logos. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo in crisp sharp focus with legible screens (never blur, smudges or noise), no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the cost pillar. Out: /pricing/, /work/, /contact/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **See the full rate card**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Best China social media agencies: compare the fit |
| Meta description | 152 chars | Compare the best China social media agencies by scope, pricing, and proof. Find the right agency type and test its proposal before signing. |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. Which China social media agency publishes prices?
2. How do I shortlist a China marketing agency?
3. What should a China agency proposal contain?

## Calendar note for this week

Double 11 campaigns are live this week. Slot A publishes anyway. It targets a research query, not a seasonal one.

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
- [ ] File saved as `output/china-social-media-agencies-compared.md`

## Research correction, October 16, 2026

Use a small, explicitly limited selected-page audit, not a whole-market claim. A software subscription is not an ongoing social media service retainer. Preserve the approved April 2026 benchmark as historical first-party data. Agency categories overlap and are not ranks. The article compares types rather than ten named firms, so the SEO title and description above replace the original values. Tables obey the five-column house ceiling. The shortlist is a Markdown checklist, not a separate download. Rival evidence URLs stay in the internal ledger under SPEC fallback 11; do not invent a public audit URL.
