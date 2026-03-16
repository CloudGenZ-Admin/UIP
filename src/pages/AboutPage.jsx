import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutMissionVision from '../components/about/AboutMissionVision';
import AboutLeadership from '../components/about/AboutLeadership';
import AboutWhyAndValues from '../components/about/AboutWhyAndValues';
import AboutCTA from '../components/about/AboutCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-pride-navy">
      <Navbar />
      <main>
        <AboutHero />
        <AboutMissionVision />
        <AboutLeadership />
        <AboutWhyAndValues />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}