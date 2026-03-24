import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl p-0.5 shadow-xl" style={{ background: 'linear-gradient(135deg, #b8a7e0, #7dcbb8)' }}>
          <div className="bg-white rounded-[calc(1.5rem-2px)] p-10 md:p-16 text-center">
            
            <h2 className="font-display font-bold text-3xl md:text-5xl text-pride-navy mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-pride-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Every person who joins our community adds a new chapter to our story of resilience, healing, and hope. Whether you're looking for support, wanting to volunteer, or hoping to contribute to our mission, there's a place for you here.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-14">
              <Link to="/programs" className="bg-gradient-cta text-white font-semibold px-8 py-3.5 rounded-full shadow-md hover:opacity-90 transition-opacity">
                Join Our Programs
              </Link>
              <Link to="/donate" className="border-2 border-pride-lavender text-pride-purple font-semibold px-8 py-3.5 rounded-full hover:bg-purple-50 transition-colors">
                Support Our Mission
              </Link>
            </div>

            {/* Newsletter Subscription */}
            <div className="max-w-md mx-auto border-t border-gray-100 pt-10">
              <h4 className="font-bold text-pride-navy mb-2 text-lg">Stay Connected & Informed</h4>
              <p className="text-sm text-pride-muted mb-6">Get updates on programs, resources, and community news delivered to your inbox</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-6 py-3.5 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all text-sm"
                  required
                />
                <button type="submit" className="bg-pride-navy text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md">
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