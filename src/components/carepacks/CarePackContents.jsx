import React from 'react';
import { motion } from 'framer-motion';
import carepackImg from '../../assets/carepack2.jpg';

const PACK_CONTENTS = [
  {
    id: 'apparel',
    title: 'Seasonal Apparel', // Ab ye simple dikhega
    desc: 'Stay warm and comfortable as you adjust to Canadian weather.',
    emoji: '🧣',
    accent: 'text-[#FF6B6B]',
    items: ['Warm knit beanie', 'Insulated gloves', 'Cozy wool-blend socks', 'Lightweight scarf']
  },
  {
    id: 'hygiene',
    title: 'Hygiene Essentials',
    desc: 'Personal care items to help you feel fresh and dignified.',
    emoji: '🧼',
    accent: 'text-[#A855F7]',
    items: ['Travel-size soap & body wash', 'Toothbrush & toothpaste', 'Shampoo & conditioner', 'Deodorant', 'Hand sanitizer']
  },
  {
    id: 'basics',
    title: 'Everyday Basics',
    desc: 'Practical items for your daily appointments and routines.',
    emoji: '📓',
    accent: 'text-[#3B82F6]',
    items: ['Notebook & pen', 'Reusable water bottle', 'Phone charger cable']
  },
  {
    id: 'resources',
    title: 'Local Resource Card',
    desc: 'Customized to your province to help you navigate your new home.',
    emoji: '🗺️',
    accent: 'text-[#FF6B6B]',
    items: ['Settlement agencies', 'LGBTQ+ health services', 'Peer support contacts', 'Transit & grocery info']
  }
];

const cardBorderStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B22, #A855F722, #3B82F622)',
};

export default function CarePackContents() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#FF6B6B] font-black text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            Essentials for your journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight"
          >
            What's Inside Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6]">Care Pack</span>
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Every pack is hand-packed by community volunteers, filled with carefully selected items to make your transition a little bit easier.
          </p>
        </div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative max-w-5xl mx-auto mb-20"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF6B6B]/10 via-[#A855F7]/10 to-[#3B82F6]/10 rounded-[4rem] blur-3xl opacity-50"></div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
            <img 
              src={carepackImg} 
              alt="Care Pack Items" 
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PACK_CONTENTS.map((category, idx) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              style={cardBorderStyle}
              className="bg-white border-2 border-transparent rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl shadow-inner shrink-0">
                  {category.emoji}
                </div>
                <div>
                  {/* Updated Category Heading: Removed 'italic', kept it bold and clean */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {category.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{category.desc}</p>
                </div>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-50">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                    <span className={`w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center shrink-0 ${category.accent}`}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-16 text-slate-400 font-bold text-sm uppercase tracking-[0.2em]">
          Contents may vary based on seasonal availability.
        </p>

      </div>
    </section>
  );
}