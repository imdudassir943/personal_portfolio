// ============================================
// CENTRAL API CLIENT — Typed Fetch Wrapper
// ============================================

const API_BASE_URL =
  import.meta.env['VITE_API_BASE_URL'] || 'https://personal-portfolio-dygv.onrender.com/api';

/**
 * Standardised error returned by the API client.
 */
export class ApiError extends Error {
  status: number;
  errors?: Record<string, string[]> | undefined;

  constructor(message: string, status: number, errors?: Record<string, string[]> | undefined) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.errors = errors;
  }
}

/**
 * Generic request helper. Handles JSON parsing, error normalisation,
 * and prepends the base URL automatically.
 */
async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    let errorMessage = `Request failed (${response.status})`;
    let errors: Record<string, string[]> | undefined;

    try {
      const body = await response.json();
      errorMessage = body.message || body.detail || errorMessage;
      errors = body.errors;
    } catch {
      // non-JSON error body — use default message
    }

    throw new ApiError(errorMessage, response.status, errors);
  }

  // 204 No Content
  if (response.status === 204) return undefined as T;

  return response.json() as Promise<T>;
}

// ---- Convenience methods ----

export const api = {
  get<T>(endpoint: string) {
    return request<T>(endpoint, { method: 'GET' });
  },

  post<T>(endpoint: string, data: unknown) {
    return request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};
