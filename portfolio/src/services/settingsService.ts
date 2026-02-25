// ============================================
// SETTINGS SERVICE — Site settings & social links
// ============================================

import { api } from './api';
import type { SiteSettings, SocialLinkAPI } from '@/types';

export const settingsService = {
  /** GET /api/settings/ */
  getSiteSettings() {
    return api.get<SiteSettings>('/settings/');
  },

  /** GET /api/social-links/ */
  getSocialLinks() {
    return api.get<SocialLinkAPI[]>('/social-links/');
  },
};
