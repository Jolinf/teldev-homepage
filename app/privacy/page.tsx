import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { generateMetadata as generateSEOMetadata, generateJsonLdGraph, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Privacy',
  description: 'How TELDEV Technologies handles your data.',
  path: '/privacy',
  noindex: true,
});

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Privacy' }];

export default function PrivacyPage() {
  return (
    <Section>
      <JsonLd graph={generateJsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
      <Breadcrumbs items={breadcrumbs} />
      <div className="ds-prose">
        <h1 className="h1">Privacy policy</h1>
        <p className="lead text-text-muted">[Privacy policy text to be supplied]</p>
      </div>
    </Section>
  );
}
