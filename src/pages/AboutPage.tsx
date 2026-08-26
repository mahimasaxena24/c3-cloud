import { ShieldCheck, Headphones, Layers, Building2, ArrowRight, CloudCog, DatabaseBackup } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import HowItWorks from '@/components/HowItWorks';
import PoweredBy from '@/components/PoweredBy';

const VALUES = [
  { icon: Layers, title: 'Infrastructure First', desc: 'Built around reliable compute, storage and networking — not afterthoughts.' },
  { icon: ShieldCheck, title: 'Security Focused', desc: 'Every solution is designed with security and backup as standard, not add-ons.' },
  { icon: Headphones, title: 'Human Support', desc: 'Real technical assistance from people who understand your business needs.' },
  { icon: Building2, title: 'Business Ready', desc: 'Solutions tailored for SMEs, enterprises, developers and IT partners.' },
];

const PILLARS = [
  { icon: CloudCog, title: 'Infrastructure', desc: 'Cloud servers, VPS, virtual machines and dedicated infrastructure for the workloads your business runs on.' },
  { icon: ShieldCheck, title: 'Security', desc: 'Firewall, monitoring, backup and disaster recovery designed to keep infrastructure and data protected.' },
  { icon: Headphones, title: 'Business Support', desc: 'Hands-on support and managed IT services that help teams operate without becoming infrastructure experts.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Cloud & IT Infrastructure for Modern Business"
        description="C3 Cloud is a cloud, data center and managed IT infrastructure provider focused on reliable, secure and scalable technology solutions for businesses."
      >
        <div className="mt-6">
          <PoweredBy />
        </div>
      </PageHero>

      {/* Who We Are / What We Do */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Who We Are
              </span>
              <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">
                A practical infrastructure partner for businesses
              </h2>
              <p className="mt-5 text-navy-600">
                C3 Cloud provides the compute, storage, network and security foundations that keep
                businesses running. From a single VPS to complete managed IT operations, we focus on
                dependable infrastructure and real human support.
              </p>
              <p className="mt-4 text-navy-600">
                We work with businesses that need infrastructure they can rely on — without the
                complexity and cost of building it themselves.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                What We Do
              </span>
              <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">
                Infrastructure, applications and operations
              </h2>
              <p className="mt-5 text-navy-600">
                We deliver cloud and VPS solutions, business application hosting, web and email
                hosting, remote access, security, backup and managed IT services — connected by a
                focus on reliability and business readiness.
              </p>
              <Link to="/contact" className="btn-blue mt-7">
                Talk to an Expert
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-pad bg-navy-50/40">
        <div className="container-base">
          <SectionHeading
            eyebrow="Our Approach"
            title="Reliability, security and support by default"
            description="The principles that guide every infrastructure decision we make."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-blue-400">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure / Security / Business Support pillars */}
      <section className="section-pad bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="What We Focus On"
            title="Three areas that matter most to your business"
            description="The foundations we build around, and the support we put behind them."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-navy-100 bg-navy-50/40 p-6 sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-blue-400">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* CTA */}
      <section className="section-pad bg-white pt-0">
        <div className="container-base">
          <div className="rounded-3xl bg-navy-900 px-6 py-14 text-center sm:px-12 sm:py-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to build your infrastructure?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-200">
              Let's discuss your requirements and design the right solution for your business.
            </p>
            <Link to="/contact" className="btn-blue mt-7">
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
