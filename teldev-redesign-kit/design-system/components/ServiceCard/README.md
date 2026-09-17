One of the four live services, in card form — used in the homepage services grid and anywhere services are cross-linked.

**Anatomy.** An icon tile (`primary`-tinted, `radius-md`), `h5` title, `small` description in `text-muted`, a `TextLink` to the service detail page.

**States.** default; `:hover` (`shadow-md`, `border-strong` — the whole card is a hit target in the real build via a stretched-link pattern, not just the "Learn more" text).

**Accessibility.** If the whole card is clickable, only one link per card should be in the accessible tree (use the stretched-link CSS technique so the card has one real `<a>` and screen readers don't hear a duplicate announcement).
