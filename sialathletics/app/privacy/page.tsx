export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <main style={{ paddingTop: '120px', minHeight: '80vh', background: 'var(--hp-black)' }}>
      <div className="hp-shell" style={{ maxWidth: '800px', padding: '4rem 1.5rem' }}>
        <h1 className="hp-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--hp-ivory)', marginBottom: '2rem' }}>Privacy Policy</h1>
        <p style={{ fontFamily: 'var(--hp-body)', color: 'var(--hp-ivory-60)', lineHeight: 1.7 }}>This Privacy Policy is being updated. Please contact us at info@sialathletics.com with any questions.</p>
      </div>
    </main>
  );
}
