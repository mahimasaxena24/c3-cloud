import { ArrowRight, MessageSquare, Cloud, Laptop, Smartphone, Monitor, Building, Server, ShieldCheck, Activity, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const DEVICES = [
  { icon: Laptop, label: 'Laptop', sub: 'Remote', top: '8%', left: '5%', delay: '0s' },
  { icon: Monitor, label: 'Desktop', sub: 'Office', top: '8%', left: '72%', delay: '0.3s' },
  { icon: Smartphone, label: 'Mobile', sub: 'Anywhere', top: '72%', left: '5%', delay: '0.6s' },
  { icon: Building, label: 'Remote Office', sub: 'Branch', top: '72%', left: '72%', delay: '0.9s' },
];

const LABELS = [
  { text: 'Anywhere', top: '2%', left: '40%', delay: '0s' },
  { text: 'Any Device', top: '88%', left: '38%', delay: '0.5s' },
  { text: 'Secure Access', top: '40%', left: '82%', delay: '1s' },
  { text: '24×7 Availability', top: '50%', left: '2%', delay: '1.5s' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 85%)',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-blue-100/60 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent-100/40 blur-[100px]" aria-hidden="true" />

      <div className="container-base relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        {/* Text */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-navy-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            Cloud Infrastructure for Modern Business
          </span>

          <h1 className="mt-6 text-[2.25rem] font-bold leading-[1.08] text-navy-900 sm:text-5xl lg:text-[3.5rem]">
            Your Business in the Cloud.{' '}
            <span className="gradient-text">Accessible Anywhere.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
            Access your applications, data and infrastructure securely from anywhere, on any
            device — backed by reliable cloud infrastructure and business-ready support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/cloud-vps" className="btn-blue">
              Explore Cloud Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              <MessageSquare className="h-4 w-4" />
              Talk to an Expert
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-navy-500">
            <span className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-emerald-500" />
              99.99% Uptime
            </span>
            <span className="h-4 w-px bg-navy-200" />
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-500" />
              Secure Infrastructure
            </span>
            <span className="h-4 w-px bg-navy-200" />
            <span className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-navy-500" />
              24×7 Support
            </span>
          </div>
        </div>

        {/* Visual — Cloud Access Animation */}
        <div className="relative">
          <CloudAccessVisual />
        </div>
      </div>
    </section>
  );
}

function CloudAccessVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Background panel */}
      <div className="absolute inset-0 rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-50/60 to-white" />

      {/* Dotted grid */}
      <div
        className="absolute inset-4 rounded-2xl bg-dot-grid opacity-50"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 90%)',
        }}
        aria-hidden="true"
      />

      {/* Concentric rings */}
      <div className="absolute inset-[14%] rounded-full border border-navy-200/50" />
      <div className="absolute inset-[30%] rounded-full border border-navy-200/40" />

      {/* SVG animated connection lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
        {DEVICES.map((d, i) => {
          const x = parseFloat(d.left) + 7;
          const y = parseFloat(d.top) + 7;
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="url(#cloudGrad)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              className="animate-dash-flow"
              style={{ animationDelay: d.delay }}
            />
          );
        })}
        <defs>
          <linearGradient id="cloudGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating labels */}
      {LABELS.map((l) => (
        <span
          key={l.text}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-navy-100 bg-white/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-navy-500 shadow-sm backdrop-blur sm:text-[10px]"
          style={{ top: l.top, left: l.left }}
        >
          {l.text}
        </span>
      ))}

      {/* Central Cloud */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-navy-200 bg-white shadow-lg shadow-navy-900/10 animate-glow-pulse sm:h-24 sm:w-24">
          <div className="absolute inset-0 rounded-2xl bg-blue-500/5 blur-lg" />
          <div className="relative flex flex-col items-center">
            <Cloud className="h-7 w-7 text-blue-600 sm:h-8 sm:w-8" />
            <span className="mt-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-blue-600">C3 Cloud</span>
          </div>
        </div>
      </div>

      {/* Infrastructure layer indicator (bottom center) */}
      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1.5 rounded-lg border border-navy-100 bg-white px-2.5 py-1.5 shadow-sm">
          <Server className="h-3.5 w-3.5 text-navy-600" />
          <span className="font-mono text-[9px] font-medium text-navy-500">Infrastructure</span>
        </div>
      </div>

      {/* Device nodes */}
      {DEVICES.map((d, i) => (
        <div key={d.label} className="absolute" style={{ top: d.top, left: d.left }}>
          <div className="group flex flex-col items-center animate-float" style={{ animationDelay: `${i * 0.6}s` }}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-navy-100 bg-white shadow-md transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-lg sm:h-14 sm:w-14">
              <d.icon className="h-5 w-5 text-navy-700 sm:h-6 sm:w-6" />
            </div>
            <div className="mt-1.5 text-center">
              <p className="text-[10px] font-semibold text-navy-900 sm:text-xs">{d.label}</p>
              <p className="font-mono text-[8px] text-navy-400 sm:text-[9px]">{d.sub}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Internet globe (top center) */}
      <div className="absolute top-[2%] left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1.5 rounded-lg border border-navy-100 bg-white px-2.5 py-1.5 shadow-sm">
          <Globe className="h-3.5 w-3.5 text-blue-500" />
          <span className="font-mono text-[9px] font-medium text-navy-500">Internet</span>
        </div>
      </div>
    </div>
  );
}
