import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROVINCES = [
  "All Provinces/Territories", "Alberta", "British Columbia", "Manitoba", "New Brunswick", 
  "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", 
  "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"
];

const SUPPORT_TYPES = [
  "All Support Types", "Housing", "Legal", "Healthcare", "Mental Health", 
  "Settlement", "Employment/Education", "Youth & Family", "Faith & Spiritual Support"
];

const RESOURCES = [
  { id: 1, name: "Rainbow Refugee", summary: "Supporting LGBTQ+ refugees and asylum seekers with legal aid, settlement services, and community connections.", location: "Vancouver, BC", province: "British Columbia", type: "Legal", website: "https://rainbowrefugee.com", phone: "(604) 684-6869" },
  { id: 2, name: "The 519 Community Centre", summary: "Comprehensive LGBTQ+ services including housing support, health programs, and settlement assistance.", location: "Toronto, ON", province: "Ontario", type: "Settlement", website: "https://the519.org", phone: "(416) 392-6874" },
  { id: 3, name: "QMUNITY", summary: "BC's resource centre for LGBTQ+ people offering health services, support groups, and advocacy.", location: "Vancouver, BC", province: "British Columbia", type: "Healthcare", website: "https://qmunity.ca", phone: "(604) 684-5307" },
  { id: 4, name: "Centre for Spanish Speaking Peoples", summary: "Settlement services with specialized LGBTQ+ newcomer programs and cultural support.", location: "Toronto, ON", province: "Ontario", type: "Settlement", website: "https://spanishservices.org", phone: "(416) 533-8545" },
  { id: 5, name: "Egale Canada", summary: "National advocacy organization providing legal resources and human rights support for LGBTQ+ individuals.", location: "Toronto, ON", province: "Ontario", type: "Legal", website: "https://egale.ca", phone: "(416) 964-7887" },
  { id: 6, name: "Pride Centre of Edmonton", summary: "Community hub offering mental health support, housing assistance, and peer counseling services.", location: "Edmonton, AB", province: "Alberta", type: "Mental Health", website: "https://pridecentreofedmonton.org", phone: "(780) 488-3234" },
  { id: 7, name: "Fierté Canada Pride", summary: "National network connecting LGBTQ+ newcomers with Pride organizations across Canada.", location: "Ottawa, ON", province: "Ontario", type: "Settlement", website: "https://fiertecanadapride.org", phone: "(613) 230-1043" },
  { id: 8, name: "Out Saskatoon", summary: "Saskatchewan's LGBTQ+ resource centre providing support groups, advocacy, and community programs.", location: "Saskatoon, SK", province: "Saskatchewan", type: "Mental Health", website: "https://outsaskatoon.ca", phone: "(306) 665-1224" },
  { id: 9, name: "Aids Committee of Toronto", summary: "HIV/AIDS support services with specialized programs for LGBTQ+ immigrants and refugees.", location: "Toronto, ON", province: "Ontario", type: "Healthcare", website: "https://actoronto.org", phone: "(416) 340-2437" },
  { id: 10, name: "OUTSaskatoon Youth", summary: "Youth-focused programs providing safe spaces, mentorship, and educational support for LGBTQ+ young people.", location: "Saskatoon, SK", province: "Saskatchewan", type: "Youth & Family", website: "https://outsaskatoon.ca/youth", phone: "(306) 665-1224" },
  { id: 11, name: "Affirmation Canada", summary: "Faith-based support network for LGBTQ+ individuals seeking spiritual community and religious resources.", location: "Calgary, AB", province: "Alberta", type: "Faith & Spiritual Support", website: "https://affirmation.ca", phone: "(403) 265-3434" },
  { id: 12, name: "Halifax Pride", summary: "Maritime LGBTQ+ resource centre offering employment workshops, housing referrals, and community connections.", location: "Halifax, NS", province: "Nova Scotia", type: "Employment/Education", website: "https://halifaxpride.com", phone: "(902) 429-7729" }
];

const cardStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B22, #A855F722, #3B82F622)',
};

export default function ResourceDirectory() {
  const [province, setProvince] = useState(PROVINCES[0]);
  const [supportType, setSupportType] = useState(SUPPORT_TYPES[0]);

  const filteredResources = RESOURCES.filter(res => {
    const matchProvince = province === "All Provinces/Territories" || res.province === province;
    const matchType = supportType === "All Support Types" || res.type === supportType;
    return matchProvince && matchType;
  });

  return (
    <section id="directory" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-16 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100">
          <h2 className="text-2xl font-black text-slate-900 lg:ml-4">Find Resources</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <select 
              className="bg-slate-50 border-none rounded-xl px-6 py-4 font-bold text-slate-700 focus:ring-2 focus:ring-[#A855F7] outline-none min-w-[260px] cursor-pointer"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
            </select>

            <select 
              className="bg-slate-50 border-none rounded-xl px-6 py-4 font-bold text-slate-700 focus:ring-2 focus:ring-[#A855F7] outline-none min-w-[260px] cursor-pointer"
              value={supportType}
              onChange={(e) => setSupportType(e.target.value)}
            >
              {SUPPORT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          
          <div className="hidden lg:block mr-4 font-bold text-slate-400 text-sm tracking-widest uppercase">
            {filteredResources.length} Found
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredResources.length > 0 ? (
              filteredResources.map(res => (
                <motion.div 
                  layout
                  key={res.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={cardStyle}
                  className="bg-white rounded-[2.5rem] p-8 border-2 border-transparent shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="flex justify-between items-start mb-6 gap-4">
                    <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-[#A855F7] transition-colors">
                      {res.name}
                    </h3>
                    <span className="bg-[#FF6B6B]/10 text-[#FF6B6B] text-[0.65rem] font-black uppercase px-3 py-1 rounded-lg">
                      {res.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm font-bold text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {res.location}
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                    {res.summary}
                  </p>

                  <div className="space-y-4 mt-auto pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-3 text-sm text-slate-900 font-bold">
                      <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      {res.phone}
                    </div>
                    
                    <a 
                      href={res.website} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center justify-center w-full py-4 rounded-2xl bg-slate-50 text-slate-900 font-black text-sm hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                    >
                      Visit Website
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full py-20 text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">No resources found</h3>
                <p className="text-slate-500 mb-8">Try adjusting your filters to find support in other areas.</p>
                <button 
                  onClick={() => { setProvince(PROVINCES[0]); setSupportType(SUPPORT_TYPES[0]); }}
                  className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-black"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}