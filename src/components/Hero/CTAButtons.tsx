import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTAButtonsProps {
  isVisible: boolean;
}

const CTAButtons = ({ isVisible }: CTAButtonsProps) => {
  return (
    <div 
      className={`flex flex-col sm:flex-row justify-center gap-6 mb-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: '0.8s' }}
    >
      {/* Primary Button - Get Started */}
      <Link 
        to="/contact"
        className="group relative px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center text-lg font-semibold overflow-hidden"
      >
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-200 animate-gradient-x rounded-full group-hover:animate-gradient-fast"></div>
        
        {/* Enhanced Glow Effect */}
        <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-300 blur-xl bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400"></div>
        
        {/* Button Content */}
        <span className="relative z-10 flex items-center text-white">
          <span className="transform transition-transform duration-300 group-hover:scale-105">Get Started</span>
          <span className="relative ml-2 transform transition-all duration-300 ease-out group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" />
            <ArrowRight className="h-5 w-5 absolute top-0 left-0 opacity-0 -translate-x-1 group-hover:translate-x-1 group-hover:opacity-40 transition-all duration-300 ease-out" />
          </span>
        </span>
      </Link>

      {/* Secondary Button - View Services */}
      <Link 
        to="/services"
        className="group relative px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center text-lg font-semibold overflow-hidden bg-white"
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
  );
};

export default CTAButtons;