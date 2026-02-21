import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'ecommerce-platform',
    tag: 'Web Design',
    title: 'E-Commerce Platform',
    description:
      'A modern, responsive online store with seamless checkout experience, real-time inventory management, and beautiful product galleries. Built with performance and accessibility in mind.',
    gradient: 'bg-gradient-to-br from-mint to-teal',
    technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'task-management',
    tag: 'App Development',
    title: 'Task Management App',
    description:
      'An intuitive productivity tool that helps teams collaborate and manage projects efficiently. Features real-time updates, drag-and-drop, and smart notifications.',
    gradient: 'bg-gradient-to-br from-sage to-mint',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'creative-agency',
    tag: 'Brand Identity',
    title: 'Creative Agency Website',
    description:
      'A bold, interactive portfolio showcasing creative work with stunning animations, smooth transitions, and immersive storytelling through design.',
    gradient: 'bg-gradient-to-br from-teal to-navy',
    technologies: ['React', 'Framer Motion', 'Three.js', 'GSAP'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'fintech-dashboard',
    tag: 'Dashboard Design',
    title: 'FinTech Dashboard',
    description:
      'A comprehensive financial analytics dashboard with real-time data visualization, customizable widgets, and AI-powered insights for informed decision making.',
    gradient: 'bg-gradient-to-br from-navy to-teal',
    technologies: ['React', 'D3.js', 'TypeScript', 'GraphQL', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'health-app',
    tag: 'Mobile App',
    title: 'Health & Wellness App',
    description:
      'A cross-platform wellness application featuring workout tracking, meal planning, meditation guides, and health metrics synced with wearable devices.',
    gradient: 'bg-gradient-to-br from-mint to-sage',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'HealthKit'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'ai-content-platform',
    tag: 'AI/ML',
    title: 'AI Content Platform',
    description:
      'An intelligent content creation platform powered by machine learning, enabling users to generate, edit, and optimize content with AI assistance.',
    gradient: 'bg-gradient-to-br from-sage to-navy',
    technologies: ['Python', 'FastAPI', 'React', 'OpenAI', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const featuredProjects = projectsData.slice(0, 3);
