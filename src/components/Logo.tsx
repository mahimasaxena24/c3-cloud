interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export default function Logo({ className = '', variant = 'light', showText = true }: LogoProps) {
  const textColor = variant === 'light' ? 'text-navy-900' : 'text-white';
  const subColor = variant === 'light' ? 'text-blue-600' : 'text-blue-400';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none" aria-hidden="true">
          <path
            d="M32 10L52 21.5v21L32 54L12 42.5v-21L32 10Z"
            className={variant === 'light' ? 'fill-navy-900' : 'fill-white/10'}
            stroke={variant === 'light' ? '#3b82f6' : '#60a5fa'}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <rect x="24" y="24" width="16" height="3" rx="1.5" fill="#60a5fa" />
          <rect x="24" y="30" width="16" height="3" rx="1.5" fill="#60a5fa" opacity="0.65" />
          <rect x="24" y="36" width="16" height="3" rx="1.5" fill="#60a5fa" opacity="0.35" />
          <circle cx="40" cy="25.5" r="1.3" fill="#22d3ee" />
          <circle cx="40" cy="31.5" r="1.3" fill="#22d3ee" opacity="0.7" />
        </svg>
      </span>
      {showText && (
        <span className={`font-display text-lg font-bold tracking-tight ${textColor}`}>
          C3<span className={subColor}> Cloud</span>
        </span>
      )}
    </div>
  );
}
