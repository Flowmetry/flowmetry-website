'use client';

import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // milliseconds, for backwards compatibility
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
