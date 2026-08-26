import {
  Cloud, Server, Boxes, Settings2,
  Calculator, LayoutGrid, Users, Globe,
  MonitorCheck, Mail, LayoutPanelTop, Server as ServerIcon,
  GitBranch, DatabaseBackup, ShieldCheck, Headphones,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

interface Service {
  name: string;
  desc: string;
  icon: LucideIcon;
}

interface Category {
  num: string;
  title: string;
  subtitle: string;
  accent: string;
  icon: LucideIcon;
  services: Service[];
}

const CATEGORIES: Category[] = [
  {
    num: '01',
    title: 'Cloud & Infrastructure',
    subtitle: 'Scalable compute, storage and network foundations',
    accent: 'blue',
    icon: Cloud,
    services: [
      { name: 'Cloud Server & VPS', desc: 'Scalable virtual servers with NVMe storage.', icon: Server },
      { name: 'Dedicated Servers', desc: 'Bare-metal performance for critical workloads.', icon: ServerIcon },
      { name: 'Virtual Machines', desc: 'Flexible VMs with custom resource allocation.', icon: Boxes },
      { name: 'Cloud Management', desc: 'End-to-end infrastructure orchestration.', icon: Settings2 },
    ],
  },
  {
    num: '02',
    title: 'Business Applications',
    subtitle: 'Run your ERP, CRM and tools on reliable cloud',
    accent: 'navy',
    icon: LayoutGrid,
    services: [
      { name: 'Tally, BUSY & Marg ERP', desc: 'Accounting & ERP hosted on cloud.', icon: Calculator },
      { name: 'ERP Implementation', desc: 'Full ERP deployment and hosting.', icon: LayoutGrid },
      { name: 'CRM Solutions', desc: 'Customer relationship platforms hosted.', icon: Users },
      { name: 'Website Development', desc: 'Build and host business websites.', icon: Globe },
    ],
  },
  {
    num: '03',
    title: 'Hosting & Remote Access',
    subtitle: 'Web hosting and remote desktop for teams',
    accent: 'cyan',
    icon: Globe,
    services: [
      { name: 'TSplus Remote Desktop', desc: 'Secure remote access for applications.', icon: MonitorCheck },
      { name: 'Zimbra Email Hosting', desc: 'Business-grade mail collaboration.', icon: Mail },
      { name: 'cPanel Web Hosting', desc: 'Managed cPanel hosting environments.', icon: LayoutPanelTop },
      { name: 'Plesk Web Hosting', desc: 'Plesk-based managed hosting stacks.', icon: ServerIcon },
    ],
  },
  {
    num: '04',
    title: 'Security, Backup & Operations',
    subtitle: 'Protection, recovery and managed operations',
    accent: 'emerald',
    icon: ShieldCheck,
    services: [
      { name: 'DevOps Solutions', desc: 'CI/CD, automation and infrastructure as code.', icon: GitBranch },
      { name: 'Backup & Disaster Recovery', desc: 'Automated backups and rapid recovery.', icon: DatabaseBackup },
      { name: 'Firewall & Cyber Security', desc: 'Layered protection for infrastructure.', icon: ShieldCheck },
      { name: 'Managed IT Services', desc: '24×7 monitoring and operations support.', icon: Headphones },
    ],
  },
];

const ACCENT_MAP: Record<string, { bg: string; text: string; border: string; ring: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'hover:border-blue-200', ring: 'group-hover:bg-blue-600 group-hover:text-white' },
  navy: { bg: 'bg-navy-50', text: 'text-navy-600', border: 'hover:border-navy-200', ring: 'group-hover:bg-navy-700 group-hover:text-white' },
  cyan: { bg: 'bg-accent-50', text: 'text-accent-600', border: 'hover:border-accent-200', ring: 'group-hover:bg-accent-500 group-hover:text-white' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'hover:border-emerald-200', ring: 'group-hover:bg-emerald-600 group-hover:text-white' },
};

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-base">
        <SectionHeading
          eyebrow="Our Services"
          title="Our IT & Cloud Services"
          description="Complete infrastructure and technology solutions for modern businesses."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {CATEGORIES.map((cat, ci) => {
            const a = ACCENT_MAP[cat.accent];
            return (
              <Reveal key={cat.title} delay={ci * 100}>
                <div className={`group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5 ${a.border} sm:p-7`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${a.bg} ${a.text} transition-colors duration-300 ${a.ring}`}>
                        <cat.icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-navy-900">{cat.title}</h3>
                        <p className="text-sm text-navy-500">{cat.subtitle}</p>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-medium text-navy-200">{cat.num}</span>
                  </div>

                  <div className="mt-6 h-px bg-navy-100" />

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {cat.services.map((s) => (
                      <li key={s.name}>
                        <div className="group/item flex h-full flex-col rounded-xl border border-navy-50 bg-navy-50/40 p-4 transition-all duration-300 hover:border-navy-200 hover:bg-white hover:shadow-md">
                          <div className="flex items-center gap-2.5">
                            <s.icon className={`h-[18px] w-[18px] flex-shrink-0 ${a.text}`} />
                            <span className="text-sm font-semibold text-navy-800">{s.name}</span>
                          </div>
                          <p className="mt-1.5 text-xs leading-relaxed text-navy-500">{s.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
