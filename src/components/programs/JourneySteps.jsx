import React from 'react';

const STEPS = [
  {
    num: '1',
    title: 'Reach Out',
    desc: "Contact us through our support form, phone, or email. We'll schedule a welcoming conversation to understand your needs.",
    link: 'Get in Touch →',
    color: 'bg-purple-100'
  },
  {
    num: '2',
    title: 'Find Your Fit',
    desc: "Together, we'll identify which programs align with your goals, comfort level, and availability. Every journey is unique.",
    link: 'Explore Programs →',
    color: 'bg-teal-100'
  },
  {
    num: '3',
    title: 'Join Community',
    desc: "Start participating in programs that speak to you. Build connections, access resources, and begin your healing journey.",
    link: 'Start Your Journey →',
    color: 'bg-pink-100'
  }
];

export default function JourneySteps() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-pride-muted text-lg">Simple steps to join our community programs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-gray-100 -z-10" />

          {STEPS.map((step) => (
            <div key={step.num} className="relative flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-full ${step.color} border-4 border-white flex items-center justify-center font-display font-bold text-4xl text-pride-navy shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.num}
              </div>
              <h3 className="font-display font-bold text-2xl text-pride-navy mb-3">
                {step.title}
              </h3>
              <p className="text-pride-muted leading-relaxed mb-6">
                {step.desc}
              </p>
              <a href="#" className="font-semibold text-pride-purple hover:text-pride-navy transition-colors mt-auto">
                {step.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}