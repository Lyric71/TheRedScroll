# TheRedScroll Design Guide

**For use by Claude Code when building any TheRedScroll web page, component, or digital asset.**

Read this entire document before writing any code. Follow every rule. No exceptions.

---

## 1. Color palette

White background across the entire website. No dark themes. No colored page backgrounds.

### Core colors

| Name | Hex | RGB | Usage |
|---|---|---|---|
| White | `#FFFFFF` | `255, 255, 255` | Page background, card backgrounds |
| Rice paper | `#F7F2EE` | `247, 242, 238` | Card fills, section backgrounds, containers |
| Ink | `#1A1A1A` | `26, 26, 26` | Headlines, body text, primary text, dark sections |
| Vermillion | `#CC3333` | `204, 51, 51` | Brand accent: logo, numbered labels, primary CTA buttons, category tags, active indicators |
| Vermillion hover | `#B02D2D` | `176, 45, 45` | Hover state for vermillion buttons only |
| Stone | `#5C5C5C` | `92, 92, 92` | Secondary text, descriptions, subheads, meta info |
| Warm gray | `#E8E0D8` | `232, 224, 216` | Borders, dividers, subtle UI elements |

### Derived values

| Name | Value | Usage |
|---|---|---|
| Border light | `rgba(0, 0, 0, 0.08)` | Default borders on white backgrounds |
| Border strong | `rgba(0, 0, 0, 0.15)` | Hover borders, secondary button borders |
| Dark section body | `rgba(255, 255, 255, 0.6)` | Body text inside ink-background sections |
| Dark section muted | `rgba(255, 255, 255, 0.4)` | Copyright text, footer secondary text |
| Dark section divider | `rgba(255, 255, 255, 0.1)` | Horizontal rules inside ink sections |

### CSS variables

```css
:root {
  --color-white: #FFFFFF;
  --color-rice-paper: #F7F2EE;
  --color-ink: #1A1A1A;
  --color-vermillion: #CC3333;
  --color-vermillion-hover: #B02D2D;
  --color-stone: #5C5C5C;
  --color-warm-gray: #E8E0D8;
  --color-border: rgba(0, 0, 0, 0.08);
  --color-border-strong: rgba(0, 0, 0, 0.15);
  --color-dark-body: rgba(255, 255, 255, 0.6);
  --color-dark-muted: rgba(255, 255, 255, 0.4);
  --color-dark-divider: rgba(255, 255, 255, 0.1);
}
```

### Color rules

1. Vermillion is an accent. It appears in: brand name/logo, numbered labels ("01", "02"), primary CTA buttons, category tags, active sidebar indicators, footer section titles. Nowhere else.
2. Vermillion is never used as a section background or card background.
3. One ink-background section per page maximum (in the content body). The navbar and footer are always ink but do not count toward this limit.
4. Inside ink sections: vermillion for overline labels, `#FFFFFF` for headlines, `var(--color-dark-body)` for body text.
5. Card containers use `var(--color-rice-paper)`. Never white-on-white cards.
6. Never use pure black `#000000`. Use `var(--color-ink)` everywhere.
7. No colors outside this palette. No pastels, no blues, no greens, no grays other than stone and warm gray.

---

## 2. Typography

### Font stack

```css
:root {
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

Load Inter from Google Fonts at weights 400 and 500 only:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

No serif fonts. No monospace except inside `<code>` blocks. No decorative or display fonts.

### Type scale

| Element | Font size (desktop) | Font size (mobile, below 640px) | Weight | Color | Line height | Letter spacing |
|---|---|---|---|---|---|---|
| H1 | `40px` | `28px` | `500` | `var(--color-ink)` | `1.2` | `0` |
| H2 | `28px` | `22px` | `500` | `var(--color-ink)` | `1.25` | `0` |
| H3 | `18px` | `18px` | `500` | `var(--color-ink)` | `1.3` | `0` |
| Body | `16px` | `16px` | `400` | `var(--color-ink)` | `1.6` | `0` |
| Body secondary | `14px` | `14px` | `400` | `var(--color-stone)` | `1.5` | `0` |
| Small / captions | `13px` | `13px` | `400` | `var(--color-stone)` | `1.4` | `0` |
| Meta (date, reading time) | `12px` | `12px` | `400` | `var(--color-stone)` | `1.4` | `0` |
| Overline / label | `11px` | `11px` | `500` | `var(--color-vermillion)` | `1.2` | `0.05em` |
| Button text | `14px` | `14px` | `500` | `#FFFFFF` or `var(--color-ink)` | `1` | `0` |

