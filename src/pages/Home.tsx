import Hero from '../components/Hero/Hero';
import Process from '../components/Process';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div>
      <Hero />
      <Process />
      <Services />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;