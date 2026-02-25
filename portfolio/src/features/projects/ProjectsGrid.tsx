import { Link } from 'react-router-dom';
import { SectionHeading, Button } from '@/components/ui';
import { ProjectCard } from './ProjectCard';
import { useApi } from '@/hooks/useApi';
import { projectsService } from '@/services/projectsService';
import { projectsData, featuredProjects } from './projectsData';

interface ProjectsGridProps {
  showAll?: boolean;
  showViewAllButton?: boolean;
}

export function ProjectsGrid({ showAll = false, showViewAllButton = true }: ProjectsGridProps) {
  const { data, isLoading } = useApi(
    () =>
      showAll
        ? projectsService.getProjects()
        : projectsService.getProjects({ is_featured: true }),
  );

  // Use API data if available, fall back to static data
  const projects = data?.results ?? (showAll ? projectsData : featuredProjects);

  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work that showcases my skills and passion"
        />

        {isLoading ? (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-72 bg-cream animate-pulse rounded-2xl"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                showFullDetails={showAll}
              />
            ))}
          </div>
        )}

        {showViewAllButton && !showAll && (
          <div className="text-center mt-16">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
