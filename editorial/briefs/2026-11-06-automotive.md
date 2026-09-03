---
brief_id: 09D
publish_date: 2026-11-06
week: 09
slot: D
slot_job: vertical or teardown
week_theme: "Enter the comparison layer"
content_type: Industry page
status: not_started
---

# BRIEF 09D: Automotive marketing in China

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
| Working H1 | Automotive marketing in China |
| Slug | `/industries/automotive/` |
| Output file | `output/automotive.md` |
| Primary query | `automotive marketing china` |
| Secondary queries | `car brand china social media`, `auto marketing agency china`, `ev marketing china` |
| Search intent | Commercial |
| Body length | 1,800 words (body only, per the char-count rule) |

## The angle

Anchored to Jaguar Land Rover and JAC Motors, one international and one Chinese brand, which lets the page speak to both our audiences. The EV shift is the news hook and no rival vertical page addresses the dealer layer.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. What changed: the EV shift and the new buyer
2. Where a car is actually researched in China
3. The Douyin and Xiaohongshu split for auto content
4. Test drive leads: the social to dealer handoff
5. Owner communities and the private domain layer
6. Launch campaigns versus always-on
7. What an automotive package includes and what it costs

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- China EV share of new car sales, cite CAAM or a dated industry source
- Client outcomes from our own case studies

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Buyer journey diagram: awareness to test drive to dealer
- Table: content type by funnel stage
- Feature image: a car detail, headlight or wheel arch, studio lighting, no visible badge

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from /work/jaguar-land-rover/, /work/jac-motors/. Out: those case studies, /services/crm-private-domain/, /pricing/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Automotive Marketing in China (29 chars) |
| Meta description | 152 chars | How car brands market in China: where buyers research, the Douyin and Xiaohongshu split, test drive lead handoff to dealers and owner communities. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. Where do Chinese consumers research cars?
2. How do social leads reach car dealers in China?
3. Does Xiaohongshu work for automotive brands?

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
- [ ] File saved as `output/automotive.md`
