import type { ReactNode } from 'react';
import { Container } from './container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  subtle?: boolean;
  /** Full-bleed navy brand band (see `.ds-navy`). Use sparingly: one per page at most. */
  navy?: boolean;
  gap?: boolean;
  id?: string;
}

/** Matches the reference `Section` composition: a `.ds-section` with a stacked `.ds-container`. */
export function Section({
  children,
  className = '',
  subtle = false,
  navy = false,
  gap = true,
  id,
}: SectionProps) {
  const tone = navy ? 'ds-navy' : subtle ? 'ds-section--subtle' : '';
  return (
    <section id={id} className={`ds-section ${tone} ${className}`}>
      <Container className={gap ? 'ds-stack ds-section-gap' : ''}>{children}</Container>
    </section>
  );
}
