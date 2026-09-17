import { Icon } from './ui/icon';
import { Button } from './ui/button';
import type { IconName } from '@/lib/icons';

interface EmptyStateProps {
  icon?: IconName;
  title: string;
  description: string;
  action?: string;
  actionHref?: string;
}

export function EmptyState({ icon = 'inbox', title, description, action, actionHref }: EmptyStateProps) {
  return (
    <div className="ds-emptystate">
      <Icon name={icon} size={40} className="ds-emptystate__icon" />
      <h3 className="h5">{title}</h3>
      <p className="small text-text-muted" style={{ maxWidth: '320px' }}>
        {description}
      </p>
      {action && actionHref && (
        <Button variant="secondary" size="sm" href={actionHref}>
          {action}
        </Button>
      )}
    </div>
  );
}
