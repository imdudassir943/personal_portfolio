import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { Card } from '@/components/ui';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ProjectCardProps {
  project: Project;
  index: number;
  showFullDetails?: boolean;
}

export function ProjectCard({ project, index, showFullDetails = false }: ProjectCardProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card variant="elevated" className="group cursor-pointer h-full">
        {/* Gradient Image Area */}
        <div className={`${project.gradient} h-48 md:h-56 relative overflow-hidden`}>
          {project.image_url && (
            <img
              src={project.image_url}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal text-white text-sm font-bold rounded-full hover:bg-white hover:text-navy transition-colors"
              >
                Live Demo
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/20 text-white text-sm font-bold rounded-full hover:bg-white hover:text-navy transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <span className="inline-block px-3 py-1 bg-teal text-white font-bold text-xs uppercase tracking-wide rounded-full mb-4">
            {project.tag}
          </span>
          
          <h3 className="font-playfair text-xl md:text-2xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
            {project.title}
          </h3>
          
          <p className="text-sage text-sm leading-relaxed mb-4">
            {showFullDetails ? project.description : project.description.slice(0, 120) + '...'}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, showFullDetails ? undefined : 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-cream text-navy rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {!showFullDetails && project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs bg-cream text-sage rounded-md font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
