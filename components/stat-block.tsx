import { Reveal } from './reveal';
import { CountUp } from './count-up';

export function StatBlock({ stats }: { stats: { n: string; l: string }[] }) {
  return (
    <div className="ds-statblock">
      {stats.map((s, i) => (
        <Reveal key={s.l} delay={i * 100}>
          <div className="display ds-stat__num" style={{ fontSize: '40px', lineHeight: '44px' }}>
            <CountUp value={s.n} />
          </div>
          <div className="small text-text-muted">{s.l}</div>
        </Reveal>
      ))}
    </div>
  );
}
