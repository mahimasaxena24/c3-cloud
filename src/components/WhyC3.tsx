import { Layers, SlidersHorizontal, Headphones, ShieldCheck, Building2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const FEATURES = [
  { num: '01', icon: Layers, title: 'Infrastructure First', desc: 'Built around reliable compute, storage and networking.' },
  { num: '02', icon: SlidersHorizontal, title: 'Flexible Solutions', desc: 'From a single VPS to complete business infrastructure.' },
  { num: '03', icon: Headphones, title: 'Human Support', desc: 'Real technical assistance when you need it.' },
  { num: '04', icon: ShieldCheck, title: 'Security Focused', desc: 'Infrastructure designed with security and backup in mind.' },
  { num: '05', icon: Building2, title: 'Business Ready', desc: 'Solutions for ERP, hosting, remote work, applications and enterprise workloads.' },
];

export default function WhyC3() {
  return (
    <section id="why" className="section-pad bg-navy-50/40">
      <div className="container-base">
        <SectionHeading
          eyebrow="Why C3 Cloud"
          title="Why Businesses Choose C3 Cloud"
          description="We focus on what matters most — reliable infrastructure, real support and solutions that fit your business."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.num}
              delay={i * 70}
              className={i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5 sm:p-7">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 to-accent-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-blue-400">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-3xl font-bold text-navy-100 transition-colors duration-300 group-hover:text-blue-100">
                    {f.num}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
