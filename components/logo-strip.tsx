import type { CSSProperties } from 'react';
import { Reveal } from './reveal';
import { PartnerLogo } from './partner-logo';
import type { PartnerLogo as PartnerLogoData } from '@/content/partners';

/**
 * A row of partner marks: a real logo where we have one, the name as text where we don't.
 * `variant="wordmark"` sets every partner as a name in one typographic style, spread evenly
 * across the row, so mismatched logos (a crest next to a wordmark) don't clash.
 */
export function LogoStrip({
  names,
  variant = 'logo',
}: {
  names: (string | PartnerLogoData)[];
  variant?: 'logo' | 'wordmark';
}) {
  if (variant === 'wordmark') {
    return (
      <ul className="ds-wordmarks" style={{ '--wm-cols': names.length } as CSSProperties}>
        {names.map((n, i) => {
          const name = typeof n === 'string' ? n : n.name;
          return (
            <Reveal key={name} as="li" delay={i * 80} className="ds-wordmarks__item">
              {name}
            </Reveal>
          );
        })}
      </ul>
    );
  }
  return (
    <div className="ds-logostrip">
      {names.map((n, i) => (
        <Reveal
          key={typeof n === 'string' ? n : n.name}
          delay={i * 60}
          className="ds-logostrip__mark"
          style={
            typeof n === 'string'
              ? undefined
              : ({ '--plogo-h': `${n.stripHeight ?? 32}px` } as CSSProperties)
          }
        >
          {typeof n === 'string' ? n : <PartnerLogo partner={n} height={n.stripHeight ?? 32} />}
        </Reveal>
      ))}
    </div>
  );
}
