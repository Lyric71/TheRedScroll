---
brief_id: 05B
publish_date: 2026-10-06
week: 05
slot: B
slot_job: platform depth
week_theme: "Move the cluster to WeChat"
content_type: Operational how-to
status: not_started
---

# BRIEF 05B: WeChat Official Account setup for foreign companies in 2026

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
| Working H1 | WeChat Official Account setup for foreign companies in 2026 |
| Slug | `/insights/wechat-official-account-setup/` |
| Output file | `output/wechat-official-account-setup.md` |
| Primary query | `wechat official account foreign company` |
| Secondary queries | `wechat official account registration`, `open wechat account overseas business`, `wechat service account setup` |
| Search intent | How-to |
| Body length | 2,000 words (body only, per the char-count rule) |

## The angle

Crowded query. Six rivals have a version. We win it by being the most current and the most honest about the overseas account's limits, which most guides gloss over. Same numbered-step shape as our WeCom guide, which already ranks.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Subscription, Service and overseas accounts compared
2. The document checklist, by entity type
3. Step by step: the registration flow with screenshots
4. Verification: fee, timeline, what gets rejected
5. What an overseas account cannot do
6. Migrating from overseas to mainland later
7. Setting up the menu, autoreply and welcome flow
8. Connecting WeCom and the CRM layer
9. Total cost and timeline

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Account type capabilities, cite Tencent documentation
- Verification fee, cite Tencent
- Rejection reasons from our own submission history

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Account type comparison table, three columns
- Numbered registration screenshots, six to eight
- Feature image: a smartphone showing a clean account profile page, held, neutral background. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo with real-life defects, no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the WeChat cost page, /insights/what-is-wecom/, /insights/sell-on-wechat/. Out: /wechat-agency/, /services/market-entry/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | WeChat Official Account Setup for Foreigners (44 chars) |
| Meta description | 152 chars | How to register a WeChat Official Account as a foreign company in 2026: account types, documents, verification fees, rejection reasons and overseas (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. Can a foreign company register a WeChat Official Account?
2. What is the difference between a Subscription and a Service account?
3. How much is WeChat Official Account verification?

## Calendar note for this week

Golden Week runs to Oct 7. Monday and Tuesday pieces must be written and scheduled before Sept 30. Normal working rhythm resumes Thursday Oct 8.

> **Scheduling flag:** Golden Week. Schedule by Sept 30.

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
- [ ] File saved as `output/wechat-official-account-setup.md`
