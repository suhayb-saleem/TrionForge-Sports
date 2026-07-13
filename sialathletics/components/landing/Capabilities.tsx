'use client';

import React from 'react';
import { Settings, ShieldAlert, Cpu } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function Capabilities() {
  const capabilities = [
    {
      icon: Settings,
      title: 'OEM Manufacturing',
      desc: 'Send us your CAD designs and specifications. We build to your exact measurements, tolerances, and stiffness profiles using advanced carbon fiber hot-press molding.',
    },
    {
      icon: Cpu,
      title: 'ODM Private Label',
      desc: 'Leverage our proven, tournament-approved shape geometries and core configurations. Customize the graphics, colorways, surface textures, and grip accessories.',
    },
    {
      icon: ShieldAlert,
      title: 'Quality & US Compliance',
      desc: 'Every batch undergoes rigorous quality assurance at our Sialkot facility. All paddles meet USAPA guidelines for surface roughness, deflection, and dimensional limit requirements.',
    },
  ];

  return (
    <section id="capabilities" className="py-24 bg-brand-secondary relative border-t border-white/8">
      <div className="absolute inset-0 texture-steel pointer-events-none" />
      <div className="absolute inset-0 texture-noise pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Header column */}
          <div className="lg:col-span-1 space-y-6">
            <SectionLabel showDash={true}>
              MANUFACTURING POWER
            </SectionLabel>
            <h2 className="font-display text-[40px] sm:text-[56px] text-white leading-[1.05] uppercase">
              CAPABILITIES & SERVICES
            </h2>
            <p className="font-body text-[#C8C8C8] text-base leading-relaxed">
              We offer full-service OEM manufacturing, private label ODM solutions, and white-label supply chain fulfillment. From initial raw material selection to final US customs landing, we handle it all.
            </p>
          </div>

          {/* Cards grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={idx}
                  direction="up"
                  delay={idx * 0.1}
                  className="bg-[#1a1a1a] border border-white/8 p-8 flex flex-col justify-between h-full group hover:border-brand-red/45 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3 bg-brand-dark border border-white/8 group-hover:border-brand-red/30 transition-colors duration-300">
                      <Icon size={24} className="text-brand-red" />
                    </div>
                    <h3 className="font-display text-2xl text-white uppercase">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-[#8A8A8A] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
