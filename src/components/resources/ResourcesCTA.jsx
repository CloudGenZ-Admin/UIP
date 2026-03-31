import React from 'react';

export default function ResourcesCTA() {
  return (
    <section className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-[1000px] mx-auto">
        <div
          className="rounded-[3.5rem] p-[2px] shadow-2xl"
          style={{ backgroundImage: 'linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)' }}
        >
          <div className="bg-white rounded-[calc(3.5rem-2px)] py-16 px-8 md:px-20 text-center">

            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#FF6B6B]/10 to-[#A855F7]/10 rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#A855F7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
               </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Need More Help?
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Can't find what you're looking for? Our support team is here to connect you with the right resources, services, and community care.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {/* Link to /support */}
              <a href="/support">
                <button className="px-10 py-4 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                  Find Help Near You
                </button>
              </a>

              <button className="px-10 py-4 border-2 border-[#A855F7] text-[#A855F7] rounded-full font-bold hover:bg-purple-50 transition-all">
                Download Guide
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}