import type { Metadata } from 'next';
import { IndexHero } from '@/components/page-heroes';
import { SectionHeader } from '@/components/section-header';
import { ProcessSteps } from '@/components/process-steps';
import { CTABanner } from '@/components/cta-banner';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
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

      {SERVICES.map((s, i) => {
        const detail = SERVICE_DETAILS[s.slug];
        return (
          <section
            key={s.slug}
            className="ds-section"
            style={{ background: i % 2 === 0 ? 'var(--bg-subtle)' : 'var(--bg)' }}
          >
            <Container>
              <div className="ds-detail-cols" style={{ gridTemplateColumns: '1fr 2fr' }}>
                <div className="ds-stack" style={{ gap: '16px', alignItems: 'flex-start' }}>
                  <h2 className="h3">{detail.title}</h2>
                  <p className="body text-text-muted">{detail.lead}</p>
                  <Button variant="secondary" icon="arrow-right" href={`/services/${s.slug}`}>
                    Learn more
                  </Button>
                </div>
                <div className="ds-detail-cols">
                  <div className="ds-card ds-stack" style={{ gap: '10px' }}>
                    <h3 className="h6">The problem</h3>
                    <p className="body text-text-muted">{detail.problem}</p>
                  </div>
                  <div className="ds-card ds-stack" style={{ gap: '10px' }}>
                    <h3 className="h6">What we do</h3>
                    <p className="body text-text-muted">{detail.what}</p>
                  </div>
                  <div className="ds-card ds-stack" style={{ gap: '10px' }}>
                    <h3 className="h6">Outcomes</h3>
                    <p className="body text-text-muted">{detail.outcomes}</p>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <Section subtle id="how-we-work">
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
