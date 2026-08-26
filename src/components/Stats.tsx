import { Activity, Clock, HardDrive, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

const STATS = [
  { icon: Activity, value: '99.99%', label: 'Uptime' },
  { icon: Clock, value: '24×7', label: 'Monitoring & Support' },
  { icon: HardDrive, value: 'NVMe', label: 'High-Performance Storage' },
  { icon: ShieldCheck, value: 'Secure', label: 'Infrastructure' },
];

export default function Stats() {
  return (
    <section className="relative border-y border-navy-100 bg-white py-12 sm:py-14">
      <div className="container-base">
        <div className="grid grid-cols-2 divide-x divide-y divide-navy-100 rounded-2xl border border-navy-100 sm:grid-cols-4 sm:divide-y-0">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="flex flex-col items-center gap-3 p-6 text-center sm:p-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-blue-400">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-2xl font-bold text-navy-900 sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-navy-500 sm:text-sm">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
