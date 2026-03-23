import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ResourcesHero from '../components/resources/ResourcesHero';
import ResourceNavigationIntro from '../components/resources/ResourceNavigationIntro';
import ResourceDirectory from '../components/resources/ResourceDirectory';
import ResourcesCTA from '../components/resources/ResourcesCTA';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-pride-navy">
      
      {/* 1. Global Navbar */}
      <Navbar />
      
      {/* 2. Page Content */}
      <main id="resources">
        <ResourcesHero />
        <ResourceNavigationIntro />
        <ResourceDirectory />
        <ResourcesCTA />
      </main>

      {/* 3. Global Footer */}
      <Footer />
      
    </div>
  );
}