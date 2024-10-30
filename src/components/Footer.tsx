import React from 'react';
import { Monitor, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: 'About Us', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Contact', href: '/contact' },
    { title: 'Blog', href: '/blog' }
  ];

  const services = [
    { title: 'Tech Support', href: '/services/tech-support' },
    { title: 'Device Repair', href: '/services/device-repair' },
    { title: 'Setup & Installation', href: '/services/setup' },
    { title: 'Consultation', href: '/services/consultation' },
    { title: 'Training', href: '/services/training' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-white">
              <Monitor className="h-6 w-6" />
              <span className="text-xl font-bold">TechPals</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Making technology accessible and hassle-free for everyone. Expert support when you need it most.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@techpals.com" className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <Mail className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span>support@techpals.com</span>
                </a>
              </li>
              <li>
                <a href="tel:1-800-TECH-PAL" className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span>1-800-TECH-PAL</span>
                </a>
              </li>
              <li className="group flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span>123 Tech Street, Digital City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              &copy; {currentYear} TechPals. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;