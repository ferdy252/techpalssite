import React, { useState, useEffect, useRef } from 'react';
import { PhoneCall, Wrench, CheckCircle, Clock, ArrowRight, ChevronRight, Shield, Award, Zap } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Contact Us',
    description: 'Reach out through our form, phone, or chat. Describe your tech issue and we will get back to you quickly.',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    details: ['24/7 Support Available', 'Multiple Contact Channels', 'Quick Response Time']
  },
  {
    icon: Clock,
    title: 'Schedule Service',
    description: 'Pick a time that works for you. We offer flexible scheduling including same-day service for urgent issues.',
    color: 'emerald',
    gradient: 'from-emerald-500 to-emerald-600',
    details: ['Same-Day Service', 'Flexible Hours', 'Weekend Availability']
  },
  {
    icon: Wrench,
    title: 'Get Expert Help',
    description: 'Our certified technicians will diagnose and fix your tech problems with clear communication throughout.',
    color: 'violet',
    gradient: 'from-violet-500 to-violet-600',
    details: ['Certified Technicians', 'Clear Communication', 'Transparent Pricing']
  },
  {
    icon: CheckCircle,
    title: 'Problem Solved',
    description: 'Get back to using your technology with confidence. We guarantee your satisfaction with our service.',
    color: 'indigo',
    gradient: 'from-indigo-500 to-indigo-600',
    details: ['Satisfaction Guaranteed', '30-Day Warranty', 'Follow-up Support']
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);

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

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={processRef} className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              How TechPals Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting help with your tech problems is easy with our streamlined four-step process
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-violet-100 to-indigo-100 rounded-full"></div>
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 transform origin-left transition-all duration-1000 rounded-full ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}>
              <div className="absolute inset-0 blur-md bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 opacity-50"></div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative group transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center text-lg font-bold transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 z-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                  <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {index + 1}
                  </span>
                </div>

                {/* Card */}
                <div className={`bg-white rounded-2xl p-6 shadow-md transition-all duration-500 transform hover:-translate-y-2 relative z-10 h-full ${
                  activeStep === index ? 'ring-2 ring-offset-2 ring-blue-400 shadow-xl' : ''
                }`}>
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-900 transition-colors">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li 
                          key={idx}
                          className={`flex items-center text-sm text-gray-600 transition-all duration-300 ${
                            activeStep === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-70'
                          }`}
                          style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                          <CheckCircle className={`h-4 w-4 mr-2 text-${step.color}-500 flex-shrink-0`} />
                          <span className="group-hover:text-gray-900 transition-colors">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-8 top-1/2 transform -translate-y-1/2 items-center justify-center z-30 w-16">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      {/* Arrow Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      
                      {/* Main Arrow */}
                      <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>

                      {/* Animated Arrow */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-50 transform group-hover:translate-x-1 transition-all duration-300 flex items-center justify-center">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className={`text-center mt-16 relative z-20 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '800ms' }}>
            <button className="group relative inline-flex items-center px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-200 animate-gradient-x rounded-full"></div>
              <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400"></div>
              <Award className="relative z-10 w-5 h-5 mr-2 text-white" />
              <span className="relative z-10 mr-2 text-white font-medium">Start Your Tech Support Journey</span>
              <span className="relative z-10 transform transition-all duration-300 ease-out group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5 text-white" />
                <ArrowRight className="w-5 h-5 text-white/30 absolute top-0 left-0 opacity-0 -translate-x-1 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300 ease-out" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;