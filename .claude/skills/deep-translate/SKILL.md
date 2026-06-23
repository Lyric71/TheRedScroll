---
name: deep-translate
description: |
  Rewrite a page's non-English content into 100% native, journalist-grade
  language across three escalating passes. Use when a localized page reads
  translated, machine-made, too spoken/familiar, or just "not native enough"
  and needs to read as if a native journalist wrote it from scratch. The user
  supplies the LANGUAGE and the PAGE (path); this skill drives the three-step
  rewrite, showing changes gradually and pausing between steps.
allowed-tools:
  - Read
  - Edit
  - Write
  - Grep
  - Glob
  - Bash
---

# Deep Translate: three-pass native rewrite

Drive a page from "translated and too familiar" to "a native editor wrote
this." The user gives you two inputs: the **target language** and the **page**
(a file path to a localized page, or an i18n strings file). If either is
missing, ask for it before starting.

## MANDATORY: source is the existing in-language version, never English

The source of the rewrite is **always the existing copy in the target
language** — the current state of the localized page or strings file you were
given. **Never** translate or rewrite from the English version of the content.
The English page is not an input to this skill. You are improving and
re-authoring what already exists in the target language so it reads fully
native; you are not rendering English into the target language. If no
in-language version exists yet for a section, say so and stop rather than
falling back to English. This rule overrides any instinct to "go back to the
original" — the original, for this skill, is the target-language file.

This skill ships with `HUMANIZER.md` (in this skill folder), a catalogue of
AI-writing tells and how to strip them. Read it before you start if you have
not already. It backs Step 1 below. If the host project also defines its own
translation/house-style rules (e.g. in a `CLAUDE.md` or style guide), honor
those too; they take precedence where they conflict with this skill. The
locale page is editorial state, not draft state: improve it, do not blindly
regenerate from English.

## Core standard (applies to every step)

- The result must read as **written, not spoken**. No casual, chatty, overly
  familiar register. Target a serious daily/business paper in that market:
  FR Le Monde / Les Echos, ES El País, ZH 财经 / 36氪, DE FAZ / Handelsblatt.
- **100% native, zero mistakes.** Grammar, idiom, collocation, rhythm,
  punctuation, and diacritics all at journalist/editor level.
- **Locale conventions are mandatory:** full diacritics (never ship unaccented
  copy), locale punctuation (ZH full-width `。，、：；！？""''（）`; FR guillemets
  `« »` with non-breaking spaces and NBSP before `: ; ! ?`; ES `¿ ¡`; DE `„…"`),
  and locale formatting for dates, currency, units, numbers.
- **Preserve structure:** headings, anchors, IDs, frontmatter keys, component
  props, ARIA labels, and any HTML/JSX stay intact. You are rewriting
  human-facing copy only, never code or identifiers.
- **SEO fields are in scope and must be rewritten too** (see below). They are
  prose, so they get the same native, journalist-grade treatment as body copy
  across all three passes, not left as-is.
- Honor any house rules the host project defines (banned words or characters,
  brand-name handling, subject/framing constraints). Apply them alongside the
  standards above.

## SEO fields are part of the rewrite

Every visitor- or search-facing string is prose and gets rewritten natively
across all three passes, exactly like body copy. Do not skip, freeze, or
merely "flag" these. Treat them as sections in their own right and show
before/after for each one you change:

- `<title>` / page title and the H1.
- meta description.
- OpenGraph copy: `og:title`, `og:description`, `og:image:alt`.
- Twitter/X card copy: `twitter:title`, `twitter:description`.
- JSON-LD / schema.org human-readable fields: `name`, `headline`,
  `description`, `alternativeHeadline`, `caption`, FAQ `question`/`answer` text.
- Image `alt` text and figure captions.
- Any SEO-oriented microcopy: breadcrumb labels, structured-data text.

Hold these to the same bar as the rest: native journalistic register, full
diacritics, locale punctuation, no AI tells. A meta description or og:title
that still reads translated is a failed pass. Keep them accurate to the page
and within sensible length (title ~60 chars, meta description ~150–160), but
write them as a native SEO editor would, not as a literal rendering of the
English tag.

**Slugs are the one exception.** A slug is a URL, not prose. Do not rewrite it
silently as part of these passes: changing a live slug breaks inbound links and
routing. If a slug is non-native or English under a non-English locale, flag
the mismatch and propose a native, URL-safe, diacritic-stripped slug plus a
redirect from the old one, and only change it once the user agrees. Everything
else above is rewritten without asking.

