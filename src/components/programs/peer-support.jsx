import React from 'react';
import { motion } from 'framer-motion';

const cardBorderStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)',
};

export default function PeerSupportForm() {
  return (
    // 1. FIX: Added 'overflow-x-hidden' and ensured no top margin
    <div className="min-h-screen bg-[#f8fafc] font-sans overflow-x-hidden m-0 p-0 flex flex-col">
      
      {/* --- HERO SECTION --- */}
      {/* 2. FIX: Added 'top-0' and ensured the section starts at the absolute top */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-[100px] pb-[160px] px-6 m-0 border-none">
        
        {/* Background Gradient - Force to absolute top 0 */}
        <div className="absolute inset-0 top-0 z-0 bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#3b82f6]">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,107,0.3)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_60%)]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-[1000px]">
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => window.history.back()}
            className="mb-8 inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
          >
            {/* ← Go Back */}
          </motion.button>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-6xl font-black leading-tight mb-6"
          >
            Peer Support Circle <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6]">Registration</span>
          </motion.h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join our confidential, safe spaces where community members share experiences, build friendships, and support each other.
          </p>
        </div>

        {/* Signature Wave Divider */}
        <svg className="absolute bottom-[-2px] left-0 w-full h-[100px] md:h-[150px] z-[3]" viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path d="M0,80 C240,160 480,0 720,80 C960,160 1200,0 1440,80 L1440,180 L0,180 Z" fill="#f8fafc"/>
        </svg>
      </section>

      {/* --- MAIN CONTENT (Same as before, no reduction) --- */}
      <div className="max-w-[1200px] mx-auto px-6 -mt-24 pb-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={cardBorderStyle}
            className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-14 border-2 border-transparent shadow-2xl"
          >
            <div className="bg-[#A855F7]/5 p-8 rounded-[2rem] mb-12 border border-[#A855F7]/10">
              <h3 className="text-xl font-black text-slate-900 mb-2">Confidentiality Note</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Your privacy is very important to us. All information shared is confidential and will only be used to support your participation. You may skip any question you don't feel comfortable answering (except where marked required).
              </p>
            </div>

            <form className="space-y-16" onSubmit={e => e.preventDefault()}>
              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center font-black text-xl shadow-sm">1</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">Personal Information</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Full Name *</label>
                    <input type="text" placeholder="Enter preferred name" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Pronouns</label>
                    <input type="text" placeholder="e.g., they/them" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Email Address *</label>
                    <input type="email" placeholder="your@email.com" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Phone (optional)</label>
                    <input type="tel" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold" />
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#A855F7]/10 text-[#A855F7] flex items-center justify-center font-black text-xl shadow-sm">2</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">Participation Details</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Registering For</label>
                    <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] outline-none font-bold text-slate-600">
                      <option>Weekly Evening Circle</option>
                      <option>Weekend Morning Circle</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Attended before?</label>
                    <div className="flex gap-8 p-4 bg-slate-50 rounded-2xl">
                      <label className="flex items-center gap-2 font-bold text-slate-600 cursor-pointer"><input type="radio" name="attended" className="accent-[#A855F7]" /> Yes</label>
                      <label className="flex items-center gap-2 font-bold text-slate-600 cursor-pointer"><input type="radio" name="attended" className="accent-[#A855F7]" /> No</label>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center font-black text-xl shadow-sm">3</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">Background Information</h2>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Original Country</label>
                    <input type="text" placeholder="Country name" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] outline-none font-bold" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2 block">Current Status in Canada</label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {['Refugee claimant', 'Protected person', 'Permanent resident', 'Canadian citizen', 'International student', 'Work permit holder', 'Prefer not to say'].map(status => (
                        <label key={status} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 cursor-pointer hover:bg-slate-100 transition-all group">
                          <input type="radio" name="status" className="w-5 h-5 accent-[#A855F7]" /> 
                          <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900">{status}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-sm">4</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">Accessibility & Comfort</h2>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Accessibility Needs</label>
                    <textarea rows="3" placeholder="e.g., ASL, wheelchair access, etc." className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] outline-none resize-none font-medium"></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Allergies or Dietary Restrictions</label>
                    <textarea rows="3" placeholder="Please list any restrictions" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] outline-none resize-none font-medium"></textarea>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center font-black text-xl shadow-sm">5</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">LGBTQ+ Identity (Required)</h2>
                </div>
                <p className="text-slate-500 font-bold italic bg-slate-50 p-4 rounded-xl border-l-4 border-[#FF6B6B]">This support circle is for members of the LGBTQ+ community. How do you identify?</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {['Lesbian', 'Gay', 'Bisexual', 'Transgender', 'Queer', 'Two-Spirit', 'Non-binary', 'Intersex', 'Asexual'].map(id => (
                    <label key={id} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 accent-[#A855F7]" /> 
                      <span className="text-sm font-bold text-slate-600">{id}</span>
                    </label>
                  ))}
                  <input type="text" placeholder="Other specify" className="sm:col-span-3 w-full bg-slate-50 border-none rounded-2xl px-6 py-3 focus:ring-2 focus:ring-[#A855F7] outline-none font-bold" />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-2">Age Group</label>
                  <div className="flex flex-wrap gap-4">
                    {['18–24', '25–34', '35–44', '45+'].map(age => (
                      <label key={age} className="flex items-center gap-2 font-bold text-slate-600 cursor-pointer bg-slate-50 px-4 py-2 rounded-xl"><input type="radio" name="age" className="accent-[#A855F7]" /> {age}</label>
                    ))}
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#A855F7]/10 text-[#A855F7] flex items-center justify-center font-black text-xl shadow-sm">6</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">Goals & Interests</h2>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-2">What are you hoping to gain? (Check all that apply)</label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {['Safe space to share', 'Friendships', 'Resettlement guidance', 'Mental health support', 'Physical wellness'].map(goal => (
                      <label key={goal} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 accent-[#A855F7]" /> 
                        <span className="text-sm font-bold text-slate-600">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-sm">7</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">Consent & Privacy</h2>
                </div>
                
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-2">Photo/Video Consent?</label>
                  <div className="flex gap-6 p-4 bg-slate-50 rounded-2xl">
                    {['Yes', 'No', 'Ask me first'].map(opt => (
                      <label key={opt} className="flex items-center gap-2 font-bold text-slate-600 cursor-pointer"><input type="radio" name="media" className="accent-[#A855F7]" /> {opt}</label>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                  <label className="flex items-start gap-5 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-6 h-6 accent-[#FF6B6B] shrink-0" required />
                    <div className="text-sm space-y-4">
                      <p><strong className="text-[#FF6B6B] block mb-1 uppercase tracking-widest text-xs font-black">Privacy Agreement *</strong>I agree to respect the privacy of all support circle participants. I understand what is shared in sessions stays within the group.</p>
                      <p className="text-white/40">I understand United in Pride may use anonymous feedback to improve programs and share general statistics with partners.</p>
                    </div>
                  </label>
                </div>
              </section>

              <button type="submit" className="w-full py-5 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white font-black text-xl rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                Submit Registration 💜
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              style={cardBorderStyle}
              className="bg-white rounded-[2.5rem] p-8 border-2 border-transparent shadow-xl sticky top-8"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-8 italic">What to Expect</h3>
              <div className="space-y-10">
                <ExpectItem emoji="👋" title="Welcome & Intro" desc="We start each session with a warm welcome and group guidelines." />
                <ExpectItem emoji="🛡️" title="Safe Sharing" desc="Share at your comfort level. Everyone's participation is respected." />
                <ExpectItem emoji="🤝" title="Community" desc="End with connection activities and resource sharing." />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

function ExpectItem({ emoji, title, desc }) {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl shadow-sm shrink-0">{emoji}</div>
      <div>
        <h4 className="font-black text-slate-900 text-sm mb-1">{title}</h4>
        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}