import React from 'react';
import { motion } from 'framer-motion';

// Importing your local images
import photo1 from '../assets/WhatsApp Image 2026-03-26 at 10.51.13 AM.jpeg';
import photo2 from '../assets/gallery/g4.jpeg';
import photo3 from '../assets/gallery/g9.jpeg';
import photo4 from '../assets/gallery/g1.jpeg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[120px] pb-[160px] px-6">
      
      {/* Background Gradient (z-0) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#3b82f6]">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,107,0.3)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_60%)]"></div>
      </div>

      {/* ===== FLOATING IMAGES CONTAINER (z-[2]) ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
        
        {/* Floating Photo 1 (Top Left) */}
        <motion.img 
          src={photo1} 
          alt="Community" 
          animate={{ y: [0, -20, 0], rotate: [-2, 2, -2] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[-2%] md:left-[5%] w-32 md:w-48 h-32 md:h-48 object-cover rounded-[2rem] shadow-2xl opacity-40 blur-[2px] md:blur-0 border border-white/10"
        />

        {/* Floating Photo 2 (Top Right) */}
        <motion.img 
          src={photo2} 
          alt="Community" 
          animate={{ y: [0, 25, 0], rotate: [3, -1, 3] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[-5%] md:right-[5%] w-28 md:w-40 h-28 md:h-40 object-cover rounded-full shadow-2xl opacity-30 blur-[1px] border border-white/10"
        />

        {/* Floating Photo 3 (Bottom Left) */}
        <motion.img 
          src={photo3} 
          alt="Community" 
          animate={{ y: [0, -15, 0], rotate: [-4, 0, -4] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] left-[2%] md:left-[10%] w-24 md:w-36 h-24 md:h-36 object-cover rounded-[1.5rem] shadow-2xl opacity-40 blur-[1px] border border-white/10"
        />

        {/* Floating Photo 4 (Bottom Right) */}
        <motion.img 
          src={photo4} 
          alt="Community" 
          animate={{ y: [0, 30, 0], rotate: [2, -3, 2] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[15%] right-[0%] md:right-[8%] w-36 md:w-56 h-36 md:h-56 object-cover rounded-[2.5rem] shadow-2xl opacity-20 md:opacity-30 border border-white/10"
        />
        
      </div>
      {/* =========================================== */}

      {/* Main Content (z-10) */}
      <div className="relative z-10 text-center max-w-[720px]">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="inline-block py-2 px-5 bg-white/12 border border-white/20 rounded-full text-white/90 text-sm font-medium backdrop-blur-md mb-6"
        >
          Ottawa's LGBTQ+ Community Centre
        </motion.p>
        
        <h1 className="text-white text-5xl md:text-[4rem] font-extrabold leading-[1.1] mb-5">
          Welcome to<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6]">United in Pride</span>
        </h1>
        
        <p className="text-white/80 text-lg md:text-[1.2rem] leading-[1.7] max-w-[540px] mx-auto mb-9">
          A safe, inclusive space where every identity is celebrated. Join our vibrant community in the heart of Ottawa.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/programs" className="px-8 py-3.5 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all">
            Explore Programs
          </a>
          <a href="/about" className="px-8 py-3.5 bg-white/15 border-2 border-white/40 backdrop-blur-md text-white rounded-full font-bold hover:bg-white/25 transition-all">
            Learn More
          </a>
        </div>
      </div>

      {/* Signature Wave (z-[3]) */}
      <svg className="absolute bottom-[-2px] left-0 w-full h-[180px] z-[3]" viewBox="0 0 1440 180" preserveAspectRatio="none">
        <path d="M0,80 C240,160 480,0 720,80 C960,160 1200,0 1440,80 L1440,180 L0,180 Z" fill="#FAFAFA"/>
      </svg>
      
    </section>
  );
}