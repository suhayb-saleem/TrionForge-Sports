'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--white-08)', fontFamily: 'var(--font-body)', padding: '5rem 2rem 2.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Column 1: Logo + Desc + Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link href="/" style={{ display: 'block', position: 'relative', width: '185px', height: '52px' }}>
              <Image
                src="/images/logo.png"
                alt="SIAL Athletics Logo" sizes="185px"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </Link>
            <p style={{ color: 'var(--white-60)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
              Premium pickleball paddles and padel rackets. Factory-direct from Sialkot to the US market.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white-60)', transition: 'color 0.2s ease' }}
                 onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                 onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-60)')}
                 aria-label="Facebook">
                <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white-60)', transition: 'color 0.2s ease' }}
                 onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                 onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-60)')}
                 aria-label="Instagram">
                <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white-60)', transition: 'color 0.2s ease' }}
                 onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                 onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-60)')}
                 aria-label="LinkedIn">
                <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ color: 'var(--white)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', margin: 0 }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Products', href: '/catalogue' },
                { name: 'Quality', href: '/quality' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={{ color: 'var(--white-60)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-60)')}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ color: 'var(--white)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', margin: 0 }}>
              Products
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Pickleball Paddles', href: '/catalogue?filter=pickleball' },
                { name: 'Padel Rackets', href: '/catalogue?filter=padel' },
                { name: 'OEM & ODM Programs', href: '/capabilities' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={{ color: 'var(--white-60)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-60)')}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ color: 'var(--white)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', margin: 0 }}>
              Contact
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--white-60)', fontSize: '0.875rem' }}>
                <MapPin size={16} color="var(--red)" style={{ flexShrink: 0 }} />
                <span>Sialkot, Pakistan</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--white-60)', fontSize: '0.875rem' }}>
                <Mail size={16} color="var(--red)" style={{ flexShrink: 0 }} />
                <a href="mailto:info@sialathletics.com" style={{ color: 'var(--white-60)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                   onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-60)')}>
                  info@sialathletics.com
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--white-60)', fontSize: '0.875rem' }}>
                <Phone size={16} color="var(--red)" style={{ flexShrink: 0 }} />
                <a href="tel:+923355933174" style={{ color: 'var(--white-60)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                   onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-60)')}>
                  +923355933174
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[var(--white-08)] text-xs text-[var(--white-60)]">
          <p>© 2026 SIAL Athletics. All Rights Reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: 'var(--white-60)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-60)')}>
              Privacy Policy
            </Link>
            <span style={{ color: 'var(--white-30)' }}>|</span>
            <Link href="/terms" style={{ color: 'var(--white-60)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-60)')}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        .footer-bottom {
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
}
