import { Laptop, Smartphone, Monitor, Wifi, Cloud, Lock, Zap, Server, Shield, Settings } from 'lucide-react';

const floatingIcons = [Laptop, Smartphone, Monitor, Wifi, Cloud, Lock, Zap, Server, Shield, Settings];

const BackgroundEffects = () => {
  return (
    <>
      {/* Base Background with Tech Pattern */}
      <div className="absolute inset-0 opacity-70">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 50px 50px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
          }}
        />

        {/* Animated Tech Lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-tech-line"
              style={{
                top: `${20 + i * 20}%`,
                left: '0',
                right: '0',
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent animate-tech-line-vertical"
              style={{
                left: `${20 + i * 20}%`,
                top: '0',
                bottom: '0',
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Hexagon Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%236366f1' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating Icons with Enhanced Glow */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((Icon, index) => (
          <Icon
            key={index}
            className={`absolute text-blue-200/30 animate-float-${index % 3} transform-gpu`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
              animationDelay: `${index * 0.7}s`,
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
            }}
          />
        ))}
      </div>

      {/* Enhanced Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400/20 to-violet-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Digital Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-digital-rain"
            style={{
              left: `${i * 10}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BackgroundEffects;