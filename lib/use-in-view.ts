'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Shared scroll trigger for Reveal, CountUp and LayeredVisual. `seen` flips true once;
 * `inView` tracks live visibility so idle drift (LayeredVisual's card float) can pause
 * off-screen. Both start true without IntersectionObserver so content is never left hidden.
 */
export function useInView<T extends HTMLElement>(once: boolean) {
  const ref = useRef<T>(null);
  const canObserve = typeof window !== 'undefined' && 'IntersectionObserver' in window;
  const [seen, setSeen] = useState(!canObserve);
  const [inView, setInView] = useState(!canObserve);

  useEffect(() => {
    if (!canObserve || !ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = !!entry?.isIntersecting;
        setInView(visible);
        if (visible) {
          setSeen(true);
          if (once) io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, seen, inView };
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
