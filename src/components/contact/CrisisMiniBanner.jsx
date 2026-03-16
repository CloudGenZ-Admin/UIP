import React from 'react';

export default function CrisisMiniBanner() {
  return (
    <section className="py-16 px-6 bg-[#2B2741] text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between">
        
        <div className="lg:max-w-md text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-red-500/30">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Crisis Support
          </div>
          <h2 className="font-display font-bold text-3xl mb-3 text-white">
            Need Help Right Away?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            If you're in immediate danger or having thoughts of self-harm, please reach out for help right away. You are not alone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:bg-white/15 transition-colors">
            <h4 className="text-gray-400 text-sm font-semibold mb-1">Emergency Services</h4>
            <div className="font-display font-bold text-2xl text-white">911</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:bg-white/15 transition-colors">
            <h4 className="text-gray-400 text-sm font-semibold mb-1">Talk Suicide Canada</h4>
            <div className="font-display font-bold text-2xl text-white">1-833-456-4566</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:bg-white/15 transition-colors">
            <h4 className="text-gray-400 text-sm font-semibold mb-1">LGBT National Hotline</h4>
            <div className="font-display font-bold text-2xl text-white">1-866-585-0445</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:bg-white/15 transition-colors">
            <h4 className="text-gray-400 text-sm font-semibold mb-1">Crisis Text Line</h4>
            <div className="font-display font-bold text-xl text-white mt-1">Text HOME to 741741</div>
          </div>
        </div>

      </div>
    </section>
  );
}