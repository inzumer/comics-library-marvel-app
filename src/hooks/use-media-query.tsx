'use client';

import { useEffect, useState } from "react";

const mediaQueries = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
  largeDesktop: "(min-width: 1440px)",
};

export const useMediaQuery = (query: keyof typeof mediaQueries) => {
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    const mediaQuery = mediaQueries[query];
    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) => setIsMatching(event.matches);

    setIsMatching(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return isMatching;
}
