import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  { num: '1', title: 'Reach Out', desc: "Contact us through our support form, phone, or email. We'll schedule a welcoming conversation to understand your needs.", link: 'Get in Touch →', color: 'from-[#FF6B6B] to-[#FF8E8E]' },
  { num: '2', title: 'Find Your Fit', desc: "Together, we'll identify which programs align with your goals, comfort level, and availability. Every journey is unique.", link: 'Explore Programs →', color: 'from-[#A855F7] to-[#D397F8]' },
  { num: '3', title: 'Join Community', desc: "Start participating in programs that speak to you. Build connections, access resources, and begin your healing journey.", link: 'Start Your Journey →', color: 'from-[#3B82F6] to-[#82B1FF]' }
];

export default function JourneySteps() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 italic">Ready to Begin Your Journey?</h2>
          <p className="text-slate-500 text-lg">Simple steps to join our community programs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-[60px] left-20 right-20 h-1 bg-slate-50 -z-10" />

          {STEPS.map((step, idx) => (
            <motion.div 
              key={step.num} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${step.color} border-[8px] border-white flex items-center justify-center font-black text-4xl text-white shadow-2xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {step.num}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6 flex-1">{step.desc}</p>
              <a href="#" className="font-black text-sm uppercase tracking-widest text-[#A855F7] hover:text-[#FF6B6B] transition-colors">
                {step.link}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}