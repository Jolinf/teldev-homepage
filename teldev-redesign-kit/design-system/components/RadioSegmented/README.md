The inquiry-type selector on the contact form — a segmented control, not a radio list, because there are only two or three mutually exclusive options and they all need to be visible at once.

**Anatomy.** A pill-shaped track (`bg-subtle`) containing 2–4 pill options; the selected option gets a `surface` fill and a soft shadow so it reads as "pressed in."

**States.** default / selected (`aria-checked="true"`); `:focus-visible` per option.

**Accessibility.** `role="radiogroup"` on the track with `aria-label`, each option `role="radio"` with `aria-checked` — arrow-key navigation between options should be added in the real implementation (this preview mounts the roles/states; wire `onKeyDown` for Left/Right/Up/Down in the consuming app, per the native radio-group pattern).
