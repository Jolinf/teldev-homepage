A wrapper that fades and lifts its content into place the first time it scrolls into view — the one way sections below the hero animate. Click "Replay" in the preview.

**Props.** `delay` (ms) — stagger siblings by 80–110ms each; `as` — element to render (default `div`); `className`, `style`, `children`.

**Behaviour.** Opacity 0→1 with a 16px rise over 480ms, `ease-out`, once. Uses IntersectionObserver at 15% visibility; where that's unavailable, content simply shows.

**Use it for** groups of cards (services, process steps, blog posts) entering together. **Don't use it for** the page's first screen (the hero has its own entrance), for body copy the reader is already scrolling through, or on every element on a page — one staggered group per section is enough.

**Accessibility.** Under `prefers-reduced-motion` content is shown at once with no transition. Content is in the DOM and readable by screen readers before it animates.
