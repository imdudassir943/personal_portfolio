// ============================================
// SHARED TYPE DEFINITIONS
// ============================================

// ---- Site Settings (GET /api/settings/) ----
export interface SiteSettings {
  site_title: string;
  tagline: string;
  hero_heading: string;
  hero_subheading: string;
  profile_image: string | null;
  resume_file: string | null;
  years_experience: number;
  projects_completed: number;
  happy_clients: number;
}

// ---- Social Links (GET /api/social-links/) ----
export interface SocialLinkAPI {
  id: string;
  platform: string;
  label: string;
  url: string;
  icon_class: string;
}

// ---- Projects (GET /api/projects/) ----
export interface Project {
  id: string;
  slug: string;
  tag: string;
  title: string;
  description: string;
  gradient: string;
  technologies: string[];
  live_url: string;
  github_url: string;
  image_url: string | null;
  is_featured: boolean;
  created_at: string;
}

export interface Technology {
  id: number;
  name: string;
  slug: string;
}

export interface ProjectImage {
  id: string;
  image: string;
  caption: string;
  sort_order: number;
}

export interface ProjectDetail extends Omit<Project, 'technologies'> {
  technologies: Technology[];
  images: ProjectImage[];
}

// ---- Skills (GET /api/skills/) ----
export interface Skill {
  id?: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
}

// ---- Contact (POST /api/contact/) ----
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export interface ContactApiResponse {
  status: 'success' | 'error';
  message: string;
  errors?: Record<string, string[]>;
}

// ---- Paginated response wrapper (DRF default) ----
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// ---- UI Types ----
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface NavItem {
  label: string;
  path: string;
}

/** Legacy shape used in Footer — kept for backward compat */
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}
