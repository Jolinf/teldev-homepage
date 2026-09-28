'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { SERVICES, type ServiceSlug } from '@/content/services';

/** Tabs across the six service pages. On narrow screens the row scrolls, so the current tab is brought into view. */
export function ServiceTabs({ current }: { current: ServiceSlug }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = ref.current;
    const active = nav?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!nav || !active || nav.scrollWidth <= nav.clientWidth) return;
    nav.scrollLeft = active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2;
  }, [current]);

  return (
    <nav ref={ref} aria-label="Services" className="ds-service-tabs">
      {SERVICES.map((s) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          className="ds-service-tabs__tab"
          aria-current={s.slug === current ? 'page' : undefined}
        >
          {s.name}
        </Link>
      ))}
    </nav>
  );
}
