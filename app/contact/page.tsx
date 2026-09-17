import type { Metadata } from 'next';
import { ContactSection } from '@/components/contact-section';
import { generateMetadata as generateSEOMetadata, generateJsonLdGraph, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact',
  description: "Tell us what you're trying to do, and we'll tell you plainly whether we can help.",
  path: '/contact',
});

const VALID_TYPES = new Set(['hire', 'partner', 'other']);
const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Contact' }];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const defaultEnquiryType = VALID_TYPES.has(type ?? '') ? (type as 'hire' | 'partner' | 'other') : 'hire';

  return (
    <>
      <JsonLd graph={generateJsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
      <ContactSection defaultEnquiryType={defaultEnquiryType} />
    </>
  );
}
