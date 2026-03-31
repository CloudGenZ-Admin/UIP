import React, { useState, useEffect } from 'react';
import { apiService } from '../../api/apiService';

export default function AdminPartnerships() {
  const [partnerships, setPartnerships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPartnerships();
  }, []);

  const fetchPartnerships = async () => {
    try {
      setLoading(true);
      const response = await apiService.getPartnerships();
      setPartnerships(response.data?.data || response.data || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching partnerships:", err);
      setError("Failed to load partnership requests.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this partnership request?")) return;
    try {
      await apiService.deletePartnership(id);
      setPartnerships(partnerships.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Error deleting request:", err);
      alert("Failed to delete the request.");
    }
  };

  if (loading) return <div className="p-8 text-center text-slate-500 font-bold">Loading Partnership Requests...</div>;

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-black text-slate-900">🤝 Partnership Requests</h1>
        <span className="bg-[#A855F7]/10 text-[#A855F7] px-4 py-1.5 rounded-full font-bold text-sm">
          Total: {partnerships.length}
        </span>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 font-medium">{error}</div>}

      {partnerships.length === 0 && !error ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 text-slate-500">No requests found.</div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 text-sm font-bold text-slate-600">Contact Person</th>
                <th className="p-4 text-sm font-bold text-slate-600">Organization Info</th>
                <th className="p-4 text-sm font-bold text-slate-600">Interests & Ideas</th>
                <th className="p-4 text-sm font-bold text-slate-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {partnerships.map((partner) => (
                <tr key={partner.id} className="hover:bg-slate-50 transition-colors">
                  
                  {/* Name & Email */}
                  <td className="p-4 align-top w-1/4">
                    <div className="font-bold text-slate-900">{partner.fullName}</div>
                    <div className="text-sm font-medium text-blue-600 hover:underline mb-2">
                      <a href={`mailto:${partner.email}`}>{partner.email}</a>
                    </div>
                    <div className="text-xs text-slate-400">
                      {new Date(partner.createdAt).toLocaleDateString()}
                    </div>
                  </td>

                  {/* Organization & Role */}
                  <td className="p-4 align-top w-1/4">
                    <div className="font-bold text-slate-800">{partner.organizationName}</div>
                    {partner.roleTitle && <div className="text-sm text-slate-600">{partner.roleTitle}</div>}
                    <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{partner.cityProvince}</div>
                  </td>

                  {/* Interests & Ideas */}
                  <td className="p-4 align-top w-2/5">
                    {partner.interests && partner.interests.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {partner.interests.map((interest, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                            {interest}
                          </span>
                        ))}
                      </div>
                    )}
                    {partner.aboutOrg && (
                      <p className="text-xs text-slate-600 mb-2"><strong className="text-slate-800">About:</strong> {partner.aboutOrg}</p>
                    )}
                    {partner.collaborationIdeas && (
                      <p className="text-xs text-slate-600"><strong className="text-slate-800">Ideas:</strong> {partner.collaborationIdeas}</p>
                    )}
                  </td>

                  {/* Delete Button */}
                  <td className="p-4 align-top text-right w-32">
                    <button 
                      onClick={() => handleDelete(partner.id)}
                      className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-colors font-bold text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}