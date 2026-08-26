import { Calculator, BookUser, LayoutGrid, Server, MonitorCheck, Users, DatabaseBackup, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const FEATURES = [
  { icon: Calculator, label: 'Tally on Cloud' },
  { icon: BookUser, label: 'BUSY on Cloud' },
  { icon: LayoutGrid, label: 'Marg ERP on Cloud' },
  { icon: Server, label: 'ERP Hosting' },
  { icon: MonitorCheck, label: 'Secure Remote Access' },
  { icon: Users, label: 'Multi-user Access' },
  { icon: DatabaseBackup, label: 'Backup & Disaster Recovery' },
];

export default function TallyERP() {
  return (
    <section id="erp" className="section-pad relative overflow-hidden bg-navy-50/40">
      <div className="container-base relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual / dashboard illustration */}
          <Reveal className="order-2 lg:order-1">
            <DashboardVisual />
          </Reveal>

          {/* Content */}
          <Reveal delay={100} className="order-1 lg:order-2">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Business Applications
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">
              Run Your Business Applications in the Cloud
            </h2>
            <p className="mt-5 text-navy-600">
              Host your ERP, accounting and business tools on secure, high-performance cloud
              infrastructure. Access from anywhere, collaborate in real time, and never worry
              about server maintenance again.
            </p>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <Reveal
                  as="li"
                  key={f.label}
                  delay={i * 50}
                  className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-3.5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <f.icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-sm font-medium text-navy-800">{f.label}</span>
                </Reveal>
              ))}
            </ul>

            <Link to="/contact" className="btn-blue mt-8">
              Move Your ERP to Cloud
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DashboardVisual() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-navy-100 bg-white p-4 shadow-xl shadow-navy-900/10 sm:p-5">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-navy-100 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-2 font-mono text-xs text-navy-400">c3cloud — workstation</span>
        </div>

        {/* Dashboard content */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {/* Sidebar */}
          <div className="flex flex-col gap-1.5 rounded-lg bg-navy-50 p-3">
            {['Dashboard', 'Apps', 'Users', 'Backup', 'Reports'].map((item, i) => (
              <div
                key={item}
                className={`rounded-md px-2 py-1.5 text-[10px] font-medium ${
                  i === 0 ? 'bg-navy-900 text-white' : 'text-navy-600'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main panel */}
          <div className="col-span-2 flex flex-col gap-3">
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { l: 'Uptime', v: '99.9%' },
                { l: 'Users', v: '24' },
                { l: 'Apps', v: '7' },
              ].map((c) => (
                <div key={c.l} className="rounded-lg border border-navy-100 p-2.5">
                  <p className="font-mono text-[9px] font-medium uppercase text-navy-400">{c.l}</p>
                  <p className="mt-0.5 text-sm font-bold text-navy-900">{c.v}</p>
                </div>
              ))}
            </div>

            {/* App list */}
            <div className="rounded-lg border border-navy-100 p-3">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-wide text-navy-400">Running Applications</p>
              <div className="mt-2 flex flex-col gap-1.5">
                {['Tally Prime', 'BUSY', 'Marg ERP', 'Zimbra Mail'].map((app, i) => (
                  <div key={app} className="flex items-center justify-between rounded-md bg-navy-50/60 px-2.5 py-1.5">
                    <span className="text-[11px] font-medium text-navy-700">{app}</span>
                    <span className="flex items-center gap-1 text-[9px] font-medium text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-blink" style={{ animationDelay: `${i * 0.2}s` }} />
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity bar */}
            <div className="rounded-lg border border-navy-100 p-3">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-wide text-navy-400">Resource Usage</p>
              <div className="mt-2 flex flex-col gap-2">
                {[
                  { l: 'CPU', w: '62%' },
                  { l: 'Memory', w: '48%' },
                  { l: 'Storage', w: '73%' },
                ].map((r) => (
                  <div key={r.l}>
                    <div className="flex justify-between font-mono text-[9px] text-navy-500">
                      <span>{r.l}</span>
                      <span>{r.w}</span>
                    </div>
                    <div className="mt-0.5 h-1.5 overflow-hidden rounded-full bg-navy-100">
                      <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-accent-400" style={{ width: r.w }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -right-3 -top-3 hidden rounded-xl border border-navy-100 bg-white p-3 shadow-lg sm:block">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <Check className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-bold text-navy-900">All Systems</p>
            <p className="text-[10px] text-emerald-600">Operational</p>
          </div>
        </div>
      </div>
    </div>
  );
}
