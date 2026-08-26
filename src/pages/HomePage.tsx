import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import AlwaysWithinReach from '@/components/AlwaysWithinReach';
import BusinessSolutions from '@/components/BusinessSolutions';
import Security from '@/components/Security';
import WhyC3 from '@/components/WhyC3';
import FinalCTA from '@/components/FinalCTA';
import TrustedBy from '@/components/TrustedBy';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <TrustedBy />
      <Services />
      <AlwaysWithinReach />
      <BusinessSolutions />
      <Security />
      <WhyC3 />
      <Testimonials />
      <section className="section-pad bg-white">
        <div className="container-base">
          <FinalCTA />
        </div>
      </section>
    </>
  );
}
