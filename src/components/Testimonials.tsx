import { Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    designation: 'IT Manager',
    company: 'Technology Services Company',
    quote:
      'Reliable infrastructure and responsive technical support have made managing our business applications much easier.',
    initials: 'RS',
  },
  {
    name: 'Ankit Verma',
    designation: 'Operations Head',
    company: 'Business Solutions Company',
    quote:
      'The deployment process was smooth and our team now has reliable access to our applications from anywhere.',
    initials: 'AV',
  },
  {
    name: 'Neeraj Gupta',
    designation: 'Technology Consultant',
    company: 'IT Solutions Company',
    quote:
      'C3 Cloud provides a flexible infrastructure solution that fits well with our business requirements.',
    initials: 'NG',
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-base">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Businesses"
          description="What business teams say about working with C3 Cloud."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5 sm:p-7">
                <div className="flex gap-0.5 text-blue-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-navy-600">
                  "{t.quote}"
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-navy-100 pt-5">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-blue-400">
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-navy-900">{t.name}</p>
                    <p className="truncate text-xs text-navy-500">
                      {t.designation}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
