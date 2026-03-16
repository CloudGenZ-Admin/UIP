import React from 'react';

export default function ProgramsHero() {
  return (
    <section className="relative overflow-hidden bg-pride-sand min-h-[70vh] flex items-center py-20 px-6">
      {/* Decorative Circles */}
      <Circle size={300} color="bg-purple-200/50" className="-top-[10%] -left-[5%]" />
      <Circle size={150} color="bg-teal-200/60" className="top-[20%] right-[10%]" />
      <Circle size={200} color="bg-pink-200/50" className="-bottom-[10%] left-[20%]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block py-1 px-4 rounded-full bg-white border border-gray-200 text-sm font-semibold text-pride-purple mb-6 shadow-sm">
          Community Support & Wellness
        </span>
        
        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-pride-navy mb-6">
          Heal, Empower, and <span className="text-transparent bg-clip-text bg-gradient-cta">Connect</span>
        </h1>
        
        <p className="text-pride-muted text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          Comprehensive programs designed to heal, empower, and connect LGBTQ+ newcomers through culturally affirming experiences and peer-led support.
        </p>

        <div className="bg-white/80 backdrop-blur rounded-3xl p-6 md:p-8 shadow-sm border border-white max-w-3xl mx-auto text-left">
          <h3 className="font-display font-bold text-xl mb-2 text-pride-navy">
            Grounded in Lived Experience & Cultural Affirmation
          </h3>
          <p className="text-pride-muted text-sm md:text-base">
            At United in Pride, we offer a range of programs and services designed to meet the unique needs of LGBTQ+ newcomers, immigrants, and refugees. Our initiatives focus on healing, connection, empowerment, and advocacy.
          </p>
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