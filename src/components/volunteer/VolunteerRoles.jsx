import React from 'react';
import { motion } from 'framer-motion';

const ROLES = [
  { id: 'peer-mentor', title: 'Peer Mentor', hours: '3-4 hrs/wk', desc: 'Provide one-on-one guidance to newcomers navigating their journey.', emoji: '🤝', responsibilities: ['Weekly sessions', 'Share lived experiences', 'Connect to resources'] },
  { id: 'event-coordinator', title: 'Event Coordinator', hours: '4-6 hrs/wk', desc: 'Plan and execute community events and cultural celebrations.', emoji: '🎉', responsibilities: ['Organize events', 'Manage logistics', 'Coordinate supplies'] },
  { id: 'resource-ambassador', title: 'Resource Ambassador', hours: '2-3 hrs/wk', desc: 'Help connect community members with vital services.', emoji: '🧭', responsibilities: ['Database maintenance', 'Conduct workshops', 'Referral follow-ups'] },
  { id: 'social-media', title: 'Social Media Ally', hours: '2-4 hrs/wk', desc: 'Amplify community voices through digital platforms.', emoji: '📱', responsibilities: ['Create content', 'Manage accounts', 'Document stories'] }
];

const borderStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)',
};

export default function VolunteerRoles() {
  return (
    <section id="roles" className="py-2 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Volunteer Opportunities</h2>
          <p className="text-slate-500 text-lg">Find the perfect role that matches your skills and availability</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ROLES.map((role, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={borderStyle}
              className="p-8 rounded-[2.5rem] border-2 border-transparent shadow-xl flex flex-col hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-6">{role.emoji}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{role.title}</h3>
              <span className="text-[0.65rem] font-black text-[#A855F7] uppercase tracking-widest mb-4">{role.hours}</span>
              <p className="text-slate-500 text-sm mb-6 flex-1">{role.desc}</p>
              <ul className="space-y-2 mb-8 border-t border-slate-50 pt-6">
                {role.responsibilities.map((req, i) => (
                  <li key={i} className="text-[0.75rem] font-bold text-slate-400 flex items-center gap-2">
                    <span className="text-[#FF6B6B]">✓</span> {req}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}