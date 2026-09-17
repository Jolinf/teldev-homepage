'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './container';
import { Logomark } from './logomark';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { Icon } from './ui/icon';
import { SERVICES } from '@/content/services';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
];

export function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesOpen) return;
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setServicesOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setServicesOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <header className="ds-header">
      <Container className="ds-header__bar">
        <Link href="/" className="ds-header__logo">
          <Logomark />
          <span className="h6">TELDEV</span>
        </Link>

        <nav className="ds-nav" aria-label="Primary">
          {/* Click-toggled, so it only closes on outside click or Escape (below) — no
              onMouseLeave. Mixing click-to-open with hover-to-close is what caused the
              menu to close itself while the pointer was still moving toward the panel. */}
          <div className="ds-dropdown" ref={dropdownRef}>
            <button
              type="button"
              className="ds-nav__link"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-current={pathname.startsWith('/services') ? 'page' : undefined}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <Icon name="chevron-down" size={16} />
            </button>
            {servicesOpen && (
              <div className="ds-dropdown__panel" role="menu">
                {SERVICES.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} role="menuitem" className="ds-dropdown__item">
                    <strong className="label">{s.name}</strong>
                    <span className="small">{s.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ds-row" style={{ gap: '12px' }}>
          <ThemeToggle />
          <Button variant="primary" size="sm" className="ds-header__nav-cta" href="/contact">
            Contact
          </Button>
          <button
            type="button"
            className="ds-header__mobile-btn"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? 'x' : 'menu'} size={20} />
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <Container style={{ paddingBottom: '16px' }}>
          <div className="ds-mobile-sheet ds-stack">
            <Link href="/services" onClick={() => setMobileOpen(false)}>
              Services
            </Link>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button variant="primary" href="/contact">
              Contact
            </Button>
          </div>
        </Container>
      )}
    </header>
  );
}
