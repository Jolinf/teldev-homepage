import { useEffect } from 'react';

const useScrollToTopOnMount = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);
};

export default useScrollToTopOnMount;

