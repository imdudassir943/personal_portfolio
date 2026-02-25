import { Link } from 'react-router-dom';
import { SectionHeading, Button } from '@/components/ui';
import { SkillCard } from './SkillCard';
import { skillsData } from './skillsData';
import { useApi } from '@/hooks/useApi';
import { skillsService } from '@/services/skillsService';

interface SkillsGridProps {
  showViewAllButton?: boolean;
}

export function SkillsGrid({ showViewAllButton = true }: SkillsGridProps) {
  const { data, isLoading } = useApi(() => skillsService.getSkills());

  // Use API data if available, fall back to static data
  const skills = data ?? skillsData;

  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with to bring ideas to life"
          light
        />

        {isLoading ? (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-64 bg-white/5 animate-pulse rounded-2xl"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <SkillCard key={skill.title} skill={skill} index={index} />
            ))}
          </div>
        )}

        {showViewAllButton && (
          <div className="text-center mt-16">
            <Link to="/skills">
              <Button variant="outline" size="lg" className="border-mint text-mint hover:bg-mint hover:text-navy">
                Explore All Skills
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
