import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService';

export default function AdminStories() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Edit State
  const [editingStory, setEditingStory] = useState(null);
  
  // Delete State
  const [itemToDelete, setItemToDelete] = useState(null);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => { 
    loadData(); 
  }, [currentPage]); // Re-fetch when currentPage changes

  const loadData = async () => {
    try { 
      setLoading(true);
      // Fetch all stories for admin (published & unpublished)
      const res = await apiService.getStories(currentPage); 
      
      setData(res.data.data || []); 
      setTotalPages(res.data.totalPages || 1); 
      setTotalItems(res.data.totalItems || 0); 
    } catch (err) { 
      console.error(err); 
    } finally {
      setLoading(false);
    }
  };

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  // --- DELETE LOGIC ---
  const handleDelete = (id) => {
    setItemToDelete(id);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;

    try {
      await apiService.deleteStory(itemToDelete);
      
      if (data.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1); 
      } else {
        loadData(); 
      }
    } catch (error) {
      alert("Failed to delete story.");
    } finally {
      setItemToDelete(null);
    }
  };

  // --- UPDATE LOGIC (For Edit Modal) ---
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await apiService.updateStory(editingStory.id, editingStory);
      setEditingStory(null); 
      loadData(); 
    } catch (error) {
      alert("Failed to update story.");
    }
  };

  // --- PUBLISH / UNPUBLISH LOGIC ---
  const handleTogglePublish = async (story) => {
    try {
      // Sending only isPublished status to update
      await apiService.updateStory(story.id, { isPublished: !story.isPublished });
      loadData(); // Refresh data to show new status
    } catch (error) {
      alert("Failed to change story status.");
      console.error(error);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 pt-20 md:pt-10 w-full max-w-7xl mx-auto h-full flex flex-col relative">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800">📖 Shared Stories</h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">Approve or manage submitted community stories.</p>
        </div>
        <div className="bg-white w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl shadow-sm border border-slate-200 font-bold text-slate-700 flex justify-between sm:justify-start items-center gap-3">
          <span>Total Stories:</span> 
          <span className="bg-[#3B82F6] text-white px-2.5 py-0.5 rounded-md text-sm">{totalItems}</span>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-500 font-bold flex-1">Loading stories...</div>
      ) : data.length === 0 ? (
        <div className="text-center py-20 text-slate-500 bg-white rounded-3xl border border-slate-100 font-bold shadow-sm flex-1">
          No stories submitted yet.
        </div>
      ) : (
        <div className="flex flex-col flex-1 justify-between">
          <div className="w-full">
            
            {/* ======================= */}
            {/* DESKTOP & TABLET VIEW (TABLE) */}
            {/* ======================= */}
            <div className="hidden md:block w-full bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-x-auto">
              <table className="w-full min-w-[850px] text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest">
                    <th className="p-5 font-black border-b border-slate-100 w-1/5">Author</th>
                    <th className="p-5 font-black border-b border-slate-100 w-2/5">Story Content</th>
                    <th className="p-5 font-black border-b border-slate-100 text-center">Permissions</th>
                    <th className="p-5 font-black border-b border-slate-100 text-center">Status</th>
                    <th className="p-5 font-black border-b border-slate-100 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 border-b border-slate-50 transition-colors">
                      <td className="p-5 align-top">
                        <div className="font-bold text-slate-800 text-base">{item.name}</div>
                        <div className="text-xs font-medium text-slate-500 mt-1 break-all">{item.email}</div>
                      </td>
                      <td className="p-5 align-top">
                        <div className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                          {item.story_text}
                        </div>
                      </td>
                      <td className="p-5 text-center text-xs align-top">
                        <div className="flex flex-col gap-2 items-center">
                          <span className={`px-3 py-1.5 rounded-md font-bold w-24 text-center ${item.consent_pub ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-50 text-red-500 border border-red-100'}`}>
                            Pub: {item.consent_pub ? 'Yes' : 'No'}
                          </span>
                          <span className={`px-3 py-1.5 rounded-md font-bold w-24 text-center ${item.consent_edit ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-50 text-red-500 border border-red-100'}`}>
                            Edit: {item.consent_edit ? 'Yes' : 'No'}
                          </span>
                        </div>
                      </td>
                      
                      <td className="p-5 text-center text-xs align-top">
                        <span className={`px-3 py-1.5 rounded-md font-bold w-24 text-center inline-block ${item.isPublished ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-amber-100 text-amber-700 border border-amber-200'}`}>
                          {item.isPublished ? 'Published' : 'Hidden'}
                        </span>
                      </td>

                      <td className="p-5 align-top">
                        <div className="flex flex-col gap-2 justify-center">
                          <button 
                            onClick={() => handleTogglePublish(item)} 
                            className={`${item.isPublished ? 'text-amber-600 bg-amber-50 hover:bg-amber-500' : 'text-emerald-600 bg-emerald-50 hover:bg-emerald-500'} hover:text-white px-4 py-2 rounded-xl font-bold text-sm transition-all`}
                          >
                            {item.isPublished ? 'Unpublish' : 'Publish'}
                          </button>

                          <button 
                            onClick={() => setEditingStory(item)} 
                            className="text-[#3B82F6] bg-blue-50 hover:bg-[#3B82F6] hover:text-white px-4 py-2 rounded-xl font-bold text-sm transition-all"
                          >
                            Edit
                          </button>

                          <button 
                            onClick={() => handleDelete(item.id)} 
                            className="text-red-500 bg-red-50 hover:bg-red-500 hover:text-white px-4 py-2 rounded-xl font-bold text-sm transition-all"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ============================== */}
            {/* MOBILE VIEW (CARDS) */}
            {/* ============================== */}
            <div className="flex flex-col gap-4 md:hidden w-full">
              {data.map((item) => (
                <div key={item.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                  <div className="flex justify-between items-start gap-4 border-b border-slate-50 pb-4">
                    <div className="flex-1 overflow-hidden">
                      <div className="font-bold text-slate-800 text-lg leading-tight mb-1 truncate">{item.name}</div>
                      <div className="text-sm font-medium text-slate-500 mb-2 truncate">{item.email}</div>
                      <span className={`px-2 py-1 rounded-md font-bold text-[10px] uppercase inline-block ${item.isPublished ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {item.isPublished ? 'Status: Published' : 'Status: Hidden'}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5 shrink-0">
                      <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded w-full text-center ${item.consent_pub ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-500'}`}>
                        Pub: {item.consent_pub ? 'Yes' : 'No'}
                      </span>
                      <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded w-full text-center ${item.consent_edit ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-500'}`}>
                        Edit: {item.consent_edit ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-slate-600 bg-slate-50 p-4 rounded-2xl italic leading-relaxed">
                    "{item.story_text}"
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                    <button 
                      onClick={() => handleTogglePublish(item)} 
                      className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${item.isPublished ? 'text-amber-600 bg-amber-50 hover:bg-amber-500 hover:text-white' : 'text-emerald-600 bg-emerald-50 hover:bg-emerald-500 hover:text-white'}`}
                    >
                      {item.isPublished ? 'Unpublish' : 'Publish'}
                    </button>
                    
                    <button 
                      onClick={() => setEditingStory(item)} 
                      className="w-full text-[#3B82F6] bg-blue-50 hover:bg-[#3B82F6] hover:text-white py-3 rounded-xl font-bold text-sm transition-all"
                    >
                      Edit
                    </button>
                    
                    <button 
                      onClick={() => handleDelete(item.id)} 
                      className="w-full text-red-500 bg-red-50 hover:bg-red-500 hover:text-white py-3 rounded-xl font-bold text-sm transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ======================= */}
          {/* PAGINATION CONTROLS */}
          {/* ======================= */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-8 pt-4 border-t border-slate-200 gap-4">
              <button 
                onClick={goToPrevPage} 
                disabled={currentPage === 1}
                className={`px-5 py-3 sm:py-2.5 rounded-xl font-bold text-sm transition-all w-full sm:w-auto flex justify-center items-center ${currentPage === 1 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-700 hover:bg-slate-50 shadow-sm border border-slate-200'}`}
              >
                Previous
              </button>
              
              <div className="flex flex-wrap justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => goToPage(num)}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm transition-all ${
                      currentPage === num
                        ? 'bg-[#3B82F6] text-white shadow-md border border-[#3B82F6]'
                        : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={goToNextPage} 
                disabled={currentPage === totalPages}
                className={`px-5 py-3 sm:py-2.5 rounded-xl font-bold text-sm transition-all w-full sm:w-auto flex justify-center items-center ${currentPage === totalPages ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-700 hover:bg-slate-50 shadow-sm border border-slate-200'}`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {/* ======================= */}
      {/* EDIT MODAL / POPUP */}
      {/* ======================= */}
      {editingStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-2xl shadow-2xl max-h-[95vh] overflow-y-auto">
            <h2 className="text-2xl font-black text-slate-800 mb-6">Edit Story</h2>
            
            <form onSubmit={handleUpdate} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Author Name</label>
                  <input 
                    type="text" 
                    value={editingStory.name} 
                    onChange={(e) => setEditingStory({...editingStory, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    value={editingStory.email} 
                    onChange={(e) => setEditingStory({...editingStory, email: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Story Content</label>
                <textarea 
                  rows="8"
                  value={editingStory.story_text} 
                  onChange={(e) => setEditingStory({...editingStory, story_text: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] resize-none leading-relaxed"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end mt-4">
                <button 
                  type="button" 
                  onClick={() => setEditingStory(null)} 
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-[#3B82F6] text-white shadow-md shadow-blue-500/30 hover:bg-blue-600 transition-all"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

     
      <AnimatePresence>
        {itemToDelete && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }} 
              className="bg-white rounded-[2rem] p-8 md:p-10 max-w-sm w-full max-h-[95vh] overflow-y-auto text-center shadow-2xl border border-slate-100"
            >
              <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-red-100">
                <span className="text-4xl font-bold">⚠️</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Confirm Deletion</h3>
              <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                Are you sure you want to delete this <strong className="text-slate-700">shared story</strong>? It will be permanently removed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setItemToDelete(null)}
                  className="w-full py-4 bg-slate-100 text-slate-700 font-black rounded-2xl shadow-sm hover:bg-slate-200 transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={confirmDelete}
                  className="w-full py-4 bg-red-500 text-white font-black rounded-2xl shadow-md hover:bg-red-600 hover:shadow-xl transition-all"
                >
                  Yes, Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}