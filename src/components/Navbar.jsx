import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ["About", "Programs", "Donate", "Gallery", "Events", "Stories"];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1200px] z-[1000] rounded-[60px] transition-all duration-300 border border-purple-500/15 ${isScrolled ? 'bg-white/95 shadow-lg py-2' : 'bg-white/85 backdrop-blur-[20px] py-3'}`}>
      <div className="flex items-center justify-between px-7 relative">
        <a href="#" className="flex items-center gap-2.5 font-bold text-[1.1rem]">
          <span className="text-2xl">🌈</span>
          <span>United in Pride</span>
        </a>

        <ul className="hidden md:flex gap-7">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="font-medium text-[0.925rem] text-slate-600 hover:text-[#A855F7] transition-all relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#donate" className="hidden sm:block py-2.5 px-6 bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white rounded-full font-semibold text-sm hover:-translate-y-0.5 shadow-md">Donate 💜</a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 p-1">
            <span className={`w-6 h-[2.5px] bg-slate-600 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-[2.5px] bg-slate-600 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[2.5px] bg-slate-600 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute top-[calc(100%+12px)] left-0 right-0 bg-white rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-xl transition-all">{link}</a>
          ))}
        </div>
      )}
    </nav>
  );
}