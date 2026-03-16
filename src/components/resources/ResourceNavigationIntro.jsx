import React from 'react';

export default function ResourceNavigationIntro() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-wide mb-6">
            Resource Navigation
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-6">
            We Walk Alongside You
          </h2>
          <p className="text-pride-muted text-lg leading-relaxed mb-6">
            Canada's asylum and refugee systems can feel overwhelming—especially when you're carrying the weight of fear, trauma, and uncertainty. At United in Pride, we understand because many of us have been there.
          </p>
          <p className="text-pride-muted text-lg leading-relaxed mb-10">
            Whether you need help understanding immigration policies, finding legal assistance, or connecting with culturally safe support services, we're here to guide you every step of the way.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <Feature icon="⚖️" color="bg-teal-100" title="Legal Support" desc="Immigration policies, refugee claims, and rights protection" />
            <Feature icon="🏠" color="bg-purple-100" title="Housing & Shelter" desc="Safe, affirming accommodation and housing assistance" />
            <Feature icon="❤️" color="bg-pink-100" title="Healthcare Access" desc="Medical care, mental health support, and wellness services" />
            <Feature icon="🤝" color="bg-yellow-100" title="Settlement Services" desc="Language learning, employment, and community integration" />
          </div>

          <div className="bg-pride-sand rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center text-white text-xl shadow-md">
                📞
              </div>
              <div>
                <h4 className="font-bold text-pride-navy text-lg">Ready to Connect?</h4>
                <p className="text-sm text-pride-muted">Give us a call or send a message—we're here for you</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-pride-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors">
                Contact Our Team
              </button>
              <button className="flex-1 border-2 border-pride-purple text-pride-purple px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
                Get Immediate Help
              </button>
            </div>
          </div>
        </div>

        {/* Right Image/Visual */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-gray-100">
             {/* Replace with your actual image path */}
            <img 
              src="/api/placeholder/600/750" 
              alt="Community support" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pride-navy/50 to-transparent"></div>
          </div>

          {/* Floating Trusted Partners Box */}
          <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white rounded-2xl p-6 shadow-xl border border-gray-50 max-w-[280px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-lg">
                ✓
              </div>
              <span className="font-bold text-pride-navy text-lg">Trusted Partners</span>
            </div>
            <p className="text-sm text-pride-muted leading-relaxed">
              Connected to 200+ LGBTQ+-affirming organizations across Canada
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function Feature({ icon, color, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${color}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-pride-navy mb-1">{title}</h4>
        <p className="text-sm text-pride-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}