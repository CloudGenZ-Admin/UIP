import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-pride-sand min-h-[50vh] flex items-center py-20 px-6">
      {/* Decorative Circles */}
      <Circle size={300} color="bg-blue-200/50" className="-top-[10%] -left-[5%]" />
      <Circle size={150} color="bg-pink-200/60" className="top-[20%] right-[10%]" />
      <Circle size={200} color="bg-yellow-200/50" className="-bottom-[10%] left-[20%]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block py-1 px-4 rounded-full bg-white border border-gray-200 text-sm font-semibold text-pride-purple mb-6 shadow-sm">
          Get in Touch
        </span>
        
        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-pride-navy mb-6">
          We'd Love to <span className="text-transparent bg-clip-text bg-gradient-cta">Hear From You</span>
        </h1>
        
        <p className="text-pride-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Reach out with questions, ideas, or to learn more about joining our community. We're here to support you on your journey.
        </p>
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