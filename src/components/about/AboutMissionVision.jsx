import React from 'react';

const MISSION_PILLARS = [
  { emoji: '🤝', title: 'Community Building', desc: 'Creating spaces where authentic connections flourish' },
  { emoji: '🎉', title: 'Cultural Celebration', desc: 'Honoring diverse backgrounds and identities' },
  { emoji: '🧠', title: 'Mental Wellness', desc: 'Supporting healing and emotional wellbeing' },
  { emoji: '📣', title: 'Advocacy & Education', desc: 'Fighting for rights and raising awareness' },
  { emoji: '🌱', title: 'Healing-Centered', desc: 'Safe environments for processing and growth' },
  { emoji: '💬', title: 'Peer Support', desc: 'Connecting individuals with shared experiences' },
];

const VISION_PILLARS = [
  { title: 'Live Safely', desc: 'Free from persecution and discrimination', color: 'bg-purple-100', text: 'text-purple-700' },
  { title: 'Live Openly', desc: 'Authentic expression without hiding', color: 'bg-pink-100', text: 'text-pink-700' },
  { title: 'Be Celebrated', desc: 'Embraced by inclusive communities', color: 'bg-teal-100', text: 'text-teal-700' },
];

export default function AboutMissionVision() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-pride-purple font-bold tracking-wider uppercase text-sm mb-3 block">Community Support</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-6">Our Mission</h2>
            <p className="text-xl text-pride-muted leading-relaxed font-medium">
              United in Pride Supports and Empowers LGBTQ+ fleeing persecution by Creating Safe, Culturally Affirming Spaces where they can Heal, Connect and reclaim their Dignity and Belonging.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {MISSION_PILLARS.map((pillar, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-3xl mb-3 block">{pillar.emoji}</span>
                <h3 className="font-bold text-pride-navy mb-1">{pillar.title}</h3>
                <p className="text-sm text-pride-muted leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-pride-sand rounded-[3rem] p-10 md:p-16 text-center shadow-sm">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-6">Our Vision</h2>
            <p className="text-xl text-pride-muted leading-relaxed">
              A Canada where LGBTQ+ People Live openly, Safely and with Pride free from fear, stigma, and isolation. Celebrated and Embraced in Inclusive Communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {VISION_PILLARS.map((vision, idx) => (
              <div key={idx} className={`${vision.color} p-8 rounded-[2rem] shadow-sm transform hover:-translate-y-2 transition-transform duration-300`}>
                <h3 className={`font-display font-bold text-2xl mb-2 ${vision.text}`}>{vision.title}</h3>
                <p className="text-pride-navy font-medium opacity-80">{vision.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}