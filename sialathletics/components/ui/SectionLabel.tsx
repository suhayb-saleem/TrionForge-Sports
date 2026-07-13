export default function SectionLabel({
  children,
  showDash = true,
  className = '',
}: {
  children: React.ReactNode;
  showDash?: boolean;
  className?: string;
}) {
  return (
    <div className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
      {showDash && <span style={{ display: 'block', width: '20px', height: '1.5px', background: 'var(--red)' }} />}
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--red)' }}>
        {children}
      </span>
    </div>
  );
}
