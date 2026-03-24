import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService';

export default function AdminCultural() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // State to hold the currently selected cultural registration for the modal
  const [selectedCultural, setSelectedCultural] = useState(null);
  
  // State for delete confirmation popup
  const [itemToDelete, setItemToDelete] = useState(null);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Shows exactly 4 records per page

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await apiService.getCultural();
      setData(res.data);
    } catch (err) {
      console.error("Error fetching cultural data:", err);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    
    try {
      await apiService.deleteCultural(itemToDelete);
      
      // If deleting the last item on the current page, go back one page
      if (currentItems.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
      
      loadData();
    } catch (err) {
      alert("Failed to delete record.");
    } finally {
      setItemToDelete(null); // Close the popup
    }
  };

  // Pagination Logic Calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 md:p-6 lg:p-10 max-w-7xl mx-auto pt-20 md:pt-10 h-full flex flex-col relative">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800">🎉 Cultural Celebrations</h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">Manage attendees and event registrations.</p>
        </div>
        {/* Total Count Badge */}
        <div className="bg-white px-5 py-2.5 rounded-xl shadow-sm border border-slate-200 font-bold text-slate-700 flex items-center gap-2">
          <span>Total Attendees:</span> 
          <span className="bg-[#FF6B6B] text-white px-2 py-0.5 rounded-md text-sm">{data.length}</span>
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-20 text-slate-500 font-bold flex-1">Loading data...</div>
      ) : data.length === 0 ? (
        <div className="text-center py-20 text-slate-500 bg-white rounded-3xl border border-slate-100 font-bold flex-1 shadow-sm">
          No attendees found.
        </div>
      ) : (
        <div className="flex flex-col flex-1 justify-between">
          
          <div className="w-full">
            {/* ======================= */}
            {/* DESKTOP VIEW (TABLE) */}
            {/* ======================= */}
            <div className="hidden lg:block bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest border-b border-slate-100">
                    <th className="p-5 font-black">Attendee Info</th>
                    <th className="p-5 font-black">Interests & Age</th>
                    <th className="p-5 font-black">Background</th>
                    <th className="p-5 font-black">Dietary & Needs</th>
                    <th className="p-5 font-black text-center">Volunteer</th>
                    <th className="p-5 font-black text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item) => (
                    <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="p-5 align-top">
                        <div className="font-bold text-slate-800">{item.name} <span className="text-xs font-normal text-slate-400">({item.pronouns})</span></div>
                        <div className="text-xs font-normal text-slate-500 mt-1">{item.email}</div>
                        <div className="text-xs font-normal text-slate-500">{item.phone}</div>
                      </td>
                      <td className="p-5 text-sm max-w-[180px] align-top">
                        <div className="text-[#FF6B6B] font-bold truncate" title={item.interests}>{item.interests}</div>
                        <div className="text-xs text-slate-400 mt-1">Age: {item.age_group}</div>
                      </td>
                      <td className="p-5 text-sm text-slate-600 align-top max-w-[150px]">
                        <div className="font-bold text-slate-700 truncate" title={item.country}>{item.country || 'Not specified'}</div>
                        <div className="text-xs text-slate-500 mt-1 truncate" title={item.background}>{item.background}</div>
                      </td>
                      <td className="p-5 text-sm text-slate-600 max-w-[180px] align-top">
                        <div className="truncate" title={item.dietary}><strong className="text-slate-800">Diet:</strong> {item.dietary || 'None'}</div>
                        <div className="truncate mt-1" title={item.access_needs}><strong className="text-slate-800">Needs:</strong> {item.access_needs || 'None'}</div>
                      </td>
                      <td className="p-5 text-center align-top">
                        {item.volunteering ? (
                          <span className="bg-green-100 text-green-700 font-bold text-xs px-3 py-1.5 rounded-md border border-green-200">Yes</span>
                        ) : (
                          <span className="bg-slate-100 text-slate-400 font-bold text-xs px-3 py-1.5 rounded-md">No</span>
                        )}
                      </td>
                      <td className="p-5 align-top">
                        <div className="flex justify-center gap-2">
                          <button 
                            onClick={() => setSelectedCultural(item)} 
                            className="text-[#3B82F6] bg-blue-50 hover:bg-[#3B82F6] hover:text-white px-4 py-2 rounded-xl font-bold text-sm transition-all"
                          >
                            View
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
            {/* MOBILE/TABLET VIEW (CARDS) */}
            {/* ============================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
              {currentItems.map((item) => (
                <div key={item.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                  {/* Card Header: Name & Volunteer Badge */}
                  <div className="flex justify-between items-start gap-4 border-b border-slate-50 pb-4">
                    <div>
                      <div className="font-bold text-slate-800 text-lg leading-tight mb-1">
                        {item.name} <span className="text-sm font-normal text-slate-400">({item.pronouns})</span>
                      </div>
                      <div className="text-sm font-medium text-slate-500">{item.email}</div>
                      <div className="text-sm font-medium text-slate-500">{item.phone}</div>
                    </div>
                    {item.volunteering ? (
                      <span className="bg-green-100 text-green-700 font-black text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-lg whitespace-nowrap border border-green-200">
                        Volunteer
                      </span>
                    ) : null}
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-50 p-3 rounded-2xl">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1 tracking-wider">Interests</span>
                      <span className="font-bold text-[#FF6B6B] line-clamp-1">{item.interests || 'None'}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-2xl">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1 tracking-wider">Age Group</span>
                      <span className="font-bold text-slate-700">{item.age_group || 'N/A'}</span>
                    </div>
                  </div>

                  {/* Special Needs Warning */}
                  {item.access_needs && (
                    <div className="text-sm text-orange-800 bg-orange-50 p-3 rounded-2xl border border-orange-100 flex gap-2 items-start">
                      <span className="text-base">⚠️</span>
                      <div>
                        <span className="font-bold block mb-0.5 text-xs text-orange-600 uppercase tracking-wider">Access Needs</span> 
                        {item.access_needs}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-1">
                    <button 
                      onClick={() => setSelectedCultural(item)} 
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
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all w-full sm:w-auto hidden sm:block ${currentPage === 1 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-700 hover:bg-slate-50 shadow-sm border border-slate-200'}`}
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
                        ? 'bg-[#FF6B6B] text-white shadow-md border border-[#FF6B6B]'
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
      {/* VIEW FULL DETAILS MODAL */}
      {/* ======================= */}
      <AnimatePresence>
        {selectedCultural && (
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
              className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-4xl shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              
              <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-800">{selectedCultural.name}</h2>
                  <p className="text-slate-500 text-sm font-medium mt-1">Full Registration Details</p>
                </div>
                <button 
                  onClick={() => setSelectedCultural(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full w-10 h-10 flex items-center justify-center font-bold transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                
                {/* Attendee Info Column */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black text-slate-800 border-b border-slate-100 pb-2">Attendee Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedCultural.email}</div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedCultural.phone || 'N/A'}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pronouns</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedCultural.pronouns || 'N/A'}</div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Age Group</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedCultural.age_group || 'N/A'}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Country</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedCultural.country || 'N/A'}</div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Background</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedCultural.background || 'N/A'}</div>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-4">
                    <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-2">Emergency Contact</h4>
                    <div className="font-bold text-slate-800 text-sm">{selectedCultural.emergency_name || 'Not provided'}</div>
                    <div className="text-slate-600 text-sm mt-1">{selectedCultural.emergency_phone || 'N/A'}</div>
                  </div>
                </div>

                {/* Event Info Column */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black text-slate-800 border-b border-slate-100 pb-2">Event Preferences</h3>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Interests</label>
                    <div className="bg-[#fff0f0] text-[#FF6B6B] font-bold px-4 py-3 rounded-xl text-sm border border-[#ffe0e0]">
                      {selectedCultural.interests || 'N/A'}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Volunteering</label>
                      <div className={`px-4 py-3 rounded-xl text-sm font-bold border ${selectedCultural.volunteering ? 'bg-green-50 text-green-700 border-green-200' : 'bg-slate-50 text-slate-600 border-slate-100'}`}>
                        {selectedCultural.volunteering ? 'Yes, interested' : 'No'}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Photo Consent</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm">{selectedCultural.photo_consent || 'N/A'}</div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Dietary Requirements</label>
                    <div className="bg-blue-50 px-4 py-3 rounded-xl text-blue-800 text-sm border border-blue-100 leading-relaxed whitespace-pre-wrap">
                      {selectedCultural.dietary || 'None specified.'}
                    </div>
                  </div>
                </div>

                {/* Full Width Text Areas */}
                <div className="col-span-1 md:col-span-2 space-y-4 pt-4 border-t border-slate-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-1">Access Needs</label>
                      <div className="bg-orange-50 px-4 py-3 rounded-xl text-orange-800 text-sm leading-relaxed whitespace-pre-wrap border border-orange-100">
                        {selectedCultural.access_needs || 'None specified.'}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Additional Comments</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm leading-relaxed whitespace-pre-wrap border border-slate-100">
                        {selectedCultural.comments || 'No additional comments provided.'}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex justify-end mt-8 pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setSelectedCultural(null)} 
                  className="px-8 py-3 rounded-xl font-bold text-sm bg-slate-800 text-white shadow-md hover:bg-slate-700 transition-all"
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
              className="bg-white rounded-[2rem] p-8 md:p-10 max-w-sm w-full text-center shadow-2xl border border-slate-100"
            >
              <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-red-100">
                <span className="text-4xl font-bold">⚠️</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Confirm Deletion</h3>
              <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                Are you sure you want to delete this <strong className="text-slate-700">cultural event registration</strong>? This action cannot be undone and attendee details will be lost.
              </p>
              <div className="flex gap-3">
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