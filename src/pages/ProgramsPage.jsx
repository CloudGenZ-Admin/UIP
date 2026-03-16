import React from 'react';
import ProgramsHero from '../components/programs/ProgramsHero';
import CorePrograms from '../components/programs/CorePrograms';
import ProgramImpact from '../components/programs/ProgramImpact';
import JourneySteps from '../components/programs/JourneySteps';
import ProgramsCTA from '../components/programs/ProgramsCTA';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-pride-navy">
      
      {/* 1. Navbar Linked at the Top */}
      <Navbar />
      
      {/* 2. Main Content wrapped in a tag with id="programs" 
             This makes the navbar link href="#programs" work perfectly */}
      <main id="programs" className="relative">
        <ProgramsHero />
        <CorePrograms />
        <ProgramImpact />
        <JourneySteps />
        
        {/* Added id="donate" here so the Donate button from Navbar scrolls to CTA */}
        <div id="donate">
          <ProgramsCTA />
        </div>
      </main>

      {/* 3. Footer at the Bottom */}
      <Footer />
      
    </div>
  );
}