## How to show changes "bit by bit"

Work through the page **section by section in document order**. For each
section you change, post a short before/after to the user like this:

```
[Section: hero subhead]
- before: <old target-language text>
+ after:  <new target-language text>
why: <one short line on what was unnatural and what register you moved to>
```

Then apply the Edit. Move to the next section. Do not dump the whole page at
once; reveal it gradually as you go. Sections that already read perfectly
native: say "kept as-is" and move on — but this shortcut applies **only to
Steps 2 and 3**. Step 1 rewrites every section from scratch with no
exceptions (see Step 1 below).

## The three steps

The whole point is escalation. Each step assumes the previous one was **still
not native enough** and pushes further. Do not stop early because a step "looks
fine" — the next step exists precisely to find what still reads translated.

### Step 1 — Full native rewrite from scratch (NOT read-and-correct)

This step is a **complete rewrite**, not a proofreading pass. Do not read the
existing copy and patch the awkward bits. Rewrite **every section** from the
ground up, as if a native journalist were writing this page originally with a
blank sheet, then reconcile it with the original only to keep the facts,
structure, and meaning intact.

The mindset is: throw out the existing phrasing entirely and re-author the
content natively. Your source is the **existing target-language page**, never
the English version — see the mandatory rule at the top. Use that target-language
source only for **what** to say (facts, claims, numbers, structure), never for
**how** to say it. Every sentence must be
re-composed from scratch in native register, not lifted, lightly edited, or
reordered from the existing text. This covers the **SEO fields** above
(title, meta description, OG/Twitter copy, schema text, alt text) just as much
as the body: re-author each one from scratch in native register. Apply the
AI-tell patterns in `HUMANIZER.md` as you write.

- Do **not** keep a sentence just because it is "already correct" or "good
  enough." Rewrite it anyway. Correct-but-translated still gets rebuilt.
- Do **not** do sentence-by-sentence touch-ups. Re-author each section as a
  whole so the native rhythm and flow come from the new draft, not the old one.
- Fix register first (spoken/familiar → written/journalistic), then idiom,
  collocation, rhythm, punctuation, diacritics — but always inside a freshly
  written sentence, never as edits to the original one.

If a "kept as-is" instinct shows up in Step 1, override it: in this step,
nothing is kept as-is. (Reserve "kept as-is" for Steps 2 and 3, which polish
the rewrite this step produces.)

Go section by section with before/after as above. When the whole page is done,
tell the user **Step 1 complete**, then **pause ~15 seconds** before starting
Step 2 (e.g. `sleep 15` via Bash, or wait for the user).

### Step 2 — Push further

Treat Step 1's output as a draft that is still not native enough. Do **not**
look back at the English source. Work only from the current target-language
text. Restructure sentences, swap idioms for stronger native equivalents,
replace weak verbs with strong native ones, drop English-shaped clauses and
noun chains, prefer verbal constructions where the language favors verbs, vary
sentence length the way a native writes, tighten connectors and rhythm.

Show changes section by section. When done, say **Step 2 complete** and
**pause ~15 seconds** before Step 3.

### Step 3 — Push further again

Same premise: still not perfect native. Go deeper one more time. Hunt the last
residue of translation: stiff transitions, unidiomatic collocations, anything
that betrays an English skeleton, any flat or generic phrasing a top editor
would cut. Sharpen word choice and cadence to native-editor finish.

Show changes section by section. When done, say **Step 3 complete** and give a
one-line summary of the page's final state.

## Closing checks

After Step 3, before declaring done:

- Re-scan for unaccented copy, half-width punctuation inside native sentences,
  English slugs under a non-English locale, and any host-project banned words
  or characters.
- Confirm every SEO field was actually rewritten and now reads native: title,
  meta description, og:title/og:description/og:image:alt,
  twitter:title/twitter:description, schema name/headline/description, and all
  alt text. None should still read like the English source.
- Confirm structure, frontmatter keys, IDs, and component props are untouched
  (unless the user approved a change). Slugs stay as-is unless the user
  approved a rename plus redirect.
- Do **not** run a build unless the user asks.
- Do **not** propagate the rewrite to other locales unless the user says so.
