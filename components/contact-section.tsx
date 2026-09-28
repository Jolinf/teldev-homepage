import { Container } from './container';
import { Breadcrumbs } from './ui/breadcrumbs';
import { Icon } from './ui/icon';
import { Reveal } from './reveal';
import { ContactForm } from './contact-form';

/**
 * Form-first contact layout. Desktop: intro and contact details on the left, form on the
 * right. Phones: intro, then the form straight away, then the details.
 */
export function ContactSection({
  defaultEnquiryType,
}: {
  defaultEnquiryType?: 'hire' | 'partner' | 'other';
}) {
  return (
    <section className="ds-section ds-section--subtle">
      <Container className="ds-contact-first">
        <div className="ds-contact-first__intro ds-stack ds-anim-in" style={{ gap: '20px' }}>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
          <h1 className="h1">Let&apos;s talk about what you need.</h1>
          <p className="lead text-text-muted">
            Tell us what you&apos;re trying to do, and we&apos;ll tell you plainly whether we can
            help.
          </p>
        </div>

        <Reveal className="ds-contact-first__form">
          <ContactForm defaultEnquiryType={defaultEnquiryType} />
        </Reveal>

        <div className="ds-contact-first__details ds-stack" style={{ gap: '16px' }}>
          <h2 className="h6">Or reach us directly</h2>
          <ul className="ds-contact-details">
            <li>
              <span className="ds-icon-tile" aria-hidden="true">
                <Icon name="mail" size={18} />
              </span>
              <span className="ds-stack" style={{ gap: '2px' }}>
                <span className="small text-text-muted">Email</span>
                <a href="mailto:contact@teldev.org" className="body">
                  contact@teldev.org
                </a>
              </span>
            </li>
            <li>
              <span className="ds-icon-tile" aria-hidden="true">
                <Icon name="phone" size={18} />
              </span>
              <span className="ds-stack" style={{ gap: '2px' }}>
                <span className="small text-text-muted">Phone</span>
                <a href="tel:+2347084036561" className="body">
                  +234 708 403 6561
                </a>
                <a href="tel:+2349037562951" className="body">
                  +234 903 756 2951
                </a>
              </span>
            </li>
            <li>
              <span className="ds-icon-tile" aria-hidden="true">
                <Icon name="map-pin" size={18} />
              </span>
              <span className="ds-stack" style={{ gap: '2px' }}>
                <span className="small text-text-muted">Location</span>
                <span className="body">Lagos, Nigeria</span>
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
