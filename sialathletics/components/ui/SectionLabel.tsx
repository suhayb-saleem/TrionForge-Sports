export default function SectionLabel({
  children,
  showDash = true,
  showSlash = false,
  className = '',
  light = false,
}: {
  children: React.ReactNode;
  showDash?: boolean;
  showSlash?: boolean;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
      {showSlash && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 900, color: 'var(--red)', marginRight: '2px' }}>
          /
        </span>
      )}
      {showDash && !showSlash && <span style={{ display: 'block', width: '20px', height: '1.5px', background: 'var(--red)' }} />}
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.68rem',
        fontWeight: 800,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: light ? 'var(--text-dark)' : 'var(--red)'
      }}>
        {children}
      </span>
    </div>
  );
}