### Type rules

1. Two weights only: `400` and `500`. Never use `300`, `600`, `700`, or `bold`.
2. Overline labels: `text-transform: uppercase`. `letter-spacing: 0.05em`.
3. Headlines: sentence case. Never Title Case. Never `text-transform: uppercase` (except overlines).
4. No `font-style: italic` anywhere on the site.
5. Body text max-width: `680px`. Never let paragraphs stretch beyond this.
6. No `text-decoration: underline` on body text. Links get underline on hover only.
7. No `text-shadow`.

---

## 3. Spacing

### Spacing scale

```css
:root {
  --space-2xs: 2px;
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
}
```

### Section spacing

| Context | Desktop | Mobile (below 640px) |
|---|---|---|
| Between major page sections | `96px` | `64px` |
| Section title to content below | `24px` | `24px` |
| Between cards in a grid | `16px` | `16px` |
| Padding inside cards | `24px` | `20px` |
| Paragraph to paragraph | `24px` (margin-bottom) | `24px` |
| H2 margin-top | `48px` | `40px` |
| H2 margin-bottom | `16px` | `12px` |
| H3 margin-top | `32px` | `24px` |
| H3 margin-bottom | `12px` | `8px` |

### Layout dimensions

| Element | Value |
|---|---|
| Max content width | `1200px` |
| Body text max width | `680px` |
| Page horizontal padding (desktop, 1025px+) | `48px` |
| Page horizontal padding (tablet, 641px to 1024px) | `32px` |
| Page horizontal padding (mobile, 640px and below) | `20px` |
| Content centering | `margin: 0 auto` on the max-width wrapper |

### Breakpoints

```css
/* Mobile: 0 to 640px */
/* Tablet: 641px to 1024px */
/* Desktop: 1025px and above */

@media (max-width: 640px) { /* mobile */ }
@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }
@media (min-width: 1025px) { /* desktop */ }
```

---

## 4. Components

### 4.1 Primary button

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 28px;
  background: var(--color-vermillion);
  color: #FFFFFF;
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s ease;
}
.btn-primary:hover {
  background: var(--color-vermillion-hover);
}
.btn-primary:active {
  transform: scale(0.98);
}
.btn-primary:focus-visible {
  outline: 2px solid var(--color-vermillion);
  outline-offset: 2px;
}
```

### 4.2 Secondary button

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 28px;
  background: transparent;
  color: var(--color-ink);
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
  text-decoration: none;
  border: 1px solid var(--color-border-strong);
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.btn-secondary:hover {
  background: var(--color-rice-paper);
  border-color: var(--color-warm-gray);
}
.btn-secondary:active {
  transform: scale(0.98);
}
.btn-secondary:focus-visible {
  outline: 2px solid var(--color-ink);
  outline-offset: 2px;
}
```

### 4.3 Cards

**Rice paper card (service, feature):**
```css
.card {
  background: var(--color-rice-paper);
  border: none;
  border-radius: 10px;
  padding: 24px;
}
@media (max-width: 640px) {
  .card { padding: 20px; }
}
```

**Bordered card (blog post, job listing):**
```css
.card-bordered {
  background: var(--color-white);
  border: 0.5px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.15s ease;
}
.card-bordered:hover {
  border-color: var(--color-border-strong);
}
```

No `box-shadow` on any card. Ever. No `background` change on hover for any card.

### 4.4 Section divider (vermillion bar)

```css
.section-bar {
  width: 40px;
  height: 3px;
  background: var(--color-vermillion);
  border-radius: 0;
  margin-bottom: 12px;
}
```

### 4.5 Dark section

One per page maximum (not counting navbar and footer).

```css
.dark-section {
  background: var(--color-ink);
  border-radius: 12px;
  padding: 48px;
}
@media (max-width: 640px) {
  .dark-section { padding: 32px 20px; }
}
.dark-section .overline {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-vermillion);
  margin-bottom: 8px;
}
.dark-section h2 {
  color: #FFFFFF;
  margin-bottom: 8px;
}
.dark-section p {
  color: var(--color-dark-body);
}
```

If the dark section is full-width (edge to edge), set `border-radius: 0`.

### 4.6 Numbered labels

```css
.number-label {
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-vermillion);
  line-height: 1;
  margin-bottom: 8px;
}
```

Format: "01", "02", "03". Always two digits with leading zero. Always vermillion.

