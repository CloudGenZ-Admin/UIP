import React from 'react';

const STATS = [
  { value: '150+', label: 'Circle Participants', desc: 'Weekly peer support connections' },
  { value: '85%', label: 'Wellness Improvement', desc: 'Reported better mental health' },
  { value: '24', label: 'Cultural Events', desc: 'Celebrating diverse communities' },
  { value: '500+', label: 'Service Connections', desc: 'Successful referrals made' },
];

export default function ProgramImpact() {
  return (
    <section className="py-20 px-6 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-pride-navy mb-4">
            Program Impact
          </h2>
          <p className="text-pride-muted">Real results from culturally-affirming community programs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="font-display font-bold text-5xl text-transparent bg-clip-text bg-gradient-cta mb-2">
                {stat.value}
              </div>
              <h4 className="font-bold text-pride-navy mb-1">{stat.label}</h4>
              <p className="text-sm text-pride-muted">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}