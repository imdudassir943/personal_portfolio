import type { Skill } from '@/types';

export const skillsData: Skill[] = [
  {
    icon: '💻',
    title: 'Frontend',
    description: 'Building responsive, performant, and accessible user interfaces',
    items: [
      'React & Next.js',
      'TypeScript',
      'HTML5 & CSS3',
      'Tailwind CSS',
      'Framer Motion',
      'Redux & Zustand',
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    description: 'Designing scalable APIs and robust server-side architecture',
    items: [
      'Node.js & Express',
      'Python & FastAPI',
      'PostgreSQL & MongoDB',
      'RESTful & GraphQL APIs',
      'Redis & Caching',
      'Microservices',
    ],
  },
  {
    icon: '🎨',
    title: 'Design',
    description: 'Creating beautiful, intuitive, and user-centered designs',
    items: [
      'Figma & Adobe XD',
      'UI/UX Design',
      'Prototyping',
      'Design Systems',
      'Wireframing',
      'User Research',
    ],
  },
  {
    icon: '🚀',
    title: 'DevOps & Tools',
    description: 'Streamlining development workflows and deployment processes',
    items: [
      'Git & GitHub',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'AWS & Vercel',
      'Agile & Scrum',
      'Testing & TDD',
    ],
  },
];
