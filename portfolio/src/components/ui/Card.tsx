import { forwardRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  variant?: 'default' | 'elevated' | 'glass';
  hoverEffect?: boolean;
  gradient?: string;
  children?: ReactNode;
  className?: string;
}

const variantClasses = {
  default: 'bg-white border border-sage/20',
  elevated: 'bg-white shadow-xl',
  glass: 'bg-white/10 backdrop-blur-lg border border-white/20',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      hoverEffect = true,
      gradient,
      className = '',
      children,
    },
    ref
  ) => {
    const baseClasses = 'rounded-2xl overflow-hidden';
    const hoverClasses = hoverEffect
      ? 'transition-transform duration-500'
      : '';

    const hoverAnimation = hoverEffect ? { y: -8 } : { y: 0 };

    return (
      <motion.div
        ref={ref}
        whileHover={hoverAnimation}
        className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      >
        {gradient && (
          <div className={`h-48 md:h-64 ${gradient} relative`}>
            <div className="absolute inset-0 bg-navy/0 hover:bg-navy/80 flex items-center justify-center text-white font-bold opacity-0 hover:opacity-100 transition-all duration-300">
              View Project →
            </div>
          </div>
        )}
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
