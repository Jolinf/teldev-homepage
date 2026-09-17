import Link from 'next/link';
import { Container } from './container';
import { Logomark } from './logomark';
import { Icon } from './ui/icon';
import { TextLink } from './ui/text-link';
import { SERVICES } from '@/content/services';

export function Footer() {
  return (
    <footer className="ds-footer">
      <Container>
        <div className="ds-footer__cols">
          <div className="ds-stack" style={{ gap: '12px', maxWidth: '320px' }}>
            <div className="ds-row" style={{ gap: '8px' }}>
              <Logomark size={24} />
              <span className="h6">TELDEV</span>
            </div>
            <p className="small">Bringing technology to you.</p>
          </div>
          <div className="ds-stack" style={{ gap: '10px' }}>
            <span className="label-sm">Company</span>
            <Link href="/about">About</Link>
            <Link href="/partnerships">Partnerships</Link>
            <Link href="/work">Work</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="ds-stack" style={{ gap: '10px' }}>
            <span className="label-sm">Services</span>
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.name}
              </Link>
            ))}
          </div>
          <div className="ds-stack" style={{ gap: '10px' }}>
            <span className="label-sm">Contact</span>
            <span className="small ds-row" style={{ gap: '8px' }}>
              <Icon name="map-pin" size={15} />
              Lagos, Nigeria
            </span>
            <a href="mailto:contact@teldev.org" className="small ds-row" style={{ gap: '8px' }}>
              <Icon name="mail" size={15} />
              contact@teldev.org
            </a>
            <a href="tel:+2347084036561" className="small ds-row" style={{ gap: '8px' }}>
              <Icon name="phone" size={15} />
              +234 708 403 6561
            </a>
          </div>
        </div>
        <div className="ds-footer__bottom">
          <span className="caption">
            &copy; {new Date().getFullYear()} TELDEV Technologies. All rights reserved. ·{' '}
            <TextLink href="/privacy" inline>
              Privacy
            </TextLink>
          </span>
          <div className="ds-row" style={{ gap: '8px' }}>
            <a href="#" className="ds-social" aria-label="TELDEV on LinkedIn">
              <Icon name="linkedin" size={18} />
            </a>
            <a href="#" className="ds-social" aria-label="TELDEV on Instagram">
              <Icon name="instagram" size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
