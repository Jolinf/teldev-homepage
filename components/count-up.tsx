'use client';

import { useEffect, useState } from 'react';
import { useInView, prefersReducedMotion } from '@/lib/use-in-view';

/**
 * Animates the number inside a string ("99.9%", "1,200+") from 0 when it scrolls into
 * view. Non-numeric strings (e.g. an em-dash) render as-is.
 */
export function CountUp({ value, duration = 1200 }: { value: string | number; duration?: number }) {
  const text = String(value);
  const match = /^([^\d]*)(\d[\d,]*\.?\d*)(.*)$/.exec(text);
  const { ref, seen } = useInView<HTMLSpanElement>(true);
  const [n, setN] = useState<number | null>(null);

  useEffect(() => {
    if (!match || !seen) return;
    const target = parseFloat(match[2]!.replace(/,/g, ''));
    if (prefersReducedMotion() || typeof window.requestAnimationFrame !== 'function') {
      // Reduced motion: jump straight to the final value instead of animating.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setN(target);
      return;
    }
    let start: number | null = null;
    let raf: number;
    function step(ts: number) {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      setN(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = window.requestAnimationFrame(step);
    }
    raf = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seen]);

  if (!match) return <span ref={ref}>{text}</span>;

  const decimals = (match[2]!.split('.')[1] ?? '').length;
  const shown = n === null ? '0' : n.toLocaleString('en-GB', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  return (
    <span ref={ref}>
      <span className="ds-sr-only">{text}</span>
      <span aria-hidden="true">
        {match[1]}
        {shown}
        {match[3]}
      </span>
    </span>
  );
}
