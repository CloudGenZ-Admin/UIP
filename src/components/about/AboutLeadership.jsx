import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/About3.png'; // Path to Stella and Hudson photo

export default function AboutLeadership() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF6B6B] to-[#A855F7] rounded-[3rem] blur-2xl opacity-10"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img src={aboutImage} alt="Stella and Hudson" className="w-full h-auto" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-2xl font-bold">Stella & Hudson</p>
                <p className="text-white/70">Founder & Inspiration</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">The Founder’s Journey</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Founder Stella Nakitende grew up in Uganda, where being lesbian meant living with fear. 
                Leaving her home was an act of courage. Arriving in Canada brought relief, but also new challenges 
                of isolation and cultural barriers.
              </p>
              <p>
                At the heart of United in Pride is Stella’s partner, Hudson, a trans man whose experiences with 
                discrimination and transphobia shaped both their lives. Together, they navigated the emotional 
                weight of migration and identity.
              </p>
              <div className="p-8 rounded-[2rem] bg-slate-50 border-l-8 border-[#A855F7] shadow-sm italic font-medium">
                "United in Pride exists because I know what it feels like to arrive in a country and still feel alone. 
                My hope is that every queer and trans newcomer can find a community where they feel safe, proud, and truly seen."
              </div>
              <p className="font-semibold text-[#A855F7]">— Stella Nakitende, Founder & Executive Director</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}