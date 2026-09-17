import Image from 'next/image';
import { Icon } from './icon';

type ImageRatio = '16x9' | '4x3' | '1x1' | '3x4';

interface ImagePlaceholderProps {
  ratio?: ImageRatio;
  label?: string;
  note?: string;
  src?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
}

export function ImagePlaceholder({ ratio = '16x9', label, note, src, alt, sizes, priority }: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`ds-imgph ds-imgph--${ratio}`}>
        <Image
          src={src}
          alt={alt ?? ''}
          fill
          sizes={sizes ?? '100vw'}
          priority={priority}
          className="ds-lv__img"
        />
      </div>
    );
  }

  return (
    <div className={`ds-imgph ds-imgph--${ratio}`}>
      <div className="ds-imgph__body">
        <Icon name="sparkles" size={28} className="ds-imgph__icon" />
        {label && <span className="small text-text-muted">{label}</span>}
      </div>
      {note && <div className="ds-imgph__note caption">{note}</div>}
    </div>
  );
}
