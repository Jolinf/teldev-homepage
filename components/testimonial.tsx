import { Icon } from './ui/icon';

export function Testimonial({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="ds-card ds-card--hover ds-testimonial">
      <Icon name="sparkles" size={20} className="text-primary" />
      <p className="h5 ds-testimonial__quote">&ldquo;{quote}&rdquo;</p>
      <div className="ds-testimonial__person">
        <div className="ds-avatar" />
        <div>
          <div className="label">{name}</div>
          <div className="small text-text-muted">{role}</div>
        </div>
      </div>
    </div>
  );
}
