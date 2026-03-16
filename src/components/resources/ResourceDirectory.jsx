import React, { useState } from 'react';

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

export default function ResourceDirectory() {
  const [province, setProvince] = useState(PROVINCES[0]);
  const [supportType, setSupportType] = useState(SUPPORT_TYPES[0]);

  // Filtering Logic
  const filteredResources = RESOURCES.filter(res => {
    const matchProvince = province === "All Provinces/Territories" || res.province === province;
    const matchType = supportType === "All Support Types" || res.type === supportType;
    return matchProvince && matchType;
  });

  return (
    <section id="directory" className="py-20 px-6 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Filter Header */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-12 bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="font-display font-bold text-2xl text-pride-navy hidden lg:block">Find Resources</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <select 
              className="bg-gray-50 border border-gray-200 text-pride-navy rounded-xl px-5 py-3.5 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all font-medium appearance-none min-w-[240px]"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
            </select>

            <select 
              className="bg-gray-50 border border-gray-200 text-pride-navy rounded-xl px-5 py-3.5 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all font-medium appearance-none min-w-[240px]"
              value={supportType}
              onChange={(e) => setSupportType(e.target.value)}
            >
              {SUPPORT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div className="text-pride-muted font-medium bg-gray-50 px-5 py-3.5 rounded-xl border border-gray-100 hidden sm:block">
            {filteredResources.length} <span className="font-normal">resources found</span>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map(res => (
              <div key={res.id} className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                
                <div className="flex justify-between items-start mb-5 gap-4">
                  <h3 className="font-display font-bold text-xl text-pride-navy group-hover:text-pride-purple transition-colors">
                    {res.name}
                  </h3>
                  <span className="inline-block bg-purple-50 text-pride-purple text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-purple-100">
                    {res.type}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-gray-500">
                  <span>📍</span> {res.location}
                </div>

                <p className="text-pride-muted text-sm leading-relaxed mb-8 flex-grow">
                  {res.summary}
                </p>

                <div className="space-y-4 mt-auto pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-3 text-sm text-pride-navy font-semibold">
                    <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100">📞</span>
                    {res.phone}
                  </div>
                  
                  <a href={res.website} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-gray-50 border border-gray-100 text-pride-navy font-bold text-sm hover:border-pride-purple hover:bg-white hover:text-pride-purple transition-colors shadow-sm">
                    Visit Website
                  </a>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <span className="text-6xl block mb-4">🔍</span>
              <h3 className="font-display font-bold text-2xl text-pride-navy mb-2">No resources found</h3>
              <p className="text-pride-muted">Try adjusting your filters to see more results.</p>
              <button 
                onClick={() => { setProvince(PROVINCES[0]); setSupportType(SUPPORT_TYPES[0]); }}
                className="mt-6 text-pride-purple font-semibold hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}