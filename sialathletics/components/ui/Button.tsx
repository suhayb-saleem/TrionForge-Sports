import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
}

export default function Button({ href, onClick, variant = 'primary', size = 'md', type = 'button', className = '', children }: ButtonProps) {
  const base: React.CSSProperties = {
    display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: size === 'sm' ? '0.65rem' : size === 'lg' ? '0.8rem' : '0.72rem', fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase' as const, textDecoration: 'none',
    padding: size === 'sm' ? '8px 18px' : size === 'lg' ? '16px 36px' : '13px 28px', borderRadius: 0, cursor: 'pointer', border: 'none', transition: 'all 0.2s ease',
  };
  const styles: Record<string, React.CSSProperties> = {
    primary: { ...base, background: 'var(--red)', color: 'var(--white)' },
    outline: { ...base, background: 'transparent', color: 'var(--white)', border: '1px solid var(--white-30)' },
    ghost: { ...base, background: 'transparent', color: 'var(--white)', padding: '0' },
  };
  if (href) return <Link href={href} style={styles[variant]} className={className}>{children}</Link>;
  return <button type={type} onClick={onClick} style={styles[variant]} className={className}>{children}</button>;
}
