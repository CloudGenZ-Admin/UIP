import React from 'react';
import { motion } from 'framer-motion';

const STORIES_DATA = [
  {
    name: 'Alex R.',
    role: 'Member since 2022',
    text: '"United in Pride gave me the courage to be myself. The support groups changed my life — I finally found people who understand my journey."',
    gradId: 'tGrad1',
    colors: ['#FF6B6B', '#A855F7'],
    initial: 'A'
  },
  {
    name: 'Jordan M.',
    role: 'Volunteer & Advocate',
    text: '"As a Two-Spirit person, finding a space that honours both my Indigenous and queer identities has been transformative. This centre is home."',
    gradId: 'tGrad2',
    colors: ['#A855F7', '#3B82F6'],
    initial: 'J'
  },
  {
    name: 'Sam T.',
    role: 'Program Participant',
    text: '"The wellness programs helped me reconnect with my body after years of dysphoria. The instructors are so affirming and knowledgeable."',
    gradId: 'tGrad3',
    colors: ['#3B82F6', '#06B6D4'],
    initial: 'S'
  },
];

export default function Stories() {
  return (
    <section id="testimonials" className="py-[100px] px-6 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Headers */}
        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] font-bold tracking-[2px] uppercase text-[0.875rem] mb-2">
          Community Voices
        </p>
        <h2 className="text-center text-[2.5rem] font-[800] text-[#1e1e2e] mb-12">
          Stories of Pride
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-[28px]">
          {STORIES_DATA.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Testimonial Header with EXACT SVG Wave */}
              <div className="relative h-[80px] flex items-end justify-center">
                <svg 
                  className="absolute top-0 left-0 w-full h-[60px]" 
                  viewBox="0 0 400 30" 
                  preserveAspectRatio="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M0,0 L400,0 L400,15 Q300,30 200,15 T0,15 Z" 
                    fill={`url(#${story.gradId})`}
                  />
                  <defs>
                    <linearGradient id={story.gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={story.colors[0]} />
                      <stop offset="100%" stopColor={story.colors[1]} />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Avatar Circle */}
                <div 
                  className="w-[56px] h-[56px] rounded-full flex items-center justify-center text-white font-[800] text-[1.3rem] border-[4px] border-white relative z-10 -mb-[28px] shadow-sm"
                  style={{ background: `linear-gradient(135deg, ${story.colors[0]}, ${story.colors[1]})` }}
                >
                  {story.initial}
                </div>
              </div>

              {/* Testimonial Body */}
              <div className="pt-[40px] px-[28px] pb-[28px] text-center">
                <p className="text-[0.95rem] text-[#475569] leading-[1.8] italic mb-5">
                  {story.text}
                </p>
                <div className="text-center">
                  <strong className="block text-[1rem] text-[#1e1e2e] font-bold">
                    {story.name}
                  </strong>
                  <span className="text-[0.85rem] text-[#94a3b8]">
                    {story.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}