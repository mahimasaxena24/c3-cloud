import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Cloud & VPS', path: '/cloud-vps' },
  { label: 'Business Solutions', path: '/business-solutions' },
  { label: 'Hosting', path: '/hosting' },
  { label: 'Security & Backup', path: '/security-backup' },
  { label: 'Infrastructure', path: '/infrastructure' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-navy-100 bg-white/90 shadow-sm backdrop-blur-xl'
          : 'border-b border-transparent bg-white/60 backdrop-blur-md'
      }`}
    >
      <nav className="container-base flex h-16 items-center justify-between sm:h-[68px]">
        <Link to="/" aria-label="C3 Cloud home" className="flex-shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-navy-50 text-navy-900'
                    : 'text-navy-600 hover:bg-navy-50 hover:text-navy-900'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <span className="flex items-center gap-1.5 text-xs font-medium text-navy-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            All systems operational
          </span>
          <Link to="/contact" className="btn-primary">
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 transition-colors hover:bg-navy-50 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-navy-100 bg-white transition-[max-height,opacity] duration-300 xl:hidden ${
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-base flex flex-col gap-0.5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-navy-50 text-navy-900'
                    : 'text-navy-700 hover:bg-navy-50'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-3">
            <Link to="/contact" className="btn-primary w-full">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
