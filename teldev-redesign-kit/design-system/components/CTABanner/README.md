The closing call-to-action band near the bottom of most pages.

**Anatomy.** A `primary`-filled panel, `radius-xl`. Left: heading, one line of body copy, and a `secondary` `Button` (surface on brand). Right, from `md` up: a faint `primary-foreground` dot grid with one floating visual card (default: a `FlowCard`, "What happens next: Enquiry → Call → Quote").

**Props.** `heading`, `body`, `cta`, `card` (any visual card element).

**Motion.** The card fades up when the banner scrolls into view, then drifts slowly. Off under `prefers-reduced-motion`.

**Accessibility.** The button uses `secondary` styling so it stays distinct from the brand-blue banner. The visual is `aria-hidden`.
