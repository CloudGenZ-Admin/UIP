import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService';
import { Mail, Phone, Calendar, Tag } from 'lucide-react';

export default function AdminContact() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State to hold the currently selected message for the details modal
  const [selectedContact, setSelectedContact] = useState(null);

  // State for delete confirmation popup
  const [itemToDelete, setItemToDelete] = useState(null);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Show exactly 4 messages per page
  
  useEffect(() => { 
    loadData(); 
  }, []);
  
  const loadData = async () => { 
    try {
      setLoading(true);
      const response = await apiService.getContacts(); 
      setData(response.data); 
    } catch (error) {
      console.error("Failed to load contact messages:", error);
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
      await apiService.deleteContact(itemToDelete); 
      
      // If deleting the last item on the current page, go back one page
      if (currentItems.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }

      loadData(); 
    } catch (error) {
      alert("Failed to delete message.");
    } finally {
      setItemToDelete(null); // Close the popup
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 pt-20 md:pt-10 max-w-7xl mx-auto h-full flex flex-col relative">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 flex items-center gap-3">
            <Mail className="text-blue-500" size={36} /> 
            Contact Messages
          </h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">Manage incoming inquiries and contact form submissions.</p>
        </div>
        <div className="bg-white px-5 py-2.5 rounded-xl shadow-sm border border-slate-200 font-bold text-slate-700 flex items-center gap-2">
          <span>Total:</span> 
          <span className="bg-blue-500 text-white px-2 py-0.5 rounded-md text-sm">{data.length}</span>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-500 font-bold flex-1">Loading messages...</div>
      ) : data.length === 0 ? (
        <div className="text-center py-20 text-slate-500 bg-white rounded-3xl border border-slate-100 font-bold shadow-sm flex-1">
          No messages received yet.
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
                    <th className="p-5 font-black">Sender Info</th>
                    <th className="p-5 font-black">Interest / Subject</th>
                    <th className="p-5 font-black">Date Received</th>
                    <th className="p-5 font-black text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item) => (
                    <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="p-5 align-top">
                        <div className="font-bold text-slate-800 text-base">
                          {item.name}
                        </div>
                        <div className="text-xs font-normal text-slate-500 mt-1 flex items-center gap-1.5">
                          <Mail size={12} /> {item.email}
                        </div>
                        {item.phone && (
                          <div className="text-xs font-normal text-slate-500 mt-1 flex items-center gap-1.5">
                            <Phone size={12} /> {item.phone}
                          </div>
                        )}
                      </td>
                      <td className="p-5 align-top">
                        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-lg font-bold text-xs">
                          <Tag size={12} /> {item.interest || 'General Inquiry'}
                        </div>
                      </td>
                      <td className="p-5 text-sm text-slate-600 align-top">
                        <div className="flex items-center gap-1.5 font-medium text-slate-500 mt-1.5">
                          <Calendar size={14} className="text-slate-400" />
                          {new Date(item.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="p-5 align-top">
                        <div className="flex justify-center gap-2">
                          <button 
                            onClick={() => setSelectedContact(item)} 
                            className="text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl font-bold text-sm transition-all"
                          >
                            Read Message
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
                  
                  {/* Header: Name & Contact */}
                  <div>
                    <div className="font-bold text-slate-800 text-lg leading-tight mb-2">
                      {item.name}
                    </div>
                    <div className="text-sm text-slate-500 flex items-center gap-1.5 mb-1">
                      <Mail size={14} /> {item.email}
                    </div>
                    {item.phone && (
                      <div className="text-sm text-slate-500 flex items-center gap-1.5">
                        <Phone size={14} /> {item.phone}
                      </div>
                    )}
                  </div>

                  {/* Info Grid */}
                  <div className="bg-slate-50 p-4 rounded-2xl flex flex-col gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1">Interest</span>
                      <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-md font-bold text-xs">
                        <Tag size={12} /> {item.interest || 'General Inquiry'}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-0.5">Date Received</span>
                      <div className="flex items-center gap-1.5 text-sm text-slate-700 font-medium">
                        <Calendar size={14} className="text-slate-400" />
                        {new Date(item.createdAt).toLocaleDateString()} at {new Date(item.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-2">
                    <button 
                      onClick={() => setSelectedContact(item)} 
                      className="w-full text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white py-3 rounded-xl font-bold text-sm transition-all"
                    >
                      Read
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
                        ? 'bg-blue-500 text-white shadow-md border border-blue-500'
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
        {selectedContact && (
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
              className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              
              <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-800">{selectedContact.name}</h2>
                  <p className="text-slate-500 text-sm font-medium mt-1 flex items-center gap-2">
                    <Calendar size={14} /> Received on {new Date(selectedContact.createdAt).toLocaleDateString()} at {new Date(selectedContact.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedContact(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full w-10 h-10 flex items-center justify-center font-bold transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                
                {/* Basic Info Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email</label>
                    <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm flex items-center gap-2">
                      <Mail size={16} className="text-slate-400" /> 
                      <a href={`mailto:${selectedContact.email}`} className="text-blue-600 hover:underline">{selectedContact.email}</a>
                    </div>
                  </div>
                </div>

                {/* Additional Info Column */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl text-slate-800 text-sm flex items-center gap-2">
                        {selectedContact.phone ? <><Phone size={14} className="text-slate-400" /> {selectedContact.phone}</> : 'N/A'}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Interest</label>
                      <div className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-3 rounded-xl text-sm font-bold truncate">
                        {selectedContact.interest || 'General'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full Width Message Box */}
                <div className="col-span-1 md:col-span-2 mt-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                  <div className="bg-[#f8fafc] text-slate-800 border border-slate-200 p-5 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed min-h-[150px]">
                    {selectedContact.message || <span className="text-slate-400 italic">No message content provided.</span>}
                  </div>
                </div>

              </div>

              <div className="flex justify-end mt-8 pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setSelectedContact(null)} 
                  className="px-8 py-3 rounded-xl font-bold text-sm bg-slate-800 text-white shadow-md hover:bg-slate-700 transition-all"
                >
                  Close Message
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
                Are you sure you want to delete this <strong className="text-slate-700">contact message</strong>? This action cannot be undone.
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