import type { MetadataRoute } from 'next';

// Wildcard already allows every crawler by default. AI crawlers are listed
// explicitly (rather than left to the wildcard) so it's obvious at a glance
// that this site wants to be cited in AI answers, not just search results.
const AI_CRAWLERS = ['GPTBot', 'PerplexityBot', 'ClaudeBot', 'Google-Extended', 'CCBot'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/', disallow: '/api/' })),
    ],
    sitemap: 'https://www.sialathletics.com/sitemap.xml',
  };
}
