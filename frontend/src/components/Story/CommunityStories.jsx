import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Images ki ab zaroorat nahi hai isliye imports remove kar diye hain
const STORIES = [
  {
    name: 'Ahmed K.',
    desc: 'After fleeing persecution in Somalia, Ahmed found his voice through United in Pride and now leads peer support groups.',
    fullStory: '"When I first arrived in Canada, I was terrified to be open about who I am. The community gatherings at United in Pride showed me that I could be both proudly Somali and proudly gay. Now I facilitate workshops for other newcomers."',
    publishedDate: '2/15/2024',
  },
  {
    name: 'Maria S.',
    origin: 'El Salvador',
    title: 'Finding My Authentic Self',
    desc: "Maria's journey from hiding her identity to becoming an advocate for trans rights in her new community.",
    fullStory: '"The wellness circles gave me the courage to live authentically. I learned that being transgender and Latina are both parts of my strength. Now I volunteer to help other trans newcomers navigate healthcare and legal name changes."',
    publishedDate: '1/10/2024',
  },
  {
    name: 'David & Michael',
    origin: 'Jamaica',
    title: 'Love Transcends Borders',
    desc: 'This couple found safety, community, and a new life together after claiming asylum in Canada.',
    fullStory: '" We couldnt hold hands in public back home. Here, we not only found safety but a chosen family through United in Pride. We recently got married and are planning to sponsor other LGBTQ+ refugees.  "',
    publishedDate: '11/05/2023',
  },
  {
    name: 'Priya R.',
    origin: 'India',
    title: 'Building Bridges Between Cultures',
    desc: 'Priya created a support network that honors both her Indian heritage and her identity as a lesbian.',
    fullStory: '"I thought I had to choose between my culture and my sexuality. United in Pride helped me realize I could honor both. I now run cultural workshops that celebrate LGBTQ+ South Asian experiences."',
    publishedDate: '3/22/2024',
  },
];

const cardBorderStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)',
};

export default function CommunityStories() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleStory = (idx) => {
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
            // Name ka pehla letter nikalne ke liye
            const firstLetter = story.name.charAt(0);

            return (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, layout: { duration: 0.3 } }}
                style={cardBorderStyle}
                className="p-8 rounded-[2.5rem] border-2 border-transparent shadow-xl flex flex-col md:flex-row gap-8 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image ki jagah Initial Avatar */}
                <motion.div 
                  layout 
                  className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white bg-gradient-to-br from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] flex items-center justify-center text-white text-5xl md:text-6xl font-black"
                >
                  {firstLetter}
                </motion.div>

                <motion.div layout className="flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{story.name}</h3>
                  </div>
                  
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