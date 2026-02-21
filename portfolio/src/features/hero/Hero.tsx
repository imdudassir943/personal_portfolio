import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';
import { GeometricBackground } from './GeometricBackground';
import ProfileImage from "@/assets/profile.jpg"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-10 pt-20 overflow-hidden bg-cream">
      <GeometricBackground />

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-teal font-bold uppercase tracking-[0.2em] mb-6 text-sm"
          >
            Creative Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black mb-8 text-navy leading-[1.1]"
          >
            Crafting Digital{' '}
            <span className="block text-teal">Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-sage mb-10 leading-relaxed"
          >
            I transform ideas into elegant, functional, and memorable digital
            solutions that make an impact. With a focus on performance,
            accessibility, and beautiful design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/projects">
              <Button size="lg">View My Work</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-12 mt-16 pt-8 border-t border-sage/30"
          >
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-playfair text-3xl font-black text-teal">
                  {stat.value}
                </div>
                <div className="text-sage text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative shrink-0"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-teal shadow-2xl relative z-10">
            <div className="w-full h-full bg-gradient-to-br from-teal via-mint to-sage flex items-center justify-center">
              <span className="text-6xl">
                <img src={ProfileImage} alt="profile" />
              </span>
            </div>
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-4 rounded-full border-2 border-dashed border-mint/30 animate-[spin_20s_linear_infinite]" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-sage rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-teal rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