### 4.7 Form fields

```css
.form-label {
  display: block;
  font-size: 13px;
  font-weight: 400;
  color: var(--color-stone);
  margin-bottom: 4px;
}
.form-label .required {
  color: var(--color-vermillion);
}
.form-input {
  display: block;
  width: 100%;
  height: 44px;
  padding: 0 12px;
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-ink);
  background: var(--color-white);
  border: 0.5px solid var(--color-border);
  border-radius: 6px;
  outline: none;
  transition: border-color 0.15s ease;
}
.form-input::placeholder {
  color: var(--color-stone);
  opacity: 0.6;
}
.form-input:hover {
  border-color: var(--color-border-strong);
}
.form-input:focus {
  border-color: var(--color-ink);
}
textarea.form-input {
  height: auto;
  min-height: 120px;
  padding: 12px;
  resize: vertical;
  line-height: 1.5;
}
.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: var(--color-stone);
  line-height: 1.4;
}
.form-checkbox input[type="checkbox"] {
  width: 16px;
  height: 16px;
  margin-top: 2px;
  flex-shrink: 0;
  accent-color: var(--color-vermillion);
}
```

No `box-shadow` on inputs. No colored borders on focus (ink only). No floating labels.

### 4.8 Inline links

```css
a {
  color: var(--color-vermillion);
  text-decoration: none;
  transition: text-decoration 0.15s ease;
}
a:hover {
  text-decoration: underline;
}
```

Inside ink/dark sections:
```css
.dark-section a {
  color: var(--color-vermillion);
}
```

### 4.9 Category tag

```css
.category-tag {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-vermillion);
  line-height: 1.2;
}
```

### 4.10 Highlight / callout box

Used inside articles. Max 2 per article.

```css
.callout {
  background: var(--color-rice-paper);
  border-left: 3px solid var(--color-vermillion);
  border-radius: 0;
  padding: 20px;
  margin: 32px 0;
}
.callout p {
  font-size: 16px;
  font-weight: 400;
  color: var(--color-ink);
  line-height: 1.6;
  margin: 0;
}
```

---

## 5. Iconography

- No icons unless absolutely necessary for navigation (hamburger, chevron, arrow, social).
- Style: line only, `1.5px` stroke, `var(--color-ink)` on light backgrounds, `#FFFFFF` on dark backgrounds.
- No filled icons. No colored icons (except when icon sits inside a vermillion button, where it is white).
- Library: Lucide (`https://lucide.dev`). Fallback: Phosphor light.
- Sizes: `16px` for inline (next to text), `20px` for navigation and social, `24px` for card-level indicators.
- Never use emoji as icons.
- Arrow characters for download links and return links: use `→` (right arrow, U+2192) and `←` (left arrow, U+2190), rendered as text, not as icon components.
- Social icons in footer: `20px`, `#FFFFFF`, `opacity: 1`. Hover: `opacity: 0.6`. Transition: `0.15s ease`.

---

## 6. Images and media

- No stock photos of handshakes, globes, or people in suits.
- No CSS `filter` on content images (no sepia, no brightness adjustments, no color overlays).
- Border-radius on images: `0` for full-width hero images, `8px` for inline article images and card thumbnails.
- `object-fit: cover` on all images inside fixed-dimension containers.
- Aspect ratios: `16:9` for hero/featured images, `4:3` for card thumbnails, `1:1` for avatars/thumbnails.
- `loading="lazy"` on all images below the fold.
- Alt text required on every `<img>`.
- Client logos: render as `<img>` with `height: 32px`, `width: auto`, `filter: grayscale(100%)`, `opacity: 0.5`. Hover: `filter: grayscale(0%)`, `opacity: 1`. Transition: `0.15s ease`.

---

## 7. Page structure and layout patterns

Every page follows the same vertical rhythm: ink navbar at top, content body on white, ink footer at bottom. Within the content body, sections alternate between white and rice paper backgrounds where needed. One optional ink-background section per page for emphasis.

All colors below use only the six core palette values from section 1. No exceptions.

---

### 7.1 Navigation bar

