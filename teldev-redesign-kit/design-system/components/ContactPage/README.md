**Sample composition** — the Contact page. On the left, breadcrumbs (Home › Contact), a headline with accent words, a lead, and a `LayeredVisual` (typical reply time, what happens next, location and email). On the right, the contact form with the Hire us / Partnership / Other selector, fading in as it enters. Header and footer included.

The email field shows its error state on purpose, so error styling is visible without interacting with the preview. See `Input`, `Textarea`, `Select`, `RadioSegmented`, `Checkbox` and `Button` for the individual field specs.

**Layout.** Two columns from `lg`; stacked on mobile, with the form after the visual.

**Accessibility.** The visual is `aria-hidden`, so the reply time and email address are also stated in the form card and the footer.
