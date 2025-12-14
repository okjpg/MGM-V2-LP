import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: "full" | "100%";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '', delay = 0, width = "100%" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
