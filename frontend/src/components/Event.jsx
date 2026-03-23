import React from 'react';
import { motion } from 'framer-motion';

const featuredCardStyle = {
  border: '2px solid transparent',
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)',
};

export default function Events() {
  const eventsData = [
    {
      day: "15",
      month: "MAR",
      title: "Art Workshop: Queer Portraits",
      desc: "Explore identity through mixed-media portraiture. All skill levels welcome.",
      loc: "Studio A",
      time: "2:00 PM – 5:00 PM",
      featured: false
    },
    {
      day: "20",
      month: "MAR",
      title: "Community Dinner: Taste of Pride",
      desc: "A potluck celebrating diverse cuisines and cultures. Bring a dish, share a story.",
      loc: "Main Hall",
      time: "6:00 PM – 9:00 PM",
      featured: true
    },
    {
      day: "25",
      month: "MAR",
      title: "Support Group: Finding Your Voice",
      desc: "A facilitated peer support circle for those navigating identity and belonging.",
      loc: "Room 204",
      time: "7:00 PM – 8:30 PM",
      featured: false
    }
  ];

  return (
    <section id="events" className="py-[100px] bg-[#f1f5f9] px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Headers */}
        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] font-bold tracking-[2px] uppercase text-sm mb-2">
          What's Coming Up
        </p>
        <h2 className="text-center text-[2.5rem] font-[800] leading-[1.2] mb-[48px]">
          Upcoming Events
        </h2>

        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          
          {/* Timeline Section */}
          <div className="relative pl-[60px]">
            {/* SVG Timeline Curve */}
            <svg className="absolute left-0 top-0 w-[60px] h-full" viewBox="0 0 60 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30,0 C60,100 0,200 30,300 C60,400 0,500 30,600" fill="none" stroke="url(#curveGrad)" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="curveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B6B" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex flex-col gap-10">
              {eventsData.map((ev, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }} 
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative ${ev.featured ? 'featured' : ''}`}
                >
                  {/* Event Node (The dot on the line) */}
                  <div className={`absolute left-[-48px] top-6 rounded-full border-[3px] border-[#f1f5f9] bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] z-10 transition-all 
                    ${ev.featured ? 'w-[22px] h-[22px] left-[-51px] top-[21px] shadow-[0_0_0_6px_rgba(168,85,247,0.2)]' : 'w-4 h-4'}`} 
                  />

                  {/* Event Card */}
                  <div 
                    className="bg-white p-7 rounded-[20px] flex flex-col md:flex-row gap-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:translate-x-1.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
                    style={ev.featured ? featuredCardStyle : {}}
                  >
                    {/* Date Block */}
                    <div className="bg-gradient-to-br from-[rgba(255,107,107,0.08)] to-[rgba(168,85,247,0.08)] p-3 rounded-[16px] flex flex-row md:flex-col items-center justify-center shrink-0 min-w-[64px] gap-2 md:gap-0">
                      <span className="text-[1.8rem] font-black text-[#A855F7] leading-none">{ev.day}</span>
                      <span className="text-[0.75rem] font-bold text-slate-400 tracking-wider uppercase">{ev.month}</span>
                    </div>

                    {/* Details Block */}
                    <div className="flex-1">
                      <h3 className="text-[1.1rem] font-bold text-slate-800 mb-1.5">{ev.title}</h3>
                      <p className="text-slate-500 text-[0.9rem] leading-[1.6] mb-2.5">{ev.desc}</p>
                      <div className="flex flex-wrap gap-4 text-[0.8rem] text-slate-400">
                        <span className="flex items-center gap-1">📍 {ev.loc}</span>
                        <span className="flex items-center gap-1">🕐 {ev.time}</span>
                      </div>
                      {ev.featured && (
                        <span className="inline-block mt-3 px-3.5 py-1 bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white rounded-full text-[0.75rem] font-bold shadow-sm">
                          Featured Event
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Calendar Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            className="sticky top-[100px]"
          >
            <div 
              className="bg-white p-7 rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              style={{
                border: '2px solid transparent',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B22, #A855F722, #3B82F622)',
              }}
            >
              <div className="text-center font-bold text-[1.1rem] mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
                March 2025
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-[0.8rem]">
                {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                  <span key={d} className="font-bold p-2 text-slate-800 text-[0.7rem]">{d}</span>
                ))}
                {/* Empty slots for March 2025 (Starts on Saturday) */}
                {[...Array(6)].map((_, i) => <span key={`empty-${i}`} />)}
                
                {Array.from({length: 31}, (_, i) => {
                  const day = i + 1;
                  const is15 = day === 15;
                  const is20 = day === 20;
                  const is25 = day === 25;
                  
                  return (
                    <span 
                      key={day} 
                      className={`p-2 rounded-lg transition-all ${
                        is20 ? 'bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] text-white font-bold' : 
                        (is15 || is25) ? 'bg-purple-100 text-[#A855F7] font-bold' : 
                        'text-slate-500'
                      }`}
                    >
                      {day}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}