import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon } from './icon';

interface TextLinkProps {
  href: string;
  inline?: boolean;
  external?: boolean;
  className?: string;
  /** For generic copy like "Learn more →" — gives the link a real accessible name
      without changing the visible text. */
  ariaLabel?: string;
  children: ReactNode;
}

export function TextLink({ href, inline, external, className = '', ariaLabel, children }: TextLinkProps) {
  const cls = `ds-link ${inline ? 'ds-link--inline' : ''} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
        {children}
        <Icon name="arrow-up-right" size={14} className="ml-[3px] -mb-px inline" />
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
