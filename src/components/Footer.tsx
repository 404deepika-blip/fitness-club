import React from 'react';
import { Dumbbell, Mail, Phone, MapPin } from 'lucide-react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-black tracking-wider text-white uppercase">
                Sabri<span className="text-red-600">Gym</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Dedicated to helping you achieve your fitness goals with state-of-the-art equipment and expert guidance.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholders */}
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer">
  <Facebook className="w-5 h-5" />
</div>

<div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer">
  <Twitter className="w-5 h-5" />
</div>

<div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer">
  <Linkedin className="w-5 h-5" />
</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Classes', 'Pricing', 'Trainers', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Kalukheda musandi road, unnao 209821</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>+91 96214 06319</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>info@sabrigym.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get the latest news and updates.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-red-600 transition-colors"
              />
              <button 
                type="button"
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider py-3 rounded-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SabriGym. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
