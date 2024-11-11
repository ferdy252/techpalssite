import { useEffect, useState } from 'react';
import { Monitor, Laptop, Smartphone, Wifi, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative pt-20 lg:pt-28 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Background gradient for image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-3xl transform rotate-2 scale-105 opacity-30"></div>
                
                {/* Main image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src="https://via.placeholder.com/800x600"
                    alt="Expert Tech Support Team"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Subtle decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50 rounded-full opacity-40 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-50 rounded-full opacity-40 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-6 lg:pl-8">
              {/* Main Heading Section */}
              <div className="relative mb-8">
                <h1 
                  className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-10 tracking-tight transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '0.4s' }}
                >
                  Tech Support Made{' '}
                  <span className="relative inline-block group">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-200 animate-gradient-x inline-block group-hover:scale-110 transition-transform duration-300">
                      Simple
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-30 transform -rotate-1 group-hover:rotate-2 transition-transform"></div>
                  </span>{' '}
                  and{' '}
                  <span className="relative inline-block group">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-200 animate-gradient-x inline-block group-hover:scale-110 transition-transform duration-300">
                      Friendly
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-30 transform rotate-1 group-hover:-rotate-2 transition-transform"></div>
                  </span>
                </h1>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience tech support reimagined. Our expert team delivers 
                <span className="font-semibold text-blue-600"> instant solutions </span> 
                to your technical challenges with a personal touch. No more confusing jargon or endless waiting – 
                just <span className="font-semibold text-blue-600">clear communication</span> and 
                <span className="font-semibold text-blue-600"> rapid results</span>.
              </p>

              {/* CTA Buttons Section */}
              <div className="flex flex-col sm:flex-row justify-start gap-4">
                {/* Primary Button - Call Us Now */}
                <a 
                  href="tel:5705352472"
                  className="group relative px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center text-lg font-semibold overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-200 animate-gradient-x rounded-full group-hover:animate-gradient-fast"></div>
                  <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-300 blur-xl bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400"></div>
                  <span className="relative z-10 flex items-center text-white">
                    <span className="transform transition-transform duration-300 group-hover:scale-105">Call Us Now</span>
                    <span className="relative ml-2 transform transition-all duration-300 ease-out group-hover:translate-x-1">
                      <ArrowRight className="h-5 w-5" />
                      <ArrowRight className="h-5 w-5 absolute top-0 left-0 opacity-0 -translate-x-1 group-hover:translate-x-1 group-hover:opacity-40 transition-all duration-300 ease-out" />
                    </span>
                  </span>
                </a>

                {/* Secondary Button - View Services */}
                <Link 
                  to="/services"
                  className="group relative px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center text-lg font-semibold overflow-hidden bg-white"
                >
                  {/* Enhanced Border Gradient */}
                  <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-200 animate-gradient-x group-hover:animate-gradient-fast">
                    <div className="absolute inset-0 rounded-full bg-white group-hover:bg-opacity-95 transition-all duration-300"></div>
                  </div>
                  
                  {/* Enhanced Hover Background */}
                  <div className="absolute inset-[2px] rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Button Content */}
                  <span className="relative z-10 flex items-center">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transform transition-transform duration-300 group-hover:scale-105">
                      View Services
                    </span>
                    <span className="relative ml-2 transform transition-all duration-300 ease-out group-hover:translate-x-1">
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                      <ArrowRight className="h-5 w-5 absolute top-0 left-0 opacity-0 -translate-x-1 group-hover:translate-x-1 group-hover:opacity-40 transition-all duration-300 ease-out text-blue-600" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Trust Indicators Section */}
          <div className="mt-20 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
            style={{ transitionDelay: '1.2s' }}
          >
            <p className="text-sm text-gray-500 mb-6 font-medium uppercase tracking-wider">Trusted by Industry Leaders Worldwide</p>
            <div className="flex justify-center items-center space-x-16 flex-wrap gap-y-8">
              {[Monitor, Laptop, Smartphone, Wifi].map((Icon, index) => (
                <div 
                  key={index} 
                  className="group relative p-6 hover:bg-blue-50/50 rounded-xl transition-all duration-300"
                >
                  <Icon 
                    className="h-8 w-8 text-gray-400 group-hover:text-blue-600 transform group-hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                  <div className="absolute inset-0 bg-blue-100/0 group-hover:bg-blue-100/20 rounded-xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;