import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  subtle?: boolean;
  as?: 'section' | 'div';
}

export function Section({ children, className = '', subtle = false, as: As = 'section' }: SectionProps) {
  return (
    <As
      className={`py-16 md:py-20 lg:py-32 ${subtle ? 'bg-bg-subtle' : ''} ${className}`}
    >
      {children}
    </As>
  );
}
