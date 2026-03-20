import React from 'react';
import { motion } from 'framer-motion';

export default function SupportHero() {
  return (
    // Root container with no top padding/margin to prevent white bar issues
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-[120px] pb-[180px] px-6 m-0 border-none">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 top-0 z-0 bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#3b82f6]">
        {/* Radial Glow Effects for depth */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,107,0.3)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_60%)]"></div>
      </div>
      
      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 text-center max-w-[1000px]">
        <motion.span 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="inline-block py-2 px-5 bg-white/12 border border-white/20 rounded-full text-white/90 text-sm font-bold uppercase tracking-[0.2em] backdrop-blur-md mb-8"
        >
          Settlement & Navigation
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-5xl md:text-[5rem] font-black leading-[1.1] mb-8"
        >
          Find Your <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6]">Support Network</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg md:text-[1.3rem] leading-[1.8] max-w-[800px] mx-auto mb-12"
        >
          We proudly partner with organizations that support the safety, health, 
          and legal rights of LGBTQ+ newcomers, immigrants, and refugees across Canada.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <a 
            href="#directory" 
            className="px-10 py-5 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Find Services
          </a>
          <a 
            href="#crisis" 
            className="px-10 py-5 bg-white/10 border-2 border-white/20 backdrop-blur-md text-white font-black text-lg rounded-2xl hover:bg-white/20 transition-all shadow-lg"
          >
            Emergency Support 🆘
          </a>
        </motion.div>
      </div>

      {/* --- SIGNATURE WAVE DIVIDER --- */}
      <svg className="absolute bottom-[-2px] left-0 w-full h-[120px] md:h-[180px] z-[3]" viewBox="0 0 1440 180" preserveAspectRatio="none">
        <path d="M0,80 C240,160 480,0 720,80 C960,160 1200,0 1440,80 L1440,180 L0,180 Z" fill="#FFFFFF"/>
      </svg>
    </section>
  );
}