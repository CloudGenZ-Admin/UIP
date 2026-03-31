import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService';

export default function AdminPartnerships() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);

  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    loadData();
  }, [currentPage]);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await apiService.getPartnerships(currentPage);
      setData(res.data?.data || res.data || []);
      setTotalPages(res.data?.totalPages || 1);
      setTotalItems(res.data?.totalItems || 0);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = async () => {
    try {
      await apiService.deletePartnership(itemToDelete);
      setItemToDelete(null);
      if (data.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      } else {
        loadData();
      }
    } catch (err) {
      alert('Delete failed');
    }
  };

  // FIXED: Properly parses stringified JSON arrays like '["Option 1", "Option 2"]'
  const formatInterests = (interests, other) => {
    if (!interests) return '';

    let list = [];
    
    // Check if it's a stringified JSON array
    if (typeof interests === 'string') {
      try {
        list = JSON.parse(interests);
        if (!Array.isArray(list)) list = interests.split(',');
      } catch (e) {
        // If parsing fails, fall back to normal string splitting
        list = interests.split(',');
      }
    } else if (Array.isArray(interests)) {
      list = interests;
    }

    // Filter out "Other" and trim whitespace
    list = list
      .map(i => i.trim())
      .filter(i => i.toLowerCase() !== 'other');

    // Add custom otherInterest if it exists
    if (other && other.trim() !== '') {
      list.push(other.trim());
    }

    return list.join(', ');
  };

  if (loading && data.length === 0) {
    return <div className="text-center py-20 font-bold text-slate-500">Loading...</div>;
  }

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-800 mt-10">🤝 Partnership Requests</h1>
          <p className="text-slate-500 text-sm">Community partner submissions</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-xl border shadow-sm font-bold flex items-center">
          Total: {totalItems}
        </div>
      </div>

      <div className="hidden md:block bg-white rounded-3xl border shadow-sm overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className="bg-slate-50 text-xs uppercase text-slate-400">
            <tr>
              <th className="p-4 text-left">Contact</th>
              <th className="p-4 text-left">Organization</th>
              <th className="p-4 text-left">Interests</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b hover:bg-slate-50">
                <td className="p-4">
                  <div className="font-bold">{item.contactName || item.fullName}</div>
                  <div className="text-sm text-blue-600">{item.email}</div>
                  <div className="text-xs text-slate-400">{item.phone}</div>
                </td>
                <td className="p-4">
                  <div className="font-bold">{item.orgName || item.organizationName}</div>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="text-sm text-slate-700 font-medium">
                      {formatInterests(item.interests, item.otherInterest) || '—'}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-sm max-w-[250px] truncate">
                  {item.description || item.aboutOrg}
                </td>
                <td className="p-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button onClick={() => setSelectedItem(item)} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg font-semibold hover:bg-blue-100">View</button>
                    <button onClick={() => setItemToDelete(item.id)} className="px-3 py-1 bg-red-50 text-red-500 rounded-lg font-semibold hover:bg-red-100">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan="5" className="p-8 text-center text-slate-500 font-medium">No partnership requests found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden flex flex-col gap-4">
        {data.length === 0 && (
          <div className="p-8 text-center text-slate-500 font-medium bg-white rounded-3xl shadow border">No partnership requests found.</div>
        )}
        {data.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-3xl shadow border">
            <div className="font-bold text-lg">{item.contactName || item.fullName}</div>
            <div className="text-sm text-blue-600">{item.email}</div>
            <div className="text-sm text-slate-500 mb-2">{item.phone}</div>
            <div className="font-bold text-slate-700">{item.orgName || item.organizationName}</div>
            <div className="flex flex-wrap gap-1 my-2">
              <span className="text-sm text-slate-700 font-medium">
                {formatInterests(item.interests, item.otherInterest) || '—'}
              </span>
            </div>
            <div className="text-xs text-slate-500 line-clamp-2">
              {item.description || item.aboutOrg}
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={() => setSelectedItem(item)} className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold">View</button>
              <button onClick={() => setItemToDelete(item.id)} className="flex-1 py-2 bg-red-50 text-red-500 rounded-xl font-bold">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white border text-slate-700 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            Prev
          </button>
          <div className="flex gap-2 overflow-x-auto">
            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-xl font-bold transition-colors ${
                    currentPage === pageNum 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'bg-white border text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white border text-slate-700 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            Next
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              className="bg-white p-6 md:p-8 rounded-3xl max-w-2xl w-full overflow-y-auto max-h-[90vh] shadow-2xl"
            >
              <h2 className="text-2xl font-black mb-4">{selectedItem.contactName || selectedItem.fullName}</h2>
              <div className="space-y-2 mb-6 text-slate-600">
                <p><strong>Email:</strong> <a href={`mailto:${selectedItem.email}`} className="text-blue-600 hover:underline">{selectedItem.email}</a></p>
                <p><strong>Phone:</strong> {selectedItem.phone}</p>
                <p><strong>Organization:</strong> {selectedItem.orgName || selectedItem.organizationName}</p>
              </div>
              <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <strong className="text-slate-800">Interests:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-slate-700 font-medium">
                    {formatInterests(selectedItem.interests, selectedItem.otherInterest) || '—'}
                  </span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <strong className="text-slate-800">Description:</strong>
                <p className="mt-2 text-slate-600 whitespace-pre-wrap">{selectedItem.description}</p>
              </div>
              <button onClick={() => setSelectedItem(null)} className="mt-8 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-colors">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {itemToDelete && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex justify-center items-center p-4 z-50"
          >
            <motion.div 
              initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              className="bg-white p-6 rounded-3xl text-center max-w-sm w-full shadow-2xl"
            >
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚠️
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Delete Request?</h3>
              <p className="text-slate-500 mb-6">This action cannot be undone. Are you sure you want to delete this partnership request?</p>
              <div className="flex gap-3">
                <button onClick={() => setItemToDelete(null)} className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors">Cancel</button>
                <button onClick={confirmDelete} className="flex-1 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-colors">Delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}