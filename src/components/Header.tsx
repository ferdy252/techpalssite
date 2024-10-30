import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Monitor, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  {
    title: 'Services',
    items: [
      { 
        name: 'Tech Support',
        path: '/services/tech-support',
        description: 'Expert remote and on-site tech support'
      },
      { 
        name: 'Device Repair',
        path: '/services/device-repair',
        description: 'Professional repair for all devices'
      },
      { 
        name: 'Setup & Installation',
        path: '/services/setup',
        description: 'Complete device setup services'
      },
      { 
        name: 'Tech Consultation',
        path: '/services/consultation',
        description: 'Expert technology advice'
      }
    ]
  },
  {
    title: 'About',
    path: '/about',
    items: []
  },
  {
    title: 'Pricing',
    path: '/pricing',
    items: []
  },
  {
    title: 'Contact',
    path: '/contact',
    items: []
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);
      
      if (headerRef.current) {
        if (currentScroll > lastScroll && currentScroll > 100) {
          headerRef.current.style.transform = 'translateY(-100%)';
        } else {
          headerRef.current.style.transform = 'translateY(0)';
        }
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      ref={headerRef}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-blue-600 group"
          >
            <div className="relative">
              <Monitor className="h-8 w-8 transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-blue-400 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              TechPals
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                isOpen ? 'rotate-45 top-3' : 'top-2'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-gray-600 top-3 transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-x-0' : 'scale-x-100'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                isOpen ? '-rotate-45 top-3' : 'top-4'
              }`}></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                {item.items.length > 0 ? (
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2 group">
                    <span>{item.title}</span>
                    <ChevronDown className={`h-4 w-4 transform transition-transform duration-300 ${
                      activeDropdown === item.title ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.path || '#'}
                    className="relative group flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2"
                  >
                    <span>{item.title}</span>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </Link>
                )}
                
                {item.items.length > 0 && activeDropdown === item.title && (
                  <div 
                    className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl py-3 transform transition-all duration-300"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="relative">
                      {/* Decorative gradient border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-10"></div>
                      
                      {item.items.map((subItem, idx) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="relative group block px-6 py-3 hover:bg-blue-50 transition-colors"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <div>
                            <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-0.5">
                              {subItem.name}
                            </p>
                            <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                              {subItem.description}
                            </p>
                          </div>
                          <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="/contact"
              className="group relative px-6 py-2.5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-transform duration-300 group-hover:scale-105"></div>
              <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-blue-400 to-indigo-400"></div>
              <span className="relative z-10 flex items-center text-white font-medium">
                Get Help Now
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden fixed inset-0 bg-white/90 backdrop-blur-lg transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className={`absolute inset-x-0 top-20 p-4 transition-all duration-500 transform ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            {navItems.map((item, index) => (
              <div 
                key={item.title} 
                className="py-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.items.length > 0 ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full text-left py-2 text-gray-700"
                      onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                    >
                      <span className="text-lg font-medium">{item.title}</span>
                      <ChevronDown className={`h-5 w-5 transform transition-transform duration-300 ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <div className={`pl-4 space-y-2 transition-all duration-300 ${
                      activeDropdown === item.title ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <p className="font-medium">{subItem.name}</p>
                          <p className="text-sm text-gray-500">{subItem.description}</p>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path || '#'}
                    className="block py-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-6 block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-center font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Help Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;