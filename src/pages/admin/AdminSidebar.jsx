import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  // Grouped Menu Data
  const menuGroups = [
    {
      title: 'Events & Stories',
      icon: '✨',
      links: [
        { name: 'Shared Stories', path: '/admin/stories', icon: '📖' },
        { name: 'Upcoming Events', path: '/admin/events', icon: '📅' },
      ]
    },
    {
      title: 'Programs',
      icon: '🌈',
      links: [
        { name: 'Peer Support', path: '/admin/peer-support', icon: '🤝' },
        { name: 'Youth & Newcomer', path: '/admin/youth-programs', icon: '🌱' }, // NEW
        { name: 'Wellness Sessions', path: '/admin/wellness', icon: '🧘' },
        { name: 'Cultural Events', path: '/admin/cultural', icon: '🎉' },
        { name: 'Contact Partnerships', path: '/admin/contactPartnerships', icon: '✉️' }
      ]
    },
    {
      title: 'Admin & Operations',
      icon: '⚙️',
      links: [
        { name: 'Volunteers', path: '/admin/volunteers', icon: '🙋' },
        // { name: 'Partnerships', path: '/admin/partnerships', icon: '🤝' },
        { name: 'Support Requests', path: '/admin/support-requests', icon: '❤️' },
        { name: 'Care Packs', path: '/admin/care-packs', icon: '📦' },
        { name: 'Contact Messages', path: '/admin/contact', icon: '✉️' }
      ]
    },

  ];

  // State to handle which dropdowns are open. (By default, keeping them all open)
  const [openSections, setOpenSections] = useState({
    'Events & Stories': true,
    'Programs': true,
    'Admin & Operations': true
  });

  // Toggle dropdown function
  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <>
      {/* Mobile Top Bar (Only visible on small screens) */}
      <div className="md:hidden bg-[#1e1b4b] text-white p-4 flex justify-between items-center shadow-md fixed w-full top-0 z-40">
        <h2 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
          United in Pride
        </h2>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed md:static top-0 left-0 h-full z-50
        w-[280px] bg-[#1e1b4b] text-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Sidebar Header */}
        <div className="p-8 hidden md:block border-b border-white/5">
          <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
            United in Pride<br/>
            <span className="text-sm text-white font-bold uppercase tracking-widest">Admin Panel</span>
          </h2>
        </div>
        
        {/* Navigation Links with Dropdowns */}
        {/* UPDATED LINE BELOW: Added Tailwind rules to hide scrollbar across all browsers */}
        <div className="flex-1 px-4 py-4 mt-20 md:mt-0 overflow-y-auto space-y-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          
          {menuGroups.map((group) => (
            <div key={group.title} className="space-y-2">
              
              {/* Dropdown Header / Toggle Button */}
              <button 
                onClick={() => toggleSection(group.title)}
                className="w-full flex items-center justify-between px-2 py-1 text-slate-400 hover:text-white transition-colors"
              >
                <span className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  {group.icon} {group.title}
                </span>
                <span className={`text-[10px] transition-transform duration-300 ${openSections[group.title] ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Dropdown Links List */}
              {openSections[group.title] && (
                <div className="space-y-1 pl-2 border-l-2 border-white/5 ml-2 mt-2">
                  {group.links.map((link) => (
                    <NavLink 
                      key={link.name} 
                      to={link.path} 
                      onClick={() => setIsOpen(false)} // Close sidebar on link click (mobile)
                      className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] shadow-lg text-white' 
                          : 'text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span className="text-lg">{link.icon}</span> {link.name}
                    </NavLink>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>
        
        {/* Logout Section */}
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout} 
            className="w-full p-4 rounded-2xl bg-white/5 text-white font-bold hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-transparent"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </>
  );
}