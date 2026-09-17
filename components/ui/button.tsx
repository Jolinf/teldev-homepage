import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from './icon';
import type { IconName } from '@/lib/icons';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  iconPosition?: 'leading' | 'trailing';
  loading?: boolean;
  className?: string;
  children: ReactNode;
}

interface ButtonAsButton extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?: undefined;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  disabled?: boolean;
}

type Props = ButtonAsButton | ButtonAsLink;

function classes(variant: ButtonVariant, size: ButtonSize, loading: boolean, className?: string) {
  return ['ds-btn', `ds-btn--${variant}`, `ds-btn--${size}`, loading && 'is-loading', className]
    .filter(Boolean)
    .join(' ');
}

export function Button(props: Props) {
  const variant = props.variant ?? 'primary';
  const size = props.size ?? 'md';
  const loading = !!props.loading;
  const disabled = !!props.disabled || loading;
  const iconPosition = props.iconPosition ?? 'trailing';
  const iconSize = size === 'sm' ? 16 : 18;

  const content = (
    <>
      {props.icon && iconPosition === 'leading' && <Icon name={props.icon} size={iconSize} />}
      <span>{props.children}</span>
      {props.icon && iconPosition === 'trailing' && <Icon name={props.icon} size={iconSize} />}
      {loading && <Icon name="sparkles" size={iconSize} className="ds-spinner" />}
    </>
  );

  if ('href' in props && props.href) {
    if (disabled) {
      return (
        <span className={classes(variant, size, loading, props.className)} aria-disabled="true">
          {content}
        </span>
      );
    }
    return (
      <Link href={props.href} className={classes(variant, size, loading, props.className)}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      {...buttonProps}
      type={buttonProps.type ?? 'button'}
      disabled={disabled}
      aria-busy={loading || undefined}
      className={classes(variant, size, loading, props.className)}
    >
      {content}
    </button>
  );
}
