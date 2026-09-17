import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/page-hero';
import { LayeredVisual, type VisualCardSpec } from '@/components/layered-visual';
import { MetricCard, ProgressCard, FlowCard, TicketCard } from '@/components/visual-cards';
import { Reveal } from '@/components/reveal';
import { Container } from '@/components/container';
import { Icon } from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { SERVICES, SERVICE_DETAILS, type ServiceSlug } from '@/content/services';
import type { IconName } from '@/lib/icons';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

const CARDS: Record<ServiceSlug, VisualCardSpec[]> = {
  'website-development': [
    { pos: 'tl', width: '220px', content: <MetricCard icon="building" label="Mobile performance" value="98" sub="Lighthouse score" /> },
    { pos: 'br', width: '270px', content: <ProgressCard icon="check-circle" title="Launch checklist" sub="11 of 12 done" value={92} foot="Last step: domain switch" /> },
    { pos: 'bl', content: <FlowCard label="Every build" steps={['Design', 'Build', 'Live']} /> },
  ],
  'it-support': [
    { pos: 'tl', width: '260px', content: <TicketCard code="Ticket #2481" status="Resolved" title="Office printer network restored" sub="Response in 42 minutes" /> },
    { pos: 'br', width: '220px', content: <MetricCard icon="server" label="Network uptime" value="99.9%" sub="This month" /> },
    { pos: 'bl', width: '270px', content: <ProgressCard icon="server" title="Network audit" sub="7 of 9 sites checked" value={78} foot="Report this week" /> },
  ],
  'cloud-microsoft-365': [
    { pos: 'tl', width: '280px', content: <ProgressCard icon="cloud" title="Microsoft 365 migration" sub="38 of 44 mailboxes moved" value={86} foot="Files & identities next" /> },
    { pos: 'br', width: '220px', content: <MetricCard icon="cloud" label="Licences tracked" value="44" sub="No unused seats" /> },
    { pos: 'bl', content: <FlowCard label="Migration order" steps={['Mail', 'Files', 'Identities']} doneIndex={0} /> },
  ],
  'ai-automation': [
    { pos: 'tl', content: <FlowCard label="Automation · runs daily" steps={['Invoice in', 'Approved', 'Sent']} /> },
    { pos: 'br', width: '220px', content: <MetricCard icon="sparkles" label="Time saved" value="11 hrs" sub="Per week, per team" /> },
    { pos: 'bl', width: '270px', content: <ProgressCard icon="sparkles" title="Workflow build" sub="3 of 4 steps live" value={75} foot="Testing with your team" /> },
  ],
};

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
  return { title: detail.title, description: detail.lead };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getDetail(slug);
  if (!detail) notFound();
  const cards = CARDS[slug as ServiceSlug];
  const nav = SERVICES.find((s) => s.slug === slug)!;

  const blocks: { icon: IconName; title: string; body: string }[] = [
    { icon: 'alert-circle', title: 'The problem', body: detail.problem },
    { icon: 'sparkles', title: 'What we do', body: detail.what },
    { icon: 'check-circle', title: 'Outcomes', body: detail.outcomes },
  ];

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: detail.title }]}
        title={detail.title}
        lead={detail.lead}
        actions={
          <>
            <Button variant="primary" size="lg" icon="arrow-right" href="/contact?type=hire">
              Request a quote
            </Button>
            <Button variant="ghost" size="lg" href="/services#how-we-work">
              How we work
            </Button>
          </>
        }
        visual={<LayeredVisual photo={{ label: 'Service photograph', note: detail.note }} cards={cards} />}
      />

      <section className="ds-section ds-section--subtle">
        <Container>
          <div className="ds-detail-cols">
            {blocks.map((blk, i) => (
              <Reveal key={blk.title} delay={i * 100} className="ds-card ds-card--onSubtle ds-stack" style={{ gap: '12px' }}>
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
