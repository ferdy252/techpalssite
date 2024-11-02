import { ArrowRight, Shield, Clock, Headphones } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Average response time under 15 minutes'
  },
  {
    icon: Shield,
    title: 'Expert Support',
    description: '100+ certified technicians'
  },
  {
    icon: Headphones,
    title: 'Always Available',
    description: '24/7 technical assistance'
  }
];

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to make your tech
                <span className="block mt-2">problems disappear?</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                Join thousands of satisfied customers who trust TechPals for all their technology needs.
                Expert support is just one click away.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center text-lg font-semibold">
                  Start Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center text-lg font-semibold">
                  Chat with Us
                  <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-up border border-white/20"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{stat.title}</h3>
                      <p className="text-blue-100">{stat.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;