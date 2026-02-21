import { motion } from 'framer-motion';

interface GeometricShape {
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
  borderColor: string;
  shape: 'circle' | 'square';
}

const shapes: GeometricShape[] = [
  { size: 350, x: '70%', y: '10%', delay: 0, duration: 6, borderColor: 'border-mint', shape: 'circle' },
  { size: 250, x: '80%', y: '50%', delay: 1, duration: 7, borderColor: 'border-teal', shape: 'circle' },
  { size: 180, x: '60%', y: '70%', delay: 2, duration: 8, borderColor: 'border-sage', shape: 'square' },
  { size: 120, x: '85%', y: '25%', delay: 0.5, duration: 5, borderColor: 'border-teal/50', shape: 'circle' },
  { size: 80, x: '55%', y: '15%', delay: 1.5, duration: 6, borderColor: 'border-mint/50', shape: 'square' },
];

export function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1],
            rotate: shape.shape === 'square' ? [0, 15, 0] : [0, 0, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute border-4 ${shape.borderColor} ${
            shape.shape === 'circle' ? 'rounded-full' : 'rounded-lg'
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-mint/5 to-transparent" />
    </div>
  );
}
