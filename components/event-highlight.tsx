import { Badge } from './ui/badge';
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
}

export function EventHighlight({ date, tag, tagTone = 'brand', title, description, note, media }: EventHighlightProps) {
  const body = (
    <>
      <Badge tone={tagTone}>{tag}</Badge>
      <h3 className="h5" style={{ marginTop: '6px' }}>
        {title}
      </h3>
      <p className="small text-text-muted">{description}</p>
    </>
  );

  if (media) {
    return (
      <div className="ds-card ds-card--hover ds-event--media">
        <div className="ds-media">
          <ImagePlaceholder ratio="16x9" label="Event photograph" note={note} />
          <div className="ds-event__date ds-event__date--overlay">
            <div>{date.mon}</div>
            <div>{date.day}</div>
          </div>
        </div>
        <div className="ds-stack" style={{ gap: '4px', marginTop: '16px', alignItems: 'flex-start' }}>
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
