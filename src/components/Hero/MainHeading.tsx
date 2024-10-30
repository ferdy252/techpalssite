import React from 'react';

interface MainHeadingProps {
  isVisible: boolean;
}

const MainHeading = ({ isVisible }: MainHeadingProps) => {
  return (
    <h1 
      className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight transition-all duration-700 ${
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
  );
};

export default MainHeading;