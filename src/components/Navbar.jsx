import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/Newlogo.png'; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Stories", path: "/stories" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  const programLinks = [
    { name: "All Programs", path: "/programs" },
    { name: "Peer Support", path: "/programs/peer-support" },
    { name: "Wellness", path: "/programs/wellness" },
    { name: "Cultural", path: "/programs/cultural" },
    { name: "Care Packs", path: "/care-packs" },
    { name: "Support", path: "/support" },
  ];

  const actionLinks = [
    { name: "Volunteer", path: "/volunteer" },
    { name: "Partnership", path: "/Partnership" },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1250px] z-[1000] rounded-[60px] transition-all duration-300 border border-purple-500/15 ${isScrolled ? 'bg-white/95 shadow-lg py-2' : 'bg-white/85 backdrop-blur-[20px] py-3'}`}>
      <div className="flex items-center justify-between px-7 relative">
        
      
        <Link to="/" className="flex items-center gap-2.5 font-bold text-[1.1rem]">
        
          <img 
            src={logoImg} 
            alt="United in Pride Logo" 
            className="h-8 w-auto object-contain" 
          />
          <span className="whitespace-nowrap">United in Pride</span>
        </Link>

       
        <ul className="hidden lg:flex items-center gap-6">
          {mainLinks.map(link => (
            <li key={link.name}>
              <Link to={link.path} className="font-medium text-[0.85rem] text-slate-600 hover:text-[#A855F7] transition-all relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}

        
          <li className="relative group" 
              onMouseEnter={() => setShowProgramsDropdown(true)} 
              onMouseLeave={() => setShowProgramsDropdown(false)}>
            <button className="flex items-center gap-1 font-medium text-[0.85rem] text-slate-600 hover:text-[#A855F7] py-2">
              Programs ▾
            </button>
            {showProgramsDropdown && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-2xl border border-slate-100 p-2 flex flex-col gap-1">
                {programLinks.map(sub => (
                  <Link key={sub.name} to={sub.path} className="text-sm px-4 py-2 text-slate-600 hover:bg-purple-50 hover:text-[#A855F7] rounded-lg transition-all">
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

        
          {actionLinks.map(link => (
            <li key={link.name}>
              <Link to={link.path} className="font-medium text-[0.85rem] text-slate-600 hover:text-[#A855F7] transition-all">
                {link.name}
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
      
     
      {isOpen && (
        <div className="lg:hidden absolute top-[calc(100%+12px)] left-0 right-0 bg-white rounded-3xl p-6 shadow-2xl flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Main Menu</p>
          {[...mainLinks, ...actionLinks].map(link => (
            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-xl transition-all border-b border-slate-50">
              {link.name}
            </Link>
          ))}
          
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-1">Our Programs</p>
          {programLinks.map(link => (
            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="text-[#A855F7] font-medium p-2 hover:bg-purple-50 rounded-xl transition-all">
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