# Token reference

## Colour — raw scales

**Blue**

| Step | Hex |
|---|---|
| 50 | `#f0f5ff` |
| 100 | `#e0ebff` |
| 200 | `#c2d7ff` |
| 300 | `#94b9ff` |
| 400 | `#5d95fe` |
| 500 | `#397efe` |
| 600 | `#1c6cfe`  ← brand, exact |
| 700 | `#0b53e5` |
| 800 | `#0e44b9` |
| 900 | `#10368e` |
| 950 | `#0b1e50` |

**Neutral**

| Step | Hex |
|---|---|
| 50 | `#f9fafb` |
| 100 | `#f3f4f7` |
| 200 | `#e4e7ec` |
| 300 | `#ced2da` |
| 400 | `#9ba2b0` |
| 500 | `#737b8c` |
| 600 | `#555d6d` |
| 700 | `#3d4452` |
| 800 | `#282e39` |
| 900 | `#181c25` |
| 950 | `#0d1017` |

**Success**

| Step | Hex |
|---|---|
| 50 | `#effbf5` |
| 100 | `#dbf5e9` |
| 200 | `#bae8d3` |
| 300 | `#86d5b0` |
| 400 | `#39c684` |
| 500 | `#259d65` |
| 600 | `#188152` |
| 700 | `#116943` |
| 800 | `#0e4e33` |
| 900 | `#0c3725` |
| 950 | `#082118` |

**Warning**

| Step | Hex |
|---|---|
| 50 | `#fef8e6` |
| 100 | `#fdedc4` |
| 200 | `#f9d88b` |
| 300 | `#f5bb47` |
| 400 | `#f5a314` |
| 500 | `#da840b` |
| 600 | `#b3660f` |
| 700 | `#8a480f` |
| 800 | `#62320e` |
| 900 | `#45230c` |
| 950 | `#261308` |

**Danger**

| Step | Hex |
|---|---|
| 50 | `#feeeec` |
| 100 | `#fdddd9` |
| 200 | `#f9bdb4` |
| 300 | `#f28d7d` |
| 400 | `#f05c42` |
| 500 | `#f0310f` |
| 600 | `#c32b13` |
| 700 | `#9a2313` |
| 800 | `#741b11` |
| 900 | `#52140f` |
| 950 | `#2e0c0a` |

## Colour — semantic tokens (both themes)

| Token | Light value | Dark value | Role |
|---|---|---|---|
| `brand` | `#1c6cfe` | `#1c6cfe` | The fixed brand colour. |
| `bg` | `#ffffff` | `#0d1017` | Page background. |
| `bg-subtle` | `#f9fafb` | `#181c25` | Alternate section band. |
| `surface` | `#ffffff` | `#181c25` | Card / panel fill. |
| `surface-raised` | `#ffffff` | `#282e39` | Lifted card, overlay. |
| `border` | `#e4e7ec` | `#282e39` | Decorative divider / edge. |
| `border-strong` | `#737b8c` | `#737b8c` | Functional control outline. |
| `text` | `#181c25` | `#f9fafb` | Primary text. |
| `text-muted` | `#555d6d` | `#9ba2b0` | Secondary text. |
| `primary / primary-hover / primary-active` | `#1c6cfe / #0b53e5 / #0e44b9` | `#1c6cfe / #0b53e5 / #0e44b9` | Primary action fill states. |
| `primary-foreground` | `#ffffff` | `#ffffff` | Text on primary fills. |
| `link / link-hover` | `#1c6cfe / #0b53e5` | `#5d95fe / #94b9ff` | Inline text links. |
| `focus-ring` | `#1c6cfe` | `#5d95fe` | Focus outline. |
| `success / success-solid` | `#116943 / #188152` | `#39c684 / #188152` | Success text / fill. |
| `warning / warning-solid` | `#62320e / #f5a314` | `#f5bb47 / #f5a314` | Warning text / fill. |
| `danger / danger-solid` | `#c32b13 / #c32b13` | `#f05c42 / #c32b13` | Danger text / fill. |

