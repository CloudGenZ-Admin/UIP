import React from 'react';

export default function PeerSupportForm() {
  return (
    <div className="min-h-screen bg-purple-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
        
        {/* Main Form Area */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-8 md:p-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-pride-navy mb-4">
            Wellness & Peer Support Circle Registration
          </h1>
          <p className="text-pride-muted text-lg mb-8">
            Join our confidential, safe spaces where community members can share experiences, build friendships, and support each other through the challenges of resettlement.
          </p>

          <div className="bg-purple-100/50 p-6 rounded-2xl mb-10 border border-purple-100">
            <h3 className="font-bold text-pride-navy mb-2">Confidentiality Note</h3>
            <p className="text-sm text-pride-muted">
              Your privacy is very important to us. All information shared is confidential and will only be used to support your participation. You may skip any question you don't feel comfortable answering (except where marked required).
            </p>
          </div>

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
                  <input type="text" placeholder="Enter your preferred name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Pronouns</label>
                  <input type="text" placeholder="e.g., she/her, he/him, they/them" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Email Address *</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Phone Number (optional)</label>
                  <input type="tel" placeholder="(optional)" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none" />
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">2</span>
                <h2 className="font-display font-bold text-2xl text-pride-navy">Participation Details</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Which session are you registering for?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none">
                    <option>Select a session</option>
                    <option>Weekly Evening Circle</option>
                    <option>Weekend Morning Circle</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-3">Have you attended a United in Pride session before?</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="attended" className="w-4 h-4 text-purple-600 focus:ring-purple-500" /> Yes</label>
                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="attended" className="w-4 h-4 text-purple-600 focus:ring-purple-500" /> No</label>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">3</span>
                <h2 className="font-display font-bold text-2xl text-pride-navy">Background Information</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">What country are you originally from?</label>
                  <input type="text" placeholder="Country name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-3">What is your current status in Canada?</label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {['Refugee claimant', 'Protected person', 'Permanent resident', 'Canadian citizen', 'International student', 'Work permit holder', 'Prefer not to say'].map(status => (
                      <label key={status} className="flex items-center gap-2 cursor-pointer text-pride-muted">
                        <input type="radio" name="status" className="w-4 h-4 text-purple-600 focus:ring-purple-500" /> {status}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">4</span>
                <h2 className="font-display font-bold text-2xl text-pride-navy">Accessibility & Comfort</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Do you have any accessibility needs we should know about?</label>
                  <textarea rows="3" placeholder="e.g., wheelchair access, ASL interpreter, quiet space, etc." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none resize-none"></textarea>
                  <p className="text-xs text-gray-400 mt-1 text-right">0/500 characters</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-2">Do you have any allergies, dietary preferences, or restrictions?</label>
                  <textarea rows="3" placeholder="Please list any food allergies, dietary preferences, or restrictions" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none resize-none"></textarea>
                  <p className="text-xs text-gray-400 mt-1 text-right">0/500 characters</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">5</span>
                <h2 className="font-display font-bold text-2xl text-pride-navy">LGBTQ+ Identity (Required)</h2>
              </div>
              <p className="text-pride-muted mb-4">This support circle is for members of the LGBTQ+ community. Please share how you identify (you may select more than one):</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {['Lesbian', 'Gay', 'Bisexual', 'Transgender', 'Queer', 'Two-Spirit', 'Non-binary / Gender non-conforming', 'Intersex', 'Asexual'].map(id => (
                  <label key={id} className="flex items-center gap-2 cursor-pointer text-pride-muted">
                    <input type="checkbox" className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500" /> {id}
                  </label>
                ))}
                <div className="flex items-center gap-2 mt-2 sm:col-span-2">
                  <span className="text-pride-muted">Other:</span>
                  <input type="text" placeholder="Please specify" className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-pride-navy mb-3">Age group:</label>
                <div className="flex flex-wrap gap-4">
                  {['18–24', '25–34', '35–44', '45 and above'].map(age => (
                    <label key={age} className="flex items-center gap-2 cursor-pointer text-pride-muted">
                      <input type="radio" name="age" className="w-4 h-4 text-purple-600 focus:ring-purple-500" /> {age}
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">6</span>
                <h2 className="font-display font-bold text-2xl text-pride-navy">Goals & Interests</h2>
              </div>
              <label className="block text-sm font-semibold text-pride-navy mb-3">What are you hoping to gain from this support circle? (check all that apply)</label>
              <div className="space-y-3">
                {['Safe & confidential space to share', 'Building friendships & community connection', 'Guidance on resettlement', 'Mental health support', 'Physical wellness'].map(goal => (
                  <label key={goal} className="flex items-center gap-3 cursor-pointer text-pride-muted">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500" /> {goal}
                  </label>
                ))}
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-pride-muted">Other:</span>
                  <input type="text" className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none" />
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">7</span>
                <h2 className="font-display font-bold text-2xl text-pride-navy">Consent & Privacy</h2>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-semibold text-pride-navy mb-3">Do you consent to photos/videos being taken during the session for community sharing and promotion?</label>
                <div className="flex gap-6">
                  {['Yes', 'No', 'Ask me first'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer text-pride-muted">
                      <input type="radio" name="media" className="w-4 h-4 text-purple-600 focus:ring-purple-500" /> {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <label className="flex items-start gap-4 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded text-purple-600 focus:ring-purple-500" required />
                  <div className="text-sm text-pride-muted space-y-3">
                    <p><strong className="text-pride-navy block mb-1">Privacy Agreement *</strong>I agree to respect the privacy and confidentiality of all support circle participants. I understand that what is shared in our sessions stays within our group and will not be shared outside of our support circle without explicit permission.</p>
                    <p>I also understand that United in Pride may use my anonymous feedback to improve programs and may share general program statistics (without personal identifying information) with funders and community partners.</p>
                  </div>
                </label>
              </div>
            </section>

            <button type="submit" className="w-full bg-gradient-cta text-white font-bold text-lg py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg">
              Submit Registration
            </button>
            <p className="text-center text-sm text-pride-muted">
              Questions about registration? <a href="#" className="text-purple-600 font-semibold hover:underline">Contact our team</a>
            </p>
          </form>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-3xl shadow-sm p-8 sticky top-8 border-t-8 border-purple-500">
            <h3 className="font-display font-bold text-2xl text-pride-navy mb-6">What to Expect</h3>
            <p className="text-pride-muted mb-8 pb-8 border-b border-gray-100">Your first support circle experience</p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 text-xl">👋</div>
                <div>
                  <h4 className="font-bold text-pride-navy mb-1">Welcome & Introduction</h4>
                  <p className="text-sm text-pride-muted">We start each session with a warm welcome, group guidelines, and introductions at your comfort level.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 text-xl">🛡️</div>
                <div>
                  <h4 className="font-bold text-pride-navy mb-1">Safe Sharing Space</h4>
                  <p className="text-sm text-pride-muted">Share as much or as little as you're comfortable with. Everyone's participation level is respected.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center flex-shrink-0 text-xl">🤝</div>
                <div>
                  <h4 className="font-bold text-pride-navy mb-1">Community Building</h4>
                  <p className="text-sm text-pride-muted">End with connection activities, resource sharing, and planning for ongoing support between sessions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}