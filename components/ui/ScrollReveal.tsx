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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};