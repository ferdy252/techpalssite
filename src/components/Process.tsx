import { CheckCircle, ArrowRight, PhoneCall, Clock, Wrench } from 'lucide-react';
import { useState, useEffect, useCallback, useRef, TouchEvent } from 'react';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Add custom error type
type ProcessError = {
  code: 'CARD_FLIP_ERROR' | 'STEP_UPDATE_ERROR';
  message: string;
};

// Add new animation states and types
type SlideDirection = 'up' | 'down' | 'none';
type CardState = 'entering' | 'active' | 'exiting' | 'hidden';

const Process = () => {
  const navigate = useNavigate();

  // Define steps first
  const steps = [
    {
      number: '1',
      icon: PhoneCall,
      title: 'Contact Us',
      tagline: 'Start Your Tech Journey',
      preview: 'Get expert help in minutes - no complicated forms or long wait times.',
      description:
        'Reach out through our 24/7 support channels. Whether you prefer chat, phone, or email, our team is ready to help solve your tech problems quickly.',
      features: [
        'Instant Response Time',
        'Multiple Contact Options',
        'No Queue or Wait Times'
      ],
      iconColor: 'bg-blue-500',
      image: '/images/contact-support.webp',
    },
    {
      number: '2',
      icon: Clock,
      title: 'Schedule Service',
      tagline: 'Flexible Booking Options',
      preview: 'Book a time that works for you, including same-day emergency appointments.',
      description:
        'Choose from our flexible scheduling options, including same-day service for urgent issues. We work around your schedule, not the other way around.',
      features: [
        'Same-Day Emergency Service',
        '7-Day Availability',
        'Evening Appointments'
      ],
      iconColor: 'bg-emerald-500',
      image: '/images/schedule-service.webp',
    },
    {
      number: '3',
      icon: Wrench,
      title: 'Expert Resolution',
      tagline: 'Professional Tech Support',
      preview: 'Experienced technicians solve your problems with clear communication.',
      description:
        'Our certified technicians diagnose and fix your tech issues while keeping you informed every step of the way. No technical jargon - just clear solutions.',
      features: [
        'Certified Tech Experts',
        'Clear Progress Updates',
        'Guaranteed Solutions'
      ],
      iconColor: 'bg-violet-500',
      image: '/images/expert-resolution.webp',
    },
    {
      number: '4',
      icon: CheckCircle,
      title: 'Back in Action',
      tagline: 'Satisfaction Guaranteed',
      preview: 'Get back to your digital life with confidence and peace of mind.',
      description:
        'Walk away with working technology and the knowledge to prevent future issues. Every service includes a satisfaction guarantee and follow-up support.',
      features: [
        '30-Day Guarantee',
        'Preventive Tips',
        'Free Follow-up Support'
      ],
      iconColor: 'bg-blue-500',
      image: '/images/back-in-action.webp',
    }
  ];

  // Then declare state variables
  const [isLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [] = useState<ProcessError | null>(null);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>('none');
  const [cardStates, setCardStates] = useState<CardState[]>(
    Array(steps.length).fill('hidden')
  );

  const sectionRef = useRef<HTMLDivElement>(null);

  // Add new animation states
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [] = useState<'left' | 'right'>('right');

  const [, setIsMobile] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Disable complex animations on mobile

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
      .perspective-1500 {
        perspective: 1500px;
      }

      .backface-hidden {
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }

      .transform-style-preserve-3d {
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
      }

      .rotate-y-180 {
        transform: rotateY(180deg);
      }

      .flip-transition {
        transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .card-gradient {
        background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
      }

      /* Add sequential delay for each card */
      .flip-delay-1 { transition-delay: 0.1s; }
      .flip-delay-2 { transition-delay: 0.2s; }
      .flip-delay-3 { transition-delay: 0.3s; }
      .flip-delay-4 { transition-delay: 0.4s; }

      /* Custom gradients for each step */
      .card-gradient-1 {
        background: linear-gradient(145deg, #ffffff 0%, #f0f7ff 100%);
        box-shadow: 0 4px 20px -2px rgba(66, 133, 244, 0.12);
      }

      .card-gradient-2 {
        background: linear-gradient(145deg, #ffffff 0%, #f0fff7 100%);
        box-shadow: 0 4px 20px -2px rgba(52, 211, 153, 0.12);
      }

      .card-gradient-3 {
        background: linear-gradient(145deg, #ffffff 0%, #f5f0ff 100%);
        box-shadow: 0 4px 20px -2px rgba(139, 92, 246, 0.12);
      }

      .card-gradient-4 {
        background: linear-gradient(145deg, #ffffff 0%, #f0f7ff 100%);
        box-shadow: 0 4px 20px -2px rgba(66, 133, 244, 0.12);
      }

      /* Hover state shadows */
      .card-hover-shadow {
        transition: all 0.3s ease-in-out;
      }

      .card-hover-shadow:hover {
        box-shadow: 0 8px 30px -2px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
      }

      /* Icon container gradients */
      .icon-gradient-blue {
        background: linear-gradient(135deg, #4F46E5 0%, #2563EB 100%);
        box-shadow: 0 8px 16px -4px rgba(59, 130, 246, 0.5);
      }

      .icon-gradient-emerald {
        background: linear-gradient(135deg, #059669 0%, #10B981 100%);
        box-shadow: 0 8px 16px -4px rgba(16, 185, 129, 0.5);
      }

      .icon-gradient-violet {
        background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%);
        box-shadow: 0 8px 16px -4px rgba(139, 92, 246, 0.5);
      }

      .icon-gradient-blue-dark {
        background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
        box-shadow: 0 8px 16px -4px rgba(59, 130, 246, 0.5);
      }

      /* Icon container ring effect */
      .icon-ring {
        position: relative;
      }

      .icon-ring::before {
        content: '';
        position: absolute;
        inset: -2px;
        border-radius: inherit;
        padding: 2px;
        background: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }

      /* Button gradient and hover effects */
      .cta-button {
        background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
        transition: all 0.3s ease-in-out;
      }

      .cta-button:hover {
        background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
        transform: translateY(-2px);
      }

      .cta-button::before {
        content: '';
        position: absolute;
        inset: -2px;
        border-radius: 9999px;
        padding: 2px;
        background: linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }

      .cta-button:hover::before {
        opacity: 1;
      }

      @keyframes fade-in {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 0.5s ease-out forwards;
      }

      /* Add new image hover effects */
      .image-hover-zoom {
        transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .image-hover-zoom:hover {
        transform: scale(1.05);
      }

      /* Add smooth gradient overlays */
      .image-overlay {
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.05)
        );
      }

      /* Add card content animations */
      .card-content-enter {
        opacity: 0;
        transform: translateY(10px);
      }

      .card-content-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* Enhanced card shadows */
      .enhanced-shadow {
        box-shadow: 
          0 0 0 1px rgba(0, 0, 0, 0.03),
          0 2px 4px rgba(0, 0, 0, 0.05),
          0 12px 24px rgba(0, 0, 0, 0.05);
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

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

  // Add initialization effect
  useEffect(() => {
    // Set initial card state
    setCardStates(prev => {
      const newStates = [...prev];
      newStates[activeStep] = 'active';
      return newStates;
    });
    
    // Add visibility after mount
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  // Add navigation handlers
  const handleNext = useCallback(() => {
    if (activeStep < steps.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setDirection('forward');
      setSlideDirection('up');
      
      setCardStates(prev => {
        const newStates = [...prev];
        newStates[activeStep] = 'exiting';
        newStates[activeStep + 1] = 'entering';
        return newStates;
      });

      setTimeout(() => {
        setActiveStep(prev => prev + 1);
        setCardStates(() => {
          const newStates = Array(steps.length).fill('hidden');
          newStates[activeStep + 1] = 'active';
          return newStates;
        });
        setIsAnimating(false);
      }, 500);
    }
  }, [activeStep, steps.length, isAnimating]);

  const handlePrev = useCallback(() => {
    if (activeStep > 0 && !isAnimating) {
      setIsAnimating(true);
      setDirection('backward');
      setSlideDirection('down');
      
      setCardStates(prev => {
        const newStates = [...prev];
        newStates[activeStep] = 'exiting';
        newStates[activeStep - 1] = 'entering';
        return newStates;
      });

      setTimeout(() => {
        setActiveStep(prev => prev - 1);
        setCardStates(() => {
          const newStates = Array(steps.length).fill('hidden');
          newStates[activeStep - 1] = 'active';
          return newStates;
        });
        setIsAnimating(false);
      }, 500);
    }
  }, [activeStep, isAnimating]);

  // Update handler for CTA button
  const handleGetStarted = () => {
    navigate('/contact');
  };

  // Define mouse event handlers
  const handleMouseEnter = useCallback((index: number) => {
    setHoverIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverIndex(null);
  }, []);

  // Add navigation buttons
  return (
    <ErrorBoundary>
      <section ref={sectionRef} className="py-8 md:py-20 relative z-10" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className="container mx-auto px-4 md:px-6 relative text-center mb-8 md:mb-16">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <span className="inline-flex items-center px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 font-semibold text-xs md:text-sm uppercase tracking-wider shadow-sm">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Simple Process
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              How TechPals Works
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting help with your tech problems is easy with our streamlined four-step process
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 md:gap-3 mb-6 md:mb-8 px-4">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 md:h-2.5 rounded-full transition-all duration-500 ease-out ${
                idx === activeStep 
                  ? 'w-16 md:w-24 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500' 
                  : idx < activeStep 
                    ? 'w-8 md:w-16 bg-blue-200' 
                    : 'w-8 md:w-16 bg-gray-200'
              }`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-5xl mx-auto relative h-[600px] md:h-[700px]">
            {/* Cards */}
            {steps.map((step, index) => (
              <AnimatePresence mode="wait" key={index}>
                {cardStates[index] !== 'hidden' && (
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={{
                      initial: { 
                        opacity: 0, 
                        y: direction === 'forward' ? 50 : -50,
                        scale: 0.95
                      },
                      animate: { 
                        opacity: 1, 
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.5, ease: 'easeOut' }
                      },
                      exit: { 
                        opacity: 0, 
                        y: direction === 'forward' ? -50 : 50,
                        scale: 0.95,
                        transition: { duration: 0.3, ease: 'easeIn' }
                      }
                    }}
                    className={`
                      absolute top-0 left-0 w-full
                      ${getCardStateClasses(cardStates[index], slideDirection)}
                    `}
                    style={{
                      zIndex: index === activeStep ? 10 : 0,
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="group relative">
                      {/* Add a subtle floating animation to the card */}
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ 
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                        className={`
                          bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl overflow-hidden
                          shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                          border border-gray-100/50
                          transform transition-all duration-500
                          ${hoverIndex === index ? 'shadow-2xl scale-[1.02]' : ''}
                          hover:shadow-2xl hover:scale-[1.02]
                        `}
                      >
                        <div className="flex flex-col md:flex-row">
                          {/* Enhanced Image Section */}
                          <div className="md:w-1/2 relative overflow-hidden group">
                            <motion.div 
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.4 }}
                              className="aspect-[4/3] md:aspect-auto md:h-full"
                            >
                              <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover object-center"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                              />
                            </motion.div>
                            
                            {/* Add a subtle overlay effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                            />
                          </div>

                          {/* Enhanced Content Section */}
                          <div className="md:w-1/2 p-8 md:p-12 relative">
                            {/* Add decorative background elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 
                              rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" 
                            />
                            
                            {/* Card Header with improved animations */}
                            <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="flex items-center justify-between mb-6 md:mb-8"
                            >
                              <div className={`
                                w-14 h-14 md:w-20 md:h-20 rounded-lg md:rounded-xl
                                bg-gradient-to-br from-${step.number === '1' ? 'blue' : step.number === '2' ? 'emerald' : step.number === '3' ? 'violet' : 'blue'}-500 
                                to-${step.number === '1' ? 'blue' : step.number === '2' ? 'emerald' : step.number === '3' ? 'violet' : 'blue'}-600
                                flex items-center justify-center
                                shadow-lg transform transition-transform duration-300
                                ${hoverIndex === index ? 'scale-110 rotate-3' : ''}
                              `}>
                                <step.icon className="w-7 h-7 md:w-10 md:h-10 text-white" strokeWidth={2} />
                              </div>
                              
                              <span className="text-sm md:text-base font-medium text-gray-500 bg-gray-100/50 px-4 md:px-5 py-2 md:py-2.5 rounded-full">
                                Step {parseInt(step.number)} of {steps.length}
                              </span>
                            </motion.div>

                            {/* Staggered animation for content sections */}
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="space-y-6 md:space-y-8"
                            >
                              <div>
                                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
                                  {step.title}
                                </h3>
                                <p className="text-sm md:text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                  {step.tagline}
                                </p>
                              </div>

                              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                                {step.description}
                              </p>
                            </motion.div>

                            {/* Enhanced feature list with staggered animations */}
                            <motion.ul 
                              initial="hidden"
                              animate="visible"
                              variants={{
                                visible: {
                                  transition: {
                                    staggerChildren: 0.1
                                  }
                                }
                              }}
                              className="space-y-4 md:space-y-5 mt-8"
                            >
                              {step.features.map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                  }}
                                  className={`
                                    flex items-center text-gray-600 p-3 md:p-4 rounded-lg
                                    transition-all duration-300 hover:bg-gray-50/80
                                    ${hoverIndex === index ? 'bg-gray-50/50' : ''}
                                  `}
                                >
                                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7 mr-4 md:mr-5 text-blue-500 flex-shrink-0" />
                                  <span className="text-base md:text-lg">{feature}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}

            {/* Hide arrow buttons on mobile, use swipe gestures instead */}
            <div className="hidden md:flex absolute -left-24 -right-24 top-1/2 -translate-y-1/2 justify-between pointer-events-none">
              <button
                onClick={handlePrev}
                disabled={activeStep === 0 || isAnimating}
                className={`
                  transform transition-all duration-300 pointer-events-auto
                  p-4 rounded-full bg-white/80 backdrop-blur-sm
                  shadow-lg border border-gray-100/50
                  ${activeStep === 0 
                    ? 'opacity-50 cursor-not-allowed scale-90' 
                    : 'hover:scale-110 hover:shadow-xl cursor-pointer'
                  }
                `}
              >
                <ArrowRight className="w-12 h-12 text-blue-600 rotate-180" />
              </button>

              <button
                onClick={handleNext}
                disabled={activeStep === steps.length - 1 || isAnimating}
                className={`
                  transform transition-all duration-300 pointer-events-auto
                  p-4 rounded-full bg-white/80 backdrop-blur-sm
                  shadow-lg border border-gray-100/50
                  ${activeStep === steps.length - 1 
                    ? 'opacity-50 cursor-not-allowed scale-90' 
                    : 'hover:scale-110 hover:shadow-xl cursor-pointer'
                  }
                `}
              >
                <ArrowRight className="w-12 h-12 text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        <div className={`text-center mt-6 md:mt-8 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '800ms' }}>
          <button
            onClick={handleGetStarted}
            aria-label="Get Started with TechPals"
            className="
              group relative inline-flex items-center 
              px-6 md:px-8 py-3 md:py-4 rounded-full 
              transition-all duration-300 transform 
              hover:scale-105 overflow-hidden
              shadow-xl shadow-blue-600/20
              hover:shadow-2xl hover:shadow-blue-600/30
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              text-sm md:text-base
            "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-200 animate-gradient-x rounded-full"></div>
            <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400"></div>
            <span className="relative z-10 text-white font-medium mr-2">Get Started Now</span>
            <span className="relative z-10 transform transition-all duration-300 ease-out group-hover:translate-x-1">
              <ArrowRight className="w-5 h-5 text-white" />
              <ArrowRight className="w-5 h-5 text-white/30 absolute top-0 left-0 opacity-0 -translate-x-1 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300 ease-out" />
            </span>
          </button>
        </div>

        {isLoading && (
          <div className="fixed inset-0 bg-black/5 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
          </div>
        )}
      </section>
    </ErrorBoundary>
  );
};

// Helper function for card state classes
const getCardStateClasses = (state: CardState, direction: SlideDirection) => {
  const baseClasses = 'transform transition-all duration-700 ease-out';
  
  switch (state) {
    case 'entering':
      return `${baseClasses} ${
        direction === 'up' 
          ? 'translate-y-[60px] opacity-0 scale-[0.98]' 
          : '-translate-y-[60px] opacity-0 scale-[0.98]'
      }`;
    case 'active':
      return `${baseClasses} translate-y-0 opacity-100 scale-100`;
    case 'exiting':
      return `${baseClasses} ${
        direction === 'up' 
          ? '-translate-y-[60px] opacity-0 scale-[0.98]' 
          : 'translate-y-[60px] opacity-0 scale-[0.98]'
      }`;
    case 'hidden':
      return `${baseClasses} opacity-0 scale-95 pointer-events-none translate-y-0`;
  }
};

export default Process;
