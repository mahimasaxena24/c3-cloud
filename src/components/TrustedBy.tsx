import Reveal from './Reveal';

const PARTNERS = [
  'CtrlS',
  'NxtGen',
  'ESDS',
  'Utho',
  'AceCloud',
  'Rapyder',
  'CloudIBN',
  'TeleGlobal',
];

export default function TrustedBy() {
  return (
    <section className="border-y border-navy-100 bg-navy-50/40 py-14">
      <div className="container-base">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Our Partners
          </span>
          <h2 className="mt-4 text-2xl font-bold text-navy-900 sm:text-3xl">
            Trusted by Leading Technology Companies
          </h2>
          <p className="mt-3 text-sm text-navy-500">
            Partnering with technology leaders to deliver reliable infrastructure solutions.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
            {PARTNERS.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center"
              >
                <span className="select-none text-base font-bold tracking-wide text-navy-300 transition-colors duration-300 hover:text-navy-600 sm:text-lg">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
