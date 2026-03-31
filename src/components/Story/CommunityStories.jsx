// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { apiService } from '../../api/apiService'; 

// const cardBorderStyle = {
//   backgroundOrigin: 'border-box',
//   backgroundClip: 'padding-box, border-box',
//   backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)',
// };

// export default function CommunityStories() {
//   const [stories, setStories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [expandedId, setExpandedId] = useState(null);
  
//   // New Pagination States
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//  // CommunityStories.jsx mein bas useEffect ke andar ye change karein:

//   useEffect(() => {
//     const fetchStories = async () => {
//       setIsLoading(true);
//       try {
//         // Change from getStories to getPublishedStories
//         const response = await apiService.getPublishedStories(currentPage); 
        
//         setStories(response.data.data || []);
//         setTotalPages(response.data.totalPages || 1);
        
//       } catch (error) {
//         console.error('Error fetching stories:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchStories();
//   }, [currentPage]);

//   const toggleStory = (idx) => {
//     setExpandedId(expandedId === idx ? null : idx);
//   };

//   return (
//     <section className="py-24 px-6 bg-white">
//       <div className="max-w-[1200px] mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Community Voices</h2>
//           <p className="text-slate-500 text-lg">Inspiring journeys of resilience and growth</p>
//         </div>

//         {isLoading ? (
//           <div className="flex justify-center items-center h-40">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#A855F7] border-solid"></div>
//           </div>
//         ) : stories.length === 0 ? (
//           <div className="text-center text-slate-500 text-lg font-medium">
//             No stories available at the moment.
//           </div>
//         ) : (
//           <>
//             <div className="grid md:grid-cols-2 gap-10">
//               {stories.map((story, idx) => {
//                 const isExpanded = expandedId === idx;
//                 const storyName = story.name || story.author || 'Anonymous';
//                 const rawStoryText = story.story_text || story.description || story.shortDescription || '';
//                 const storyFull = story.fullStory || rawStoryText;   
//                 const firstLetter = storyName.charAt(0).toUpperCase();
                
//                 const hasMoreText = story.fullStory || rawStoryText.length > 180;

//                 return (
//                   <motion.div
//                     key={story._id || story.id || idx}
//                     layout
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: idx * 0.1, layout: { duration: 0.3 } }}
//                     style={cardBorderStyle}
//                     className="p-8 rounded-[2.5rem] border-2 border-transparent shadow-xl flex flex-col md:flex-row gap-8 hover:shadow-2xl transition-shadow duration-300"
//                   >
//                     <motion.div 
//                       layout 
//                       className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white bg-gradient-to-br from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] flex items-center justify-center text-white text-5xl md:text-6xl font-black"
//                     >
//                       {firstLetter}
//                     </motion.div>

//                     <motion.div layout className="flex flex-col flex-1">
//                       <div className="mb-4">
//                         <h3 className="text-2xl font-bold text-slate-900">{storyName}</h3>
//                       </div>
                      
//                       <motion.div layout className="text-slate-500 mb-5 flex-1 leading-relaxed">
//                         <motion.p 
//                           layout
//                           className={isExpanded ? "italic text-slate-800 font-medium mb-3" : "line-clamp-4"}
//                         >
//                           {isExpanded ? storyFull : rawStoryText}
//                         </motion.p>
//                       </motion.div>

//                       {hasMoreText && (
//                         <button
//                           onClick={() => toggleStory(idx)}
//                           className="font-bold text-[#FF6B6B] hover:text-[#A855F7] transition-colors inline-flex items-center gap-2 self-start outline-none"
//                         >
//                           {isExpanded ? 'Hide Full Story ←' : 'Read Full Story →'}
//                         </button>
//                       )}
//                     </motion.div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* Pagination UI - Pages 1 2 3 ... */}
//             {totalPages > 1 && (
//               <div className="flex justify-center items-center gap-3 mt-16">
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                   <button
//                     key={page}
//                     onClick={() => {
//                       setCurrentPage(page);
//                       setExpandedId(null); // Close expanded stories when changing pages
//                     }}
//                     className={`w-12 h-12 rounded-full font-bold transition-all duration-300 ${
//                       currentPage === page 
//                         ? 'bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white shadow-lg transform scale-110' 
//                         : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';

export default function CommunityStories() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Community Voices</h2>
          <p className="text-slate-500 text-lg">Inspiring journeys of resilience and growth</p>
        </div>

        {/* Video Embed Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-slate-50 relative aspect-video bg-slate-100"
        >
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://embed.jasperplayer.com?brand=CTV_NEWS&destination=ctvnews_web&language=EN&contentId=3191690" 
            frameBorder="0"
            scrolling="no" /* <-- Added this to hide the scrollbar */
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}