import React from 'react';

export default function ContactNewsletterCTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div 
          className="rounded-[3.5rem] p-[2px] shadow-2xl shadow-purple-200/50" 
          style={{ backgroundImage: 'linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)' }}
        >
          <div className="bg-white rounded-[calc(3.5rem-2px)] py-16 px-8 md:px-20 text-center">
            <span className="text-6xl mb-8 block">💌</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Stay Connected</h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Get updates on programs, resources, volunteer opportunities, and community news delivered straight to your inbox.
            </p>

            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 p-2 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-inner">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 bg-transparent px-6 py-4 outline-none font-bold text-slate-700 placeholder:text-slate-400"
                required
              />
              <button type="submit" className="bg-slate-900 text-white px-8 py-4 rounded-[1.5rem] font-black hover:bg-black transition-all shadow-lg whitespace-nowrap">
                Sign Up Now
              </button>
            </form>
            <p className="mt-6 text-[0.7rem] font-black text-slate-300 uppercase tracking-[0.3em]">Join our global movement</p>
          </div>
        </div>
      </div>
    </section>
  );
}