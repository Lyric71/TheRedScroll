---
brief_id: 08A
publish_date: 2026-10-26
week: 08
slot: A
slot_job: the money question
week_theme: "Answer the ROI objection"
content_type: Cost page
status: not_started
---

# BRIEF 08A: KOL or KOC: what each one costs and what each one returns

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
| Working H1 | KOL or KOC: what each one costs and what each one returns |
| Slug | `/insights/kol-vs-koc-cost-roi/` |
| Output file | `output/kol-vs-koc-cost-roi.md` |
| Primary query | `kol vs koc cost` |
| Secondary queries | `koc marketing china roi`, `kol or koc which is better`, `china influencer budget split` |
| Search intent | Cost |
| Body length | 2,000 words (body only, per the char-count rule) |

## The angle

We already have a KOL versus KOC explainer. This is the money version of it: the same comparison decided on cost per outcome rather than on definitions. Cross-link the two so the pair covers both intents.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. The difference in one table, then the money
2. Cost per post, cost per thousand reached, cost per engagement
3. What KOC seeding actually returns, with a worked campaign
4. What a single top-tier KOL returns, with a worked campaign
5. The budget split that works for a launch
6. The budget split that works for an established account
7. Why KOC volume beats KOL reach on Xiaohongshu
8. Where KOLs are still worth the money
9. How to brief both without wasting the fee

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Fee bands, cite the same sources as the KOL pricing page for consistency
- Worked campaign figures from our own engagements, labeled as ours

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Cost per outcome comparison table
- Two worked campaign cards, KOC and KOL, with full line items
- Budget split diagram: launch versus established
- Feature image: many small photo prints scattered versus one large print, overhead

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from /insights/kol-vs-koc-china-influencer-guide/ and the KOL pricing page. Out: /services/influencer-marketing/, /pricing/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **See the full rate card**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | KOL or KOC: Cost and Return Compared (36 chars) |
| Meta description | 152 chars | KOL versus KOC in China compared on cost per outcome, with two worked campaigns, the budget splits that work, and where each one earns its fee. (143 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. Is KOC marketing cheaper than KOL marketing?
2. How many KOC posts equal one KOL post?
3. What budget split should a launch use?

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
- [ ] File saved as `output/kol-vs-koc-cost-roi.md`
