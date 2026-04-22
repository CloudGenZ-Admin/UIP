import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SupportHero from '../components/support/SupportHero';
import ServiceDirectory from '../components/support/ServiceDirectory';
import AccessSteps from '../components/support/AccessSteps';
import CrisisBanner from '../components/support/CrisisBanner';
import SupportFormCTA from '../components/support/SupportFormCTA';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-pride-navy">
      
      {/* Navbar linked at the top */}
      <Navbar />
      
      {/* Main Content Container */}
      <main id="support">
        <SupportHero />
        <ServiceDirectory />
        <AccessSteps />
        <CrisisBanner />
        
        {/* Support Form CTA */}
        <div id="personalized-support">
          <SupportFormCTA />
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />
      
    </div>
  );
}