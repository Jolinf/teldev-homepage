import { Icon } from './ui/icon';
import { TextLink } from './ui/text-link';
import type { IconName } from '@/lib/icons';

export function ServiceCard({ icon, title, description, href }: { icon: IconName; title: string; description: string; href: string }) {
  return (
    <div className="ds-card ds-card--hover ds-servicecard">
      <div className="ds-icon-tile">
        <Icon name={icon} size={22} />
      </div>
      <h3 className="h5">{title}</h3>
      <p className="small text-text-muted">{description}</p>
      <TextLink href={href} ariaLabel={`Learn more about ${title}`}>
        Learn more →
      </TextLink>
    </div>
  );
}
