import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { 
    value: '75%+', 
    label: 'Reported Improved Well-Being', 
    desc: 'Participants said they felt more connected, supported, and positive after attending a United in Pride event or program.' 
  },
  { 
    value: '80%+', 
    label: 'Felt a Greater Sense of Belonging', 
    desc: 'Participants shared that they felt welcomed, accepted, and part of a community.' 
  },
  { 
    value: '70%+', 
    label: 'Made a New Connection or Friendship', 
    desc: 'Many participants left with at least one new friendship, peer connection, or support contact.' 
  },
  { 
    value: '90%+', 
    label: 'Would Attend Again or Recommend', 
    desc: 'Participants expressed strong interest in returning and encouraging others to join United in Pride.' 
  },
];

export default function ProgramImpact() {
  return (
    <section className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Program Impact</h2>
          <p className="text-slate-500 text-lg">Real results from culturally-affirming community programs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] text-center shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform flex flex-col h-full"
            >
              <div className="font-black text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] mb-4">
                {stat.value}
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-sm tracking-wide uppercase">{stat.label}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed flex-grow">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}