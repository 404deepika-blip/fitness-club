import React from 'react';
import { ArrowRight, Linkedin, Twitter, Facebook } from 'lucide-react';

const trainersData = [
  {
    name: 'Marcus Cole',
    role: 'Head Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1374&auto=format&fit=crop'
  },
  {
    name: 'Elena Rostova',
    role: 'Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop'
  },
  {
    name: 'David Chen',
    role: 'Crossfit Expert',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1374&auto=format&fit=crop'
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Expert Team</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 text-white">
            Meet Our Trainers
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainersData.map((trainer, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden group">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
  href="#" 
  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-600 transition-colors"
>
  <Linkedin className="w-5 h-5" />
</a>
                  <a 
  href="#" 
  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-600 transition-colors"
>
  <Twitter className="w-5 h-5" />
</a>

<a 
  href="#" 
  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-600 transition-colors"
>
  <Facebook className="w-5 h-5" />
</a>
                </div>
              </div>
              <div className="p-6 text-center border-t-4 border-transparent group-hover:border-red-600 transition-colors">
                <h3 className="text-xl font-bold uppercase text-white mb-1">{trainer.name}</h3>
                <p className="text-red-500 font-medium">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
