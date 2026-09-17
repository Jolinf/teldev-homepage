import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { LayeredVisual } from '@/components/layered-visual';
import { TicketCard, MetricCard, FlowCard } from '@/components/visual-cards';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { CaseStudy } from '@/components/case-study';
import { Testimonial } from '@/components/testimonial';
import { CTABanner } from '@/components/cta-banner';
import { Reveal } from '@/components/reveal';
import { getAllWorkEntries } from '@/lib/content';
import { TESTIMONIALS } from '@/content/testimonials';

export const metadata: Metadata = {
  title: 'Work',
  description: "The problem, what we did, and what changed — for businesses and institutions across Nigeria.",
};

export default function WorkPage() {
  const entries = getAllWorkEntries();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Work' }]}
        title="Work we've done,"
        accent="told plainly."
        lead="The problem, what we did, and what changed — for businesses and institutions across Nigeria."
        visual={
          <LayeredVisual
            photo={{ label: 'Project photograph', note: 'Engineer and client reviewing a finished rollout on site, natural light.' }}
            cards={[
              { pos: 'tl', width: '270px', content: <TicketCard code="Project handover" status="Complete" title="Office network and Microsoft 365 rollout" sub="Handed over with documentation" /> },
              { pos: 'br', width: '220px', content: <MetricCard icon="check-circle" label="Downtime during move" value="0 hrs" /> },
              { pos: 'bl', content: <FlowCard label="Every project" steps={['Audit', 'Build', 'Handover']} /> },
            ]}
          />
        }
      />

      <Section subtle>
        <SectionHeader overline="Case studies" heading="Selected projects" />
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

      <Section>
        <div className="ds-two-col">
          <Reveal>
            <Testimonial {...TESTIMONIALS[0]!} />
          </Reveal>
          <Reveal delay={120}>
            <Testimonial {...TESTIMONIALS[1]!} />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <CTABanner />
        </Reveal>
      </Section>
    </>
  );
}
