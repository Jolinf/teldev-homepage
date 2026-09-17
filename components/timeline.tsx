import { Reveal } from './reveal';
import { ROADMAP } from '@/content/pillars';

export function Timeline() {
  return (
    <ol className="ds-timeline">
      {ROADMAP.map((it, i) => (
        <Reveal
          key={it.title}
          as="li"
          delay={i * 140}
          className={`ds-timeline__item ${it.done ? 'ds-timeline__item--done' : ''}`}
        >
          <span className="ds-timeline__dot" />
          <h4 className="h6">{it.title}</h4>
          <p className="small text-text-muted">{it.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}
