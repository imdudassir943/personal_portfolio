import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import type { SocialLink as SocialLinkType } from '@/types';

const socialLinks: SocialLinkType[] = [
  { icon: '→', label: 'GitHub', href: 'https://github.com' },
  { icon: 'in', label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: '𝕏', label: 'Twitter', href: 'https://twitter.com' },
  { icon: '●', label: 'Dribbble', href: 'https://dribbble.com' },
];

export function ContactCTA() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-cream">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl font-black text-navy mb-4"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sage text-lg md:text-xl mb-8 leading-relaxed"
        >
          Have a project in mind? I'd love to hear about it. Let's create
          something amazing together and bring your vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Link to="/contact">
            <Button size="lg">Get In Touch</Button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-teal text-white text-xl font-bold shadow-md hover:bg-navy transition-all duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
