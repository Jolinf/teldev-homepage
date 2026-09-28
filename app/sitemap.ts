import type { MetadataRoute } from 'next';
import { SERVICES } from '@/content/services';
import { NAMS_WR_CONVENTION } from '@/content/events/nams-wr-convention-2026';
import { getAllBlogPosts } from '@/lib/content';

const BASE_URL = 'https://www.teldev.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/services',
    '/about',
    '/partnerships',
    `/partnerships/${NAMS_WR_CONVENTION.slug}`,
    '/blog',
    '/contact',
    '/privacy',
  ];

  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);
  // Work pages are left out while Work is hidden from the navigation.
  const blogRoutes = getAllBlogPosts().map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));
}
