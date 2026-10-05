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
                SS1 and SS2 students, and teachers
              </li>
              <li>
                <Icon name="map-pin" size={18} />
                Lagos, to start
              </li>
              <li>
                <Icon name="sparkles" size={18} />
                Starting with AI
              </li>
              <li>
                <Icon name="check-circle" size={18} />
                {TARS.status}
              </li>
            </ul>
            <div className="ds-row ds-wrap" style={{ gap: '12px' }}>
              <Button variant="primary" size="lg" icon="arrow-right" href="/contact?type=partner">
                Bring the TARS initiative to your school
              </Button>
              <Button variant="ghost" size="lg" href={`/blog/${TARS.blogSlug}`}>
                Read the announcement
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
        <SectionHeader
          heading="Why the TARS initiative"
          lead="AI is already in Nigerian classrooms, on students' phones. The question is whether anyone shows them how to learn with it."
        />
        <div className="ds-detail-cols">
          {TARS.why.map((w, i) => (
            <Reveal key={w.title} delay={i * 100} className="ds-card ds-stack" style={{ gap: '10px' }}>
              <h3 className="h5">{w.title}</h3>
              <p className="body text-text-muted">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Tracks */}
      <Section subtle>
        <SectionHeader
          heading="Three tracks"
          lead="The initiative starts with AI. Two tracks are available to schools now, an SS3 track follows, and sessions on other uses of technology in learning will be added over time."
        />
        <div className="ds-detail-cols">
          {TARS.tracks.map((t, i) => (
            <Reveal
              key={t.title}
              delay={i * 100}
              className="ds-card ds-card--onSubtle ds-stack ds-tars-track"
              style={{ gap: '12px' }}
            >
              <div className="ds-stack" style={{ gap: '4px' }}>
                <h3 className="h5">{t.title}</h3>
                <span className="small text-text-muted">
                  {t.who} · {t.tag}
                </span>
              </div>
              <p className="body text-text-muted">{t.body}</p>
              <ul className="ds-tars-points">
                {t.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
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

      <Section>
        <Reveal>
          <CTABanner
            heading="Bring the TARS initiative to your school"
            body="Tell us about your school and the classes you'd like to include. We'll arrange a short call and agree a date."
            cta="Get in touch"
            href="/contact?type=partner"
          />
        </Reveal>
      </Section>
    </>
  );
}
