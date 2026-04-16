import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [countryCode, setCountryCode] = useState("+91");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Trainers', href: '#trainers' },
  ];

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]{2,50}$/;
    const phoneRegex = /^[0-9]{6,15}$/;

    if (!nameRegex.test(formData.name.trim())) {
      toast.error("❌ Name must be 2–50 letters only");
      return false;
    }

    if (!phoneRegex.test(formData.phone)) {
      toast.error("❌ Enter valid phone number");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const fullPhone = countryCode + formData.phone;

    emailjs.send(
      'service_8pdnhgq',
      'template_5yw50a9',
      {
        name: formData.name.trim(),
        email: formData.email,
        message: fullPhone,
      },
      'hH6A7_CU9aKrIUhNj'
    )
    .then(() => {
      toast.success("🎉 Successfully Submitted!");

      setOpenForm(false);
      setFormData({ name: '', email: '', phone: '' });
    })
    .catch((error) => {
      console.log("ERROR:", error);
      toast.error("❌ Failed to send email!");
    })
    .finally(() => setLoading(false));
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-950/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
      } relative`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center">

            {/* LOGO */}
            <div className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-black text-white uppercase">
                Fit<span className="text-red-600">Club</span>
              </span>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-300 hover:text-red-600 uppercase text-sm">
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => setOpenForm(true)}
                className="bg-red-600 text-white px-6 py-2 rounded-sm font-bold uppercase"
              >
                Join Now
              </button>
            </div>

            {/* HAMBURGER */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-lg z-50">
            <div className="flex flex-col p-4 space-y-4">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => {
                  setOpenForm(true);
                  setIsMobileMenuOpen(false);
                }}
                className="bg-red-600 text-white py-2 rounded"
              >
                Join Now
              </button>

            </div>
          </div>
        )}
      </nav>

      {/* FORM */}
      {openForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md relative">

            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-2 right-3 text-gray-600 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
              Join FitClub
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border p-2 rounded text-gray-900"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border p-2 rounded text-gray-900"
                required
              />

              <div className="flex gap-2">

                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="border p-2 rounded text-gray-900"
                >
                  <option value="+91">India (+91)</option>
                  <option value="+1">USA (+1)</option>
                  <option value="+44">UK (+44)</option>
                  <option value="+971">UAE (+971)</option>
                </select>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border p-2 rounded text-gray-900"
                  required
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-2 rounded flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Submit"}
              </button>

            </form>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;