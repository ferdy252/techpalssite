import React from 'react';

interface SubheadingProps {
  isVisible: boolean;
}

const Subheading = ({ isVisible }: SubheadingProps) => {
  return (
    <p 
      className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: '0.6s' }}
    >
      Expert tech support and repairs for everyone, regardless of your tech knowledge.
      <span className="hidden md:inline"> We're here to help you with all your device needs.</span>
    </p>
  );
};

export default Subheading;