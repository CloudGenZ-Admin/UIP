import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
          <p className="text-slate-500 text-lg leading-relaxed mb-10">
            Whether you need help understanding immigration policies, finding legal assistance, or connecting with culturally safe support services, we're here to guide you every step of the way.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <Feature 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#A855F7]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>}
              title="Legal Support" 
              desc="Immigration policies, refugee claims, and rights protection" 
            />
            <Feature 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#FF6B6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
              title="Housing & Shelter" 
              desc="Safe, affirming accommodation and housing assistance" 
            />
            <Feature 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
              title="Healthcare Access" 
              desc="Medical care, mental health support, and wellness services" 
            />
            <Feature 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
              title="Settlement Services" 
              desc="Language learning, employment, and community integration" 
            />
          </div>

          <div style={contactCardStyle} className="rounded-[2.5rem] p-8 md:p-10 border-2 border-transparent shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] flex items-center justify-center text-white text-2xl shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl">Ready to Connect?</h4>
                <p className="text-slate-500">Give us a call or send a message—we're here for you</p>
              </div>
            </div>
            
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
              <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
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
      <div className="shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  );
}