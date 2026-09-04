---
brief_id: 01D
publish_date: 2026-09-11
week: 01
slot: D
slot_job: vertical or teardown
week_theme: "Plant the flag on cost"
content_type: Industry page
status: not_started
---

# BRIEF 01D: Beauty and skincare marketing in China

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
| Working H1 | Beauty and skincare marketing in China |
| Slug | `/industries/beauty-skincare/` |
| Output file | `output/beauty-skincare.md` |
| Primary query | `beauty marketing agency china` |
| Secondary queries | `skincare marketing china`, `cosmetics marketing agency china` |
| Search intent | Commercial |
| Body length | 1,700 words (body only, per the char-count rule) |

## The angle

First of eight industry pages. Beauty is the most competitive category on Xiaohongshu and the most searched vertical in the set. The page has to lead with the regulatory reality (NMPA filing, ingredient claims) because that is what a beauty marketer worries about and no rival vertical page mentions it.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Why beauty is won and lost on Xiaohongshu
2. What you can and cannot claim: NMPA filing and advertising law in plain words
3. The review economy: how a beauty product gets recommended
4. KOC seeding volumes that actually move a launch
5. Douyin live commerce for beauty: when it pays
6. What a beauty package includes and what it costs
7. How we work: scope, timeline, reporting

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- NMPA cosmetics filing requirement for imported products, cite the regulation
- China beauty market size or growth, cite Statista or a dated industry source
- Prohibited claim examples under China advertising law, cite the law

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Table: claims you can make versus claims that get a post removed
- KOC seeding volume table by launch size
- Feature image: skincare bottles on a pale surface, top-down, editorial styling, no brand marks. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo with real-life defects, no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the Xiaohongshu guide. Out: /rednote-agency/, /services/influencer-marketing/, /pricing/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Beauty and Skincare Marketing in China (38 chars) |
| Meta description | 152 chars | How beauty and skincare brands grow in China. Xiaohongshu strategy, NMPA claim rules, KOC seeding volumes and fixed-price packages. (131 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. Do I need NMPA filing before marketing a skincare product in China?
2. How many KOC posts does a beauty launch need?
3. Which platform matters most for beauty in China?

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
- [ ] File saved as `output/beauty-skincare.md`
