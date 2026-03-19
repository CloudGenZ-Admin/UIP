import React from 'react';
import { motion } from 'framer-motion';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import s3 from '../../assets/s3.jpg';
import s4 from '../../assets/s4.jpg'; 

const STORIES = [
  {
    name: 'Ahmed K.', origin: 'Somalia',
    title: 'From Fear to Community Leadership',
    desc: 'After fleeing persecution in Somalia, Ahmed found his voice through United in Pride and now leads peer support groups.',
    tags: ['Leadership', 'Peer Support'],
    img: s1 
  },
  {
    name: 'Maria S.', origin: 'El Salvador',
    title: 'Finding My Authentic Self',
    desc: "Maria's journey from hiding her identity to becoming an advocate for trans rights in her new community.",
    tags: ['Trans Rights', 'Advocacy'],
    img: s2 
  },
  {
    name: 'David & Michael', origin: 'Jamaica',
    title: 'Love Transcends Borders',
    desc: 'This couple found safety, community, and a new life together after claiming asylum in Canada.',
    tags: ['Asylum', 'Equality'],
    img: s3 
  },
  {
    name: 'Priya R.', origin: 'India',
    title: 'Building Bridges Between Cultures',
    desc: 'Priya created a support network that honors both her Indian heritage and her identity as a lesbian.',
    tags: ['Culture', 'Integration'],
    img: s4 
  }
];

const cardBorderStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)',
};

export default function CommunityStories() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Community Voices</h2>
          <p className="text-slate-500 text-lg">Inspiring journeys of resilience and growth</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {STORIES.map((story, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={cardBorderStyle}
              className="p-8 rounded-[2.5rem] border-2 border-transparent shadow-xl flex flex-col md:flex-row gap-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{story.name}</h3>
                  <p className="text-[#A855F7] font-semibold text-sm">Originally from {story.origin}</p>
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3 italic">"{story.title}"</h4>
                <p className="text-slate-500 mb-5 flex-1 leading-relaxed">{story.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {story.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-[0.7rem] font-black uppercase tracking-wider rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href="#" className="font-bold text-[#FF6B6B] hover:text-[#A855F7] transition-colors inline-flex items-center gap-2">
                  Read Full Story →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}