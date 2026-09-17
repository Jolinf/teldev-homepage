import Link from 'next/link';
import { Container } from './container';

// TODO(Phase 3): social links with aria-labels, full route set per Footer README.
export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <Container className="flex flex-col gap-4 py-12 small">
        <div className="flex flex-wrap gap-6">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/partnerships">Partnerships</Link>
          <Link href="/work">Work</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact?type=partner">Partner with us</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <div className="flex flex-wrap gap-6 text-text-muted">
          <a href="mailto:contact@teldev.org">contact@teldev.org</a>
          <a href="tel:+2347084036561">+234 708 403 6561</a>
        </div>
        <p className="caption text-text-muted">
          &copy; {new Date().getFullYear()} TELDEV Technologies. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
