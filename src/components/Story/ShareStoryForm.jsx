import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ShareStoryForm() {
  const [storyText, setStoryText] = useState('');

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text & Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
          <span className="text-6xl mb-6 block">✍️</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Share Your Story</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Your journey matters. Help inspire others by sharing your experience with our community. 
            What would you want other LGBTQ+ newcomers to know?
          </p>
          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#FF6B6B]/10 to-[#A855F7]/10 border border-[#A855F7]/20">
            <p className="text-[#A855F7] font-bold italic">"Sharing my story wasn't just about helping others, it was about reclaiming my own power."</p>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-slate-50 p-10 rounded-[3rem] shadow-xl border border-slate-100"
        >
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Full Name (Anonymity optional)" 
              className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#A855F7] transition-all" 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#A855F7] transition-all" 
            />
            
            <div className="relative">
              <textarea 
                rows="5" 
                placeholder="Share your journey..."
                value={storyText}
                onChange={(e) => setStoryText(e.target.value)}
                maxLength={500}
                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#A855F7] transition-all resize-none"
              ></textarea>
              <span className="absolute bottom-4 right-4 text-xs font-bold text-slate-400">
                {storyText.length}/500
              </span>
            </div>

            {/* NEW: Consent & Permissions Section */}
            <div className="space-y-4 py-2 text-left">
              <p className="text-sm font-bold text-slate-800 ml-1">
                Consent & Permissions <span className="text-red-500">*</span>
              </p>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  required
                  className="mt-1 w-5 h-5 rounded accent-[#A855F7] shrink-0 cursor-pointer" 
                />
                <span className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                  <strong className="text-slate-800">I consent to publication:</strong> I give permission for United in Pride to publish my story on their website, social media, and other materials for community education and inspiration.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  required
                  className="mt-1 w-5 h-5 rounded accent-[#A855F7] shrink-0 cursor-pointer" 
                />
                <span className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                  <strong className="text-slate-800">I consent to editing:</strong> I understand my story may be edited for length, clarity, or safety reasons, and I will have the opportunity to review and approve any changes before publication.
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full mt-4 py-4 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Submit My Story 💜
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}