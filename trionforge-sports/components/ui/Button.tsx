import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-body uppercase font-semibold tracking-widest transition-all duration-200 cursor-pointer rounded-none select-none';
  
  const variantClasses = {
    primary: 'bg-brand-red text-white hover:bg-[#b01218] hover:scale-[1.02] active:scale-[0.98]',
    outline: 'bg-transparent border border-white text-white hover:bg-brand-red hover:border-brand-red hover:scale-[1.02] active:scale-[0.98]',
    ghost: 'bg-transparent text-white hover:text-brand-red hover:translate-x-1 border-none p-0 inline-flex items-center gap-2',
  };

  const sizeClasses = {
    sm: 'text-[11px] px-4 py-2',
    md: 'text-[13px] px-6 py-3',
    lg: 'text-[14px] px-8 py-4',
  };

  const paddingClass = variant === 'ghost' ? '' : sizeClasses[size];
  const combinedClass = `${baseClasses} ${variantClasses[variant]} ${paddingClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClass}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
