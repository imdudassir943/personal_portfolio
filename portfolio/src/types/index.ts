// ============================================
// SHARED TYPE DEFINITIONS
// ============================================

export interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  gradient: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

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

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface NavItem {
  label: string;
  path: string;
}
