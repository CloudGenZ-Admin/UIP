import React from 'react';
import { motion } from 'framer-motion';

export default function AboutVideo() {
  return (
    <section className="bg-[#FAFAFA] pt-12 pb-16 px-6 relative z-10">
      <div className="max-w-[1000px] mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-black"
        >
          <iframe 
            src="https://embed.jasperplayer.com?brand=CTV_NEWS&destination=ctvnews_web&language=EN&contentId=3161295" 
            frameBorder="0" 
            scrolling="no" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" 
            allowFullScreen
            title="CTV News Feature"
            className="absolute top-0 left-0 w-full h-full border-0 outline-none"
            style={{ 
              clipPath: 'inset(1px 1px 1px 1px)',
              width: '100%',
              height: '100%'
            }}
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}