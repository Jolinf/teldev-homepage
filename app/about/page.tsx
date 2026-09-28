import type { Metadata } from 'next';
import { StatementHero } from '@/components/page-heroes';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { StrategicPillars } from '@/components/strategic-pillars';
import { Timeline } from '@/components/timeline';
import { TeamCard } from '@/components/team-card';
import { Reveal } from '@/components/reveal';
import { TEAM } from '@/content/team';
import {
  generateMetadata as generateSEOMetadata,
  generateJsonLdGraph,
  breadcrumbSchema,
} from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About',
  description:
    'TELDEV Technologies exists to make technology accessible, practical and valuable for everyone, empowering individuals, businesses and communities to simplify work, unlock opportunities and create lasting value.',
  path: '/about',
});

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'About' }];

export default function AboutPage() {
  return (
    <>
      <JsonLd graph={generateJsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
      <StatementHero
        breadcrumbs={breadcrumbs}
        title="Technology should be accessible to everyone."
        lead="We exist to make technology accessible, practical and valuable for everyone, empowering individuals, businesses and communities to simplify work, unlock opportunities and create lasting value. Our starting point is Nigeria."
        // Team photo hidden until a real one exists; uncomment (and add src/alt) to show it.
        // photo={{
        //   label: 'Team photograph',
        //   note: 'The TELDEV team together at the Lagos office, candid, natural light.',
        // }}
      />

      <Section subtle>
        <SectionHeader
          heading="Five pillars behind the work"
          lead="They are not ranked; each is an integral part of the same long-term direction, starting in Nigeria with the rest of Africa in view."
        />
        <StrategicPillars />
      </Section>

      <Section>
        <div className="ds-two-col ds-two-col--start">
          <SectionHeader
            heading="Nigeria first, then Africa"
            lead="Where TELDEV is today, and where it's going."
          />
          <Timeline />
        </div>
      </Section>

      <Section subtle>
        <SectionHeader heading="The people you'll work with" />
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
