'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

interface ButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const MotionLink = motion.create(Link);

export default function Button({ href, onClick, variant = 'primary', size = 'md', type = 'button', className = '', disabled = false, children }: ButtonProps) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-body)',
    fontSize: size === 'sm' ? '0.65rem' : size === 'lg' ? '0.8rem' : '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    textDecoration: 'none',
    padding: size === 'sm' ? '8px 18px' : size === 'lg' ? '16px 36px' : '13px 28px',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  };

  const styles: Record<string, React.CSSProperties> = {
    primary: {
      ...base,
      background: disabled ? 'var(--white-20)' : 'var(--red)',
      color: 'var(--white)',
      boxShadow: disabled ? 'none' : '0 4px 12px rgba(232, 0, 28, 0.2)',
    },
    outline: {
      ...base,
      background: 'transparent',
      color: 'var(--white)',
      border: '1px solid var(--white-20)',
    },
    ghost: {
      ...base,
      background: 'transparent',
      color: 'var(--white)',
      padding: '0',
      overflow: 'visible',
    },
  };

  const currentStyle = styles[variant];

  // Shine element inside the button
  const shineEl = variant !== 'ghost' && !disabled && (
    <motion.span
      initial={{ x: '-100%', y: '-100%', rotate: 35 }}
      whileHover={{
        x: '200%',
        y: '200%',
      }}
      transition={{
        duration: 0.75,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent)',
        pointerEvents: 'none',
      }}
    />
  );

  const hoverProps = (variant !== 'ghost' && !disabled) ? {
    whileHover: {
      scale: 1.03,
      y: -1,
      boxShadow: variant === 'primary' ? '0 8px 24px rgba(232, 0, 28, 0.45)' : '0 8px 20px rgba(255, 255, 255, 0.08)',
    },
    whileTap: { scale: 0.98, y: 0 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 15 }
  } : {};

  if (href) {
    return (
      <MotionLink
        href={href}
        style={currentStyle}
        className={className}
        {...hoverProps}
      >
        {shineEl || null}
        <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
          {children}
        </span>
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={currentStyle}
      className={className}
      {...hoverProps}
    >
      {shineEl || null}
      <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
        {children}
      </span>
    </motion.button>
  );
}
