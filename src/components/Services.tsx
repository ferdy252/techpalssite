import { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Settings, ClipboardList, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [, setHoveredCard] = useState<number | null>(null);

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

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.000]
      }
    })
  };

  // Feature item animation variants
  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

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
    <section ref={sectionRef} className="relative pt-20 lg:pt-28 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center relative mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 mb-8 group hover:scale-105 transition-transform duration-300"
          >
            <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold text-sm tracking-wider uppercase">
              Our Services
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600/40 to-indigo-600/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </span>
          </motion.div>

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Making Technology
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100/50 -rotate-1" />
              </span>{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Easy For You
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-100/50 rotate-1" />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Simple solutions for all your tech needs. We handle the complexity, so you don't have to.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`
                group relative 
                bg-white/90 backdrop-blur-xl
                p-8 rounded-3xl
                border border-gray-100/50
                shadow-lg hover:shadow-2xl
                transition-all duration-500
                hover:border-transparent
                hover:bg-gradient-to-b hover:from-white hover:to-gray-50/90
                transform-gpu
                hover:-translate-y-2
              `}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Service icon and title section */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`
                    bg-gradient-to-br ${service.gradient}
                    w-16 h-16 rounded-xl
                    flex items-center justify-center mb-6
                    shadow-lg
                  `}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </motion.div>

                <h3 className="text-xl font-semibold mb-6">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </h3>

                {/* Features list */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      custom={idx}
                      variants={featureVariants}
                      className={`
                        flex items-center p-3 rounded-xl
                        transition-all duration-300
                        hover:bg-white/80
                        group/item
                        backdrop-blur-sm
                        border border-transparent
                        hover:border-gray-100/50
                        hover:shadow-sm
                        transform-gpu
                        hover:translate-x-1
                      `}
                    >
                      <feature.icon className={`
                        w-5 h-5 mr-3
                        transition-colors duration-300
                        ${service.gradient.includes('blue') 
                          ? 'text-blue-500' 
                          : service.gradient.includes('purple')
                            ? 'text-purple-500'
                            : 'text-indigo-500'
                        }
                      `} />
                      <span className="text-gray-600 group-hover/item:text-gray-900">
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Call to action link */}
                <motion.a
                  href={service.path}
                  whileHover={{ x: 5 }}
                  className="
                    inline-flex items-center 
                    px-4 py-2 rounded-lg
                    text-gray-600 hover:text-gray-900
                    hover:bg-gray-50/80
                    transition-all duration-300
                    group/link
                  "
                >
                  <span className="font-medium relative">
                    Learn more
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </motion.a>
              </div>

              {/* Background gradient effect */}
              <div className={`
                absolute -right-12 -bottom-12
                w-40 h-40
                bg-gradient-to-br ${service.gradient}
                rounded-full opacity-0 group-hover:opacity-10
                transform scale-0 group-hover:scale-100
                transition-all duration-700
                blur-2xl
              `}/>
            </motion.div>
          ))}
        </div>

        {/* View all services button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex items-center px-8 py-4
              bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600
              text-white font-medium rounded-full
              shadow-xl shadow-blue-500/20
              hover:shadow-2xl hover:shadow-blue-500/30
              transition-all duration-300
              relative overflow-hidden
              group
            "
          >
            <span className="relative z-10 flex items-center">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;