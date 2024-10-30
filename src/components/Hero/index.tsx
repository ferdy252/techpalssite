import React, { useState, useEffect } from 'react';
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
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Trust Banner */}
            <div 
              className={`inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 text-blue-600 hover:bg-blue-100 transition-all cursor-pointer group transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.2s', transitionDuration: '0.5s' }}
            >
              <Shield className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-semibold mr-2">Trusted by 10,000+ Happy Customers</span>
              <span className="flex items-center text-xs bg-blue-100 rounded-full px-2 py-0.5">
                ⭐️ 4.9/5 Rating
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Tech Support Made{' '}
              <span className="relative inline-block group">
                <span className="relative z-10 text-blue-600 inline-block group-hover:scale-110 transition-transform duration-300">
                  Simple
                </span>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 opacity-30 transform -rotate-1 group-hover:rotate-2 transition-transform"></div>
              </span>{' '}
              and{' '}
              <span className="relative inline-block group">
                <span className="relative z-10 text-blue-600 inline-block group-hover:scale-110 transition-transform duration-300">
                  Friendly
                </span>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 opacity-30 transform rotate-1 group-hover:-rotate-2 transition-transform"></div>
              </span>
            </h1>

            {/* Subheading */}
            <p 
              className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              Expert tech support and repairs for everyone, regardless of your tech knowledge.
              We're here to help you with all your device needs.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row justify-center gap-4 mb-16 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <button className="group relative bg-blue-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center text-lg font-semibold">
                Get Started
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="group relative bg-white text-blue-600 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-blue-600 flex items-center justify-center text-lg font-semibold">
                View Services
                <span className="ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all">→</span>
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white backdrop-blur-sm bg-opacity-80 p-8 rounded-2xl shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl border border-gray-100 hover:border-blue-100"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors mb-4">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center text-sm text-gray-500 transition-all duration-300 ${
                            hoveredFeature === index ? 'translate-x-2 opacity-100' : 'opacity-70'
                          }`}
                          style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                          <Shield className="h-4 w-4 mr-2 text-blue-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;