- `position: fixed`. `top: 0`. `left: 0`. `width: 100%`. `z-index: 1000`.
- `height: 60px`. `background: var(--color-ink)`.
- Inner wrapper: `max-width: 1200px`. `margin: 0 auto`. `padding: 0 48px`. `display: flex`. `align-items: center`. `justify-content: space-between`. `height: 100%`.
- On tablet: `padding: 0 32px`. On mobile: `padding: 0 20px`.
- Logo (left): TheRedScroll wordmark. `color: var(--color-vermillion)`. `font-size: 18px`. `font-weight: 500`. `text-decoration: none`.
- Nav links (right): `display: flex`. `align-items: center`. `gap: 32px`.
- Each link: `color: #FFFFFF`. `font-size: 14px`. `font-weight: 400`. `text-decoration: none`. `transition: color 0.15s ease`.
- Link hover: `color: rgba(255, 255, 255, 0.6)`.
- Dropdown trigger: link text + chevron icon (`8px` wide, `#FFFFFF`, `margin-left: 4px`). Chevron rotates `180deg` when open.
- Dropdown panel: `position: absolute`. `top: 60px` (flush with navbar bottom). `background: var(--color-ink)`. `border-radius: 0 0 8px 8px`. `padding: 8px 0`. `min-width: 200px`. `border: 0.5px solid rgba(255, 255, 255, 0.1)`.
- Dropdown links: `display: block`. `padding: 10px 20px`. `color: #FFFFFF`. `font-size: 14px`. Hover: `background: rgba(255, 255, 255, 0.05)`.
- No shadow on dropdown. No blur.

**Mobile navigation (640px and below):**
- Hide desktop nav links. Show hamburger icon: 3 horizontal lines, `#FFFFFF`, `20px` wide, `2px` stroke, `6px` gap between lines.
- Tap hamburger: slide-in panel from right. `position: fixed`. `top: 0`. `right: 0`. `width: 280px`. `height: 100vh`. `background: var(--color-ink)`. `padding: 72px 20px 20px 20px` (72px top clears the navbar). `z-index: 1001`. `transform: translateX(100%)` when closed, `translateX(0)` when open. `transition: transform 0.25s ease`.
- Overlay behind panel: `position: fixed`. Full screen. `background: rgba(0, 0, 0, 0.5)`. `z-index: 1000`. Tap to close.
- Close icon: `X`, `20px`, `#FFFFFF`. `position: absolute`. `top: 20px`. `right: 20px`.
- Mobile nav links: `display: block`. `padding: 16px 0`. `color: #FFFFFF`. `font-size: 16px`. `font-weight: 400`. `border-bottom: 0.5px solid rgba(255, 255, 255, 0.1)`.

**Body offset:** Every page's first element must have `padding-top: 60px` (or `margin-top: 60px`) to clear the fixed navbar. On mobile: `padding-top: 52px`.

---

### 7.2 Hero sections

**Style A: Dark hero banner**
Used on: homepage, blog index, services index, knowledge hub, about page, careers page.

- `width: 100%`. `background: var(--color-ink)`. `padding: 80px 48px` desktop, `48px 20px` mobile.
- Content wrapper: `max-width: 800px`. `margin: 0 auto`. `text-align: center`.
- Optional overline: `var(--color-vermillion)`. `11px`. `font-weight: 500`. `text-transform: uppercase`. `letter-spacing: 0.05em`. `margin-bottom: 8px`.
- H1: `#FFFFFF`. `40px` desktop / `28px` mobile. `font-weight: 500`. `line-height: 1.2`. `margin-bottom: 8px`.
- Subtitle: `rgba(255, 255, 255, 0.6)` or `var(--color-vermillion)`. `14px`. `font-weight: 400`. `margin-bottom: 16px`.
- CTA button: `.btn-primary`, centered (`margin: 0 auto` or `text-align: center`).
- Optional decorative watermark: brand name in `#FFFFFF` at `opacity: 0.03`. `font-size: 140px` desktop / `80px` mobile. `font-weight: 500`. `position: absolute`. Centered behind the hero text. `pointer-events: none`. `user-select: none`. `overflow: hidden`. This is the only decorative background text allowed on the entire site.
- No background images. No gradients. No photography.

**Style B: Article/detail hero**
Used on: blog posts, whitepaper detail pages, individual service pages.

- `background: var(--color-white)`. `padding: 32px 0 0 0`.
- Return link: `display: inline-flex`. `align-items: center`. `gap: 6px`. Arrow `←` character + "Return" text. `font-size: 13px`. `color: var(--color-stone)`. `text-decoration: none`. Hover: `color: var(--color-ink)`. `margin-bottom: 16px`.
- H1: `var(--color-ink)`. `32px` desktop / `24px` mobile. `font-weight: 500`. `line-height: 1.25`. `max-width: 680px`. `margin-bottom: 8px`.
- Meta row: `display: flex`. `align-items: center`. `gap: 8px`. `flex-wrap: wrap`.
- Featured image: `margin-top: 24px`. `width: 100%`. `aspect-ratio: 16/9`. `object-fit: cover`. `border-radius: 0`. `display: block`.
- Gap after featured image to first content section: `48px`.

