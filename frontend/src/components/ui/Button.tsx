import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-2xl font-semibold transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-blue-city-primary text-white hover:bg-blue-700 shadow-soft hover:shadow-soft-lg',
    secondary: 'bg-blue-city-accent text-white hover:bg-orange-700 shadow-soft hover:shadow-soft-lg',
    outline: 'border-2 border-blue-city-primary text-blue-city-primary hover:bg-blue-city-primary hover:text-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};




