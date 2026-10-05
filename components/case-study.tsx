import { LayeredVisual } from './layered-visual';
import { MetricCard } from './visual-cards';
import { TextLink } from './ui/text-link';
import type { IconName } from '@/lib/icons';

interface CaseStudyProps {
  href: string;
  title: string;
  summary: string;
  note?: string;
  metricIcon?: IconName;
  metricLabel?: string;
  metricValue?: string;
}

export function CaseStudy({
  href,
  title,
  summary,
  note,
  metricIcon = 'check-circle',
  metricLabel = 'Downtime during move',
  metricValue = '0 hrs',
}: CaseStudyProps) {
  return (
    <div className="ds-card ds-card--hover ds-casestudy">
      <LayeredVisual
        compact
        still
        photo={{ label: 'Case study photograph', note }}
        cards={[{ pos: 'br', content: <MetricCard icon={metricIcon} label={metricLabel} value={metricValue} /> }]}
      />
      <div className="ds-stack" style={{ gap: '10px', alignItems: 'flex-start' }}>
        <h3 className="h4">{title}</h3>
        <p className="body text-text-muted">{summary}</p>
        <TextLink href={href} ariaLabel={`Read the case study: ${title}`}>
          Read the case study →
        </TextLink>
      </div>
    </div>
  );
}
