---
brief_id: 07A
publish_date: 2026-10-19
week: 07
slot: A
slot_job: the money question
week_theme: "Take the influencer cost lane"
content_type: Cost page
status: not_started
---

# BRIEF 07A: China KOL pricing in 2026: rates by tier, platform and category

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
| Working H1 | China KOL pricing in 2026: rates by platform and tier (amended 2026-10-08: "category" cut, because no platform, data firm or broker publishes prices by category for the same follower tier) |
| Slug | `/insights/china-kol-pricing/` |
| Output file | `output/china-kol-pricing.md` |
| Primary query | `china kol pricing` |
| Secondary queries | `chinese influencer cost`, `kol rates china`, `how much do chinese influencers charge` |
| Search intent | Cost |
| Body length | 2,400 words (body only, per the char-count rule) |

## The angle

Currently owned by Campaign Asia and Long Advisory, not by agencies. That means it is winnable with better structure. Give a full rate matrix by platform, tier and category, plus the negotiation levers nobody writes about.

Amended 2026-10-08 by the 07A draft run (settled fallbacks 1, 3 and 5): no dated Chinese publisher gives 2025-26 yuan prices by follower tier, and no source gives a category multiplier. The matrix is our own published planning grid from /services/influencer-marketing/ (Q1 2026 benchmarks, not quotes), labeled as ours, with Long Advisory's US dollar ranges as the outside cross-check and R3's list-versus-paid gap as the market signal. The platform mechanics (quoting rules, fees, usage rights) come from the Xingtu, Pugongying and WeChat creator-marketplace help centers.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. The rate matrix: platform by tier, in one table
2. How Chinese KOL pricing is actually quoted
3. Category multipliers: beauty costs more than travel, and why (amended 2026-10-08: no source supports it; QuestMobile's 2024 data found Xiaohongshu beauty creators the most crowded category with a relatively low average price. The section reports what is published and says no multiplier exists)
4. What is included in a quoted fee and what is billed on top
5. Exclusivity, usage rights and whitelisting: the three add-ons
6. KOC seeding economics: volume over reach
7. The four negotiation levers that work
8. Red flags: inflated followers and fake engagement
9. What an agency charges to run it (amended 2026-10-08: "manage" is a banned word; our own fee stays on the pricing page, named only, per STYLE_GUIDE 6.4. The section uses Xingtu's separate service-provider fee line, a listed company's filed gross margin and a broker's note on platform rebates)

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Fee bands, cite Campaign Asia's 2026 influencer market analysis and Long Advisory, dated
- Cross-reference GMA's published KOC and KOL ranges openly (amended 2026-10-08: GMA is a competitor agency; CLAUDE.md forbids naming competitors or citing their blogs, as settled for brief 02A on 2026-09-11. Not used)
- Our own campaign rates, labeled as our sample (amended 2026-10-08: no measured first-party rates exist in the ledger; the indicative ranges published on /services/influencer-marketing/ are quoted as our planning ranges, never as measured data, settled fallback 3)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Master rate matrix: platform by follower tier. The page's centerpiece.
- Category multiplier table (amended 2026-10-08: replaced by a table of how tier costs moved on each platform in 2025, from Ebiquity; no source publishes a multiplier)
- Fraud checklist: eight signals of inflated accounts
- Feature image: a ring light and phone on a tripod, off-duty studio setup. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo in crisp sharp focus with legible screens (never blur, smudges or noise), no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the cost pillar and the Xiaohongshu cost page. Out: /services/influencer-marketing/, /pricing/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **See the full rate card**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | China KOL Pricing 2026: Rates by Tier (37 chars) |
| Meta description | 152 chars | What Chinese KOLs charge in 2026 by platform and follower tier, what is billed on top, the negotiation levers that work and the fraud red flags. (144 chars; amended 2026-10-08, the approved draft promised prices by category, which no source publishes) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. How much does a Chinese KOL cost?
2. What is the difference between KOL and KOC pricing?
3. Are usage rights included in a KOL fee?

## Calendar note for this week

Double 11 presale typically opens in the second half of October. Slot D in week 8 covers the countdown.

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
- [ ] File saved as `output/china-kol-pricing.md`
