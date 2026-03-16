import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Updated Array to include Get Support
const NAV_LINKS = [
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Get Support', path: '/support' },
  { name: 'Donate', path: '/donate' },
  // { name: 'Events', path: '/events' },
  { name: 'Resources', path: '/resources' },
  // { name: 'Gallery', path: '/gallery' },
  { name: 'Stories', path: '/stories' },
  { name: 'Care Packs', path: '/care-packs' },
  { name: 'Contact', path: '/contact' },
   { name: 'Volunteer', path: '/Volunteer' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 p-4 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm ">
        <nav className="max-w-[1600px] mx-auto bg-white rounded-full border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] px-6 h-[72px] flex items-center justify-between">
          
          {/* Logo - Navigate to Home */}
          <Link to="/" className="flex items-center gap-4 font-bold text-2xl text-[#3A3556] tracking-tight">
            <RainbowIcon />
            United in Pride
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-[18px] font-medium text-[#87839D] hover:text-[#3A3556] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Donate CTA */}
          <Link
            to="/donate"
            className="hidden lg:flex bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3] text-white text-[20px] font-bold px-7 py-3 rounded-full items-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
          >
            Donate <span>💜</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden p-2 text-[#3A3556]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed top-4 left-4 right-4 z-[60] lg:hidden bg-white rounded-3xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-50 overflow-hidden">
          
          <div className="mx-2 mt-2 h-[64px] px-4 flex items-center justify-between border border-gray-100/70 shadow-sm rounded-full bg-white">
            <Link to="/" className="flex items-center gap-2 font-bold text-[17px] text-[#3A3556] tracking-tight">
              <RainbowIcon />
              United in Pride
            </Link>
            
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#3A3556] hover:bg-gray-50 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className="px-8 py-5 pb-7">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[14px] font-medium text-[#87839D] hover:text-[#3A3556] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

function RainbowIcon() {
  return <span className="text-xl leading-none">🌈</span>;
}