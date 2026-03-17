import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ROLES = [
  {
    id: 'peer-mentor',
    title: 'Peer Mentor',
    hours: '3-4 hours/week',
    desc: 'Provide one-on-one support and guidance to newcomers navigating their journey.',
    emoji: '🤝',
    bgColor: 'bg-purple-50',
    accent: 'text-purple-600',
    responsibilities: [
      'Weekly mentoring sessions',
      'Share lived experiences',
      'Connect mentees to resources',
      'Attend monthly training'
    ]
  },
  {
    id: 'event-coordinator',
    title: 'Event Coordinator',
    hours: '4-6 hours/week',
    desc: 'Plan and execute community events, social gatherings, and cultural celebrations.',
    emoji: '🎉',
    bgColor: 'bg-teal-50',
    accent: 'text-teal-600',
    responsibilities: [
      'Organize community events',
      'Coordinate logistics',
      'Manage vendors and supplies',
      'Oversee event registration'
    ]
  },
  {
    id: 'resource-ambassador',
    title: 'Resource Ambassador',
    hours: '2-3 hours/week',
    desc: 'Help connect community members with resources and services they need.',
    emoji: '🧭',
    bgColor: 'bg-yellow-50',
    accent: 'text-yellow-600',
    responsibilities: [
      'Maintain resource database',
      'Conduct resource workshops',
      'Follow up with referrals',
      'Build community partnerships'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Ally',
    hours: '2-4 hours/week',
    desc: 'Share our story and amplify community voices through digital platforms.',
    emoji: '📱',
    bgColor: 'bg-pink-50',
    accent: 'text-pink-600',
    responsibilities: [
      'Create engaging content',
      'Manage social media accounts',
      'Document events and stories',
      'Engage with online community'
    ]
  }
];

const STEPS = [
  { num: '1', title: 'Apply', desc: 'Complete our volunteer application form with your interests and availability.', color: 'bg-purple-100' },
  { num: '2', title: 'Interview', desc: 'Join a casual conversation to learn more about you and share about our work.', color: 'bg-pink-100' },
  { num: '3', title: 'Training', desc: 'Participate in orientation and role-specific training to prepare for your volunteer work.', color: 'bg-teal-100' },
  { num: '4', title: 'Start', desc: 'Begin your volunteer journey with ongoing support and regular check-ins.', color: 'bg-yellow-100' }
];

export default function VolunteerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  // Opens modal and optionally pre-selects a role
  const handleOpenModal = (roleId = '') => {
    setSelectedRole(roleId);
    setIsModalOpen(true);
  };

  const handleApply = (e) => {
    e.preventDefault();
    alert('Thank you! Your application has been submitted.');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#3A3556]">
      {/* <Navbar /> */}
      
      <main className="relative pt-4 pb-12">
        
        {/* HERO SECTION
        <section className="px-6 py-12 md:py-20 bg-purple-50/50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#3A3556] mb-6">
              Become a Volunteer
            </h1>
            <p className="text-[#87839D] text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join our community of dedicated volunteers and help create safe, healing spaces for LGBTQ+ newcomers.
            </p>
            <button 
              onClick={() => handleOpenModal()}
              className="bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3] text-white font-bold px-10 py-4 rounded-full shadow-md hover:opacity-90 transition-opacity text-lg"
            >
              Apply to Volunteer
            </button>
          </div>
        </section> */}

        {/* ROLES SECTION */}
        <section id="roles" className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#3A3556] mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-[#87839D] text-lg">
              Find the perfect role that matches your skills, interests, and availability
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {ROLES.map((role) => (
              <div key={role.id} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${role.bgColor} flex items-center justify-center text-3xl shadow-sm`}>
                    {role.emoji}
                  </div>
                  <span className="bg-gray-100 text-[#3A3556] text-sm font-semibold px-4 py-1.5 rounded-full">
                    {role.hours}
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-2xl text-[#3A3556] mb-2">
                  {role.title}
                </h3>
                <p className="text-[#87839D] mb-8 min-h-[48px]">
                  {role.desc}
                </p>

                <div className="flex-grow mb-8">
                  <h4 className="font-bold text-[#3A3556] mb-4 text-sm uppercase tracking-wider">Key Responsibilities:</h4>
                  <ul className="space-y-3">
                    {role.responsibilities.map((req, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${role.bgColor} ${role.accent} flex items-center justify-center`}>
                          <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="text-[#87839D] text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
                  <button 
                    onClick={() => handleOpenModal(role.id)}
                    className={`px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3] hover:opacity-90 transition-opacity shadow-sm`}
                  >
                    Apply for This Role
                  </button>
                  <Link 
                    to="/contact" 
                    className="px-6 py-2.5 rounded-full font-semibold text-[#87839D] bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    Ask Questions
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STEPS SECTION */}
        <section className="py-20 px-6 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#3A3556] mb-4">How to Get Started</h2>
              <p className="text-[#87839D] text-lg">Our simple process to welcome you into our volunteer family</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-10 left-20 right-20 h-0.5 bg-gray-200 -z-10" />
              {STEPS.map((step) => (
                <div key={step.num} className="relative flex flex-col items-center text-center group">
                  <div className={`w-20 h-20 rounded-full ${step.color} border-4 border-white flex items-center justify-center font-display font-bold text-2xl text-[#3A3556] shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {step.num}
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#3A3556] mb-3">{step.title}</h3>
                  <p className="text-sm text-[#87839D] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <section className="py-20 px-6 bg-white relative">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl p-0.5 shadow-xl" style={{ background: 'linear-gradient(135deg, #A58CE0, #EFAEC3)' }}>
              <div className="bg-white rounded-[calc(1.5rem-2px)] p-10 md:p-14 text-center">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-[#3A3556] mb-4">
                  Ready to Make an Impact?
                </h2>
                <p className="text-[#87839D] text-sm md:text-base max-w-xl mx-auto mb-8 font-medium">
                  Application includes a background check and reference requirements.
                </p>
                <button 
                  onClick={() => handleOpenModal()}
                  className="bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3] text-white font-bold px-10 py-4 rounded-full shadow-md hover:opacity-90 transition-opacity mb-0 text-lg"
                >
                  Apply to Volunteer
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* --- VOLUNTEER APPLICATION MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#3A3556]/60 backdrop-blur-sm">
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

            {/* Modal Form Content */}
            <form onSubmit={handleApply} className="flex-1 overflow-y-auto p-6 space-y-6">
              
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

              <div>
                <label className="block text-sm font-bold text-[#3A3556] mb-1">Preferred Volunteer Role *</label>
                <select 
                  required 
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#A58CE0] focus:ring-1 focus:ring-[#A58CE0] transition-all text-[#3A3556]"
                >
                  <option value="" disabled>Select a role</option>
                  <option value="peer-mentor">Peer Mentor</option>
                  <option value="event-coordinator">Event Coordinator</option>
                  <option value="resource-ambassador">Resource Ambassador</option>
                  <option value="social-media">Social Media Ally</option>
                  <option value="other">Open To Multiple Roles</option>
                </select>
              </div>

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

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1 w-5 h-5 text-[#A58CE0] rounded border-gray-300 focus:ring-[#A58CE0] shrink-0" />
                  <span className="text-sm text-[#3A3556] leading-relaxed">
                    I understand that volunteering requires a background check and completion of orientation training. I commit to the values of inclusivity, respect, and confidentiality. *
                  </span>
                </label>
              </div>

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
    </div>
  );
}