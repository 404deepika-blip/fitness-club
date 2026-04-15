import React from 'react';
import { Activity, Heart, ShieldCheck, Timer } from 'lucide-react';

const features = [
  {
    icon: <Activity className="w-10 h-10 text-red-600" />,
    title: 'Modern Equipment',
    description: 'Access to the latest and greatest fitness machines and free weights.'
  },
  {
    icon: <Timer className="w-10 h-10 text-red-600" />,
    title: '24/7 Access',
    description: 'Train on your own schedule. Our doors are open 24 hours a day, 7 days a week.'
  },
  {
    icon: <Heart className="w-10 h-10 text-red-600" />,
    title: 'Healthy Lifestyle',
    description: 'Comprehensive guidance on nutrition and lifestyle to complement your training.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
    title: 'Expert Trainers',
    description: 'Certified professionals dedicated to helping you achieve your specific goals.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-red-600/20 blur-xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop" 
              alt="Gym Facility" 
              className="relative rounded-lg shadow-2xl object-cover h-[600px] w-full"
            />
            <div className="absolute -bottom-10 -right-10 bg-red-600 p-8 rounded-lg hidden md:block">
              <p className="text-5xl font-black text-white">10+</p>
              <p className="text-white font-medium uppercase tracking-wider mt-2">Years of<br/>Experience</p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 mb-6 text-white leading-tight">
              Push Your Limits Forward
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              We are more than just a gym; we are a comprehensive fitness destination designed to inspire and challenge you. Our facility combines state-of-the-art equipment with expert coaching to deliver an unparalleled workout experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
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

export default About;
