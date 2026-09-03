# TheRedScroll editorial system

Fifty-two article briefs and the specs Claude Code drafts them from. Lives
in `editorial/` inside the TheRedScroll repo so the pipeline can publish
straight into `src/content/blog/`.
September 7 to December 4, 2026. One article per working day.

## Start here

1. `RUNBOOK.md` for the daily process and the calendar exceptions.
2. `CLAUDE.md` for voice and the standing rules. Claude Code loads this
   automatically.
3. `SPEC.md` for the output contract and the definition of done.

## Layout

```
CLAUDE.md                 standing rules, auto-loaded
SPEC.md                   output contract
RUNBOOK.md                daily process
schedule.csv              52 rows, date to brief, status tracking
briefs/                   52 per-article specs, named by publish date
sources/
  site-profile.md         cached site fetch, refresh monthly
  verified-sources.md     the source ledger, read before researching
output/                   finished drafts land here
logs/                     one run log per article, TEMPLATE.md to copy
```

## The daily command

```
Draft today's article.
```

## The pipeline

Chinese deep research (every source validated twice), `/createarticle`,
`/content-quality-us` on every article, `/generate-image-openai` for the
hero, then `/createblogarticle` on request, then an email to Cyril when the
publish is done. `CLAUDE.md` has the table.

## The one rule people get wrong

The upstream CreateArticle skill tells you to plant deliberate typos. This
project forbids it. The house copy at `.claude/skills/createarticle/` runs a
cadence pass instead, and `CLAUDE.md` says so at the top. Humanize through
cadence only.
