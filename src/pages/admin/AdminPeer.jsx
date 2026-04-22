import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService';

export default function AdminPeer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State to hold the currently selected peer for the details modal
  const [selectedPeer, setSelectedPeer] = useState(null);

  // State for delete confirmation popup
  const [itemToDelete, setItemToDelete] = useState(null);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Show exactly 4 registrations per page
  
  useEffect(() => { 
    loadData(); 
  }, []);
  
  const loadData = async () => { 
    try {
      setLoading(true);
      const res = await apiService.getPeerSupports(); 
      setData(res.data); 
    } catch (error) {
      console.error("Failed to load data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  
  const confirmDelete = async () => { 
    if (!itemToDelete) return;
    
    try {
      await apiService.deletePeerSupport(itemToDelete); 
      
      // If deleting the last item on the current page, go back one page
      if (currentItems.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }

      loadData(); 
    } catch (error) {
      alert("Failed to delete record.");
    } finally {
      setItemToDelete(null); // Close the popup
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 pt-20 md:pt-10 w-full max-w-7xl mx-auto h-full flex flex-col relative">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800">🤝 Peer Support</h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">Manage peer support group registrations.</p>
        </div>
        <div className="bg-white w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl shadow-sm border border-slate-200 font-bold text-slate-700 flex justify-between sm:justify-start items-center gap-3">
          <span>Total:</span> 
          <span className="bg-[#A855F7] text-white px-2.5 py-0.5 rounded-md text-sm">{data.length}</span>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-500 font-bold flex-1">Loading peer support data...</div>
      ) : data.length === 0 ? (
        <div className="text-center py-20 text-slate-500 bg-white rounded-3xl border border-slate-100 font-bold shadow-sm flex-1">
          No registrations found.
        </div>
      ) : (
        <div className="flex flex-col flex-1 justify-between">
          <div className="w-full">
            
            {/* ======================= */}
            {/* DESKTOP & TABLET VIEW (TABLE) */}
            {/* ======================= */}
            <div className="hidden md:block w-full bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-x-auto">
              <table className="w-full min-w-[900px] text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest border-b border-slate-100">
                    <th className="p-5 font-black">User Info</th>
                    <th className="p-5 font-black">Group & Identity</th>
                    <th className="p-5 font-black">Goals & Needs</th>
                    <th className="p-5 font-black text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item) => (
                    <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="p-5 align-top">
                        <div className="font-bold text-slate-800">
                          {item.name} <span className="text-slate-400 font-normal">({item.pronouns})</span>
                        </div>
                        <div className="text-xs font-normal text-slate-500 mt-1 break-all">{item.email}</div>
                        <div className="text-xs font-normal text-slate-500">{item.phone}</div>
                      </td>
                      <td className="p-5 text-sm text-slate-600 align-top">
                        <div className="text-[#A855F7] font-bold">{item.registering_for}</div>
                        <div className="text-xs text-slate-500 mt-1 truncate max-w-[200px]" title={item.identity}>
                          <span className="font-bold text-slate-400">Identity:</span> {item.identity}
                        </div>
                      </td>
                      <td className="p-5 text-sm text-slate-600 max-w-[250px] align-top">
                        <div className="truncate" title={item.goals}>
                          <strong className="text-slate-800">Goals:</strong> {item.goals}
                        </div>
                        <div className="truncate mt-1" title={item.access_needs}>
                          <strong className="text-slate-800">Needs:</strong> {item.access_needs || 'None'}
                        </div>
                      </td>
                      <td className="p-5 align-middle">
                        <div className="flex justify-center gap-2">
                          <button 
                            onClick={() => setSelectedPeer(item)} 
                            className="text-[#3B82F6] bg-blue-50 hover:bg-[#3B82F6] hover:text-white px-4 py-2 rounded-xl font-bold text-sm transition-all"
                          >
                            View Details
                          </button>
                          <button 
                            onClick={() => setItemToDelete(item.id)} 
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
              {currentItems.map((item) => (
                <div key={item.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                  
                  {/* Header: Name & Contact */}
                  <div className="w-full overflow-hidden">
                    <div className="font-bold text-slate-800 text-lg leading-tight mb-1 truncate">
                      {item.name} <span className="text-sm font-normal text-slate-500">({item.pronouns})</span>
                    </div>
                    <div className="text-sm text-slate-500 truncate">{item.email}</div>
                    <div className="text-sm text-slate-500">{item.phone}</div>
                  </div>

                  {/* Info Grid */}
                  <div className="bg-slate-50 p-4 rounded-2xl flex flex-col gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-0.5">Registering For</span>
                      <span className="font-bold text-[#A855F7]">{item.registering_for}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-0.5">Identity</span>
                      <span className="text-sm text-slate-700">{item.identity}</span>
                    </div>
                  </div>

                  {/* Goals & Needs */}
                  <div className="text-sm text-slate-600 bg-white border border-slate-100 p-4 rounded-2xl">
                    <div className="mb-2">
                      <strong className="text-slate-800 block mb-0.5">Goals:</strong> 
                      <p className="line-clamp-2 text-slate-600">{item.goals}</p>
                    </div>
                    {item.access_needs && (
                      <div className="pt-2 border-t border-slate-100 mt-2">
                        <strong className="text-slate-800 block mb-0.5">Access Needs:</strong> 
                        <p className="text-orange-600 text-xs font-medium line-clamp-2">{item.access_needs}</p>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    <button 
                      onClick={() => setSelectedPeer(item)} 
                      className="w-full text-[#3B82F6] bg-blue-50 hover:bg-[#3B82F6] hover:text-white py-3 rounded-xl font-bold text-sm transition-all"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => setItemToDelete(item.id)} 
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
              
              {/* Numbered Pagination: 1, 2, 3, 4 */}
              <div className="flex flex-wrap justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => goToPage(num)}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm transition-all ${
                      currentPage === num
                        ? 'bg-[#A855F7] text-white shadow-md border border-[#A855F7]'
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
      {/* VIEW FULL DETAILS MODAL */}
      {/* ======================= */}
      <AnimatePresence>
        {selectedPeer && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }} 
              className="bg-white rounded-3xl p-5 md:p-8 w-full max-w-3xl shadow-2xl max-h-[95vh] overflow-y-auto"
            >
              
              <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
                <div className="pr-4">
                  <h2 className="text-xl md:text-2xl font-black text-slate-800 break-words">{selectedPeer.name}</h2>
                  <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">Full Registration Details</p>
                </div>
                <button 
                  onClick={() => setSelectedPeer(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full w-10 h-10 shrink-0 flex items-center justify-center font-bold transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                
                {/* Basic Info Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm break-all">{selectedPeer.email}</div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedPeer.phone || 'N/A'}</div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pronouns</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedPeer.pronouns || 'N/A'}</div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Age Group</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedPeer.age_group || 'N/A'}</div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Country / Location</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedPeer.country || 'N/A'}</div>
                  </div>
                </div>

                {/* Group Info Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Registering For</label>
                    <div className="bg-[#f3e8ff] text-[#A855F7] font-bold px-4 py-3 rounded-xl text-sm border border-[#e9d5ff]">
                      {selectedPeer.registering_for || 'N/A'}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Attended Before</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedPeer.attended_before || 'No'}</div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Photo Consent</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedPeer.photo_consent || 'N/A'}</div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Status</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm capitalize">{selectedPeer.status || 'Pending'}</div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Identity</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedPeer.identity || 'N/A'}</div>
                  </div>
                </div>

                {/* Full Width Text Areas */}
                <div className="col-span-1 md:col-span-2 space-y-4 mt-2 pt-4 border-t border-slate-100">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Goals for Joining</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm leading-relaxed whitespace-pre-wrap">
                      {selectedPeer.goals || 'No goals specified.'}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Access Needs</label>
                      <div className="bg-orange-50 px-4 py-3 rounded-xl text-orange-800 text-sm leading-relaxed border border-orange-100 whitespace-pre-wrap">
                        {selectedPeer.access_needs || 'None specified.'}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Allergies</label>
                      <div className="bg-red-50 px-4 py-3 rounded-xl text-red-800 text-sm leading-relaxed border border-red-100 whitespace-pre-wrap">
                        {selectedPeer.allergies || 'None specified.'}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex justify-end mt-8 pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setSelectedPeer(null)} 
                  className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-sm bg-slate-800 text-white shadow-md hover:bg-slate-700 transition-all"
                >
                  Close View
                </button>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================= */}
      {/* DELETE CONFIRMATION MODAL */}
      {/* ======================= */}
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
                Are you sure you want to delete this <strong className="text-slate-700">peer support registration</strong>? All participant details will be permanently lost.
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