'use client';

import React from 'react';
import { Settings, ShieldAlert, Cpu } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
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
    <section id="capabilities" className="relative" style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--white-08)', padding: '6rem 0' }}>
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
            <p className="font-body text-base leading-relaxed" style={{ color: 'var(--white-90)' }}>
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
                  className="flex flex-col justify-between h-full group transition-all duration-300 bg-[var(--bg-card)] border border-[var(--white-08)] p-8"
                >
                  <div className="space-y-4">
                    <div className="inline-block transition-colors duration-300" style={{ padding: '0.75rem', background: 'var(--bg-base)', border: '1px solid var(--white-08)' }}>
                      <Icon size={24} className="text-brand-red" />
                    </div>
                    <h3 className="font-display text-2xl text-white uppercase">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--white-60)' }}>
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
