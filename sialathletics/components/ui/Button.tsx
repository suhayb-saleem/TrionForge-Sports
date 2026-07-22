'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

const MotionLink = motion.create(Link);

const sizeClass: Record<NonNullable<ButtonProps['size']>, string> = { sm: 'hp-btn--sm', md: '', lg: 'hp-btn--lg' };

export default function Button({ href, onClick, variant = 'primary', size = 'md', type = 'button', className = '', disabled = false, children }: ButtonProps) {
  const classes = `hp-btn hp-btn--${variant} ${sizeClass[size]} ${className}`.trim();
  const motionProps = disabled ? {} : { whileTap: { scale: 0.98 }, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const } };

  if (href) return <MotionLink href={href} className={classes} onClick={onClick} {...motionProps}>{children}</MotionLink>;
  return <motion.button type={type} onClick={onClick} disabled={disabled} className={classes} {...motionProps}>{children}</motion.button>;
}
