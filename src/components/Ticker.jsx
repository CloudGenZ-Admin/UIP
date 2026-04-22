import React from 'react';

const Ticker = () => {
  const items = [
    "🎥 Queer Movie Night — Every Last Saturday of the Month, Starting April 25",
    "🏕️ Upcoming Camp — July 17"
  ];

  const content = items.map((item, i) => (
    <span key={i} className="text-white font-semibold text-lg mx-10 shrink-0">{item}</span>
  ));

  return (
    <section className="bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {content}
        {content}
        {content}
        {content}
      </div>
    </section>
  );
};
export default Ticker;
