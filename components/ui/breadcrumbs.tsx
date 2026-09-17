import Link from 'next/link';
import { Fragment } from 'react';
import { Icon } from './icon';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="ds-breadcrumbs small" aria-label="Breadcrumb">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <Fragment key={item.label}>
            {i > 0 && <Icon name="chevron-right" size={14} />}
            {last || !item.href ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
