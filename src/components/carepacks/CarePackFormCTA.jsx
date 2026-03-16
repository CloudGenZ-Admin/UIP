import React from 'react';

export default function CarePackFormCTA() {
  return (
    <section id="request-form" className="py-20 px-6 bg-pride-sand">
      <div className="max-w-4xl mx-auto">
        {/* Gradient Border Wrapper */}
        <div className="rounded-3xl p-0.5 shadow-xl" style={{ background: 'linear-gradient(135deg, #b8a7e0, #7dcbb8)' }}>
          <div className="bg-white rounded-[calc(1.5rem-2px)] p-8 md:p-14">
            
            <div className="text-center mb-10">
              <span className="text-4xl mb-4 block">📦</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-pride-navy mb-4">
                Apply for Your Welcome Care Pack
              </h2>
              <p className="text-pride-muted text-lg max-w-2xl mx-auto">
                No cost. Simply complete our 2‑minute form and we'll ship it to your Canadian address within 5 business days.
              </p>
            </div>

            <form className="max-w-2xl mx-auto space-y-6 text-left">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">First Name *</label>
                  <input type="text" placeholder="Enter your first name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Last Name *</label>
                  <input type="text" placeholder="Enter your last name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-pride-navy mb-2">Email Address *</label>
                <input type="email" placeholder="your.email@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-pride-navy mb-2">Complete Shipping Address *</label>
                <textarea 
                  rows="3" 
                  placeholder="Street address, apartment/unit number, city, province, and postal code..." 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all resize-none"
                  required
                ></textarea>
                <p className="text-xs text-right text-gray-400 mt-1">Maximum 500 characters</p>
              </div>

              <label className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border border-purple-100 cursor-pointer hover:bg-purple-100/50 transition-colors">
                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300 text-pride-purple focus:ring-pride-purple cursor-pointer" required />
                <span className="text-sm text-pride-navy font-medium leading-relaxed">
                  I consent to United in Pride using my information to process my Welcome Care Pack application and to occasionally share updates about programs and services. *
                </span>
              </label>

              <div className="text-center pt-4">
                <button type="submit" className="w-full sm:w-auto bg-gradient-cta text-white font-bold text-lg px-12 py-4 rounded-full shadow-md hover:opacity-90 transition-opacity">
                  Submit Application
                </button>
              </div>

            </form>

            {/* Newsletter Mini-form integrated at the bottom of the CTA box */}
            <div className="max-w-md mx-auto border-t border-gray-100 pt-8 mt-12 text-center">
              <h4 className="font-bold text-pride-navy mb-2">Stay Connected & Informed</h4>
              <p className="text-sm text-pride-muted mb-4">Get updates on programs, resources, and community news delivered to your inbox</p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all text-sm"
                  required
                />
                <button type="submit" className="bg-pride-navy text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all">
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