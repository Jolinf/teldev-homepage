import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { TitleHero } from '@/components/page-heroes';
import { Container } from '@/components/container';
import { CaseStudy } from '@/components/case-study';
import { Testimonial } from '@/components/testimonial';
import { CTABanner } from '@/components/cta-banner';
import { Reveal } from '@/components/reveal';
import { getAllWorkEntries } from '@/lib/content';
import { APPROVED_TESTIMONIALS } from '@/content/testimonials';
import { generateMetadata as generateSEOMetadata, generateJsonLdGraph, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Work',
  description: 'The problem, what we did, and what changed, for businesses and institutions across Nigeria.',
  path: '/work',
});

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Work' }];

export default function WorkPage() {
  const entries = getAllWorkEntries();

  return (
    <>
      <JsonLd graph={generateJsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
      <TitleHero
        breadcrumbs={breadcrumbs}
        title="Work we've done, told plainly."
        lead="The problem, what we did, and what changed, for businesses and institutions across Nigeria."
      />

      <section className="ds-hero-title-content">
        <Container>
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
        </Container>
      </section>

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
