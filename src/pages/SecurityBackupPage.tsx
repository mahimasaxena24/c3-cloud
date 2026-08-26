import { Activity, DatabaseBackup, Eye, Flame, Globe, Lock, RefreshCw, Server, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import FinalCTA from '@/components/FinalCTA';

const LAYERS = [
  { icon: Globe, label: 'Internet' },
  { icon: Flame, label: 'Firewall' },
  { icon: ShieldAlert, label: 'Network Security' },
  { icon: Server, label: 'Server / VM' },
  { icon: Lock, label: 'Applications' },
  { icon: DatabaseBackup, label: 'Backup & Recovery' },
];
const FEATURES = [{ icon: Flame, title: 'Firewall & Cyber Security', desc: 'Layered protection around your infrastructure and workloads.' }, { icon: DatabaseBackup, title: 'Backup', desc: 'Protect important data with dependable backup planning.' }, { icon: RefreshCw, title: 'Disaster Recovery', desc: 'Prepare for disruption with practical recovery strategies.' }, { icon: Eye, title: 'Monitoring', desc: 'Keep visibility across critical infrastructure and operations.' }, { icon: Activity, title: 'Business Continuity', desc: 'Support continued operations when conditions change.' }];

export default function SecurityBackupPage() {
  return <>
    <PageHero eyebrow="Security, Backup & Disaster Recovery" title="Protect Your Infrastructure. Protect Your Business." description="Security, monitoring, backup and recovery foundations that help your business stay prepared."><Link to="/contact" className="btn-blue mt-8">Protect My Infrastructure <ArrowRight className="h-4 w-4" /></Link></PageHero>
    <section className="section-pad bg-navy-900"><div className="container-base"><SectionHeading dark eyebrow="Security at Every Layer" title="Protection from the internet edge to recovery" description="A layered approach helps keep infrastructure, applications and business data protected." /><Reveal className="mx-auto mt-14 max-w-3xl"><div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7"><div className="flex flex-col gap-2">{LAYERS.map((layer, i) => <div key={layer.label}><div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400"><layer.icon className="h-5 w-5" /></span><span className="flex-1 text-sm font-bold text-white">{layer.label}</span><span className="font-mono text-xs text-navy-400">L{LAYERS.length - i}</span></div>{i < LAYERS.length - 1 && <div className="mx-auto h-4 w-px bg-gradient-to-b from-blue-400/60 to-white/10" />}</div>)}</div></div></Reveal></div></section>
    <section className="section-pad bg-white"><div className="container-base"><SectionHeading eyebrow="Business Protection" title="Your Infrastructure Can Fail. Your Business Doesn't Have To." description="Build a recovery-minded operating foundation around the systems your business depends on." /><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{FEATURES.map((feature, i) => <Reveal key={feature.title} delay={i * 60}><div className="h-full rounded-2xl border border-navy-100 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600"><feature.icon className="h-5 w-5" /></span><h3 className="mt-4 text-sm font-bold text-navy-900">{feature.title}</h3><p className="mt-2 text-xs leading-relaxed text-navy-600">{feature.desc}</p></div></Reveal>)}</div></div></section>
    <section className="section-pad bg-white pt-0"><div className="container-base"><FinalCTA /></div></section>
  </>;
}
