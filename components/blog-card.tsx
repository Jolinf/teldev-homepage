import Link from 'next/link';
import { ImagePlaceholder } from './ui/image-placeholder';

interface BlogCardProps {
  href: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

export function BlogCard({ href, category, title, excerpt, date, image }: BlogCardProps) {
  return (
    <article className="ds-blogcard">
      <div className="ds-media">
        <ImagePlaceholder ratio="4x3" src={image} alt={title} label="Article image" />
      </div>
      <h3 className="h5 ds-blogcard__title">
        <Link href={href} className="ds-stretched">
          {title}
        </Link>
      </h3>
      <p className="body text-text-muted">{excerpt}</p>
      <span className="caption text-text-muted">
        {category} · {date}
      </span>
    </article>
  );
}
