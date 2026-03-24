import React, { useState, useEffect } from 'react';
import { apiService } from '../../api/apiService';

export default function AdminStories() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Edit State
  const [editingStory, setEditingStory] = useState(null);

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
      // Pass the currentPage to the backend API
      const res = await apiService.getStories(currentPage); 
      
      setData(res.data.data || []); 
      setTotalPages(res.data.totalPages || 1); // Set total pages from backend
      setTotalItems(res.data.totalItems || 0); // Set total count for the badge
    } catch (err) { 
      console.error(err); 
    } finally {
      setLoading(false);
    }
  };

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = async (id) => {
    if(window.confirm('Delete this story permanently?')) {
      try {
        await apiService.deleteStory(id);
        
        // If deleting the last item on the current page, go back one page
        if (data.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1); // This will automatically trigger loadData via useEffect
        } else {
          loadData(); // Refresh current page
        }
      } catch (error) {
        alert("Failed to delete story.");
      }
    }
  };

  // Handle Update Story
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await apiService.updateStory(editingStory.id, editingStory);
      setEditingStory(null); // Close modal
      loadData(); // Refresh data
    } catch (error) {
      alert("Failed to update story.");
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 pt-20 md:pt-10 max-w-7xl mx-auto h-full flex flex-col relative">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800">📖 Shared Stories</h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">Manage submitted community stories and permissions.</p>
        </div>
        <div className="bg-white px-5 py-2.5 rounded-xl shadow-sm border border-slate-200 font-bold text-slate-700 flex items-center gap-2">
          <span>Total Stories:</span> 
          <span className="bg-[#3B82F6] text-white px-2 py-0.5 rounded-md text-sm">{totalItems}</span>
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
            {/* DESKTOP VIEW (TABLE) */}
            {/* ======================= */}
            <div className="hidden lg:block bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest">
                    <th className="p-5 font-black border-b border-slate-100 w-1/4">Author</th>
                    <th className="p-5 font-black border-b border-slate-100 w-1/2">Story Content</th>
                    <th className="p-5 font-black border-b border-slate-100 text-center">Permissions</th>
                    <th className="p-5 font-black border-b border-slate-100 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 border-b border-slate-50 transition-colors">
                      <td className="p-5 align-top">
                        <div className="font-bold text-slate-800 text-base">{item.name}</div>
                        <div className="text-xs font-medium text-slate-500 mt-1">{item.email}</div>
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
                      <td className="p-5 align-top">
                        <div className="flex flex-col gap-2 justify-center">
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
            {/* MOBILE/TABLET VIEW (CARDS) */}
            {/* ============================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
              {data.map((item) => (
                <div key={item.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                  <div className="flex justify-between items-start gap-4 border-b border-slate-50 pb-4">
                    <div>
                      <div className="font-bold text-slate-800 text-lg leading-tight mb-1">{item.name}</div>
                      <div className="text-sm font-medium text-slate-500">{item.email}</div>
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

                  <div className="text-sm text-slate-600 bg-slate-50 p-4 rounded-2xl italic">
                    "{item.story_text}"
                  </div>

                  <div className="flex gap-2 mt-2">
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
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all w-full sm:w-auto hidden sm:block ${currentPage === 1 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-700 hover:bg-slate-50 shadow-sm border border-slate-200'}`}
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
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all w-full sm:w-auto hidden sm:block ${currentPage === totalPages ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-700 hover:bg-slate-50 shadow-sm border border-slate-200'}`}
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
          <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-2xl shadow-2xl">
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

              <div className="flex gap-3 justify-end mt-4">
                <button 
                  type="button" 
                  onClick={() => setEditingStory(null)} 
                  className="px-6 py-3 rounded-xl font-bold text-sm bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-3 rounded-xl font-bold text-sm bg-[#3B82F6] text-white shadow-md shadow-blue-500/30 hover:bg-blue-600 transition-all"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}