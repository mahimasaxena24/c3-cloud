import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${dark ? '!text-blue-400' : ''}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-navy-200' : 'text-navy-600'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
