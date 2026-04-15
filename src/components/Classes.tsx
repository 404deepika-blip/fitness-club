import React from 'react';
import { ArrowRight } from 'lucide-react';

const classesData = [
  {
    title: 'Crossfit',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1470&auto=format&fit=crop',
    time: 'Mon, Wed, Fri - 6:00 AM',
    trainer: 'John Doe'
  },
  {
    title: 'Bodybuilding',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
    time: 'Tue, Thu - 5:00 PM',
    trainer: 'Mike Smith'
  },
  {
    title: 'Yoga',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1470&auto=format&fit=crop',
    time: 'Mon, Wed - 7:00 PM',
    trainer: 'Sarah Connor'
  },
  {
    title: 'Cardio',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1374&auto=format&fit=crop',
    time: 'Everyday - 8:00 AM',
    trainer: 'Emma Watson'
  }
];

const Classes = () => {
  return (
    <section id="classes" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Our Courses</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 text-white">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classesData.map((cls, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg cursor-pointer">
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={cls.image} 
                  alt={cls.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold uppercase text-white mb-2">{cls.title}</h3>
                <div className="space-y-1 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <p className="text-red-500 text-sm font-medium">{cls.time}</p>
                  <p className="text-gray-300 text-sm">Trainer: {cls.trainer}</p>
                </div>
                <button className="flex items-center gap-2 text-white font-bold uppercase text-sm hover:text-red-500 transition-colors">
                  Join Class <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
