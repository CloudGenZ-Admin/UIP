import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProgramsCTA() {
  
  // Helper function to scroll to the top of the page when navigating
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-[1000px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="rounded-[3.5rem] p-[2px] shadow-2xl" 
          style={{ backgroundImage: 'linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)' }}
        >
          <div className="bg-white rounded-[calc(3.5rem-2px)] py-20 px-8 md:px-20 text-center">
            <span className="text-6xl mb-8 block">🌈</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Your Healing Journey <br /> Starts Here
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Join a community that understands your story, celebrates your identity, and supports your dreams. Every program is designed with your unique needs in mind.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {/* Added onClick scroll handler & removed the '#' from the URL */}
              <NavLink 
                to="/programs" 
                onClick={handleScrollToTop}
                className="px-10 py-5 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                Join Our Programs
              </NavLink>
              
              {/* Added to contact link as well for a consistent user experience */}
              <NavLink 
                to="/contact" 
                onClick={handleScrollToTop}
                className="px-10 py-5 border-2 border-slate-200 text-slate-900 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all"
              >
                Ask Questions
              </NavLink>
            </div>

            {/* <div className="max-w-md mx-auto border-t border-slate-100 pt-12">
              <h4 className="font-black text-slate-900 mb-2 uppercase text-xs tracking-[0.3em]">Stay Connected</h4>
              <p className="text-sm text-slate-400 mb-8">Get updates on resources and community news delivered to your inbox</p>
              <form className="flex gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-100" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-6 py-3 outline-none font-bold text-slate-700 placeholder:text-slate-300"
                />
                <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all">
                  Sign Up
                </button>
              </form>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}