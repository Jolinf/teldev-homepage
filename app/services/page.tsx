import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { LayeredVisual } from '@/components/layered-visual';
import { TicketCard, ProgressCard, FlowCard } from '@/components/visual-cards';
import { SectionHeader } from '@/components/section-header';
import { ProcessSteps } from '@/components/process-steps';
import { CTABanner } from '@/components/cta-banner';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { SERVICES, SERVICE_DETAILS } from '@/content/services';

export const metadata: Metadata = {
  title: 'Services',
  description: "Websites, day-to-day IT, cloud and custom software for small and growing organisations in Nigeria. Tell us the problem; we'll tell you what it takes.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        title="Four services,"
        accent="scoped plainly."
        lead="Websites, day-to-day IT, cloud and custom software for small and growing organisations in Nigeria. Tell us the problem; we'll tell you what it takes."
        actions={
          <>
            <Button variant="primary" size="lg" icon="arrow-right" href="/contact?type=hire">
              Request a quote
            </Button>
            <Button variant="ghost" size="lg" href="#how-we-work">
              How we work
            </Button>
          </>
        }
        visual={
          <LayeredVisual
            photo={{ label: 'Service photograph', note: "TELDEV engineer fixing a network cabinet at a client's office, candid." }}
            cards={[
              { pos: 'tl', width: '260px', content: <TicketCard code="Ticket #2481" status="Resolved" title="Office printer network restored" sub="Response in 42 minutes" /> },
              { pos: 'br', width: '270px', content: <ProgressCard icon="cloud" title="Microsoft 365 migration" sub="38 of 44 mailboxes moved" value={86} foot="Files & identities next" /> },
              { pos: 'bl', content: <FlowCard label="Every project" steps={['Audit', 'Build', 'Handover']} /> },
            ]}
          />
        }
      />

      {SERVICES.map((s, i) => {
        const detail = SERVICE_DETAILS[s.slug];
        return (
          <section key={s.slug} className="ds-section" style={{ background: i % 2 === 0 ? 'var(--bg-subtle)' : 'var(--bg)' }}>
            <Container>
              <div className="ds-detail-cols" style={{ gridTemplateColumns: '1fr 2fr' }}>
                <div className="ds-stack" style={{ gap: '16px', alignItems: 'flex-start' }}>
                  <span className="overline ds-overline">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="h3">{detail.title}</h2>
                  <p className="body text-text-muted">{detail.lead}</p>
                  <Button variant="secondary" icon="arrow-right" href={`/services/${s.slug}`}>
                    Learn more
                  </Button>
                </div>
                <div className="ds-detail-cols">
                  <div className="ds-card ds-stack" style={{ gap: '10px' }}>
                    <h3 className="h6">The problem</h3>
                    <p className="small text-text-muted">{detail.problem}</p>
                  </div>
                  <div className="ds-card ds-stack" style={{ gap: '10px' }}>
                    <h3 className="h6">What we do</h3>
                    <p className="small text-text-muted">{detail.what}</p>
                  </div>
                  <div className="ds-card ds-stack" style={{ gap: '10px' }}>
                    <h3 className="h6">Outcomes</h3>
                    <p className="small text-text-muted">{detail.outcomes}</p>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <Section subtle id="how-we-work">
        <SectionHeader overline="How we work" heading="Plain steps, no black box" />
        <ProcessSteps />
      </Section>

      <Section>
        <CTABanner
          heading="Not sure which service you need?"
          body="Describe the problem in a few lines — we'll point you to the right fix, or tell you if it isn't us."
          cta="Request a quote"
        />
      </Section>
    </>
  );
}
