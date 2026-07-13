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
    <section id="capabilities" className="relative" style={{ background: 'var(--bg-light-alt)', borderTop: '1px solid var(--border-light)', padding: '8rem 0' }}>
      <div className="absolute inset-0 texture-steel pointer-events-none opacity-40" />
      <div className="absolute inset-0 texture-noise pointer-events-none opacity-40" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Header column */}
          <div className="space-y-6">
            <SectionLabel showSlash={true}>
              MANUFACTURING POWER
            </SectionLabel>
            <h2 className="font-display text-[40px] sm:text-[56px] text-[var(--text-dark)] leading-[1.05] uppercase">
              CAPABILITIES & SERVICES
            </h2>
            <p className="font-body text-base leading-relaxed text-[var(--text-muted)]">
              We offer full-service OEM manufacturing, private label ODM solutions, and white-label supply chain fulfillment. From initial raw material selection to final US customs landing, we handle it all.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={idx}
                  direction="up"
                  delay={idx * 0.1}
                  className="flex flex-col justify-between group transition-all duration-300 bg-[var(--bg-light)] border border-[var(--border-light)] hover:-translate-y-1.5 hover:border-[var(--red)]/40 hover:shadow-[0_24px_50px_rgba(232,0,28,0.06)]"
                  style={{
                    padding: '2.5rem',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
                    {/* Icon container with padding and margin */}
                    <div style={{ alignSelf: 'flex-start', padding: '0.75rem', background: 'var(--bg-light-alt)', border: '1px solid var(--border-light)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={24} color="var(--red)" />
                    </div>
                    
                    {/* Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <h3 className="font-display text-2xl text-[var(--text-dark)] uppercase group-hover:text-[var(--red)] transition-colors duration-200" style={{ margin: 0 }}>
                        {item.title}
                      </h3>
                      <p className="font-body text-[13px] sm:text-sm leading-relaxed text-[var(--text-muted)]" style={{ margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
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
