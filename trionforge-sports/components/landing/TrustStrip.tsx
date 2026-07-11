import React from 'react';
import { Layers, Shield, CheckCircle, Tag } from 'lucide-react';

export function TrustStrip() {
  const items = [
    { icon: Layers, text: 'OEM & ODM Programs' },
    { icon: Shield, text: 'Carbon Fiber & Premium Materials' },
    { icon: CheckCircle, text: 'US Market Ready' },
    { icon: Tag, text: 'Direct Factory Pricing' },
  ];

  return (
    <div className="bg-[#0f0f0f] border-y border-white/8 font-body z-20 relative">
      <div className="container-custom py-5 md:py-0 md:h-[72px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-3 text-white text-[13px] md:text-sm font-semibold tracking-wider uppercase py-2 md:py-0 w-full md:w-auto justify-center">
                <Icon size={20} className="text-brand-red shrink-0" />
                <span>{item.text}</span>
              </div>
              {idx < items.length - 1 && (
                <div className="hidden md:block h-8 w-[1px] bg-white/10" aria-hidden="true" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
