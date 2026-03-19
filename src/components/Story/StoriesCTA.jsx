import React from 'react';
import { Link } from 'react-router-dom';

export default function StoriesCTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div 
          className="rounded-[3rem] p-[2px] shadow-2xl" 
          style={{ backgroundImage: 'linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)' }}
        >
          <div className="bg-white rounded-[calc(3rem-2px)] py-16 px-8 md:px-16 text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Every Story Matters</h2>
            <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
              Your journey can light the way for others. Join our community and help create a world where 
              every LGBTQ+ person can live authentically and safely.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/programs" className="px-10 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                Join Our Community
              </Link>
              <Link to="/about" className="px-10 py-4 border-2 border-[#A855F7] text-[#A855F7] rounded-full font-bold hover:bg-purple-50 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}