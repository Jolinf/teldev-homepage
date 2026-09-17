import Link from 'next/link';
import { Icon } from './icon';

interface PaginationProps {
  page: number;
  count: number;
  basePath: string;
}

function pageHref(basePath: string, page: number) {
  return page <= 1 ? basePath : `${basePath}?page=${page}`;
}

export function Pagination({ page, count, basePath }: PaginationProps) {
  if (count <= 1) return null;
  const pages = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <nav className="ds-pagination" aria-label="Pagination">
      {page > 1 ? (
        <Link href={pageHref(basePath, page - 1)} aria-label="Previous page">
          <Icon name="chevron-left" size={16} />
        </Link>
      ) : (
        <button aria-label="Previous page" disabled>
          <Icon name="chevron-left" size={16} />
        </button>
      )}
      {pages.map((p) => (
        <Link key={p} href={pageHref(basePath, p)} aria-current={p === page ? 'page' : undefined}>
          {p}
        </Link>
      ))}
      {page < count ? (
        <Link href={pageHref(basePath, page + 1)} aria-label="Next page">
          <Icon name="chevron-right" size={16} />
        </Link>
      ) : (
        <button aria-label="Next page" disabled>
          <Icon name="chevron-right" size={16} />
        </button>
      )}
    </nav>
  );
}
