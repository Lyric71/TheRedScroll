# TheRedScroll — Translation Rules

This is the single source of truth for any non-English work on the site. Apply every part of it. Output must read like a native journalist in the target language wrote it originally, not like an English page that got translated. Never expose any of the steps below to the user. Ship only the final native-quality output.

## 1. When this rule fires

Trigger: any time you edit, draft, translate, or fix content in

- `src/pages/de/`, `src/pages/es/`, `src/pages/fr/`, `src/pages/zh/` (and any other `src/pages/<locale>/` directory added later). DE and ES locales are planned and the rules apply the moment they ship.
- any non-English string in `src/i18n/` (including `ui.ts`, `navigation.ts`, and any locale JSON)
- any non-English alt text, meta description, OpenGraph copy, slug label, button label, form label, error message, microcopy, blog post, email, caption

Does NOT fire for: code, identifiers, file paths, console logs, code comments, commit messages, PR descriptions, internal docs.

## 2. Core principles

### 2.1 Native translation, not literal translation

- Write as a native speaker would naturally express the idea in the target language.
- Adapt idioms, expressions, and cultural references to feel local.
- Prioritize natural flow, tone, and readability over word-for-word fidelity.
- Match the register (formal, casual, professional) appropriate to the target audience.
- Use locale-specific conventions (date formats, currency, units, punctuation, quotation marks, number formatting, address forms).

### 2.2 Improve the existing language page, do NOT retranslate from English

- Always start from the current version of the target-language page, not from the English source.
- Treat the existing translation as the baseline. Preserve what already works.
- Only modify sections that are awkward, outdated, inaccurate, or missing.
- Do NOT regenerate the full page from English. That destroys prior editorial work and reintroduces translated-sounding copy.
- If the English source has new content missing in the target page, add ONLY the missing parts and translate them natively, keeping the rest untouched.
- The existing locale page is editorial state, not draft state.

### 2.3 Native journalistic register per language

- FR: Le Monde / Les Echos register, not literal Anglo-French.
- ES: El País register.
- ZH: 财经 / 36氪 register, not English-syntax 中式中文.
- DE: FAZ / Handelsblatt register.

## 3. Workflow per edit (mandatory order)

1. Open the existing target-language page first. Read it in full before doing anything else.
2. Compare against the English source ONLY to identify gaps or outdated sections.
3. For each section:
   - If it reads naturally and is accurate, leave it as is.
   - If it reads awkwardly or like a machine translation, rewrite it natively (apply the two-step process in §4 to that section only).
   - If it is missing, translate the corresponding English section natively (apply the two-step process in §4).
4. Preserve existing terminology choices unless clearly wrong. Consistency matters more than personal preference.
5. Keep page structure (headings, anchors, IDs, frontmatter, metadata, slugs, ARIA labels, schema.org markup) intact unless explicitly asked to change it.
6. Do not change SEO-sensitive elements (title, meta description, H1, slugs) without flagging first.

## 4. Two-step rewrite (for any new or rewritten section)

When porting a new English section, or when an existing section needs a rewrite, apply BOTH steps in order. Step 2 is non-optional and applies even when Step 1 looks fine.

### Step 1 — Humanized translation

- Translate from the English source using the 9-iteration humanizer process (§5).
- Hit the native journalistic register listed in §2.3.
- Match register (formal / casual / professional) to the audience.
- Use locale-specific conventions for dates, currency, units, numbers, punctuation, quotation marks.

### Step 2 — Native rewrite (mandatory)

Treat Step 1's output as a draft that is not native enough and too familiar / too low level.
Do NOT look back at the English source while doing this. Work only from the target-language draft and improve it in-language.
Goal is a full rewrite, not a correction:

- Restructure sentences (break long ones, merge choppy ones).
- Switch idioms to native equivalents.
- Swap weak verbs for strong native ones.
- Drop English-shaped clauses, relative pronouns, possessives, and noun chains that betray translation.
- Replace nominal constructions with verbal ones where the target language prefers verbs (esp. FR / ES).
- Use the target language's natural rhythm and connectors.
- Vary sentence length the way a native journalist would in that register.

