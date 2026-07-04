'use client';
import { motion } from 'motion/react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogGrid() {
  return (
    <section style={{ background: '#050505', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', cursor: 'pointer' }}
              whileHover={{ borderColor: 'rgba(215,25,32,0.4)', y: -4 }}
            >
              {/* Image placeholder */}
              <div style={{ aspectRatio: '16/9', background: '#0b0b0b', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: '#D71920', padding: '4px 10px', fontFamily: 'var(--font-body)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff' }}>
                  {post.category}
                </div>
                <span style={{ color: '#9A9A9A', fontSize: '0.7rem', fontFamily: 'var(--font-body)' }}>BLOG IMAGE</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#9A9A9A' }}>{post.date}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#9A9A9A' }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#fff', lineHeight: 1.1, marginBottom: '0.75rem' }}>{post.title}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#9A9A9A', lineHeight: 1.65, marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {post.excerpt}
                </p>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#fff', letterSpacing: '0.05em' }}>READ MORE →</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
