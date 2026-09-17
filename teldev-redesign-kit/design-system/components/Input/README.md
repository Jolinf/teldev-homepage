Single-line text entry, the base every other text-like control (`Textarea`) shares styling with.

**Anatomy.** `FieldLabel` above, the control (44px min height, `radius-md`, `border-strong` outline), then one of `HelperText` / `ErrorText` / `SuccessText` below — never more than one at once.

**States.** default; `:hover` (border darkens toward `text-muted`); `:focus-visible` (`focus-ring` border + a soft 3px glow); `aria-invalid` / error (border and helper text switch to `danger`, an alert-circle icon precedes the message); `disabled` (50% opacity, `bg-subtle` fill, `not-allowed` cursor); success (rare — `success` helper text with a check-circle icon, used for e.g. an availability check).

**Spacing.** `space-3`/`space-4` internal padding; `space-2` between label, control and helper row.

**Accessibility.** `<label htmlFor>` is always programmatically linked, never a placeholder standing in for a label. The error or helper text is linked via `aria-describedby`, and the control carries `aria-invalid="true"` only when a real error is present, so a screen reader announces the error immediately after the field name.
