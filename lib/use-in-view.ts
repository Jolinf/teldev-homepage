'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Shared scroll trigger for Reveal, CountUp and LayeredVisual. `seen` flips true once;
 * `inView` tracks live visibility so idle drift (LayeredVisual's card float) can pause
 * off-screen.
 *
 * Both start false on the server and on the client's first render so hydration matches.
 * Browsers without IntersectionObserver flip them true straight after mount, and visitors
 * without JavaScript still see everything because the hidden starting state only applies
 * under `html.js` (set by an inline script in app/layout.tsx).
 */
export function useInView<T extends HTMLElement>(once: boolean) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSeen(true);
      setInView(true);
      return;
    }
    if (!ref.current) return;
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
