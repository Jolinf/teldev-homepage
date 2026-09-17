import { Reveal } from './reveal';
import { PROCESS_STEPS } from '@/content/pillars';

export function ProcessSteps() {
  return (
    <ol className="ds-process">
      {PROCESS_STEPS.map((s, i) => (
        <Reveal key={s.title} as="li" delay={i * 140} className="ds-process__step">
          <span className="ds-process__num" aria-hidden="true">
            {i + 1}
          </span>
          <h4 className="h6">{s.title}</h4>
          <p className="small text-text-muted" style={{ marginTop: '6px' }}>
            {s.description}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
