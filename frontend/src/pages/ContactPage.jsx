import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ContactHero from '../components/contact/ContactHero';
import ContactMain from '../components/contact/ContactMain';
import CrisisMiniBanner from '../components/contact/CrisisMiniBanner';
import ContactNewsletterCTA from '../components/contact/ContactNewsletterCTA';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-pride-navy">
      
      {/* Navbar linked at top */}
      <Navbar />
      
      <main id="contact">
        <ContactHero />
        <ContactMain />
        <CrisisMiniBanner />
        {/* <ContactNewsletterCTA /> */}
      </main>

      {/* Footer at bottom */}
      <Footer />
      
    </div>
  );
}