import { CheckCircle, ArrowRight, PhoneCall, Clock, Wrench } from 'lucide-react';
import { useState, useEffect } from 'react';

const Process = () => {
  // Track which cards are flipped
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false, false]);

  const handleFlipNext = (currentIndex: number) => {
    if (currentIndex < steps.length - 1) {
      setTimeout(() => {
        setFlippedCards((prev) => {
          const newState = [...prev];
          newState[currentIndex + 1] = true;
          return newState;
        });
      }, 100); // Add a slight delay before triggering the next flip
    }
  };

  const steps = [
    {
      number: '1',
      icon: PhoneCall,
      title: 'Contact Us',
      tagline: 'Start your support journey',
      preview: 'Ready to get started? Learn how to reach us.',
      description:
        'Reach out through our form, phone, or chat. Describe your tech issue and we will get back to you quickly.',
      features: ['24/7 Support Available', 'Multiple Contact Channels', 'Quick Response Time'],
      iconColor: 'bg-blue-500',
    },
    {
      number: '2',
      icon: Clock,
      title: 'Schedule Service',
      tagline: 'Choose your preferred service time slot',
      preview: 'Pick a time that works for you. We offer flexible scheduling including same-day service for urgent issues.',
      description:
        'Pick a time that works for you. We offer flexible scheduling including same-day service for urgent issues.',
      features: ['Same-Day Service', 'Flexible Hours', 'Weekend Availability'],
      iconColor: 'bg-emerald-500',
    },
    {
      number: '3',
      icon: Wrench,
      title: 'Get Expert Help',
      tagline: 'Our certified technicians will diagnose and fix your tech problems with clear communication throughout',
      preview: 'Our certified technicians will diagnose and fix your tech problems with clear communication throughout.',
      description:
        'Our certified technicians will diagnose and fix your tech problems with clear communication throughout.',
      features: ['Certified Technicians', 'Clear Communication', 'Transparent Pricing'],
      iconColor: 'bg-violet-500',
    },
    {
      number: '4',
      icon: CheckCircle,
      title: 'Problem Solved',
      tagline: 'Get back to using your technology with confidence',
      preview: 'Get back to using your technology with confidence. We guarantee your satisfaction with our service.',
      description:
        'Get back to using your technology with confidence. We guarantee your satisfaction with our service.',
      features: ['Satisfaction Guaranteed', '30-Day Warranty', 'Follow-up Support'],
      iconColor: 'bg-blue-500',
    },
  ];

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
    `;
    document.head.appendChild(styleSheet);
    
    // Return a cleanup function that doesn't return anything
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Add click handler for mobile
  const handleCardClick = (index: number) => {
    setFlippedCards((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Add keyboard handling function
  const handleKeyPress = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(index);
    }
  };

  return (
    <section className="py-20 bg-white">
      {/* Header with adjusted vertical spacing */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
          ⚡ SIMPLE PROCESS
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          How TechPals Works
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Getting help with your tech problems is easy with our streamlined four-step process
        </p>
      </div>

      {/* Process Steps with increased gap between cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative mx-auto w-full max-w-sm lg:max-w-[280px]">
              {/* Card Container - increased height */}
              <div 
                onClick={() => handleCardClick(index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                role="button"
                tabIndex={0}
                aria-expanded={flippedCards[index]}
                aria-label={`${step.title} - ${flippedCards[index] ? 'Click to see preview' : 'Click to see details'}`}
                className="relative h-[450px] perspective-1500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl"
              >
                {/* Card Content */}
                <div 
                  className={`absolute w-full h-full transform-style-preserve-3d flip-transition flip-delay-${index + 1} ${
                    flippedCards[index] ? 'rotate-y-180' : ''
                  }`}
                  aria-hidden={!flippedCards[index]}
                >
                  {/* Front of card */}
                  <div className="absolute w-full h-full backface-hidden">
                    <div className={`card-gradient-${step.number} rounded-2xl p-8 
                      shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] 
                      card-hover-shadow
                      transition-all duration-300 ease-in-out h-full 
                      border border-gray-100/40 backdrop-blur-sm
                      hover:scale-[1.02] cursor-pointer
                      flex flex-col`}
                    >
                      {/* Number Badge */}
                      <div 
                        className="absolute -top-3 -left-3 w-10 h-10 
                        bg-gradient-to-br from-blue-500 to-blue-600
                        text-white rounded-xl 
                        flex items-center justify-center font-bold text-lg tracking-tight
                        shadow-[0_4px_12px_-2px_rgba(59,130,246,0.5)]
                        border border-white/20"
                        aria-label={`Step ${step.number} of ${steps.length}`}
                      >
                        {step.number}
                      </div>

                      {/* Icon with increased bottom margin */}
                      <div 
                        className={`w-20 h-20 icon-gradient-${
                          step.number === '1' ? 'blue' : 
                          step.number === '2' ? 'emerald' : 
                          step.number === '3' ? 'violet' : 'blue-dark'
                        } rounded-2xl 
                        flex items-center justify-center mb-8 
                        transform transition-all duration-300 
                        hover:scale-110 hover:-translate-y-1
                        icon-ring relative
                        group`}
                      >
                        {/* Add subtle rotating background effect */}
                        <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Increase icon size and add transition */}
                        <step.icon className="w-10 h-10 text-white transform transition-transform duration-300 group-hover:scale-110" 
                          strokeWidth={2.5} // Make icons slightly bolder
                        />
                      </div>

                      {/* Content with improved spacing */}
                      <div className="space-y-6 flex-grow">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-sm text-blue-600 font-medium">
                            {step.tagline}
                          </p>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {step.preview}
                        </p>
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(index);
                          }}
                          className="mt-auto inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                          aria-label={`Learn more about ${step.title}`}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Back of card with matching spacing */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <div className={`card-gradient-${step.number} rounded-2xl p-8 
                      shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] 
                      card-hover-shadow
                      transition-all duration-300 ease-in-out h-full 
                      border border-gray-100/40 backdrop-blur-sm
                      hover:scale-[1.02] cursor-pointer
                      flex flex-col`}
                    >
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                            {step.tagline}
                          </p>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <ul className="space-y-4">
                          {step.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 mr-3 text-blue-500 flex-shrink-0" />
                              <span className="text-gray-600 text-sm leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow button with increased spacing */}
              {index < steps.length - 1 && (
                <button
                  onClick={() => handleFlipNext(index)}
                  className="hidden lg:block absolute -right-10 top-1/2 transform -translate-y-1/2 translate-x-full z-10"
                  disabled={flippedCards[index + 1]}
                  aria-label={`Show details for next step: ${steps[index + 1].title}`}
                  aria-disabled={flippedCards[index + 1]}
                >
                  <div
                    className={`w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center 
                      transition-all duration-300 hover:scale-110 hover:bg-blue-700
                      ${flippedCards[index + 1] ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                      shadow-lg hover:shadow-xl`}
                  >
                    <ArrowRight className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <button 
          className="group relative inline-flex items-center px-8 py-4 
          cta-button text-white rounded-full font-medium
          shadow-[0_8px_16px_-4px_rgba(59,130,246,0.5)]
          hover:shadow-[0_12px_20px_-4px_rgba(59,130,246,0.6)]
          transition-all duration-300 ease-in-out"
          aria-label="Start your tech support journey"
        >
          <span className="relative z-10 flex items-center">
            Start Your Tech Support Journey
            <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </span>
          
          {/* Animated background glow effect */}
          <div className="absolute inset-0 -z-10 rounded-full bg-white/10 blur-xl 
            opacity-0 group-hover:opacity-50 transition-opacity duration-300" 
          />
          
          {/* Subtle pulse animation */}
          <div className="absolute inset-0 -z-20 rounded-full bg-blue-500/20 
            animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
          />
        </button>
      </div>
    </section>
  );
};

export default Process;
