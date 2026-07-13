import type { Metadata } from 'next';
import { Space_Grotesk, Syncopate } from 'next/font/google';
import { SmoothScrollProvider } from '@/lib/lenis';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const syncopate = Syncopate({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sialathletics.com'),
  title: 'SIAL Athletics — Premium Pickleball Paddles & Padel Rackets',
  description: 'Factory-direct premium pickleball paddles and padel rackets. OEM, ODM, and private label programs for US brands and retailers. Manufactured in Sialkot.',
  keywords: ['pickleball paddles', 'padel rackets manufacturer', 'OEM pickleball', 'private label padel', 'sports equipment wholesale'],
  openGraph: {
    title: 'SIAL Athletics',
    description: 'Premium factory-direct pickleball and padel equipment. Precision. Performance. Durability.',
    siteName: 'SIAL Athletics',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${syncopate.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg-base)] text-white">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
