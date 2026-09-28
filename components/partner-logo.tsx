import Image from 'next/image';
import type { PartnerLogo as PartnerLogoData } from '@/content/partners';

/** A partner's logo, swapping to its dark-background version in dark mode. */
export function PartnerLogo({ partner, height = 28 }: { partner: PartnerLogoData; height?: number }) {
  const width = Math.round(height * partner.ratio);
  const img = (src: string, cls: string) => (
    <Image src={src} alt={partner.name} width={width} height={height} unoptimized className={cls} />
  );
  const content = (
    <>
      {img(partner.logo, partner.logoDark ? 'ds-plogo ds-plogo--light' : 'ds-plogo')}
      {partner.logoDark && img(partner.logoDark, 'ds-plogo ds-plogo--dark')}
    </>
  );
  return partner.href ? (
    <a href={partner.href} target="_blank" rel="noopener noreferrer" className="ds-plogo-link" aria-label={`${partner.name} (opens in a new tab)`}>
      {content}
    </a>
  ) : (
    content
  );
}
