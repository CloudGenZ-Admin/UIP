import React from 'react';
import { motion } from 'framer-motion';

const SUPPORT_PILLARS = [
  {
    title: 'Comprehensive Training',
    desc: 'Complete orientation program covering LGBTQ+ cultural competency, trauma-informed care, and role-specific skills.',
    icon: '📚'
  },
  {
    title: 'Ongoing Support',
    desc: 'Regular check-ins, peer support groups, and access to supervision from experienced staff members.',
    icon: '❤️'
  },
  {
    title: 'Flexible Scheduling',
    desc: 'Work with our team to create a volunteer schedule that fits your lifestyle and commitments.',
    icon: '⏱️'
  }
];

const cardBorderStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B22, #A855F722, #3B82F622)',
};

export default function VolunteerDetails() {
  const volunteerInterests = [
    "Event support", "Peer support / community hosting", "Program coordination", 
    "Outreach / social media", "Translation / interpretation", "Graphic design / admin", 
    "Fundraising support", "Care pack coordination", "Other"
  ];

  const livedExperienceOptions = [
    "LGBTQ+ newcomer / immigrant", "LGBTQ+ community member", "Ally", "Prefer not to say"
  ];

  return (
    <section className="py-24 px-6 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-[1250px] mx-auto">

        <div className="text-center mb-16 ">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#FF6B6B] font-black text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            We Empower You
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Training & Support
          </h2>
          <p className="text-slate-500 text-lg">We ensure you have everything you need to succeed</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SUPPORT_PILLARS.map((pillar, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={cardBorderStyle}
              className="bg-white p-10 rounded-[2.5rem] text-center shadow-sm border-2 border-transparent hover:shadow-xl transition-all group"
            >
              <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-black text-slate-900 text-2xl mb-4 italic group-hover:text-[#A855F7] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>


        


        {/* 4. Volunteer Application Form Section */}
        <div id="apply-form" className="grid lg:grid-cols-2 gap-16 items-start mt-16">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6">Apply to Volunteer</h2>
            <p className="text-slate-600 text-lg leading-[1.8] mb-10">
              Join us in building a national movement. Together, we're creating lasting change for LGBTQ+ newcomers across Canada. Your voice, your time, and your support make all the difference.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <span className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">✉</span>
                volunteer@unitedinpride.org
              </div>
              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <span className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">💬</span>
                (416) 555-PRIDE
              </div>
            </div>
          </div>

          {/* VOLUNTEER FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            className="bg-white shadow-2xl rounded-[2.5rem] border border-slate-100 p-8 md:p-10"
          >
            <h3 className="text-2xl font-black text-slate-900 mb-2">Volunteer Application</h3>
            <p className="text-slate-500 text-sm mb-8 font-medium">Please fill in your details below.</p>
            
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/20 outline-none" />
                <input type="text" placeholder="Preferred Name (optional)" className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/20 outline-none" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/20 outline-none" />
                <input type="text" placeholder="Phone / WhatsApp" className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/20 outline-none" />
              </div>

              <input type="text" placeholder="City" className="w-full p-4 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-purple-500/20" />

              {/* Volunteer Interests */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">How would you like to volunteer?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-bold text-slate-600">
                   {volunteerInterests.map(item => (
                     <label key={item} className="flex items-center gap-2 cursor-pointer hover:text-purple-600">
                       <input type="checkbox" className="rounded text-purple-600" /> {item}
                     </label>
                   ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">How often can you volunteer?</p>
                <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-600">
                   {["Occasionally", "Monthly", "Bi-weekly", "Weekly"].map(time => (
                     <label key={time} className="flex items-center gap-2 cursor-pointer">
                       <input type="radio" name="availability" className="text-purple-600" /> {time}
                     </label>
                   ))}
                </div>
              </div>

              {/* Lived Experience */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Do you identify as: (Optional)</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-bold text-slate-600">
                   {livedExperienceOptions.map(exp => (
                     <label key={exp} className="flex items-center gap-2 cursor-pointer">
                       <input type="checkbox" className="text-purple-600" /> {exp}
                     </label>
                   ))}
                </div>
              </div>

              <textarea placeholder="Tell us about any relevant experience or skills" className="w-full p-4 bg-slate-50 rounded-xl border-none h-24 outline-none focus:ring-2 focus:ring-purple-500/20"></textarea>
              <textarea placeholder="Why would you like to volunteer with United in Pride?" className="w-full p-4 bg-slate-50 rounded-xl border-none h-24 outline-none focus:ring-2 focus:ring-purple-500/20"></textarea>

              <label className="flex items-start gap-3 text-xs font-bold text-slate-500 cursor-pointer pt-2">
                <input type="checkbox" className="mt-0.5 rounded text-purple-600" required />
                I agree to be contacted about volunteer opportunities.
              </label>

              <button className="w-full py-4 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white rounded-2xl font-black shadow-lg hover:scale-[1.02] transition-transform">
                Submit Volunteer Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Helper Components (Same as Partnership) ---

function TypeCard({ title, desc, bullets }) {
  return (
    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group">
      <h4 className="font-black text-[#A855F7] mb-3 uppercase text-[10px] tracking-widest">{title}</h4>
      <p className="text-slate-900 font-bold mb-5 leading-snug">{desc}</p>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-[11px] font-bold text-slate-500 flex items-center gap-2">
            <span className="text-[#FF6B6B]">✦</span> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PartnerLevel({ title, amt, items, featured }) {
  return (
    <div className={`p-10 rounded-[3rem] border-2 transition-all flex flex-col h-full ${featured ? 'bg-[#1e1b4b] text-white border-transparent shadow-2xl scale-105 z-10' : 'bg-white border-slate-100 text-slate-900'}`}>
      <h3 className="text-2xl font-black mb-2">{title}</h3>
      <p className={`text-xl font-bold mb-8 ${featured ? 'text-[#FF6B6B]' : 'text-[#A855F7]'}`}>{amt}</p>
      <ul className="space-y-4 flex-grow mb-8">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-sm font-bold opacity-80">
            <span className="text-[#FF6B6B]">✓</span> {it}
          </li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded-2xl font-bold ${featured ? 'bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white' : 'bg-slate-100 text-slate-800'}`}>Apply Now</button>
    </div>
  );
}

function ResourceItem({ title, sub, action }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col justify-between">
      <div>
        <h5 className="font-bold text-slate-900">{title}</h5>
        <p className="text-xs text-slate-500 mb-4">{sub}</p>
      </div>
      <button className="text-sm font-black text-[#3B82F6] hover:underline flex items-center gap-2">
        📥 {action}
      </button>
    </div>
  );
}