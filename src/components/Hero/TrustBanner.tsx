import React from 'react';
import { Shield } from 'lucide-react';

interface TrustBannerProps {
  isVisible: boolean;
}

const TrustBanner = ({ isVisible }: TrustBannerProps) => {
  return (
    <div 
      className={`inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 text-blue-600 hover:bg-blue-100 transition-all cursor-pointer group transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: '0.2s', transitionDuration: '0.5s' }}
    >
      <Shield className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
      <span className="text-sm font-semibold mr-2">Rated #1 Tech Support Service</span>
      <div className="flex items-center space-x-1 bg-blue-100 rounded-full px-2 py-0.5">
        <span className="text-xs">⭐️</span>
        <span className="text-xs font-medium">4.9/5</span>
      </div>
    </div>
  );
};

export default TrustBanner;