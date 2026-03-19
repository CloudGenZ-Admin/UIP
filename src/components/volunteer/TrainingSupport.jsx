import React from 'react';
import { motion } from 'framer-motion';

const SUPPORT_PILLARS = [
  {
    title: 'Comprehensive Training',
    desc: 'Complete orientation program covering LGBTQ+ cultural competency, trauma-informed care, and role-specific skills.',
    icon: '📚'
  },
  {
    title: 'Ongoing Support',
    desc: 'Regular check-ins, peer support groups, and access to supervision from experienced staff members.',
    icon: '❤️'
  },
  {
    title: 'Flexible Scheduling',
    desc: 'Work with our team to create a volunteer schedule that fits your lifestyle and commitments.',
    icon: '⏱️'
  }
];

const cardBorderStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B22, #A855F722, #3B82F622)',
};

export default function TrainingSupport() {
  return (
    <section className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#FF6B6B] font-black text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            We Empower You
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Training & Support
          </h2>
          <p className="text-slate-500 text-lg">We ensure you have everything you need to succeed</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SUPPORT_PILLARS.map((pillar, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={cardBorderStyle}
              className="bg-white p-10 rounded-[2.5rem] text-center shadow-sm border-2 border-transparent hover:shadow-xl transition-all group"
            >
              <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-black text-slate-900 text-2xl mb-4 italic group-hover:text-[#A855F7] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}