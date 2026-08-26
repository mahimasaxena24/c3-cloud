import { Server, Boxes, Cloud, Settings2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const ITEMS = [
  { icon: Server, label: 'Dedicated Servers', desc: 'Bare-metal hardware for maximum performance.' },
  { icon: Boxes, label: 'Private VMs', desc: 'Isolated virtual machines for your workloads.' },
  { icon: Cloud, label: 'Custom Cloud', desc: 'Tailored cloud environments built to spec.' },
  { icon: Settings2, label: 'Managed Infrastructure', desc: 'Fully operated and maintained by our team.' },
];

export default function DedicatedCTA() {
  return (
    <section id="hosting" className="section-pad relative overflow-hidden bg-navy-950">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid-dark"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 90%)',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-accent-500/10 blur-[120px]" aria-hidden="true" />

      <div className="container-base relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <span className="eyebrow !text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Dedicated Infrastructure
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
              Need More Than a VPS?
            </h2>
            <p className="mt-5 text-lg text-navy-200">
              Build your dedicated infrastructure with C3 Cloud.
            </p>
            <Link to="/contact" className="btn-blue mt-8">
              Get Custom Infrastructure
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-3 sm:grid-cols-2">
              {ITEMS.map((item, i) => (
                <Reveal
                  key={item.label}
                  delay={i * 80}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.08]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm font-bold text-white">{item.label}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-300">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
