'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setCurrentHash(typeof window !== 'undefined' ? window.location.hash : '');

    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Trigger once on mount to capture direct page loads mid-scroll
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navLinks = [
    { name: 'HOME',         href: '/' },
    { name: 'ABOUT US',     href: '/about' },
    { name: 'PRODUCTS',     href: '/catalogue' },
    { name: 'CAPABILITIES', href: '/capabilities' },
    { name: 'QUALITY',      href: '/quality' },
    { name: 'BLOG',         href: '/blog' },
    { name: 'CONTACT',      href: '/contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href.startsWith('/#')) {
      if (!mounted) return false;
      return pathname === '/' && currentHash === href.substring(1);
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/8 py-3'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
        style={scrolled ? { backgroundColor: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(12px)' } : undefined}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative block h-10 w-[160px] md:h-12 md:w-[180px]">
            <Image
              src="/images/logo.svg"
              alt="SIAL Athletics Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-body text-[13px] font-medium tracking-widest uppercase transition-colors duration-200 relative py-1 ${
                    active ? 'text-white' : 'text-[#8A8A8A] hover:text-white'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-red" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quote Button (Desktop) */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button variant="primary" size="sm" className="!px-6 !py-3">
                Get A Quote
              </Button>
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-brand-red p-1 cursor-pointer transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center items-center lg:hidden">
          <nav className="flex flex-col items-center gap-8 mb-12">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`font-body text-xl font-bold tracking-widest uppercase transition-colors duration-200 ${
                    active ? 'text-brand-red' : 'text-[#8A8A8A] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link href="/contact" onClick={handleLinkClick}>
            <Button variant="primary" size="lg">
              Get A Quote
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
