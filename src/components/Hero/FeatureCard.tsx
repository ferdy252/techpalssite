import React from 'react';
import { CheckCircle, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  features,
  isHovered,
  onHover,
  onLeave,
}: FeatureCardProps) => {
  return (
    <div
      className="group relative bg-white backdrop-blur-sm bg-opacity-80 p-8 rounded-2xl shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl border border-gray-100 hover:border-blue-100"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <div className="relative z-10">
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-900 transition-colors mb-4">
          {description}
        </p>
        <div className="space-y-2">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center text-sm text-gray-500 transition-all duration-300 ${
                isHovered ? 'animate-slide-in-right opacity-100' : 'opacity-70'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Hover Effect Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8 rotate-45 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
    </div>
  );
};

export default FeatureCard;