import { MessageSquare, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function FinalCTA() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-dot-grid-dark"
          style={{
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)',
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" aria-hidden="true" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center">
          <span className="eyebrow !text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Get Started
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
            Let's Build Your Infrastructure
          </h2>
          <p className="mt-5 max-w-2xl text-base text-navy-200 sm:text-lg">
            Whether you need a VPS, dedicated server, ERP cloud, secure remote desktop or
            complete IT infrastructure — C3 Cloud can help.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-blue">
              <MessageSquare className="h-4 w-4" />
              Talk to an Expert
            </Link>
            <Link to="/contact" className="btn-dark-secondary">
              <FileText className="h-4 w-4" />
              Get a Custom Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
