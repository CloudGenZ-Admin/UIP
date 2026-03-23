import React from 'react';
import { motion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  Linkedin, // LinkedIn add kiya gaya hai
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

const formCardStyle = {
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B22, #A855F722, #3B82F622)',
};

 // Social Media Links Array
  const socialLinks = [
    { 
      i: <Instagram size={19} />, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/unite_in_pride?igsh=Z3VtdjJsaTB5ZTR3&utm_source=qr' 
    },
    { 
      i: <Facebook size={19} />, 
      label: 'Facebook', 
      href: 'https://www.facebook.com/people/United-in-Pride/61579117565491/?mibextid=wwXIfr&rdid=yKDvw6J1FEk8NY4q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19nM1NbmSt%2F%3Fmibextid%3DwwXIfr' 
    },
    { 
      i: <Linkedin size={19} />, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/youpride/' 
    },
    { 
      // TikTok Custom SVG Icon
      i: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ), 
      label: 'TikTok', 
      href: 'https://www.tiktok.com/@unitedinpride1?_t=ZS-8yhxvJbUwYi&_r=1' 
    }
  ];

export default function ContactMain() {
  return (
    <section className="py-24 px-6 bg-white relative z-10">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-5 gap-16 items-start">
        
        {/* Left Column: Form with Gradient Border */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          style={formCardStyle}
          className="lg:col-span-3 bg-white border-2 border-transparent rounded-[3rem] p-8 md:p-12 shadow-2xl"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Send Us a Message</h2>
            <p className="text-slate-500">Fill out the form below and our team will get back to you.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Full Name *</label>
                <input type="text" placeholder="Your full name" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Email Address *</label>
                <input type="email" placeholder="your@email.com" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Phone Number</label>
                <input type="tel" placeholder="(Optional)" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">I'm interested in:</label>
                <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold text-slate-600">
                  <option>General Information</option>
                  <option>Joining a Program</option>
                  <option>Getting Support</option>
                  <option>Volunteering</option>
                  <option>Partnering / Sponsoring</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-2">Message *</label>
              <textarea 
                rows="5" 
                placeholder="Tell us how we can help..." 
                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none resize-none"
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full py-5 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Send Message 💜
            </button>
          </form>
        </motion.div>

        {/* Right Column: Info & Map */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 space-y-12"
        >
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-8">Connect With Us</h2>
            <div className="space-y-8">
              <ContactBlock icon="✉️" title="Email Us" detail="info@unitedinpride.ca" sub="We typically respond within 24 hours" />
              <ContactBlock icon="📞" title="Call Us" detail="(437) 665-9413" sub="Monday - Friday, 9AM - 5PM EST" />
              <ContactBlock icon="📍" title="Visit Us" detail="Ottawa, Ontario" sub="Programs held at various community locations" />
              
              {/* Added Office Hours Here */}
              <ContactBlock 
                icon="🕒" 
                title="Office Hours" 
                detail={
                  <>
                    <span className="text-lg">Monday - Friday: 9:00 AM - 5:00 PM</span>
                    <br />
                    <span className="text-lg">Saturday: 10:00 AM - 2:00 PM</span>
                  </>
                } 
                sub="Programs available evenings and weekends" 
              />
            </div>
          </div>

          <div className="pt-5 border-t border-slate-100">
            <h3 className="font-bold text-xl text-slate-900 mb-6">Follow Our Journey</h3>
            <div className="flex gap-4">
             {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-[42px] h-[42px] rounded-full bg-[rgba(203,17,17,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#FF6B6B] hover:to-[#750ad9] hover:-translate-y-[3px] text-[rgba(217,21,21,0.8)] hover:text-white"
                >
                  {s.i}
                </a>
              ))}
            
            </div>
              <h1 className='text-sm'>Stay updated with our events, stories, and community highlights</h1>
          </div>

          {/* Map */}
          <div className="relative w-full h-[300px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179262.2474011326!2d-75.83652875151241!3d45.3606629910901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Map"
            ></iframe>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/50 pointer-events-none">
              <p className="font-black text-slate-900 text-sm">📍 Based in Ottawa</p>
              <p className="text-[0.7rem] text-slate-500 font-bold uppercase tracking-widest">Serving Canada Nationwide</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ContactBlock({ icon, title, detail, sub }) {
  return (
    <div className="flex gap-6">
      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shrink-0 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-xl font-black text-slate-900 mb-1">{detail}</p>
        <p className="text-sm text-slate-500">{sub}</p>
      </div>
    </div>
  );
}