# Accessibility: the floor, and where a requirement pulled against another

Target throughout: WCAG 2.1 AA. Text ≥4.5:1 (≥3:1 at 24px+/bold 19px+), non-text UI (borders, focus rings, icons that carry meaning) ≥3:1, touch targets ≥44×44px, focus always visible, nothing conveyed by colour alone, every animation has a `prefers-reduced-motion` off-switch (see `motion-and-tailwind.md`). Every ratio below is computed (relative-luminance WCAG formula), not eyeballed — recompute if a raw palette value ever changes.

## Where two requirements pulled against each other

**1. The locked brand blue vs. AA text contrast in dark mode.** `#1C6CFE` is fixed and must not shift hue or saturation — but blue-600 as *text* on the dark-mode background (`neutral-950`, `#0D1017`) measures 4.19:1, just under the 4.5:1 floor. Resolution: keep `#1C6CFE` exactly where the brief's own numbers already work — as a *fill* behind white text (white-on-blue-600 is 4.54:1, independent of page background) and as the logo mark, in both themes, unchanged. For anywhere blue is *text* in dark mode — links, the focus ring, brand-coloured labels — use the lighter `blue-400` tint (6.52:1 on `bg`, 5.84:1 on `surface`) instead. The brand hex itself never moves; only which *role* gets to render as flat colour-on-dark text does.

**2. Warning amber vs. AA contrast with white text.** The convention "coloured button fill + white text" doesn't clear AA for any amber saturated enough to still read as "warning" — the closest candidate, `warning-400`, is only 3.76:1-equivalent-class with white (the ratio a reader expects from a solid button). Resolution: `warning-solid` pairs with dark (`neutral-900`) text, not white — 8.23:1 — which is also how most accessible systems handle amber, and it doubles as a visual tell that separates "warning" from "danger" and "primary" even in greyscale, since it's the only solid fill with dark-on-light text.

**3. Colour-led brand vs. "never convey meaning by colour alone."** A blue-heavy palette makes it tempting to tell button variants or status apart by hue only. Resolution: `Button` variants differ in *shape* as well as fill (primary = solid, secondary = solid neutral, ghost = no fill until hover, link = no button chrome at all), and every status (success/warning/danger) always ships with an icon and a text word in its own component guidelines — never a bare coloured dot or a bare coloured border.

**4. Dark-mode "deep neutral, not glowing navy" vs. shadow-based elevation.** Shadows lose most of their visible strength against a near-black background, which is exactly what the "no navy glow" constraint asks for — but that leaves cards under-differentiated from their background. Resolution: elevation in dark mode leans on a *fill* step (`surface` → `surface-raised`, `neutral-900` → `neutral-800`, a real 1.25:1 step) rather than on shadow strength; shadows still apply for depth on hover but are a secondary cue, not the only one.

**5. Compact, consultancy-tidy density vs. 44×44px touch targets.** A tightly spaced desktop nav or a small icon-only control (theme toggle, breadcrumb separators tapped on mobile) wants to look small. Resolution: the *visible* control can stay visually compact (24–32px) as long as its hit area — padding, or an invisible `::before` extending the tap target — reaches 44×44px; this is called out per component below rather than left to guesswork.

## The full text/background ratio table

Every pairing this system defines, both themes — see `token-reference.md` for the palette values behind each name.

| Pairing | Light | Dark |
|---|---|---|
| `text` on `bg` | 17.05:1 | 18.21:1 |
| `text` on `surface` | 17.05:1 | 16.32:1 |
| `text-muted` on `bg` | 6.62:1 | 7.42:1 |
| `text-muted` on `surface` | 6.62:1 | 6.65:1 |
| `primary-foreground` (white) on `primary` | 4.54:1 | 4.54:1 |
| `primary-foreground` (white) on `primary-hover` | 6.21:1 | 6.21:1 |
| `link` on `bg` | 4.54:1 | 6.52:1 |
| `link` on `surface` | 4.54:1 | 5.84:1 |
| `focus-ring` vs. adjacent surface (non-text, needs 3:1) | 4.54:1 | 5.84:1–6.52:1 |
| `border-strong` vs. `bg`/`surface` (non-text, needs 3:1) | 4.25:1 | 4.01:1–4.48:1 |
| `success` on `surface` | 6.72:1 | 7.78:1 |
| `success-solid-foreground` on `success-solid` | 4.88:1 | 4.88:1 |
| `warning` on `surface` | 10.6:1 | 9.81:1 |
| `warning-solid-foreground` on `warning-solid` | 8.23:1 | 8.23:1 |
| `danger` on `surface` | 5.71:1 | 5.13:1 |
| `danger-solid-foreground` on `danger-solid` | 5.71:1 | 5.71:1 |

`border` (the decorative token, `neutral-200`/`neutral-800`) is intentionally under 3:1 (1.24:1 light, 1.4:1 dark) — it is a divider, never the sole indicator of an interactive edge. Anywhere an edge IS the affordance, the component spec calls for `border-strong` instead.
