export function SectionHeader({
  overline,
  heading,
  lead,
  center,
}: {
  overline?: string;
  heading: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`ds-sectionhead ${center ? 'ds-sectionhead--center' : ''}`}>
      {overline && <span className="overline ds-overline uppercase">{overline}</span>}
      <h2 className="h2">{heading}</h2>
      {lead && <p className="lead text-text-muted">{lead}</p>}
    </div>
  );
}
