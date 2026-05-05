import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService';

// Helpers to format dates/times for the UI
const formatDateParts = (dateString) => {
  if (!dateString) return { day: '', month: '' };
  const [year, month, day] = dateString.split('-'); // Splits 'YYYY-MM-DD'
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return {
    day: day,
    month: monthNames[parseInt(month, 10) - 1]
  };
};

const formatTime12hr = (timeString) => {
  if (!timeString) return '';
  const [hour, minute] = timeString.split(':');
  const h = parseInt(hour, 10);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:${minute} ${ampm}`;
};

export default function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // States for Modals
  const [itemToDelete, setItemToDelete] = useState(null);
  const [errorMsg, setErrorMsg] = useState(''); // Validation Error State
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  const [formData, setFormData] = useState({
    date: '', 
    title: '',
    desc: '',
    loc: '',
    time: '',
    link: '', // Added Event Link
    featured: false
  });

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const res = await apiService.getEvents();
      setEvents(res.data);
    } catch (error) {
      console.error("Failed to fetch events:", error);
      alert("Error fetching events.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Pagination Logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    try {
      await apiService.deleteEvent(itemToDelete);
      if (currentEvents.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
      fetchEvents(); 
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete event.");
    } finally {
      setItemToDelete(null); 
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // --- Validation: Block Events at the exact same Date and Time ---
    const isTimeConflict = events.some(
      ev => ev.date === formData.date && ev.time === formData.time
    );

    if (isTimeConflict) {
      setErrorMsg(`An event is already scheduled at ${formatTime12hr(formData.time)} on this date. Please select a different time.`);
      return;
    }

    try {
      await apiService.submitEvent(formData); 
      setFormData({ date: '', title: '', desc: '', loc: '', time: '', link: '', featured: false });
      setCurrentPage(1); 
      fetchEvents(); 
    } catch (error) {
      console.error("Submit failed:", error);
      alert("Failed to add event.");
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 pt-20 md:pt-10 max-w-7xl mx-auto h-full flex flex-col gap-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Manage Events</h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">Create, view, and delete upcoming community events.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Column: Events List */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-slate-100 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold">Current Events ({events.length})</h2>
          </div>
          
          {isLoading ? (
            <div className="text-center py-10 text-slate-500 flex-1">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="text-center py-10 text-slate-500 bg-slate-50 rounded-2xl flex-1">No events found. Add one!</div>
          ) : (
            <div className="flex flex-col flex-1 justify-between">
              {/* Event Items */}
              <div className="space-y-4">
                {currentEvents.map((ev) => {
                  const { day, month } = formatDateParts(ev.date); 

                  return (
                    <div key={ev.id} className="p-4 rounded-2xl border border-slate-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:bg-slate-50 transition-colors">
                      <div className="flex gap-4 w-full">
                        <div className="bg-purple-100 text-[#A855F7] p-3 rounded-xl min-w-[60px] h-[60px] flex flex-col items-center justify-center shrink-0">
                          <span className="font-black text-xl leading-none">{day}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider">{month}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-800 flex flex-wrap items-center gap-2">
                            {ev.title} 
                            {ev.featured && <span className="text-[10px] bg-gradient-to-r from-[#FF6B6B]/10 to-[#A855F7]/10 text-[#A855F7] px-2 py-0.5 rounded-full uppercase font-bold border border-purple-200">Featured</span>}
                          </h3>
                          <p className="text-sm text-slate-500 line-clamp-1 mt-0.5">{ev.desc}</p>
                          <div className="text-xs font-semibold text-slate-400 mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
                            <span>📍 {ev.loc}</span>
                            <span className="hidden sm:inline">|</span>
                            <span>🕐 {formatTime12hr(ev.time)}</span>
                            {ev.link && (
                              <>
                                <span className="hidden sm:inline">|</span>
                                <a href={ev.link} target="_blank" rel="noopener noreferrer" className="text-[#A855F7] hover:underline cursor-pointer">🔗 Link</a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => setItemToDelete(ev.id)}
                        className="p-2 sm:p-3 w-full sm:w-auto text-red-500 bg-red-50 hover:bg-red-500 hover:text-white rounded-xl transition-colors font-bold shrink-0 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-4 border-t border-slate-100 gap-4">
                  <button 
                    onClick={goToPrevPage} 
                    disabled={currentPage === 1}
                    className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all w-full sm:w-auto hidden sm:block ${currentPage === 1 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-purple-50 text-[#A855F7] hover:bg-purple-100'}`}
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
                            ? 'bg-[#A855F7] text-white shadow-md'
                            : 'bg-purple-50 text-[#A855F7] hover:bg-purple-100'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  
                  <button 
                    onClick={goToNextPage} 
                    disabled={currentPage === totalPages}
                    className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all w-full sm:w-auto hidden sm:block ${currentPage === totalPages ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-purple-50 text-[#A855F7] hover:bg-purple-100'}`}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Add Event Form */}
        <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#A855F7]/10 p-5 md:p-6 rounded-3xl border border-purple-100 shadow-sm lg:sticky lg:top-24 mt-4 lg:mt-0">
          <h2 className="text-xl font-bold mb-6 text-slate-800">Add New Event</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Date</label>
                <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#A855F7] bg-white outline-none transition-shadow text-slate-700 cursor-pointer" />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Time</label>
                <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#A855F7] bg-white outline-none transition-shadow text-slate-700 cursor-pointer" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Event Title</label>
              <input required type="text" name="title" value={formData.title} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#A855F7] bg-white outline-none transition-shadow" />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Description</label>
              <textarea required name="desc" rows="3" value={formData.desc} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#A855F7] bg-white resize-none outline-none transition-shadow"></textarea>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Location</label>
              <input required type="text" name="loc" placeholder="Room 204" value={formData.loc} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#A855F7] bg-white outline-none transition-shadow" />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Event Link (Optional)</label>
              <input type="url" name="link" placeholder="https://" value={formData.link} onChange={handleChange} className="w-full mt-1 p-3 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#A855F7] bg-white outline-none transition-shadow" />
            </div>

            <label className="flex items-center gap-3 mt-4 p-3 bg-white rounded-xl ring-1 ring-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
              <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} className="w-5 h-5 text-[#A855F7] rounded focus:ring-[#A855F7]" />
              <span className="font-bold text-sm text-slate-700">Set as Featured Event</span>
            </label>

            <button type="submit" className="w-full py-4 mt-6 bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Create Event
            </button>
          </form>
        </div>

      </div>

      {/* VALIDATION ERROR MODAL */}
      <AnimatePresence>
        {errorMsg && (
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
              <div className="w-20 h-20 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-orange-100">
                <span className="text-4xl font-bold">⚠️</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Time Conflict</h3>
              <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                {errorMsg}
              </p>
              <button 
                onClick={() => setErrorMsg('')}
                className="w-full py-4 bg-slate-100 text-slate-700 font-black rounded-2xl shadow-sm hover:bg-slate-200 transition-all"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DELETE CONFIRMATION MODAL */}
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
                <span className="text-4xl font-bold">🗑️</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Confirm Deletion</h3>
              <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                Are you sure you want to delete this <strong className="text-slate-700">community event</strong>? It will be permanently removed from the public events calendar.
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