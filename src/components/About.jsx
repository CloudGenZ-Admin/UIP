import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/whoweare.jpg';
import CommunityGallery from './CommunityGallery';
import SliderWhoweare from './SliderWhoweare';
export default function About() {
  return (
    <section id="about" className="py-[100px] px-6 overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-[64px] items-center">
        
        {/* Left Side: Image */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
          <div className="aspect-square rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden relative z-[2]">
            <img 
              src={aboutImage} 
              alt="Our Community" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-[-20px] right-[-20px] w-[80%] h-[80%] rounded-[70%_30%_30%_70%/70%_70%_30%_30%] bg-purple-500/10 z-[1]"></div>
        </motion.div>

        {/* Right Side: Text */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
          <p className="text-[#FF6B6B] font-bold tracking-[2px] uppercase text-sm mb-2">Our Story</p>
          <h2 className="text-[2.5rem] font-extrabold leading-tight mb-4">Who We Are</h2>
          <p className="text-slate-500 text-[1.05rem] leading-[1.8] mb-8">
            United in Pride is a vibrant LGBTQ+ community centre located on the unceded territory of the Algonquin Anishinaabe Nation in Ottawa.
          </p>
          <div className="flex flex-col gap-5 mb-8">
            {[ 
              {i: "🤝", t: "Inclusive Community", d: "Open to all identities"},
              {i: "🛡️", t: "Safe Space", d: "Affirming environment for everyone"},
              {i: "🌱", t: "Growth & Healing", d: "Programs for wellness"}
            ].map((f, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-xl shrink-0">{f.i}</div>
                <div>
                  <strong className="block text-slate-800">{f.t}</strong>
                  <p className="text-slate-400 text-sm">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="/about" className="px-8 py-3.5 bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white rounded-full font-bold shadow-lg">Learn More</a>
        </motion.div>
        
      </div>
      < SliderWhoweare />
    </section>
  );
}