import React from 'react';
import { motion } from 'framer-motion';

export default function AboutWhyAndValues() {
  return (
    <section className="py-24 px-6 bg-[#1e1b4b] text-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Why United in Pride Exists</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            We know what it feels like to hide. United in Pride exists because LGBTQ+ newcomers 
            deserve more than safety at the border—they deserve belonging in everyday life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] mb-4">100+</h3>
            <p className="text-xl font-bold mb-3">Directly Supported</p>
            <p className="text-white/60 leading-relaxed">
              Through peer programs, referrals, and joint community initiatives since our founding in 2025.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#A855F7] to-[#3B82F6] mb-4">National</h3>
            <p className="text-xl font-bold mb-3">Community Movement</p>
            <p className="text-white/60 leading-relaxed">
              A volunteer-driven approach working collaboratively with partners like ACOttawa to strengthen safety pathways across Canada.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: 'Safety First', d: 'Secure environments where vulnerability is protected.', e: '🛡️' },
            { t: 'Inclusive Community', d: 'Welcoming all identities without judgment.', e: '🌈' },
            { t: 'Healing Growth', d: 'Supporting journeys of personal development.', e: '🌱' },
            { t: 'Joy & Celebration', d: 'Embracing happiness as an act of resistance.', e: '✨' }
          ].map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] text-slate-900 shadow-xl">
              <span className="text-4xl mb-4 block">{v.e}</span>
              <h4 className="font-bold text-lg mb-2">{v.t}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Wave bottom decoration */}
      <svg className="absolute bottom-0 left-0 w-full h-[60px]" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,30 Q360,60 720,30 T1440,30 L1440,60 L0,60 Z" fill="#FAFAFA"/>
      </svg>
    </section>
  );
}