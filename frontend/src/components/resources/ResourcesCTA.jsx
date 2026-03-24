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

            <span className="text-6xl mb-8 block">🤝</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Need More Help?
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Can't find what you're looking for? Our support team is here to connect you with the right resources, services, and community care.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <div className="flex flex-wrap justify-center gap-4 mb-16">
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

            {/* Newsletter Integrated */}
            <div className="max-w-md mx-auto border-t border-slate-100 pt-12">
              <h4 className="font-bold text-slate-900 mb-2 text-xl">Stay Connected & Informed</h4>
              <p className="text-sm text-slate-500 mb-8">Get updates on programs, resources, and community news delivered to your inbox</p>
              <form className="flex gap-2 p-1.5 bg-slate-50 rounded-full border border-slate-200" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-none rounded-full px-6 py-3 outline-none font-bold text-slate-700"
                  required
                />
                <button type="submit" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all shadow-md">
                  Sign Up
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}