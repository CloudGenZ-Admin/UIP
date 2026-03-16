import React from 'react';
import { NavLink } from 'react-router-dom';
export default function ProgramsCTA() {
  return (
    <section className="py-20 px-6 bg-pride-sand">
      <div className="max-w-4xl mx-auto">
        {/* Gradient Border Wrapper */}
        <div className="rounded-3xl p-0.5 shadow-xl" style={{ background: 'linear-gradient(135deg, #b8a7e0, #7dcbb8)' }}>
          <div className="bg-white rounded-[calc(1.5rem-2px)] p-10 md:p-14 text-center">

            <span className="text-4xl mb-4 block">🌈</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-pride-navy mb-6">
              Your Healing Journey Starts Here
            </h2>
            <p className="text-pride-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join a community that understands your story, celebrates your identity, and supports your dreams. Every program is designed with your unique needs and experiences in mind.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <NavLink to="/support" className="bg-gradient-cta text-white font-semibold px-8 py-3.5 rounded-full shadow-md hover:opacity-90 transition-opacity">
                Join Our Programs
              </NavLink>
              <NavLink to="/contact" className="border-2 border-pride-lavender text-pride-purple font-semibold px-8 py-3.5 rounded-full hover:bg-purple-50 transition-colors">
                Ask Questions
              </NavLink>
              <NavLink to="/volunteer" className="text-pride-muted font-semibold px-6 py-3.5 hover:text-pride-navy transition-colors underline decoration-2 underline-offset-4">
                Become a Peer Leader
              </NavLink>
            </div>

            {/* Newsletter Mini-form */}
            <div className="max-w-md mx-auto border-t border-gray-100 pt-8 mt-8">
              <h4 className="font-bold text-pride-navy mb-2">Stay Connected & Informed</h4>
              <p className="text-sm text-pride-muted mb-4">Get updates on programs, resources, and community news delivered to your inbox</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all text-sm"
                />
                <button className="bg-pride-navy text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all">
                  Sign Up
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}