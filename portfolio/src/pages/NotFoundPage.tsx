import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center section">
      <div className="text-center">
        <motion.h1 
          className="text-9xl font-playfair font-bold text-gradient mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-3xl font-dm text-navy mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          className="text-lg text-sage mb-10 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The page you are looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white rounded-full font-medium transition-all duration-300 hover:bg-mint hover:scale-105 hover:shadow-lg focus-ring"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
