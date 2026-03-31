import React from 'react';
import { motion } from 'framer-motion';
import CommunityGallery from '../CommunityGallery'; // Adjust path as needed

export default function ProgramsHero() {
  return (
    // Changed to flex-col so items stack vertically
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center overflow-hidden pt-[120px] pb-[160px]">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#3b82f6]">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,107,0.3)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_60%)]"></div>
      </div>
      
      {/* Top Text Section (Constrained Width) */}
      <div className="relative z-10 text-center max-w-[1000px] px-6 flex flex-col items-center w-full">
        <motion.span 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="inline-block py-2 px-5 bg-white/12 border border-white/20 rounded-full text-white/90 text-sm font-medium backdrop-blur-md mb-6"
        >
          Community Support & Wellness
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-5xl md:text-[4.5rem] font-extrabold leading-[1.1] mb-10"
        >
          Heal, Empower, and <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6]">Connect</span>
        </motion.h1>
      </div>

      {/* FULL WIDTH GALLERY SECTION */}
      <div className="relative z-10 w-full mb-10">
        <CommunityGallery />
      </div>

      {/* Floating Box (Constrained Width) */}
      <div className="relative z-10 px-6 w-full max-w-[1000px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/20 w-full mx-auto text-center md:text-left shadow-2xl"
        >
          <h3 className="text-xl md:text-2xl font-black mb-4 text-white italic">
            Grounded in Lived Experience & Cultural Affirmation
          </h3>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            At United in Pride, we offer a range of programs and services designed to meet the unique needs of LGBTQ+ newcomers, immigrants, and refugees. Our initiatives focus on healing, connection, empowerment, and advocacy.
          </p>
        </motion.div>
      </div>

      {/* Signature Wave */}
      <svg className="absolute bottom-[-2px] left-0 w-full h-[120px] md:h-[180px] z-[3]" viewBox="0 0 1440 180" preserveAspectRatio="none">
        <path d="M0,80 C240,160 480,0 720,80 C960,160 1200,0 1440,80 L1440,180 L0,180 Z" fill="#FFFFFF"/>
      </svg>
    </section>
  );
}