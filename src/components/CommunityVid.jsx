import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Aapke YouTube videos ki IDs
const YOUTUBE_VIDEOS = [
  { id: 'fadY9BXl79o', title: 'Community Voice 1' },
  { id: 'd58Gft_Ioa0', title: 'Community Voice 2' },
  { id: 'RSvC4Ps-u1Y', title: 'Community Voice 3' },
];

export default function CommunityStories() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Videos thode wide hain, isliye scroll amount thoda badha diya hai
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 560;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 w-full bg-white relative overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Community Voices</h2>
          <p className="text-slate-500 text-lg">Inspiring journeys of resilience and growth</p>
        </div>
      </div>

      {/* Hide Scrollbar CSS */}
      <style>{`
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Slider Wrapper */}
      <div className="relative w-full group">
        
        {/* Floating Left Button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 flex items-center justify-center shadow-2xl hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#A855F7]/30"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Floating Right Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 flex items-center justify-center shadow-2xl hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#A855F7]/30"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* The Scrolling Track */}
        <div 
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scroll pb-16 pt-4 pr-12 scroll-smooth items-center"
          // Aligning first video perfectly with the header text
          style={{ paddingLeft: 'max(1.5rem, calc((100vw - 1200px) / 2))' }}
        >
          {YOUTUBE_VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              // Changed aspect-[4/5] to aspect-video (16:9) and adjusted width for videos
              className="relative shrink-0 snap-center group w-[85vw] sm:w-[60vw] md:w-[450px] lg:w-[560px] aspect-video rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-[6px] border-slate-50 bg-slate-100"
            >
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-[1.5rem]"
                src={`https://www.youtube.com/embed/${video.id}?rel=0`} 
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
              
              {/* Optional overlay effect for design */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-[2rem] transition-colors duration-300 pointer-events-none z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}