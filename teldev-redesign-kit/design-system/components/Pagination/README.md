Page-number navigation for the blog index or a case-study list.

**Anatomy.** Previous/next icon buttons flanking numbered page buttons; the current page has a `primary` fill.

**Spacing.** 40px buttons, `space-2` gap — comfortably above the 44px touch-target floor once natural link padding is included; keep the tap target at least 44px in the real build even though the visible chip is 40px.

**Accessibility.** `<nav aria-label="Pagination">`; the current page button carries `aria-current="page"`; previous/next are `disabled` (not just styled dim) at the first/last page.
