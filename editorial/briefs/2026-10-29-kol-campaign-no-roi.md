---
brief_id: 08C
publish_date: 2026-10-29
week: 08
slot: C
slot_job: audience piece
week_theme: "Answer the ROI objection"
content_type: Audience
status: not_started
---

# BRIEF 08C: Your KOL campaign delivered views and no sales. Here is the fix.

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
| Working H1 | Your KOL campaign delivered views and no sales. Here is the fix. |
| Slug | `/insights/kol-campaign-no-roi/` |
| Output file | `output/kol-campaign-no-roi.md` |
| Primary query | `kol campaign no roi` |
| Secondary queries | `china influencer campaign failed`, `kol marketing not working`, `china kol roi problem` |
| Search intent | Problem |
| Body length | 1,900 words (body only, per the char-count rule) |

## The angle

The single strongest switcher hook in the plan. Someone whose agency just delivered an impressive deck and no revenue. Diagnose it honestly, including the cases where the agency did nothing wrong and the product is the problem.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Views are not the deliverable. Name what is.
2. Failure 1: you bought reach from an audience that cannot buy you
3. Failure 2: there was no path from the post to a purchase
4. Failure 3: the creative was an ad and the audience knew it
5. Failure 4: the numbers were inflated and nobody checked
6. Failure 5: you measured the wrong window
7. Failure 6: the product genuinely is not right for China yet
8. How to audit a finished campaign in an afternoon
9. How to structure the next one so it is measurable

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Follower fraud prevalence figures, cite a dated industry source
- Attribution window guidance from our own campaign practice

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Post-campaign audit checklist table
- Diagram: the four broken links between a view and a sale
- Feature image: a full auditorium seen from the stage, empty seats in the front row

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the KOL pricing and KOL versus KOC pages. Out: /services/influencer-marketing/, /services/strategy-campaigns/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Request a campaign audit**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | KOL Campaign Got Views, No Sales? Fix It (40 chars) |
| Meta description | 152 chars | Six reasons China KOL campaigns deliver reach without revenue, how to audit a finished campaign in an afternoon, and how to structure the next one. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. Why did my China KOL campaign not drive sales?
2. How do I check if a KOL has fake followers?
3. What attribution window should a KOL campaign use?

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
- [ ] File saved as `output/kol-campaign-no-roi.md`
