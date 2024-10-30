import React from 'react';
import { Check, Shield } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600">
            Transparent pricing for all your tech needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;