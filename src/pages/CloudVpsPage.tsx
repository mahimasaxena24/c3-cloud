import { Boxes, Cloud, Cpu, HardDrive, Server, Settings2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import FinalCTA from '@/components/FinalCTA';

const SERVICES = [
  { icon: Server, title: 'VPS', desc: 'Flexible virtual private servers for websites, applications and everyday business workloads.' },
  { icon: Cloud, title: 'Cloud Servers', desc: 'Scalable cloud compute designed around your resource, performance and availability needs.' },
  { icon: Boxes, title: 'Virtual Machines', desc: 'Isolated virtual machines with configurable resources for business and development workloads.' },
  { icon: Cpu, title: 'Scalable Resources', desc: 'Adjust compute and memory as your business changes without rebuilding your environment.' },
  { icon: HardDrive, title: 'High-Performance Storage', desc: 'Reliable storage foundations for applications, databases and critical business data.' },
  { icon: Settings2, title: 'Managed Infrastructure', desc: 'Practical support for setup, operations, monitoring and ongoing infrastructure management.' },
];

export default function CloudVpsPage() {
  return (
    <>
      <PageHero eyebrow="Cloud & VPS" title="Cloud Infrastructure That Scales With Your Business" description="Deploy the compute, storage and virtual infrastructure your business needs today, with room to grow tomorrow.">
        <Link to="/contact" className="btn-blue mt-8">Get a Cloud Quote <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>
      <section className="section-pad bg-white">
        <div className="container-base">
          <SectionHeading eyebrow="Cloud Foundations" title="Reliable resources for every workload" description="From a focused VPS to managed cloud infrastructure, choose a foundation that fits the way your team works." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => <Reveal key={service.title} delay={i * 60}><div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-navy-900/5"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white"><service.icon className="h-6 w-6" /></span><h3 className="mt-5 text-lg font-bold text-navy-900">{service.title}</h3><p className="mt-2 text-sm leading-relaxed text-navy-600">{service.desc}</p></div></Reveal>)}
          </div>
        </div>
      </section>
      <section className="section-pad bg-navy-50/40"><div className="container-base"><div className="grid items-center gap-10 lg:grid-cols-2"><Reveal><span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-current" />Built around your needs</span><h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Infrastructure for business and developer workloads</h2><p className="mt-5 text-navy-600">Whether you are running business applications, developing new products or hosting customer-facing services, C3 Cloud helps you build a dependable environment around the workload.</p><ul className="mt-7 grid gap-3 sm:grid-cols-2">{['Business applications','Developer workloads','Managed cloud operations','Flexible resource planning'].map(item => <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-navy-800"><CheckCircle2 className="h-4 w-4 text-blue-600" />{item}</li>)}</ul></Reveal><Reveal delay={100}><div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm"><div className="flex items-center justify-between border-b border-navy-100 pb-4"><span className="mono-label">Cloud environment</span><span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Ready</span></div><div className="mt-5 space-y-3">{['Compute', 'Virtualization', 'Storage', 'Managed access'].map((item, i) => <div key={item} className="flex items-center justify-between rounded-xl border border-navy-100 bg-navy-50/50 px-4 py-3"><span className="text-sm font-semibold text-navy-800">{item}</span><span className="font-mono text-xs text-blue-600">0{i + 1}</span></div>)}</div></div></Reveal></div></div></section>
      <section className="section-pad bg-white"><div className="container-base"><FinalCTA /></div></section>
    </>
  );
}
