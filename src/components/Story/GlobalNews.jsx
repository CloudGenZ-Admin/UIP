import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService';

const CATEGORY_STYLES = {
  'Legal Rights': 'bg-red-50 text-red-600 border-red-100',
  'Community Organizing': 'bg-emerald-50 text-emerald-600 border-emerald-100',
  'Legal Victory': 'bg-amber-50 text-amber-600 border-amber-100',
  'Healthcare': 'bg-blue-50 text-blue-600 border-blue-100',
  'Community Events': 'bg-rose-50 text-rose-600 border-rose-100',
  'default': 'bg-slate-50 text-slate-600 border-slate-100'
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export default function GlobalNews() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filtering & Pagination States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 items initially

  // --- NEW: Custom Dropdown States ---
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await apiService.getNews();
        setNewsData(response.data);
      } catch (error) {
        console.error("Failed to load news", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, []);

  // Dynamically get unique countries, sort them, and put "All" at the very top
  const uniqueCountries = useMemo(() => {
    const countries = newsData.map(item => item.country).filter(Boolean);
    const sortedCountries = [...new Set(countries)].sort();
    return ['All', ...sortedCountries];
  }, [newsData]);

  // Reset pagination to 6 whenever filters change
  useEffect(() => {
    setVisibleCount(6);
  }, [searchQuery, selectedCountry]);

  // --- NEW: Close dropdown when clicking outside of it ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter logic combining BOTH Dropdown and Search Bar
  const filteredNews = newsData.filter(n => {
    const matchesSearch = n.country?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDropdown = selectedCountry === 'All' || n.country === selectedCountry;
    return matchesSearch && matchesDropdown;
  });

  // Limit the displayed items based on visibleCount
  const displayedNews = filteredNews.slice(0, visibleCount);

  // Load More handler
  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  if (loading) return <div className="py-24 text-center text-slate-500 font-bold">Loading Global News...</div>;

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-[#f1f5f9] min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 md:mb-4">LGBTQ+ News</h2>
          <p className="text-sm md:text-base text-slate-500">Curated updates on rights and global advocacy</p>
        </div>

        {/* Responsive Filters Container: Dropdown + Search Bar */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-12 flex flex-col md:flex-row gap-3 md:gap-4 relative z-50">
          
          {/* CUSTOM UI FIX: Replaced native <select> with custom Framer Motion dropdown */}
          <div className="relative w-full md:w-1/3" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full flex items-center justify-between pl-4 md:pl-6 pr-4 md:pr-5 py-3.5 md:py-4 bg-white text-slate-700 text-sm md:text-base font-bold outline-none cursor-pointer rounded-2xl md:rounded-full shadow-sm transition-all ring-1 ${isDropdownOpen ? 'ring-2 ring-[#A855F7]' : 'ring-slate-200 hover:ring-[#A855F7]/50'}`}
            >
              <span className="truncate">{selectedCountry === 'All' ? 'All Countries' : selectedCountry}</span>
              <svg className={`w-4 h-4 md:w-5 md:h-5 text-slate-400 shrink-0 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {/* Dropdown Menu List */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-[110%] left-0 right-0 bg-white rounded-2xl shadow-xl border border-slate-100 z-[100] max-h-[240px] overflow-y-auto"
                >
                  <div className="py-2">
                    {uniqueCountries.map((country) => (
                      <button
                        key={country}
                        onClick={() => {
                          setSelectedCountry(country);
                          setIsDropdownOpen(false); // Close on select
                        }}
                        className={`w-full text-left px-4 md:px-6 py-2.5 text-sm md:text-base transition-colors hover:bg-slate-50 ${selectedCountry === country ? 'bg-[#A855F7]/10 text-[#A855F7] font-extrabold' : 'text-slate-600 font-medium'}`}
                      >
                        {country === 'All' ? 'All Countries' : country}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile-Responsive Country Search Bar */}
          <div className="relative w-full md:w-2/3">
            <div className="absolute inset-y-0 left-4 md:left-5 flex items-center pointer-events-none">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by country (e.g. Uganda...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 md:pl-12 pr-4 md:pr-6 py-3.5 md:py-4 rounded-2xl md:rounded-full border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#A855F7] bg-white shadow-sm text-slate-700 text-sm md:text-base font-medium transition-all outline-none truncate"
            />
          </div>

        </div>

        {/* Display when search/filter returns nothing */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12 px-4 text-slate-400 text-sm md:text-base font-bold bg-white rounded-3xl border border-slate-200 border-dashed">
            No news found. Try adjusting your search or filter.
          </div>
        )}

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 relative z-0">
          <AnimatePresence>
            {displayedNews.map((news, idx) => {
              const categoryClass = CATEGORY_STYLES[news.category] || CATEGORY_STYLES['default'];

              return (
                <motion.div 
                  layout
                  key={news.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col hover:border-[#A855F7]/30 transition-all duration-300 hover:shadow-xl"
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
                      📍 {news.country}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 leading-tight">
                    {news.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed">
                    {news.desc}
                  </p>
                  
                  <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                    <span className="text-[0.7rem] text-slate-400 font-bold uppercase tracking-widest line-clamp-1">
                      {news.source}
                    </span>
                    
                    <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] font-bold text-sm hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0 ml-2">
                      Read More <span>→</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleCount < filteredNews.length && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="mt-10 md:mt-12 flex justify-center"
          >
            <button 
              onClick={loadMore}
              className="px-6 md:px-8 py-3 bg-white text-slate-700 text-sm md:text-base font-bold rounded-full shadow-sm ring-1 ring-slate-200 hover:ring-[#A855F7] hover:text-[#A855F7] transition-all flex items-center gap-2"
            >
              Load More News
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}