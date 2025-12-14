import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', noPadding = false }) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`bg-white rounded-2xl border border-stone-100 shadow-soft ${noPadding ? '' : 'p-6'} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const TactileButton: React.FC<{ children: React.ReactNode; primary?: boolean; className?: string; onClick?: () => void }> = ({ children, primary, className = '', onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        px-4 py-2 rounded-xl font-medium text-sm transition-colors
        ${primary 
          ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20 hover:bg-brand-600' 
          : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900 shadow-sm'}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};
