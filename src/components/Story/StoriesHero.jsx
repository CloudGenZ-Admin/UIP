import React from 'react';

export default function StoriesHero() {
  return (
    <section className="relative overflow-hidden bg-pride-sand py-24 px-6 text-center">
      {/* Background Decor */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-pink-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white border border-gray-200 text-sm font-semibold text-pride-purple mb-6 shadow-sm">
          <span>📖</span> Our Stories
        </span>
        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-pride-navy mb-6">
          Stories of Courage & <span className="text-transparent bg-clip-text bg-gradient-cta">Community</span>
        </h1>
        <p className="text-pride-muted text-xl leading-relaxed max-w-2xl mx-auto">
          Real stories from LGBTQ+ newcomers who found belonging, strength, and community. Plus the latest news affecting our global LGBTQ+ family.
        </p>
      </div>
    </section>
  );
}