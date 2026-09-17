'use client';

import type { ReactNode } from 'react';
import { useInView } from '@/lib/use-in-view';
import { ImagePlaceholder } from './ui/image-placeholder';

type ImageRatio = '16x9' | '4x3' | '1x1' | '3x4';
type CardPos = 'tl' | 'tr' | 'bl' | 'br';

export interface VisualCardSpec {
  pos: CardPos;
  width?: string;
  content: ReactNode;
}

interface LayeredVisualProps {
  photo?: { src?: string; alt?: string; ratio?: ImageRatio; label?: string; note?: string };
  cards?: VisualCardSpec[];
  compact?: boolean;
  still?: boolean;
  grid?: boolean;
  decorative?: boolean;
  className?: string;
}

const NOTE_SPOTS: CardPos[] = ['tr', 'tl', 'br', 'bl'];

export function LayeredVisual({ photo = {}, cards = [], compact, still, grid = true, decorative = true, className = '' }: LayeredVisualProps) {
  const { ref, seen, inView } = useInView<HTMLDivElement>(false);
  const ratio = photo.ratio ?? '4x3';
  const used = cards.map((c) => c.pos);
  const noteSpot = NOTE_SPOTS.find((s) => !used.includes(s)) ?? 'none';

  return (
    <div
      ref={ref}
      className={[
        'ds-lv',
        compact && 'ds-lv--compact',
        ratio === '16x9' && 'ds-lv--wide',
        `ds-lv--note-${noteSpot}`,
        seen && 'is-seen',
        inView && 'is-in',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden={decorative ? 'true' : undefined}
    >
      {!compact && grid && <div className="ds-lv__grid" />}
      <div className="ds-lv__photo ds-anim-in">
        <ImagePlaceholder ratio={ratio} src={photo.src} alt={photo.alt} label={photo.label ?? 'Photograph'} note={photo.note} />
      </div>
      {cards.map((c, i) => (
        <div
          key={i}
          className={`ds-lv__card ds-lv__card--${c.pos} ds-lv__card--i${i} ds-anim-in`}
          style={{ animationDelay: `${180 + i * 180}ms`, width: c.width }}
        >
          <div className={[!still && 'ds-float', i % 2 === 1 && 'ds-float--slow'].filter(Boolean).join(' ')}>{c.content}</div>
        </div>
      ))}
    </div>
  );
}
