import React from 'react';

export default function CrisisMiniBanner() {
  return (
    <section className="py-20 px-6 bg-[#1a1635] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:max-w-md text-center lg:text-left shrink-0">
          <div className="inline-flex items-center gap-3 bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-red-500/30">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            Immediate Crisis Support
          </div>
          <h2 className="text-4xl font-extrabold mb-6">Need Help Right Away?</h2>
          <p className="text-white/60 leading-relaxed text-lg">
            If you're in immediate danger or having thoughts of self-harm, please reach out. 
            You are not alone. These services are free, confidential, and available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {[
            { label: 'Emergency Services', val: '911', desc: 'Immediate Danger' },
            { label: 'Talk Suicide Canada', val: '1-833-456-4566', desc: 'Call Anytime 24/7' },
            { label: 'LGBT National Hotline', val: '1-866-585-0445', desc: 'Peer Support' },
            { label: 'Crisis Text Line', val: 'HOME to 741741', desc: 'Text Support' }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-7 rounded-[2rem] backdrop-blur-md hover:bg-white/10 transition-all group">
              <h4 className="text-white/40 text-[0.7rem] font-black uppercase tracking-[0.2em] mb-2 group-hover:text-[#FF6B6B] transition-colors">{item.label}</h4>
              <div className="text-2xl font-black text-white mb-1 tracking-tight">{item.val}</div>
              <p className="text-sm text-white/40 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}