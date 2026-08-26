import { useState } from 'react';
import { Shield, FileText, RotateCcw, CreditCard, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import PoweredBy from '@/components/PoweredBy';

type LegalTab = 'privacy' | 'cancellation' | 'refund' | 'sla' | 'terms';

const TABS: { id: LegalTab; label: string; icon: typeof Shield }[] = [
  { id: 'privacy', label: 'Privacy Policy', icon: Shield },
  { id: 'cancellation', label: 'Cancellation', icon: FileText },
  { id: 'refund', label: 'Refund Policy', icon: CreditCard },
  { id: 'sla', label: 'SLA', icon: Clock },
  { id: 'terms', label: 'Terms & Conditions', icon: FileText },
];

const CONTENT: Record<LegalTab, { title: string; sections: { heading: string; body: string[] }[] }> = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Information We Collect',
        body: [
          'When you submit an enquiry or contact form, we collect your name, email address, phone number, company name and any message you provide.',
          'We do not collect sensitive personal data such as financial information or government IDs through our website forms.',
        ],
      },
      {
        heading: 'How We Use Your Information',
        body: [
          'Your contact information is used solely to respond to your enquiry, provide quotes and communicate about our services.',
          'We do not sell, rent or share your personal information with third parties for marketing purposes.',
        ],
      },
      {
        heading: 'Data Storage & Security',
        body: [
          'All enquiry submissions are stored securely in our database with row-level security policies.',
          'Access to submitted data is restricted to authorized personnel only. We do not expose enquiry data publicly.',
        ],
      },
      {
        heading: 'Your Rights',
        body: [
          'You may request access to, correction of, or deletion of your personal data at any time by contacting us at sewadartechnologies@sewadartech.com.',
          'You may opt out of future communications by replying with "unsubscribe" to any email from us.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'Our website does not use tracking cookies. We use essential browser storage only for site functionality.',
        ],
      },
    ],
  },
  cancellation: {
    title: 'Cancellation Policy',
    sections: [
      {
        heading: 'Service Cancellation by Customer',
        body: [
          'You may cancel any service by submitting a cancellation request to sewadartechnologies@sewadartech.com or through your account dashboard.',
          'Cancellations must be requested at least 7 days before your next billing cycle to avoid charges for that period.',
        ],
      },
      {
        heading: 'Effective Date of Cancellation',
        body: [
          'Cancellations take effect at the end of the current billing period. Services remain active until that date.',
          'Upon cancellation, your data will be retained for 30 days, after which it will be permanently deleted unless you request a backup.',
        ],
      },
      {
        heading: 'Cancellation by C3 Cloud',
        body: [
          'C3 Cloud reserves the right to cancel services in cases of violation of terms, non-payment or abusive usage.',
          'In such cases, customers will be notified with a minimum of 7 days notice to retrieve their data.',
        ],
      },
    ],
  },
  refund: {
    title: 'Refund Policy',
    sections: [
      {
        heading: 'Eligibility for Refunds',
        body: [
          'Refund requests must be submitted within 7 days of the initial service purchase for new subscriptions.',
          'Renewals and recurring billing are not eligible for refunds unless the service has experienced documented downtime exceeding our SLA.',
        ],
      },
      {
        heading: 'Refund Process',
        body: [
          'To request a refund, email sewadartechnologies@sewadartech.com with your account details and reason for the request.',
          'Approved refunds are processed within 10–15 business days to the original payment method.',
        ],
      },
      {
        heading: 'Non-Refundable Items',
        body: [
          'Setup fees, one-time configuration charges and custom infrastructure deployment costs are non-refundable.',
          'Services cancelled after the 7-day window are not eligible for prorated refunds.',
        ],
      },
      {
        heading: 'SLA-Based Credits',
        body: [
          'If we fail to meet our uptime SLA, eligible customers may receive service credits as compensation. See our SLA section for details.',
        ],
      },
    ],
  },
  sla: {
    title: 'Service Level Agreement (SLA)',
    sections: [
      {
        heading: 'Uptime Guarantee',
        body: [
          'C3 Cloud guarantees 99.9%+ infrastructure uptime for all managed services, excluding scheduled maintenance.',
          'Uptime is measured monthly and includes all critical infrastructure components (compute, storage, network).',
        ],
      },
      {
        heading: 'Scheduled Maintenance',
        body: [
          'Scheduled maintenance windows are communicated at least 48 hours in advance.',
          'Maintenance is performed during low-traffic periods to minimize impact.',
        ],
      },
      {
        heading: 'Support Response Times',
        body: [
          'Critical issues: Response within 1 hour, 24×7.',
          'High priority: Response within 4 business hours.',
          'Standard requests: Response within 24 hours.',
        ],
      },
      {
        heading: 'Service Credits',
        body: [
          'If uptime falls below 99.9% in a billing month, eligible customers receive a service credit of 10% of the monthly fee.',
          'Below 99.0%: 25% credit. Below 95.0%: 50% credit.',
          'Credits must be requested within 30 days of the incident and are applied to the next billing cycle.',
        ],
      },
      {
        heading: 'Exclusions',
        body: [
          'Downtime caused by customer misconfiguration, third-party services or force majeure events is excluded from SLA calculations.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      {
        heading: 'Acceptance of Terms',
        body: [
          'By using C3 Cloud services, you agree to these Terms & Conditions and our Privacy Policy.',
          'If you do not agree with any part of these terms, you may not use our services.',
        ],
      },
      {
        heading: 'Service Usage',
        body: [
          'Services are provided for legitimate business use. Customers must not use infrastructure for illegal activities, spam or activities that violate Indian law.',
          'C3 Cloud reserves the right to suspend services in case of suspected abuse or policy violations.',
        ],
      },
      {
        heading: 'Payment Terms',
        body: [
          'Services are billed in advance on a monthly or annual basis as selected at the time of purchase.',
          'Overdue accounts may be suspended after 7 days of non-payment. Data is retained for 30 days after suspension.',
        ],
      },
      {
        heading: 'Liability',
        body: [
          "C3 Cloud's liability for service interruptions is limited to the service credits defined in our SLA.",
          'We are not liable for indirect or consequential damages arising from service usage.',
        ],
      },
      {
        heading: 'Changes to Terms',
        body: [
          'C3 Cloud may update these terms from time to time. Customers will be notified of significant changes at least 30 days in advance.',
        ],
      },
    ],
  },
};

