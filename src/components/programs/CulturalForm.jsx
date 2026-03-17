import React from 'react';

export default function CulturalForm() {
  return (
    <div className="min-h-screen bg-pink-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()} 
          className="flex items-center gap-2 text-gray-500 hover:text-pink-600 transition-colors mb-6 font-semibold"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Go Back
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Form Area */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-8 md:p-12">
            <h1 className="font-display font-bold text-3xl md:text-4xl text-pride-navy mb-4">
              Join Our Cultural Celebrations
            </h1>
            <p className="text-pride-muted text-lg mb-10">
              Experience the richness of our diverse community through joyful celebrations that honor our heritage, build connections, and create lasting memories together.
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
                    <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-2">Pronouns</label>
                    <input type="text" placeholder="e.g., she/her, he/him, they/them" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-2">Email Address *</label>
                    <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-2">Phone Number (optional)</label>
                    <input type="tel" placeholder="For event updates" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none" />
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">2</span>
                  <h2 className="font-display font-bold text-2xl text-pride-navy">Event Interests</h2>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-pride-navy mb-4">Which celebrations are you interested in attending? (select all that apply) *</label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Pride Month Celebrations', 'Heritage & Cultural Festivals', 
                      'Holiday Gatherings', 'Seasonal Celebrations', 
                      'Community Achievement Events', 'Cultural Food Festivals', 
                      'Music & Dance Events', 'Art & Creativity Showcases', 
                      'Sports & Games Days', 'Storytelling & Poetry Nights'
                    ].map(event => (
                      <label key={event} className="flex items-center gap-3 cursor-pointer text-pride-muted">
                        <input type="checkbox" className="w-4 h-4 rounded text-pink-600 focus:ring-pink-500" /> {event}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pride-navy mb-3">Age Group</label>
                  <div className="flex flex-wrap gap-4">
                    {['18–24', '25–34', '35–44', '45–54', '55–64', '65+', 'Prefer not to say'].map(age => (
                      <label key={age} className="flex items-center gap-2 cursor-pointer text-pride-muted">
                        <input type="radio" name="event_age" className="w-4 h-4 text-pink-600 focus:ring-pink-500" /> {age}
                      </label>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">3</span>
                  <h2 className="font-display font-bold text-2xl text-pride-navy">Cultural Background</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-2">Country/Region of Origin</label>
                    <input type="text" placeholder="Optional - helps us plan inclusive events" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-2">Cultural/Ethnic Background</label>
                    <input type="text" placeholder="Optional - share what you're comfortable with" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none" />
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">4</span>
                  <h2 className="font-display font-bold text-2xl text-pride-navy">Special Needs & Preferences</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-2">Dietary Restrictions or Preferences</label>
                    <textarea rows="2" placeholder="e.g., vegetarian, halal, kosher, allergies, etc." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none resize-none"></textarea>
                    <p className="text-xs text-gray-400 mt-1 text-right">0/500 characters</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-2">Accessibility Needs</label>
                    <textarea rows="2" placeholder="e.g., wheelchair access, ASL interpretation, quiet space, etc." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none resize-none"></textarea>
                    <p className="text-xs text-gray-400 mt-1 text-right">0/500 characters</p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">5</span>
                  <h2 className="font-display font-bold text-2xl text-pride-navy">Emergency Contact & Volunteering</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-2">Emergency Contact Name</label>
                    <input type="text" placeholder="Emergency contact person" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-2">Emergency Contact Phone</label>
                    <input type="tel" placeholder="Emergency contact number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none" />
                  </div>
                </div>
                <label className="flex items-center gap-3 cursor-pointer p-4 bg-pink-50 rounded-xl border border-pink-100">
                  <input type="checkbox" className="w-5 h-5 rounded text-pink-600 focus:ring-pink-500" />
                  <span className="text-pride-navy font-semibold">I'm interested in volunteering to help with celebration planning and setup</span>
                </label>
              </section>

              {/* Section 6 */}
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-pride-navy text-white flex items-center justify-center font-bold">6</span>
                  <h2 className="font-display font-bold text-2xl text-pride-navy">Consent & Preferences</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-3">Photo and Video Consent</label>
                    <div className="flex flex-wrap gap-6">
                      {['Yes, I consent to photos/videos', 'No photos/videos please', 'Ask me first at each event'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer text-pride-muted">
                          <input type="radio" name="event_media" className="w-4 h-4 text-pink-600 focus:ring-pink-500" /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded text-pink-600 focus:ring-pink-500" defaultChecked />
                    <span className="text-pride-muted">Send me email reminders about upcoming celebrations and events</span>
                  </label>

                  <div>
                    <label className="block text-sm font-semibold text-pride-navy mb-2">Additional Comments or Questions</label>
                    <textarea rows="3" placeholder="Share any additional information, questions, or suggestions for our celebrations..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none resize-none"></textarea>
                    <p className="text-xs text-gray-400 mt-1 text-right">0/500 characters</p>
                  </div>
                </div>
              </section>

              <button type="submit" className="w-full bg-gradient-cta text-white font-bold text-lg py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg">
                Join Our Celebrations
              </button>
              <p className="text-center text-sm text-pride-muted">
                Questions about our events? <a href="#" className="text-pink-600 font-semibold hover:underline">Contact us</a>
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Upcoming Events Card */}
            <div className="bg-white rounded-3xl shadow-sm p-8 border-t-8 border-pink-500">
              <h3 className="font-display font-bold text-2xl text-pride-navy mb-2">Upcoming Events</h3>
              <p className="text-sm text-pride-muted mb-8 pb-6 border-b border-gray-100">Mark your calendar for these exciting community events</p>
              
              <div className="space-y-6">
                <div className="bg-pink-50 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-sm text-pride-navy">Pride Month Celebration</h4>
                    <span className="bg-pink-200 text-pink-800 text-xs font-bold px-4 py-1 rounded-full">Coming soon</span>
                  </div>
                  <p className="text-xs text-pride-muted mb-2">A vibrant celebration of our LGBTQ+ community with food, music, and cultural performances.</p>
                  <p className="text-xs font-semibold text-pink-600">📍 Community Centre</p>
                </div>
                
                <div className="bg-pink-50 rounded-2xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-pride-navy">Heritage Festival</h4>
                    <span className="bg-pink-200 text-pink-800 text-xs font-bold px-2 py-1 rounded-full">Coming Soon</span>
                  </div>
                  <p className="text-xs text-pride-muted mb-2">Share and experience diverse cultural traditions through food, dance, and storytelling.</p>
                  <p className="text-xs font-semibold text-pink-600">📍 Riverside Park</p>
                </div>

                <div className="bg-pink-50 rounded-2xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-pride-navy">Harvest Gathering</h4>
                    <span className="bg-pink-200 text-pink-800 text-xs font-bold px-2 py-1 rounded-full">Coming Soon</span>
                  </div>
                  <p className="text-xs text-pride-muted mb-2">Celebrate the season with traditional foods, games, and community gratitude.</p>
                  <p className="text-xs font-semibold text-pink-600">📍 Outdoor Venue</p>
                </div>
              </div>
            </div>

            {/* What to Expect Card */}
            <div className="bg-white rounded-3xl shadow-sm p-8">
              <h3 className="font-display font-bold text-xl text-pride-navy mb-6">What to Expect</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-2xl">🍲</div>
                  <div>
                    <h4 className="font-bold text-pride-navy mb-1">Delicious Food</h4>
                    <p className="text-xs text-pride-muted">Authentic dishes prepared with love. Dietary restrictions always accommodated.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">🎵</div>
                  <div>
                    <h4 className="font-bold text-pride-navy mb-1">Music & Dance</h4>
                    <p className="text-xs text-pride-muted">Cultural performances and opportunities to share your own traditions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-bold text-pride-navy mb-1">Community Connection</h4>
                    <p className="text-xs text-pride-muted">Meet new friends and build lasting relationships in an affirming environment.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}