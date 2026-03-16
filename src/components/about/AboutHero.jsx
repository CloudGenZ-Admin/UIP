import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-pride-sand min-h-[80vh] flex items-center py-20 px-6">
      {/* Decorative Blur Circles */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-purple-200/50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-pink-200/50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-[20%] w-72 h-72 bg-teal-200/50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Hero Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-4 rounded-full bg-white border border-gray-200 text-sm font-semibold text-pride-purple mb-6 shadow-sm">
            Our Story
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-pride-navy mb-6">
            Building Safety, Pride and <span className="text-transparent bg-clip-text bg-gradient-cta">Belonging</span>
          </h1>
          <p className="text-pride-muted text-xl md:text-2xl font-medium">
            Born from the courage of those who left everything behind for the chance to live authentically.
          </p>
        </div>

        {/* Who We Are Content Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-white max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-pride-navy mb-6 flex items-center gap-3">
            <span>✨</span> Who We Are
          </h2>
          <div className="space-y-6 text-lg text-pride-muted leading-relaxed">
            <p>
              United in Pride was born from the lived experiences of LGBTQ+ individuals who made the difficult decision to leave their home countries in search of safety, acceptance, and the freedom to live authentically.
            </p>
            <p>
              We understand that coming to Canada is just the beginning of the journey. The challenges don't end at the border – they transform. Finding community, healing from trauma, navigating new systems, and rebuilding identity in a new land requires support, understanding, and genuine connection.
            </p>
            <p className="font-semibold text-pride-purple text-xl">
              United in Pride exists as a beacon of hope and belonging, where every identity, every story of trauma, and every dream for the future is not just welcomed, but celebrated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}