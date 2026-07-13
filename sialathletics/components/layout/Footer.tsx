import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/8 font-body">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo + Desc + Socials */}
          <div className="space-y-6">
            <Link href="/" className="relative block h-10 w-[160px]">
              <Image
                src="/images/logo.svg"
                alt="SIAL Athletics Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-[#8A8A8A] text-sm leading-relaxed max-w-sm">
              Premium pickleball paddles and padel rackets. Factory-direct from Sialkot to the US market.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-red transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-red transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-red transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-red transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-[11px] font-semibold uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home',         href: '/' },
                { name: 'About Us',     href: '/about' },
                { name: 'Products',     href: '/catalogue' },
                { name: 'Capabilities', href: '/capabilities' },
                { name: 'Quality',      href: '/quality' },
                { name: 'Blog',         href: '/blog' },
                { name: 'Contact',      href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#8A8A8A] hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-6">
            <h3 className="text-white text-[11px] font-semibold uppercase tracking-widest">
              Products
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Pickleball Paddles', href: '/catalogue?filter=pickleball' },
                { name: 'Padel Rackets', href: '/catalogue?filter=padel' },
                { name: 'OEM & ODM Programs', href: '/capabilities' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#8A8A8A] hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h3 className="text-white text-[11px] font-semibold uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red mt-0.5 shrink-0" />
                <span className="text-[#8A8A8A] text-sm">
                  Sialkot, Pakistan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-brand-red mt-0.5 shrink-0" />
                <a
                  href="mailto:info@sialathletics.com"
                  className="text-[#8A8A8A] hover:text-white text-sm transition-colors duration-200"
                >
                  info@sialathletics.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-red mt-0.5 shrink-0" />
                <span className="text-[#8A8A8A] text-sm">
                  +1 (xxx) xxx-xxxx
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8A8A8A]">
          <p>© 2025 SIAL Athletics. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
