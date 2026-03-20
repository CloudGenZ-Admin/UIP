import React from 'react';
import { motion } from 'framer-motion';

const borderStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(90deg, #FF6B6B, #A855F7, #3B82F6)',
};

export default function Programs() {
  const progs = [
    { i: "🎨", t: "Peer Support Circles", d: "Safe, confidential spaces where community members can share experiences, build friendships, and support each other." },
    { i: "💬", t: "Resource Navigation", d: "Assistance connecting newcomers with essential services such as healthcare, legal aid, housing, and employment.", featured: true },
    { i: "📚", t: "Wellness Workshops", d: "Programs addressing mental health, trauma recovery, and holistic wellness tailored to the specific needs of our community." },
    { i: "🎉", t: "Cultural Events", d: "Celebrations and gatherings that honor the diverse identities and cultures within our community, fostering pride." },
  ];

  const ProgramCard = ({ p, i }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className={`p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full ${
        p.featured 
        ? 'bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white shadow-lg' 
        : 'bg-white shadow-sm border-t-4 border-transparent'
      }`}
      style={!p.featured ? borderStyle : {}}
    >
      <div className="text-[2rem] mb-4">{p.i}</div>
      <h3 className="text-[1.15rem] font-bold mb-3 leading-tight">{p.t}</h3>
      <p className={`text-[0.9rem] leading-[1.6] mb-5 flex-grow ${p.featured ? 'text-white/85' : 'text-[#64748b]'}`}>
        {p.d}
      </p>
      <a href="#" className={`font-semibold text-[0.9rem] mt-auto transition-opacity hover:opacity-80 ${
        p.featured ? 'text-white' : 'bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]'
      }`}>
        {p.featured ? 'Join Now →' : 'Explore →'}
      </a>
    </motion.div>
  );

  return (
    <section id="programs" className="py-[80px] md:py-[100px] bg-[#f1f5f9] px-6">
      <div className="max-w-[1400px] mx-auto"> {/* Max-width thoda bada kiya taaki 4 cards fit ho sakein */}
        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] font-bold tracking-[2px] uppercase text-sm mb-2">
          What We Offer
        </p>
        <h2 className="text-center text-[2.5rem] font-[800] leading-[1.2] mb-4">
          Our Programs
        </h2>
        <p className="text-center text-[#64748b] max-w-[560px] mx-auto mb-12">
          Empowering our community through diverse programs and initiatives.
        </p>

        {/* 4 Columns Grid for Desktop, 2 for Tablet, 1 for Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {progs.map((p, i) => (
            <ProgramCard key={i} p={p} i={i} />
          ))}
        </div>

        {/* SVG Divider niche shift kar diya hai kyuki ab 1 hi row hai */}
        <svg className="w-full h-[30px] mt-12" viewBox="0 0 1200 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,15 Q150,0 300,15 T600,15 T900,15 T1200,15" fill="none" stroke="url(#waveGrad1)" strokeWidth="2"/>
            <defs>
                <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6B6B"/>
                    <stop offset="50%" stopColor="#A855F7"/>
                    <stop offset="100%" stopColor="#3B82F6"/>
                </linearGradient>
            </defs>
        </svg>
      </div>
    </section>
  );
}