import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How TELDEV Technologies handles your data.',
};

export default function PrivacyPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy' }]} />
      <div className="ds-prose">
        <h1 className="h1">Privacy policy</h1>
        <p className="lead text-text-muted">[Privacy policy text to be supplied]</p>
      </div>
    </Section>
  );
}
