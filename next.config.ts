import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Left off: every href in this app flows through generic `href: string` props on
  // Button/TextLink/Breadcrumbs/Pagination/BlogCard/etc. (built from content data, not
  // typed as route literals), which typedRoutes' strict `Route<string>` typing can't
  // reconcile without threading route unions through every component prop. Tried
  // enabling it once every route existed (see progress.md Phase 4) — it broke on all of
  // the above for that reason, not on dead links.
  typedRoutes: false,
};

export default nextConfig;
