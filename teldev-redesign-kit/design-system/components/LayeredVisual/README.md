The site's picture language: a photograph with small "live status" cards layered on its corners. Every page hero uses it, and case studies use a compact version. Click "Replay animation" in the preview.

**Props.** `photo` — `{ src, alt, ratio, label, note }`; without `src` an `ImagePlaceholder` shows with its art-direction `note`. `ratio`: `4x3` (default) or `16x9` for a wider, shorter visual. `cards` — up to four `{ pos, width, content }`, where `pos` is `tl`, `tr`, `bl` or `br` and `content` is one of the `VisualCards`. `compact` — pins the cards inside the photo with no dot grid (for cards in a grid, like `CaseStudy`). `still` — turns off the idle drift. `decorative` — defaults to true (`aria-hidden`).

**Composition rules.** Two or three cards on a page hero, one on a compact visual. Each card shows one service or fact doing its job — a progress bar, a resolved ticket, a flow, one metric. Never more than four, never stacked on each other, never decorative shapes or illustrations in their place. The photo's art-direction note moves to whichever corner has no card.

**Motion.** Nothing plays until the visual scrolls into view. Then the photo and cards fade up 16px at 180ms apart, progress bars fill, and the cards drift 6px on 7s and 9s cycles. The drift pauses when the visual leaves the screen. All of it is off under `prefers-reduced-motion`.

**Layout.** From 640px up, cards overlap the photo's corners over a faint `border-strong` dot grid. Under 640px the grid hides, the first card overlaps the bottom of the photo, the second sits below it, and any others are hidden.

**Card figures.** The figures in every preview are illustrative. Replace them with real TELDEV examples before launch and never inflate them.
