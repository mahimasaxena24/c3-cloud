interface PoweredByProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function PoweredBy({ variant = 'light', className = '' }: PoweredByProps) {
  const textColor = variant === 'light' ? 'text-navy-500' : 'text-navy-400';
  const accentColor = variant === 'light' ? 'text-blue-600' : 'text-blue-400';

  return (
    <p className={`text-xs font-medium ${textColor} ${className}`}>
      C3 Cloud, Powered by{' '}
      <span className={`font-semibold ${accentColor}`}>Sewadar Technologies</span>
    </p>
  );
}
