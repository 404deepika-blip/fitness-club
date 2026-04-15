import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
        <span className="block text-red-600 font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
          Shape your body
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-tight mb-6">
          Be <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Strong</span><br />
          Train Hard
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          Unlock your potential with our world-class facilities, expert trainers, and a community that pushes you to be your best self.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white hover:border-red-600 hover:text-red-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest transition-all">
            View Classes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
