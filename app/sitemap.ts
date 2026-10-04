import type { MetadataRoute } from 'next';
import { SERVICES } from '@/content/services';
import { NAMS_WR_CONVENTION } from '@/content/events/nams-wr-convention-2026';
import { TARS } from '@/content/initiatives/tars';
import { getAllBlogPosts, getAllWorkEntries } from '@/lib/content';

const BASE_URL = 'https://www.teldev.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/services',
    '/about',
    '/partnerships',
    `/partnerships/${NAMS_WR_CONVENTION.slug}`,
    '/work',
    `/work/${TARS.slug}`,
    '/blog',
    '/contact',
    '/privacy',
  ];

  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);
  const workRoutes = getAllWorkEntries().map((entry) => `/work/${entry.slug}`);
  const blogRoutes = getAllBlogPosts().map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...workRoutes, ...blogRoutes].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));
}
