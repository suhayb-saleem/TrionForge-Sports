export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'pickleball-growth-us-2025',
    title: 'Why Pickleball Is the Fastest Growing Sport in the US',
    excerpt: "With 36+ million players and counting, pickleball has gone from backyard game to billion-dollar industry. Here's what that means for equipment brands entering the market.",
    category: 'Industry',
    date: 'June 2025',
    readTime: '5 min read',
  },
  {
    id: 'carbon-fiber-vs-fiberglass-paddles',
    title: 'Carbon Fiber vs. Fiberglass Paddles: What Brands Need to Know',
    excerpt: 'The surface material determines spin, pop, and price point. We break down the manufacturing differences and what each means for your product line.',
    category: 'Manufacturing',
    date: 'May 2025',
    readTime: '7 min read',
  },
  {
    id: 'sialkot-sports-manufacturing',
    title: "Why Sialkot Is the World's Sporting Goods Capital",
    excerpt: "Pakistan's Sialkot district produces 70% of the world's hand-stitched footballs and a growing share of premium racket sports equipment. Here's why.",
    category: 'Our Story',
    date: 'April 2025',
    readTime: '6 min read',
  },
];
