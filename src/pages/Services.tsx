import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Smartphone,
  Settings,
  MessageSquare,
  Laptop,
  Wifi,
  Printer,
  HardDrive,
  Shield,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';

const allServices = [
  {
    icon: Monitor,
    title: 'Computer Support',
    description: 'Expert help with PC & Mac issues, virus removal, and software troubleshooting',
    features: ['Virus & Malware Removal', 'Software Installation', 'Performance Optimization'],
    price: 'From $49/hour',
    category: 'support',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Device Repair',
    description: 'Professional repair services for smartphones and tablets',
    features: ['Screen Replacement', 'Battery Service', 'Water Damage Repair'],
    price: 'From $39',
    category: 'repair',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Laptop,
    title: 'Laptop Repair',
    description: 'Hardware repairs and upgrades for all laptop brands',
    features: ['Screen Repair', 'Keyboard Replacement', 'Hardware Upgrades'],
    price: 'From $69',
    category: 'repair',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Settings,
    title: 'Setup & Installation',
    description: 'New device setup and software installation services',
    features: ['Device Configuration', 'Data Transfer', 'Email Setup'],
    price: 'From $29',
    category: 'setup',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Wifi,
    title: 'Network Solutions',
    description: 'Home and office network setup and troubleshooting',
    features: ['WiFi Installation', 'Network Security', 'Speed Optimization'],
    price: 'From $79',
    category: 'setup',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: MessageSquare,
    title: 'Tech Consultation',
    description: 'Expert advice on technology solutions and purchases',
    features: ['Personal Consultation', 'Product Recommendations', 'Cost Analysis'],
    price: 'From $59/hour',
    category: 'consultation',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Printer,
    title: 'Printer Support',
    description: 'Printer setup, maintenance, and troubleshooting',
    features: ['Printer Setup', 'Driver Installation', 'Network Printing'],
    price: 'From $39',
    category: 'support',
    gradient: 'from-teal-500 to-emerald-500'
  },
  {
    icon: HardDrive,
    title: 'Data Recovery',
    description: 'Professional data recovery from failed drives and devices',
    features: ['File Recovery', 'Drive Repair', 'Backup Solutions'],
    price: 'From $99',
    category: 'support',
    gradient: 'from-red-500 to-pink-500'
  }
];

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'support', label: 'Tech Support' },
  { id: 'repair', label: 'Repairs' },
  { id: 'setup', label: 'Setup & Installation' },
  { id: 'consultation', label: 'Consultation' }
];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredServices = activeCategory === 'all'
    ? allServices
    : allServices.filter(service => service.category === activeCategory);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
      {/* Header Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Professional Tech Services
            </h1>
            <p className="text-xl text-gray-600">
              Expert solutions for all your technology needs, delivered by certified professionals
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '200ms' }}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`h-full bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                hoveredService === index 
                  ? 'shadow-xl scale-105 ring-2 ring-offset-2 ring-blue-400' 
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}>
                {/* Service Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                {/* Service Details */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      className={`flex items-center text-sm text-gray-600 transition-all duration-300 ${
                        hoveredService === index ? 'translate-x-2' : ''
                      }`}
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="group-hover:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                  <Link
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-flex items-center space-x-8 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Need Immediate Help?</h3>
                <p className="text-gray-600">Our experts are ready to assist you</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="group relative inline-flex items-center px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-200 animate-gradient-x rounded-full"></div>
              <span className="relative z-10 text-white font-medium mr-2">Get Help Now</span>
              <ArrowRight className="relative z-10 w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;