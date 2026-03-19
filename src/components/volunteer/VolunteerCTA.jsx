import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VolunteerCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    alert('Thank you! Your application has been submitted.');
    setIsModalOpen(false);
  };

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-[1000px] mx-auto">
        {/* Gradient Border Wrapper */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="rounded-[3.5rem] p-[2px] shadow-2xl shadow-purple-200/50" 
          style={{ backgroundImage: 'linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)' }}
        >
          <div className="bg-white rounded-[calc(3.5rem-2px)] py-16 px-8 md:px-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Join our community-led movement. Applications include a standard background check and reference requirements to ensure a safe environment for all.
            </p>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white font-black px-12 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-lg"
            >
              Apply to Volunteer 💜
            </button>
          </div>
        </motion.div>
      </div>

      {/* --- VOLUNTEER APPLICATION MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh] relative z-10 overflow-hidden border border-slate-100"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-10 py-8 border-b border-slate-50">
                <h3 className="text-2xl font-black text-slate-900">Volunteer Application</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Form Content */}
              <form onSubmit={handleApply} className="flex-1 overflow-y-auto p-10 space-y-8">
                
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">First Name *</label>
                    <input type="text" required className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Last Name *</label>
                    <input type="text" required className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold" />
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Email Address *</label>
                    <input type="email" required className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold" />
                  </div>
                </div>

                {/* Role Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Preferred Volunteer Role *</label>
                  <select required className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold text-slate-700">
                    <option value="" disabled selected>Select a role</option>
                    <option value="events">Peer Mentor</option>
                    <option value="mentor">Event Coordinator</option>
                    <option value="admin">Resource Ambassador</option>
                    <option value="marketing">Social Media Ally</option>
                    <option value="other">Open To Multiple Roles</option>
                  </select>
                </div>

                {/* Availability */}
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Availability *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Weekends'].map((time) => (
                      <label key={time} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 cursor-pointer hover:bg-slate-100 transition-all group">
                        <input type="checkbox" className="w-5 h-5 accent-[#A855F7] rounded" />
                        <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Motivation Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Why join United in Pride? *</label>
                  <textarea 
                    required 
                    maxLength={500}
                    rows="4" 
                    placeholder="Tell us what motivates you..."
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none resize-none font-medium"
                  ></textarea>
                </div>

                {/* Consent Agreement */}
                <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input type="checkbox" required className="mt-1 w-6 h-6 accent-[#A855F7] shrink-0" />
                    <span className="text-sm font-bold text-slate-700 leading-relaxed">
                      I understand that volunteering requires a background check and completion of orientation training. I commit to the values of inclusivity, respect, and confidentiality. *
                    </span>
                  </label>
                </div>

                {/* Modal Footer (Buttons) */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    type="submit" 
                    className="flex-1 py-5 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                  >
                    Submit Application
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setIsModalOpen(false)}
                    className="px-10 py-5 rounded-2xl text-slate-400 font-black text-lg bg-slate-50 hover:bg-slate-100 transition-all"
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}