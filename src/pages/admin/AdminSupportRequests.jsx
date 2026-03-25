import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService';

export default function AdminSupportRequests() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewedReq, setViewedReq] = useState(null); 
  const [itemToDelete, setItemToDelete] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => { loadData(); }, [currentPage]);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await apiService.getSupportRequests(currentPage);
      setData(res.data.data || []);
      setTotalPages(res.data.totalPages || 1);
      setTotalItems(res.data.totalItems || 0);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const goToNextPage = () => setCurrentPage(p => Math.min(p + 1, totalPages));
  const goToPrevPage = () => setCurrentPage(p => Math.max(p - 1, 1));
  const goToPage = (num) => setCurrentPage(num);

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    try {
      await apiService.deleteSupportRequest(itemToDelete);
      if (data.length === 1 && currentPage > 1) setCurrentPage(currentPage - 1);
      else loadData();
    } catch (error) {
      alert("Failed to delete request.");
    } finally {
      setItemToDelete(null);
    }
  };

  // Helper for Urgency Badge Colors
  const getUrgencyBadge = (urgency) => {
    switch (urgency) {
      case 'high': return <span className="bg-red-100 text-red-700 px-3 py-1 rounded-md font-bold text-[10px] uppercase">🚨 High Priority</span>;
      case 'low': return <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-md font-bold text-[10px] uppercase">Low Priority</span>;
      default: return <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-md font-bold text-[10px] uppercase">Normal</span>;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 pt-20 md:pt-10 max-w-7xl mx-auto h-full flex flex-col relative">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800">💌 Support Requests</h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">Manage personalized community support inquiries.</p>
        </div>
        <div className="bg-white px-5 py-2.5 rounded-xl shadow-sm border border-slate-200 font-bold text-slate-700">
          Total Requests: <span className="bg-blue-500 text-white px-2 py-0.5 rounded-md">{totalItems}</span>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-500 font-bold">Loading requests...</div>
      ) : data.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 font-bold shadow-sm">No support requests yet.</div>
      ) : (
        <div className="flex flex-col flex-1 justify-between">
          <div className="w-full">
            
            {/* DESKTOP TABLE */}
            <div className="hidden lg:block bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest">
                  <tr>
                    <th className="p-5 font-black border-b border-slate-100">Applicant Info</th>
                    <th className="p-5 font-black border-b border-slate-100">Primary Need</th>
                    <th className="p-5 font-black border-b border-slate-100 text-center">Urgency</th>
                    <th className="p-5 font-black border-b border-slate-100 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50 border-b border-slate-50 transition-colors">
                      <td className="p-5">
                        <div className="font-bold text-slate-800 text-base">{item.fullName}</div>
                        <div className="text-xs text-slate-500 mt-1">{item.email} {item.phone ? `| ${item.phone}` : ''}</div>
                      </td>
                      <td className="p-5">
                        <span className="font-bold text-slate-700 text-sm">{item.primaryNeed}</span>
                      </td>
                      <td className="p-5 text-center">
                        {getUrgencyBadge(item.urgency)}
                      </td>
                      <td className="p-5">
                        <div className="flex gap-2 justify-center">
                          <button onClick={() => setViewedReq(item)} className="px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-500 hover:text-white rounded-xl font-bold text-xs transition-all">
                            Review
                          </button>
                          <button onClick={() => setItemToDelete(item.id)} className="px-4 py-2 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl font-bold text-xs transition-all">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
              {data.map((item) => (
                <div key={item.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-bold text-lg">{item.fullName}</div>
                    {getUrgencyBadge(item.urgency)}
                  </div>
                  <div className="text-sm text-slate-500 mb-2">{item.email}</div>
                  <div className="text-xs font-bold text-slate-700 mb-4 bg-slate-100 inline-block px-2 py-1 rounded">Need: {item.primaryNeed}</div>
                  
                  <div className="flex gap-2">
                    <button onClick={() => setViewedReq(item)} className="w-full py-2 bg-blue-50 text-blue-600 font-bold rounded-xl text-sm">Review</button>
                    <button onClick={() => setItemToDelete(item.id)} className="w-full py-2 bg-red-50 text-red-500 font-bold rounded-xl text-sm">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8 pt-4 border-t border-slate-200">
              <button onClick={goToPrevPage} disabled={currentPage === 1} className="px-4 py-2 rounded-xl bg-white border shadow-sm font-bold text-sm">Prev</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button key={num} onClick={() => goToPage(num)} className={`w-10 h-10 rounded-xl font-bold text-sm ${currentPage === num ? 'bg-blue-500 text-white' : 'bg-white border'}`}>
                  {num}
                </button>
              ))}
              <button onClick={goToNextPage} disabled={currentPage === totalPages} className="px-4 py-2 rounded-xl bg-white border shadow-sm font-bold text-sm">Next</button>
            </div>
          )}
        </div>
      )}

      {/* VIEW DETAILS MODAL */}
      {viewedReq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
              <h2 className="text-2xl font-black text-slate-800">Support Request Details</h2>
              <button onClick={() => setViewedReq(null)} className="text-slate-400 hover:text-slate-800 text-xl font-bold">✕</button>
            </div>
            
            <div className="space-y-6 text-sm">
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <div><span className="font-bold block text-slate-500 text-[10px] tracking-wider uppercase mb-1">Full Name</span> <span className="text-base font-bold text-slate-800">{viewedReq.fullName}</span></div>
                <div><span className="font-bold block text-slate-500 text-[10px] tracking-wider uppercase mb-1">Urgency Level</span> {getUrgencyBadge(viewedReq.urgency)}</div>
                <div><span className="font-bold block text-slate-500 text-[10px] tracking-wider uppercase mb-1">Email Address</span> <a href={`mailto:${viewedReq.email}`} className="text-blue-500 font-bold hover:underline">{viewedReq.email}</a></div>
                <div><span className="font-bold block text-slate-500 text-[10px] tracking-wider uppercase mb-1">Phone Number</span> <span className="font-bold text-slate-700">{viewedReq.phone || 'Not Provided'}</span></div>
              </div>

              <div>
                <span className="font-bold block text-slate-500 text-[10px] tracking-wider uppercase mb-2">Primary Area of Need</span>
                <span className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-lg font-bold text-sm inline-block">{viewedReq.primaryNeed}</span>
              </div>

              <div>
                <span className="font-bold block text-slate-500 text-[10px] tracking-wider uppercase mb-2">Applicant's Situation Description</span>
                <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100 text-slate-800 leading-relaxed whitespace-pre-wrap font-medium text-base">
                  "{viewedReq.situationDesc}"
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              {/* <a href={`mailto:${viewedReq.email}`} className="w-full text-center py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black transition-all shadow-md">Reply via Email</a> */}
              <button onClick={() => setViewedReq(null)} className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-black transition-all">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      <AnimatePresence>
        {itemToDelete && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
              <div className="w-16 h-16 bg-red-50 text-red-500 flex items-center justify-center rounded-full text-3xl mx-auto mb-4">⚠️</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Delete Request?</h3>
              <p className="text-slate-500 text-sm mb-6">This will permanently delete this support request. Ensure you have assisted the individual before deleting.</p>
              <div className="flex gap-3">
                <button onClick={() => setItemToDelete(null)} className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all">Cancel</button>
                <button onClick={confirmDelete} className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-md">Yes, Delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}