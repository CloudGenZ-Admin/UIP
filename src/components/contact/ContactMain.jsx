import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import { apiService } from '../../api/apiService'; // Make sure this path matches your folder structure!

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
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'General Information',
    message: ''
  });

  // Submission Status State
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      // Calling the API Service
      await apiService.submitContact(formData);

      // On Success
      setStatus({ loading: false, success: true, error: '' });

      // Reset the form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'General Information',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setStatus((prev) => ({ ...prev, success: false })), 5000);

    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again later.' });
    }
  };

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

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(Optional)"
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">I'm interested in:</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none font-bold text-slate-600"
                >
                  <option>General Information</option>
                  <option>Joining a Program</option>
                  <option>Volunteering</option>
                  <option>Making a Donation</option>
                  <option>Corporate Partnering</option>
                  <option>Media & Press</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us how we can help..."
                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#A855F7] transition-all outline-none resize-none"
                required
              ></textarea>
            </div>

            {/* Status Messages */}
            {status.success && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl font-bold">
                Thank you! Your message has been sent successfully. 💜
              </div>
            )}
            {status.error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl font-bold">
                {status.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className={`w-full py-5 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all ${status.loading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
            >
              {status.loading ? 'Sending Message...' : 'Send Message 💜'}
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
            <div className="flex gap-4 mb-4">
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
            <p className='text-sm text-slate-500'>Stay updated with our events, stories, and community highlights</p>
          </div>

          {/* Map */}
          <div className="relative w-full h-[300px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d8805.130692564679!2d-75.68435945241849!3d45.37935242108252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d21.547494!2d78.60014749999999!4m5!1s0x4cce0609e36febf7%3A0x840991e9373515c1!2s2451%20Riverside%20Dr.%2C%20Ottawa%2C%20ON%20K1H%207X7%2C%20Canada!3m2!1d45.382172999999995!2d-75.6833748!5e0!3m2!1sen!2sin!4v1774372991048!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
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

// Reusable Contact Block Component
function ContactBlock({ icon, title, detail, sub }) {
  return (
    <div className="flex gap-6">
      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shrink-0 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-1">{title}</h4>
        <div className="text-xl font-black text-slate-900 mb-1">{detail}</div>
        <p className="text-sm text-slate-500">{sub}</p>
      </div>
    </div>
  );
}