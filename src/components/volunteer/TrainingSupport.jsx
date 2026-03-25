import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../../api/apiService'; // Make sure this path is correct

const SUPPORT_PILLARS = [
  {
    title: 'Comprehensive Training',
    desc: 'Complete orientation program covering LGBTQ+ cultural competency, trauma-informed care, and role-specific skills.',
    icon: '📚'
  },
  {
    title: 'Ongoing Support',
    desc: 'Regular check-ins, peer support groups, and access to supervision from experienced staff members.',
    icon: '❤️'
  },
  {
    title: 'Flexible Scheduling',
    desc: 'Work with our team to create a volunteer schedule that fits your lifestyle and commitments.',
    icon: '⏱️'
  }
];

const cardBorderStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B22, #A855F722, #3B82F622)',
};

export default function VolunteerDetails() {
  const volunteerInterestsOptions = [
    "Event support", "Peer support / community hosting", "Program coordination", 
    "Outreach / social media", "Translation / interpretation", "Graphic design / admin", 
    "Fundraising support", "Care pack coordination", "Other"
  ];

  const livedExperienceOptions = [
    "LGBTQ+ newcomer / immigrant", "LGBTQ+ community member", "Ally", "Prefer not to say"
  ];

  // Form State
  const [formData, setFormData] = useState({
    fullName: '', 
    preferredName: '', 
    email: '', 
    phone: '', 
    city: '',
    interests: [], 
    availability: '', 
    livedExperience: [],
    experienceDesc: '', 
    motivationDesc: '', 
    agreedToContact: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for the success/error popup modal
  const [popup, setPopup] = useState({ show: false, type: '', title: '', message: '' });

  // Helper to handle multiple checkboxes (Arrays)
  const handleCheckboxChange = (field, value) => {
    setFormData((prev) => {
      const array = prev[field];
      if (array.includes(value)) {
        return { ...prev, [field]: array.filter((item) => item !== value) };
      } else {
        return { ...prev, [field]: [...array, value] };
      }
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation for radio button
    if (!formData.availability) {
      setPopup({
        show: true,
        type: 'error',
        title: 'Missing Information',
        message: 'Please select how often you can volunteer.'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await apiService.submitVolunteer(formData);
      
      // Show Custom Success Popup
      setPopup({
        show: true,
        type: 'success',
        title: 'Application Submitted!',
        message: 'Thank you for your application! We will contact you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        fullName: '', preferredName: '', email: '', phone: '', city: '',
        interests: [], availability: '', livedExperience: [],
        experienceDesc: '', motivationDesc: '', agreedToContact: false
      });
    } catch (error) {
      // Show Custom Error Popup
      setPopup({
        show: true,
        type: 'error',
        title: 'Submission Failed',
        message: 'Failed to submit application. Please try again.'
      });
      console.error("Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setPopup({ show: false, type: '', title: '', message: '' });
  };

  return (
    <section className="py-24 px-6 bg-[#FAFAFA] overflow-hidden relative">
      <div className="max-w-[1250px] mx-auto">

        {/* --- Top Section: Training & Support --- */}
        <div className="text-center mb-16 ">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#FF6B6B] font-black text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            We Empower You
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Training & Support
          </h2>
          <p className="text-slate-500 text-lg">We ensure you have everything you need to succeed</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SUPPORT_PILLARS.map((pillar, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={cardBorderStyle}
              className="bg-white p-10 rounded-[2.5rem] text-center shadow-sm border-2 border-transparent hover:shadow-xl transition-all group"
            >
              <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-black text-slate-900 text-2xl mb-4 italic group-hover:text-[#A855F7] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- Form Section --- */}
        <div id="apply-form" className="grid lg:grid-cols-2 gap-16 items-start mt-20">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6">Apply to Volunteer</h2>
            <p className="text-slate-600 text-lg leading-[1.8] mb-10">
              Join us in building a national movement. Together, we're creating lasting change for LGBTQ+ newcomers across Canada. Your voice, your time, and your support make all the difference.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <span className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">✉</span>
                volunteer@unitedinpride.org
              </div>
              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <span className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">💬</span>
                (416) 555-PRIDE
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-2xl rounded-[2.5rem] border border-slate-100 p-8 md:p-10"
          >
            <h3 className="text-2xl font-black text-slate-900 mb-2">Volunteer Application</h3>
            <p className="text-slate-500 text-sm mb-8 font-medium">Please fill in your details below.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  required
                  placeholder="Full Name" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/20 outline-none text-sm font-medium" 
                />
                <input 
                  type="text" 
                  placeholder="Preferred Name (optional)" 
                  value={formData.preferredName}
                  onChange={(e) => setFormData({...formData, preferredName: e.target.value})}
                  className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/20 outline-none text-sm font-medium" 
                />
              </div>

              {/* Contact Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  required
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/20 outline-none text-sm font-medium" 
                />
                <input 
                  type="text" 
                  required
                  placeholder="Phone / WhatsApp" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/20 outline-none text-sm font-medium" 
                />
              </div>

              <div className="grid md:grid-cols-1 gap-4">
                <input 
                  type="text" 
                  required
                  placeholder="City" 
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full p-4 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-purple-500/20 text-sm font-medium" 
                />
              </div>

              {/* Volunteer Interests (Multiple Checkboxes) */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">How would you like to volunteer?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-bold text-slate-600">
                   {volunteerInterestsOptions.map(item => (
                     <label key={item} className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition-colors">
                       <input 
                        type="checkbox" 
                        checked={formData.interests.includes(item)}
                        onChange={() => handleCheckboxChange('interests', item)}
                        className="rounded text-purple-600 focus:ring-purple-500 w-4 h-4 cursor-pointer" 
                      /> 
                      {item}
                     </label>
                   ))}
                </div>
              </div>

              {/* Availability (Radio Buttons) */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">How often can you volunteer?</p>
                <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-600">
                   {["Occasionally", "Monthly", "Bi-weekly", "Weekly"].map(time => (
                     <label key={time} className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition-colors">
                       <input 
                        type="radio" 
                        name="availability" 
                        checked={formData.availability === time}
                        onChange={() => setFormData({...formData, availability: time})}
                        className="text-purple-600 focus:ring-purple-500 w-4 h-4 cursor-pointer" 
                      /> 
                      {time}
                     </label>
                   ))}
                </div>
              </div>

              {/* Lived Experience (Multiple Checkboxes) */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Do you identify as: (Optional)</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-bold text-slate-600">
                   {livedExperienceOptions.map(exp => (
                     <label key={exp} className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition-colors">
                       <input 
                        type="checkbox" 
                        checked={formData.livedExperience.includes(exp)}
                        onChange={() => handleCheckboxChange('livedExperience', exp)}
                        className="rounded text-purple-600 focus:ring-purple-500 w-4 h-4 cursor-pointer" 
                      /> 
                      {exp}
                     </label>
                   ))}
                </div>
              </div>

              {/* Text Areas */}
              <textarea 
                placeholder="Tell us about any relevant experience or skills" 
                value={formData.experienceDesc}
                onChange={(e) => setFormData({...formData, experienceDesc: e.target.value})}
                className="w-full p-4 bg-slate-50 rounded-xl border-none h-24 outline-none focus:ring-2 focus:ring-purple-500/20 text-sm font-medium resize-none"
              ></textarea>
              
              <textarea 
                placeholder="Why would you like to volunteer with United in Pride?" 
                value={formData.motivationDesc}
                onChange={(e) => setFormData({...formData, motivationDesc: e.target.value})}
                className="w-full p-4 bg-slate-50 rounded-xl border-none h-24 outline-none focus:ring-2 focus:ring-purple-500/20 text-sm font-medium resize-none"
              ></textarea>

              {/* Agreement */}
              <label className="flex items-start gap-3 text-xs font-bold text-slate-500 cursor-pointer pt-2 hover:text-slate-800 transition-colors">
                <input 
                  type="checkbox" 
                  required 
                  checked={formData.agreedToContact}
                  onChange={(e) => setFormData({...formData, agreedToContact: e.target.checked})}
                  className="mt-0.5 rounded text-purple-600 focus:ring-purple-500 w-4 h-4 cursor-pointer" 
                />
                I agree to be contacted about volunteer opportunities.
              </label>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white rounded-2xl font-black shadow-lg hover:scale-[1.02] transition-transform ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Volunteer Request'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ======================= */}
      {/* SUCCESS / ERROR POPUP */}
      {/* ======================= */}
      <AnimatePresence>
        {popup.show && (
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
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border ${popup.type === 'success' ? 'bg-purple-50 text-purple-500 border-purple-100' : 'bg-red-50 text-red-500 border-red-100'}`}>
                <span className="text-4xl font-bold">{popup.type === 'success' ? '✨' : '⚠️'}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{popup.title}</h3>
              <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                {popup.message}
              </p>
              <button 
                onClick={closePopup}
                className="w-full py-4 bg-slate-100 text-slate-700 font-black rounded-2xl shadow-sm hover:bg-slate-200 transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

// --- Helper Components (Kept for compatibility if you use them elsewhere in the file) ---

function TypeCard({ title, desc, bullets }) {
  return (
    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group">
      <h4 className="font-black text-[#A855F7] mb-3 uppercase text-[10px] tracking-widest">{title}</h4>
      <p className="text-slate-900 font-bold mb-5 leading-snug">{desc}</p>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-[11px] font-bold text-slate-500 flex items-center gap-2">
            <span className="text-[#FF6B6B]">✦</span> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PartnerLevel({ title, amt, items, featured }) {
  return (
    <div className={`p-10 rounded-[3rem] border-2 transition-all flex flex-col h-full ${featured ? 'bg-[#1e1b4b] text-white border-transparent shadow-2xl scale-105 z-10' : 'bg-white border-slate-100 text-slate-900'}`}>
      <h3 className="text-2xl font-black mb-2">{title}</h3>
      <p className={`text-xl font-bold mb-8 ${featured ? 'text-[#FF6B6B]' : 'text-[#A855F7]'}`}>{amt}</p>
      <ul className="space-y-4 flex-grow mb-8">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-sm font-bold opacity-80">
            <span className="text-[#FF6B6B]">✓</span> {it}
          </li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded-2xl font-bold ${featured ? 'bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white' : 'bg-slate-100 text-slate-800'}`}>Apply Now</button>
    </div>
  );
}

function ResourceItem({ title, sub, action }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col justify-between">
      <div>
        <h5 className="font-bold text-slate-900">{title}</h5>
        <p className="text-xs text-slate-500 mb-4">{sub}</p>
      </div>
      <button className="text-sm font-black text-[#3B82F6] hover:underline flex items-center gap-2">
        📥 {action}
      </button>
    </div>
  );
}