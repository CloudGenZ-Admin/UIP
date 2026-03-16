import React from 'react';
import { Link } from 'react-router-dom';

export default function Partnerships() {
  return (
    <div className="font-sans text-[#3A3556]">
      
      {/* 1. INTRO & TYPES SECTION */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 rounded-full bg-white border border-gray-200 text-sm font-semibold text-[#A58CE0] mb-4 shadow-sm">
              Partnership Opportunities
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#3A3556] mb-6">
              Join us in creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3]">systemic change</span>
            </h2>
            <p className="text-[#87839D] text-lg max-w-2xl mx-auto">
              Building more inclusive communities requires collective effort. Explore how we can collaborate to expand our reach and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <TypeCard 
              title="Organizational Partnerships" 
              desc="Collaborate with service providers, community organizations, and advocacy groups to expand our reach and impact."
              items={["Service referral partnerships", "Shared programming opportunities", "Resource sharing agreements", "Joint advocacy initiatives"]}
            />
            <TypeCard 
              title="Event Collaboration" 
              desc="Partner with us to create meaningful events that bring communities together and amplify important messages."
              items={["Pride celebrations and festivals", "Educational workshops and panels", "Cultural celebrations", "Fundraising galas and events"]}
            />
            <TypeCard 
              title="Program Sponsorship" 
              desc="Sponsor specific programs and see the direct impact of your investment in community wellness and empowerment."
              items={["Wellness circles sponsorship", "Cultural programming support", "Transportation assistance fund", "Emergency support services"]}
            />
            <TypeCard 
              title="Corporate/Community Sponsorships" 
              desc="Align your organization with meaningful social impact while building authentic connections with diverse communities."
              items={["Title event sponsorships", "Brand visibility opportunities", "Employee engagement programs", "CSR partnership development"]}
            />
          </div>
        </div>
      </section>

      {/* 2. INVESTMENT LEVELS SECTION */}
      <section className="relative bg-[#fbf9fa] py-24 px-6 overflow-hidden">
        {/* Decorative Circles */}
        <Circle size={300} color="bg-purple-200/40" className="-top-[10%] -left-[5%]" />
        <Circle size={200} color="bg-pink-200/40" className="bottom-[10%] -right-[5%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#3A3556] mb-4">
              Partnership Investment Levels
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Community Partner */}
            <LevelCard 
              title="Community Partner" 
              amount="$1,000 - $4,999"
              items={["Logo on website and materials", "Social media recognition", "Impact reports", "Invitation to community events"]}
            />
            
            {/* Champion Partner (Highlighted) */}
            <div className="bg-gradient-to-br from-[#A58CE0] to-[#EFAEC3] rounded-3xl p-8 shadow-xl text-white transform md:-translate-y-4">
              <h3 className="font-display font-bold text-2xl mb-2">Champion Partner</h3>
              <p className="text-white/90 font-bold text-xl mb-6">$5,000 - $14,999</p>
              <ul className="space-y-4">
                {["Prominent logo placement", "Partnership announcement", "Co-branded programming opportunities", "Quarterly partnership meetings"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-white"><CheckIcon /></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visionary Partner */}
            <LevelCard 
              title="Visionary Partner" 
              amount="$15,000+"
              items={["Title sponsorship opportunities", "Custom partnership development", "Executive advisory involvement", "Dedicated relationship management"]}
            />
          </div>
        </div>
      </section>

      {/* 3. RESOURCES & CTA SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Resources */}
          <div className="mb-24">
            <h3 className="font-display font-bold text-3xl text-center text-[#3A3556] mb-10">Partnership Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <ResourceCard title="Partnership Deck" desc="Comprehensive overview of partnership opportunities" type="PDF" />
              <ResourceCard title="Impact Report 2024" desc="Annual report showcasing community impact" type="PDF" />
              <ResourceCard title="Media Kit" desc="Logos, photos, and brand guidelines" type="ZIP" />
            </div>
          </div>

          {/* CTA block */}
          <div className="bg-white border-2 border-purple-50 rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-purple-900/5 max-w-4xl mx-auto relative overflow-hidden">
             {/* Subtle Inner Circle */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
             
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#3A3556] mb-6">
              Ready to Partner?
            </h2>
            <p className="text-[#87839D] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Let's discuss how your organization can make a meaningful impact alongside United in Pride. Our partnerships team will work with you to create a customized collaboration that aligns with your values and goals.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
              <a href="mailto:partnerships@unitedinpride.org" className="w-full sm:w-auto text-center bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3] text-white font-bold px-8 py-4 rounded-full shadow-md hover:opacity-90 transition-opacity">
                Schedule a discovery call
              </a>
              <Link to="/contact" className="w-full sm:w-auto text-center bg-white border-2 border-gray-100 text-[#3A3556] font-bold px-8 py-4 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                Contact Partnerships Team
              </Link>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <p className="text-[#3A3556] font-bold text-lg mb-1">Let's explore how we can create meaningful change together</p>
              <div className="text-[#A58CE0] font-semibold text-lg">
                partnerships@unitedinpride.org <span className="text-gray-300 mx-2">|</span> (416) 555-PARTNER
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

// ---- SUB-COMPONENTS FOR CLEAN CODE ----

function TypeCard({ title, desc, items }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-purple-100 transition-all">
      <h3 className="font-display font-bold text-2xl text-[#3A3556] mb-3">{title}</h3>
      <p className="text-[#87839D] mb-6">{desc}</p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 text-[#A58CE0]"><CheckIcon /></span>
            <span className="text-[#3A3556] font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LevelCard({ title, amount, items }) {
  return (
    <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-sm hover:border-[#A58CE0] transition-colors">
      <h3 className="font-display font-bold text-2xl text-[#3A3556] mb-2">{title}</h3>
      <p className="text-[#A58CE0] font-bold text-xl mb-6">{amount}</p>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 text-[#EFAEC3]"><CheckIcon /></span>
            <span className="text-[#87839D] font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ResourceCard({ title, desc, type }) {
  return (
    <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#A58CE0] shadow-sm mb-4">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      </div>
      <h4 className="font-bold text-[#3A3556] mb-2">{title}</h4>
      <p className="text-sm text-[#87839D] mb-4 flex-grow">{desc}</p>
      <button className="text-[#A58CE0] font-bold text-sm hover:text-[#3A3556] transition-colors">
        Download {type}
      </button>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
    </svg>
  );
}

function Circle({ size, color, className }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none blur-3xl ${color} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}