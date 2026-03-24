import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function AdminSidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  const links = [
    { name: 'Shared Stories', path: '/admin/stories', icon: '📖' },
    { name: 'Peer Support', path: '/admin/peer-support', icon: '🤝' },
    { name: 'Wellness Sessions', path: '/admin/wellness', icon: '🧘' },
    { name: 'Cultural Events', path: '/admin/cultural', icon: '🎉' },
    { name: 'Upcoming Events', path: '/admin/events', icon: '📅' }, // Naya link add kiya
  ];

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
        <div className="p-8 hidden md:block">
          <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
            United in Pride<br/>
            <span className="text-sm text-white font-bold uppercase tracking-widest">Admin Panel</span>
          </h2>
        </div>
        
        {/* Added top padding for mobile to account for the top bar */}
        <nav className="flex-1 px-4 space-y-2 mt-20 md:mt-4 overflow-y-auto">
          {links.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)} // Close sidebar on link click (mobile)
              className={({ isActive }) => `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold ${isActive ? 'bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <span className="text-xl">{link.icon}</span> {link.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="p-4">
          <button 
            onClick={handleLogout} 
            className="w-full p-4 rounded-2xl bg-white/10 text-white font-bold hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </>
  );
}