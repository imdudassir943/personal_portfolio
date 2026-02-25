// ============================================
// SKILLS SERVICE — Skill categories
// ============================================

import { api } from './api';
import type { Skill } from '@/types';

export const skillsService = {
  /**
   * GET /api/skills/
   * Returns all categories with items (no pagination).
   */
  getSkills() {
    return api.get<Skill[]>('/skills/');
  },
};
