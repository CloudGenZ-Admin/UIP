import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import s3 from '../../assets/s3.jpg';
import s4 from '../../assets/s4.jpg';

const STORIES = [
  {
    name: 'Ahmed K.',
    // origin: 'Somalia',
    // title: 'From Fear to Community Leadership',
    desc: 'After fleeing persecution in Somalia, Ahmed found his voice through United in Pride and now leads peer support groups.',
    fullStory: '"When I first arrived in Canada, I was terrified to be open about who I am. The community gatherings at United in Pride showed me that I could be both proudly Somali and proudly gay. Now I facilitate workshops for other newcomers."',
    publishedDate: '2/15/2024',
    // tags: ['Leadership', 'Peer Support', 'Community Building'],
    img: s1,
  },
  {
    name: 'Maria S.',
    origin: 'El Salvador',
    title: 'Finding My Authentic Self',
    desc: "Maria's journey from hiding her identity to becoming an advocate for trans rights in her new community.",
    fullStory: '"The wellness circles gave me the courage to live authentically. I learned that being transgender and Latina are both parts of my strength. Now I volunteer to help other trans newcomers navigate healthcare and legal name changes."',
    publishedDate: '1/10/2024',
    tags: ['Trans Rights', 'Healthcare Access', 'Cultural Pride'],
    img: s2,
  },
  {
    name: 'David & Michael',
    origin: 'Jamaica',
    title: 'Love Transcends Borders',
    desc: 'This couple found safety, community, and a new life together after claiming asylum in Canada.',
    fullStory: '" We couldnt hold hands in public back home. Here, we not only found safety but a chosen family through United in Pride. We recently got married and are planning to sponsor other LGBTQ+ refugees.  "',
    publishedDate: '11/05/2023',
    tags: ['Couple Support','Asylum', 'Equality'],
    img: s3,
  },
  {
    name: 'Priya R.',
    origin: 'India',
    title: 'Building Bridges Between Cultures',
    desc: 'Priya created a support network that honors both her Indian heritage and her identity as a lesbian.',
    fullStory: '"I thought I had to choose between my culture and my sexuality. United in Pride helped me realize I could honor both. I now run cultural workshops that celebrate LGBTQ+ South Asian experiences."',
    publishedDate: '3/22/2024',
    tags: ['Cultural Integration', 'Workshop Leadership' , 'South Asian Community'],
    img: s4,
  },
];

const cardBorderStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)',
};

export default function CommunityStories() {
  // State to track which story is currently expanded (null means none are expanded)
  const [expandedId, setExpandedId] = useState(null);

  const toggleStory = (idx) => {
    // If clicking the already expanded story, close it. Otherwise, open the new one.
    setExpandedId(expandedId === idx ? null : idx);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Community Voices</h2>
          <p className="text-slate-500 text-lg">Inspiring journeys of resilience and growth</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {STORIES.map((story, idx) => {
            const isExpanded = expandedId === idx;

            return (
              <motion.div
                key={idx}
                layout // Smoothly animates height changes when opening/closing
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, layout: { duration: 0.3 } }}
                style={cardBorderStyle}
                className="p-8 rounded-[2.5rem] border-2 border-transparent shadow-xl flex flex-col md:flex-row gap-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <motion.div layout className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                  <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
                </motion.div>

                <motion.div layout className="flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{story.name}</h3>
                    {/* <p className="text-[#A855F7] font-semibold text-sm">Originally from {story.origin}</p> */}
                  </div>
                  
                  {/* <h4 className="text-xl font-bold text-slate-800 mb-3 italic">"{story.title}"</h4> */}
                  
                  {/* Dynamic Content: Description vs Full Story */}
                  <motion.div layout className="text-slate-500 mb-5 flex-1 leading-relaxed">
                    <AnimatePresence mode="wait">
                      {isExpanded ? (
                        <motion.div
                          key="full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="italic text-slate-800 font-medium mb-3">{story.fullStory}</p>
                          {/* <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
                            Published: {story.publishedDate}
                          </p> */}
                        </motion.div>
                      ) : (
                        <motion.p
                          key="desc"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {story.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* <motion.div layout className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {story.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-[0.7rem] font-black uppercase tracking-wider rounded-full">
                        {tag}
                      </span>
                    ))}
                  </motion.div> */}

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleStory(idx)}
                    className="font-bold text-[#FF6B6B] hover:text-[#A855F7] transition-colors inline-flex items-center gap-2 self-start outline-none"
                  >
                    {isExpanded ? 'Hide Full Story ←' : 'Read Full Story →'}
                  </button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}