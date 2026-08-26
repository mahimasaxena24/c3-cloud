import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, Building2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import EnquiryForm from '@/components/EnquiryForm';

const SALES_NUMBERS = [
  { display: '+91 88829 09391', tel: '+918882909391' },
  { display: '+91 82875 95188', tel: '+918287595188' },
  { display: '+91 88108 65448', tel: '+918810865448' },
];

const EMAILS = [
  { display: 'sewadartechnologies@sewadartech.com', href: 'mailto:sewadartechnologies@sewadartech.com', label: 'General' },
  { display: 'sales@sewadartech.com', href: 'mailto:sales@sewadartech.com', label: 'Sales' },
  { display: 'support@sewadartech.com', href: 'mailto:support@sewadartech.com', label: 'Support' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Your Infrastructure"
        description="Whether you need a VPS, dedicated server, ERP cloud, secure remote desktop or complete IT infrastructure — C3 Cloud can help."
      />

      {/* Contact info cards */}
      <section className="bg-white pb-12 sm:pb-16">
        <div className="container-base">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Address */}
            <Reveal>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-blue-400">
                  <MapPin className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy-400">Address</p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-navy-800">
                  C-81/2, SF, C Block, Bhajanpura,<br />
                  Wazirabad Main Road, Near Market,<br />
                  New Delhi, Delhi - 110053
                </p>
              </div>
            </Reveal>

            {/* Email */}
            <Reveal delay={70}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-blue-400">
                  <Mail className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy-400">Email</p>
                <ul className="mt-2 space-y-1.5">
                  {EMAILS.map((e) => (
                    <li key={e.href}>
                      <a href={e.href} className="block text-sm font-medium text-navy-700 transition-colors hover:text-blue-600">
                        {e.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Sales numbers */}
            <Reveal delay={140}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-blue-400">
                  <Phone className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy-400">Sales</p>
                <ul className="mt-2 space-y-1.5">
                  {SALES_NUMBERS.map((n) => (
                    <li key={n.tel}>
                      <a href={`tel:${n.tel}`} className="block text-sm font-medium text-navy-700 transition-colors hover:text-blue-600">
                        {n.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Support hours */}
            <Reveal delay={210}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-blue-400">
                  <Clock className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy-400">Support</p>
                <p className="mt-1 text-sm font-bold text-navy-900">24×7 Monitoring</p>
                <p className="mt-1 text-xs text-navy-500">Critical infrastructure support</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form + Location visual */}
      <section className="section-pad bg-navy-50/40">
        <div className="container-base">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Form */}
            <Reveal>
              <EnquiryForm
                formType="contact"
                title="Send an Enquiry"
                description="Tell us about your infrastructure requirements and our team will get back to you."
              />
            </Reveal>

            {/* Location visual */}
            <Reveal delay={100}>
              <div className="flex h-full flex-col gap-6">
                {/* Location card */}
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-navy-900">C3 Cloud Office</h3>
                      <p className="text-xs text-navy-500">New Delhi, India</p>
                    </div>
                  </div>
                  <div className="mt-5 rounded-xl border border-navy-100 bg-navy-50/50 p-4">
                    <p className="text-sm leading-relaxed text-navy-700">
                      C-81/2, SF, C Block, Bhajanpura,<br />
                      Wazirabad Main Road, Near Market,<br />
                      New Delhi, Delhi - 110053
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bhajanpura+Wazirabad+Main+Road+New+Delhi+110053"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    View on Google Maps
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Stylized map area */}
                <div className="relative flex-1 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
                  <div className="absolute inset-0 bg-dot-grid opacity-60" aria-hidden="true" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                    <span className="relative flex h-14 w-14 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
                      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                        <MapPin className="h-6 w-6" />
                      </span>
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy-900">Bhajanpura, New Delhi</p>
                      <p className="mt-1 text-xs text-navy-500">Wazirabad Main Road, Delhi - 110053</p>
                    </div>
                  </div>
                  {/* Decorative route lines */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M10 80 Q40 60 50 50" stroke="#bfdbfe" strokeWidth="0.5" strokeDasharray="2 2" />
                    <path d="M90 20 Q60 40 50 50" stroke="#bfdbfe" strokeWidth="0.5" strokeDasharray="2 2" />
                    <path d="M90 85 Q70 65 50 50" stroke="#bfdbfe" strokeWidth="0.5" strokeDasharray="2 2" />
                  </svg>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
