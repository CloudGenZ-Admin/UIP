import React, { useState } from 'react';

const REGIONS = ['All Regions', 'East Africa', 'West Africa', 'Caribbean', 'North Africa'];

const NEWS_DATA = [
  {
    category: 'Legal Rights', region: 'East Africa',
    title: 'Uganda Parliament Passes Anti-LGBTQ+ Bill, Sparking International Concern',
    desc: 'The Ugandan parliament has passed legislation that significantly restricts LGBTQ+ rights, prompting calls for increased refugee protection programs.',
    source: 'BBC News Africa', date: '3/10/2024'
  },
  {
    category: 'Community Organizing', region: 'Caribbean',
    title: 'Caribbean Pride Organizations Unite for Regional LGBTQ+ Conference',
    desc: 'LGBTQ+ advocacy groups across the Caribbean are organizing a historic regional conference to address discrimination and promote inclusion.',
    source: 'Caribbean News Now', date: '3/8/2024'
  },
  {
    category: 'Legal Rights', region: 'West Africa',
    title: 'Ghana High Court Ruling Delays Anti-LGBTQ+ Legislation',
    desc: "Ghana's Supreme Court has temporarily halted the passage of controversial anti-LGBTQ+ legislation pending constitutional review.",
    source: 'Reuters Africa', date: '3/5/2024'
  },
  {
    category: 'Legal Victory', region: 'Caribbean',
    title: 'Trinidad and Tobago Decriminalizes Same-Sex Relations',
    desc: "In a landmark decision, Trinidad and Tobago's High Court has struck down laws criminalizing consensual same-sex relations.",
    source: 'Guardian Caribbean', date: '2/28/2024'
  },
  {
    category: 'Healthcare', region: 'East Africa',
    title: 'Kenya LGBTQ+ Organizations Launch Mental Health Initiative',
    desc: 'Leading LGBTQ+ organizations in Kenya have launched a comprehensive mental health support program for sexual and gender minorities.',
    source: 'The Standard Kenya', date: '2/25/2024'
  },
  {
    category: 'Community Events', region: 'Caribbean',
    title: 'Barbados Pride Festival Celebrates 10th Anniversary',
    desc: 'Barbados Pride marks a decade of visibility and advocacy with its largest celebration yet, featuring regional and international speakers.',
    source: 'Barbados Today', date: '2/20/2024'
  }
];

export default function GlobalNews() {
  const [activeTab, setActiveTab] = useState('All Regions');

  const filteredNews = activeTab === 'All Regions' 
    ? NEWS_DATA 
    : NEWS_DATA.filter(news => news.region === activeTab);

  return (
    <section className="py-24 px-6 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-pride-navy mb-4">
            African & Caribbean LGBTQ+ News
          </h2>
          <p className="text-pride-muted text-lg">Curated updates on rights, developments, and advocacy</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {REGIONS.map(region => (
            <button
              key={region}
              onClick={() => setActiveTab(region)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === region 
                  ? 'bg-pride-navy text-white shadow-md' 
                  : 'bg-white text-pride-muted hover:text-pride-navy border border-gray-200 hover:border-pride-navy'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredNews.map((news, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-white hover:border-purple-100 transition-colors">
              <div className="flex gap-2 mb-4">
                <span className="bg-purple-100 text-pride-purple text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {news.category}
                </span>
                <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {news.region}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-pride-navy mb-3 line-clamp-2">
                {news.title}
              </h3>
              <p className="text-pride-muted text-sm leading-relaxed mb-6 line-clamp-3">
                {news.desc}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-medium text-gray-400">
                  {news.source} • {news.date}
                </span>
                <a href="#" className="text-pride-navy font-bold text-sm hover:text-pride-purple transition-colors">
                  Read More →
                </a>
              </div>
            </div>
          ))}
          
          {filteredNews.length === 0 && (
            <div className="col-span-full text-center py-12 text-pride-muted">
              No news articles found for {activeTab} at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}