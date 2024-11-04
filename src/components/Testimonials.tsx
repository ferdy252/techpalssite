import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ArrowRight, MessageCircle, ThumbsUp, Heart, Shield, Clock } from 'lucide-react';

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

const stats = [
  { 
    icon: Star,
    label: 'Average Rating',
    value: '4.9/5',
    color: 'from-yellow-400 to-orange-400',
    description: 'Based on 2,500+ reviews'
  },
  {
    icon: Heart,
    label: 'Satisfaction Rate',
    value: '98%',
    color: 'from-pink-500 to-rose-500',
    description: 'Of our happy customers'
  },
  {
    icon: Shield,
    label: 'Happy Clients',
    value: '10,000+',
    color: 'from-blue-500 to-indigo-500',
    description: 'And growing every day'
  }
];

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
    <section ref={sectionRef} className="py-24 relative">
      {/* Update background to be more subtle */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center justify-center mb-4">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 font-semibold text-sm uppercase tracking-wider">
                <MessageCircle className="w-4 h-4 mr-2" />
                Client Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from real customers who trust TechPals
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '200ms' }}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-indigo-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-12 rotate-45 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
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
              <div className={`relative bg-white rounded-2xl p-6 h-full transition-all duration-500 ${
                activeTestimonial === index 
                  ? 'shadow-xl scale-105 ring-2 ring-offset-2 ring-blue-400' 
                  : 'shadow-md hover:shadow-lg hover:-translate-y-1'
              }`}>
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Quote className="w-4 h-4 text-white" />
                </div>

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

        {/* CTA Button - Updated with onClick handler */}
        <div className={`text-center mt-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '800ms' }}>
          <button 
            onClick={handleViewMoreReviews}
            className="group relative inline-flex items-center px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-200 animate-gradient-x rounded-full"></div>
            <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400"></div>
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