import React from 'react';

const PROGRAMS_LINKS = [
  'Wellness Circles',
  'Social Events',
  'Sports & Movement',
  'Cultural Programs',
  'Advocacy & Support',
];

const QUICK_LINKS = ['About Us', 'Our Programs', 'Get Involved', 'Contact'];

const SOCIAL = [
  {
    title: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: 'TikTok',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
  },
  {
    title: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-purple-50 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Four columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 font-display font-bold text-xl text-pride-navy">
              🌈 United in Pride
            </a>
            <p className="text-pride-muted text-sm leading-relaxed">
              A safe space for LGBTQ+ newcomers, immigrants, and refugees to heal, connect, and thrive.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {SOCIAL.map(({ icon, href, title }) => (
                <a
                  key={title}
                  href={href}
                  title={title}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-pride-muted hover:border-pride-lavender hover:text-pride-purple transition-colors shadow-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterLinkColumn heading="Quick Links" links={QUICK_LINKS} />

          {/* Programs */}
          <FooterLinkColumn heading="Programs" links={PROGRAMS_LINKS} />

          {/* Connect With Us */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-pride-navy">Connect With Us</h4>
            <ul className="space-y-2 text-sm text-pride-muted mb-4">
              <li>
                <a href="mailto:info@unitedinpride.ca" className="hover:text-pride-purple transition-colors">
                  info@unitedinpride.ca
                </a>
              </li>
            </ul>

            {/* Emergency Alerts */}
            <div className="mt-6 bg-red-50 border border-red-100 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500 text-lg">🚨</span>
                <h5 className="font-bold text-sm text-red-900">Emergency Alerts</h5>
              </div>
              <p className="text-xs text-red-700 leading-relaxed mb-3">
                Get notified about urgent community safety updates
              </p>
              <a 
                href="#" 
                className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Sign up for alerts
              </a>
            </div>
          </div>
        </div>

        {/* Site Notice */}
        <div className="border-t border-purple-100 pt-8 mt-4 mb-8 text-center text-sm text-pride-muted max-w-4xl mx-auto">
          <p className="leading-relaxed">
            <strong className="font-bold text-pride-navy">Site Notice: </strong>
            United in Pride is a newly incorporated grassroots non-profit. We're in the process of CRA charitable registration (eligible after 6 months of operation). At this time, gifts are unreceipted but will become tax-receiptable retroactively upon approval. Thank you for believing in our vision!
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-pride-muted">
          © 2024 United in Pride. All rights reserved. Built with love and pride. 💜
        </div>
      </div>
    </footer>
  );
}

function FooterLinkColumn({ heading, links }) {
  return (
    <div className="space-y-3">
      <h4 className="font-display font-bold text-pride-navy">{heading}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-pride-muted hover:text-pride-purple transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}