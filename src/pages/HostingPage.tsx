import { Globe, Mail, MonitorCheck, Server, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import FinalCTA from '@/components/FinalCTA';

const SERVICES = [
  { icon: Globe, title: 'cPanel Web Hosting', desc: 'Straightforward web hosting for business websites and online services.', points: ['Managed hosting environment', 'Practical website operations', 'Business-ready support'] },
  { icon: Server, title: 'Plesk Web Hosting', desc: 'Plesk-based hosting environments for teams and web professionals.', points: ['Flexible hosting management', 'Organized application hosting', 'Operational support'] },
  { icon: Mail, title: 'Zimbra Email / Mail Hosting', desc: 'Professional email infrastructure for businesses.', points: ['Business email access', 'Collaboration-ready environment', 'Reliable mail operations'] },
  { icon: MonitorCheck, title: 'TSplus Remote Desktop Solutions', desc: 'Secure remote desktop access for your business applications.', points: ['Remote application access', 'Distributed team support', 'Centralized business workflows'] },
];

export default function HostingPage() {
  return <>
    <PageHero eyebrow="Hosting & Remote Access" title="Hosting That Keeps Your Team Connected" description="From business websites and professional email to remote desktop access, choose hosting that supports the way your business operates."><Link to="/contact" className="btn-blue mt-8">Discuss Your Hosting Requirement <ArrowRight className="h-4 w-4" /></Link></PageHero>
    <section className="section-pad bg-white"><div className="container-base"><SectionHeading eyebrow="Hosting Services" title="Modern hosting for the essentials of business" description="Clear, focused hosting services with the infrastructure and support behind them." /><div className="mt-14 grid gap-5 md:grid-cols-2">{SERVICES.map((service, i) => <Reveal key={service.title} delay={i * 80}><article className="group h-full rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-navy-900/5 sm:p-8"><div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-blue-400 group-hover:bg-blue-600 group-hover:text-white"><service.icon className="h-6 w-6" /></span><span className="font-mono text-sm text-navy-200">0{i + 1}</span></div><h3 className="mt-6 text-xl font-bold text-navy-900">{service.title}</h3><p className="mt-2 text-sm leading-relaxed text-navy-600">{service.desc}</p><ul className="mt-6 space-y-2.5">{service.points.map(point => <li key={point} className="flex items-center gap-2.5 text-sm text-navy-700"><CheckCircle2 className="h-4 w-4 text-blue-600" />{point}</li>)}</ul></article></Reveal>)}</div></div></section>
    <section className="section-pad bg-navy-900"><div className="container-base grid items-center gap-10 lg:grid-cols-2"><Reveal><span className="eyebrow !text-blue-400"><span className="h-1.5 w-1.5 rounded-full bg-current" />Remote access</span><h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Work securely from the office, home or on the move</h2><p className="mt-5 text-navy-200">Keep your people connected to the tools they need with hosting and remote access services designed around business continuity.</p></Reveal><Reveal delay={100}><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="mono-label !text-navy-400">Access overview</span><span className="text-xs font-medium text-emerald-400">Available</span></div><div className="mt-5 grid grid-cols-2 gap-3">{['Websites','Email','Applications','Remote teams'].map(item => <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white">{item}</div>)}</div></div></Reveal></div></section>
    <section className="section-pad bg-white"><div className="container-base"><FinalCTA /></div></section>
  </>;
}
