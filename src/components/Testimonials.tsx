import { useState, useEffect, useRef } from 'react';
import { Star, ArrowRight, MessageCircle, ThumbsUp, Shield, Clock } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80',
    content: 'TechPals helped me set up my entire office network and provides ongoing support. Their team is always responsive and explains everything in terms I can understand.',
    rating: 5,
    date: '2 weeks ago',
    service: 'Network Setup',
    verified: true,
    highlight: 'Quick Response',
    tags: ['Professional', 'Knowledgeable', 'Patient']
  },
  {
    name: 'Michael Chen',
    role: 'Retired Teacher',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80',
    content: 'I was struggling with my new smartphone until TechPals helped me set everything up. Now I can easily video chat with my grandchildren!',
    rating: 5,
    date: '1 month ago',
    service: 'Device Setup',
    verified: true,
    highlight: 'Patient Support',
    tags: ['Helpful', 'Clear Communication', 'Friendly']
  },
  {
    name: 'Emily Rodriguez',
    role: 'Freelance Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=128&h=128&q=80',
    content: 'When my laptop crashed before a big deadline, TechPals saved the day with their same-day repair service. They recovered all my files!',
    rating: 5,
    date: '3 days ago',
    service: 'Emergency Repair',
    verified: true,
    highlight: 'Same-Day Service',
    tags: ['Fast', 'Reliable', 'Life Saver']
  }
];

const shimmer = `before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent`;

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(null);
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

  const handleViewMoreReviews = () => {
    window.location.href = '/reviews';
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced background with subtle patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.015]" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced header with animated underline */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center justify-center mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100/80 to-indigo-100/80 text-blue-600 font-semibold text-sm uppercase tracking-wider backdrop-blur-sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Client Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent relative inline-block">
              What Our Clients Say
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-indigo-600/0 transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from real customers who trust TechPals
            </p>
          </div>
        </div>

        {/* Enhanced testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveTestimonial(index)}
              onMouseLeave={() => setActiveTestimonial(null)}
            >
              <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 h-full transition-all duration-500 overflow-hidden ${shimmer} ${
                activeTestimonial === index 
                  ? 'shadow-xl scale-105 ring-2 ring-offset-2 ring-blue-400' 
                  : 'shadow-md hover:shadow-lg hover:-translate-y-1'
              }`}>
                {/* Content */}
                <div className="relative z-10">
                  {/* Service Tag & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 text-sm font-medium">
                        {testimonial.service}
                      </span>
                      <span className="flex items-center text-blue-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-xs text-gray-500">{testimonial.date}</span>
                      </span>
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm font-medium">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {testimonial.highlight}
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        style={{ 
                          filter: 'drop-shadow(0 0 2px rgba(250, 204, 21, 0.2))',
                          transform: `rotate(${Math.random() * 10 - 5}deg)`
                        }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-900 transition-colors">
                    "{testimonial.content}"
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {testimonial.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-offset-2 ring-blue-100 group-hover:ring-blue-200 transition-colors"
                      />
                      {testimonial.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5" title="Verified Customer">
                          <Shield className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-12 rotate-45 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA button */}
        <div className={`text-center mt-20 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '800ms' }}>
          <button 
            onClick={handleViewMoreReviews}
            className="group relative inline-flex items-center px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-200 animate-gradient-x rounded-full"></div>
            <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-lg bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400"></div>
            <span className="relative z-10 text-white font-medium mr-2">Read More Reviews</span>
            <span className="relative z-10 transform transition-all duration-300 ease-out group-hover:translate-x-1">
              <ArrowRight className="w-5 h-5 text-white" />
              <ArrowRight className="w-5 h-5 text-white/30 absolute top-0 left-0 opacity-0 -translate-x-1 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300 ease-out" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;