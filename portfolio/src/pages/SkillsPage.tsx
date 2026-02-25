import { motion } from 'framer-motion';
import { SkillCard } from '@/features/skills';
import { skillsData } from '@/features/skills/skillsData';
import { useApi } from '@/hooks/useApi';
import { skillsService } from '@/services/skillsService';

const experienceItems = [
  {
    year: '2024 - Present',
    title: 'Senior Frontend Developer',
    company: 'Tech Innovation Co.',
    description: 'Leading frontend architecture and mentoring junior developers.',
  },
  {
    year: '2022 - 2024',
    title: 'Full Stack Developer',
    company: 'Digital Agency XYZ',
    description: 'Built scalable web applications for enterprise clients.',
  },
  {
    year: '2020 - 2022',
    title: 'Web Developer',
    company: 'Startup Hub',
    description: 'Developed MVPs and contributed to product growth strategies.',
  },
];

export function SkillsPage() {
  const { data, isLoading } = useApi(() => skillsService.getSkills());

  // Use API data if available, fall back to static data
  const skills = data ?? skillsData;

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
            My Expertise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-5xl md:text-6xl font-black text-navy mb-6"
          >
            Skills & <span className="text-teal">Experience</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sage text-lg max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills, tools, and
            professional journey in the world of web development.
          </motion.p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-6 lg:px-10 bg-navy">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl font-black text-white mb-12 text-center"
          >
            Technical Skills
          </motion.h2>
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
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl font-black text-navy mb-12 text-center"
          >
            Professional Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-sage/30 transform md:-translate-x-1/2" />

            {experienceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute w-4 h-4 bg-teal rounded-full top-1 left-0 md:left-1/2 md:-translate-x-1/2"
                />

                <div className={`${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <span className="text-teal font-bold text-sm">{item.year}</span>
                  <h3 className="font-playfair text-xl font-bold text-navy mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sage text-sm mt-1">{item.company}</p>
                  <p className="text-sage mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
