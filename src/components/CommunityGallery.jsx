import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Updated imports: g1 to g10
import img1 from '../assets/gallery/g1.jpeg';
import img2 from '../assets/gallery/g2.jpeg';
import img3 from '../assets/gallery/g3.jpeg';
import img4 from '../assets/gallery/g4.jpeg';
import img5 from '../assets/gallery/g5.jpeg';
import img6 from '../assets/gallery/g6.jpeg';
import img7 from '../assets/gallery/g7.jpeg';
import img8 from '../assets/gallery/g8.jpeg';
import img9 from '../assets/gallery/g9.jpeg';
import img10 from '../assets/gallery/g10.jpeg';

const GALLERY_IMAGES = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
];

export default function CommunityGallery() {
  const scrollRef = useRef(null);

  // Smooth scroll function for the buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      // Calculates scroll amount based on screen size
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden relative">
      
      {/* Hide scrollbars globally for this component but keep functionality */}
      <style>{`
        .hide-scroll {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>

      {/* Standard Header matching your design system */}
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Community <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] italic">
              in Action
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-md">
            Real moments of connection, joy, and empowerment from our community programs and cultural events.
          </p>
        </motion.div>
      </div>

      {/* Scrollable Gallery Wrapper with Absolute Floating Buttons */}
      <div className="relative w-full group">
        
        {/* Floating Left Button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 md:left-8 top-[40%] md:top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 flex items-center justify-center shadow-2xl hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#A855F7]/30"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Floating Right Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 md:right-8 top-[40%] md:top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 flex items-center justify-center shadow-2xl hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#A855F7]/30"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* The Scrolling Track */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scroll pb-12 pt-4 pr-12 scroll-smooth"
          style={{ paddingLeft: 'max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))' }}
        >
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
              className="relative shrink-0 snap-center group w-[80vw] sm:w-[50vw] md:w-[320px] lg:w-[380px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100/50 cursor-grab active:cursor-grabbing"
            >
              {/* Image */}
              <img 
                src={src} 
                alt={`Gallery Moment ${i + 1}`} 
                loading="lazy"
                draggable="false" // Prevents ghost dragging conflict with touch scroll
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Inner Border Ring */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-[3rem] transition-colors duration-300 pointer-events-none z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}