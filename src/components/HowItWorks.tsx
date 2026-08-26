import { Search, PenTool, Rocket, ShieldCheck, Headphones } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const STEPS = [
  { num: '01', icon: Search, title: 'Understand', desc: 'We understand your workload and requirements.' },
  { num: '02', icon: PenTool, title: 'Design', desc: 'We design the right infrastructure for your business.' },
  { num: '03', icon: Rocket, title: 'Deploy', desc: 'Infrastructure is provisioned and configured.' },
  { num: '04', icon: ShieldCheck, title: 'Secure', desc: 'Security, backup and monitoring are configured.' },
  { num: '05', icon: Headphones, title: 'Manage', desc: 'We support and manage your infrastructure.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad bg-white">
      <div className="container-base">
        <SectionHeading
          eyebrow="How It Works"
          title="From Requirement to Running Infrastructure"
          description="A clear, proven process that takes you from idea to production — without surprises."
        />

        <div className="mt-16">
          {/* Desktop horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-[52px] h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
              <div className="grid grid-cols-5 gap-4">
                {STEPS.map((s, i) => (
                  <Reveal key={s.num} delay={i * 120} className="relative">
                    <div className="group flex flex-col items-center text-center">
                      <div className="relative z-10 flex h-[104px] w-[104px] items-center justify-center rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg">
                        <s.icon className="h-8 w-8 text-navy-700 transition-colors group-hover:text-blue-600" />
                        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 font-mono text-[10px] font-bold text-white">
                          {s.num}
                        </span>
                      </div>
                      <h3 className="mt-5 text-base font-bold text-navy-900">{s.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-navy-500">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="lg:hidden">
            <div className="relative flex flex-col gap-5 pl-4">
              <div className="absolute left-[26px] top-3 bottom-3 w-px bg-navy-200" />
              {STEPS.map((s, i) => (
                <Reveal key={s.num} delay={i * 80}>
                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-xl border border-navy-100 bg-white shadow-sm">
                      <s.icon className="h-6 w-6 text-navy-700" />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-navy-900 font-mono text-[9px] font-bold text-white">
                        {s.num}
                      </span>
                    </div>
                    <div className="flex-1 rounded-xl border border-navy-100 bg-navy-50/40 p-4">
                      <h3 className="text-base font-bold text-navy-900">{s.title}</h3>
                      <p className="mt-1 text-sm text-navy-500">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
