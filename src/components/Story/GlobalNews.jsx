import React, { useState } from 'react';
import { motion } from 'framer-motion';

const REGIONS = ['All Regions', 'East Africa', 'West Africa', 'Caribbean', 'North Africa'];

// 1. Categories ke liye color mapping
const CATEGORY_STYLES = {
  'Legal Rights': 'bg-red-50 text-red-600 border-red-100',
  'Community Organizing': 'bg-emerald-50 text-emerald-600 border-emerald-100',
  'Legal Victory': 'bg-amber-50 text-amber-600 border-amber-100',
  'Healthcare': 'bg-blue-50 text-blue-600 border-blue-100',
  'Community Events': 'bg-rose-50 text-rose-600 border-rose-100',
  'default': 'bg-slate-50 text-slate-600 border-slate-100'
};

const NEWS_DATA = [
  {
    category: 'Legal Rights', 
    region: 'East Africa',
    title: 'Uganda Parliament Passes Anti-LGBTQ+ Bill, Sparking International Concern',
    desc: 'The Ugandan parliament has passed legislation that significantly restricts LGBTQ+ rights, prompting calls for increased refugee protection programs.',
    source: 'BBC News Africa', 
    date: 'Mar 10, 2024',
    url: 'https://www.bbc.com/news/world-africa-65034567'
  },
  {
    category: 'Community Organizing', 
    region: 'Caribbean',
    title: 'Caribbean Pride Organizations Unite for Regional LGBTQ+ Conference',
    desc: 'LGBTQ+ advocacy groups across the Caribbean are organizing a historic regional conference to address discrimination and promote inclusion.',
    source: 'Caribbean News Now', 
    date: 'Mar 08, 2024',
    url: 'https://www.caribbeannationalweekly.com/'
  },
  {
    category: 'Legal Rights',
    region: 'West Africa',
    title: 'Ghana High Court Ruling Delays Anti-LGBTQ+ Legislation',
    desc: "Ghana's Supreme Court has temporarily halted the passage of controversial anti-LGBTQ+ legislation pending constitutional review.",
    source: 'Reuters Africa',
    date: 'Mar 05, 2024',
    url: 'https://www.reuters.com/world/africa/'
  },
  {
    category: 'Legal Victory', 
    region: 'Caribbean',
    title: 'Trinidad and Tobago Decriminalizes Same-Sex Relations',
    desc: "In a landmark decision, Trinidad and Tobago's High Court has struck down laws criminalizing consensual same-sex relations.",
    source: 'Guardian Caribbean', 
    date: 'Feb 28, 2024',
    url: 'https://www.theguardian.com/world/2018/apr/12/trinidad-and-tobago-court-steps-towards-decriminalising-homosexuality'
  },
  {
    category: 'Healthcare',
    region: 'East Africa',
    title: 'Kenya LGBTQ+ Organizations Launch Mental Health Initiative',
    desc: 'Leading LGBTQ+ organizations in Kenya have launched a comprehensive mental health support program for sexual and gender minorities.',
    source: 'The Standard Kenya',
    date: 'Feb 25, 2024',
    url: 'https://www.standardmedia.co.ke/'
  },
  {
    category: 'Community Events',
    region: 'Caribbean',
    title: 'Barbados Pride Festival Celebrates 10th Anniversary',
    desc: 'Barbados Pride marks a decade of visibility and advocacy with its largest celebration yet, featuring regional and international speakers.',
    source: 'Barbados Today',
    date: 'Feb 20, 2024',
    url: 'https://barbadostoday.bb/'
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

        {/* Region Tabs */}
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

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {filteredNews.map((news, idx) => {
            // Category ke hisab se style select karna
            const categoryClass = CATEGORY_STYLES[news.category] || CATEGORY_STYLES['default'];

            return (
              <motion.div 
                layout
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col hover:border-[#A855F7]/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  {/* DYNAMIC COLOR TAG */}
                  <span className={`text-[0.65rem] font-black uppercase px-3 py-1 rounded-full border ${categoryClass}`}>
                    {news.category}
                  </span>
                  <span className="text-slate-400 text-[0.75rem] font-medium">
                    {news.date}
                  </span>
                </div>

                {/* Region Display */}
                <div className="flex items-center gap-1.5 mb-2 text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider">
                    {news.region}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  {news.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed">
                  {news.desc}
                </p>
                
                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                  <span className="text-[0.7rem] text-slate-400 font-bold uppercase tracking-widest">
                    {news.source}
                  </span>
                  
                  <a 
                    href={news.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#3B82F6] font-bold text-sm hover:translate-x-1 transition-transform flex items-center gap-1"
                  >
                    Read More <span>→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}