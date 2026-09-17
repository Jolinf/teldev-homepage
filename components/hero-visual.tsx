import { LayeredVisual } from './layered-visual';
import { ProgressCard, TicketCard, FlowCard } from './visual-cards';

/** The homepage preset of LayeredVisual — card figures are illustrative, per the brief. */
export function HeroVisual({ photoSrc, photoAlt }: { photoSrc?: string; photoAlt?: string }) {
  return (
    <LayeredVisual
      photo={{
        src: photoSrc,
        alt: photoAlt,
        label: 'Hero photograph',
        note: 'TELDEV engineer working alongside a client, natural light, real Lagos office.',
      }}
      cards={[
        {
          pos: 'tl',
          width: '280px',
          content: (
            <ProgressCard icon="cloud" title="Microsoft 365 migration" sub="38 of 44 mailboxes moved" value={86} foot="Files & identities next" />
          ),
        },
        {
          pos: 'br',
          width: '250px',
          content: <TicketCard code="Ticket #2481" status="Resolved" title="Office printer network restored" sub="Response in 42 minutes" />,
        },
        { pos: 'bl', content: <FlowCard label="Automation · runs daily" steps={['Invoice in', 'Approved', 'Sent']} /> },
      ]}
    />
  );
}
