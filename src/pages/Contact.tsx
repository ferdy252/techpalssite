import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch with our support team
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;