import type { ReactNode } from 'react';
import { Container } from './container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  subtle?: boolean;
  gap?: boolean;
}

/** Matches the reference `Section` composition: a `.ds-section` with a stacked `.ds-container`. */
export function Section({ children, className = '', subtle = false, gap = true }: SectionProps) {
  return (
    <section className={`ds-section ${subtle ? 'ds-section--subtle' : ''} ${className}`}>
      <Container className={gap ? 'ds-stack ds-section-gap' : ''}>{children}</Container>
    </section>
  );
}
