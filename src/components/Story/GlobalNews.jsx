import React, { useState } from 'react';
import { motion } from 'framer-motion';

const REGIONS = ['All Regions', 'East Africa', 'West Africa', 'Caribbean', 'North Africa'];

const NEWS_DATA = [
  {
    category: 'Legal Rights', region: 'East Africa',
    title: 'Uganda Parliament Passes Anti-LGBTQ+ Bill, Sparking Concern',
    desc: 'The Ugandan parliament has passed legislation that significantly restricts LGBTQ+ rights, prompting calls for increased protection.',
    source: 'BBC News Africa', date: '3/10/2024'
  },
  {
    category: 'Advocacy', region: 'Caribbean',
    title: 'Caribbean Organizations Unite for Regional Conference',
    desc: 'LGBTQ+ advocacy groups across the Caribbean are organizing a historic regional conference to address discrimination.',
    source: 'Caribbean Now', date: '3/8/2024'
  },
  {
    category: 'Legal Victory', region: 'Caribbean',
    title: 'Trinidad and Tobago Decriminalizes Same-Sex Relations',
    desc: "In a landmark decision, High Court has struck down laws criminalizing consensual same-sex relations.",
    source: 'Guardian', date: '2/28/2024'
  }
];

export default function GlobalNews() {
  const [activeTab, setActiveTab] = useState('All Regions');
  const filteredNews = activeTab === 'All Regions' ? NEWS_DATA : NEWS_DATA.filter(n => n.region === activeTab);

  return (
    <section className="py-24 px-6 bg-[#f1f5f9]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">African & Caribbean LGBTQ+ News</h2>
          <p className="text-slate-500">Curated updates on rights and global advocacy</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {REGIONS.map(region => (
            <button
              key={region}
              onClick={() => setActiveTab(region)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === region 
                ? 'bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white shadow-lg' 
                : 'bg-white text-slate-500 hover:shadow-md'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {filteredNews.map((news, idx) => (
            <motion.div 
              layout
              key={idx} 
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col"
            >
              <div className="flex gap-2 mb-4">
                <span className="bg-purple-50 text-[#A855F7] text-[0.65rem] font-black uppercase px-3 py-1 rounded-full">
                  {news.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{news.title}</h3>
              <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed">{news.desc}</p>
              <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                <span className="text-[0.7rem] text-slate-400 font-bold uppercase tracking-widest">{news.source}</span>
                <a href="#" className="text-[#3B82F6] font-bold text-sm">Read →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}