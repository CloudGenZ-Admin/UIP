import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[120px] pb-[160px] px-6">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#3b82f6]">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,107,0.3)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_60%)]"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-[720px]">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-block py-2 px-5 bg-white/12 border border-white/20 rounded-full text-white/90 text-sm font-medium backdrop-blur-md mb-6">
          Ottawa's 2SLGBTQIA+ Community Centre
        </motion.p>
        <h1 className="text-white text-5xl md:text-[4rem] font-extrabold leading-[1.1] mb-5">
          Welcome to<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6]">United in Pride</span>
        </h1>
        <p className="text-white/80 text-lg md:text-[1.2rem] leading-[1.7] max-w-[540px] mx-auto mb-9">
          A safe, inclusive space where every identity is celebrated. Join our vibrant community in the heart of Ottawa.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/programs" className="px-8 py-3.5 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all">Explore Programs</a>
          <a href="#about" className="px-8 py-3.5 bg-white/15 border-2 border-white/40 backdrop-blur-md text-white rounded-full font-bold hover:bg-white/25 transition-all">Learn More</a>
        </div>
      </div>

      <svg className="absolute bottom-[-2px] left-0 w-full h-[180px] z-[3]" viewBox="0 0 1440 180" preserveAspectRatio="none">
        <path d="M0,80 C240,160 480,0 720,80 C960,160 1200,0 1440,80 L1440,180 L0,180 Z" fill="#FAFAFA"/>
      </svg>
    </section>
  );
}