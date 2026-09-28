import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/ui/icon';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/reveal';
import { CTABanner } from '@/components/cta-banner';
import { PartnerLogo } from '@/components/partner-logo';
import { NAMS_WR } from '@/content/partners';
import { NAMS_WR_CONVENTION as EVENT } from '@/content/events/nams-wr-convention-2026';
import {
  generateMetadata as generateSEOMetadata,
  generateJsonLdGraph,
  breadcrumbSchema,
  generateStructuredData,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

const path = `/partnerships/${EVENT.slug}`;

export const metadata: Metadata = generateSEOMetadata({
  title: EVENT.title,
  description: EVENT.summary,
  path,
  image: EVENT.hero?.src,
  imageAlt: EVENT.hero?.alt,
});

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'NAMS Western Region Convention' },
];

const GALLERY_SLOTS = 6;

export default function NamsConventionPage() {
  const eventSchema = generateStructuredData('Event', {
    name: `${EVENT.title}: ${EVENT.edition}`,
    description: EVENT.summary,
    startDate: '2026-09-24',
    endDate: '2026-09-27',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'University of Lagos',
      address: { '@type': 'PostalAddress', addressLocality: 'Akoka, Lagos', addressCountry: 'NG' },
    },
    organizer: { '@type': 'Organization', name: EVENT.organiser, url: EVENT.links.instagram },
    sponsor: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    url: `${SITE_URL}${path}`,
  });

  return (
    <>
      <JsonLd graph={generateJsonLdGraph([eventSchema, breadcrumbSchema(breadcrumbs)])} />

      {/* Hero */}
      <section className="ds-event-hero">
        <Container className="ds-stack" style={{ gap: '32px' }}>
          <div className="ds-event-hero__copy ds-anim-in">
            <Breadcrumbs items={breadcrumbs} />
            <div className="ds-row ds-wrap" style={{ gap: '8px' }}>
              <Badge tone="brand">Official Tech &amp; Innovation Partner</Badge>
              <Badge tone="neutral">{EVENT.edition}</Badge>
            </div>
            <h1 className="display ds-event-hero__title">{EVENT.title}</h1>
            <p className="lead text-text-muted">{EVENT.summary}</p>
            <ul className="ds-event-hero__meta">
              <li>
                <Icon name="calendar" size={18} />
                {EVENT.dates}
              </li>
              <li>
                <Icon name="map-pin" size={18} />
                {EVENT.venue}
              </li>
              <li>
                <Icon name="users" size={18} />
                26 university chapters
              </li>
            </ul>
          </div>
          <div className="ds-event-hero__media ds-anim-in" style={{ animationDelay: '150ms' }}>
            <ImagePlaceholder
              ratio="16x9"
              src={EVENT.hero?.src}
              alt={EVENT.hero?.alt}
              label="Convention photograph"
              note="Delegates at the 7th NAMS Western Region Convention, University of Lagos."
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </div>
        </Container>
      </section>

      {/* At a glance */}
      <Section subtle>
        <div className="ds-event-glance">
          <div className="ds-event-glance__brand">
            <PartnerLogo partner={NAMS_WR.logo} height={112} />
            <p className="small text-text-muted">{EVENT.organiser}</p>
          </div>
          <dl className="ds-event-facts">
            {EVENT.glance.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
            <div className="ds-event-facts__wide">
              <dt>Theme</dt>
              <dd>{EVENT.theme}</dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* About */}
      <Section>
        <div className="ds-two-col ds-two-col--start">
          <div className="ds-stack" style={{ gap: '16px' }}>
            <SectionHeader heading="About the convention" />
            {EVENT.about.map((p) => (
              <p key={p.slice(0, 24)} className="body text-text-muted">
                {p}
              </p>
            ))}
          </div>
          <div className="ds-stack" style={{ gap: '16px' }}>
            {EVENT.tracks.map((t, i) => (
              <Reveal
                key={t.title}
                delay={i * 100}
                className="ds-card ds-stack"
                style={{ gap: '6px' }}
              >
                <span className="small text-text-muted">{t.partner}</span>
                <h3 className="h5">{t.title}</h3>
                <p className="body text-text-muted">{t.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* TELDEV's role */}
      <Section subtle>
        <SectionHeader heading="TELDEV at the convention" lead={EVENT.teldev.intro} />
        <div className="ds-detail-cols">
          {EVENT.teldev.points.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 100}
              className="ds-card ds-card--onSubtle ds-stack"
              style={{ gap: '10px' }}
            >
              <h3 className="h5">{p.title}</h3>
              <p className="body text-text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>

        {EVENT.teldev.speech && (
          <figure className="ds-event-speech">
            <div className="ds-event-speech__intro">
              <span className="ds-icon-tile" aria-hidden="true">
                <Icon name="mic" size={22} />
              </span>
              <span className="small text-text-muted">Our address to delegates</span>
              <h3 className="h3">{EVENT.teldev.speechTitle}</h3>
              <p className="ds-event-speech__pull">{EVENT.teldev.speechQuote}</p>
              <figcaption className="small text-text-muted">{EVENT.teldev.speechBy}</figcaption>
            </div>
            <blockquote className="ds-event-speech__text">
              {EVENT.teldev.speech.map((para) => (
                <p key={para.slice(0, 32)} className="body">
                  {para}
                </p>
              ))}
            </blockquote>
          </figure>
        )}

        <div className="ds-two-col ds-two-col--start" style={{ marginTop: '56px' }}>
          <SectionHeader
            heading="How the partnership came together"
            lead="From NAMS Western Region's invitation in July to four days at UNILAG in September."
          />
          <ol className="ds-timeline">
            {EVENT.timeline.map((t, i) => (
              <Reveal
                key={t.date}
                as="li"
                delay={i * 100}
                className="ds-timeline__item ds-timeline__item--done"
              >
                <span className="ds-timeline__dot" />
                <h3 className="h6">{t.date}</h3>
                <p className="body text-text-muted">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Panel */}
      <Section>
        <div className="ds-two-col ds-two-col--start ds-event-panel">
          <div className="ds-stack ds-event-panel__intro" style={{ gap: '16px' }}>
            <Badge tone="brand">Panel discussion</Badge>
            <h2 className="h2">{EVENT.panel.title}</h2>
            <p className="body text-text-muted">
              The panel asked where artificial intelligence and biotechnology meet in Nigeria, and
              what it takes to turn research into businesses. These are TELDEV&apos;s answers to the
              questions put to the panel.
            </p>
            <ul className="ds-event-hero__meta">
              <li>
                <Icon name="calendar" size={18} />
                {EVENT.panel.when}
              </li>
              <li>
                <Icon name="map-pin" size={18} />
                {EVENT.panel.where}
              </li>
            </ul>
          </div>
          <div className="ds-faq">
            {EVENT.panel.questions.map((item, i) => (
              <details key={item.q} className="ds-faq__item" open={i === 0}>
                <summary>
                  <span className="ds-faq__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="ds-faq__q">{item.q}</span>
                  <Icon name="chevron-down" size={18} className="ds-faq__chev" />
                </summary>
                <div className="ds-faq__a">
                  {item.a.map((para) => (
                    <p key={para.slice(0, 24)} className="body text-text-muted">
                      {para}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Programme */}
      <Section subtle>
        <SectionHeader
          heading="Four days at UNILAG"
          lead="Highlights from the official convention programme."
        />
        <ol className="ds-event-days">
          {EVENT.programme.map((d, i) => (
            <Reveal
              key={d.day}
              as="li"
              delay={i * 90}
              className="ds-card ds-card--onSubtle ds-event-day"
            >
              <span className="small text-text-muted">
                {d.day} · {d.date}
              </span>
              <h3 className="h5">{d.title}</h3>
              <ul>
                {d.items.map((it) => (
                  <li key={it} className={it.startsWith('Panel') ? 'is-teldev' : undefined}>
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>

        <div className="ds-stack" style={{ gap: '16px', marginTop: '48px' }}>
          <h3 className="h5">Hosts and speakers</h3>
          <ul className="ds-event-people">
            {EVENT.people.map((p) => (
              <li key={p.name}>
                <span className="label">{p.name}</span>
                <span className="small text-text-muted">
                  {[p.role, p.part].filter(Boolean).join(' · ')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Gallery */}
      <Section>
        <SectionHeader heading="Gallery" lead="Moments from The UNILAG Experience '26." />
        <div className="ds-gallery">
          {(EVENT.gallery.length
            ? EVENT.gallery
            : Array.from({ length: GALLERY_SLOTS }, () => undefined)
          ).map((photo, i) => (
            <figure
              key={photo?.src ?? i}
              className={`ds-gallery__item ${i === 0 ? 'ds-gallery__item--wide' : ''}`}
            >
              <ImagePlaceholder
                ratio={i === 0 ? '16x9' : '4x3'}
                src={photo?.src}
                alt={photo?.alt}
                label="Convention photograph"
                sizes="(min-width: 1024px) 400px, 100vw"
              />
              {photo?.caption && (
                <figcaption className="small text-text-muted">{photo.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>

        <div className="ds-row ds-wrap ds-event-links">
          <TextLink href={EVENT.links.announcement} external>
            NAMS Western Region&apos;s partnership announcement
          </TextLink>
          <TextLink href={EVENT.links.website} external>
            Convention website
          </TextLink>
          <TextLink href={EVENT.links.instagram} external>
            NAMS Western Region on Instagram
          </TextLink>
        </div>
      </Section>

      <Section>
        <Reveal>
          <CTABanner
            heading="Running a convention or student programme?"
            body="Tell us about your audience and goals. We'll suggest how TELDEV can take part, from technology sessions to sponsorship."
            cta="Start a partnership"
            href="/contact?type=partner"
          />
        </Reveal>
      </Section>
    </>
  );
}
