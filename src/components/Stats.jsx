import React from 'react';
import { motion } from 'framer-motion';

const cardStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(180deg, #FF6B6B, #A855F7)',
};

export default function Stats() {
  const stats = [
    { n: "2,500+", l: "Community Members", d: "Growing stronger together" },
    { n: "150+", l: "Annual Events", d: "Workshops, socials & more" },
    { n: "$26K", l: "Fundraising Goal", d: "Help us reach our target" },
    { n: "∞", l: "Safe Space", d: "Always welcoming, always open" }
  ];

  return (
    <section className="relative z-10 -mt-[100px] pb-[60px] px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[20px] text-center shadow-xl border-l-4 border-transparent" 
            style={cardStyle}
          >
            <div className="text-[2.5rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] mb-1">{s.n}</div>
            <div className="font-bold text-slate-800 mb-1">{s.l}</div>
            <div className="text-[0.85rem] text-slate-400">{s.d}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}