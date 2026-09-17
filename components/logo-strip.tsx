import { Reveal } from './reveal';

export function LogoStrip({ names }: { names: string[] }) {
  return (
    <div className="ds-logostrip">
      {names.map((n, i) => (
        <Reveal key={n} delay={i * 60} className="ds-logostrip__mark">
          {n}
        </Reveal>
      ))}
    </div>
  );
}
