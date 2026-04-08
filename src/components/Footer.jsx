import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/updatelogo.png';
import {
  Instagram,
  Facebook,
  Linkedin, // LinkedIn add kiya gaya hai
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };

  // Social Media Links Array
  const socialLinks = [
    { 
      i: <Instagram size={19} />, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/unite_in_pride?igsh=Z3VtdjJsaTB5ZTR3&utm_source=qr' 
    },
    { 
      i: <Facebook size={19} />, 
      label: 'Facebook', 
      href: 'https://www.facebook.com/people/United-in-Pride/61579117565491/?mibextid=wwXIfr&rdid=yKDvw6J1FEk8NY4q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19nM1NbmSt%2F%3Fmibextid%3DwwXIfr' 
    },
    { 
      i: <Linkedin size={19} />, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/youpride/' 
    },
    { 
      // TikTok Custom SVG Icon
      i: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ), 
      label: 'TikTok', 
      href: 'https://www.tiktok.com/@unitedinpride1?_t=ZS-8yhxvJbUwYi&_r=1' 
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0f0a2e] via-[#1e1b4b] to-[#1a1145] text-white pt-[80px]">

      {/* 1. TOP CURVE SVG */}
      <svg className="absolute top-[-2px] left-0 w-full h-[100px]" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z" fill="#FAFAFA" />
      </svg>

      <div className="max-w-[1200px] mx-auto px-6">

        {/* FOOTER TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr] gap-10 pb-10">

          {/* BRAND COLUMN */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6">
              <Link to="/" onClick={scrollToTop}>
                <img
                  src={logo}
                  alt="United in Pride Logo"
                  className="h-[60px] w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-[rgba(255,255,255,0.7)] text-[0.95rem] leading-[1.7] mb-6 max-w-[340px]">
              A community for LGBTQ+ newcomers, immigrants, and refugees to heal, connect, and build a sense of belonging in a new home.
            </p>

            {/* SOCIAL LINKS - Updated with your URLs */}
            <h4 className="font-bold text-[1rem] mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
              Follow Our Journey
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-[42px] h-[42px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#FF6B6B] hover:to-[#A855F7] hover:-translate-y-[3px] text-[rgba(255,255,255,0.8)] hover:text-white"
                >
                  {s.i}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-[1rem] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-[0.9rem] text-[rgba(255,255,255,0.6)]">
              <li><Link to="/about" onClick={scrollToTop} className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/programs" onClick={scrollToTop} className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/support" onClick={scrollToTop} className="hover:text-white transition-colors">Get Support</Link></li>
              <li><Link to="/involed" onClick={scrollToTop} className="hover:text-white transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* PROGRAMS COLUMN */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-[1rem] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
              Programs
            </h4>
            <ul className="flex flex-col gap-3 text-[0.9rem] text-[rgba(255,255,255,0.6)]">
              <li>Peer Support Circles</li>
              <li>Wellness Workshops</li>
              <li>Cultural & Community Events</li>
              <li>Resource Navigation</li>
              <li>Youth & Newcomer Programs</li>
            </ul>
          </div>

          {/* CONTACT & SUPPORT COLUMN */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-[1rem] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
              Support
            </h4>
            <ul className="flex flex-col gap-3 text-[0.9rem] text-[rgba(255,255,255,0.6)] mb-6">
              <li><Link to="/donate" onClick={scrollToTop} className="hover:text-white transition-colors">Donate</Link></li>
              <li><Link to="/Partnership" onClick={scrollToTop} className="hover:text-white transition-colors">Partner With Us</Link></li>
              <li><Link to="/volunteer" onClick={scrollToTop} className="hover:text-white transition-colors">Volunteer With Us</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-white transition-colors">Contact</Link></li>
            </ul>

            <div className="flex flex-col gap-3 text-[0.85rem] text-[rgba(255,255,255,0.5)]">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={14} className="text-[#FF6B6B]" /> Ottawa, Canada
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={14} className="text-[#A855F7]" /> info@unitedinpride.ca
              </div>
              <p className="mt-2 italic leading-relaxed text-[rgba(255,255,255,0.4)]">
                Your privacy matters. All communication is handled with care and confidentiality.
              </p>
            </div>
          </div>

        </div>

        {/* 2. DIVIDER WAVE SVG */}
        <svg className="w-full h-[20px] my-5" viewBox="0 0 1200 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,10 Q150,0 300,10 T600,10 T900,10 T1200,10" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        </svg>

        {/* FOOTER BOTTOM BAR */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[rgba(255,255,255,0.08)]">
          <p className="text-[rgba(255,255,255,0.5)] text-[0.85rem] text-center md:text-left">
            © 2025 United in Pride. All rights reserved. Built with love in Ottawa for LGBTQ+ newcomers across Canada.
          </p>
          {/* <div className="flex gap-6">
            {['Privacy', 'Terms', 'Accessibility'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`} 
                onClick={scrollToTop}
                className="text-[rgba(255,255,255,0.5)] text-[0.85rem] hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}