import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Trainers from './components/Trainers';
import Footer from './components/Footer';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Trainers />
      <Footer />

      {/* ✅ Toast Container (IMPORTANT) */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;