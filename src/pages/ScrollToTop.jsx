import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);

      let attempts = 0;
      const maxAttempts = 50;

      const scrollToElement = () => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return;
        }

        attempts++;

        if (attempts < maxAttempts) {
          requestAnimationFrame(scrollToElement);
        }
      };

      requestAnimationFrame(scrollToElement);
      return;
    }

    // Normal page navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname, hash]);

  return null;
}