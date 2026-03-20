import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '150+', label: 'Circle Participants', desc: 'Weekly peer support connections' },
  { value: '85%', label: 'Wellness Improvement', desc: 'Reported better mental health' },
  { value: '24', label: 'Cultural Events', desc: 'Celebrating diverse communities' },
  { value: '500+', label: 'Service Connections', desc: 'Successful referrals made' },
];

export default function ProgramImpact() {
  return (
    <section className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Program Impact</h2>
          <p className="text-slate-500">Real results from culturally-affirming community programs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] text-center shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform"
            >
              <div className="font-black text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] mb-4">
                {stat.value}
              </div>
              <h4 className="font-black text-slate-900 mb-2 uppercase text-xs tracking-[0.2em]">{stat.label}</h4>
              <p className="text-sm text-slate-400 font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}