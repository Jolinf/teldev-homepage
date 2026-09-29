import { Badge } from './ui/badge';
import { TextLink } from './ui/text-link';
import { ImagePlaceholder } from './ui/image-placeholder';

type BadgeTone = 'neutral' | 'brand' | 'success' | 'warning' | 'danger';

interface EventHighlightProps {
  date: { mon: string; day: string };
  tag: string;
  tagTone?: BadgeTone;
  title: string;
  description: string;
  note?: string;
  media?: boolean;
  /** Media variant laid out side by side (photo left, text right) on tablet and up. */
  wide?: boolean;
  /** Photo for the media variant; a placeholder shows without it. */
  image?: { src: string; alt: string };
  /**
   * Optional link. An internal path (e.g. an event page) makes the whole card clickable;
   * an external URL opens in a new tab.
   */
  link?: { href: string; label: string };
}

export function EventHighlight({
  date,
  tag,
  tagTone = 'brand',
  title,
  description,
  note,
  media,
  wide,
  image,
  link,
}: EventHighlightProps) {
  const external = !!link && /^https?:\/\//.test(link.href);
  const body = (
    <>
      <Badge tone={tagTone}>{tag}</Badge>
      <h3 className="h5" style={{ marginTop: '6px' }}>
        {title}
      </h3>
      <p className="body text-text-muted">{description}</p>
      {link && (
        <TextLink
          href={link.href}
          external={external}
          className={external ? undefined : 'ds-stretched'}
          ariaLabel={external ? undefined : `${link.label}: ${title}`}
        >
          {link.label} {external ? null : '→'}
        </TextLink>
      )}
    </>
  );

  if (media) {
    return (
      <div className={`ds-card ds-card--hover ds-event--media ${wide ? 'ds-event--wide' : ''}`}>
        <div className="ds-media">
          <ImagePlaceholder
            ratio="16x9"
            label="Event photograph"
            note={note}
            src={image?.src}
            alt={image?.alt}
            sizes={wide ? '(min-width: 768px) 640px, 100vw' : '(min-width: 768px) 600px, 100vw'}
          />
          <div className="ds-event__date ds-event__date--overlay">
            <div>{date.mon}</div>
            <div>{date.day}</div>
          </div>
        </div>
        <div
          className="ds-stack"
          style={{ gap: '4px', marginTop: '16px', alignItems: 'flex-start' }}
        >
          {body}
        </div>
      </div>
    );
  }

  return (
    <div className="ds-card ds-card--hover ds-event">
      <div className="ds-event__date">
        <div>{date.mon}</div>
        <div>{date.day}</div>
      </div>
      <div>{body}</div>
    </div>
  );
}
