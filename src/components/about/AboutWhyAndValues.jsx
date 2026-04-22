import React from 'react';
import { motion } from 'framer-motion';

export default function AboutWhyAndValues() {
  return (
    <section className="py-24 px-6 bg-[#1e1b4b] text-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Our Why Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Our Why</h2>
          <div className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed space-y-5">
            <p>
              <strong className="text-white font-bold">We Know Rejection.</strong> We built this space because we know what it feels like to be rejected — not just by systems, but by our own families, our churches, our communities.
            </p>
            <p>
              <strong className="text-white font-bold">We Know Courage.</strong> We know what it feels like to hide — and we know the courage it takes to stop hiding.
            </p>
            <p className="text-2xl text-white font-semibold pt-4 leading-snug">
              United in Pride exists because we believe in something bigger. Queer immigrants deserve more than survival. We deserve to heal. To be loved. To belong.
            </p>
          </div>
        </div>

        {/* Leadership & Growth Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center"
          >
            <h3 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] mb-4">Leadership</h3>
            <p className="text-2xl font-bold mb-3">Our Foundation</p>
            <p className="text-white/70 leading-relaxed text-lg">
              United in Pride is founded by Stella Nakitende, a Ugandan lesbian dedicated and committed to empowering 2SLGBTQ+ newcomers, immigrants, and refugees fleeing persecution.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center"
          >
            <h3 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#A855F7] to-[#3B82F6] mb-4">Growth</h3>
            <p className="text-2xl font-bold mb-3">Scaling Our Impact</p>
            <p className="text-white/70 leading-relaxed text-lg">
              As her impact grows, she is preparing to scale: expanding peer circles, launching new wellness initiatives, and building a dedicated Advisory Board to steward our growth.
            </p>
          </motion.div>
        </div>

        {/* Values Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Values</h2>
          <p className="text-white/60 text-lg">The principles that guide everything we do</p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: 'Safety First', d: 'Creating secure environments where vulnerability is protected and honored.' },
            { t: 'Inclusive Community', d: 'Welcoming all identities, backgrounds, and experiences without judgment.' },
            { t: 'Healing Growth', d: 'Supporting individual journeys of healing and personal development.' },
            { t: 'Joy & Celebration', d: 'Embracing happiness and celebrating achievements as acts of resistance.' }
          ].map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] text-slate-900 shadow-xl flex flex-col h-full border-t-4 border-[#A855F7]">
              <h4 className="font-bold text-xl mb-3">{v.t}</h4>
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