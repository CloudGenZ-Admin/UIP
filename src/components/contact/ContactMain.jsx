import React from 'react';

export default function ContactMain() {
  return (
    <section className="py-20 px-6 bg-white relative -mt-10 z-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-3 bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-lg">
          <div className="mb-8">
            <h2 className="font-display font-bold text-3xl text-pride-navy mb-2">Send Us a Message</h2>
            <p className="text-pride-muted">Fill out the form below and our team will get back to you.</p>
          </div>

          <form className="space-y-6 text-left">
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
                <input type="tel" placeholder="(Optional)" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-pride-navy mb-2">I'm interested in:</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all text-pride-navy">
                  <option>General Information</option>
                  <option>Joining a Program</option>
                  <option>Getting Support</option>
                  <option>Volunteering</option>
                  <option>Partnering / Sponsoring</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-pride-navy mb-2">Message *</label>
              <textarea 
                rows="5" 
                placeholder="Tell us how we can help or how you'd like to get involved..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pride-purple focus:ring-1 focus:ring-pride-purple transition-all resize-none"
                required
              ></textarea>
              <p className="text-xs text-right text-gray-400 mt-1">0/500 characters</p>
            </div>

            <button type="submit" className="w-full bg-gradient-cta text-white font-bold text-lg px-8 py-4 rounded-xl shadow-md hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Contact Info & Map */}
        <div className="lg:col-span-2 flex flex-col h-full">
          <div>
            <h2 className="font-display font-bold text-3xl text-pride-navy mb-6">Connect With Us</h2>
            
            <div className="space-y-6">
              <ContactBlock 
                icon="✉️" 
                title="Email Us" 
                detail="info@unitedinpride.ca" 
                sub="We typically respond within 24 hours" 
                color="bg-purple-100 text-purple-600"
              />
              <ContactBlock 
                icon="📞" 
                title="Call Us" 
                detail="(437) 665-9413" 
                sub="Monday - Friday, 9AM - 5PM EST" 
                color="bg-teal-100 text-teal-600"
              />
              <ContactBlock 
                icon="📍" 
                title="Visit Us" 
                detail="Ottawa, Ontario" 
                sub="Programs held at various community locations" 
                color="bg-pink-100 text-pink-600"
              />
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-gray-100 mb-8">
            <h3 className="font-bold text-xl text-pride-navy mb-4">Follow Our Journey</h3>
            <div className="flex gap-4">
              {['📸', '🐦', '💼', '📘'].map((social, i) => (
                <button key={i} className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-xl hover:bg-pride-purple hover:text-white transition-colors shadow-sm">
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-auto relative w-full h-[280px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179262.2474011326!2d-75.83652875151241!3d45.3606629910901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'contrast(1.1) opacity(0.9)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ottawa Location Map"
              className="group-hover:opacity-100 transition-opacity duration-500"
            ></iframe>
            
            {/* Glass-morphism Overlay Card */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-sm border border-white/50 flex items-center gap-3 pointer-events-none">
              <div className="w-10 h-10 bg-pride-purple/10 rounded-full flex items-center justify-center text-xl">
                🗺️
              </div>
              <div>
                <h4 className="font-bold text-pride-navy text-sm leading-tight">Find Us</h4>
                <p className="text-xs text-pride-muted font-medium">Ottawa's vibrant community</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function ContactBlock({ icon, title, detail, sub, color }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${color}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-pride-navy">{title}</h4>
        <p className="text-pride-purple font-semibold text-lg">{detail}</p>
        <p className="text-sm text-pride-muted">{sub}</p>
      </div>
    </div>
  );
}