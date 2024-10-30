import React from 'react';
import { Laptop, Smartphone, Monitor, Wifi, Cloud, Lock, Zap } from 'lucide-react';

const floatingIcons = [Laptop, Smartphone, Monitor, Wifi, Cloud, Lock, Zap];

const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((Icon, index) => (
        <Icon
          key={index}
          className="absolute text-blue-100 opacity-20 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 40 + 20}px`,
            animationDelay: `${index * 0.5}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 bg-size-200 animate-gradient-x opacity-30"></div>
    </div>
  );
};

export default BackgroundEffects;