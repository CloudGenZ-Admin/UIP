import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService';

export default function AdminYouth() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYouth, setSelectedYouth] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => { loadData(); }, []);

  const loadData = async () => { 
    try {
      setLoading(true);
      const res = await apiService.getYouthPrograms(); 
      setData(res.data); 
    } catch (error) { console.error(error); } finally { setLoading(false); }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = data.slice(indexOfLastItem - itemsPerPage, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const confirmDelete = async () => { 
    if (!itemToDelete) return;
    try {
      await apiService.deleteYouthProgram(itemToDelete); 
      if (currentItems.length === 1 && currentPage > 1) setCurrentPage(currentPage - 1);
      loadData(); 
    } catch (error) { alert("Delete failed"); } finally { setItemToDelete(null); }
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 pt-20 md:pt-10 w-full max-w-7xl mx-auto h-full flex flex-col relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800">🌱 Youth & Newcomers</h1>
          <p className="text-slate-500 mt-2">Manage youth program registrations.</p>
        </div>
        <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-200 font-bold flex gap-3">
          <span>Total:</span> <span className="bg-[#A855F7] text-white px-2.5 rounded-md">{data.length}</span>
        </div>
      </div>

      {loading ? <div className="text-center py-20 text-slate-500 font-bold">Loading...</div> : 
       data.length === 0 ? <div className="text-center py-20 text-slate-500 bg-white rounded-3xl font-bold border">No registrations found.</div> : (
        <div className="w-full bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-x-auto">
          <table className="w-full min-w-[900px] text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest border-b">
                <th className="p-5 font-black">Youth Info</th>
                <th className="p-5 font-black">Status & Age</th>
                <th className="p-5 font-black">Interests</th>
                <th className="p-5 font-black text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="p-5">
                    <div className="font-bold">{item.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.email}</div>
                  </td>
                  <td className="p-5 text-sm text-slate-600">
                    <div className="text-[#A855F7] font-bold">{item.age_group}</div>
                    <div className="text-xs text-slate-500 truncate">{item.newcomer_status || 'N/A'}</div>
                  </td>
                  <td className="p-5 text-sm text-slate-600 truncate max-w-[200px]">{item.interests}</td>
                  <td className="p-5 text-center">
                    <button onClick={() => setSelectedYouth(item)} className="text-[#3B82F6] bg-blue-50 px-4 py-2 rounded-xl font-bold text-sm mr-2">View</button>
                    <button onClick={() => setItemToDelete(item.id)} className="text-red-500 bg-red-50 px-4 py-2 rounded-xl font-bold text-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination here (same logic as AdminPeer) */}

      <AnimatePresence>
        {selectedYouth && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <motion.div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-black text-slate-800 border-b pb-4 mb-4">{selectedYouth.name}</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong className="text-slate-400 uppercase text-[10px]">Email:</strong><p>{selectedYouth.email}</p></div>
                <div><strong className="text-slate-400 uppercase text-[10px]">Age Group:</strong><p>{selectedYouth.age_group}</p></div>
                <div><strong className="text-slate-400 uppercase text-[10px]">Status:</strong><p>{selectedYouth.newcomer_status}</p></div>
                <div><strong className="text-slate-400 uppercase text-[10px]">Emergency:</strong><p>{selectedYouth.emergency_contact}</p></div>
                <div className="col-span-2"><strong className="text-slate-400 uppercase text-[10px]">Interests:</strong><p>{selectedYouth.interests}</p></div>
                <div className="col-span-2 bg-red-50 p-3 rounded-xl"><strong className="text-red-800 uppercase text-[10px]">Allergies:</strong><p className="text-red-700">{selectedYouth.allergies || 'None'}</p></div>
              </div>
              <button onClick={() => setSelectedYouth(null)} className="w-full mt-6 py-3 bg-slate-800 text-white rounded-xl font-bold">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Delete Modal exactly like AdminPeer */}
    </div>
  );
}