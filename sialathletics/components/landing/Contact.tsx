'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'pickleball',
    moq: '50-100',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative border-t border-white/8">
      <div className="absolute inset-0 texture-steel pointer-events-none" />
      <div className="absolute inset-0 texture-noise pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-16 items-start">
          {/* Left Panel: Contact info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <SectionLabel showDash={true}>
                START THE PROGRAM
              </SectionLabel>
              <h2 className="font-display text-[40px] sm:text-[56px] text-white leading-[1.05] uppercase">
                GET A FACTORY<br />QUOTE DIRECT
              </h2>
              <p className="font-body text-[#C8C8C8] text-base leading-relaxed max-w-sm">
                Connect with our product development team in Sialkot and US sales representatives to arrange sample delivery, pricing sheets, and custom mold quotes.
              </p>
            </div>

            <div className="space-y-6 pt-4 font-body">
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-[#1a1a1a] border border-white/8 text-brand-red">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#8A8A8A] uppercase tracking-wider">Factory HQ</div>
                  <div className="font-semibold text-sm">Sialkot, Pakistan</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-[#1a1a1a] border border-white/8 text-brand-red">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#8A8A8A] uppercase tracking-wider">Email Inquiry</div>
                  <a href="mailto:info@sialathletics.com" className="font-semibold text-sm hover:underline">
                    info@sialathletics.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-[#1a1a1a] border border-white/8 text-brand-red">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#8A8A8A] uppercase tracking-wider">Direct Phone</div>
                  <div className="font-semibold text-sm">+1 (xxx) xxx-xxxx</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <AnimatedSection direction="up" className="bg-[#0f0f0f] border border-white/8 p-8 md:p-12">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 border border-brand-red text-brand-red rounded-none mb-4">
                  <Check size={32} />
                </div>
                <h3 className="font-display text-3xl text-white uppercase">Inquiry Received</h3>
                <p className="font-body text-[#8A8A8A] text-sm max-w-sm mx-auto">
                  Thank you. A product specialist will contact you within 24 hours with details, custom options, and digital PDF catalogs.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} className="mt-6">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-body text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs text-[#8A8A8A] uppercase tracking-wider font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#1a1a1a] border border-white/8 p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs text-[#8A8A8A] uppercase tracking-wider font-semibold">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@company.com"
                      className="w-full bg-[#1a1a1a] border border-white/8 p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs text-[#8A8A8A] uppercase tracking-wider font-semibold">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      placeholder="e.g. Pro Pickleball Inc"
                      className="w-full bg-[#1a1a1a] border border-white/8 p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  {/* Product Interest */}
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="interest" className="text-xs text-[#8A8A8A] uppercase tracking-wider font-semibold">
                      Product Line
                    </label>
                    <select
                      id="interest"
                      className="w-full bg-[#1a1a1a] border border-white/8 p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200 h-[46px]"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="pickleball">Pickleball Paddles</option>
                      <option value="padel">Padel Rackets</option>
                      <option value="both">Both Lines</option>
                      <option value="accessories">Other Accessories</option>
                    </select>
                  </div>
                </div>

                {/* Estimate MOQ */}
                <div className="space-y-2">
                  <label htmlFor="moq" className="text-xs text-[#8A8A8A] uppercase tracking-wider font-semibold">
                    Target Order Volume (MOQ)
                  </label>
                  <select
                    id="moq"
                    className="w-full bg-[#1a1a1a] border border-white/8 p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200 h-[46px]"
                    value={formData.moq}
                    onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                  >
                    <option value="50-100">50 - 100 Units (Starter)</option>
                    <option value="100-500">100 - 500 Units (Growth)</option>
                    <option value="500+">500+ Units (Enterprise)</option>
                    <option value="samples">Sample order only</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs text-[#8A8A8A] uppercase tracking-wider font-semibold">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Specify target specifications, material preferences, logo engraving, or custom request details here..."
                    className="w-full bg-[#1a1a1a] border border-white/8 p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit button */}
                <div>
                  <Button type="submit" variant="primary" size="md" className="w-full flex items-center justify-center gap-2">
                    <Send size={16} />
                    <span>Submit B2B Inquiry</span>
                  </Button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
