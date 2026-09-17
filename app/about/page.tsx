import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { LayeredVisual } from '@/components/layered-visual';
import { MetricCard, FlowCard, InfoCard } from '@/components/visual-cards';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { StrategicPillars } from '@/components/strategic-pillars';
import { Timeline } from '@/components/timeline';
import { TeamCard } from '@/components/team-card';
import { Reveal } from '@/components/reveal';
import { TEAM } from '@/content/team';

export const metadata: Metadata = {
  title: 'About',
  description:
    'We help businesses, institutions and individuals understand, adopt and get real value from technology — starting in Nigeria.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        title="Technology should be"
        accent="accessible to everyone."
        lead="We help businesses, institutions and individuals understand, adopt and get real value from technology — starting in Nigeria."
        visual={
          <LayeredVisual
            photo={{ label: 'Team photograph', note: 'The TELDEV team together at the Lagos office, candid, natural light.' }}
            cards={[
              { pos: 'tl', width: '230px', content: <MetricCard icon="building" label="Services live today" value="4" sub="Web · IT · Cloud · AI" /> },
              { pos: 'br', width: '290px', content: <FlowCard label="Where we're heading" steps={['Nigeria', 'West Africa', 'Africa']} doneIndex={0} /> },
              { pos: 'bl', content: <InfoCard icon="map-pin" title="Based in Lagos" sub="Working across Nigeria" /> },
            ]}
          />
        }
      />

      <Section subtle>
        <SectionHeader overline="What we believe" heading="Five pillars behind the work" />
        <StrategicPillars />
      </Section>

      <Section>
        <div className="ds-two-col ds-two-col--start">
          <SectionHeader overline="Roadmap" heading="Nigeria first, then Africa" lead="Where TELDEV is today, and where it's going." />
          <Timeline />
        </div>
      </Section>

      <Section subtle>
        <SectionHeader overline="Team" heading="The people you'll work with" />
        <div className="ds-team-grid">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 120}>
              <TeamCard {...member} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
