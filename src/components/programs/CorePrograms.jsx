import React from 'react';
import { Link } from 'react-router-dom';

const PROGRAMS = [
  {
    id: 'peer-support',
    title: 'Peer Support Circles',
    desc: 'Warm, welcoming spaces where we come together to share our stories, build real friendships, and support one another as we navigate our new lives.',
    emoji: '💬',
    bgColor: 'bg-indigo-50/60',
    accent: 'text-indigo-600',
    features: [
      { title: 'Safe & Welcoming', desc: 'A trusting, judgment-free space where you can truly be yourself' },
      { title: 'Chosen Family', desc: 'Build deep, lasting friendships with people who genuinely get it' },
      { title: 'Shared Wisdom', desc: 'Navigate your new life with the love and support of the community' }
    ],
    schedule: 'Weekly Gatherings',
    btnText: 'Join a Circle',
    link: '/programs/peer-support'
  },
  {
    id: 'wellness',
    title: 'Wellness Workshops',
    desc: 'Gentle, community-centered workshops focused on healing, mental well-being, and self-care, designed specially for the unique journeys of queer and trans newcomers.',
    emoji: '🧘',
    bgColor: 'bg-rose-50/60',
    accent: 'text-rose-600',
    features: [
      { title: 'Mental Well-being', desc: 'Gentle, affirming approaches to easing anxiety and finding peace' },
      { title: 'Healing Together', desc: 'A culturally-aware space to process our experiences together' },
      { title: 'Holistic Care', desc: 'Explore art therapy, movement, and everyday self-care practices' }
    ],
    schedule: 'Monthly Workshops',
    btnText: 'Explore Wellness',
    link: '/programs/wellness'
  },
  {
    id: 'cultural',
    title: 'Cultural & Community Events',
    desc: 'Joyful gatherings and celebrations where we honor our diverse backgrounds, share our beautiful cultures, and build a chosen family together.',
    emoji: '🎉',
    bgColor: 'bg-teal-50/60',
    accent: 'text-teal-600',
    features: [
      { title: 'Celebrate Heritage', desc: 'Honor where you come from while embracing exactly who you are' },
      { title: 'Joyful Gatherings', desc: 'Share food, music, and laughter with a beautiful, diverse family' },
      { title: 'True Belonging', desc: 'Experience the magic of being fully seen and loved by your community' }
    ],
    schedule: 'Monthly Events',
    btnText: 'Join the Joy',
    link: '/programs/cultural'
  },
  {
    id: 'navigation',
    title: 'Resource Navigation',
    desc: 'A helping hand to guide you through finding the right doctors, housing, and legal help. We are here to navigate the system with you, step by step.',
    emoji: '🧭',
    bgColor: 'bg-amber-50/60',
    accent: 'text-amber-600',
    features: [
      { title: 'Affirming Care', desc: "We'll help you find doctors and therapists who celebrate who you are" },
      { title: 'Legal Support', desc: 'Compassionate guidance for refugee claims and immigration paperwork' },
      { title: 'Everyday Needs', desc: 'Help with the basics, from finding safe housing to writing a resume' }
    ],
    schedule: 'By Appointment',
    btnText: 'Get Support',
    link: '/ourpartners'
  },
  {
    id: 'youth',
    title: 'Youth & Newcomer Programs',
    desc: 'Dedicated, uplifting spaces for young LGBTQ+ newcomers to hang out, express themselves, learn new skills, and grow together.',
    emoji: '🌱',
    bgColor: 'bg-emerald-50/60',
    accent: 'text-emerald-600',
    features: [
      { title: 'Safe Hangouts', desc: 'A relaxed, fun environment just for young folks to be themselves' },
      { title: 'Life Skills', desc: 'Gentle guidance on everything from resume building to self-care' },
      { title: 'Peer Mentorship', desc: 'Connect with older community members who truly understand' }
    ],
    schedule: 'Ongoing Programs',
    btnText: 'Join Youth Programs',
    link: '/programs/youth-programs'
  },
  
];

export default function CorePrograms() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Main Grid: Side-by-Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROGRAMS.map((program) => (
            <div 
              key={program.id} 
              className={`p-10 md:p-12 rounded-[3rem] ${program.bgColor} border border-transparent hover:border-slate-100 transition-all shadow-sm flex flex-col`}
            >
              {/* Header: Emoji & Badge */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-5xl">{program.emoji}</span>
                <span className="bg-white px-4 py-1.5 rounded-full font-black text-[0.6rem] text-slate-900 uppercase tracking-[0.2em] shadow-sm">
                  {program.schedule}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight italic mb-4">
                  {program.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {program.desc}
                </p>
              </div>
              
              {/* Features List (Stacked inside the card) */}
              <div className="space-y-6 flex-grow mb-10">
                <h4 className="font-black text-slate-400 uppercase text-[0.65rem] tracking-[0.25em] mb-4">Key Features:</h4>
                {program.features.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <span className={`w-10 h-10 rounded-2xl bg-white ${program.accent} flex items-center justify-center shadow-sm shrink-0`}>
                      <svg className="w-5 h-5" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-black text-slate-800 uppercase text-[0.7rem] tracking-widest mb-0.5">{feature.title}</h4>
                      <p className="text-slate-500 text-sm leading-snug">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-black/5">
                <Link to={program.link} className="w-full text-center inline-block px-10 py-4 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                  {program.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}