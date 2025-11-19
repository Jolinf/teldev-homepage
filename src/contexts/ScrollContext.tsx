import { createContext, useContext, useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollContextValue = {
  mainRef: React.RefObject<HTMLElement | null>;
};

const ScrollContext = createContext<ScrollContextValue | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const el = mainRef.current;
    if (el) {
      try {
        el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      } catch {
        el.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.key]);

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


