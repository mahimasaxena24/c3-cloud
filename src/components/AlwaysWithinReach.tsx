import { Activity, Clock, ShieldCheck, Globe } from 'lucide-react';
import Reveal from './Reveal';

const METRICS = [
  { value: '99.99%', label: 'Uptime', icon: Activity },
  { value: '24×7', label: 'Monitoring', icon: Clock },
  { value: 'Secure', label: 'Infrastructure', icon: ShieldCheck },
  { value: 'Anywhere', label: 'Access', icon: Globe },
];

export default function AlwaysWithinReach() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid-dark"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 90%)',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" aria-hidden="true" />

      <div className="container-base relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Reliability
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
            Your Business. Always Within Reach.
          </h2>
          <p className="mt-5 text-base text-navy-200 sm:text-lg">
            Your business should not depend on where you are. With C3 Cloud, your applications
            and infrastructure stay accessible wherever your team works.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.06] sm:p-8">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 to-accent-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <m.icon className="h-6 w-6" />
                </span>
                <p className="mt-5 text-2xl font-bold text-white sm:text-3xl">{m.value}</p>
                <p className="mt-1.5 text-xs font-medium text-navy-300 sm:text-sm">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
