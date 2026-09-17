'use client';

import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useInView } from '@/lib/use-in-view';

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/** Fades and rises its children in once, on first scroll into view. */
export function Reveal({ as: As = 'div', delay = 0, className = '', style, children }: RevealProps) {
  const { ref, seen } = useInView<HTMLDivElement>(true);
  return (
    <As
      ref={ref}
      className={`ds-reveal ${seen ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </As>
  );
}
