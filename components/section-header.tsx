export function SectionHeader({
  heading,
  lead,
  center,
}: {
  heading: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`ds-sectionhead ${center ? 'ds-sectionhead--center' : ''}`}>
      <h2 className="h2">{heading}</h2>
      {lead && <p className="lead text-text-muted">{lead}</p>}
    </div>
  );
}
