import type { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';

export const metadata: Metadata = {
  title: 'Journal — TrionForge Sports',
  description: 'Industry insights, manufacturing guides, and brand building resources from TrionForge Sports.',
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogGrid />
    </main>
  );
}
