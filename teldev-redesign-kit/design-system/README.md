TELDEV Technologies brings technology to businesses, institutions and individuals across Nigeria, with an African ambition beyond it. The system reads like a consultancy a business owner would confidently hand their IT to, and a sponsor would confidently put their name next to: calm, blue-led, generously spaced, never a startup pitching itself. Paystack is the primary reference for that calm; Stripe for typographic precision and restraint; Andela for the warmth of the partnership and community content. Never the dark neon "AI startup" look, never the generic agency template (stock-photo heroes, carousels, cliché icon rows), never an AI-generated tell (gratuitous gradients, over-rounded everything, emoji-as-icon, meaningless 3D blobs).

## Content fundamentals

Write in clear, confident, plain English with British spelling — "organisation", "optimise", "colour", "centre". Practical over grand. Say what TELDEV does and what it costs to find out, not what it dreams of becoming.

Do:
- "We'll have your team on Microsoft 365 within a week." — concrete, scoped, no hedging.
- "Tell us what you're trying to do, and we'll tell you plainly whether we can help." — honest about fit.
- "Partnering with the University of Lagos on its 2025 innovation week." — specific, named, dated.

Don't:
- "Revolutionising technology access across Africa." — hype word, unearned scale.
- "Cutting-edge, game-changing solutions tailored to your unique needs." — three hype words and no content.
- "We leverage best-in-class synergies to future-proof your stack." — jargon standing in for a sentence.

Casing: sentence case for headings, nav labels and button text ("Request a quote", not "Request A Quote"). Service names are proper nouns when named as products (Cloud & Microsoft 365 Setup) but sentence case in running prose ("we also do cloud and Microsoft 365 setup"). Numerals for anything measurable ("4 services", "24-hour response"), words for approximations ("a few days").

The homepage carries two equally weighted invitations — Hire us and Partner with us — and every heading, card and CTA should make it obvious which one it belongs to; never blend the two audiences into one generic "get in touch."

## Visual foundations

### Colour

The brand colour is `blue-600` / `brand`, `#1C6CFE` exactly, in both themes — it is never retinted, lightened or "dark-moded." Everything else in the palette exists to let that one blue read as confident rather than loud: a full 50–950 blue ramp built on its own hue (≈219°) and saturation (≈99%) for tints and shades that stay true to it; a cool, low-saturation neutral ramp (hue ≈220°, 10–28% saturation) for text, surfaces and borders, so dark mode reads as a deep slate rather than pure black or a navy glow; and three status ramps — success leaning teal-green rather than pure green, warning amber, danger a red that leans a touch toward orange — built the same way so a colour-blind viewer can still tell success from danger by more than hue (see Accessibility notes).

Every semantic pairing below is contrast-checked in both themes; the exact ratios are in `tokens.json` and in `accessibility-and-conflicts.md`. Two rules that shape every component: `primary`/`primary-hover`/`primary-active` stay the same blue-600/700/800 fill in both themes, always with white text — because independent of what the button sits on, white-on-blue-600 is the ratio that matters (4.54:1), and lightening the fill for a "softer" dark-mode button would break it. Brand-coloured *text* is the opposite case: blue-600 on a near-black background is only 4.19:1, so dark-mode links, focus rings and inline brand text switch to the lighter `blue-400` tint (6.5:1+) — never the button fill.

### Typography

**Plus Jakarta Sans**, one family for headings and body, chosen over Manrope. Both are free, geometric-leaning sans-serifs that would work; Plus Jakarta Sans earns the seat on three points. First, character: its single-storey `a`, open apertures and slightly humanist curve give headlines a bit of warmth that a purely geometric face like Manrope doesn't, which matters for a company whose second audience (partners, sponsors, institutions) responds to Andela-style warmth, not cold precision. Second, small-size legibility: at 13–14px — helper text, nav links, badge labels — Plus Jakarta Sans keeps its counters open where several geometric sans faces start to close up. Third, weight range: 200 through 800 covers an 800-weight hero headline and a 400-weight caption from one family, so a second display face is never needed. **IBM Plex Mono** is the second family, used sparingly for technical labels — inline code and fenced blocks in blog prose, reference numbers — never for UI copy.

