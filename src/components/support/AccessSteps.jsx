import React from 'react';

const STEPS = [
  {
    num: '1',
    title: 'Contact Directly',
    desc: "Reach out to any partner organization directly. Most offer phone, email, or walk-in support options.",
    tags: ['Phone', 'Email', 'Walk-in', 'Online'],
    color: 'bg-purple-100'
  },
  {
    num: '2',
    title: 'Get Guidance',
    desc: "Not sure which service is right for you? Our team can help match you with appropriate partners.",
    tags: ['Service matching', 'Referrals', 'Advocacy'],
    color: 'bg-teal-100'
  },
  {
    num: '3',
    title: 'Join Community',
    desc: "Connect with peer support groups and community programs while accessing professional services.",
    tags: ['Peer support', 'Cultural events', 'Workshops'],
    color: 'bg-pink-100'
  }
];

export default function AccessSteps() {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-4">
            How to Access Support
          </h2>
          <p className="text-pride-muted text-lg">Getting connected with the right services is straightforward.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-gray-100 -z-10" />

          {STEPS.map((step) => (
            <div key={step.num} className="relative flex flex-col items-center text-center group bg-white">
              <div className={`w-24 h-24 rounded-full ${step.color} border-4 border-white flex items-center justify-center font-display font-bold text-4xl text-pride-navy shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.num}
              </div>
              <h3 className="font-display font-bold text-2xl text-pride-navy mb-3">
                {step.title}
              </h3>
              <p className="text-pride-muted leading-relaxed mb-6">
                {step.desc}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {step.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium bg-gray-50 text-gray-500 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}