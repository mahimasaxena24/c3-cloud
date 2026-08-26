import { Globe, Flame, ShieldAlert, Boxes, Server, DatabaseBackup, Lock, Eye, Activity, RefreshCw } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const LAYERS = [
  { icon: Globe, label: 'Internet', desc: 'External traffic entry point' },
  { icon: Flame, label: 'Firewall', desc: 'Packet filtering & threat blocking' },
  { icon: ShieldAlert, label: 'Network Security', desc: 'IDS/IPS & DDoS protection' },
  { icon: Boxes, label: 'Virtualization Security', desc: 'Tenant isolation & hypervisor hardening' },
  { icon: Server, label: 'Server Security', desc: 'Hardening, patching & access control' },
  { icon: DatabaseBackup, label: 'Backup', desc: 'Encrypted, automated backups' },
];

const FEATURES = [
  { icon: Flame, label: 'Firewall Protection' },
  { icon: Lock, label: 'Access Control' },
  { icon: Server, label: 'Server Security' },
  { icon: DatabaseBackup, label: 'Backup' },
  { icon: Eye, label: 'Monitoring' },
  { icon: RefreshCw, label: 'Disaster Recovery' },
];

export default function Security() {
  return (
    <section id="security" className="section-pad relative overflow-hidden bg-navy-900">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid-dark"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 90%)',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" aria-hidden="true" />

      <div className="container-base relative">
        <SectionHeading
          dark
          eyebrow="Security"
          title="Security at Every Layer"
          description="From the internet edge to your stored data, every layer of your infrastructure is protected."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Layered viz */}
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-navy-400">Security Stack</span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-blink" />
                  Protected
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                {LAYERS.map((layer, i) => (
                  <div key={layer.label}>
                    <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.08]">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                        <layer.icon className="h-5 w-5" />
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-white">{layer.label}</p>
                        <p className="text-xs text-navy-300">{layer.desc}</p>
                      </div>
                      <span className="font-mono text-xs text-navy-400">L{LAYERS.length - i}</span>
                    </div>
                    {i < LAYERS.length - 1 && (
                      <div className="flex justify-center py-0.5">
                        <div className="relative h-4 w-px bg-gradient-to-b from-white/20 to-white/5">
                          <div
                            className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                            style={{ animation: `secFlow 2s ease-in-out ${i * 0.3}s infinite` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <style>{`
                @keyframes secFlow {
                  0% { transform: translate(-50%, 0); opacity: 0; }
                  20% { opacity: 1; }
                  80% { opacity: 1; }
                  100% { transform: translate(-50%, 16px); opacity: 0; }
                }
              `}</style>
            </div>
          </Reveal>

          {/* Features grid */}
          <Reveal delay={120} className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Defense in depth, by default
            </h3>
            <p className="mt-4 text-navy-200">
              Security isn't a single product — it's a layered strategy. C3 Cloud applies protection
              at every level of the stack so threats are stopped before they reach your workloads.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <Reveal
                  as="div"
                  key={f.label}
                  delay={i * 60}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-all hover:border-blue-400/30 hover:bg-white/[0.08]"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                    <f.icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-sm font-medium text-white">{f.label}</span>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
