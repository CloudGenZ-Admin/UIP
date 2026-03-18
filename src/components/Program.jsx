import React from 'react';
import { motion } from 'framer-motion';

const borderStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(90deg, #FF6B6B, #A855F7, #3B82F6)',
};

export default function Programs() {
  const progs = [
    { i: "🎨", t: "Art & Creativity", d: "Express yourself through painting, sculpture, digital art, and collaborative murals in our open studio." },
    { i: "💬", t: "Support Groups", d: "Peer-led and professional support circles for coming out, transitioning, and mental health.", featured: true },
    { i: "📚", t: "Education", d: "Workshops on queer history, allyship training, legal rights, and 2SLGBTQIA+ cultural competency." },
    { i: "🎉", t: "Social Events", d: "Movie nights, game evenings, potlucks, dances, and seasonal celebrations for all ages." },
    { i: "🧘", t: "Wellness", d: "Yoga, meditation, fitness classes, and holistic health workshops in a body-positive environment." },
    { i: "📢", t: "Advocacy", d: "Community organizing, policy advocacy, and civic engagement to advance 2SLGBTQIA+ rights." }
  ];

  const ProgramCard = ({ p, i }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className={`p-9 rounded-[20px] transition-all duration-300 hover:-translate-y-1.5 ${
        p.featured 
        ? 'bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white shadow-lg' 
        : 'bg-white shadow-sm border-t-4 border-transparent'
      }`}
      style={!p.featured ? borderStyle : {}}
    >
      <div className="text-[2.2rem] mb-4">{p.i}</div>
      <h3 className="text-[1.25rem] font-bold mb-3">{p.t}</h3>
      <p className={`text-[0.95rem] leading-[1.7] mb-5 ${p.featured ? 'text-white/85' : 'text-[#64748b]'}`}>
        {p.d}
      </p>
      <a href="#" className={`font-semibold text-[0.95rem] transition-opacity hover:opacity-80 ${
        p.featured ? 'text-white' : 'bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]'
      }`}>
        {p.featured ? 'Join Now →' : 'Explore →'}
      </a>
    </motion.div>
  );

  return (
    <section id="programs" className="py-[80px] md:py-[100px] bg-[#f1f5f9] px-6">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] font-bold tracking-[2px] uppercase text-sm mb-2">
          What We Offer
        </p>
        <h2 className="text-center text-[2.5rem] font-[800] leading-[1.2] mb-4">
          Our Programs
        </h2>
        <p className="text-center text-[#64748b] max-w-[560px] mx-auto mb-12">
          Empowering our community through diverse programs and initiatives.
        </p>

        {/* First Row */}
        <div className="grid md:grid-cols-3 gap-7">
          {progs.slice(0, 3).map((p, i) => (
            <ProgramCard key={i} p={p} i={i} />
          ))}
        </div>

        {/* EXACT SVG WAVE DIVIDER FROM YOUR CODE */}
        <svg className="w-full h-[30px] my-8" viewBox="0 0 1200 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,15 Q150,0 300,15 T600,15 T900,15 T1200,15" fill="none" stroke="url(#waveGrad1)" strokeWidth="2"/>
            <defs>
                <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6B6B"/>
                    <stop offset="50%" stopColor="#A855F7"/>
                    <stop offset="100%" stopColor="#3B82F6"/>
                </linearGradient>
            </defs>
        </svg>

        {/* Second Row */}
        <div className="grid md:grid-cols-3 gap-7">
          {progs.slice(3, 6).map((p, i) => (
            <ProgramCard key={i + 3} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}