# Daily runbook

One article per working day, Monday through Friday except Wednesday.
Fifty-two articles, September 7 to December 4, 2026.

## The daily command

Open Claude Code at the repo root (or in `editorial/`) and paste:

```
Draft today's article.
```

That is the whole prompt. `CLAUDE.md` tells Claude what "today's article"
means. If you want a specific one:

```
Draft brief 04C.
```

To publish a reviewed draft:

```
Publish china-social-media-marketing-cost
```

## What Claude does, in order

1. Reads `CLAUDE.md` and `SPEC.md`.
2. Finds today's row in `schedule.csv`. If today has no row, takes the oldest
   row with status `not_started` and says so.
3. Reads that brief file in `briefs/`.
4. Reads `sources/site-profile.md` instead of fetching the site, unless the
   profile is more than a month old.
5. Reads `sources/verified-sources.md` and reuses any figure already logged
   and verified twice.
6. Runs deep research in Chinese for every figure still missing. Validates
   each source (check 1: fetch the page, confirm figure, unit, period, date).
   Writes the research note into the run log. No body copy before this.
7. Runs `/createarticle` (13 iterations, iteration 7 as the cadence variant,
   iteration 8 re-fetches every cited URL for check 2), printing the tracker.
   Writes `output/<slug>.md`.
8. Runs `/content-quality-us` on `output/<slug>.md` (18 passes, in place).
   House SEO ceilings (52 / 152 / 25 words) override the skill's own.
9. Runs `/generate-image-openai` with the prompt from the feature-image block,
   checks the image visually, converts it to webp, saves it to
   `public/images/blog/<slug>.webp`.
10. Appends new figures to `sources/verified-sources.md` with both check dates.
11. Updates the `schedule.csv` row: status `image_ready`, with `drafted_on`,
    `quality_passed_on` and `image_generated_on` filled.
12. Writes `logs/YYYY-MM-DD.md`.

Then it stops. A person reviews the draft (see below) and asks for publication.

## Publishing a reviewed draft

`Publish <slug>` runs `/createblogarticle` on `output/<slug>.md`. That skill
creates `src/content/blog/<slug>.md`, maps the frontmatter to the blog schema,
converts the plain-text internal references into links, wires the hero image,
propagates to FR, ZH, DE and ES, updates every listing surface, and runs the
build. It then runs `/deep-translate` on each locale, all three passes, FR
then ZH then DE then ES, per `TRANSLATION_GUIDE.md`. The propagation and the
deep translation are part of the publish step, never optional, never
deferred. Claude sets the row to `published` with `published_on`.

Industry and tool pages are the exception: their sections exist in English
only, so they publish in English until localized sections are built.

Then, in this order, and only when each step passes: `npm run build`,
`npx astro check`, `git add` of everything the article touched (content in
every locale, hero image, listing surfaces, `editorial/output`, `logs`,
`schedule.csv`, `sources`), one commit on main
(`feat(insights): publish <slug>`), `git push origin main`. A failed build or
check means no commit, no push, the row stays at `image_ready`, and the
email reports the failure. Vercel deploys from main, so the push is what
puts the article live.

When the publish finishes, Claude runs `editorial/scripts/notify-publish.mjs`
from the repo root. It sends one email through Resend to
cyril.drouin@gmail.com: subject `Published: <title>`, body with the live URL
per locale, the hero image path, build status, open TODOs and the run log
path. `RESEND_API_KEY` is already in `.env`. If the send fails, Claude says so
instead of skipping silently.

Industry pages publish into `src/content/industries/` and tool pages into
`src/content/tools/` (English only, no locale propagation). Their FAQ section
moves from the body into the `faqs` frontmatter field so the page renders the
accordion and emits FAQPage schema.

Nothing publishes itself. Drafts wait in `output/` until someone says so.

## Weekly rhythm

| Day | Slot | Job |
|---|---|---|
| Monday | A | The money question. Cost and pricing. Ends by sending the reader to the pricing page, never quoting it. |
| Tuesday | B | Platform depth. Feeds a money page. |
| Wednesday | - | No draft. Review and publish Monday and Tuesday. |
| Thursday | C | Audience piece. Pre-entry on odd weeks, in-market on even weeks. |
| Friday | D | Vertical page or teardown. The link earners. |

If a week slips, drop slot D. Never drop slot A. If two weeks slip, run A and B
only and accept a slower build.

## The four dates that break the rhythm

| When | What | What to do |
|---|---|---|
| Sept 25 to 27 | Mid-Autumn Festival | China-side review finishes Thursday Sept 24. |
| Oct 1 to 7 | National Day Golden Week | Four slots fall inside it: Oct 1, 2, 5 and 6. Draft all four during the week of Sept 28 and schedule them. |
| Nov 11 | Double 11 | Brief 08D is the countdown, published Oct 30. Brief 10D is the results piece and must publish within 48 hours of the event. |
| Dec 12 | Double 12 | Falls after the plan ends. Add it to week 14 if the cadence continues. |

To batch the Golden Week four:

