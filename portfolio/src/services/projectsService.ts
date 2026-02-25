// ============================================
// PROJECTS SERVICE — Projects & technologies
// ============================================

import { api } from './api';
import type { Project, ProjectDetail, Technology, PaginatedResponse } from '@/types';

export interface ProjectFilters {
  tag?: string;
  is_featured?: boolean;
  search?: string;
  technology?: string;
  ordering?: string;
}

function buildQuery(filters?: ProjectFilters): string {
  if (!filters) return '';
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      params.set(key, String(value));
    }
  });
  const qs = params.toString();
  return qs ? `?${qs}` : '';
}

export const projectsService = {
  /**
   * GET /api/projects/
   * Returns paginated list. Supports ?tag=, ?is_featured=, ?search=, ?ordering=
   */
  getProjects(filters?: ProjectFilters) {
    return api.get<PaginatedResponse<Project>>(`/projects/${buildQuery(filters)}`);
  },

  /**
   * GET /api/projects/{slug}/
   */
  getProjectBySlug(slug: string) {
    return api.get<ProjectDetail>(`/projects/${slug}/`);
  },

  /**
   * GET /api/technologies/
   */
  getTechnologies() {
    return api.get<Technology[]>('/technologies/');
  },
};
