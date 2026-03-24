import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService'; // Check path

// Helper function to safely parse potential strings into arrays
const safeArray = (data) => {
  if (Array.isArray(data)) return data;
  if (typeof data === 'string') {
    try {
      // Try to parse if it's stringified JSON (e.g., '["a", "b"]')
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      // If it fails, assume it's a comma-separated string (e.g., 'a, b')
      return data.split(',').map(item => item.trim()).filter(Boolean);
    }
  }
  return [];
};

export default function AdminVolunteers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewedApp, setViewedApp] = useState(null); // Modal for viewing full details
  const [itemToDelete, setItemToDelete] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => { loadData(); }, [currentPage]);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await apiService.getVolunteers(currentPage);
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
      await apiService.deleteVolunteer(itemToDelete);
      if (data.length === 1 && currentPage > 1) setCurrentPage(currentPage - 1);
      else loadData();
    } catch (error) {
      alert("Failed to delete application.");
    } finally {
      setItemToDelete(null);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 pt-20 md:pt-10 max-w-7xl mx-auto h-full flex flex-col relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800">🤝 Volunteers</h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">Manage volunteer applications.</p>
        </div>
        <div className="bg-white px-5 py-2.5 rounded-xl shadow-sm border border-slate-200 font-bold text-slate-700">
          Total: <span className="bg-purple-500 text-white px-2 py-0.5 rounded-md">{totalItems}</span>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-500 font-bold">Loading applications...</div>
      ) : data.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 font-bold shadow-sm">No applications yet.</div>
      ) : (
        <div className="flex flex-col flex-1 justify-between">
          <div className="w-full">
            {/* DESKTOP TABLE */}
            <div className="hidden lg:block bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest">
                  <tr>
                    <th className="p-5 font-black border-b border-slate-100">Applicant Info</th>
                    <th className="p-5 font-black border-b border-slate-100">Availability</th>
                    <th className="p-5 font-black border-b border-slate-100">City</th>
                    <th className="p-5 font-black border-b border-slate-100 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50 border-b border-slate-50 transition-colors">
                      <td className="p-5">
                        <div className="font-bold text-slate-800">{item.fullName} {item.preferredName && `(${item.preferredName})`}</div>
                        <div className="text-xs text-slate-500 mt-1">{item.email} | {item.phone}</div>
                      </td>
                      <td className="p-5 font-bold text-purple-600 text-sm">{item.availability}</td>
                      <td className="p-5 text-sm text-slate-600">{item.city}</td>
                      <td className="p-5">
                        <div className="flex gap-2 justify-center">
                          <button onClick={() => setViewedApp(item)} className="px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-500 hover:text-white rounded-xl font-bold text-xs transition-all">
                            View Details
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
                  <div className="font-bold text-lg mb-1">{item.fullName}</div>
                  <div className="text-sm text-slate-500 mb-4">{item.email}</div>
                  <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2 py-1 rounded">{item.availability}</span>
                  <div className="flex gap-2 mt-4">
                    <button onClick={() => setViewedApp(item)} className="w-full py-2 bg-blue-50 text-blue-600 font-bold rounded-xl text-sm">View</button>
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
                <button key={num} onClick={() => goToPage(num)} className={`w-10 h-10 rounded-xl font-bold text-sm ${currentPage === num ? 'bg-purple-500 text-white' : 'bg-white border'}`}>
                  {num}
                </button>
              ))}
              <button onClick={goToNextPage} disabled={currentPage === totalPages} className="px-4 py-2 rounded-xl bg-white border shadow-sm font-bold text-sm">Next</button>
            </div>
          )}
        </div>
      )}

      {/* VIEW MODAL (Shows complete application) */}
      {viewedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black">Application Details</h2>
              <button onClick={() => setViewedApp(null)} className="text-slate-400 hover:text-slate-800 text-xl font-bold">✕</button>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl">
                <div><span className="font-bold block text-slate-500 text-xs uppercase">Name</span> {viewedApp.fullName} {viewedApp.preferredName && `(${viewedApp.preferredName})`}</div>
                <div><span className="font-bold block text-slate-500 text-xs uppercase">City</span> {viewedApp.city}</div>
                <div><span className="font-bold block text-slate-500 text-xs uppercase">Email</span> {viewedApp.email}</div>
                <div><span className="font-bold block text-slate-500 text-xs uppercase">Phone</span> {viewedApp.phone}</div>
              </div>

              <div>
                <span className="font-bold block text-slate-500 text-xs uppercase mb-1">Availability</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-md font-bold text-xs">{viewedApp.availability}</span>
              </div>

              <div>
                <span className="font-bold block text-slate-500 text-xs uppercase mb-1">Interests</span>
                <div className="flex flex-wrap gap-2">
                  {/* SAFELY MAP OVER INTERESTS */}
                  {safeArray(viewedApp.interests).map((i, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-600 px-2 py-1 rounded font-bold text-[10px]">{i}</span>
                  ))}
                </div>
              </div>

              {/* SAFELY MAP OVER LIVED EXPERIENCE TO PREVENT THE SAME CRASH */}
              {safeArray(viewedApp.livedExperience).length > 0 && (
                <div>
                  <span className="font-bold block text-slate-500 text-xs uppercase mb-1">Lived Experience</span>
                  <div className="flex flex-wrap gap-2">
                    {safeArray(viewedApp.livedExperience).map((i, idx) => (
                      <span key={idx} className="bg-amber-50 text-amber-600 px-2 py-1 rounded font-bold text-[10px]">{i}</span>
                    ))}
                  </div>
                </div>
              )}

              {viewedApp.experienceDesc && (
                <div>
                  <span className="font-bold block text-slate-500 text-xs uppercase mb-1">Relevant Experience</span>
                  <p className="bg-slate-50 p-3 rounded-lg text-slate-700 leading-relaxed">{viewedApp.experienceDesc}</p>
                </div>
              )}

              {viewedApp.motivationDesc && (
                <div>
                  <span className="font-bold block text-slate-500 text-xs uppercase mb-1">Motivation to Volunteer</span>
                  <p className="bg-slate-50 p-3 rounded-lg text-slate-700 leading-relaxed">{viewedApp.motivationDesc}</p>
                </div>
              )}
            </div>

            <button onClick={() => setViewedApp(null)} className="w-full mt-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all">Close</button>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      <AnimatePresence>
        {itemToDelete && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-black mb-2">Delete Application?</h3>
              <p className="text-slate-500 text-sm mb-6">This action cannot be undone.</p>
              <div className="flex gap-2">
                <button onClick={() => setItemToDelete(null)} className="w-full py-3 bg-slate-100 font-bold rounded-xl">Cancel</button>
                <button onClick={confirmDelete} className="w-full py-3 bg-red-500 text-white font-bold rounded-xl">Delete</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}