import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'; // 1. useLocation import kiya
import logoImg from '../assets/Newlogo.png'; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);
  
  const navRef = useRef(null);
  const location = useLocation(); // 2. Current path nikaalne ke liye

  // Helper function check karne ke liye ki link active hai ya nahi
  const isActive = (path) => location.pathname === path;

  // Programs dropdown ko active dikhane ke liye logic (agar koi bhi sub-program open ho)
  const isProgramsActive = location.pathname.startsWith('/programs') || location.pathname === '/care-packs';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowProgramsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Stories", path: "/stories" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
    { name: "Support", path: "/support" },
  ];

  const programLinks = [
    { name: "All Programs", path: "/programs" },
    { name: "Peer Support", path: "/programs/peer-support" },
    { name: "Wellness", path: "/programs/wellness" },
    { name: "Cultural", path: "/programs/cultural" },
    { name: "Care Packs", path: "/care-packs" },
  ];

  const actionLinks = [
    { name: "Volunteer", path: "/volunteer" },
    { name: "Partnership", path: "/Partnership" },
  ];

  return (
    <nav 
      ref={navRef} 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1250px] z-[1000] rounded-[60px] transition-all duration-300 border border-purple-500/15 ${isScrolled ? 'bg-slate-50 shadow-lg py-2' : 'bg-slate-50 backdrop-blur-[20px] py-3'}`}
    >
      <div className="flex items-center justify-between px-7 relative">
        
        <Link to="/" className="flex items-center gap-2.5 font-bold text-[1.1rem]">
          <img src={logoImg} alt="United in Pride Logo" className="h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {mainLinks.map(link => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`font-medium text-[0.85rem] transition-all relative group ${isActive(link.path) ? 'text-[#A855F7]' : 'text-slate-600 hover:text-[#A855F7]'}`}
              >
                {link.name}
                {/* Active Indicator Underline */}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </li>
          ))}

          {/* Programs Dropdown */}
          <li className="relative">
            <button 
              onClick={() => setShowProgramsDropdown(!showProgramsDropdown)}
              className={`flex items-center gap-1 font-medium text-[0.85rem] py-2 transition-all ${isProgramsActive ? 'text-[#A855F7]' : 'text-slate-600 hover:text-[#A855F7]'}`}
            >
              Programs <span className={`transition-transform ${showProgramsDropdown ? 'rotate-180' : ''}`}>▾</span>
              {/* Active Indicator Underline for Programs */}
              <span className={`absolute bottom-1 left-0 h-[2px] bg-[#A855F7]/30 transition-all duration-300 ${isProgramsActive ? 'w-full' : 'w-0'}`}></span>
            </button>
            
            {showProgramsDropdown && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-2xl border border-slate-100 p-2 flex flex-col gap-1">
                {programLinks.map(sub => (
                  <Link 
                    key={sub.name} 
                    to={sub.path} 
                    onClick={() => setShowProgramsDropdown(false)}
                    className={`text-sm px-4 py-2 rounded-lg transition-all ${isActive(sub.path) ? 'bg-purple-100 text-[#A855F7] font-semibold' : 'text-slate-600 hover:bg-purple-50 hover:text-[#A855F7]'}`}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {actionLinks.map(link => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`font-medium text-[0.85rem] transition-all relative group ${isActive(link.path) ? 'text-[#A855F7]' : 'text-slate-600 hover:text-[#A855F7]'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/donate" className="hidden sm:block py-2.5 px-6 bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white rounded-full font-semibold text-sm hover:-translate-y-0.5 shadow-md transition-all">
            Donate 💜
          </Link>
          
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex flex-col gap-1.5 p-1">
            <span className={`w-6 h-[2.5px] bg-slate-600 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-[2.5px] bg-slate-600 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[2.5px] bg-slate-600 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[calc(100%+12px)] left-0 right-0 bg-white rounded-3xl p-6 shadow-2xl flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Main Menu</p>
          {mainLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              className={`font-medium p-2 rounded-xl transition-all border-b border-slate-50 ${isActive(link.path) ? 'bg-purple-50 text-[#A855F7]' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex flex-col">
            <button 
              onClick={() => setShowProgramsDropdown(!showProgramsDropdown)}
              className={`flex justify-between items-center font-medium p-2 rounded-xl transition-all border-b border-slate-50 ${isProgramsActive ? 'text-[#A855F7]' : 'text-slate-600'}`}
            >
              Our Programs
              <span className={`transition-transform ${showProgramsDropdown ? 'rotate-180' : ''}`}>▾</span>
            </button>
            
            {showProgramsDropdown && (
              <div className="bg-purple-50/50 rounded-xl mt-1 p-2 flex flex-col gap-1 transition-all">
                {programLinks.map(link => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    onClick={() => {setIsOpen(false); setShowProgramsDropdown(false);}} 
                    className={`font-medium p-2 rounded-lg transition-all text-sm ${isActive(link.path) ? 'bg-purple-100 text-[#A855F7]' : 'text-[#A855F7]/70 hover:bg-purple-100'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {actionLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              className={`font-medium p-2 rounded-xl transition-all border-b border-slate-50 ${isActive(link.path) ? 'bg-purple-50 text-[#A855F7]' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link to="/donate" onClick={() => setIsOpen(false)} className="mt-4 text-center py-3 bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white rounded-xl font-bold">
            Donate Now 💜
          </Link>
        </div>
      )}
    </nav>
  );
}