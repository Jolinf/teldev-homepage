import { ICONS, type IconName } from '@/lib/icons';

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function Icon({ name, size = 20, strokeWidth, className }: IconProps) {
  const Cmp = ICONS[name] ?? ICONS.info;
  return (
    <Cmp
      width={size}
      height={size}
      strokeWidth={strokeWidth ?? (size <= 16 ? 2 : 1.75)}
      aria-hidden="true"
      focusable="false"
      className={className}
    />
  );
}
