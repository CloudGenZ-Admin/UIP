import React, { useState } from 'react';

export default function VolunteerCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle form submission
  const handleApply = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you! Your application has been submitted.');
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        {/* Gradient Border Wrapper */}
        <div className="rounded-3xl p-0.5 shadow-xl" style={{ background: 'linear-gradient(135deg, #A58CE0, #EFAEC3)' }}>
          <div className="bg-white rounded-[calc(1.5rem-2px)] p-10 md:p-14 text-center">
            
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#3A3556] mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-[#87839D] text-sm md:text-base max-w-xl mx-auto mb-8 font-medium">
              Application includes background check and reference requirements.
            </p>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3] text-white font-bold px-10 py-4 rounded-full shadow-md hover:opacity-90 transition-opacity mb-0 text-lg"
            >
              Apply to Volunteer
            </button>

            {/* Newsletter Mini-form */}
            {/* <div className="max-w-md mx-auto border-t border-gray-100 pt-8 mt-4">
              <h4 className="font-bold text-[#3A3556] mb-2 text-xl">Stay Connected & Informed</h4>
              <p className="text-sm text-[#87839D] mb-6">Get updates on programs, resources, and community news delivered to your inbox.</p>
              
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3.5 outline-none focus:border-[#A58CE0] focus:ring-1 focus:ring-[#A58CE0] transition-all text-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#3A3556] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all"
                >
                  Sign Up
                </button>
              </form>
            </div> */}

          </div>
        </div>
      </div>

      {/* --- VOLUNTEER APPLICATION MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#3A3556]/60 backdrop-blur-sm">
          {/* Modal Container */}
          <div 
            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] md:max-h-[90vh] animate-fade-in-up"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-[#3A3556]">
                Volunteer Application
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 transition-colors p-2"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Form Content (Scrollable) */}
            <form onSubmit={handleApply} className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#3A3556] mb-1">First Name *</label>
                  <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#A58CE0] focus:ring-1 focus:ring-[#A58CE0] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#3A3556] mb-1">Last Name *</label>
                  <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#A58CE0] focus:ring-1 focus:ring-[#A58CE0] transition-all" />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#3A3556] mb-1">Email Address *</label>
                  <input type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#A58CE0] focus:ring-1 focus:ring-[#A58CE0] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#3A3556] mb-1">Phone Number</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#A58CE0] focus:ring-1 focus:ring-[#A58CE0] transition-all" />
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-bold text-[#3A3556] mb-1">Preferred Volunteer Role *</label>
                <select required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#A58CE0] focus:ring-1 focus:ring-[#A58CE0] transition-all text-[#3A3556]">
                  <option value="" disabled selected>Select a role</option>
                  <option value="events">Peer Mentor</option>
                  <option value="mentor">Event Coordinator</option>
                  <option value="admin">Resource Ambassador</option>
                  <option value="marketing">Social Media Ally</option>
                  <option value="other">Open To Multiple Roles</option>
                </select>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-bold text-[#3A3556] mb-2">Availability *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Weekends'].map((time) => (
                    <label key={time} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 text-[#A58CE0] rounded border-gray-300 focus:ring-[#A58CE0]" />
                      <span className="text-sm text-gray-700 group-hover:text-[#3A3556]">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-bold text-[#3A3556] mb-1">Why do you want to volunteer with United in Pride?</label>
                <p className="text-xs text-[#87839D] mb-2">Tell us what motivates you to volunteer with our organization (max 500 characters)</p>
                <textarea 
                  required 
                  maxLength={500}
                  rows="4" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#A58CE0] focus:ring-1 focus:ring-[#A58CE0] transition-all resize-none"
                ></textarea>
              </div>

              {/* Agreement */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1 w-5 h-5 text-[#A58CE0] rounded border-gray-300 focus:ring-[#A58CE0] shrink-0" />
                  <span className="text-sm text-[#3A3556] leading-relaxed">
                    I understand that volunteering requires a background check and completion of orientation training. I commit to the values of inclusivity, respect, and confidentiality. *
                  </span>
                </label>
              </div>

              {/* Modal Footer (Buttons) */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 rounded-full text-[#3A3556] font-bold bg-gray-100 hover:bg-gray-200 transition-colors w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-8 py-3 rounded-full text-white font-bold bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3] hover:opacity-90 transition-opacity w-full sm:w-auto shadow-md"
                >
                  Submit Application
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </section>
  );
}