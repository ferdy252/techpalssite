import { useState, useEffect } from 'react';
import { Laptop, Smartphone, Monitor, Wifi, Cloud, Lock, Zap, Server, Shield, Settings } from 'lucide-react';

const floatingIcons = [Laptop, Smartphone, Monitor, Wifi, Cloud, Lock, Zap, Server, Shield, Settings];

const GlobalBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      if (!isMobile) {
        setScrollPosition(window.scrollY);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1
        });
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      // Simplified mobile version
      <div className="fixed inset-0">
        <div className="absolute inset-0 base-gradient opacity-50" />
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.05,
            backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    );
  }

  // Original desktop version
  return (
    <>
      <div className="fixed inset-0 base-gradient overflow-hidden">
        {/* Enhanced Blob 1 */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full 
            bg-gradient-to-r from-blue-400/30 via-indigo-400/20 to-purple-400/30 
            blur-[80px] animate-blob-slow"
          style={{
            top: `${-50 + scrollPosition * 0.1}px`,
            left: `${-100 + mousePosition.x * 20}px`,
          }}
        />
        
        {/* Enhanced Blob 2 */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full 
            bg-gradient-to-r from-purple-400/30 via-pink-400/20 to-red-400/30 
            blur-[80px] animate-blob-slow animation-delay-2000"
          style={{
            top: `${200 - scrollPosition * 0.05}px`,
            right: `${-50 + mousePosition.x * 15}px`,
          }}
        />
        
        {/* Enhanced Blob 3 */}
        <div 
          className="absolute w-[700px] h-[700px] rounded-full 
            bg-gradient-to-r from-pink-400/30 via-blue-400/20 to-green-400/30 
            blur-[80px] animate-blob-slow animation-delay-4000"
          style={{
            bottom: `${-100 - scrollPosition * 0.1}px`,
            left: `${200 + mousePosition.x * 25}px`,
          }}
        />

        {/* Add shimmer effect */}
        <div className="absolute inset-0 bg-shimmer" />
      </div>

      {/* Enhanced Grid Layer */}
      <div 
        className="fixed inset-0 transition-opacity duration-500"
        style={{
          opacity: Math.max(0.03, 0.07 - scrollPosition * 0.0001),
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      {/* Enhanced Floating Icons */}
      <div className="fixed inset-0 overflow-hidden">
        {floatingIcons.map((Icon, index) => (
          <Icon
            key={index}
            className="absolute transition-all duration-300"
            style={{
              opacity: Math.max(0.1, 0.12 - scrollPosition * 0.0001),
              color: `hsl(${(index * 40 + scrollPosition * 0.1) % 360}, 70%, 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 15}px`,
              animation: `float-icon ${20 + index * 2}s infinite linear`,
              animationDelay: `${index * -2}s`,
              transform: `
                translate(
                  ${mousePosition.x * (index + 1) * 5}px, 
                  ${mousePosition.y * (index + 1) * 5}px
                ) 
                rotate(${scrollPosition * 0.1}deg)
              `,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default GlobalBackground; 