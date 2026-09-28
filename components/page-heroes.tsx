import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';
import { Breadcrumbs } from './ui/breadcrumbs';
import { Icon } from './ui/icon';
import { ServiceTabs } from './service-tabs';
import { ImagePlaceholder } from './ui/image-placeholder';
import { SERVICES, type ServiceSlug } from '@/content/services';
import type { IconName } from '@/lib/icons';

/**
 * One hero per page type, so pages don't all open the same way. The home page keeps
 * its own SplitHero (the only hero with the layered photo-and-cards visual).
 */

interface Crumb {
  label: string;
  href?: string;
}

/** Services overview: copy on the left, a clickable index of all six services on the right. */
export function IndexHero({
  breadcrumbs,
  title,
  lead,
  actions,
}: {
  breadcrumbs: Crumb[];
  title: string;
  lead: string;
  actions?: ReactNode;
}) {
  return (
    <section className="ds-section ds-hero-section">
      <Container className="ds-hero-top">
        <div className="ds-stack ds-anim-in" style={{ gap: '20px' }}>
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="h1">{title}</h1>
          <p className="lead text-text-muted" style={{ maxWidth: '540px' }}>
            {lead}
          </p>
          {actions && (
            <div className="ds-row ds-wrap" style={{ gap: '12px', marginTop: '8px' }}>
              {actions}
            </div>
          )}
        </div>
        <nav
          aria-label="All services"
          className="ds-hero-index ds-anim-in"
          style={{ animationDelay: '160ms' }}
        >
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="ds-hero-index__item">
                  <span className="ds-icon-tile">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <span className="ds-stack" style={{ gap: '2px' }}>
                    <span className="label">{s.name}</span>
                    <span className="small text-text-muted">{s.desc}</span>
                  </span>
                  <Icon name="arrow-right" size={18} className="ds-hero-index__arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}

/** Service pages: tabs across the six services, then a compact text-only hero. */
export function ServiceHero({
  current,
  breadcrumbs,
  icon,
  title,
  lead,
  actions,
}: {
  current: ServiceSlug;
  breadcrumbs: Crumb[];
  icon: IconName;
  title: string;
  lead: string;
  actions?: ReactNode;
}) {
  return (
    <section className="ds-hero-compact">
      <Container className="ds-stack" style={{ gap: '32px' }}>
        <div className="ds-stack" style={{ gap: '16px' }}>
          <Breadcrumbs items={breadcrumbs} />
          <ServiceTabs current={current} />
        </div>
        <div className="ds-stack ds-anim-in" style={{ gap: '20px', maxWidth: '760px' }}>
          <span className="ds-icon-tile ds-icon-tile--lg" aria-hidden="true">
            <Icon name={icon} size={28} />
          </span>
          <h1 className="h1">{title}</h1>
          <p className="lead text-text-muted">{lead}</p>
          {actions && (
            <div className="ds-row ds-wrap" style={{ gap: '12px', marginTop: '8px' }}>
              {actions}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/** About: a centred statement, then a wide photo band when a photo is passed. */
export function StatementHero({
  breadcrumbs,
  title,
  lead,
  photo,
}: {
  breadcrumbs: Crumb[];
  title: string;
  lead: string;
  photo?: { src?: string; alt?: string; label: string; note?: string };
}) {
  return (
    <section className="ds-section ds-hero-statement">
      <Container className="ds-stack" style={{ gap: '48px' }}>
        <Breadcrumbs items={breadcrumbs} />
        <div className="ds-hero-statement__copy ds-anim-in">
          <h1 className="display">{title}</h1>
          <p className="lead text-text-muted">{lead}</p>
        </div>
        {photo && (
          <div className="ds-hero-statement__band ds-anim-in" style={{ animationDelay: '200ms' }}>
            <ImagePlaceholder
              ratio="16x9"
              src={photo.src}
              alt={photo.alt}
              label={photo.label}
              note={photo.note}
            />
          </div>
        )}
      </Container>
    </section>
  );
}

/**
 * Partnerships: a full-width dark band, with the event photograph behind the copy once
 * one exists. Without a photo it stays a solid band.
 */
export function PhotoHero({
  breadcrumbs,
  title,
  lead,
  actions,
  photo,
}: {
  breadcrumbs: Crumb[];
  title: string;
  lead: string;
  actions?: ReactNode;
  photo?: { src: string; alt: string };
}) {
  return (
    <section className="ds-hero-photo">
      {photo && (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority
          sizes="100vw"
          className="ds-hero-photo__img"
        />
      )}
      <div className="ds-hero-photo__shade" aria-hidden="true" />
      <Container className="ds-hero-photo__inner">
        <div className="ds-stack ds-anim-in" style={{ gap: '20px', maxWidth: '720px' }}>
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="display">{title}</h1>
          <p className="lead ds-hero-photo__lead">{lead}</p>
          {actions && (
            <div className="ds-row ds-wrap" style={{ gap: '12px', marginTop: '8px' }}>
              {actions}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/** Work and Blog: a short title bar; the page's own content (a case study, a featured post) carries the hero. */
export function TitleHero({
  breadcrumbs,
  title,
  lead,
}: {
  breadcrumbs: Crumb[];
  title: string;
  lead?: string;
}) {
  return (
    <section className="ds-hero-title">
      <Container className="ds-stack ds-anim-in" style={{ gap: '16px' }}>
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="h1">{title}</h1>
        {lead && (
          <p className="lead text-text-muted" style={{ maxWidth: '640px' }}>
            {lead}
          </p>
        )}
      </Container>
    </section>
  );
}
