import Link from 'next/link';
import { Container } from './container';

// TODO(Phase 3): sticky+blur, Services dropdown, theme toggle, mobile sheet, active-route state.
export function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="label">
          TELDEV Technologies
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/services" className="body">
            Services
          </Link>
          <Link href="/about" className="body">
            About
          </Link>
          <Link href="/partnerships" className="body">
            Partnerships
          </Link>
          <Link href="/work" className="body">
            Work
          </Link>
          <Link href="/blog" className="body">
            Blog
          </Link>
          <Link href="/contact?type=hire" className="label">
            Hire us
          </Link>
        </nav>
      </Container>
    </header>
  );
}
