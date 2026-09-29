import type { Metadata } from 'next';
import { IndexHero } from '@/components/page-heroes';
import { SectionHeader } from '@/components/section-header';
import { ProcessSteps } from '@/components/process-steps';
import { CTABanner } from '@/components/cta-banner';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';
import { ServiceCard } from '@/components/service-card';
import { SERVICES, SERVICE_DETAILS } from '@/content/services';
import {
  generateMetadata as generateSEOMetadata,
  generateJsonLdGraph,
  breadcrumbSchema,
} from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Services',
  description:
    "Helpdesk support, networks, websites and apps, cloud, IT consulting and AI & automation for small and growing organisations in Nigeria. Tell us the problem; we'll tell you what it takes.",
  path: '/services',
});

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Services' }];

export default function ServicesPage() {
  return (
    <>
      <JsonLd graph={generateJsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
      <IndexHero
        breadcrumbs={breadcrumbs}
        title="Six services, scoped plainly."
        lead="From everyday IT support to cloud, system integration, AI and automation, we simplify the complex and remove the work that should not exist. Tell us the problem; we'll tell you what it takes."
        actions={
          <>
            <Button variant="primary" size="lg" icon="arrow-right" href="/contact?type=hire">
              Request a quote
            </Button>
            <Button variant="ghost" size="lg" href="#how-we-work">
              See how we work
            </Button>
          </>
        }
      />

      <Section subtle>
        <SectionHeader
          heading="What each service covers"
          lead="A short overview of each. Open any service for the problem it solves, what we do and what changes afterwards."
        />
        <div className="ds-grid-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90} className="ds-svc-col">
              <ServiceCard
                icon={s.icon}
                title={SERVICE_DETAILS[s.slug].title}
                description={SERVICE_DETAILS[s.slug].lead}
                href={`/services/${s.slug}`}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section navy id="how-we-work">
        <SectionHeader heading="Plain steps, no black box" />
        <ProcessSteps />
      </Section>

      <Section>
        <CTABanner
          heading="Not sure which service you need?"
          body="Describe the problem in a few lines. We'll point you to the right fix, or tell you if it isn't us."
          cta="Request a quote"
        />
      </Section>
    </>
  );
}
