'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Icon } from './ui/icon';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Next-themes SSR-safe hint: resolvedTheme is unknown until mount, so the icon can't
    // render before then without risking a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      className="ds-theme-toggle"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {mounted && <Icon name={isDark ? 'sun' : 'moon'} size={18} />}
    </button>
  );
}
