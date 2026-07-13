'use client';
import { motion } from 'motion/react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogGrid() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)', overflow: 'hidden', cursor: 'pointer' }}
              whileHover={{ borderColor: 'var(--red-border)', y: -4 }}
            >
              {/* Image placeholder */}
              <div style={{ aspectRatio: '16/9', background: 'var(--bg-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'var(--red)', padding: '4px 10px', fontFamily: 'var(--font-body)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--white)' }}>
                  {post.category}
                </div>
                <span style={{ color: 'var(--white-60)', fontSize: '0.7rem', fontFamily: 'var(--font-body)' }}>BLOG IMAGE</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--white-60)' }}>{post.date}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--white-60)' }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--white)', lineHeight: 1.1, marginBottom: '0.75rem' }}>{post.title}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--white-60)', lineHeight: 1.65, marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {post.excerpt}
                </p>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--white)', letterSpacing: '0.05em' }}>READ MORE →</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