export default function LegalPage({ initialTab = 'privacy' }: { initialTab?: LegalTab }) {
  const [active, setActive] = useState<LegalTab>(initialTab);
  const content = CONTENT[active];

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={content.title}
        description="Legal policies and agreements for C3 Cloud services. Please review these documents carefully."
      >
        <div className="mt-4">
          <PoweredBy />
        </div>
      </PageHero>

      <section className="section-pad bg-white">
        <div className="container-base">
          <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
            {/* Tab sidebar */}
            <Reveal>
              <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`flex flex-shrink-0 items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      active === tab.id
                        ? 'bg-navy-900 text-white shadow-sm'
                        : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                    }`}
                  >
                    <tab.icon className="h-4 w-4 flex-shrink-0" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Content */}
            <Reveal delay={80}>
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-navy-900">{content.title}</h2>
                <p className="mt-2 text-xs text-navy-400">Last updated: January 2026</p>

                <div className="mt-8 flex flex-col gap-8">
                  {content.sections.map((section, i) => (
                    <div key={section.heading}>
                      <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900">
                        <span className="font-mono text-sm text-navy-300">{String(i + 1).padStart(2, '0')}</span>
                        {section.heading}
                      </h3>
                      <div className="mt-3 flex flex-col gap-2.5 pl-7">
                        {section.body.map((para, j) => (
                          <p key={j} className="text-sm leading-relaxed text-navy-600">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
