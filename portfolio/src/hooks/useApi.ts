import { useState, useEffect, useCallback, useRef } from 'react';

interface UseApiState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Generic hook for fetching data from an async service function.
 *
 * @param fetcher  – Async function that returns T
 * @param options  – Optional config: `immediate` (default true), `fallback` data
 *
 * @example
 *   const { data: projects, isLoading } = useApi(() => projectsService.getProjects());
 */
export function useApi<T>(
  fetcher: () => Promise<T>,
  options: { immediate?: boolean; fallback?: T } = {},
) {
  const { immediate = true, fallback = null } = options;

  const [state, setState] = useState<UseApiState<T>>({
    data: fallback,
    isLoading: immediate,
    error: null,
  });

  // Keep fetcher ref stable to avoid re-triggering effect on every render
  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;

  const execute = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const data = await fetcherRef.current();
      setState({ data, isLoading: false, error: null });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred';
      setState((prev) => ({ ...prev, isLoading: false, error: message }));
    }
  }, []);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate, execute]);

  return { ...state, refetch: execute };
}
