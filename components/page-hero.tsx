import type { ReactNode } from 'react';
import { Container } from './container';
import { Breadcrumbs } from './ui/breadcrumbs';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  breadcrumbs?: BreadcrumbItem[];
  title: string;
  accent?: string;
  lead?: string;
  actions?: ReactNode;
  visual: ReactNode;
}

export function PageHero({ breadcrumbs, title, accent, lead, actions, visual }: PageHeroProps) {
  return (
    <section className="ds-section ds-hero-section">
      <Container className="ds-hero-top">
        <div className="ds-stack ds-anim-in" style={{ gap: '20px' }}>
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <h1 className="h1">
            {title}
            {accent ? ' ' : null}
            {accent ? <span className="ds-accent-text">{accent}</span> : null}
          </h1>
          {lead && (
            <p className="lead text-text-muted" style={{ maxWidth: '540px' }}>
              {lead}
            </p>
          )}
          {actions && (
            <div className="ds-row ds-wrap" style={{ gap: '12px', marginTop: '8px' }}>
              {actions}
            </div>
          )}
        </div>
        {visual}
      </Container>
    </section>
  );
}
