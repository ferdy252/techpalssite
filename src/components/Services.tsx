import { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Settings, ClipboardList, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  // Add stagger effect for cards
  const getStaggerDelay = (index: number) => `${index * 100}ms`;

  // Define the TypeScript interface first
  interface Service {
    title: string;
    icon: React.ElementType;
    gradient: string;
    iconColor: string;
    path: string;
    features: {
      text: string;
      icon: React.ElementType;
    }[];
  }

  // Define services array with proper typing
  const services: Service[] = [
    {
      title: 'Tech Support',
      icon: Monitor,
      gradient: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-50',
      path: '/services/tech-support',
      features: [
        { text: '24/7 Support', icon: CheckCircle },
        { text: 'Remote Access', icon: CheckCircle },
        { text: 'Quick Resolution', icon: CheckCircle }
      ]
    },
    {
      title: 'Device Repair',
      icon: Smartphone,
      gradient: 'from-indigo-500 to-indigo-600',
      iconColor: 'text-indigo-50',
      path: '/services/device-repair',
      features: [
        { text: 'Expert Diagnosis', icon: CheckCircle },
        { text: 'Quality Parts', icon: CheckCircle },
        { text: 'Warranty Service', icon: CheckCircle }
      ]
    },
    {
      title: 'Setup & Installation',
      icon: Settings,
      gradient: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-50',
      path: '/services/setup-installation',
      features: [
        { text: 'Professional Setup', icon: CheckCircle },
        { text: 'Network Config', icon: CheckCircle },
        { text: 'Software Install', icon: CheckCircle }
      ]
    },
    {
      title: 'Tech Consultation',
      icon: ClipboardList,
      gradient: 'from-blue-500 to-indigo-600',
      iconColor: 'text-blue-50',
      path: '/services/consultation',
      features: [
        { text: 'Expert Advice', icon: CheckCircle },
        { text: 'Custom Solutions', icon: CheckCircle },
        { text: 'Future Planning', icon: CheckCircle }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className={`text-center transform transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex items-center justify-center mb-4">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 font-semibold text-sm uppercase tracking-wider">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center">
            Professional Tech Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
            Expert solutions for all your technology needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                group bg-white p-8 rounded-xl
                shadow-lg hover:shadow-2xl
                transform transition-all duration-700 ease-out
                hover:scale-[1.02] hover:-translate-y-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                hover:bg-gradient-to-b hover:from-white hover:to-gray-50/50
                relative overflow-hidden
                flex flex-col
                border border-gray-100 hover:border-transparent
              `}
              style={{ transitionDelay: getStaggerDelay(index) }}
            >
              <div className={`
                relative
                bg-gradient-to-br ${service.gradient}
                w-16 h-16 rounded-xl 
                flex items-center justify-center mb-6
                transform transition-all duration-500
                group-hover:scale-110 group-hover:rotate-3
                group-hover:shadow-lg
                overflow-hidden
                animate-float
                before:absolute before:inset-0 
                before:bg-white/10 before:opacity-0 
                before:group-hover:opacity-100
                before:transition-opacity before:duration-300
              `}>
                <div className="
                  absolute inset-0 
                  bg-gradient-to-r from-white/0 via-white/20 to-white/0
                  translate-x-[-200%] group-hover:translate-x-[200%]
                  transition-transform duration-1000
                "/>
                <service.icon className={`
                  w-8 h-8 ${service.iconColor}
                  transform transition-all duration-500
                  group-hover:scale-110 group-hover:rotate-6
                `} />
              </div>

              <h3 className="
                text-xl font-semibold mb-4
                transform transition-all duration-300
                group-hover:translate-x-1
              ">
                <span className="
                  relative 
                  bg-gradient-to-r from-gray-900 to-gray-700
                  bg-clip-text text-transparent
                  inline-block
                ">
                  {service.title}
                  <span className="
                    absolute bottom-0 left-0 w-0 h-0.5
                    bg-gradient-to-r ${service.gradient}
                    transition-all duration-300 group-hover:w-full
                    opacity-60
                  "/>
                </span>
              </h3>

              <ul className="space-y-3 relative z-10 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`
                      flex items-center text-gray-600
                      p-3 rounded-lg
                      transition-all duration-300
                      transform
                      hover:bg-gray-50/80 hover:translate-x-2
                      hover:shadow-sm
                      group/item
                      ${hoveredCard === index ? 'translate-x-1' : ''}
                      backdrop-blur-sm
                    `}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    <feature.icon className={`
                      w-5 h-5 mr-3
                      transition-all duration-300
                      group-hover/item:scale-110
                      group-hover/item:rotate-6
                      ${service.gradient.includes('blue') 
                        ? 'text-blue-500 group-hover/item:text-blue-600' 
                        : service.gradient.includes('purple')
                          ? 'text-purple-500 group-hover/item:text-purple-600'
                          : 'text-indigo-500 group-hover/item:text-indigo-600'
                      }
                    `} />
                    <span className="
                      transition-all duration-300 
                      group-hover/item:text-gray-900
                      relative
                      after:absolute after:bottom-0 after:left-0 
                      after:w-0 after:h-px 
                      after:bg-gray-200
                      after:transition-all after:duration-300
                      group-hover/item:after:w-full
                    ">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 relative z-10">
                <a
                  href={service.path}
                  className="
                    inline-flex items-center
                    text-gray-600 hover:text-gray-900
                    transform transition-all duration-300
                    group/link
                    relative
                    overflow-hidden
                  "
                >
                  <span className="
                    relative
                    font-medium
                    after:absolute after:bottom-0 after:left-0
                    after:w-0 after:h-px
                    after:bg-gradient-to-r ${service.gradient}
                    after:transition-all after:duration-300
                    group-hover/link:after:w-full
                  ">
                    Explore {service.title}
                  </span>
                  <ArrowRight className="
                    w-4 h-4 ml-2
                    transform transition-all duration-300
                    group-hover/link:translate-x-1
                    opacity-60 group-hover/link:opacity-100
                  " />
                </a>
              </div>

              <div className={`
                absolute -right-12 -bottom-12
                w-40 h-40
                bg-gradient-to-br ${service.gradient}
                rounded-full
                opacity-0 group-hover:opacity-5
                transform scale-0 group-hover:scale-100
                transition-all duration-700
                blur-2xl
              `}/>
            </div>
          ))}
        </div>

        <div className={`
          text-center mt-16
          transform transition-all duration-700
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
          style={{ transitionDelay: '400ms' }}
        >
          <a
            href="/services"
            aria-label="View All Services"
            className="
              group relative inline-flex items-center 
              px-8 py-4 rounded-full 
              transition-all duration-500 
              hover:scale-105 overflow-hidden
              shadow-xl shadow-blue-600/20
              hover:shadow-2xl hover:shadow-blue-600/30
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              animate-shimmer
            "
          >
            <div className="
              absolute inset-0 
              bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 
              bg-[length:200%_100%] animate-gradient-x rounded-full
            "></div>
            <div className="
              absolute inset-0 rounded-full 
              opacity-50 group-hover:opacity-100 
              transition-opacity duration-300 
              blur-lg bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400
            "></div>
            <span className="
              relative z-10 text-white font-medium mr-2
              transform transition-all duration-300
              group-hover:translate-x-0.5
            ">
              View All Services
            </span>
            <span className="
              relative z-10 transform transition-all duration-300 
              ease-out group-hover:translate-x-1
              flex items-center
            ">
              <ArrowRight className="
                w-5 h-5 text-white
                transition-transform duration-300
                group-hover:scale-110
              " />
              <ArrowRight className="
                w-5 h-5 text-white/30 
                absolute top-0 left-0 
                opacity-0 -translate-x-1 
                group-hover:translate-x-1 group-hover:opacity-100 
                transition-all duration-300 ease-out
              " />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;