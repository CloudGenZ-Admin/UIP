import React from 'react';

const SUPPORT_PILLARS = [
  {
    title: 'Comprehensive Training',
    desc: 'Complete orientation program covering LGBTQ+ cultural competency, trauma-informed care, and role-specific skills.',
    icon: '📚'
  },
  {
    title: 'Ongoing Support',
    desc: 'Regular check-ins, peer support groups, and access to supervision from experienced staff members.',
    icon: '❤️'
  },
  {
    title: 'Flexible Scheduling',
    desc: 'Work with our team to create a volunteer schedule that fits your lifestyle and commitments.',
    icon: '⏱️'
  }
];

export default function TrainingSupport() {
  return (
    <section className="py-20 px-6 bg-[#fbf9fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#3A3556] mb-4">
            Training & Support
          </h2>
          <p className="text-[#87839D]">We ensure you have everything you need to succeed</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SUPPORT_PILLARS.map((pillar, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl text-center shadow-sm border border-gray-50">
              <div className="text-5xl mb-6">{pillar.icon}</div>
              <h3 className="font-bold text-[#3A3556] text-xl mb-3">{pillar.title}</h3>
              <p className="text-[#87839D] leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}