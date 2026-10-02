# Run log: 2026-10-02, open item closure

Cyril's instruction, Oct 2, 2026: no publishing job leaves a TODO behind;
close every open item and change the rule so it does not happen again. This
run read every publish and draft log from 2026-09-18 to 2026-10-02, every
draft in `output/` and every file in `src/content`, and closed each item it
found. Nothing below is left open.

## Rule changes

- `CLAUDE.md`: new section "No TODO leaves a run". Client figures settled
  (quoted only as published on `/work/<client>/`). Notification section no
  longer passes `--todo` or lists open TODOs. Oxford comma and English slugs
  recorded as settled.
- `SPEC.md`: asset brief line `CLIENT SIGN-OFF NEEDED` replaced by
  `CLIENT FIGURES`; screenshots, charts and downloads are produced by the run
  or listed as none. "When to stop and ask" replaced by ten settled fallbacks
  and a stop rule. Definition of done gains the no TODO check.
- `RUNBOOK.md`: publish step runs the check on the draft first, wires in-links
  and fixes contradicted pages in every locale; email has no TODO section;
  the "leave TODO: client sign-off" rows are gone.
- `logs/TEMPLATE.md`: "Flags" replaced by "Items found and closed".
- `../.claude/CLAUDE.md`: the rule in one paragraph.
- `scripts/notify-publish.mjs`: `--todo` (and `--open`, `--followup`)
  refused with exit 2; a `--note` that reads like an open item list refused.
- `scripts/check-no-todo.mjs` (new): fails on TODO, FIXME, TBD, TKTK, XXX,
  "open TODOs" or a client sign-off placeholder in `src/content`, or in the
  files passed to it. Wired into `npm run build` (prebuild) and
  `npm run check:todo`.
- `scripts/run-daily.ps1`: both prompts carry the rule; a per mode lock file
  stops a second session starting while one runs (the relauncher overlap of
  2026-09-29, 2026-10-01 and 2026-10-02).

## Items found and closed

| Item (where it was raised) | How it was closed |
|---|---|
| Retracted Juguang agent only claim in seven articles, five locales (04B draft log, 09-29 and 10-01 publish logs) | Ziyouxing Studio page re-fetched twice on 2026-10-02 (updated 2026-09-18, no official source for the claim). Claim removed from all 35 files; replaced where needed by the verifiable lines (advertiser and agency accounts, separate overseas industry list). `updatedDate` 2026-10-02 on each file. Ledger entry corrected and closed. |
| "Jiguang" spelling for 聚光 | Juguang in all 35 files, the ledger and llms.txt. URLs unchanged. |
| /rednote-agency/ and /platforms/rednote/ said Juguang requires a Chinese entity (04B draft log) | Sentence replaced in all ten locale pages with the overseas industry list fact. |
| Our Xiaohongshu ad planning ranges have no sample size (04B) | Settled: quoted as published planning figures on /services/advertising/, labeled as ours, never as measured data. Ledger note rewritten. Cost per lead stays cut. |
| Advertising Law date: gov.cn text is the October 2018 version, articles said 2021 (04C) | Re-fetched 2026-10-02. Labels now "as amended October 2018" in china-agency-pricing-models and food-beverage, five locales each. The 2021 amendment (checked) changed Arts. 29, 55, 57, 58 and 60 only in the registration duty; every cited article reads the same. Ledger updated. |
| WeChat ads article gave local promotion at 300 yuan a day; Tencent says 1,000 (05A draft log) | Corrected in five locales with a Tencent Ads citation; the unsourced 3 to 5 km radius cut. Ledger updated. |
| /wechat-agency/ and /platforms/wechat/ said registration takes 1 to 2 weeks; Tencent says 7 to 15 working days (05B draft log) | Both pages, five locales: Tencent's 7 to 15 working days for an overseas company; the platform page's "Live in 2 weeks" aligned with the agency page's four weeks. |
| Client sign-off for Camper, Langnese, Master Martini, Mission Foods (09-18, 09-25, 10-02 publish logs) | Settled fallback: only what each `/work/` page publishes, which is all the articles use. Ledger table rewritten. TODO comments removed from the drafts. |
| First party data asked for and never available: community hours, rejection reasons, moderated examples, traffic pool progression | Settled fallback in SPEC; the articles already stand on platform sources. Markers removed from drafts, including 05B before its publish. |
| Designer extras: screenshots, charts, PDFs (09-22, 09-24, 09-25, 09-28, 09-29 publish logs) | Settled fallback: not produced, not carried. Pending drafts 05A and 05B list them as none. |
| Inbound links in English only: case studies to industry pages (09-18, 10-02 publish logs) and the 02A in-links in 01A and 01B (schedule note) | Added in FR, ZH, DE and ES on the existing phrase, sixteen case study pages and eight articles. An audit of every EN in-link now finds no locale gap. |
| 04C hero showed handwritten claim words (退红, 稳定, 无限回购) on the prop page (09-29 draft log, 10-01 publish log) | Regenerated with gpt-image-2 at high quality: only strike throughs and circles, neutral note text. Sharpness 1584.5 full frame, 1592.6 crop. Checked visually. |
| Briefs proven wrong: 02A (cite a competitor), 03C (WFOE cost), 04A (unpublished hours), 04B (deposit, own CPM), 04D (Master Martini as a WeChat China case), 05A (competitor, deposit, shallow focus) | Amended at source in `briefs/`, with later briefs repeating the deposit error (10-12, 10-20). |
| Astro check ran out of memory on scratch files (09-29, 10-01, 10-02 publish logs) | `editorial/logs/scratch` and `runs` excluded in tsconfig.json and ignored in git. astro check now passes in the repo root. |
| Relauncher overlap (09-29, 10-01, 10-02 logs) | Lock file in `run-daily.ps1`. The relauncher itself lives outside this repo. |
| schedule.csv row 02A date columns shifted (10-01, 10-02 publish logs) | Fixed: published_on 2026-09-14, notes back in the notes column. |
| llms.txt missing three September guides (09-18 publish log) | Already listed; "Last updated" set to 2026-10-02. |
| Industries and tools absent from navigation (09-18 publish log) | Already closed by the Insights mega menu (commit 620488d). |
| English slugs under non English locales "flagged, not renamed" (every publish log) | Settled: the house convention per RUNBOOK; recorded in CLAUDE.md, not raised again. |
| Oxford comma decision (05A draft log) | Settled: always, per STYLE_GUIDE 4.9; recorded in CLAUDE.md. |
| /weibo-agency/ "monitor brand mentions daily" versus the pricing page (04A draft log) | No contradiction: the agency page describes the service, the pricing page says which package includes it, and 04A follows the pricing page. |
| Who pays platform verification fees (04A draft log) | The article states only the sourced line (platform fees billed per application); nothing to confirm. |
| Qualification matrix URL returned 502 (03B draft log) | Already a dated recheck note on its ledger entry. |
| Pugongying 10% fee from a 2022 source (04B draft log) | Settled fallback 9: allowed with the date in the citation. |

## Verification

- `npm run check:todo`: 140 files clean.
- `npx astro check`: 288 files, 0 errors, 0 warnings, run in the repo root.
- `npm run build`: passed, including the new prebuild check.
