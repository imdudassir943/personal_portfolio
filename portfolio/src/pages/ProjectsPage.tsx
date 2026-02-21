import { motion } from 'framer-motion';
import { ProjectCard, projectsData } from '@/features/projects';

export function ProjectsPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 px-6 lg:px-10 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-teal font-bold uppercase tracking-[0.2em] mb-4 text-sm"
          >
            My Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-5xl md:text-6xl font-black text-navy mb-6"
          >
            Projects & <span className="text-teal">Case Studies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sage text-lg max-w-2xl mx-auto"
          >
            A collection of projects I've worked on, showcasing my expertise in
            web development, design, and problem-solving.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                showFullDetails
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-10 bg-navy text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-black text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-sage mb-8">
            I'm always open to discussing new opportunities and creative ideas.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-teal text-white font-bold rounded-full shadow-lg hover:-translate-y-1 hover:bg-mint transition-all duration-300"
          >
            Let's Talk
          </a>
        </motion.div>
      </section>
    </div>
  );
}
