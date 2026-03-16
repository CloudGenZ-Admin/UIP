import React from 'react';

export default function SupportHero() {
  return (
    <section className="relative overflow-hidden bg-pride-sand min-h-[60vh] flex items-center py-20 px-6">
      {/* Decorative Circles */}
      <Circle size={300} color="bg-teal-200/50" className="-top-[10%] -left-[5%]" />
      <Circle size={150} color="bg-purple-200/60" className="top-[20%] right-[10%]" />
      <Circle size={200} color="bg-pink-200/50" className="-bottom-[10%] left-[20%]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block py-1 px-4 rounded-full bg-white border border-gray-200 text-sm font-semibold text-pride-purple mb-6 shadow-sm">
          Settlement & Navigation
        </span>
        
        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-pride-navy mb-6">
          Find Your <span className="text-transparent bg-clip-text bg-gradient-cta">Support Network</span>
        </h1>
        
        <p className="text-pride-muted text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          We proudly partner with organizations that support the safety, health, and legal rights of LGBTQ+ newcomers, immigrants, and refugees across Canada.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#directory" className="bg-gradient-cta text-white font-semibold px-8 py-3.5 rounded-full shadow-md hover:opacity-90 transition-opacity">
            Find Services
          </a>
          <a href="#crisis" className="bg-white border-2 border-red-100 text-red-600 font-semibold px-8 py-3.5 rounded-full hover:bg-red-50 transition-colors shadow-sm">
            Emergency Support
          </a>
        </div>
      </div>
      
      <WaveDivider />
    </section>
  );
}

function Circle({ size, color, className }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none blur-xl ${color} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

function WaveDivider() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1440 40" className="w-full text-white" fill="currentColor">
        <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,16 1440,20 L1440,0 L0,0 Z" />
      </svg>
    </div>
  );
}