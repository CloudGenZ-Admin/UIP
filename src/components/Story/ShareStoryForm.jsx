import React, { useState } from 'react';

export default function ShareStoryForm() {
  const [storyText, setStoryText] = useState('');

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side Content */}
        <div className="space-y-6">
          <span className="text-6xl block mb-4">✍️</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy">
            Share Your Story
          </h2>
          <p className="text-xl text-pride-muted leading-relaxed">
            Your journey matters. Help inspire others by sharing your experience with our community. What would you want other LGBTQ+ newcomers to know?
          </p>
          <div className="hidden lg:block w-full h-48 bg-gradient-to-br from-[#A58CE0] to-[#7dcbb8] rounded-3xl opacity-20 mt-8 blur-xl"></div>
        </div>

        {/* Right Side Form */}
        <div className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="space-y-1">
              <label className="text-sm font-bold text-pride-navy">Full Name</label>
              <input type="text" placeholder="Your full name (can be anonymized)" 
                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all" />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-pride-navy">Email Address *</label>
              <input type="email" placeholder="your@email.com" required
                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all" />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-end mb-1">
                <label className="text-sm font-bold text-pride-navy">Your Story *</label>
                <span className={`text-xs font-semibold ${storyText.length > 500 ? 'text-red-500' : 'text-gray-400'}`}>
                  {storyText.length}/500 characters
                </span>
              </div>
              <textarea 
                rows="5" required
                placeholder="Share your journey, challenges overcome, successes achieved, or advice for others."
                maxLength={500}
                value={storyText}
                onChange={(e) => setStoryText(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all resize-none"
              ></textarea>
            </div>

            <div className="space-y-4 pt-2 border-t border-gray-200">
              <label className="text-sm font-bold text-pride-navy block">Consent & Permissions *</label>
              
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" required className="mt-1 w-4 h-4 text-pride-purple bg-white border-gray-300 rounded focus:ring-pride-purple" />
                <span className="text-sm text-pride-muted group-hover:text-pride-navy transition-colors">
                  <strong className="text-pride-navy">I consent to publication:</strong> I give permission for United in Pride to publish my story on their website, social media, and other materials for community education and inspiration.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" required className="mt-1 w-4 h-4 text-pride-purple bg-white border-gray-300 rounded focus:ring-pride-purple" />
                <span className="text-sm text-pride-muted group-hover:text-pride-navy transition-colors">
                  <strong className="text-pride-navy">I consent to editing:</strong> I understand my story may be edited for length, clarity, or safety reasons, and I will have the opportunity to review and approve any changes before publication.
                </span>
              </label>
            </div>

            <button type="submit" className="w-full bg-gradient-cta text-white font-bold py-4 rounded-xl text-lg shadow-md hover:opacity-90 transition-opacity mt-4">
              Submit My Story
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}