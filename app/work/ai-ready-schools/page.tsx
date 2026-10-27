import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { Reveal } from '@/components/reveal';
import { CTABanner } from '@/components/cta-banner';
import { TARS } from '@/content/initiatives/tars';
import {
  generateMetadata as generateSEOMetadata,
  generateJsonLdGraph,
  breadcrumbSchema,
} from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

const path = `/work/${TARS.slug}`;

export const metadata: Metadata = generateSEOMetadata({
  title: `${TARS.name} (${TARS.short})`,
  description: TARS.aim,
  path,
  image: TARS.image?.src,
  imageAlt: TARS.image?.alt,
});

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: TARS.name },
];

export default function TarsPage() {
  return (
    <>
      <JsonLd graph={generateJsonLdGraph([breadcrumbSchema(breadcrumbs)])} />

      {/* Hero */}
      <section className="ds-event-hero">
        <Container className="ds-stack" style={{ gap: '32px' }}>
          <div className="ds-event-hero__copy ds-anim-in">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="display ds-event-hero__title">
              {TARS.name} <span className="text-text-muted">({TARS.short})</span>
            </h1>
            <p className="lead text-text-muted">{TARS.aim}</p>
            <ul className="ds-event-hero__meta">
              <li>
                <Icon name="users" size={18} />
                Secondary schools, students and teachers
              </li>
              <li>
                <Icon name="map-pin" size={18} />
                Lagos, to start
              </li>
              <li>
                <Icon name="sparkles" size={18} />
                Research-led, starting with AI
              </li>
              <li>
                <Icon name="check-circle" size={18} />
                {TARS.status}
              </li>
            </ul>
            <div className="ds-row ds-wrap" style={{ gap: '12px' }}>
              <Button variant="primary" size="lg" icon="arrow-right" href="/contact?type=partner">
                Book a workshop
              </Button>
              <Button variant="ghost" size="lg" href={`/blog/${TARS.blogSlug}`}>
                Read the story
              </Button>
            </div>
          </div>
          {TARS.image && (
            <div className="ds-event-hero__media ds-anim-in" style={{ animationDelay: '150ms' }}>
              <ImagePlaceholder
                ratio="16x9"
                src={TARS.image.src}
                alt={TARS.image.alt}
                label="Initiative photograph"
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
              />
            </div>
          )}
        </Container>
      </section>

      {/* At a glance */}
      <Section subtle>
        <dl className="ds-event-facts ds-event-facts--4">
          {TARS.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Why */}
      <Section>
        <SectionHeader heading="Why the TARS initiative" lead={TARS.whyLead} />
        <ul className="ds-tars-stages ds-tars-stages--4">
          {TARS.stats.map((s, i) => (
            <Reveal key={s.value} as="li" delay={i * 80} className="ds-card ds-stack" style={{ gap: '10px' }}>
              <span className="display ds-stat__num" style={{ fontSize: '40px', lineHeight: '44px' }}>
                {s.value}
              </span>
              <p className="body">{s.label}</p>
              <p className="small text-text-muted" style={{ marginTop: 'auto' }}>
                Source:{' '}
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.source}
                </a>
              </p>
            </Reveal>
          ))}
        </ul>
        <div className="ds-detail-cols" style={{ marginTop: '24px' }}>
          {TARS.why.map((w, i) => (
            <Reveal key={w.title} delay={i * 100} className="ds-card ds-stack" style={{ gap: '10px' }}>
              <h3 className="h5">{w.title}</h3>
              <p className="body text-text-muted">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section subtle>
        <SectionHeader heading="How the initiative works" lead={TARS.approachLead} />
        <ol className="ds-tars-stages ds-tars-stages--4">
          {TARS.approach.map((s, i) => (
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
              <p className="body text-text-muted">{s.focus}</p>
              {s.note && <p className="small ds-tars-stages__note">{s.note}</p>}
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Stages */}
      <Section>
        <SectionHeader heading="Step 1: TARS Launchpad" lead={TARS.stagesLead} />
        <ol className="ds-tars-stages">
          {TARS.stages.map((s, i) => (
            <Reveal
              key={s.title}
              as="li"
              delay={i * 80}
              className="ds-card ds-stack"
              style={{ gap: '10px' }}
            >
              <span className="ds-tars-stages__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="h5">{s.title}</h3>
              <p className="body text-text-muted">{s.focus}</p>
              {s.note && <p className="small ds-tars-stages__note">{s.note}</p>}
            </Reveal>
          ))}
        </ol>
        <Reveal className="ds-callout" style={{ marginBottom: 0 }}>
          <p className="ds-callout__title">{TARS.ss3.title}</p>
          <div className="ds-callout__body">
            <p className="body text-text-muted">{TARS.ss3.body}</p>
          </div>
        </Reveal>
      </Section>

      {/* Teachers */}
      <Section subtle>
        <SectionHeader heading="Teachers: support, not appraisal" lead={TARS.teachersLead} />
        <div className="ds-detail-cols">
          {TARS.teachers.map((t, i) => (
            <Reveal key={t.title} delay={i * 100} className="ds-card ds-card--onSubtle ds-stack" style={{ gap: '10px' }}>
              <p className="small ds-tars-stages__note" style={{ marginTop: 0 }}>
                {t.when}
              </p>
              <h3 className="h5">{t.title}</h3>
              <p className="body text-text-muted">{t.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="ds-callout" style={{ marginBottom: 0 }}>
          <p className="body" style={{ margin: 0 }}>
            {TARS.teachersNote}
          </p>
        </Reveal>
      </Section>

      {/* Research */}
      <Section>
        <SectionHeader heading="Step 2: a closer look" lead={TARS.researchLead} />
        <div className="ds-two-col ds-two-col--start">
          <div className="ds-stack" style={{ gap: '16px' }}>
            {TARS.research.map((r, i) => (
              <Reveal key={r.title} delay={i * 100} className="ds-card ds-stack" style={{ gap: '10px' }}>
                <span className="ds-tars-stages__num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="h5">{r.title}</h3>
                <p className="body text-text-muted">{r.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="ds-card ds-stack" style={{ gap: '12px' }}>
            <h3 className="h5">What the research asks</h3>
            <ul className="ds-tars-points" style={{ marginTop: 0, paddingTop: 0, borderTop: 0 }}>
              {TARS.researchQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <p className="body text-text-muted" style={{ paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
              {TARS.researchNote}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Commitments */}
      <Section subtle>
        <SectionHeader heading="Our commitments on research and data" lead={TARS.commitmentsLead} />
        <div className="ds-detail-cols">
          {TARS.commitments.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 100} className="ds-card ds-card--onSubtle ds-stack" style={{ gap: '10px' }}>
              <h3 className="h5">{c.title}</h3>
              <p className="body text-text-muted">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How schools join */}
      <Section navy>
        <SectionHeader heading="How a school takes part" />
        <ol className="ds-process">
          {TARS.steps.map((s, i) => (
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

      {/* Progress + FAQ */}
      <Section>
        <div className="ds-two-col ds-two-col--start">
          <div className="ds-stack" style={{ gap: '24px' }}>
            <SectionHeader heading="Where we are" lead="Updated as schools sign up and workshops take place." />
            <ol className="ds-timeline">
              {TARS.progress.map((p, i) => (
                <Reveal
                  key={p.text}
                  as="li"
                  delay={i * 100}
                  className={`ds-timeline__item ${p.date === 'Next' ? '' : 'ds-timeline__item--done'}`}
                >
                  <span className="ds-timeline__dot" />
                  <h3 className="h6">{p.date}</h3>
                  <p className="body text-text-muted">{p.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
          <div className="ds-stack" style={{ gap: '24px' }}>
            <h2 className="h3">Questions schools ask</h2>
            <div className="ds-faq">
              {TARS.faq.map((item, i) => (
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
        </div>
      </Section>

      {/* Partners */}
      <Section subtle>
        <SectionHeader heading="Partner with the initiative" lead={TARS.partnersLead} />
        <div className="ds-tars-stages ds-tars-stages--4">
          {TARS.partners.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="ds-card ds-card--onSubtle ds-stack" style={{ gap: '10px' }}>
              <h3 className="h5">{p.title}</h3>
              <p className="body text-text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <CTABanner
            heading="Bring the TARS initiative to your school"
            body="Tell us about your school and the classes you'd like to include, or how you would like to partner. We'll arrange a short call."
            cta="Get in touch"
            href="/contact?type=partner"
          />
        </Reveal>
      </Section>
    </>
  );
}