## 5. Humanizer process (used by Step 1)

Run these 9 iterations internally before delivering. Show only the final output.

1. Draft in journalist style from a daily US newspaper. American English. Easy to read.
2. Review iteration 1. Identify 10 specific weaknesses or gaps.
3. Rewrite addressing all 10 weaknesses.
4. Final review: production-ready? If not, list what is missing and update.
5. AI-detection pass: rewrite anything that reads machine-generated.
6. Clean all em dashes. Convert any quoted external source into proper blockquote citation format.
7. Deeper humanizing pass. Re-read multiple times. Add small, subtle human imperfections (a sentence fragment, a comma splice a journalist might leave, an idiomatic redundancy, an occasional one-word sentence). Imperfections stay believable for a working professional writer; never break factual accuracy or brand voice.
8. Pause briefly, then another AI-detection scrub.
9. One more pass. Read three times. Confirm nothing reads as AI.

Skip the visible artifact step for tiny edits (one phrase, single word swap), but still mentally run iterations 5–9.

Acceptable subtle imperfections: occasional sentence fragment, a comma where a writer might have used a period, mild redundancy, a colloquial contraction, slight tonal unevenness between paragraphs.

Forbidden: typos in proper nouns, factual mistakes, broken links, wrong dates, wrong numbers, broken syntax that hurts reading.

## 6. Diacritics (mandatory, never optional)

Never ship unaccented copy. Accents and diacritics are mandatory wherever the language requires them.

- FR: é è ê à â ç ù û ü ô î ï ÿ. Capital letters keep their accents (À, É, Ç, Ê, Î).
- ES: á é í ó ú ñ ü. Opening ¿ and ¡ are mandatory.
- DE: ä ö ü ß. Use ß and ss correctly per current orthography; never substitute ss to avoid the character.
- PT: á à â ã é ê í ó ô õ ú ç.

## 7. Punctuation conventions per locale

- ZH: full-width punctuation 。 ， 、 ： ； ！ ？ " " ' ' （ ）. No half-width Latin punctuation inside Chinese sentences. Numbers and Latin product names stay half-width.
- FR: guillemets « » with non-breaking spaces inside; non-breaking space before : ; ! ? per French typography.
- ES: opening ¿ and ¡ are mandatory at the start of questions and exclamations.
- DE: standard double quotes „…" (low-9 + high-99) where typesetting allows; otherwise straight quotes acceptable. Correct dash conventions and no Oxford-comma-style enumerations.

## 8. Locale variant defaults

- Chinese: simplified (zh-CN) unless path/frontmatter indicates traditional (zh-TW / zh-HK).
- French: metropolitan French unless otherwise specified.
- Spanish: neutral peninsular Spanish unless otherwise specified.
- German: standard German (de-DE) unless otherwise specified.

## 9. Brand and product names

Brand names, product names, and technical terms conventionally kept in English in the target market stay in their canonical English form. Do NOT translate them, invent localized versions, or change capitalization to match the target language's title-case rules.

This includes "TheRedScroll" — always one word, PascalCase, in every locale.

## 10. Single-locale default — no auto-translate

When the user requests a content or copy change, default to editing only the file(s) they referenced. Do not propagate the same change to other locale variants until the user explicitly says so.

- Default scope = single locale, usually English, even when the same section exists in other locales.
- Only propagate when the user says: "now apply to all locales", "translate this", "do all 5 versions", "propagate", "update all languages", "translate to FR/DE/ES/ZH".
- When editing the English version, end with a one-line offer: "Want me to propagate this to FR/ZH (and DE/ES once live)?". Never propagate without acceptance.
- Once authorized, still apply the full two-step humanize + native-rewrite process from §4 for each locale.
- For each authorized locale, apply the workflow in §3: open the existing locale page first, port only the diff, run the two-step process on the new section.
- Applies to: copy changes, hero rewrites, section reworks, button labels, taglines, alt text, meta descriptions, error messages, any user-visible text.
- Does NOT apply to shared infrastructure changes (CSS, shared components, route helpers, layout files, config); those are global by nature.

