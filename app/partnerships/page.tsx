import type { Metadata } from 'next';
import { PhotoHero } from '@/components/page-heroes';
import { FlowCard } from '@/components/visual-cards';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { LogoStrip } from '@/components/logo-strip';
import { PartnerSpotlight } from '@/components/partner-spotlight';
import { BASH, NAMS_WR } from '@/content/partners';
import { NAMS_WR_CONVENTION as EVENT } from '@/content/events/nams-wr-convention-2026';
import { EventHighlight } from '@/components/event-highlight';
import { CTABanner } from '@/components/cta-banner';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import {
  generateMetadata as generateSEOMetadata,
  generateJsonLdGraph,
  breadcrumbSchema,
} from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Partnerships',
  description:
    'We work alongside universities, schools and event organisers to build digital skills and community impact across Nigeria.',
  path: '/partnerships',
});

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Partnerships' }];

export default function PartnershipsPage() {
  const runCard = (
    <FlowCard label="How a partnership runs" steps={['Proposal', 'Tickets on Bash', 'Event']} />
  );

  return (
    <>
      <JsonLd graph={generateJsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
      <PhotoHero
        breadcrumbs={breadcrumbs}
        title="Partner with us on technology education."
        lead="We work alongside universities, schools and event organisers to build digital skills and community impact across Nigeria."
        actions={
          <Button variant="primary" size="lg" icon="arrow-right" href="/contact?type=partner">
            Start a partnership
          </Button>
        }
      />

      <Section subtle>
        <SectionHeader heading="Who we've worked with" />
        <LogoStrip variant="wordmark" names={['University of Lagos', NAMS_WR.logo, BASH.logo]} />
      </Section>

      <Section>
        <PartnerSpotlight />
      </Section>

      <Section subtle>
        <SectionHeader heading="Partnerships and events" />
        <div>
          <Reveal>
            <EventHighlight
              media
              wide
              date={EVENT.dateShort}
              title={EVENT.title}
              description={EVENT.summary}
              image={EVENT.hero}
              link={{ href: `/partnerships/${EVENT.slug}`, label: 'Read about the convention' }}
            />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <CTABanner
            heading="Planning an event or programme?"
            body="Tell us about your audience and goals. We'll suggest how TELDEV can take part, and get tickets live on Bash."
            cta="Start a partnership"
            href="/contact?type=partner"
            card={runCard}
          />
        </Reveal>
      </Section>
    </>
  );
}
