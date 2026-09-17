A trail back up the site hierarchy, shown at the top of a service detail or blog post.

**Anatomy.** `text-muted` links separated by a `chevron-right`, with the current page in `text` and not a link.

**Accessibility.** `<nav aria-label="Breadcrumb">` wrapping the trail; the current item carries `aria-current="page"` rather than being a dead link.
