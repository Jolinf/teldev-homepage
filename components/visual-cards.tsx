import { Fragment, type ReactNode } from 'react';
import { Icon } from './ui/icon';
import { Badge } from './ui/badge';
import type { IconName } from '@/lib/icons';

export function CardHead({ icon, title, sub }: { icon?: IconName; title: string; sub?: string }) {
  return (
    <div className="ds-row" style={{ gap: '10px' }}>
      {icon && (
        <span className="ds-icon-tile ds-icon-tile--sm">
          <Icon name={icon} size={18} />
        </span>
      )}
      <div style={{ minWidth: 0 }}>
        <div className="label">{title}</div>
        {sub && <div className="caption text-text-muted">{sub}</div>}
      </div>
    </div>
  );
}

export function ProgressCard({
  icon,
  title,
  sub,
  value = 0,
  foot,
}: {
  icon?: IconName;
  title: string;
  sub?: string;
  value?: number;
  foot?: string;
}) {
  return (
    <div className="ds-vc">
      <CardHead icon={icon} title={title} sub={sub} />
      <div className="ds-lv__bar">
        <div className="ds-lv__bar-fill" style={{ width: `${value}%` }} />
      </div>
      <div className="ds-row caption text-text-muted" style={{ justifyContent: 'space-between', gap: '12px' }}>
        <span>{foot}</span>
        <span className="code-sm text-text">{value}%</span>
      </div>
    </div>
  );
}

export function TicketCard({
  code,
  status,
  title,
  sub,
  tone = 'success',
  statusIcon = 'check-circle',
}: {
  code: string;
  status?: string;
  title: string;
  sub?: string;
  tone?: 'success' | 'warning' | 'danger' | 'brand' | 'neutral';
  statusIcon?: IconName;
}) {
  return (
    <div className="ds-vc">
      <div className="ds-row" style={{ gap: '10px', justifyContent: 'space-between' }}>
        <span className="code-sm text-text-muted">{code}</span>
        {status && (
          <Badge tone={tone} icon={statusIcon}>
            {status}
          </Badge>
        )}
      </div>
      <div className="label">{title}</div>
      {sub && <div className="caption text-text-muted">{sub}</div>}
    </div>
  );
}

export function FlowCard({ label, steps, doneIndex }: { label?: string; steps: string[]; doneIndex?: number }) {
  const done = doneIndex === undefined ? steps.length - 1 : doneIndex;
  return (
    <div className="ds-vc">
      {label && <div className="caption text-text-muted">{label}</div>}
      <div className="ds-row ds-lv__flow">
        {steps.map((s, i) => (
          <Fragment key={s}>
            {i > 0 && <Icon name="arrow-right" size={14} />}
            <span className={`ds-lv__chip ${i === done ? 'ds-lv__chip--done' : ''}`}>
              {i === done && <Icon name="check" size={13} />}
              {s}
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function MetricCard({ icon, label, value, sub }: { icon?: IconName; label: string; value: ReactNode; sub?: string }) {
  return (
    <div className="ds-vc">
      <div className="ds-row text-text-muted" style={{ gap: '8px' }}>
        {icon && <Icon name={icon} size={16} />}
        <span className="caption">{label}</span>
      </div>
      <div className="h4" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
        {value}
      </div>
      {sub && <div className="caption text-text-muted">{sub}</div>}
    </div>
  );
}

export function InfoCard({ icon, title, sub }: { icon?: IconName; title: string; sub?: string }) {
  return (
    <div className="ds-vc">
      <CardHead icon={icon} title={title} sub={sub} />
    </div>
  );
}

export function EventMiniCard({ mon, day, title, sub }: { mon: string; day: string; title: string; sub?: string }) {
  return (
    <div className="ds-row" style={{ gap: '12px' }}>
      <div className="ds-event__date" style={{ width: '52px' }}>
        <div>{mon}</div>
        <div>{day}</div>
      </div>
      <div style={{ minWidth: 0 }}>
        <div className="label">{title}</div>
        {sub && <div className="caption text-text-muted">{sub}</div>}
      </div>
    </div>
  );
}
