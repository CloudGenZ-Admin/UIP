import React from 'react';

const STORIES = [
  {
    name: 'Ahmed K.', origin: 'Somalia',
    title: 'From Fear to Community Leadership',
    desc: 'After fleeing persecution in Somalia, Ahmed found his voice through United in Pride and now leads peer support groups.',
    tags: ['Leadership', 'Peer Support', 'Community Building'],
    emoji: '🧑🏾', gradient: 'from-[#A58CE0] to-[#EFAEC3]'
  },
  {
    name: 'Maria S.', origin: 'El Salvador',
    title: 'Finding My Authentic Self',
    desc: "Maria's journey from hiding her identity to becoming an advocate for trans rights in her new community.",
    tags: ['Trans Rights', 'Healthcare Access', 'Cultural Pride'],
    emoji: '👩🏽', gradient: 'from-[#7dcbb8] to-[#b8a7e0]'
  },
  {
    name: 'David & Michael', origin: 'Jamaica',
    title: 'Love Transcends Borders',
    desc: 'This couple found safety, community, and a new life together after claiming asylum in Canada.',
    tags: ['Couple Support', 'Asylum', 'Marriage Equality'],
    emoji: '👨🏿‍🤝‍👨🏾', gradient: 'from-[#f0a0b8] to-[#f0d060]'
  },
  {
    name: 'Priya R.', origin: 'India',
    title: 'Building Bridges Between Cultures',
    desc: 'Priya created a support network that honors both her Indian heritage and her identity as a lesbian.',
    tags: ['Cultural Integration', 'South Asian', 'Workshop Leadership'],
    emoji: '👩🏾‍🦱', gradient: 'from-[#7dcbb8] to-[#f0d060]'
  }
];

export default function CommunityStories() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-4">
            Community Stories
          </h2>
          <p className="text-pride-muted text-lg">Inspiring journeys of resilience, growth, and community building</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {STORIES.map((story, idx) => (
            <div key={idx} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col">
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${story.gradient} flex items-center justify-center text-3xl shadow-sm transform group-hover:scale-105 transition-transform`}>
                  {story.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-pride-navy">{story.name}</h3>
                  <p className="text-sm text-pride-purple font-medium">Originally from {story.origin}</p>
                </div>
              </div>

              <h4 className="font-display font-bold text-2xl text-pride-navy mb-3">
                "{story.title}"
              </h4>
              <p className="text-pride-muted leading-relaxed mb-6 flex-1">
                {story.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {story.tags.map((tag, i) => (
                  <span key={i} className="bg-white border border-gray-200 text-pride-muted text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#" className="text-pride-purple font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                Read Full Story <span>→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}