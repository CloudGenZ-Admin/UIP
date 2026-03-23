import React from 'react';
import { motion } from 'framer-motion';

const cardBorderStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)',
};

export default function CulturalForm() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-[120px] pb-[160px] px-6">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#3b82f6]">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,107,0.3)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_60%)]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-[1000px]">
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => window.history.back()}
            className="mb-8 inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
          >
            
          </motion.button>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-6xl font-black leading-tight mb-6"
          >
            Join Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6]">Cultural Celebrations</span>
          </motion.h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Experience the richness of our diverse community through joyful celebrations that honor our heritage and build lasting memories.
          </p>
        </div>

        {/* Signature Wave Divider */}
        <svg className="absolute bottom-[-2px] left-0 w-full h-[100px] md:h-[150px] z-[3]" viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path d="M0,80 C240,160 480,0 720,80 C960,160 1200,0 1440,80 L1440,180 L0,180 Z" fill="#f8fafc"/>
        </svg>
      </section>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-[1200px] mx-auto px-6 -mt-24 pb-24 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Form Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={cardBorderStyle}
            className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-14 border-2 border-transparent shadow-2xl"
          >
            <form className="space-y-16" onSubmit={e => e.preventDefault()}>
              
              {/* Section 1: Personal Info */}
              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center font-black text-xl shadow-sm">1</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">Personal Information</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Full Name *</label>
                    <input type="text" placeholder="Enter your full name" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Pronouns</label>
                    <input type="text" placeholder="e.g., she/her, they/them" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Email Address *</label>
                    <input type="email" placeholder="your@email.com" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Phone (optional)</label>
                    <input type="tel" placeholder="For event updates" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold" />
                  </div>
                </div>
              </section>

              {/* Section 2: Event Interests */}
              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#A855F7]/10 text-[#A855F7] flex items-center justify-center font-black text-xl shadow-sm">2</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">Event Interests</h2>
                </div>
                <div className="space-y-6">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-2">Which celebrations interest you? (select all that apply) *</label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Pride Month Celebrations', 'Heritage & Cultural Festivals', 
                      'Holiday Gatherings', 'Seasonal Celebrations', 
                      'Community Achievement Events', 'Cultural Food Festivals', 
                      'Music & Dance Events', 'Art & Creativity Showcases', 
                      'Sports & Games Days', 'Storytelling & Poetry Nights'
                    ].map(event => (
                      <label key={event} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 cursor-pointer hover:bg-slate-100 transition-all group">
                        <input type="checkbox" className="w-5 h-5 accent-[#A855F7] rounded" /> 
                        <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900">{event}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 pt-4">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-2">Age Group</label>
                  <div className="flex flex-wrap gap-4">
                    {['18–24', '25–34', '35–44', '45–54', '55–64', '65+', 'Prefer not to say'].map(age => (
                      <label key={age} className="flex items-center gap-2 font-bold text-slate-600 cursor-pointer bg-slate-50 px-4 py-2 rounded-xl transition-all hover:bg-slate-200">
                        <input type="radio" name="event_age" className="accent-[#A855F7]" /> {age}
                      </label>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 3: Cultural Background */}
              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center font-black text-xl shadow-sm">3</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">Cultural Background</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Country/Region of Origin</label>
                    <input type="text" placeholder="Helps us plan inclusively" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] outline-none font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Cultural/Ethnic Background</label>
                    <input type="text" placeholder="Share what you feel comfortable with" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] outline-none font-bold" />
                  </div>
                </div>
              </section>

              {/* Section 4: Special Needs */}
              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-sm">4</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">Needs & Preferences</h2>
                </div>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Dietary Restrictions</label>
                    <textarea rows="2" placeholder="e.g., vegetarian, halal, allergies, etc." className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] outline-none resize-none font-medium"></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Accessibility Needs</label>
                    <textarea rows="2" placeholder="ASL, wheelchair access, etc." className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] outline-none resize-none font-medium"></textarea>
                  </div>
                </div>
              </section>

              {/* Section 5: Emergency & Volunteering */}
              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center font-black text-xl shadow-sm">5</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">Emergency & Volunteering</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Emergency Contact Name</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] outline-none font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Emergency Phone</label>
                    <input type="tel" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] outline-none font-bold" />
                  </div>
                </div>
                <label className="flex items-center gap-4 p-6 rounded-[2rem] bg-slate-900 text-white cursor-pointer hover:shadow-xl transition-all group">
                  <input type="checkbox" className="w-6 h-6 accent-[#FF6B6B] rounded" />
                  <span className="font-bold text-sm uppercase tracking-widest">I'm interested in volunteering for celebration planning 💜</span>
                </label>
              </section>

              {/* Section 6: Consent */}
              <section className="space-y-8">
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#A855F7]/10 text-[#A855F7] flex items-center justify-center font-black text-xl shadow-sm">6</span>
                  <h2 className="text-2xl font-black text-slate-900 italic">Consent & Preferences</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-2">Photo and Video Consent</label>
                    <div className="flex flex-wrap gap-6 p-4 bg-slate-50 rounded-2xl">
                      {['Yes, I consent', 'No photos please', 'Ask me first'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 font-bold text-slate-600 cursor-pointer"><input type="radio" name="event_media" className="accent-[#A855F7]" /> {opt}</label>
                      ))}
                    </div>
                  </div>

                  <label className="flex items-center gap-4 cursor-pointer p-2">
                    <input type="checkbox" className="w-5 h-5 accent-[#A855F7]" defaultChecked />
                    <span className="text-sm font-bold text-slate-500">Send me email reminders about upcoming celebrations</span>
                  </label>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Comments or Questions</label>
                    <textarea rows="3" placeholder="Any suggestions for our celebrations?" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] outline-none resize-none font-medium"></textarea>
                  </div>
                </div>
              </section>

              <button type="submit" className="w-full py-5 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white font-black text-xl rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                Join Our Celebrations 🌈
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Upcoming Events Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              style={cardBorderStyle}
              className="bg-white rounded-[2.5rem] p-8 border-2 border-transparent shadow-xl"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-2 italic">Upcoming Events</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-50 pb-4">Mark your calendar</p>
              
              <div className="space-y-6">
                <EventCard title="Pride Month Celebration" desc="Vibrant celebration with food, music, and performances." loc="Community Centre" />
                <EventCard title="Heritage Festival" desc="Experience diverse traditions through storytelling." loc="Riverside Park" />
                <EventCard title="Harvest Gathering" desc="Season traditions, games, and community gratitude." loc="Outdoor Venue" />
              </div>
            </motion.div>

            {/* What to Expect Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#1e1b4b] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden"
            >
              <h3 className="text-xl font-black mb-8 text-[#FF6B6B] italic">What to Expect</h3>
              <div className="space-y-8 relative z-10">
                <ExpectItem icon="🍲" title="Delicious Food" desc="Authentic dishes prepared with love. Restrictions accommodated." />
                <ExpectItem icon="🎵" title="Music & Dance" desc="Opportunities to share and experience diverse traditions." />
                <ExpectItem icon="🤝" title="Connection" desc="Meet new friends in a joyful, affirming environment." />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B6B]/10 rounded-full blur-3xl"></div>
            </motion.div>
            
          </div>

        </div>
      </div>
    </div>
  );
}

function EventCard({ title, desc, loc }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-black text-slate-900 text-sm">{title}</h4>
        <span className="bg-[#FF6B6B]/10 text-[#FF6B6B] text-[0.6rem] font-black uppercase px-3 py-1 rounded-full whitespace-nowrap">Coming soon</span>
      </div>
      <p className="text-[0.7rem] text-slate-500 mb-3 leading-relaxed">{desc}</p>
      <p className="text-[0.7rem] font-black text-[#3B82F6] uppercase tracking-widest">📍 {loc}</p>
    </div>
  );
}

function ExpectItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="text-2xl shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-white text-sm mb-1">{title}</h4>
        <p className="text-[0.7rem] text-white/50 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}