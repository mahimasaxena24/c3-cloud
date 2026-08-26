import { Database, Network, Cpu, HardDrive, ShieldCheck, Building2, MonitorCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const FLOW = [
  { icon: Building2, label: 'Data Center', desc: 'Tier-grade facility with redundant power & cooling' },
  { icon: Network, label: 'Network', desc: 'High-speed, low-latency connectivity' },
  { icon: Cpu, label: 'Compute', desc: 'High-performance NVMe-backed servers' },
  { icon: HardDrive, label: 'Storage', desc: 'Redundant, scalable storage arrays' },
  { icon: ShieldCheck, label: 'Security', desc: 'Firewall, isolation & access control' },
  { icon: MonitorCheck, label: 'Customer Workloads', desc: 'Your applications, always available' },
];

const HIGHLIGHTS = [
  'High-performance servers',
  'High-speed networking',
  'Secure virtualization',
  'Redundant infrastructure',
  'Backup infrastructure',
  '24×7 monitoring',
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="section-pad relative overflow-hidden bg-navy-50/40">
      <div className="container-base relative">
        <SectionHeading
          eyebrow="Infrastructure"
          title="Your Workloads. Our Infrastructure."
          description="Built for workloads that cannot afford unreliable infrastructure."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-12">
          {/* Stack diagram */}
          <Reveal>
            <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="mono-label">Infrastructure Stack</span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-blink" />
                  Live
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                {FLOW.map((node, i) => (
                  <div key={node.label}>
                    <div className="group flex items-center gap-4 rounded-xl border border-navy-100 bg-navy-50/50 px-4 py-3.5 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/30">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900 text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <node.icon className="h-5 w-5" />
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-navy-900">{node.label}</p>
                        <p className="text-xs text-navy-500">{node.desc}</p>
                      </div>
                      <span className="font-mono text-xs text-navy-300">0{i + 1}</span>
                    </div>
                    {i < FLOW.length - 1 && (
                      <div className="flex justify-center py-0.5">
                        <div className="relative h-4 w-px bg-navy-200">
                          <div
                            className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-500"
                            style={{ animation: `flowDownLine 2s ease-in-out ${i * 0.3}s infinite` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <style>{`
                @keyframes flowDownLine {
                  0% { transform: translate(-50%, 0); opacity: 0; }
                  20% { opacity: 1; }
                  80% { opacity: 1; }
                  100% { transform: translate(-50%, 16px); opacity: 0; }
                }
              `}</style>
            </div>
          </Reveal>

          {/* Highlights */}
          <Reveal delay={120} className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Engineered for reliability at every layer
            </h3>
            <p className="mt-4 text-navy-600">
              From physical data center to your running application, every layer is designed with
              redundancy, performance and security as standard — not as add-ons.
            </p>
            <ul className="mt-8 flex flex-col gap-2.5">
              {HIGHLIGHTS.map((h, i) => (
                <Reveal
                  as="li"
                  key={h}
                  delay={i * 60}
                  className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-3.5 shadow-sm transition-colors hover:border-blue-200"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-navy-800">{h}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
