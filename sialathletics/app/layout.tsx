import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import { SmoothScrollProvider } from '@/lib/lenis';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Cursor from '@/components/ui/Cursor';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
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
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark text-white select-none">
        <SmoothScrollProvider>
          <Cursor />
          <Navbar />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
