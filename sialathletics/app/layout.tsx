import type { Metadata } from 'next';
import { Space_Grotesk, Archivo } from 'next/font/google';
import { SmoothScrollProvider } from '@/lib/lenis';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
// Site-wide monumental display face (replaces the old Syncopate treatment everywhere).
const archivo = Archivo({ subsets: ['latin'], weight: ['500', '600', '700', '800', '900'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sialathletics.com'),
  title: {
    default: 'SIAL Athletics — Padel Racket & Pickleball Paddle OEM Manufacturer',
    template: '%s — SIAL Athletics',
  },
  description: 'Padel racket and pickleball paddle OEM/ODM manufacturing for brands, retailers, and distributors. Precision carbon fiber molding, private-label programs, factory-direct from Sialkot, Pakistan.',
  keywords: [
    'padel racket OEM manufacturer',
    'pickleball paddle manufacturer Pakistan',
    'custom padel racket private label',
    'wholesale pickleball paddles OEM',
    'carbon fiber padel rackets',
    'ODM pickleball paddle supplier',
    'sports equipment manufacturer Sialkot',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.sialathletics.com',
    siteName: 'SIAL Athletics',
    title: 'SIAL Athletics — Padel Racket & Pickleball Paddle OEM Manufacturer',
    description: 'Carbon fiber padel rackets and pickleball paddles, engineered and built factory-direct in Sialkot. OEM, ODM, and private-label programs.',
    images: [{ url: '/images/logo.png', width: 1200, height: 630, alt: 'SIAL Athletics logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIAL Athletics — Padel Racket & Pickleball Paddle OEM Manufacturer',
    description: 'Carbon fiber padel rackets and pickleball paddles, engineered and built factory-direct in Sialkot.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${spaceGrotesk.variable} ${archivo.variable} antialiased`}><body className="min-h-screen flex flex-col"><SmoothScrollProvider><Navbar /><div className="flex-1">{children}</div><Footer /></SmoothScrollProvider></body></html>;
}