The full scale (display, h1–h6, lead, body, small, caption, overline, label, label-sm, code, code-sm) is in `tokens.json`; each style's `usage` note states its mobile size where it differs from the desktop value stored as the token.

### Spacing and layout

A 4px base scale from `space-1` (4px) to `space-32` (128px). Section vertical rhythm: `space-16` (64px) top and bottom on mobile, `space-20` (80px) on tablet, `space-32` (128px) on desktop — never less, so sections never feel cropped against Paystack-level whitespace. Page gutters: `space-4` (16px) mobile, `space-8` (32px) desktop.

Layout tracks Tailwind's default breakpoints — `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px — on a 12-column grid, 24px gutters below `lg`, 32px at `lg` and above. Container max-widths: 100% under `sm`, 640/768/1024/1280px at `sm`/`md`/`lg`/`xl`, capped at 1280px from `xl` up (content never stretches edge-to-edge on very wide screens; only full-bleed bands — the hero, `bg-subtle` sections — run wider, with the 12-column content still centred inside).

### Radii, borders and shadows

Radii run `radius-sm` (6px, badges/checkboxes) through `radius-xl` (24px, feature cards and the image placeholder frame) to `radius-full` (pills, the theme toggle). Nothing rounds past `radius-xl` except pills — a consultancy doesn't reach for the "friendly app" fully-rounded-everything look. Borders are `border` (neutral-200/neutral-800, decorative — dividers, card edges, always paired with a shadow or clear spacing, never the only cue) or `border-strong` (neutral-500 in both themes, used only where the edge IS the affordance: input, textarea, select, checkbox and radio outlines — chosen specifically because it clears 3:1 against white, neutral-900 *and* neutral-950). Shadows are soft and low-opacity (`shadow-xs` through `shadow-lg`), heavier in dark mode where a shadow alone reads weaker against a dark ground — cards there lean on the `surface` → `surface-raised` fill step as much as on shadow.

### Motion

Kept in `motion-and-tailwind.md` (tokens.json has no motion family) — short version: interface feedback at 120–180ms; a staggered fade-up entrance for the hero and a once-only `Reveal` for sections further down; every page hero's status cards animate in and then drift slowly while on screen; cards lift on hover. No parallax, no auto-playing carousels or marquees, and all of it off under `prefers-reduced-motion`.

### Iconography

[Lucide](https://lucide.dev), stroke width 1.75 by default (2 at 16px, where 1.75 starts to look thin), sizes 16 / 20 / 24px matching `label-sm` / `label` / `h5`–`h4` text respectively. An icon that carries meaning (status, a link's direction, a form error) always sits beside a text label or has an `aria-label` — never alone as the only signal. Icon-only buttons are 44×44px minimum with a visible focus ring, never smaller "for density."

### Imagery

Every page opens the same way: a real photograph with live-looking status cards layered on its corners (`LayeredVisual`, via `PageHero`), each card showing TELDEV's work — a migration filling up, a ticket resolved, an automation run, an event date, a reply time — so each page says what it's about before anyone reads a word. Case study cards use a compact version with one result card. The cards are built from the system's own components (`VisualCards`), never an illustration or 3D render, and their figures are illustrative until real examples replace them. Real photography will replace every placeholder later; until then, the `ImagePlaceholder` component (Foundations group) reserves the exact space at a fixed ratio — 16:9 (hero, case studies), 4:3 (service cards), 1:1 (team/founder), 3:4 (editorial/blog) — with a neutral `bg-subtle` fill, a small caption-style label, and an art-direction note in the corner (e.g. "Team working alongside a client, natural light, real Lagos office"). Photographic style, once real photography is shot: natural light, candid, real TELDEV people and real clients — never a staged stock pose, never a generic desk-and-laptop stock photo, never a stock image with a visible foreign office or skyline.

## Voice and tone in the interface

Buttons are verbs ("Request a quote", "Send message"), never nouns ("Submit"). Error messages say what to do, not just what's wrong ("Enter a valid email address," not "Invalid input"). Empty states explain what will appear there and how to fill it, not just "Nothing here yet."
