import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceHero } from '@/components/page-heroes';
import { Reveal } from '@/components/reveal';
import { Container } from '@/components/container';
import { Icon } from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { SERVICES, SERVICE_DETAILS, type ServiceSlug } from '@/content/services';
import type { IconName } from '@/lib/icons';
import {
  generateMetadata as generateSEOMetadata,
  generateJsonLdGraph,
  serviceSchema,
  breadcrumbSchema,
} from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getDetail(slug: string) {
  if (!(slug in SERVICE_DETAILS)) return null;
  return SERVICE_DETAILS[slug as ServiceSlug];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getDetail(slug);
  if (!detail) return {};
  return generateSEOMetadata({
    title: detail.title,
    description: detail.lead,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getDetail(slug);
  if (!detail) notFound();
  const nav = SERVICES.find((s) => s.slug === slug)!;

  const blocks: { icon: IconName; title: string; body: string }[] = [
    { icon: 'alert-circle', title: 'The problem', body: detail.problem },
    { icon: 'sparkles', title: 'What we do', body: detail.what },
    { icon: 'check-circle', title: 'Outcomes', body: detail.outcomes },
  ];
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: detail.title },
  ];

  return (
    <>
      <JsonLd
        graph={generateJsonLdGraph([
          serviceSchema({ name: detail.title, description: detail.lead }),
          breadcrumbSchema(breadcrumbs),
        ])}
      />
      <ServiceHero
        current={nav.slug}
        breadcrumbs={breadcrumbs}
        icon={nav.icon}
        title={detail.title}
        lead={detail.lead}
        actions={
          <>
            <Button variant="primary" size="lg" icon="arrow-right" href="/contact?type=hire">
              Request a quote
            </Button>
            <Button variant="ghost" size="lg" href="/services#how-we-work">
              See how we work
            </Button>
          </>
        }
      />

      <section className="ds-section ds-section--subtle">
        <Container>
          <div className="ds-detail-cols">
            {blocks.map((blk, i) => (
              <Reveal
                key={blk.title}
                delay={i * 100}
                className="ds-card ds-card--onSubtle ds-stack"
                style={{ gap: '12px' }}
              >
                <span className="ds-icon-tile">
                  <Icon name={blk.icon} size={22} />
                </span>
                <h2 className="h5">{blk.title}</h2>
                <p className="body text-text-muted">{blk.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <nav aria-label="Other services" className="ds-section">
        <Container className="ds-stack" style={{ gap: '16px' }}>
          <span className="label-sm text-text-muted">Other services</span>
          <div className="ds-row ds-wrap" style={{ gap: '12px' }}>
            {SERVICES.filter((s) => s.slug !== nav.slug).map((s) => (
              <Button key={s.slug} variant="secondary" size="sm" href={`/services/${s.slug}`}>
                {s.name}
              </Button>
            ))}
          </div>
        </Container>
      </nav>
    </>
  );
}
