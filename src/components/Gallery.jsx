import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const items = [
    { t: "Pride March 2024", c: "from-[#FF6B6B] to-[#A855F7]", l: true },
    { t: "Art Workshop", c: "from-[#A855F7] to-[#3B82F6]" },
    { t: "Youth Group", c: "from-[#3B82F6] to-[#06B6D4]" },
    { t: "Community Dinner", c: "from-[#06B6D4] to-[#A855F7]" },
    { t: "Annual Gala", c: "from-[#F59E0B] to-[#FF6B6B]", l: true },
    { t: "Wellness Retreat", c: "from-[#10B981] to-[#3B82F6]" }
  ];

  return (
    <section id="gallery" className="py-[100px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[2.5rem] font-extrabold mb-12">Community Gallery</h2>
        <div className="grid md:grid-cols-3 gap-5 auto-rows-[240px]">
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              className={`rounded-[24px] overflow-hidden group cursor-pointer relative ${item.l ? 'md:col-span-2' : ''}`}
            >
              <div className={`w-full h-full bg-gradient-to-br ${item.c} flex items-center justify-center text-white font-bold text-xl`}>
                {item.t}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/40 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}