import React from 'react';
import { motion } from 'framer-motion';

export default function PartnershipHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-[120px] pb-[160px] px-6 text-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#3b82f6]">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,107,0.3)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_60%)]"></div>
      </div>
      
      <div className="relative z-10 max-w-[1000px]">
        <motion.span 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="inline-block py-2 px-5 bg-white/12 border border-white/20 rounded-full text-white/90 text-sm font-medium backdrop-blur-md mb-6"
        >
          Systemic Change
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-5xl md:text-[4.5rem] font-extrabold leading-[1.1] mb-8"
        >
          Partnership <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6]">Opportunities</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg md:text-[1.2rem] leading-[1.8] max-w-[750px] mx-auto mb-10"
        >
          Join us in creating systemic change and building more inclusive communities. Together, we can expand our reach and impact for LGBTQ+ newcomers across Canada.
        </motion.p>
      </div>

      {/* Wave Divider */}
      <svg className="absolute bottom-[-2px] left-0 w-full h-[120px] md:h-[180px] z-[3]" viewBox="0 0 1440 180" preserveAspectRatio="none">
        <path d="M0,80 C240,160 480,0 720,80 C960,160 1200,0 1440,80 L1440,180 L0,180 Z" fill="#FFFFFF"/>
      </svg>
    </section>
  );
}