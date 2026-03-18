import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0f0a2e] via-[#1e1b4b] to-[#1a1145] text-white pt-[80px]">
      
      {/* 1. TOP CURVE SVG */}
      <svg className="absolute top-[-2px] left-0 w-full h-[100px]" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z" fill="#FAFAFA"/>
      </svg>

      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* FOOTER TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 pb-10">
          
          {/* BRAND COLUMN */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-[1.4rem] font-[800] mb-4">🌈 United in Pride</div>
            <p className="text-[rgba(255,255,255,0.6)] text-[0.9rem] leading-[1.7] mb-5 max-w-[320px]">
              Ottawa's 2SLGBTQIA+ Community Centre on the unceded territory of the Algonquin Anishinaabe Nation in Odawa/Ottawa.
            </p>
            
            {/* SOCIAL LINKS (EXACT STYLING) */}
            <div className="flex gap-3">
              {[
                { i: '📷', label: 'Instagram' },
                { i: '🐦', label: 'Twitter' },
                { i: '📘', label: 'Facebook' },
                { i: '🎬', label: 'YouTube' }
              ].map((s, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  aria-label={s.label}
                  className="w-[44px] h-[44px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[1.1rem] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#FF6B6B] hover:to-[#A855F7] hover:-translate-y-[3px]"
                >
                  {s.i}
                </a>
              ))}
            </div>
          </div>

          {/* PROGRAMS COLUMN */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-[1rem] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
              Programs
            </h4>
            <ul className="flex flex-col gap-3 text-[0.9rem] text-[rgba(255,255,255,0.6)]">
              <li><a href="#" className="hover:text-white transition-colors">Support Groups</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Art & Creativity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wellness</a></li>
            </ul>
          </div>

          {/* GET INVOLVED COLUMN */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-[1rem] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
              Get Involved
            </h4>
            <ul className="flex flex-col gap-3 text-[0.9rem] text-[rgba(255,255,255,0.6)]">
              <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
            </ul>
          </div>

          {/* CONTACT COLUMN */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-[1rem] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-[0.9rem] text-[rgba(255,255,255,0.6)]">
              <li className="flex items-center justify-center md:justify-start gap-2">📍 123 Pride Street, Ottawa ON</li>
              <li className="flex items-center justify-center md:justify-start gap-2">📞 (613) 555-PRIDE</li>
              <li className="flex items-center justify-center md:justify-start gap-2">✉️ hello@unitedinpride.ca</li>
              <li className="flex items-center justify-center md:justify-start gap-2">🕐 Mon–Sat: 9AM–9PM</li>
            </ul>
          </div>

        </div>

        {/* 2. DIVIDER WAVE SVG */}
        <svg className="w-full h-[20px] my-5" viewBox="0 0 1200 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,10 Q150,0 300,10 T600,10 T900,10 T1200,10" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
        </svg>

        {/* FOOTER BOTTOM BAR */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[rgba(255,255,255,0.08)]">
          <p className="text-[rgba(255,255,255,0.5)] text-[0.85rem]">
            © 2025 United in Pride. All rights reserved. Made with 💜 in Ottawa.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Accessibility'].map((link) => (
              <a key={link} href="#" className="text-[rgba(255,255,255,0.5)] text-[0.85rem] hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}