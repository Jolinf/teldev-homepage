# Motion, and wiring this system into Next.js + Tailwind v4

## Motion

Tokens.json has no motion family (the runtime that reads this system's tokens doesn't compile one), so motion lives here as the source of truth. Add these as plain CSS custom properties in the consuming app's `globals.css`, alongside the generated token variables:

```css
:root {
  --duration-fast: 120ms;
  --duration-base: 180ms;
  --duration-slow: 280ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
}
```

What animates, and how long:
- Hover/focus/active feedback on buttons, links and form controls — colour, border and shadow transitions only — `duration-fast`, `ease-standard`.
- Dropdowns, the mobile menu sheet, tooltips and popovers opening — `duration-base`, `ease-out` in, `ease-in` out, combined with a translate of no more than 8px.
- Hero entrance — the headline, the `HeroVisual` photo and its three cards, and the two path panels fade up 16px in a stagger (0–540ms delays, 560ms each, `ease-out`), once on load. The migration card's progress bar fills over 1.6s after the cards land.
- Layered visuals — every `LayeredVisual` (page heroes, service pages, contact) waits until it scrolls into view, then its photo and cards fade up 180ms apart and progress bars fill. Afterwards the cards drift 6px up and down on 7s / 9s cycles, pausing whenever the visual is off screen. The same slow drift is used on the `CTABanner` card and the 404 card. Compact visuals (case study cards) never drift.
- Counting numbers — `StatBlock` values count up from zero over 1.2s, once, when they scroll into view.
- Timeline and process — milestone dots pop in and process connector lines draw in as each step reveals.
- Image hover — photos inside case study, event, blog and team cards zoom 3% on hover over 500ms.
- Section reveal on scroll — the `Reveal` wrapper: opacity 0→1 plus a 16px rise, 480ms, `ease-out`, staggered 60–140ms between siblings (service cards, pillars, process steps, timeline, logos, testimonials, blog and event cards), triggered once per element. One staggered group per section.
- Card hover — service, pillar, case study, event and testimonial cards lift 3px and gain `shadow-md` over 180ms; icon tiles inside them fill with `primary`.
- Theme toggle — background and icon cross-fade, `duration-fast`.

What never animates: page-level parallax, auto-playing carousels, scrolling logo marquees, and any looping motion other than the slow card drift above. Every animation above switches off under `prefers-reduced-motion: reduce` — content appears in its final state, the progress bar shows 86% without filling, cards don't lift — and the consuming app should also carry the global guard:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Wiring into Tailwind CSS v4 + next-themes

This system's `tokens.json` is the source; the page compiles it to a `tokens.css` (`:root`/`[data-theme="dark"]` custom properties) that this project doesn't hand-write, so that generated file and this system's index never drift apart. To consume it in the Next.js app:

```css
/* app/globals.css */
@import "tailwindcss";
@import "./ds-tokens.css"; /* the compiled tokens.css, copied in at build time from this system */

@theme {
  --color-bg: var(--bg);
  --color-bg-subtle: var(--bg-subtle);
  --color-surface: var(--surface);
  --color-surface-raised: var(--surface-raised);
  --color-border: var(--border);
  --color-border-strong: var(--border-strong);
  --color-text: var(--text);
  --color-text-muted: var(--text-muted);
  --color-primary: var(--primary);
  --color-primary-hover: var(--primary-hover);
  --color-primary-active: var(--primary-active);
  --color-primary-foreground: var(--primary-foreground);
  --color-link: var(--link);
  --color-focus-ring: var(--focus-ring);
  --color-success: var(--success);
  --color-warning: var(--warning);
  --color-danger: var(--danger);

  --radius-sm: var(--radius-sm);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-xl: var(--radius-xl);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
}
```

Dark mode is class-based (`<html class="dark">`), matching `next-themes`' default `attribute="class"` — but this system's own compiled `tokens.css` keys dark values off `[data-theme="dark"]`, so set `next-themes` up with `attribute="data-theme"` (`defaultTheme="system"`, `enableSystem`) rather than the `class` attribute, and Tailwind's own `dark:` variant is configured to match: `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));`. That keeps one source of truth for "is this dark mode" instead of a class selector and a data-attribute selector disagreeing.

Load the two type families with `next/font/google` rather than a `<link>` tag (no render-blocking request, automatic `font-display: swap`):

```ts
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400","500","600","700","800"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono" });
```
