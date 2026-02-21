import { Link } from 'react-router-dom';
import { SectionHeading, Button } from '@/components/ui';
import { ProjectCard } from './ProjectCard';
import { featuredProjects, projectsData } from './projectsData';

interface ProjectsGridProps {
  showAll?: boolean;
  showViewAllButton?: boolean;
}

export function ProjectsGrid({ showAll = false, showViewAllButton = true }: ProjectsGridProps) {
  const projects = showAll ? projectsData : featuredProjects;

  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work that showcases my skills and passion"
        />

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
