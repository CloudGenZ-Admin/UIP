import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- Imported Link
import res1Img from '../../assets/WhatsApp Image 2026-03-26 at 10.51.07 AM (1).jpeg';
const contactCardStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)',
};

export default function ResourceNavigationIntro() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-black tracking-widest uppercase mb-6">
            Resource Navigation
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            We Walk Alongside You
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-6">
            Canada's asylum and refugee systems can feel overwhelming—especially when you're carrying the weight of fear, trauma, and uncertainty. At United in Pride, we understand because many of us have been there.
          </p>
          <p className="text-slate-500 text-lg leading-relaxed mb-10">
            Whether you need help understanding immigration policies, finding legal assistance, or connecting with culturally safe support services, we're here to guide you every step of the way.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <Feature icon="⚖️" title="Legal Support" desc="Immigration policies, refugee claims, and rights protection" />
            <Feature icon="🏠" title="Housing & Shelter" desc="Safe, affirming accommodation and housing assistance" />
            <Feature icon="❤️" title="Healthcare Access" desc="Medical care, mental health support, and wellness services" />
            <Feature icon="🤝" title="Settlement Services" desc="Language learning, employment, and community integration" />
          </div>

          <div style={contactCardStyle} className="rounded-[2.5rem] p-8 md:p-10 border-2 border-transparent shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] flex items-center justify-center text-white text-2xl shadow-lg">
                📞
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl">Ready to Connect?</h4>
                <p className="text-slate-500">Give us a call or send a message—we're here for you</p>
              </div>
            </div>
            
            {/* === CHANGED TO LINKS HERE === */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="flex-1 flex justify-center items-center bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all"
              >
                Contact Our Team
              </Link>
              <Link 
                to="/support"
                className="flex-1 flex justify-center items-center border-2 border-[#A855F7] text-[#A855F7] px-8 py-4 rounded-2xl font-bold hover:bg-purple-50 transition-all"
              >
                Get Immediate Help
              </Link>
            </div>
            {/* ============================= */}
            
          </div>
        </motion.div>

        {/* Right Image/Visual */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 relative z-10 group">
            <img 
              src={res1Img} 
              alt="Community support" 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Floating Trusted Partners Box */}
          <div className="absolute -bottom-10 -left-10 bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-100 max-w-[280px] z-20 hidden md:block">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <span className="font-black text-slate-900 text-lg">Trusted Partners</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Connected to 200+ LGBTQ+ affirming organizations across Canada
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-3xl shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  );
}