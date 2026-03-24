import React from 'react';

export default function SupportFormCTA() {
  return (
    <section className="py-20 px-6 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">
        {/* Gradient Border Wrapper */}
        <div className="rounded-3xl p-0.5 shadow-xl" style={{ background: 'linear-gradient(135deg, #b8a7e0, #7dcbb8)' }}>
          <div className="bg-white rounded-[calc(1.5rem-2px)] p-8 md:p-14">
            
            <div className="text-center mb-10">
              <span className="text-4xl mb-4 block">💌</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-pride-navy mb-4">
                Need Personalized Support?
              </h2>
              <p className="text-pride-muted text-lg max-w-2xl mx-auto">
                Every journey is unique. Share your specific needs with us and we'll connect you with the right resources, services, and support tailored to your situation.
              </p>
            </div>

            <form className="max-w-2xl mx-auto space-y-6 text-left">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Full Name *</label>
                  <input type="text" placeholder="Your full name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Email Address *</label>
                  <input type="email" placeholder="your@email.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Phone Number</label>
                  <input type="tel" placeholder="Optional - for faster response" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Primary Support Need *</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all text-pride-navy" required>
                    <option value="" disabled selected>Select your primary need</option>
                    <option value="housing">Housing & Shelter</option>
                    <option value="legal">Legal & Immigration</option>
                    <option value="health">Healthcare & Mental Health</option>
                    <option value="settlement">Settlement & Integration</option>
                    <option value="employment">Employment & Training</option>
                    <option value="youth">Youth Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-pride-navy mb-3">How urgent is your need?</label>
                <div className="grid grid-cols-3 gap-3">
                  <label className="cursor-pointer">
                    <input type="radio" name="urgency" className="peer sr-only" value="low" />
                    <div className="text-center px-3 py-3 rounded-xl border border-gray-200 peer-checked:border-teal-500 peer-checked:bg-teal-50 hover:bg-gray-50 transition-all">
                      <div className="font-bold text-pride-navy text-sm">Low</div>
                      <div className="text-xs text-pride-muted mt-1">Wait a few days</div>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="urgency" className="peer sr-only" value="normal" defaultChecked />
                    <div className="text-center px-3 py-3 rounded-xl border border-gray-200 peer-checked:border-purple-500 peer-checked:bg-purple-50 hover:bg-gray-50 transition-all">
                      <div className="font-bold text-pride-navy text-sm">Normal</div>
                      <div className="text-xs text-pride-muted mt-1">Within 24-48 hours</div>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="urgency" className="peer sr-only" value="high" />
                    <div className="text-center px-3 py-3 rounded-xl border border-red-200 peer-checked:border-red-500 peer-checked:bg-red-50 hover:bg-red-50 transition-all">
                      <div className="font-bold text-red-600 text-sm">High</div>
                      <div className="text-xs text-red-500 mt-1">Same day response</div>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-pride-navy mb-2">Tell Us About Your Situation *</label>
                <textarea 
                  rows="4" 
                  placeholder="Share as much or as little as you're comfortable with. We're here to listen..." 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all resize-none"
                  required
                ></textarea>
                <p className="text-xs text-right text-gray-400 mt-1">0/500 characters</p>
              </div>

              <div className="text-center pt-4 border-t border-gray-100">
                <button type="submit" className="w-full sm:w-auto bg-gradient-cta text-white font-bold text-lg px-10 py-4 rounded-full shadow-md hover:opacity-90 transition-opacity">
                  Send Support Request
                </button>
                <p className="text-sm text-pride-muted mt-4">
                  We typically respond within 24 hours. For immediate crisis support, please use the resources above.
                </p>
              </div>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}