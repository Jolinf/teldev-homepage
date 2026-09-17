import { Container } from './container';
import { Breadcrumbs } from './ui/breadcrumbs';
import { LayeredVisual } from './layered-visual';
import { MetricCard, FlowCard, InfoCard } from './visual-cards';
import { Reveal } from './reveal';
import { ContactForm } from './contact-form';

export function ContactSection({ defaultEnquiryType }: { defaultEnquiryType?: 'hire' | 'partner' | 'other' }) {
  return (
    <section className="ds-section ds-section--subtle">
      <Container className="ds-contact-grid">
        <div className="ds-stack" style={{ gap: '20px' }}>
          <div className="ds-stack ds-anim-in" style={{ gap: '20px' }}>
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
            <h1 className="h1">
              Let&apos;s talk about <span className="ds-accent-text">what you need.</span>
            </h1>
            <p className="lead text-text-muted">
              Tell us what you&apos;re trying to do, and we&apos;ll tell you plainly whether we can help.
            </p>
          </div>
          <LayeredVisual
            photo={{ label: 'Contact photograph', note: 'The TELDEV team at the Lagos office, candid, natural light.' }}
            cards={[
              { pos: 'tl', width: '220px', content: <MetricCard icon="mail" label="Typical reply" value="1 working day" /> },
              { pos: 'br', width: '260px', content: <FlowCard label="What happens next" steps={['Enquiry', 'Call', 'Quote']} /> },
              { pos: 'bl', content: <InfoCard icon="map-pin" title="Lagos, Nigeria" sub="contact@teldev.org" /> },
            ]}
          />
        </div>
        <Reveal className="ds-contact-form">
          <ContactForm defaultEnquiryType={defaultEnquiryType} />
        </Reveal>
      </Container>
    </section>
  );
}