```
Draft briefs 04C, 04D, 05A and 05B. One at a time, full pipeline on each.
Do not merge them into one run.
```

## Three briefs that need an early start

| Brief | Publishes | Start | Why |
|---|---|---|---|
| 03D Camper teardown | Sept 25 | Week 1 | Client figures need sign-off before drafting. |
| 13A Budget calculator | Nov 30 | Week 11 | Needs build time, not just copy. |
| 13D Benchmarks report | Dec 4 | Week 11 | Needs a data pull across managed accounts. |

## Before the first run

1. `sources/site-profile.md` is pre-populated from the Sept 3 crawl. Refresh
   due Oct 1: `Refresh sources/site-profile.md from the repo and the live site.`
2. Seed `sources/verified-sources.md` with any platform figures you already
   trust. Every one you add now is one Claude does not research later. Each
   seeded entry still needs its two check dates.
3. Get Camper sign-off started. Brief 03D publishes in week 3.
4. `OPENAI_API_KEY` and `RESEND_API_KEY` are in `.env` at the repo root
   (added Sept 3, 2026). Nothing else to configure for images or email.
5. Pricing rule, decided Sept 3, 2026: `STYLE_GUIDE.md` 6.4 wins. No
   monthly figure, per-item rate or tier name in any article. Refer to the
   pricing page by name. Brief 04A was renamed accordingly.
6. `/industries/` and `/tools/` exist since Sept 3, 2026 (collections,
   listing pages, article template). They are not in the navigation or the
   footer yet because those menus are shared across five locales and the
   sections are English only. Add an English-only link when the first page
   goes live, or leave them reachable from article body links.

## Reviewing a draft

Three checks that catch most problems in under five minutes.

1. **Search the file for the em dash character.** Zero results, or it goes back.
2. **Read every blockquote.** Each needs a publisher and a date. A blockquote
   with no date is a fail. Spot-check two against the ledger: both check
   dates present, URL live.
3. **Read the first 200 words.** If a reader who stops there does not have the
   answer, the introduction is doing the wrong job.

Then check the length. Being 25% under target means a section was skipped.
Then open the hero image in `public/images/blog/`. No text, no logos, no
mainland-professional subject when the reader is a foreign marketer.

## If something goes wrong

| Problem | What to do |
|---|---|
| A figure cannot be sourced in Chinese or English | Claude cuts the claim and marks it. Decide whether the section still stands. |
| A source fails check 2 (page changed or gone) | Claude fixes the blockquote or cuts the claim. Never ship a citation that failed re-fetch. |
| A client number is missing | Claude leaves `TODO: client sign-off`. Chase it, do not guess. |
| A competitor claim cannot be verified | Claude drops that competitor from the listicle. Correct behavior. Leave it. |
| Claude planted a typo | It ignored `CLAUDE.md` and the house skill. Point at the conflict section and rerun iteration 7. |
| The draft reads generic | The angle field was skipped. Rerun with `Reread the angle in the brief and rewrite.` |
| Two articles cite the same figure differently | The ledger was not updated. Fix the ledger, then fix both files. |
| Image generation fails | Check `OPENAI_API_KEY` in `.env`. Retry once with a lightly reworded prompt. Row stays at `quality_passed`. |
| Image has text, a logo or a wrong subject | Regenerate. Never wire in an unchecked image. |
| The quality pass loosened the SEO fields past 52 / 152 | The skill's own ceilings leaked through. Recount and trim. |
| No publish email arrived | Run the notify script again with `--dry-run` to see the payload, then without it. Check `RESEND_API_KEY` in `.env`. |

## Automating it

The pipeline runs on Cyril's machine through Windows Task Scheduler and the
local Claude Code CLI. Local on purpose: the user-level skills, the `.env`
keys and the full model are all here, and a cloud routine has none of them.

| Task | When (Shanghai) | What | Default |
|---|---|---|---|
| TheRedScroll Editorial Draft | Mon, Tue, Thu, Fri 07:00 | `run-daily.ps1 -Mode draft`: steps 0 to 3, stops at `image_ready` | enabled |
| TheRedScroll Editorial Publish | every day 09:00 | `run-daily.ps1 -Mode publish`: publishes every due `image_ready` row, builds, commits, pushes, emails | enabled (Cyril, Sept 3, 2026) |

Scripts live in `editorial/scripts/`. `register-tasks.ps1` creates or updates
both tasks. Each run writes its console output to `logs/runs/<date>-<mode>.txt`
next to the article run log. The machine has to be on, or asleep with wake
allowed, at the run time. A missed run fires as soon as the machine is back.

Publishing is fully unattended since Sept 3, 2026: a draft made at 07:00 is
published at 09:00 the same day unless someone sets its row to `blocked`
before then. That two-hour window is the review. To pause publishing:

```
Disable-ScheduledTask -TaskName 'TheRedScroll Editorial Publish'
```

Runs use `--dangerously-skip-permissions` so nothing pauses for approval, and
pin the most capable model. Never lower the model to speed a run up.
