import React from 'react';

export default function WellnessForm() {
  return (
    <div className="min-h-screen bg-teal-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
        
        {/* Main Form Area */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-8 md:p-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-pride-navy mb-4">
            Book Your Wellness Session
          </h1>
          <p className="text-pride-muted text-lg mb-10">
            Take the first step toward healing and community connection. Our wellness sessions provide a safe, supportive space for LGBTQ+ newcomers to share experiences and build resilience together.
          </p>

          <form className="space-y-12" onSubmit={e => e.preventDefault()}>
            {/* Section 1 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">1</span>
                <h2 className="font-display font-bold text-2xl text-pride-navy">Personal Information</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Full Name *</label>
                  <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Pronouns</label>
                  <input type="text" placeholder="e.g., she/her, he/him, they/them" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Email Address *</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Phone Number (optional)</label>
                  <input type="tel" placeholder="For session reminders" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">2</span>
                <h2 className="font-display font-bold text-2xl text-pride-navy">Session Preferences</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-3">Type of Wellness Session *</label>
                  <div className="space-y-3">
                    {['Group Support Circle', 'Individual Wellness Session', 'Mindfulness & Healing Session', 'Flexible - I need help choosing'].map(type => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer text-pride-muted">
                        <input type="radio" name="sessionType" className="w-4 h-4 text-teal-600 focus:ring-teal-500" required /> {type}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-2">Preferred Date Range</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none">
                      <option>Select preferred timing</option>
                      <option>Next 7 days</option>
                      <option>Next 14 days</option>
                      <option>Next month</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-2">Time Preference</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none">
                      <option>Select time preference</option>
                      <option>Mornings</option>
                      <option>Afternoons</option>
                      <option>Evenings</option>
                      <option>Weekends</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-3">Have you participated in wellness sessions with United in Pride before?</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer text-pride-muted"><input type="radio" name="attended_well" className="w-4 h-4 text-teal-600 focus:ring-teal-500" /> Yes</label>
                    <label className="flex items-center gap-2 cursor-pointer text-pride-muted"><input type="radio" name="attended_well" className="w-4 h-4 text-teal-600 focus:ring-teal-500" /> No, this is my first time</label>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">3</span>
                <h2 className="font-display font-bold text-2xl text-pride-navy">Goals & Needs</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">What challenges are you currently facing? (optional)</label>
                  <textarea rows="3" placeholder="Share what you feel comfortable sharing about your current situation..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none resize-none"></textarea>
                  <p className="text-xs text-gray-400 mt-1 text-right">0/500 characters</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">What specific goals do you have for wellness sessions? (optional)</label>
                  <textarea rows="3" placeholder="What would you like to achieve or work on during these sessions?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none resize-none"></textarea>
                  <p className="text-xs text-gray-400 mt-1 text-right">0/500 characters</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Accessibility Needs or Accommodations</label>
                  <textarea rows="2" placeholder="e.g., wheelchair access, ASL interpretation, quiet space, etc." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none resize-none"></textarea>
                  <p className="text-xs text-gray-400 mt-1 text-right">0/500 characters</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">4</span>
                <h2 className="font-display font-bold text-2xl text-pride-navy">Emergency Contact & Consent</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Emergency Contact Name</label>
                  <input type="text" placeholder="Emergency contact person" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Emergency Contact Phone</label>
                  <input type="tel" placeholder="Emergency contact number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-semibold text-pride-navy mb-2">Additional Notes or Questions</label>
                <textarea rows="2" placeholder="Any additional information you'd like to share or questions you have..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none resize-none"></textarea>
                <p className="text-xs text-gray-400 mt-1 text-right">0/500 characters</p>
              </div>

              <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <label className="flex items-start gap-4 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded text-teal-600 focus:ring-teal-500" required />
                  <div className="text-sm text-pride-muted">
                    <strong className="text-pride-navy block mb-1">Consent to Participate *</strong>
                    I understand that wellness sessions are supportive in nature and not a substitute for professional medical or mental health treatment. I consent to participate in group or individual sessions and understand the voluntary nature of sharing.
                  </div>
                </label>
                <label className="flex items-start gap-4 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded text-teal-600 focus:ring-teal-500" required />
                  <div className="text-sm text-pride-muted">
                    <strong className="text-pride-navy block mb-1">Privacy & Confidentiality Agreement *</strong>
                    I agree to maintain confidentiality about what is shared in sessions and understand that United in Pride will protect my privacy according to their privacy policy. I may discontinue participation at any time.
                  </div>
                </label>
              </div>
            </section>

            <button type="submit" className="w-full bg-gradient-cta text-white font-bold text-lg py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg">
              Book Wellness Session
            </button>
            <p className="text-center text-sm text-pride-muted">
              Questions about wellness sessions? <a href="#" className="text-teal-600 font-semibold hover:underline">Contact our team</a>
            </p>
          </form>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          {/* About Card */}
          <div className="bg-white rounded-3xl shadow-sm p-8 border-t-8 border-teal-500">
            <h3 className="font-display font-bold text-2xl text-pride-navy mb-2">About Our Sessions</h3>
            <p className="text-sm text-pride-muted mb-8 pb-6 border-b border-gray-100">Safe, confidential, and culturally affirming support</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-pride-navy mb-2 flex items-center gap-2"><span className="text-teal-500">👥</span> Group Support Circles</h4>
                <p className="text-sm text-pride-muted mb-2">Connect with others who share similar experiences in a supportive group environment.</p>
                <ul className="text-xs text-pride-muted space-y-1 ml-6 list-disc">
                  <li>Weekly sessions</li>
                  <li>6-8 participants</li>
                  <li>90 minutes duration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-pride-navy mb-2 flex items-center gap-2"><span className="text-teal-500">👤</span> Individual Wellness</h4>
                <p className="text-sm text-pride-muted mb-2">One-on-one sessions focused on your personal journey and specific needs.</p>
                <ul className="text-xs text-pride-muted space-y-1 ml-6 list-disc">
                  <li>Flexible scheduling</li>
                  <li>Personalized approach</li>
                  <li>60 minutes duration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-pride-navy mb-2 flex items-center gap-2"><span className="text-teal-500">🧘</span> Mindfulness & Healing</h4>
                <p className="text-sm text-pride-muted mb-2">Guided mindfulness, meditation, and healing practices for emotional wellness.</p>
                <ul className="text-xs text-pride-muted space-y-1 ml-6 list-disc">
                  <li>Trauma-informed approach</li>
                  <li>Cultural integration</li>
                  <li>75 minutes duration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What to Expect Card */}
          <div className="bg-teal-900 rounded-3xl shadow-sm p-8 text-white">
            <h3 className="font-display font-bold text-xl mb-6 text-teal-100">What to Expect</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-white mb-1">Safe & Confidential</h4>
                <p className="text-sm text-teal-200">All sessions are conducted in a judgment-free environment where confidentiality is strictly maintained.</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Trauma-Informed</h4>
                <p className="text-sm text-teal-200">Our facilitators are trained in trauma-informed practices and cultural competency for LGBTQ+ experiences.</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Community Focused</h4>
                <p className="text-sm text-teal-200">Build connections with others while working on personal healing and growth.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}