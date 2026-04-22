import React from 'react';

const SERVICE_CATEGORIES = [
  {
    id: 'housing',
    title: 'Housing & Shelter Support',
    desc: 'LGBTQ+ inclusive housing support, emergency shelter, and transitional housing solutions with comprehensive wraparound services.',
    emoji: '🏠',
    bgColor: 'bg-purple-50',
    accent: 'text-purple-600',
    partners: [
      { name: 'The 519', loc: 'Toronto', desc: 'LGBTQ+ inclusive housing support and emergency referrals connecting you with safe, affirming accommodations.', tags: ['Emergency referrals', 'LGBTQ+ affirming', 'Community programs'], website: 'https://www.the519.org/' },
      { name: 'Fred Victor', loc: 'Toronto', desc: 'Transitional housing and homelessness prevention with comprehensive support programs.', tags: ['Transitional housing', 'Prevention programs', 'Mental health'], website: 'https://www.fredvictor.org/' },
      { name: 'YWCA Canada', loc: 'National', desc: 'Transitional housing and shelters for women and gender-diverse people across Canada.', tags: ['Gender-inclusive', 'Safety planning', 'Life skills'], website: 'https://ywcacanada.ca/' },
      { name: 'Cornerstone Housing for Women', loc: 'Ottawa', desc: 'Emergency shelter and transitional housing for women and gender-diverse people.', tags: ['Emergency shelter', 'Trauma-informed care', 'Housing placement'], website: 'https://cornerstonewomen.ca/' },
      { name: 'The Ottawa Mission', loc: 'Ottawa', desc: 'Emergency shelter, housing support, and meals for those experiencing homelessness.', tags: ['24/7 shelter', 'Daily meals', 'Case management'], website: 'https://ottawamission.com/' },
      { name: 'John Howard Society of Ottawa', loc: 'Ottawa', desc: 'Supportive housing and reintegration for marginalized individuals seeking stability.', tags: ['Supportive housing', 'Reintegration', 'Community programs'], website: 'https://johnhoward.on.ca/ottawa/' }
    ]
  },
  {
    id: 'legal',
    title: 'Legal Aid & Immigration',
    desc: 'Expert legal representation for refugee claims, immigration law, and specialized support for LGBTQ+ persecution cases.',
    emoji: '⚖️',
    bgColor: 'bg-teal-50',
    accent: 'text-teal-600',
    partners: [
      { name: 'Legal Aid Ontario (LAO)', loc: 'Ontario', desc: 'Legal representation for refugees and immigrants with specialized LGBTQ+ persecution expertise.', tags: ['Refugee claims', 'Immigration law', 'Free legal aid'], website: 'https://www.legalaid.on.ca/' },
      { name: 'Refugee Law Office', loc: 'Ontario', desc: 'Specialized refugee legal services with deep expertise in LGBTQ+ persecution claims.', tags: ['Refugee law', 'LGBTQ+ persecution', 'Complex cases'], website: 'https://www.legalaid.on.ca/services/refugee-law-offices/' },
      { name: 'Kinbrace Community Society', loc: 'BC', desc: 'Holistic support combining housing assistance with refugee claim legal support.', tags: ['Housing + legal', 'Refugee claims', 'Integration'], website: 'https://kinbrace.ca/' },
      { name: 'HALCO', loc: 'Ontario', desc: 'Legal services for people with HIV, including specialized support for newcomers.', tags: ['HIV legal support', 'Discrimination cases', 'Newcomers'], website: 'https://www.halco.org/' },
      { name: 'Refugee 613', loc: 'Ottawa', desc: 'Community-driven resources, legal clinics, and information for refugee newcomers.', tags: ['Legal clinics', 'Community resources', 'Information'], website: 'https://www.refugee613.ca/' },
      { name: 'South Ottawa Community Legal Services', loc: 'Ottawa', desc: 'Free legal aid services for low-income individuals and families in the Ottawa area.', tags: ['Free legal aid', 'Low-income support', 'Community-based'], website: 'https://socls.org/' },
      { name: 'Canadian Council for Refugees', loc: 'National', desc: 'National organization providing legal advocacy and refugee protection policy expertise.', tags: ['Legal Advocacy', 'Policy Development', 'National Coverage'], website: 'https://ccrweb.ca/' }
    ]
  },
  {
    id: 'health',
    title: 'Healthcare & Mental Health',
    desc: 'Comprehensive healthcare services with LGBTQ+ specialization, trauma-informed counseling, and culturally competent support.',
    emoji: '❤️',
    bgColor: 'bg-pink-50',
    accent: 'text-pink-600',
    partners: [
      { name: 'Sherbourne Health', loc: 'Toronto', desc: 'Comprehensive health and wellness services specifically designed for LGBTQ+ newcomers.', tags: ['Primary healthcare', 'Mental health', 'LGBTQ+ care'], website: 'https://sherbourne.on.ca/' },
      { name: 'Health Initiative for Men (HIM)', loc: 'BC', desc: 'LGBTQ+ focused mental and sexual health services with culturally competent care.', tags: ['Mental health', 'Sexual health', 'Cultural competency'], website: 'https://checkhimout.ca/' },
      { name: 'Across Boundaries', loc: 'Toronto', desc: 'Specialized mental health care services for racialized communities and newcomers.', tags: ['Racialized focus', 'Cultural competency', 'Counseling'], website: 'https://www.acrossboundaries.ca/' },
      { name: 'Canadian Centre for Victims of Torture', loc: 'Toronto', desc: 'Specialized trauma counseling and comprehensive support for survivors of torture.', tags: ['Trauma counseling', 'Survivor support', 'Comprehensive care'], website: 'https://ccvt.org/' },
      { name: 'Centretown Community Health Centre', loc: 'Ottawa', desc: 'Rainbow Health Program offering LGBTQ+ specific counseling and sexual health support.', tags: ['LGBTQ+ counseling', 'Sexual health', 'Rainbow Program'], website: 'https://www.centretownchc.org/' },
      { name: 'Kind Space', loc: 'Ottawa', desc: '2SLGBTQ+ peer groups, wellness events, and comprehensive community resources.', tags: ['Peer support groups', 'Wellness events', 'Resources'], website: 'https://kindspace.ca/' },
      { name: 'Max Ottawa', loc: 'Ottawa', desc: 'Specialized health and wellness programs for queer and two-spirit men in Ottawa.', tags: ['Queer men\'s health', 'Two-spirit support', 'Wellness programs'], website: 'https://maxottawa.ca/' }
    ]
  },
  {
    id: 'settlement',
    title: 'Settlement & Integration',
    desc: 'Comprehensive settlement services and integration programs designed to help LGBTQ+ newcomers build successful lives in Canada.',
    emoji: '🤝',
    bgColor: 'bg-yellow-50',
    accent: 'text-yellow-600',
    partners: [
      { name: 'OCASI', loc: 'Ontario', desc: 'Ontario Council of Agencies Serving Immigrants providing settlement coordination and advocacy.', tags: ['Coordination', 'Advocacy', 'Service navigation'], website: 'https://ocasi.org/' },
      { name: 'AGIR', loc: 'Montreal', desc: 'Specialized support for LGBTQ+ migrants and asylum seekers in Montreal and Quebec.', tags: ['LGBTQ+ migrants', 'Asylum seekers', 'Quebec integration'], website: 'https://www.agirmontreal.org/' },
      { name: 'Rainbow Railroad', loc: 'International', desc: 'Emergency relocation assistance for LGBTQ+ people fleeing violence and persecution.', tags: ['Emergency relocation', 'Crisis intervention', 'International'], website: 'https://www.rainbowrailroad.org/' },
      { name: 'Capital Rainbow Refuge', loc: 'Ottawa', desc: 'Private sponsorship and resettlement services for LGBTQ+ refugees in the Ottawa region.', tags: ['Private sponsorship', 'Resettlement', 'Integration'], website: 'https://capitalrainbow.ca/' },
      { name: 'Somerset West CHC', loc: 'Ottawa', desc: 'Community health services with specialized newcomer support for LGBTQ+ individuals.', tags: ['Newcomer health', 'LGBTQ+ affirming', 'Wellness'], website: 'https://www.swchc.on.ca/' },
      { name: 'OCISO', loc: 'Ottawa', desc: 'Culturally responsive settlement and mental health support for Ottawa\'s immigrant community.', tags: ['Cultural responsiveness', 'Settlement', 'Mental health'], website: 'https://ociso.org/' }
    ]
  },
  {
    id: 'employment',
    title: 'Employment & Skills Training',
    desc: 'Access employment services, skills training, and educational support to establish your professional life with inclusive guidance.',
    emoji: '💼',
    bgColor: 'bg-blue-50',
    accent: 'text-blue-600',
    partners: [
      { name: 'ACCES Employment', loc: 'Ontario', desc: 'Comprehensive employment services helping skilled immigrants find meaningful work in Ontario.', tags: ['Job search', 'Skills assessment', 'Networking'], website: 'https://accesemployment.ca/' },
      { name: 'YES Employment Services', loc: 'Toronto', desc: 'Youth and adult employment programs with career counseling and job placement support.', tags: ['Career counseling', 'Job placement', 'Skills training'], website: 'https://www.yes.on.ca/' },
      { name: 'YMCA Newcomer Information Centres', loc: 'National', desc: 'Comprehensive newcomer services including employment support and integration programs.', tags: ['Employment prep', 'Integration', 'Information'], website: 'https://www.ymca.ca/what-we-offer/immigrant-services' }
    ]
  },
  {
    id: 'youth',
    title: 'Youth & Family Services',
    desc: 'Specialized services for LGBTQ+ youth and families navigating crisis, identity, and new environments.',
    emoji: '🌱',
    bgColor: 'bg-green-50',
    accent: 'text-green-600',
    partners: [
      { name: 'Youth Services Bureau', loc: 'Ottawa', desc: 'Comprehensive youth services including crisis support, housing, and mental health programs.', tags: ['Crisis intervention', 'Youth housing', 'Mental health'], website: 'https://www.ysb.ca/' },
      { name: 'Skylark Youth', loc: 'Toronto', desc: 'LGBTQ+ youth programming offering peer support, leadership development, and community building.', tags: ['Peer support', 'Leadership', 'Community building'], website: 'https://lumenus.ca/' }, // Skylark is now Lumenus Community Services
      { name: 'Egale Youth OUTreach', loc: 'Toronto', desc: 'National LGBTQ+ youth outreach providing educational resources, advocacy, and support programs.', tags: ['Resources', 'Youth advocacy', 'Support programs'], website: 'https://egale.ca/' },
      { name: 'Kind Space - Youth Programs', loc: 'Ottawa', desc: 'Youth-specific peer support, mentorship programs, and safe spaces for 2SLGBTQ+ young people.', tags: ['Youth peer support', 'Mentorship', 'Safe spaces'], website: 'https://kindspace.ca/' }
    ]
  }
];

