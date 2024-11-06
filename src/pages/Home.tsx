import Hero from '../components/Hero/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - Keep original padding */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Services Section - Adjust spacing */}
      <div className="relative z-20 -mt-8 md:-mt-16">
        <Services />
      </div>

      {/* Process Section - Adjust spacing */}
      <div className="relative z-20 -mt-8 md:-mt-16">
        <Process />
      </div>

      {/* Testimonials Section - Adjust spacing */}
      <div className="relative z-20 -mt-8 md:-mt-16">
        <Testimonials />
      </div>

      {/* Call to Action - Adjust spacing */}
      <div className="relative z-20 pt-8 md:pt-16">
        <CallToAction />
      </div>
    </div>
  );
};

export default Home;