import React from 'react';

const PACK_CONTENTS = [
  {
    id: 'apparel',
    title: 'Seasonal Apparel & Comfort',
    desc: 'Stay warm and comfortable as you adjust to Canadian weather.',
    emoji: '🧣',
    bgColor: 'bg-purple-50',
    accent: 'text-purple-600',
    items: ['Warm knit beanie', 'Insulated gloves', 'Cozy wool-blend socks', 'Lightweight scarf']
  },
  {
    id: 'hygiene',
    title: 'Hygiene Essentials',
    desc: 'Personal care items to help you feel fresh and dignified.',
    emoji: '🧼',
    bgColor: 'bg-teal-50',
    accent: 'text-teal-600',
    items: ['Travel-size soap & body wash', 'Toothbrush & toothpaste', 'Shampoo & conditioner', 'Feminine hygiene products', 'Deodorant', 'Hand sanitizer', 'Disposable face masks']
  },
  {
    id: 'basics',
    title: 'Everyday Basics',
    desc: 'Practical items for your daily appointments and routines.',
    emoji: '📓',
    bgColor: 'bg-pink-50',
    accent: 'text-pink-600',
    items: ['Notebook & pen for appointments', 'Reusable water bottle', 'Phone charger cable']
  },
  {
    id: 'resources',
    title: 'Local Resource Card',
    desc: 'Customized to your province/territory to help you navigate your new home.',
    emoji: '🗺️',
    bgColor: 'bg-yellow-50',
    accent: 'text-yellow-600',
    items: ['Settlement agencies & drop-in centres', 'LGBTQ+-friendly health services', 'Peer support group contacts', 'Transit info & grocery listings']
  }
];

export default function CarePackContents() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-4">
          What's Inside Your Care Pack
        </h2>
        <p className="text-pride-muted text-lg max-w-2xl mx-auto">
          Every pack is packed by volunteers from our community, filled with carefully selected items to make your transition a little bit easier.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {PACK_CONTENTS.map((category) => (
          <div key={category.id} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center text-3xl shadow-sm flex-shrink-0`}>
                {category.emoji}
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-pride-navy">
                  {category.title}
                </h3>
              </div>
            </div>
            
            <ul className="space-y-3">
              {category.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-pride-muted">
                  <span className={`flex-shrink-0 mt-1 ${category.accent}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}