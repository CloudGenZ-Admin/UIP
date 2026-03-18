import React from 'react';

const Ticker = () => {
  const items = [
    "🌈 Pride Month Celebrations Coming Soon — Join Us!",
    "✨ New Youth Support Program Launching This Spring",
    "💜 Community Art Exhibition — Submissions Open Now",
    "🎉 Annual Gala Tickets Available — Don't Miss Out!"
  ];

  return (
    <section className="bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] py-4 overflow-hidden whitespace-nowrap">
      <div className="flex gap-20 animate-marquee inline-block">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-white font-semibold text-lg">{item}</span>
        ))}
      </div>
    </section>
  );
};
export default Ticker;