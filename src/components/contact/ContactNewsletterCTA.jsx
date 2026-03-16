import React from 'react';

export default function ContactNewsletterCTA() {
  return (
    <section className="py-20 px-6 bg-pride-sand">
      <div className="max-w-4xl mx-auto">
        {/* Gradient Border Wrapper */}
        <div className="rounded-3xl p-0.5 shadow-xl" style={{ background: 'linear-gradient(135deg, #b8a7e0, #7dcbb8)' }}>
          <div className="bg-white rounded-[calc(1.5rem-2px)] p-10 md:p-14 text-center">
            
            <span className="text-4xl mb-4 block">💌</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-pride-navy mb-4">
              Stay Connected & Informed
            </h2>
            <p className="text-pride-muted text-lg max-w-2xl mx-auto mb-10">
              Get updates on programs, resources, volunteer opportunities, and community news delivered straight to your inbox.
            </p>

            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all"
                required
              />
              <button type="submit" className="bg-pride-navy text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md whitespace-nowrap">
                Sign Up for Updates
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}