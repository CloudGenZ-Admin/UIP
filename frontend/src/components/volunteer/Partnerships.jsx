import React from 'react';
import { motion } from 'framer-motion';

export default function PartnershipDetails() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1250px] mx-auto">
        
        {/* 1. Partnership Types (4 Columns) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          <TypeCard 
            title="Organizational" 
            desc="Collaborate with service providers and advocacy groups to expand impact." 
            bullets={["Service referral partnerships", "Shared programming", "Resource sharing", "Joint advocacy"]} 
          />
          <TypeCard 
            title="Event Collab" 
            desc="Partner with us to create meaningful events that bring communities together." 
            bullets={["Pride celebrations", "Educational workshops", "Cultural gatherings", "Fundraising galas"]} 
          />
          <TypeCard 
            title="Program Sponsor" 
            desc="Invest directly in community wellness and empowerment programs." 
            bullets={["Wellness circles", "Cultural programming", "Transportation fund", "Emergency support"]} 
          />
          <TypeCard 
            title="Corporate CSR" 
            desc="Build authentic connections with diverse communities through social impact." 
            bullets={["Title event sponsorships", "Brand visibility", "Employee engagement", "CSR development"]} 
          />
        </div>

        {/* 2. Partnership Investment Levels */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Partnership Investment Levels</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          <PartnerLevel 
            title="Community Partner" 
            amt="$1,000 - $4,999" 
            items={['Logo on website and materials', 'Social media recognition', 'Impact reports', 'Invitation to community events']} 
          />
          <PartnerLevel 
            title="Champion Partner" 
            amt="$5,000 - $14,999" 
            featured={true} 
            items={['Prominent logo placement', 'Partnership announcement', 'Co-branded programming', 'Quarterly partnership meetings']} 
          />
          <PartnerLevel 
            title="Visionary Partner" 
            amt="$15,000+" 
            items={['Title sponsorship opportunities', 'Custom partnership development', 'Executive advisory involvement', 'Dedicated relationship management']} 
          />
        </div>

        {/* 3. Resources Section */}
        <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 mb-32">
          <h3 className="text-2xl font-black text-slate-900 mb-8">Partnership Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <ResourceItem title="Partnership Deck" sub="Overview of opportunities" action="Download PDF" />
            <ResourceItem title="Impact Report 2024" sub="Annual community impact" action="Download PDF" />
            <ResourceItem title="Media Kit" sub="Logos and brand guidelines" action="Download ZIP" />
          </div>
        </div>

        {/* 4. Contact & Form Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6">Ready to Partner?</h2>
            <p className="text-slate-600 text-lg leading-[1.8] mb-10">
              Let's discuss how your organization can make a meaningful impact alongside United in Pride. Our team will work with you to create a customized collaboration.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <span className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">✉</span>
                partnerships@unitedinpride.org
              </div>
              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <span className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">📞</span>
                (416) 555-PARTNER
              </div>
            </div>
          </div>

          {/* PARTNERSHIP FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            className="bg-white shadow-2xl rounded-[2.5rem] border border-slate-100 p-8 md:p-10"
          >
            <h3 className="text-2xl font-black text-slate-900 mb-2">Explore Partnership</h3>
            <p className="text-slate-500 text-sm mb-8">Fill out the form below to start the conversation.</p>
            
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/20 outline-none" />
                <input type="text" placeholder="Organization Name" className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/20 outline-none" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Role / Title" className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/20 outline-none" />
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/20 outline-none" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Partnership Interest</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-600">
                   {["Sponsoring Events", "In-kind Support", "Program Collaboration", "Resource Sharing", "Corporate Volunteering", "Not sure yet"].map(item => (
                     <label key={item} className="flex items-center gap-2 cursor-pointer hover:text-purple-600">
                       <input type="checkbox" className="rounded text-purple-600" /> {item}
                     </label>
                   ))}
                </div>
              </div>

              <textarea placeholder="About Your Organization" className="w-full p-4 bg-slate-50 rounded-xl border-none h-24 outline-none focus:ring-2 focus:ring-purple-500/20"></textarea>
              <textarea placeholder="Ideas for Collaboration" className="w-full p-4 bg-slate-50 rounded-xl border-none h-24 outline-none focus:ring-2 focus:ring-purple-500/20"></textarea>
              <input type="text" placeholder="City / Province" className="w-full p-4 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-purple-500/20" />

              <label className="flex items-start gap-3 text-xs font-bold text-slate-500 cursor-pointer">
                <input type="checkbox" className="mt-0.5 rounded text-purple-600" required />
                I agree to be contacted by United in Pride regarding partnership opportunities.
              </label>

              <button className="w-full py-4 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white rounded-2xl font-black shadow-lg hover:scale-[1.02] transition-transform">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Internal Helper Components ---

function TypeCard({ title, desc, bullets }) {
  return (
    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group">
      <h4 className="font-black text-[#A855F7] mb-3 uppercase text-[10px] tracking-widest">{title}</h4>
      <p className="text-slate-900 font-bold mb-5 leading-snug">{desc}</p>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-xs font-medium text-slate-500 flex items-center gap-2">
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
      {/* <button className={`w-full py-4 rounded-2xl font-bold ${featured ? 'bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white' : 'bg-slate-100 text-slate-800'}`}>Choose Plan</button> */}
    </div>
  );
}

function ResourceItem({ title, sub, action }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <h5 className="font-bold text-slate-900">{title}</h5>
      <p className="text-xs text-slate-500 mb-4">{sub}</p>
      <button className="text-sm font-black text-[#3B82F6] hover:underline flex items-center gap-2">
        📥 {action}
      </button>
    </div>
  );
}