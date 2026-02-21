import { motion } from 'framer-motion';
import type { Skill } from '@/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-mint group"
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-teal to-mint rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>

      {/* Title */}
      <h3 className="font-playfair text-2xl font-bold text-white mb-2">
        {skill.title}
      </h3>

      {/* Description */}
      <p className="text-sage text-sm mb-6">{skill.description}</p>

      {/* Skill List */}
      <ul className="space-y-3">
        {skill.items.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
            className="flex items-center gap-3 text-mint/80 text-sm border-b border-white/5 pb-2 last:border-b-0"
          >
            <span className="w-1.5 h-1.5 bg-teal rounded-full shrink-0" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
