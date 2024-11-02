import { useState, useEffect, useRef } from 'react';
import {
  Monitor,
  Smartphone,
  Settings,
  MessageSquare,
  ArrowRight,
  Zap,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Monitor,
      title: 'Tech Support',
      description: 'Expert remote and on-site support for all your devices',
      features: ['24/7 Support', 'Remote Access', 'Quick Resolution'],
      color: 'blue',
      link: '/services/tech-support'
    },
    {
      icon: Smartphone,
      title: 'Device Repair',
      description: 'Professional repair services for phones, tablets, and laptops',
      features: ['Same-Day Service', 'Genuine Parts', 'Warranty Included'],
      color: 'indigo',
      link: '/services/device-repair'
    },
    {
      icon: Settings,
      title: 'Setup & Installation',
      description: 'Complete device setup and software installation services',
      features: ['Data Transfer', 'Network Setup', 'Software Updates'],
      color: 'violet',
      link: '/services/setup'
    },
    {
      icon: MessageSquare,
      title: 'Tech Consultation',
      description: 'Expert advice on technology solutions and purchases',
      features: ['Personalized Plans', 'Budget Options', 'Future-Proof Solutions'],
      color: 'purple',
      link: '/services/consultation'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" id="services">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Professional Tech Services
            </h2>
            <p className="text-xl text-gray-600">
              Expert solutions for all your technology needs
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className={`h-full bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                activeService === index 
                  ? 'shadow-xl scale-105 ring-2 ring-offset-2 ring-blue-400' 
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}>
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 group-hover:text-gray-900 transition-colors">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx}
                        className={`flex items-center text-sm text-gray-600 transition-all duration-300 ${
                          activeService === index ? 'translate-x-2' : ''
                        }`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <CheckCircle className={`h-4 w-4 mr-2 text-${service.color}-500`} />
                        <span className="group-hover:text-gray-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="absolute bottom-6 right-6 transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '800ms' }}>
          <Link
            to="/services"
            className="group relative inline-flex items-center px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-200 animate-gradient-x rounded-full"></div>
            <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400"></div>
            <span className="relative z-10 text-white font-medium mr-2">View All Services</span>
            <span className="relative z-10 transform transition-all duration-300 ease-out group-hover:translate-x-1">
              <ArrowRight className="w-5 h-5 text-white" />
              <ArrowRight className="w-5 h-5 text-white/30 absolute top-0 left-0 opacity-0 -translate-x-1 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300 ease-out" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;