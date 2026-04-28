import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService'; // Update path if needed

// Standardized categories and regions for consistency
const CATEGORIES = ['Legal Rights', 'Community Organizing', 'Legal Victory', 'Healthcare', 'Community Events'];
const REGIONS = ['East Africa', 'West Africa', 'Caribbean', 'North Africa', 'Global'];

export default function AdminNews() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemToDelete, setItemToDelete] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [formData, setFormData] = useState({
    date: '', 
    title: '',
    desc: '',
    category: CATEGORIES[0],
    region: REGIONS[0],
    source: '',
    url: ''
  });

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const res = await apiService.getNews();
      setNews(res.data);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    try {
      await apiService.deleteNews(itemToDelete);
      if (currentItems.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
      fetchNews(); 
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setItemToDelete(null); 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.submitNews(formData); 
      setFormData({ date: '', title: '', desc: '', category: CATEGORIES[0], region: REGIONS[0], source: '', url: '' });
      setCurrentPage(1); 
      fetchNews(); 
    } catch (error) {
      console.log("Submit failed:", error);
      console.error("Submit failed:", error);
      alert("Failed to add news.");
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 pt-20 md:pt-10 max-w-7xl mx-auto h-full flex flex-col gap-8">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Manage News</h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">Publish global advocacy updates and news.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Column: News List */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-slate-100 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold">Published News ({news.length})</h2>
          </div>
          
          {isLoading ? (
            <div className="text-center py-10 text-slate-500 flex-1">Loading news...</div>
          ) : news.length === 0 ? (
            <div className="text-center py-10 text-slate-500 bg-slate-50 rounded-2xl flex-1">No news found. Add one!</div>
          ) : (
            <div className="flex flex-col flex-1 justify-between">
              <div className="space-y-4">
                {currentItems.map((n) => (
                  <div key={n.id} className="p-4 rounded-2xl border border-slate-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex-1 w-full">
                      <div className="flex gap-2 items-center mb-1">
                        <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full uppercase font-bold">{n.region}</span>
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase font-bold">{n.category}</span>
                      </div>
                      <h3 className="font-bold text-slate-800 line-clamp-1">{n.title}</h3>
                      <p className="text-sm text-slate-500 line-clamp-1 mt-0.5">{n.desc}</p>
                      <div className="text-xs font-semibold text-slate-400 mt-1.5 flex gap-3">
                        <span>📰 {n.source}</span>
                        <span>📅 {n.date}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setItemToDelete(n.id)}
                      className="p-2 sm:p-3 w-full sm:w-auto text-red-500 bg-red-50 hover:bg-red-500 hover:text-white rounded-xl transition-colors font-bold shrink-0 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-100 gap-4">
                   <button onClick={goToPrevPage} disabled={currentPage === 1} className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${currentPage === 1 ? 'bg-slate-100 text-slate-400' : 'bg-blue-50 text-blue-600'}`}>Prev</button>
                   <span className="font-bold text-slate-500 text-sm">Page {currentPage} of {totalPages}</span>
                   <button onClick={goToNextPage} disabled={currentPage === totalPages} className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${currentPage === totalPages ? 'bg-slate-100 text-slate-400' : 'bg-blue-50 text-blue-600'}`}>Next</button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Form */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 md:p-6 rounded-3xl border border-blue-100 shadow-sm lg:sticky lg:top-24 mt-4 lg:mt-0">
          <h2 className="text-xl font-bold mb-6 text-slate-800">Add News Article</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Publish Date</label>
              <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 bg-white" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Region</label>
                <select name="region" value={formData.region} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 bg-white">
                  {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Category</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 bg-white">
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Headline / Title</label>
              <input required type="text" name="title" value={formData.title} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 bg-white" />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Brief Description</label>
              <textarea required name="desc" rows="3" value={formData.desc} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 bg-white resize-none"></textarea>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">News Source</label>
              <input required type="text" name="source" placeholder="e.g. BBC News" value={formData.source} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 bg-white" />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Article URL</label>
              <input required type="url" name="url" placeholder="https://..." value={formData.url} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 bg-white" />
            </div>

            <button type="submit" className="w-full py-4 mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
              Publish News
            </button>
          </form>
        </div>

      </div>

      {/* DELETE CONFIRMATION MODAL */}
      <AnimatePresence>
        {itemToDelete && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4"
          >
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-[2rem] p-8 max-w-sm w-full text-center shadow-2xl">
              <div className="text-4xl mb-4">🗑️</div>
              <h3 className="text-xl font-black mb-2">Delete News?</h3>
              <p className="text-slate-500 mb-6 text-sm">This action cannot be undone.</p>
              <div className="flex gap-3">
                <button onClick={() => setItemToDelete(null)} className="flex-1 py-3 bg-slate-100 rounded-xl font-bold">Cancel</button>
                <button onClick={confirmDelete} className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold">Delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}