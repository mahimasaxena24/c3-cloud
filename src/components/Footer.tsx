import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const COLUMNS = [
  {
    title: 'Cloud & Infrastructure',
    links: [
      { label: 'Cloud & VPS', path: '/cloud-vps' },
      { label: 'Dedicated Servers', path: '/infrastructure' },
      { label: 'Virtual Machines', path: '/cloud-vps' },
      { label: 'Infrastructure Management', path: '/infrastructure' },
    ],
  },
  {
    title: 'Business Solutions',
    links: [
      { label: 'Tally on Cloud', path: '/business-solutions' },
      { label: 'BUSY on Cloud', path: '/business-solutions' },
      { label: 'Marg ERP', path: '/business-solutions' },
      { label: 'CRM Solutions', path: '/business-solutions' },
    ],
  },
  {
    title: 'Hosting',
    links: [
      { label: 'cPanel', path: '/hosting' },
      { label: 'Plesk', path: '/hosting' },
      { label: 'Zimbra', path: '/hosting' },
      { label: 'TSplus', path: '/hosting' },
    ],
  },
  {
    title: 'Security',
    links: [
      { label: 'Cyber Security', path: '/security-backup' },
      { label: 'Firewall', path: '/security-backup' },
      { label: 'Backup', path: '/security-backup' },
      { label: 'Disaster Recovery', path: '/security-backup' },
    ],
  },
];

const COMPANY_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy Policy', path: '/legal?page=privacy' },
  { label: 'Terms & Conditions', path: '/legal?page=terms' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950 pt-14 pb-6">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid-dark"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, black 20%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, black 20%, transparent 90%)',
        }}
        aria-hidden="true"
      />
      <div className="container-base relative">
        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <Logo variant="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-300">
              Cloud, data center and managed IT infrastructure solutions for modern businesses.
            </p>

            {/* Contact info */}
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:sewadartechnologies@sewadartech.com"
                  className="flex items-start gap-2.5 text-navy-300 transition-colors hover:text-blue-400"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                  sewadartechnologies@sewadartech.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918882909391"
                  className="flex items-start gap-2.5 text-navy-300 transition-colors hover:text-blue-400"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                  +91 88829 09391
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-navy-300">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                <span>
                  C-81/2, SF, C Block, Bhajanpura,<br />
                  Wazirabad Main Road, Near Market,<br />
                  New Delhi, Delhi - 110053
                </span>
              </li>
            </ul>
          </div>

          {/* Service link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-1 text-sm text-navy-300 transition-colors hover:text-blue-400"
                    >
                      <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company links bar */}
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-navy-400">
            Company
          </span>
          {COMPANY_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-xs text-navy-400 transition-colors hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 sm:flex-row">
          <p className="text-xs text-navy-400">© 2026 C3 Cloud. All rights reserved.</p>
          <p className="text-xs text-navy-500">
            C3 Cloud, Powered by{' '}
            <span className="font-medium text-blue-400">Sewadar Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
