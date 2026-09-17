import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { Section } from '@/components/section';
import { SplitHero } from '@/components/split-hero';
import { SectionHeader } from '@/components/section-header';
import { ServiceCard } from '@/components/service-card';
import { ProcessSteps } from '@/components/process-steps';
import { LogoStrip } from '@/components/logo-strip';
import { Testimonial } from '@/components/testimonial';
import { CTABanner } from '@/components/cta-banner';
import { Reveal } from '@/components/reveal';
import { SERVICES } from '@/content/services';
import { TESTIMONIALS } from '@/content/testimonials';
import { generateMetadata as generateSEOMetadata, generateJsonLdGraph, organizationSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description:
    'TELDEV helps businesses, institutions and individuals understand, adopt and get real value from technology — starting in Nigeria.',
  path: '/',
  keywords: ['IT support Lagos', 'website development Nigeria', 'Microsoft 365 setup', 'AI automation Nigeria'],
});

export default function HomePage() {
  return (
    <>
      <JsonLd graph={generateJsonLdGraph([organizationSchema()])} />
      <SplitHero />

      <Section>
        <SectionHeader overline="What we do" heading="Four ways we help" lead="Live, paid services — not a roadmap." />
        <div className="ds-grid-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90} className="ds-svc-col">
              <ServiceCard icon={s.icon} title={s.name} description={s.desc} href={`/services/${s.slug}`} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section subtle>
        <SectionHeader overline="How we work" heading="Plain steps, no black box" lead="The same four steps whether you hire us or partner with us." />
        <ProcessSteps />
      </Section>

      <Section>
        <SectionHeader overline="Trusted by" heading="Organisations we work with" />
        <LogoStrip names={['Partner A', 'Partner B', 'Partner C', 'Partner D', 'Partner E']} />
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
