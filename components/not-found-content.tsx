import { Button } from './ui/button';
import { TicketCard } from './visual-cards';

export function NotFoundContent() {
  return (
    <div className="ds-notfound">
      <div className="ds-notfound__card ds-anim-in" aria-hidden="true">
        <div className="ds-float">
          <TicketCard
            code="Error 404"
            status="Not found"
            tone="warning"
            statusIcon="alert-triangle"
            title="This page has moved or never existed"
            sub="Suggested next step: the homepage"
          />
        </div>
      </div>
      <h1 className="h2 ds-anim-in" style={{ animationDelay: '120ms' }}>
        Page not found
      </h1>
      <p className="body ds-anim-in text-text-muted" style={{ maxWidth: '360px', animationDelay: '200ms' }}>
        That page doesn&apos;t exist, or it&apos;s moved. Try the homepage, or get in touch if you followed a broken
        link.
      </p>
      <Button variant="primary" icon="arrow-right" href="/">
        Back to homepage
      </Button>
    </div>
  );
}
