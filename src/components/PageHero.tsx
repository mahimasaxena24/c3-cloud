import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 85%)',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-blue-100/50 blur-[120px]" aria-hidden="true" />

      <div className="container-base relative mx-auto max-w-3xl text-center">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
        <h1 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-5 text-base text-navy-600 sm:text-lg">{description}</p>
        {children}
      </div>
    </section>
  );
}
