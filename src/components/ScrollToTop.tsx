import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") {
      // Back/Forward → restore scroll position
      const savedY = sessionStorage.getItem(location.key);
      if (savedY !== null) {
        window.scrollTo(0, parseInt(savedY, 10));
        return;
      }
    }

    // New navigation → scroll to top
    window.scrollTo(0, 0);
  }, [location, navigationType]);

  // Save current scroll position before unload/navigation
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem(location.key, String(window.scrollY));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      sessionStorage.setItem(location.key, String(window.scrollY));
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location]);

  return null;
}
