import type { ReactNode } from 'react';
import { Button } from './ui/button';
import { Reveal } from './reveal';
import { FlowCard } from './visual-cards';

interface CTABannerProps {
  heading?: string;
  body?: string;
  cta?: string;
  href?: string;
  card?: ReactNode;
}

export function CTABanner({
  heading = 'Ready to bring technology to your business?',
  body = "Tell us what you're trying to do — we'll tell you plainly whether we can help.",
  cta = 'Request a quote',
  href = '/contact?type=hire',
  card,
}: CTABannerProps) {
  return (
    <div className="ds-ctabanner">
      <div className="ds-stack" style={{ gap: '16px', alignItems: 'flex-start' }}>
        <h3 className="h3">{heading}</h3>
        <p className="body" style={{ opacity: 0.85 }}>
          {body}
        </p>
        <Button variant="secondary" icon="arrow-right" href={href}>
          {cta}
        </Button>
      </div>
      <div className="ds-ctabanner__visual" aria-hidden="true">
        <div className="ds-ctabanner__grid" />
        <Reveal className="ds-ctabanner__card" delay={150}>
          <div className="ds-float">{card ?? <FlowCard label="What happens next" steps={['Enquiry', 'Call', 'Quote']} />}</div>
        </Reveal>
      </div>
    </div>
  );
}
