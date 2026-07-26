import { useEffect } from 'react';

interface SEOProps {
  /** Page title WITHOUT the brand suffix — this component appends " | TelDev Technologies" */
  title: string;
  description: string;
  /** Path only, e.g. "/Helpdesk" — combined with the canonical origin below */
  path: string;
  /** Set true only for pages that should never be indexed (e.g. internal admin tools) */
  noindex?: boolean;
}

const SITE_NAME = 'TelDev Technologies';
const SITE_ORIGIN = 'https://www.teldev.org';
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/social-preview.png`;

/**
 * Per-route <title>/meta management for this client-rendered SPA.
 *
 * Why this exists: index.html ships a single static <title> and no meta
 * description, and vercel.json rewrites every route to that one file — so
 * every page previously served an identical title/description to Google
 * and to anyone sharing a link. There's no SSR here, so the fix has to run
 * client-side, on every route change, rather than living in index.html.
 *
 * Every tag it touches is looked up by a stable id/name and updated in
 * place (or created once) rather than appended — so switching routes never
 * accumulates duplicate <meta>/<link> tags in <head>.
 */
export default function SEO({ title, description, path, noindex = false }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const canonicalUrl = `${SITE_ORIGIN}${path}`;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE);
    upsertMeta('property', 'og:site_name', SITE_NAME);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE);

    upsertLink('canonical', canonicalUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, noindex]);

  return null;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
