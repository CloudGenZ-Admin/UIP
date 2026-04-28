import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { apiService } from '../../api/apiService'; // Update path

const CATEGORY_STYLES = {
  'Legal Rights': 'bg-red-50 text-red-600 border-red-100',
  'Community Organizing': 'bg-emerald-50 text-emerald-600 border-emerald-100',
  'Legal Victory': 'bg-amber-50 text-amber-600 border-amber-100',
  'Healthcare': 'bg-blue-50 text-blue-600 border-blue-100',
  'Community Events': 'bg-rose-50 text-rose-600 border-rose-100',
  'default': 'bg-slate-50 text-slate-600 border-slate-100'
};

// Helper to format 'YYYY-MM-DD' into 'Mar 10, 2024'
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export default function GlobalNews() {
  const [activeTab, setActiveTab] = useState('All Regions');
  const [newsData, setNewsData] = useState([]);
  const [regions, setRegions] = useState(['All Regions']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await apiService.getNews();
        const data = response.data;
        setNewsData(data);
        
        // Dynamically get unique regions from the database
        const uniqueRegions = ['All Regions', ...new Set(data.map(item => item.region))];
        setRegions(uniqueRegions);
      } catch (error) {
        console.error("Failed to load news", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, []);

  const filteredNews = activeTab === 'All Regions' ? newsData : newsData.filter(n => n.region === activeTab);

  if (loading) return <div className="py-24 text-center text-slate-500 font-bold">Loading Global News...</div>;

  return (
    <section className="py-24 px-6 bg-[#f1f5f9]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">LGBTQ+ News</h2>
          <p className="text-slate-500">Curated updates on rights and global advocacy</p>
        </div>

        {/* Dynamic Region Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {regions.map(region => (
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
            const categoryClass = CATEGORY_STYLES[news.category] || CATEGORY_STYLES['default'];

            return (
              <motion.div 
                layout
                key={news.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col hover:border-[#A855F7]/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[0.65rem] font-black uppercase px-3 py-1 rounded-full border ${categoryClass}`}>
                    {news.category}
                  </span>
                  <span className="text-slate-400 text-[0.75rem] font-medium">
                    {formatDate(news.date)}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mb-2 text-slate-400">
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider">
                    📍 {news.region}
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
                  
                  <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] font-bold text-sm hover:translate-x-1 transition-transform flex items-center gap-1">
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