import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  showDash?: boolean;
  className?: string;
}

export function SectionLabel({ children, showDash = true, className = '' }: SectionLabelProps) {
  return (
    <div className={`font-body text-[11px] text-brand-red font-semibold uppercase tracking-[0.2em] flex items-center gap-2 ${className}`}>
      {showDash && <span className="h-[2px] w-6 bg-brand-red inline-block" aria-hidden="true" />}
      <span>{children}</span>
    </div>
  );
}

export default SectionLabel;
