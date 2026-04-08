import React from 'react';
import { motion } from 'framer-motion';

const cardStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(180deg, #FF6B6B, #A855F7)',
};

export default function Stats() {
  const stats = [
    { n: "100+", l: "Participants", d: "Through United in Pride events" },
    { n: "300+", l: "Participants Reached", d: "Through community partner events" },
    { n: "150+", l: "Community Members", d: "Engaged in our community" },
    { n: "10+", l: "Community Events", d: "Workshops, socials, and more" },
    { n: "$500+", l: "Funds Raised", d: "Toward our fundraising goal" },
    { n: "∞", l: "A Safe Space", d: "Always welcoming, always open" }
  ];

  return (
    <section className="relative z-10 -mt-[100px] pb-[100px] px-6 overflow-visible bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {stats.map((s, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[20px] text-center shadow-xl border-l-4 border-transparent bg-white/90 backdrop-blur-md hover:-translate-y-2 transition-transform duration-300" 
            style={cardStyle}
          >
            <div className="text-[2.5rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] mb-1">
              {s.n}
            </div>
            <div className="font-bold text-slate-800 mb-1">{s.l}</div>
            <div className="text-[0.85rem] text-slate-400">{s.d}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}