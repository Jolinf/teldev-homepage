The single interactive verb of the system — every call to action is a `Button`, never a bare styled `<a>`.

**Anatomy.** Label (always a verb phrase — "Request a quote", never "Submit"), optional leading or trailing Lucide icon, an invisible padding box that keeps every size at or above the 44px touch target even at `sm`.

**Variants.** `primary` (solid `primary` fill, one per view — the single most important action), `secondary` (outlined, `border-strong`, for the second action beside a primary), `ghost` (no fill until hover, for tertiary or repeated actions like table-row actions), `link` (no button chrome at all, reads as a text link with button semantics — for the lowest-emphasis action).

**Sizes.** `sm` (36px, dense contexts like a card footer), `md` (44px, default), `lg` (52px, hero and CTA banners).

**States.** default; `:hover` (fill steps to `primary-hover`/`bg-subtle`); `:focus-visible` (2px `focus-ring` outline, 2px offset); `:active` (`primary-active`); `disabled` (50% opacity, `aria-disabled`, pointer-events removed — never colour alone, the label itself is also visually muted); `loading` (label hidden from view but read as `aria-busy`, a spinner replaces it, control stays the same size so nothing reflows).

**Spacing.** Icon-to-label gap `space-2`; horizontal padding `space-4`/`space-5`/`space-6` at sm/md/lg.

**Accessibility.** Renders as a real `<button>` (or `<a role="button">` only when it must navigate and JavaScript might be unavailable — prefer `<button>` with a router push). Disabled buttons are skipped in tab order via native `disabled`, not just visually dimmed. Loading buttons keep their accessible name and add `aria-busy="true"` rather than swapping to an unlabelled spinner.
