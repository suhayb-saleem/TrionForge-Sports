import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABanner from '@/components/landing/CTABanner';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutStats from '@/components/about/AboutStats';
import AboutValues from '@/components/about/AboutValues';

export const metadata: Metadata = {
  title: 'About TrionForge Sports — Our Story & Manufacturing Heritage',
  description: 'Learn about TrionForge Sports, our manufacturing heritage in Sialkot, and our mission to bring premium pickleball and padel equipment to the US market.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutStats />
        <AboutValues />
        <CTABanner
          headline="WANT TO KNOW MORE ABOUT OUR PROCESS?"
          subtext="Let's talk manufacturing, samples, and timelines."
          primaryLabel="GET A QUOTE"
          primaryHref="/contact"
          secondaryLabel="VIEW PRODUCTS"
          secondaryHref="/catalogue"
        />
      </main>
      <Footer />
    </>
  );
}
