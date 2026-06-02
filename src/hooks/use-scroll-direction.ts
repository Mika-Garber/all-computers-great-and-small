import { useEffect, useRef, useState } from 'react';

type ScrollDirection = 'up' | 'down';

export function useScrollDirection(threshold = 12) {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < threshold) {
        return;
      }

      if (currentScrollY <= 0) {
        setScrollDirection('up');
      } else if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrollDirection;
}
