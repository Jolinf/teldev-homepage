import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Reveal } from '@/components/reveal';
import { CTABanner } from '@/components/cta-banner';
import { SPOTLIGHT } from '@/content/initiatives/spotlight';
import {
  generateMetadata as generateSEOMetadata,
  generateJsonLdGraph,
  breadcrumbSchema,
} from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

const path = `/work/${SPOTLIGHT.slug}`;

export const metadata: Metadata = generateSEOMetadata({
  title: SPOTLIGHT.name,
  description: SPOTLIGHT.aim,
  path,
});

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: SPOTLIGHT.name },
];

export default function SpotlightPage() {
  return (
    <>
      <JsonLd graph={generateJsonLdGraph([breadcrumbSchema(breadcrumbs)])} />

      {/* Hero */}
      <section className="ds-event-hero">
        <Container className="ds-stack" style={{ gap: '32px' }}>
          <div className="ds-event-hero__copy ds-anim-in">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="display ds-event-hero__title">{SPOTLIGHT.name}</h1>
            <p className="h4">{SPOTLIGHT.tagline}</p>
            <p className="lead text-text-muted">{SPOTLIGHT.aim}</p>
            <ul className="ds-event-hero__meta">
              <li>
                <Icon name="layout-template" size={18} />
                Storefront, business profile and domain
              </li>
              <li>
                <Icon name="message-circle" size={18} />
                Orders stay on WhatsApp and social media
              </li>
              <li>
                <Icon name="map-pin" size={18} />
                Lagos and beyond
              </li>
              <li>
                <Icon name="check-circle" size={18} />
                {SPOTLIGHT.status}
              </li>
            </ul>
            <div className="ds-row ds-wrap" style={{ gap: '12px' }}>
              <Button variant="primary" size="lg" icon="arrow-right" href={SPOTLIGHT.demoUrl}>
                See a live storefront
              </Button>
              <Button variant="ghost" size="lg" href="/contact?type=hire">
                Get your storefront
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* At a glance */}
      <Section subtle>
        <dl className="ds-event-facts ds-event-facts--4">
          {SPOTLIGHT.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Why */}
      <Section>
        <SectionHeader heading="Why a storefront" lead={SPOTLIGHT.whyLead} />
        <div className="ds-detail-cols">
          {SPOTLIGHT.why.map((w, i) => (
            <Reveal key={w.title} delay={i * 100} className="ds-card ds-stack" style={{ gap: '10px' }}>
              <h3 className="h5">{w.title}</h3>
              <p className="body text-text-muted">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What's included */}
      <Section subtle>
        <SectionHeader heading="What you get" lead={SPOTLIGHT.includedLead} />
        <ol className="ds-tars-stages ds-tars-stages--3">
          {SPOTLIGHT.included.map((s, i) => (
            <Reveal
              key={s.title}
              as="li"
              delay={i * 80}
              className="ds-card ds-card--onSubtle ds-stack"
              style={{ gap: '10px' }}
            >
              <span className="ds-tars-stages__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="h5">{s.title}</h3>
              <p className="body text-text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="ds-callout" style={{ marginBottom: 0 }}>
          <p className="ds-callout__title">Updates when you need them</p>
          <div className="ds-callout__body">
            <p className="body text-text-muted">{SPOTLIGHT.updatesNote}</p>
          </div>
        </Reveal>
      </Section>

      {/* Live storefronts */}
      <Section>
        <SectionHeader heading="See it live" lead={SPOTLIGHT.demosLead} />
        <div className="ds-two-col ds-two-col--start">
          {SPOTLIGHT.demos.map((d, i) => (
            <Reveal key={d.name} delay={i * 100} className="ds-card ds-stack" style={{ gap: '12px' }}>
              <div className="ds-stack" style={{ gap: '4px' }}>
                <h3 className="h5">{d.name}</h3>
                <span className="small text-text-muted">{d.what}</span>
              </div>
              <p className="body text-text-muted">{d.body}</p>
              <div>
                <Button variant="ghost" icon="arrow-up-right" href={d.href}>
                  Open the storefront
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section navy>
        <SectionHeader heading="How it works" />
        <ol className="ds-process">
          {SPOTLIGHT.steps.map((s, i) => (
            <Reveal key={s.title} as="li" delay={i * 140} className="ds-process__step">
              <span className="ds-process__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="h6">{s.title}</h3>
              <p className="body text-text-muted" style={{ marginTop: '6px' }}>
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="ds-stack" style={{ gap: '24px', maxWidth: '760px' }}>
          <h2 className="h3">Questions businesses ask</h2>
          <div className="ds-faq">
            {SPOTLIGHT.faq.map((item, i) => (
              <details key={item.q} className="ds-faq__item" open={i === 0}>
                <summary>
                  <span className="ds-faq__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="ds-faq__q">{item.q}</span>
                  <Icon name="chevron-down" size={18} className="ds-faq__chev" />
                </summary>
                <div className="ds-faq__a">
                  <p className="body text-text-muted">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <CTABanner
            heading="Put your business in the spotlight"
            body="Send us your social pages and tell us what you sell. We'll show you what your storefront could look like."
            cta="Get in touch"
            href="/contact?type=hire"
          />
        </Reveal>
      </Section>
    </>
  );
}
