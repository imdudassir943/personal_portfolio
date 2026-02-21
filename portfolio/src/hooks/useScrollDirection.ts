import { useState, useEffect, useCallback } from 'react';

type ScrollDirection = 'up' | 'down' | null;

export function useScrollDirection(threshold = 10): {
  scrollDirection: ScrollDirection;
  scrollY: number;
  isAtTop: boolean;
} {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  const updateScrollState = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    if (Math.abs(currentScrollY - lastScrollY) < threshold) {
      return;
    }

    const direction = currentScrollY > lastScrollY ? 'down' : 'up';
    setScrollDirection(direction);
    setLastScrollY(currentScrollY);
  }, [lastScrollY, threshold]);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  return {
    scrollDirection,
    scrollY,
    isAtTop: scrollY < 50,
  };
}
