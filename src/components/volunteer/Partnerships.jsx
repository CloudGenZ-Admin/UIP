import React from 'react';
import { motion } from 'framer-motion';

export default function Partnerships() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#FF6B6B] font-black text-xs uppercase tracking-[0.3em] mb-4 block">Systemic Change</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Partnership Opportunities</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <PartnerLevel title="Community Partner" amt="$1,000+" items={['Logo on website', 'Social media recognition', 'Impact reports']} />
          <PartnerLevel title="Champion Partner" amt="$5,000+" featured={true} items={['Prominent logo placement', 'Partnership announcement', 'Co-branded programming']} />
          <PartnerLevel title="Visionary Partner" amt="$15,000+" items={['Title sponsorships', 'Custom development', 'Executive advisory involvement']} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TypeCard title="Organizational" desc="Collaborate with service providers and advocacy groups." />
          <TypeCard title="Event Collab" desc="Partner with us for Pride festivals and workshops." />
          <TypeCard title="Program Sponsor" desc="Invest directly in wellness and empowerment programs." />
          <TypeCard title="Corporate CSR" desc="Build authentic connections with diverse communities." />
        </div>
      </div>
    </section>
  );
}

function PartnerLevel({ title, amt, items, featured }) {
  return (
    <div className={`p-10 rounded-[3rem] border-2 transition-all ${featured ? 'bg-[#1e1b4b] text-white border-transparent shadow-2xl scale-105' : 'bg-white border-slate-100 text-slate-900'}`}>
      <h3 className="text-2xl font-black mb-2">{title}</h3>
      <p className={`text-xl font-bold mb-8 ${featured ? 'text-[#FF6B6B]' : 'text-[#A855F7]'}`}>{amt}</p>
      <ul className="space-y-4">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-sm font-bold opacity-80">
            <span className="text-[#FF6B6B]">✓</span> {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TypeCard({ title, desc }) {
  return (
    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
      <h4 className="font-black text-slate-900 mb-3 uppercase text-xs tracking-widest">{title}</h4>
      <p className="text-slate-500 text-sm font-medium">{desc}</p>
    </div>
  );
}