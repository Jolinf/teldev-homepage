The homepage's opening move — a headline beside the animated `HeroVisual`, then the two equally-weighted paths, Hire us and Partner with us, that the whole site is organised around.

**Anatomy.** Top row: a `display` headline, with no label above it, whose last words ("to you.") are set in `link` colour, and a `lead` paragraph — beside `HeroVisual` (a photo with three layered status cards). Below: two `radius-xl` panels side by side, a `primary`-filled "Hire us" panel and a `surface` "Partner with us" panel, each with an eyebrow, `h3` heading, one line of copy and a `Button`.

**Props.** `photoSrc`, `photoAlt` — passed through to `HeroVisual`. Leave empty to show the placeholder.

**Motion.** Headline, visual and panels fade up 16px in a stagger on load; the visual's cards then drift slowly. All of it is off under `prefers-reduced-motion`. See `motion-and-tailwind.md`.

**Why neither panel is "primary" in the button sense.** The two homepage paths are equally weighted, so one panel gets the `primary` fill and the other doesn't — but both carry a full-prominence `Button` and both are the same size. Colour tells the two paths apart; it does not rank them.

**Colour.** The accent words use `link`, not `primary`, so they switch to the lighter `blue-400` in dark mode (6.5:1) instead of dropping to 4.19:1.

**Layout.** Headline and visual stack on mobile and sit in two columns from `lg` (1024px). Panels stack on mobile and sit in two columns from `md` (768px). Under 640px the visual's cards stop overlapping and stack under the photo.

**Accessibility.** `HeroVisual` is `aria-hidden` — it illustrates, it doesn't inform, so screen readers go straight from the lead paragraph to the two paths. Both panel headings follow the page's `h1` in DOM order matching visual order.
