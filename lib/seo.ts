import type { Metadata } from 'next';

/**
 * SEO helpers, patterned after the `lib/seo/metadata.ts` module in the usebash.io
 * codebase (same author's other Next.js project): one `generateMetadata()` call per
 * page instead of a hand-rolled `Metadata` object, and a `generateJsonLdGraph()` that
 * combines every schema a page needs into a single `<script type="application/ld+json">`
 * instead of one tag per schema.
 */

export const SITE_NAME = 'TELDEV Technologies';
export const SITE_URL = 'https://www.teldev.org';
const DEFAULT_OG_IMAGE = '/opengraph-image';

const isProduction = process.env.NODE_ENV === 'production';

export interface SEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noindex?: boolean;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

/**
 * Full production SEO; disallows crawling outside production so staging never gets
 * indexed. `title` is the page's short title (e.g. "Services") — the `<title>` tag
 * itself picks up the root layout's `%s · TELDEV Technologies` template automatically,
 * but Open Graph/Twitter cards don't inherit that template, so this spells the full
 * title out for them explicitly.
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const { title, description, path, keywords = [], noindex = false, image, imageAlt, type = 'website', publishedTime } = config;

  const canonical = `${SITE_URL}${path}`;
  const shouldIndex = isProduction && !noindex;
  const fullTitle = title === SITE_NAME ? title : `${title} · ${SITE_NAME}`;
  const ogImage = { url: image ?? DEFAULT_OG_IMAGE, alt: imageAlt ?? fullTitle, width: 1200, height: 630 };

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    robots: shouldIndex ? 'index, follow' : 'noindex, nofollow',
    alternates: { canonical },
    openGraph: {
      type,
      locale: 'en_GB',
      url: canonical,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [ogImage],
      ...(type === 'article' && { publishedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

type SchemaType = 'ProfessionalService' | 'Service' | 'Article' | 'BreadcrumbList';

export function generateStructuredData(type: SchemaType, data: Record<string, unknown>): object {
  return { '@context': 'https://schema.org', '@type': type, ...data };
}

export function organizationSchema() {
  return generateStructuredData('ProfessionalService', {
    name: SITE_NAME,
    description: 'Bringing technology to you.',
    url: SITE_URL,
    email: 'contact@teldev.org',
    telephone: '+2347084036561',
    address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
  });
}

export function serviceSchema({ name, description }: { name: string; description: string }) {
  return generateStructuredData('Service', {
    serviceType: name,
    description,
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    areaServed: 'NG',
  });
}

export function articleSchema({ title, description, publishedTime }: { title: string; description: string; publishedTime: string }) {
  return generateStructuredData('Article', {
    headline: title,
    description,
    datePublished: publishedTime,
    author: { '@type': 'Organization', name: SITE_NAME },
  });
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return generateStructuredData('BreadcrumbList', {
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  });
}

/** Combines multiple schemas into one `@graph` script tag per page. */
export function generateJsonLdGraph(schemas: object[]): object {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.map((schema) => {
      const copy = { ...(schema as Record<string, unknown>) };
      delete copy['@context'];
      return copy;
    }),
  };
}
