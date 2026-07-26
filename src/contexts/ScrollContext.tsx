import { createContext, useContext, useLayoutEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollContextValue = {
  mainRef: React.RefObject<HTMLElement | null>;
};

const ScrollContext = createContext<ScrollContextValue | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  /*
   * Reset scroll position to the top on every route change.
   *
   * This used to key off mainRef and use a smooth scrollIntoView, but that
   * broke on every lazily-loaded route: ScrollProvider lives above
   * <Suspense> in the tree, so this effect fires the instant the URL
   * changes, before the lazy page has finished loading and attached its
   * own <main ref={mainRef}>. At that point mainRef.current is either
   * null or still pointing at the PREVIOUS page's (about to unmount) main
   * element, so the scroll reset silently did nothing. The browser then
   * left the window's scroll position wherever it was on the old page,
   * which is exactly the "clicking a link at the bottom of page 1 opens
   * the bottom of page 2" bug.
   *
   * The fix doesn't depend on any ref: window.scrollTo(0, 0) acts on the
   * actual browser viewport directly, which is the site's one real
   * scrolling context (see index.css). useLayoutEffect (not useEffect)
   * so this runs synchronously after the DOM updates and before the
   * browser paints, and 'instant' behavior avoids animating up from
   * wherever the old page's scroll position happened to be.
   */
  useLayoutEffect(() => {
    // Two-argument form: always jumps instantly, no ScrollBehavior typing
    // to fight with and no risk of an animated scroll being visible.
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const value = useMemo<ScrollContextValue>(() => ({ mainRef }), []);
  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
}

export function useScrollContainer() {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error('useScrollContainer must be used within a ScrollProvider');
  }
  return ctx;
}


