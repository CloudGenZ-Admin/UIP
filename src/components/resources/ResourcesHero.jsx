import React from 'react';

export default function ResourcesHero() {
  return (
    <section className="relative overflow-hidden bg-pride-sand min-h-[60vh] flex items-center py-20 px-6">
      {/* Decorative Circles */}
      <Circle size={300} color="bg-purple-200/50" className="-top-[10%] -left-[5%]" />
      <Circle size={150} color="bg-teal-200/60" className="top-[20%] right-[10%]" />
      <Circle size={200} color="bg-pink-200/50" className="-bottom-[10%] left-[20%]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block py-1 px-4 rounded-full bg-white border border-gray-200 text-sm font-semibold text-pride-purple mb-6 shadow-sm">
          Resource Directory
        </span>
        
        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-pride-navy mb-6">
          Your Journey to <span className="text-transparent bg-clip-text bg-gradient-cta">Safety & Belonging</span> Starts Here
        </h1>
        
        <p className="text-pride-muted text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          Navigating Canada's systems shouldn't feel overwhelming. We connect you with trusted, LGBTQ+-affirming resources across the country—from legal aid to creative expression spaces.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#directory" className="bg-gradient-cta text-white font-semibold px-8 py-3.5 rounded-full shadow-md hover:opacity-90 transition-opacity">
            Find Resources Now
          </a>
          <a href="/support" className="bg-white border-2 border-pride-lavender text-pride-purple font-semibold px-8 py-3.5 rounded-full hover:bg-purple-50 transition-colors shadow-sm">
            Get Personal Support
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