import React from 'react';
import { Link } from 'react-router-dom'; // 1. IMPORT ZAROORI HAI

export default function VolunteerHero() {
  
  // 2. Smooth Scroll Function
  const scrollToRoles = (e) => {
    e.preventDefault();
    const element = document.getElementById('roles');
    if (element) {
      // Navbar ki height (around 80px) adjust karne ke liye thoda offset diya hai
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#fbf9fa] min-h-[60vh] flex items-center py-20 px-6">
      {/* Decorative Circles */}
      <Circle size={300} color="bg-purple-200/50" className="-top-[10%] -left-[5%]" />
      <Circle size={150} color="bg-teal-200/60" className="top-[20%] right-[10%]" />
      <Circle size={200} color="bg-pink-200/50" className="-bottom-[10%] left-[20%]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block py-1 px-4 rounded-full bg-white border border-gray-200 text-sm font-semibold text-[#A58CE0] mb-6 shadow-sm">
          Get Involved
        </span>
        
        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-[#3A3556] mb-6">
          Join Us in Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3]">Movement</span>
        </h1>
        
        <p className="text-[#87839D] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Together, we're creating lasting change for LGBTQ+ newcomers across Canada. Your voice, your time, and your support make all the difference.
        </p>

        {/* 3. FIXED BUTTONS SECTION */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
          
          {/* Scroll Button ki jagah Anchor */}
         <Link 
            to="/volunteer"
            className="w-full sm:w-auto text-center flex items-center justify-center bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3] text-white font-bold px-8 py-4 rounded-full shadow-md hover:opacity-90 transition-opacity"
          >
            Apply to Volunteer
          </Link>
          
          {/* Donate Link - Make sure /donate is in App.jsx */}
          <Link 
            to="/donate" 
            className="w-full sm:w-auto text-center flex items-center justify-center bg-white border-2 border-gray-100 text-[#3A3556] font-bold px-8 py-4 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
          >
            Give Now
          </Link>
          
          {/* Contact Link */}
          <Link 
            to="/Partnership" 
            className="w-full sm:w-auto text-center flex items-center justify-center bg-white border-2 border-gray-100 text-[#3A3556] font-bold px-8 py-4 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
          >
            Contact Partnerships
          </Link>

        </div>
      </div>
      
      <WaveDivider />
    </section>
  );
}

function Circle({ size, color, className }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none blur-xl ${color} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

function WaveDivider() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1440 40" className="w-full text-white" fill="currentColor">
        <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,16 1440,20 L1440,0 L0,0 Z" />
      </svg>
    </div>
  );
}