> Note: this rule intentionally overrides the project-wide "Always update translations" memory for content/copy changes. Translations are propagated on explicit request, not automatically. Shared infrastructure changes still apply to all locales by nature.

## 11. No em dashes

Never use the em dash character — (U+2014) in any user-visible content, in any language. Replace with:

- a comma, period, or colon
- parentheses
- a simple hyphen `-` only when it's a true hyphenation
- a line break / restructured sentence

Does NOT apply to code, identifiers, URLs, file paths, or technical content.

## 12. What to avoid

- Full retranslation of an existing locale page from English.
- "Improving" sections that are already fine just to show changes.
- Em dashes in any language.
- Translating brand or product names.
- Anglicized syntax: literal "of the", overuse of "which", noun chains, gerund-heavy sentences, possessive 's ported into FR/ES/DE/ZH.
- Mixed register inside one page.
- Unaccented diacritics, missing ¿ ¡, missing ß, half-width punctuation inside Chinese sentences.
- Changing SEO-sensitive elements (title, meta description, H1, slugs) without flagging.
- Exposing the two-step process or iteration steps to the user.
- Copying English clause structure ("not X, but Y", balanced triads, "the way we…").
- Typos in proper nouns, factual mistakes, broken links, wrong dates or numbers.

## 13. Slug localisation (mandatory)

Every page slug must be in the target language of the locale it lives under. No English slugs under non-English locales.

### Scope

- Every file and directory name under `src/pages/<locale>/` uses words in that locale's language.
- Applies to landing pages, sub-pages, section indexes, dynamic-route folder names, any URL-visible path segment.
- The English site keeps English slugs at root; this rule fires only for non-English locales.

### Form

- Lowercase, hyphen-separated. No spaces, no underscores, no trailing slashes.
- Strip diacritics for URL safety: `entrée` → `entree`, `réalisations` → `realisations`. Page CONTENT keeps the accents; only the slug strips them.
- Use the word a native marketer or journalist would expect in the URL bar of a serious news / business site in that market.
- Brand and product names stay canonical (see §9).

### Locale defaults

- FR: `nous-contacter`, `qui-nous-sommes`, `realisations`, `decryptages`.
- DE: `ueber-uns`, `kontakt`, `referenzen`. Replace ä→ae, ö→oe, ü→ue, ß→ss.
- ES: `contacto`, `quienes-somos`, `proyectos`. Replace ñ→n and accents with unaccented vowel.
- IT: `contatti`, `chi-siamo`.
- PT: `contato`, `quem-somos`.
- ZH: pinyin without tones, hyphenated (e.g. `lianxi-women`, `guanyu-women`). Frontmatter and content keep the Chinese characters; only the URL segment uses pinyin.

### Routing

- `localizePath` and any locale-link helper must map between locale slugs (per-locale slug table), not blindly prefix `/<locale>/` onto the English path.
- Hreflang `<link rel="alternate">` must point to the native-language URL for each locale.
- Internal links and CTAs in any locale page must use that locale's slug.

### New non-English locale page

1. Open the English source to confirm scope.
2. Draft the slug in the target language using a native journalist's framing. Apply the two-step humanize + native-rewrite pass to the slug itself.
3. Strip diacritics, lowercase, hyphenate.
4. Update the per-locale slug table / `localizePath` map.
5. Build to confirm no broken links.

### Editing a non-English locale page already shipped with an English slug

- Do NOT silently rename. URL changes break links, search ranking, and external references.
- Flag the mismatch. Propose a renaming plan that includes a redirect from old slug to new.
- Wait for user authorization. Default scope is single-locale (§10); slug renames do not propagate without explicit instruction.