---

### 7.3 Content body

`background: var(--color-white)`. Wrapper: `max-width: 1200px`. `margin: 0 auto`. `padding: 0 48px` desktop, `0 32px` tablet, `0 20px` mobile.

**Grid layouts (services index, blog index, knowledge hub, careers):**

- Grid container: `display: grid`. `gap: 16px`.
  - 2-column (services, features): `grid-template-columns: repeat(2, 1fr)`.
  - 3-column (blog posts, related): `grid-template-columns: repeat(3, 1fr)`.
  - Tablet (641px to 1024px): 3-column becomes `repeat(2, 1fr)`. 2-column stays.
  - Mobile (640px and below): everything becomes `grid-template-columns: 1fr`.
- `gap` for 3-column grids: `24px`.

**Section spacing:** `margin-top: 96px` between major sections on desktop. `margin-top: 64px` on mobile.

---

### 7.4 Card patterns

See full card specs in section 4.3 and design guide document.

---

### 7.5 Category filter bar

- `width: 100%`. `background: var(--color-white)`. `padding: 16px 0`. `border-bottom: 0.5px solid var(--color-border)`.
- Links: `font-size: 12px`. `font-weight: 500`. `letter-spacing: 0.05em`. `text-transform: uppercase`. `color: var(--color-stone)`.
- Active link: `color: var(--color-ink)`. `border-bottom-color: var(--color-vermillion)`.

---

### 7.6 Footer

- `width: 100%`. `background: var(--color-ink)`. `padding: 48px 0 24px 0`.
- Upper grid: `display: grid`. `grid-template-columns: 2fr 1fr 1fr 1fr`. `gap: 32px`. Mobile: `1fr`.
- Brand name: `color: var(--color-vermillion)`. `font-size: 18px`. `font-weight: 500`.
- Group titles: `font-size: 11px`. `font-weight: 500`. `letter-spacing: 0.05em`. `text-transform: uppercase`. `color: var(--color-vermillion)`.
- Links: `color: #FFFFFF`. `font-size: 14px`. `line-height: 2`. Hover: `color: rgba(255, 255, 255, 0.6)`.
- Divider: `border-top: 0.5px solid var(--color-dark-divider)`. `margin-top: 32px`. `padding-top: 16px`.
- Copyright: `font-size: 12px`. `color: var(--color-dark-muted)`.

---

## 8. Global rules

These apply to every element on every page. No exceptions.

1. **No `box-shadow`** on any element.
2. **No gradients.** Flat solid colors only.
3. **No animations** except `transition` on `background`, `color`, `border-color`, `opacity`, `transform`, and `filter`. Duration: `0.15s`. Easing: `ease`. No keyframe animations.
4. **No border-radius above `12px`.** Values: `12px` dark sections, `10px` rice paper cards, `8px` bordered cards and images, `6px` buttons and inputs. `0` for section divider bars and full-width hero images.
5. **No decorative elements** in the content body. Only exception: faint brand watermark in dark hero banners at `opacity: 0.03`.
6. **No pure black `#000000`.** Always `var(--color-ink)` / `#1A1A1A`.
7. **No colors outside the palette.**
8. **Vermillion is rationed.** Only for: logo/brand name, `.number-label`, `.btn-primary`, `.category-tag`, active TOC indicator, footer section titles, section divider bar, overlines inside dark sections, required field asterisks, inline links.
9. **Dark sections are bookends.** Navbar: ink. Footer: ink. One optional dark section in the body. Everything else: white or rice paper.
10. **Content has max-width.** Body text: `680px`. Grids and cards: `1200px`.
11. **All interactive elements have `cursor: pointer`.**
12. **All interactive elements have a `:focus-visible` outline.** `2px solid` in `var(--color-vermillion)` (light) or `#FFFFFF` (dark). `outline-offset: 2px`.
13. **No `!important`** except for utility overrides.
14. **Semantic HTML.** Use `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<header>`.
15. **All images require `alt` attributes.**
16. **No `font-weight` above `500`.** No bold. No `700`. No `<b>` tags.
