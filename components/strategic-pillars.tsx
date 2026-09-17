import { Reveal } from './reveal';
import { PILLARS } from '@/content/pillars';

export function StrategicPillars() {
  return (
    <div className="ds-pillars">
      {PILLARS.map((p, i) => (
        <Reveal key={p.title} delay={i * 80} className="ds-pillar ds-card ds-card--hover">
          <span className="h3 ds-pillar__num" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="h6">{p.title}</h3>
          <p className="small text-text-muted">{p.description}</p>
        </Reveal>
      ))}
    </div>
  );
}
