import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { Section } from '@/components/section';
import { SplitHero } from '@/components/split-hero';
import { SectionHeader } from '@/components/section-header';
import { ServiceCard } from '@/components/service-card';
import { ProcessSteps } from '@/components/process-steps';
import { LogoStrip } from '@/components/logo-strip';
import { BASH, NAMS_WR } from '@/content/partners';
import { Testimonial } from '@/components/testimonial';
import { CTABanner } from '@/components/cta-banner';
import { Reveal } from '@/components/reveal';
import { SERVICES } from '@/content/services';
import { APPROVED_TESTIMONIALS } from '@/content/testimonials';
import {
  generateMetadata as generateSEOMetadata,
  generateJsonLdGraph,
  organizationSchema,
} from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description:
    'TELDEV Technologies makes technology, AI and automation accessible, practical and impactful for individuals, businesses and communities. Helpdesk, networks, websites and apps, cloud, IT consulting and automation, starting in Nigeria.',
  path: '/',
  keywords: [
    'IT support Lagos',
    'helpdesk support Nigeria',
    'network infrastructure Lagos',
    'website development Nigeria',
    'cloud solutions Nigeria',
    'IT consulting Lagos',
    'AI automation Nigeria',
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd graph={generateJsonLdGraph([organizationSchema()])} />
      <SplitHero
        photoSrc="/images/hero-engineer-client.webp"
        photoAlt="A TELDEV engineer and a client reviewing a dashboard together on a laptop in a bright Lagos office."
      />

      <Section>
        <SectionHeader
          heading="Six ways we help"
          lead="From the day-to-day support that keeps you running to the automation that removes the work entirely. Start where your problem is."
        />
        <div className="ds-grid-12 ds-svc-compact">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90} className="ds-svc-col">
              <ServiceCard
                icon={s.icon}
                title={s.name}
                description={s.desc}
                href={`/services/${s.slug}`}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section navy>
        <SectionHeader
          heading="Plain steps, no black box"
          lead="The same four steps whether you hire us or partner with us."
        />
        <ProcessSteps />
      </Section>

      <Section>
        <SectionHeader heading="Organisations we work with" />
        <LogoStrip variant="wordmark" names={[NAMS_WR.logo, BASH.logo]} />
        {APPROVED_TESTIMONIALS.length > 0 && (
          <div className="ds-two-col">
            {APPROVED_TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <Testimonial quote={t.quote} name={t.name} role={t.role} />
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <Section>
        <Reveal>
          <CTABanner />
        </Reveal>
      </Section>
    </>
  );
}
