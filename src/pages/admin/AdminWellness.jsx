import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService';

export default function AdminWellness() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // State to hold the currently selected wellness booking for the modal
  const [selectedWellness, setSelectedWellness] = useState(null);

  // Delete State
  const [itemToDelete, setItemToDelete] = useState(null);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Show exactly 4 bookings per page

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await apiService.getWellness();
      setData(res.data);
    } catch (err) {
      console.error("Error fetching wellness data:", err);
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

  const handleDelete = (id) => {
    setItemToDelete(id);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;

    try {
      await apiService.deleteWellness(itemToDelete);
      
      // If deleting the last item on the current page, go back one page
      if (currentItems.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
      
      loadData();
    } catch (err) {
      alert("Failed to delete record.");
    } finally {
      setItemToDelete(null);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 pt-20 md:pt-10 w-full max-w-7xl mx-auto h-full flex flex-col relative">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800">🧘 Wellness Bookings</h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">Manage client wellness session appointments.</p>
        </div>
        <div className="bg-white w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl shadow-sm border border-slate-200 font-bold text-slate-700 flex justify-between sm:justify-start items-center gap-3">
          <span>Total Bookings:</span> 
          <span className="bg-[#3B82F6] text-white px-2.5 py-0.5 rounded-md text-sm">{data.length}</span>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-500 font-bold flex-1">Loading wellness data...</div>
      ) : data.length === 0 ? (
        <div className="text-center py-20 text-slate-500 bg-white rounded-3xl border border-slate-100 font-bold shadow-sm flex-1">
          No wellness bookings found.
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
                  <tr className="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest">
                    <th className="p-5 font-black border-b border-slate-100">Client Info</th>
                    <th className="p-5 font-black border-b border-slate-100">Session Details</th>
                    <th className="p-5 font-black border-b border-slate-100 w-[30%]">Goals & Needs</th>
                    <th className="p-5 font-black border-b border-slate-100 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 border-b border-slate-50 transition-colors">
                      <td className="p-5 align-top">
                        <div className="font-bold text-slate-800 text-base">{item.name} <span className="text-xs font-normal text-slate-400">({item.pronouns})</span></div>
                        <div className="text-xs font-medium text-slate-500 mt-1 break-all">{item.email}</div>
                        <div className="text-xs font-medium text-slate-500">{item.phone}</div>
                      </td>
                      <td className="p-5 align-top text-sm text-slate-600">
                        <span className="text-[#3B82F6] font-bold bg-[#3B82F6]/10 px-3 py-1.5 rounded-md text-xs inline-block mb-2">
                          {item.session_type}
                        </span>
                        <div className="text-xs font-bold text-slate-700">Date: <span className="font-medium text-slate-500">{item.date_range}</span></div>
                        <div className="text-xs font-bold text-slate-700 mt-0.5">Time: <span className="font-medium text-slate-500">{item.time_pref}</span></div>
                      </td>
                      <td className="p-5 align-top text-sm text-slate-600">
                        <div className="line-clamp-1 mb-1"><strong className="text-slate-700 text-xs">Challenges:</strong> <span className="text-xs">{item.challenges || 'N/A'}</span></div>
                        <div className="line-clamp-1 mb-1"><strong className="text-slate-700 text-xs">Goals:</strong> <span className="text-xs">{item.goals || 'N/A'}</span></div>
                        <div className="line-clamp-1"><strong className="text-slate-700 text-xs">Needs:</strong> <span className="text-xs">{item.access_needs || 'None'}</span></div>
                      </td>
                      <td className="p-5 text-center align-middle">
                        <div className="flex justify-center gap-2">
                          <button 
                            onClick={() => setSelectedWellness(item)} 
                            className="text-[#3B82F6] bg-blue-50 hover:bg-[#3B82F6] hover:text-white px-4 py-2 rounded-xl font-bold text-sm transition-all"
                          >
                            View Details
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
              {currentItems.map((item) => (
                <div key={item.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                  
                  {/* Card Header: Client Info & Session Type */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-slate-50 pb-4">
                    <div className="w-full overflow-hidden">
                      <div className="font-bold text-slate-800 text-lg leading-tight mb-1 truncate">
                        {item.name} <span className="text-sm font-normal text-slate-400">({item.pronouns})</span>
                      </div>
                      <div className="text-sm font-medium text-slate-500 truncate">{item.email}</div>
                      <div className="text-sm font-medium text-slate-500">{item.phone}</div>
                    </div>
                    <span className="shrink-0 text-[#3B82F6] font-bold bg-[#3B82F6]/10 px-3 py-1.5 rounded-md text-xs text-center w-full sm:w-auto">
                      {item.session_type}
                    </span>
                  </div>

                  {/* Session Date & Time */}
                  <div className="grid grid-cols-2 gap-2 text-sm bg-blue-50/50 p-3 rounded-2xl border border-blue-100/50">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Date Pref</div>
                      <div className="font-medium text-slate-700">{item.date_range}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Time Pref</div>
                      <div className="font-medium text-slate-700">{item.time_pref}</div>
                    </div>
                  </div>

                  {/* Needs & Goals */}
                  <div className="text-sm text-slate-600 bg-slate-50 p-4 rounded-2xl space-y-2">
                    <div className="line-clamp-2"><strong className="text-slate-800">Challenges:</strong> {item.challenges || 'N/A'}</div>
                    <div className="line-clamp-2"><strong className="text-slate-800">Goals:</strong> {item.goals || 'N/A'}</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 mt-1">
                    <button 
                      onClick={() => setSelectedWellness(item)} 
                      className="w-full text-[#3B82F6] bg-blue-50 hover:bg-[#3B82F6] hover:text-white py-3 rounded-xl font-bold text-sm transition-all"
                    >
                      View Details
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
      {/* VIEW FULL DETAILS MODAL */}
      {/* ======================= */}
      {selectedWellness && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-3xl p-5 md:p-8 w-full max-w-4xl shadow-2xl max-h-[95vh] overflow-y-auto">
            
            <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
              <div className="pr-4">
                <h2 className="text-xl md:text-2xl font-black text-slate-800 break-words">{selectedWellness.name}</h2>
                <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">Full Wellness Booking Details</p>
              </div>
              <button 
                onClick={() => setSelectedWellness(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full w-10 h-10 shrink-0 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              
              {/* Client Info Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-black text-slate-800 border-b border-slate-100 pb-2">Client Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm break-all">{selectedWellness.email}</div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedWellness.phone || 'N/A'}</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pronouns</label>
                  <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedWellness.pronouns || 'N/A'}</div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-4">
                  <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-2">Emergency Contact</h4>
                  <div className="font-bold text-slate-800 text-sm">{selectedWellness.emergency_name || 'Not provided'}</div>
                  <div className="text-slate-600 text-sm mt-1">{selectedWellness.emergency_phone || 'N/A'}</div>
                </div>
              </div>

              {/* Session Info Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-black text-slate-800 border-b border-slate-100 pb-2">Session Details</h3>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Session Type</label>
                  <div className="bg-[#eff6ff] text-[#3B82F6] font-bold px-4 py-3 rounded-xl text-sm border border-[#bfdbfe]">
                    {selectedWellness.session_type || 'N/A'}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Date Range</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedWellness.date_range || 'N/A'}</div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Time Preference</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedWellness.time_pref || 'N/A'}</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">First Time Participant?</label>
                  <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedWellness.first_time || 'N/A'}</div>
                </div>
              </div>

              {/* Full Width Text Areas */}
              <div className="col-span-1 md:col-span-2 space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-black text-slate-800 mb-2">Needs & Goals</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Current Challenges</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm leading-relaxed whitespace-pre-wrap border border-slate-100">
                      {selectedWellness.challenges || 'No challenges specified.'}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Session Goals</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm leading-relaxed whitespace-pre-wrap border border-slate-100">
                      {selectedWellness.goals || 'No goals specified.'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-1">Access Needs</label>
                    <div className="bg-orange-50 px-4 py-3 rounded-xl text-orange-800 text-sm leading-relaxed whitespace-pre-wrap border border-orange-100">
                      {selectedWellness.access_needs || 'None specified.'}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Additional Notes</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm leading-relaxed whitespace-pre-wrap border border-slate-100">
                      {selectedWellness.notes || 'No additional notes provided.'}
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="flex justify-end mt-8 pt-4 border-t border-slate-100">
              <button 
                onClick={() => setSelectedWellness(null)} 
                className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-sm bg-slate-800 text-white shadow-md hover:bg-slate-700 transition-all"
              >
                Close View
              </button>
            </div>
            
          </div>
        </div>
      )}

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
                Are you sure you want to delete this <strong className="text-slate-700">wellness booking</strong>? The appointment details will be permanently lost.
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