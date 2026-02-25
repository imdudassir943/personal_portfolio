import { api, ApiError } from './api';
import type { ContactFormData, ContactFormState, ContactApiResponse } from '@/types';

// ============================================
// CONTACT SERVICE — Real API Integration
// ============================================

export const contactService = {
  /**
   * Submits the contact form data to the backend.
   * POST /api/contact/
   */
  async submitContactForm(data: ContactFormData): Promise<ContactFormState> {
    try {
      const response = await api.post<ContactApiResponse>('/contact/', data);

      return {
        status: 'success',
        message: response.message || "Thank you for your message! I'll get back to you soon.",
      };
    } catch (error) {
      if (error instanceof ApiError) {
        // Surface first validation error if present
        if (error.errors) {
          const keys = Object.keys(error.errors);
          if (keys.length > 0) {
            const firstField = keys[0]!;
            const firstError = error.errors[firstField]?.[0];
            if (firstError) {
              return { status: 'error', message: `${firstField}: ${firstError}` };
            }
          }
        }
        return { status: 'error', message: error.message };
      }

      return {
        status: 'error',
        message: 'Network error. Please check your connection and try again.',
      };
    }
  },

  /**
   * Validates a single field
   */
  validateField(field: keyof ContactFormData, value: string): string | null {
    switch (field) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : null;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email' : null;
      case 'subject':
        return value.trim().length < 3 ? 'Subject must be at least 3 characters' : null;
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : null;
      default:
        return null;
    }
  },
};
