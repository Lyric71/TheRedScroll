---
brief_id: 02C
publish_date: 2026-09-17
week: 02
slot: C
slot_job: audience piece
week_theme: "Own the Xiaohongshu cost answer"
content_type: Audience
status: not_started
---

# BRIEF 02C: Seven reasons your Xiaohongshu account stopped growing

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
| Working H1 | Seven reasons your Xiaohongshu account stopped growing |
| Slug | `/insights/xiaohongshu-account-not-growing/` |
| Output file | `output/xiaohongshu-account-not-growing.md` |
| Primary query | `xiaohongshu account not growing` |
| Secondary queries | `xiaohongshu no views`, `rednote engagement dropping`, `xiaohongshu account limited` |
| Search intent | Problem |
| Body length | 1,800 words (body only, per the char-count rule) |

## The angle

Pure switcher intent. Somebody with an underperforming account, probably run by an agency they are losing faith in. Each reason gets a diagnostic test the reader can run themselves in five minutes. Ends with an audit offer, not a hard sell.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Reason 1: you are posting ads, not notes
2. Reason 2: your covers fail the three-second test
3. Reason 3: you are invisible in search because your tags are wrong
4. Reason 4: your account is shadow-limited and nobody told you
5. Reason 5: you switched content pillars and reset the algorithm
6. Reason 6: your KOC seeding stopped and nothing replaced it
7. Reason 7: the account is fine and the product is not
8. The 30-minute self-audit

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Reference our own engagement-drop article for continuity
- Any benchmark figures must come from our own account set, labeled as such

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Diagnostic table: symptom, likely cause, the test to run
- Before and after cover image comparison, two real examples
- Feature image: a flat line on a simple chart, muted palette, no stock-photo frustration poses. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo with real-life defects, no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the algorithm piece. Out: /services/strategy-campaigns/, /rednote-agency/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Request an account audit**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Why Your Xiaohongshu Account Stopped Growing (44 chars) |
| Meta description | 152 chars | Diagnose a stalled Xiaohongshu account: shadow limits, wrong tags, weak covers, broken seeding. Seven causes and a 30-minute self-audit. (136 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. How do I know if my Xiaohongshu account is limited?
2. Why did my views drop suddenly?
3. Can a limited account recover?

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
- [ ] File saved as `output/xiaohongshu-account-not-growing.md`
