import { Reveal } from './reveal';
import { Icon } from './ui/icon';
import { Button } from './ui/button';
import { PartnerLogo } from './partner-logo';
import { BASH } from '@/content/partners';

/** The Bash partnership: who they are, what organisers get, and how it fits with TELDEV. */
export function PartnerSpotlight() {
  return (
    <div className="ds-spotlight">
      <Reveal className="ds-spotlight__brand">
        <div className="ds-spotlight__logo">
          <PartnerLogo partner={BASH.logo} height={64} />
        </div>
        <div className="ds-stack" style={{ gap: '10px' }}>
          <span className="ds-toc__title" style={{ marginBottom: 0 }}>
            Live in
          </span>
          <ul className="ds-spotlight__cities">
            {BASH.cities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={120} className="ds-spotlight__copy">
        <h2 className="h2">Our events run on Bash</h2>
        <p className="lead text-text-muted">
          Bash is TELDEV&apos;s events and ticketing partner. The conferences, community sessions and student
          programmes we run or support are listed, ticketed and checked in on Bash, a platform built for events across
          Africa.
        </p>
        <p className="body text-text-muted">
          For partners planning an event with us, that means one system from the first announcement to the last
          guest through the door, and no spreadsheets of names at the entrance.
        </p>

        <ul className="ds-spotlight__features">
          {BASH.features.map((f) => (
            <li key={f.title}>
              <span className="ds-icon-tile" aria-hidden="true">
                <Icon name={f.icon} size={20} />
              </span>
              <span className="ds-stack" style={{ gap: '4px' }}>
                <span className="label">{f.title}</span>
                <span className="body text-text-muted">{f.body}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="ds-row ds-wrap" style={{ gap: '12px' }}>
          <Button variant="primary" size="lg" icon="arrow-right" href="/contact?type=partner">
            Plan an event with us
          </Button>
          <a href={BASH.url} target="_blank" rel="noopener noreferrer" className="ds-btn ds-btn--secondary ds-btn--lg">
            <span>Visit usebash.io</span>
            <Icon name="arrow-up-right" size={18} />
          </a>
        </div>
      </Reveal>
    </div>
  );
}
