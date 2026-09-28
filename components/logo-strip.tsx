import type { CSSProperties } from 'react';
import { Reveal } from './reveal';
import { PartnerLogo } from './partner-logo';
import type { PartnerLogo as PartnerLogoData } from '@/content/partners';

/** A row of partner marks: a real logo where we have one, the name as text where we don't. */
export function LogoStrip({ names }: { names: (string | PartnerLogoData)[] }) {
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
