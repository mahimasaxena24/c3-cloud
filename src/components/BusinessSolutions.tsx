import { Rocket, Building2, Code2, Briefcase, Handshake, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const SOLUTIONS = [
  { icon: Rocket, title: 'Startups', desc: 'Cloud infrastructure without heavy upfront investment.', tag: '01' },
  { icon: Building2, title: 'SMEs', desc: 'Reliable infrastructure for ERP, accounting and everyday business applications.', tag: '02' },
  { icon: Code2, title: 'Developers', desc: 'Flexible VPS, VMs and DevOps infrastructure for development workloads.', tag: '03' },
  { icon: Briefcase, title: 'Enterprises', desc: 'Dedicated infrastructure, security, backup and managed operations.', tag: '04' },
  { icon: Handshake, title: 'IT Partners', desc: 'Infrastructure solutions for IT consultants, system integrators and technology partners.', tag: '05' },
];

export default function BusinessSolutions() {
  return (
    <section id="solutions" className="section-pad bg-white">
      <div className="container-base">
        <SectionHeading
          eyebrow="Business Solutions"
          title="Solutions for Every Stage of Your Business"
          description="Whether you're starting up or scaling enterprise workloads, C3 Cloud has the right infrastructure for you."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className={i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/5 sm:p-7">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 to-accent-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-blue-400">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-sm font-medium text-navy-200">{s.tag}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
