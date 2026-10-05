import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { TitleHero } from '@/components/page-heroes';
import Image from 'next/image';
import { Container } from '@/components/container';
// import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { TARS } from '@/content/initiatives/tars';
// import { CaseStudy } from '@/components/case-study';
import { Testimonial } from '@/components/testimonial';
import { CTABanner } from '@/components/cta-banner';
import { Reveal } from '@/components/reveal';
// import { getAllWorkEntries } from '@/lib/content';
import { APPROVED_TESTIMONIALS } from '@/content/testimonials';
import { generateMetadata as generateSEOMetadata, generateJsonLdGraph, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Work',
  description: 'What TELDEV is working on: our initiatives and projects for schools, businesses and institutions across Nigeria.',
  path: '/work',
});

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Work' }];

export default function WorkPage() {
  // const entries = getAllWorkEntries();

  return (
    <>
      <JsonLd graph={generateJsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
      <TitleHero
        breadcrumbs={breadcrumbs}
        title="What we're working on."
        lead="Our initiatives and projects for schools, businesses and institutions across Nigeria."
      />

      {/* Featured initiative */}
      <section className="ds-hero-title-content">
        <Container>
          <Reveal>
            <article className="ds-work-feature">
              {TARS.image && (
                <div className="ds-work-feature__media">
                  <Image
                    src={TARS.image.src}
                    alt={TARS.image.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 640px, 100vw"
                  />
                </div>
              )}
              <div className="ds-work-feature__body">
                <h2 className="h2">
                  {TARS.name} <span className="text-text-muted">({TARS.short})</span>
                </h2>
                <p className="body text-text-muted">{TARS.aim}</p>
                <ul className="ds-work-feature__facts">
                  <li>
                    <Icon name="users" size={18} />
                    Hands-on workshops for SS1 and SS2 students and their teachers
                  </li>
                  <li>
                    <Icon name="map-pin" size={18} />
                    Secondary schools in Lagos, to start
                  </li>
                  <li>
                    <Icon name="calendar" size={18} />
                    An SS3 track for life after school is planned
                  </li>
                  <li>
                    <Icon name="check-circle" size={18} />
                    {TARS.status}
                  </li>
                </ul>
                <div className="ds-row ds-wrap" style={{ gap: '12px', marginTop: '8px' }}>
                  <Button variant="primary" icon="arrow-right" href={`/work/${TARS.slug}`}>
                    Explore the TARS initiative
                  </Button>
                  <Button variant="ghost" href="/contact?type=partner">
                    Bring it to your school
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      {/* Case studies are hidden until there is a real one. To bring them back, uncomment this
          block and the CaseStudy, SectionHeader and getAllWorkEntries imports and `entries` above.
      {entries.length > 0 && (
        <Section>
          <SectionHeader heading="Case studies" lead="The problem, what we did, and what changed." />
          {entries.map((entry, i) => (
            <Reveal key={entry.slug} delay={i * 100}>
              <CaseStudy
                href={`/work/${entry.slug}`}
                title={entry.frontmatter.title}
                summary={entry.frontmatter.summary}
                note={entry.frontmatter.note}
                metricLabel={entry.frontmatter.metricLabel}
                metricValue={entry.frontmatter.metricValue}
              />
            </Reveal>
          ))}
        </Section>
      )}
      */}

      {APPROVED_TESTIMONIALS.length > 0 && (
        <Section>
          <div className="ds-two-col">
            {APPROVED_TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <Testimonial quote={t.quote} name={t.name} role={t.role} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <Reveal>
          <CTABanner />
        </Reveal>
      </Section>
    </>
  );
}
