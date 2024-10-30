import React from 'react';
import { Monitor, Laptop, Smartphone, Wifi } from 'lucide-react';

interface TrustIndicatorsProps {
  isVisible: boolean;
}

const TrustIndicators = ({ isVisible }: TrustIndicatorsProps) => {
  return (
    <div 
      className={`mt-16 text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: '1.2s' }}
    >
      <p className="text-sm text-gray-500 mb-4">Trusted by leading companies</p>
      <div className="flex justify-center items-center space-x-12">
        {[Monitor, Laptop, Smartphone, Wifi].map((Icon, index) => (
          <div key={index} className="group relative">
            <Icon 
              className="h-8 w-8 text-gray-400 group-hover:text-blue-600 transform group-hover:scale-110 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            />
            <div className="absolute -inset-2 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;