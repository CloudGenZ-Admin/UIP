import React from 'react';

const VALUES = [
  { title: 'Safety First', desc: 'Creating secure environments where vulnerability is protected and honored.', emoji: '🛡️' },
  { title: 'Inclusive Community', desc: 'Welcoming all identities, backgrounds, and experiences without judgment.', emoji: '🌈' },
  { title: 'Healing Growth', desc: 'Supporting individual journeys of healing and personal development.', emoji: '🌱' },
  { title: 'Joy & Celebration', desc: 'Embracing happiness and celebrating achievements as acts of resistance.', emoji: '✨' },
];

export default function AboutWhyAndValues() {
  return (
    <section className="py-24 px-6 bg-pride-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Our Why Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="text-4xl mb-4 block">💜</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-12">Our Why</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
            <div className="bg-white/10 backdrop-blur border border-white/20 p-8 rounded-[2rem]">
              <h3 className="font-bold text-2xl text-pink-300 mb-3">We Know Rejection</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We built this space because we know what it feels like to be rejected — not just by systems, but by our own families, our churches, our communities.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 p-8 rounded-[2rem]">
              <h3 className="font-bold text-2xl text-teal-300 mb-3">We Know Courage</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We know what it feels like to hide — and we know the courage it takes to stop hiding.
              </p>
            </div>
          </div>

          <div className="text-2xl md:text-3xl font-display font-bold leading-relaxed">
            United in Pride exists because we believe in something bigger. Queer immigrants deserve more than survival. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3]">
              We deserve to heal. To be loved. To belong.
            </span>
          </div>
        </div>

        {/* Our Values Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Our Values</h2>
            <p className="text-gray-300 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => (
              <div key={idx} className="bg-white text-pride-navy p-8 rounded-[2rem] shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                <span className="text-4xl mb-4 block">{val.emoji}</span>
                <h3 className="font-bold text-xl mb-3">{val.title}</h3>
                <p className="text-pride-muted text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}