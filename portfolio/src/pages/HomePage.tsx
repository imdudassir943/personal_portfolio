import { Hero } from '@/features/hero';
import { ProjectsGrid } from '@/features/projects';
import { SkillsGrid } from '@/features/skills';
import { ContactCTA } from '@/features/contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsGrid showViewAllButton />
      <SkillsGrid showViewAllButton />
      <ContactCTA />
    </>
  );
}