Full ratio-by-ratio justification: `accessibility-and-conflicts.md`.

## Typography

| Style | Desktop size/line-height | Mobile size/line-height | Weight | Tracking | Family |
|---|---|---|---|---|---|
| display | 64/68px | 40/44px | 800 | -0.02em | sans |
| h1 | 48/54px | 34/40px | 800 | -0.015em | sans |
| h2 | 36/42px | 28/34px | 700 | -0.01em | sans |
| h3 | 28/36px | 22/29px | 700 | -0.005em | sans |
| h4 | 22/29px | 20/27px | 600 | 0 | sans |
| h5 | 18/26px | 17/25px | 600 | 0 | sans |
| h6 | 16/24px | 16/24px | 600 | 0 | sans |
| lead | 20/32px | 18/29px | 400 | 0 | sans |
| body | 16/26px | 15/24px | 400 | 0 | sans |
| small | 14/21px | 14/21px | 400 | 0 | sans |
| caption | 12/18px | 12/18px | 400 | 0.01em | sans |
| overline | 12/16px | 12/16px | 700 | 0.08em | sans (uppercase in CSS) |
| label | 14/20px | 14/20px | 600 | 0 | sans |
| label-sm | 13/18px | 13/18px | 600 | 0.01em | sans |
| code | 14/22px | 14/22px | 500 | 0 | mono |
| code-sm | 12/16px | 12/16px | 500 | 0.01em | mono |

## Spacing (4px base)

| Token | Value | Typical use |
|---|---|---|
| `space-1` | 4px | icon/label gap |
| `space-2` | 8px | compact padding |
| `space-3` | 12px | input padding |
| `space-4` | 16px | card padding (mobile), mobile gutter |
| `space-5` | 20px | md button padding |
| `space-6` | 24px | card padding (desktop) |
| `space-8` | 32px | section header gap, desktop gutter |
| `space-10` | 40px | gap between blocks |
| `space-12` | 48px | hero path gap, footer columns |
| `space-16` | 64px | section padding, mobile |
| `space-20` | 80px | section padding, tablet |
| `space-24` | 96px | gap between major sections, desktop |
| `space-32` | 128px | section padding, desktop |

## Radii

| Token | Value | Use |
|---|---|---|
| `radius-sm` | 6px | badge, checkbox, small chip |
| `radius-md` | 10px | button, input, select |
| `radius-lg` | 16px | card, panel, modal |
| `radius-xl` | 24px | feature card, hero media, image placeholder |
| `radius-full` | 9999px | pill, avatar, toggle track |

## Shadows (per theme)

| Token | Light | Dark |
|---|---|---|
| `shadow-xs` | `0 1px 2px 0 rgb(13 16 23 / 0.04)` | `0 1px 2px 0 rgb(0 0 0 / 0.28)` |
| `shadow-sm` | `0 1px 3px 0 rgb(13 16 23 / .08), 0 1px 2px -1px rgb(13 16 23 / .06)` | `0 1px 3px 0 rgb(0 0 0 / .4), 0 1px 2px -1px rgb(0 0 0 / .32)` |
| `shadow-md` | `0 4px 8px -2px rgb(13 16 23 / .08), 0 2px 4px -2px rgb(13 16 23 / .06)` | `0 4px 12px -2px rgb(0 0 0 / .44), 0 2px 6px -2px rgb(0 0 0 / .36)` |
| `shadow-lg` | `0 12px 24px -6px rgb(13 16 23 / .10), 0 4px 8px -4px rgb(13 16 23 / .06)` | `0 16px 32px -8px rgb(0 0 0 / .5), 0 6px 12px -6px rgb(0 0 0 / .4)` |

Motion tokens (durations/easings) are not part of `tokens.json` — see `motion-and-tailwind.md`.
