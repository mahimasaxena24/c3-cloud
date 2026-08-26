import { DatabaseBackup, Copy, RotateCcw, Infinity as InfinityIcon, Server, RefreshCw, Activity, ClipboardCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const PIPELINE = [
  { icon: DatabaseBackup, label: 'Backup', desc: 'Scheduled, encrypted backups of critical data.' },
  { icon: Copy, label: 'Replication', desc: 'Real-time replication to secondary infrastructure.' },
  { icon: RotateCcw, label: 'Recovery', desc: 'Rapid restoration with minimal downtime.' },
  { icon: InfinityIcon, label: 'Business Continuity', desc: 'Keep operating, no matter what happens.' },
];

const ITEMS = [
  { icon: Server, label: 'Server Backup' },
  { icon: RefreshCw, label: 'Automated Backup' },
  { icon: RotateCcw, label: 'Disaster Recovery' },
  { icon: ClipboardCheck, label: 'Recovery Planning' },
  { icon: Copy, label: 'Infrastructure Replication' },
];

export default function BackupDR() {
  return (
    <section id="backup" className="section-pad bg-white">
      <div className="container-base">
        <SectionHeading
          eyebrow="Backup & Disaster Recovery"
          title={
            <>
              Your Infrastructure Can Fail.{' '}
              <span className="gradient-text">Your Business Doesn't Have To.</span>
            </>
          }
          description="Protect critical workloads with reliable backup and disaster recovery solutions designed for business continuity."
        />

        {/* Pipeline */}
        <Reveal className="mt-14">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PIPELINE.map((step, i) => (
              <Reveal key={step.label} delay={i * 90}>
                <div className="group relative h-full rounded-2xl border border-navy-100 bg-navy-50/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:bg-white hover:shadow-xl hover:shadow-navy-900/5">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 to-accent-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <step.icon className="h-7 w-7" />
                  </span>
                  <p className="mt-4 text-sm font-bold text-navy-900">{step.label}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-500">{step.desc}</p>
                  {i < PIPELINE.length - 1 && (
                    <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <ArrowRight className="h-5 w-5 text-navy-300" />
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Items + CTA */}
        <div className="mt-10 grid gap-8 rounded-2xl border border-navy-100 bg-navy-50/40 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Comprehensive protection</h3>
            <p className="mt-3 text-sm text-navy-600">
              Every critical component of your infrastructure is covered by a tested, reliable
              recovery strategy.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {ITEMS.map((item) => (
                <li key={item.label} className="flex items-center gap-2.5 rounded-lg bg-white p-3 shadow-sm">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-navy-800">{item.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex items-center gap-2 text-blue-600">
              <Activity className="h-5 w-5" />
              <span className="text-sm font-semibold">Business continuity, by design</span>
            </div>
            <Link to="/contact" className="btn-blue">
              Protect Your Infrastructure
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
