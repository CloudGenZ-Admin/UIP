import React from 'react';

const PROGRAMS = [
  {
    id: 'peer-support',
    title: 'Peer Support Circles',
    desc: 'Safe, confidential spaces where community members can share experiences, build friendships, and support each other through the challenges of resettlement.',
    emoji: '💬',
    bgColor: 'bg-purple-50',
    accent: 'text-purple-600',
    features: [
      { title: 'Confidential & Safe', desc: 'Privacy-protected spaces where vulnerability is honored' },
      { title: 'Genuine Connection', desc: 'Build lasting friendships with people who understand' },
      { title: 'Resettlement Guidance', desc: 'Navigate complexities with community wisdom' }
    ],
    schedule: 'Weekly Circle Sessions',
    btnText: 'Join Support Circle'
  },
  {
    id: 'wellness',
    title: 'Wellness & Healing Workshops',
    desc: 'Programs addressing mental health, trauma recovery, and holistic wellness tailored to the specific needs of queer and trans newcomers.',
    emoji: '🧘',
    bgColor: 'bg-teal-50',
    accent: 'text-teal-600',
    features: [
      { title: 'Mental Health Focus', desc: 'Evidence-based approaches to anxiety and depression' },
      { title: 'Trauma Recovery', desc: 'Culturally-informed approaches to processing experiences' },
      { title: 'Holistic Wellness', desc: 'Mind-body practices, meditation, and self-care' }
    ],
    schedule: 'Monthly Workshops',
    btnText: 'Book Wellness Session'
  },
  {
    id: 'cultural',
    title: 'Cultural Affirmation Events',
    desc: 'Celebrations and gatherings that honor the diverse identities and cultures within our community, fostering belonging and pride.',
    emoji: '🎉',
    bgColor: 'bg-pink-50',
    accent: 'text-pink-600',
    features: [
      { title: 'Cultural Celebration', desc: 'Honor your heritage while celebrating your identity' },
      { title: 'Diverse Community', desc: 'Connect with people from many cultures and backgrounds' },
      { title: 'Pride & Belonging', desc: 'Experience the joy of being fully seen and celebrated' }
    ],
    schedule: 'Monthly Celebrations (Third Sunday)',
    btnText: 'Join Celebrations'
  },
  {
    id: 'navigation',
    title: 'Resource Navigation & Referrals',
    desc: 'Assistance connecting newcomers with essential services such as healthcare, legal aid, housing, and employment in culturally sensitive ways.',
    emoji: '🧭',
    bgColor: 'bg-yellow-50',
    accent: 'text-yellow-600',
    features: [
      { title: 'Healthcare Access', desc: 'Connect with LGBTQ+-affirming healthcare providers' },
      { title: 'Legal Aid Support', desc: 'Immigration lawyers and refugee claim assistance' },
      { title: 'Housing & Employment', desc: 'Safe housing options and inclusive opportunities' }
    ],
    schedule: 'Personalized support by appointment',
    btnText: 'Get Navigation Help'
  }
];

export default function CorePrograms() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-4">
          Our Core Programs
        </h2>
        <p className="text-pride-muted text-lg">
          Four pillars of support designed to nurture every aspect of your journey.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-24">
        {PROGRAMS.map((program, index) => (
          <div key={program.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Visual Side */}
            <div className={`flex-1 w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] ${program.bgColor} flex items-center justify-center relative shadow-sm`}>
              <span className="text-8xl md:text-9xl drop-shadow-lg transform hover:scale-110 transition-transform duration-500">
                {program.emoji}
              </span>
              <div className="absolute bottom-6 right-6 bg-white px-5 py-2 rounded-full shadow-md font-semibold text-sm text-pride-navy">
                {program.schedule}
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 space-y-6">
              <h3 className="font-display font-bold text-3xl md:text-4xl text-pride-navy">
                {program.title}
              </h3>
              <p className="text-pride-muted text-lg leading-relaxed">
                {program.desc}
              </p>
              
              <ul className="space-y-4 pt-4">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex gap-4">
                    <span className={`w-8 h-8 rounded-full ${program.bgColor} ${program.accent} flex items-center justify-center flex-shrink-0 mt-1`}>
                      <svg className="w-4 h-4" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-semibold text-pride-navy">{feature.title}</h4>
                      <p className="text-sm text-pride-muted">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <button className="mt-6 inline-block bg-gradient-cta text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-md">
                {program.btnText}
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}