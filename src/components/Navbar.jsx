import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/updatelogo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
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
  ];

  // Programs ko yahan simple link ki tarah add kiya hai
  const programsLink = { name: "Programs", path: "/programs" };

  const actionLinks = [
    { name: "Care Packs", path: "/care-packs" },
    // { name: "Get Involved", path: "/involed" },
    // { name: "Volunteer", path: "/volunteer" },
    { name: "Ways To Give", path: "/Waystogive" },
    { name: "Contact", path: "/contact" },
    // { name: "Support", path: "/support" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1150px] z-[1000] rounded-[60px] transition-all duration-300 border border-purple-500/15 ${isScrolled ? 'bg-slate-50 shadow-lg py-2' : 'bg-slate-50 backdrop-blur-[20px] py-3'}`}
    >
      <div className="flex items-center justify-between px-7 relative">

        <Link to="/" className="flex items-center gap-2.5 font-bold text-[1.1rem]">
          <img src={logoImg} alt="United in Pride Logo" className="h-12 w-auto object-contain" />
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
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </li>
          ))}

          {/* Programs - Now a simple Link, No Dropdown */}
          <li>
            <Link
              to={programsLink.path}
              className={`font-medium text-[0.85rem] transition-all relative group ${isActive(programsLink.path) ? 'text-[#A855F7]' : 'text-slate-600 hover:text-[#A855F7]'}`}
            >
              {programsLink.name}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] transition-all duration-300 ${isActive(programsLink.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
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
          <a
            href="https://www.zeffy.com/embed/donation-form/youre-not-alone?modal=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block py-2.5 px-6 bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white rounded-full font-semibold text-sm hover:-translate-y-0.5 shadow-md transition-all"
          >
            Donate 💜
          </a>

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

          {/* Programs Mobile - Simple Link */}
          <Link
            to={programsLink.path}
            onClick={() => setIsOpen(false)}
            className={`font-medium p-2 rounded-xl transition-all border-b border-slate-50 ${isActive(programsLink.path) ? 'bg-purple-50 text-[#A855F7]' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            {programsLink.name}
          </Link>

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