import React from 'react';

const CRISIS_LINES = [
  { name: 'Emergency Services', number: '911', desc: 'Call or Text (where available)', icon: '🚨' },
  { name: 'Talk Suicide Canada', number: '1-833-456-4566', desc: 'Text HOME to 741741', icon: '📞' },
  { name: 'LGBT National Hotline', number: '1-866-585-0445', desc: 'Specialized LGBTQ+ support', icon: '🌈' },
  { name: 'Trans Lifeline', number: '1-877-330-6366', desc: 'Trans-led peer support', icon: '🏳️‍⚧️' },
];

export default function CrisisBanner() {
  return (
    <section id="crisis" className="py-20 px-6 bg-[#2B2741] text-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-200 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Available 24/7
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 text-white">
            Immediate Crisis Support
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            If you're in immediate danger or experiencing a mental health crisis, please reach out for help right away. These resources are trained to support you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CRISIS_LINES.map((line, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-3xl text-center hover:bg-white/15 transition-colors">
              <div className="text-4xl mb-4">{line.icon}</div>
              <h4 className="font-bold text-gray-200 mb-2">{line.name}</h4>
              <div className="font-display font-bold text-2xl text-white mb-2 tracking-wide">
                {line.number}
              </div>
              <p className="text-sm text-gray-400">{line.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="font-display font-bold text-2xl mb-3 text-white">Remember: You Matter</h3>
          <p className="text-gray-300 leading-relaxed">
            Your life has value. Your story matters. Your identity is valid. Crisis feelings are temporary, but the impact you can have on the world is lasting. We believe in your strength and your ability to get through this difficult time.
          </p>
        </div>

      </div>
    </section>
  );
}