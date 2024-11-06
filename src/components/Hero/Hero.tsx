import { useState, useEffect } from 'react';
import TrustBanner from './TrustBanner';
import MainHeading from './MainHeading';
import Subheading from './Subheading';
import CTAButtons from './CTAButtons';
import FeatureCard from './FeatureCard';
import TrustIndicators from './TrustIndicators';
import { Shield, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Expert Support',
    description: 'Professional technicians ready to solve any tech issue',
    features: ['Certified Technicians', '24/7 Availability', 'Remote Support']
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Same-day service for urgent tech problems',
    features: ['Same-day Service', 'Priority Support', 'Fast Resolution']
  },
  {
    icon: Award,
    title: 'Satisfaction Guaranteed',
    description: "We ensure you're happy with our service",
    features: ['Money-back Guarantee', 'Follow-up Support', 'Quality Assurance']
  }
];

const Hero = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative pt-24 pb-8 md:pb-12">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <TrustBanner isVisible={isVisible} />
            <MainHeading isVisible={isVisible} />
            <Subheading isVisible={isVisible} />
            <CTAButtons isVisible={isVisible} />
          </div>

          {/* Features Grid */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                isHovered={hoveredFeature === index}
                onHover={() => setHoveredFeature(index)}
                onLeave={() => setHoveredFeature(null)}
              />
            ))}
          </div>

          <TrustIndicators isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
};

export default Hero;