export default function ServiceDirectory() {
  return (
    <section id="directory" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-24">
        {SERVICE_CATEGORIES.map((category) => (
          <div key={category.id} className="scroll-mt-24">
            
            {/* Category Header */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-10 border-b border-gray-100 pb-8">
              <div className={`w-20 h-20 rounded-2xl ${category.bgColor} flex items-center justify-center text-4xl shadow-sm flex-shrink-0`}>
                {category.emoji}
              </div>
              <div>
                <h2 className="font-display font-bold text-3xl text-pride-navy mb-2">
                  {category.title}
                </h2>
                <p className="text-pride-muted text-lg max-w-3xl">
                  {category.desc}
                </p>
              </div>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.partners.map((partner, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${category.bgColor} ${category.accent}`}>
                      📍 {partner.loc}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-pride-navy mb-3 group-hover:text-pride-purple transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-pride-muted text-sm mb-6 flex-grow">
                    {partner.desc}
                  </p>

                  <div className="space-y-4 mt-auto">
                    <ul className="flex flex-wrap gap-2">
                      {partner.tags.map((tag, i) => (
                        <li key={i} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md border border-gray-100">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Website Button */}
                    <a 
                      href={partner.website !== 'PASTE_LINK_HERE' ? partner.website : '#'} 
                      target={partner.website !== 'PASTE_LINK_HERE' ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-2.5 rounded-xl border-2 border-gray-100 text-pride-navy font-semibold text-sm hover:border-pride-purple hover:text-pride-purple transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}