import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_TITLE = 'Portfolio | Creative Developer';

const PAGE_TITLES: Record<string, string> = {
  '/': BASE_TITLE,
  '/projects': 'Projects | Creative Developer',
  '/skills': 'Skills & Experience | Creative Developer',
  '/contact': 'Contact | Creative Developer',
};

/**
 * Scrolls to top on route change and sets the document title
 * based on the current pathname.
 */
export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Update document title
    document.title = PAGE_TITLES[pathname] ?? BASE_TITLE;
  }, [pathname]);
}
