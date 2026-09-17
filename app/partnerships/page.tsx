import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { LayeredVisual } from '@/components/layered-visual';
import { EventMiniCard, FlowCard } from '@/components/visual-cards';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { LogoStrip } from '@/components/logo-strip';
import { EventHighlight } from '@/components/event-highlight';
import { CTABanner } from '@/components/cta-banner';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata, generateJsonLdGraph, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Partnerships',
  description:
    'We work alongside universities, schools and event organisers to build digital skills and community impact across Nigeria.',
  path: '/partnerships',
});

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Partnerships' }];

export default function PartnershipsPage() {
  const runCard = <FlowCard label="How a partnership runs" steps={['Proposal', 'Plan', 'Event']} />;

  return (
    <>
      <JsonLd graph={generateJsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="Partner with us on"
        accent="technology education."
        lead="We work alongside universities, schools and event organisers to build digital skills and community impact across Nigeria."
        actions={
          <Button variant="primary" size="lg" icon="arrow-right" href="/contact?type=partner">
            Start a partnership
          </Button>
        }
        visual={
          <LayeredVisual
            photo={{ label: 'Event photograph', note: 'Students at a technology session run with TELDEV, candid, real venue.' }}
            cards={[
              { pos: 'tl', width: '270px', content: <EventMiniCard mon="Mar" day="14" title="NAMS 7th Annual Convention" sub="Technology track" /> },
              { pos: 'br', width: '270px', content: <EventMiniCard mon="Sep" day="02" title="University of Lagos" sub="Sponsorship" /> },
              { pos: 'bl', content: runCard },
            ]}
          />
        }
      />

      <Section subtle>
        <SectionHeader overline="Partners" heading="Who we've worked with" />
        <LogoStrip names={['University of Lagos', 'NAMS', 'Partner C', 'Partner D']} />
      </Section>

      <Section>
        <SectionHeader overline="Highlights" heading="Partnerships and events" />
        <div className="ds-two-col">
          <Reveal>
            <EventHighlight
              media
              date={{ mon: 'Mar', day: '14' }}
              tag="Partnership"
              title="NAMS 7th Annual Convention"
              description="TELDEV supported the technology track alongside the University of Lagos."
            />
          </Reveal>
          <Reveal delay={120}>
            <EventHighlight
              media
              date={{ mon: 'Sep', day: '02' }}
              tag="Sponsorship"
              title="University of Lagos sponsorship"
              description="Supporting student technology projects at UNILAG."
            />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <CTABanner
            heading="Planning an event or programme?"
            body="Tell us about your audience and goals — we'll suggest how TELDEV can take part."
            cta="Start a partnership"
            href="/contact?type=partner"
            card={runCard}
          />
        </Reveal>
      </Section>
    </>
  );
}
