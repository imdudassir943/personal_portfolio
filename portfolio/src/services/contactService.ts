import type { ContactFormData, ContactFormState } from '@/types';

// ============================================
// CONTACT SERVICE - Service Layer Pattern
// ============================================

const CONTACT_API_URL = '/api/contact'; // Replace with actual endpoint

export const contactService = {
  /**
   * Submits the contact form data
   * In production, this would send to a backend API
   */
  async submitContactForm(data: ContactFormData): Promise<ContactFormState> {
    // Simulate API call with delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Validate data
    if (!data.name || !data.email || !data.message) {
      return {
        status: 'error',
        message: 'Please fill in all required fields.',
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        status: 'error',
        message: 'Please enter a valid email address.',
      };
    }

    // In production, make actual API call:
    // const response = await fetch(CONTACT_API_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });

    // Simulate successful submission
    console.log('Contact form submitted:', data, 'API URL:', CONTACT_API_URL);
    
    return {
      status: 'success',
      message: "Thank you for your message! I'll get back to you soon.",
    };
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
