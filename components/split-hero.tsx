import { Container } from './container';
import { Button } from './ui/button';
import { HeroVisual } from './hero-visual';

export function SplitHero({ photoSrc, photoAlt }: { photoSrc?: string; photoAlt?: string }) {
  return (
    <section className="ds-section ds-hero-section">
      <Container className="ds-stack" style={{ gap: '56px' }}>
        <div className="ds-hero-top">
          <div className="ds-stack ds-anim-in" style={{ gap: '20px' }}>
            <h1 className="display">
              Bringing technology <span className="ds-accent-text">to you.</span>
            </h1>
            <p className="lead text-text-muted" style={{ maxWidth: '540px' }}>
              Making technology, artificial intelligence and automation accessible, practical and
              impactful for individuals, businesses and communities. Starting in Nigeria.
            </p>
          </div>
          <HeroVisual photoSrc={photoSrc} photoAlt={photoAlt} />
        </div>
        <div className="ds-hero">
          <div
            className="ds-hero__path ds-hero__path--primary ds-navy ds-anim-in"
            style={{ animationDelay: '240ms' }}
          >
            <span className="ds-hero__eyebrow small">For businesses</span>
            <h2 className="h3">Hire us</h2>
            <p className="body ds-hero__desc">
              Helpdesk, networks, websites and apps, cloud, IT consulting or automation. Tell us
              the problem and we&apos;ll tell you plainly how we&apos;d solve it.
            </p>
            <Button variant="primary" icon="arrow-right" href="/contact?type=hire">
              Request a quote
            </Button>
          </div>
          <div
            className="ds-hero__path ds-hero__path--secondary ds-anim-in"
            style={{ animationDelay: '320ms' }}
          >
            <span className="ds-hero__eyebrow small">For sponsors &amp; institutions</span>
            <h2 className="h3">Partner with us</h2>
            <p className="body ds-hero__desc">
              We work alongside universities, schools and event organisers on technology education
              and community impact across Nigeria.
            </p>
            <Button variant="primary" icon="arrow-right" href="/contact?type=partner">
              Start a partnership
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
