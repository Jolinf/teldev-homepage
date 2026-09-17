import type { ReactNode } from 'react';
import { Icon } from './icon';
import type { IconName } from '@/lib/icons';

type BadgeTone = 'neutral' | 'brand' | 'success' | 'warning' | 'danger';

interface BadgeProps {
  tone?: BadgeTone;
  icon?: IconName;
  children: ReactNode;
}

export function Badge({ tone = 'neutral', icon, children }: BadgeProps) {
  return (
    <span className={`ds-badge ds-badge--${tone} label-sm`}>
      {icon && <Icon name={icon} size={13} />}
      {children}
    </span>
  );
}
