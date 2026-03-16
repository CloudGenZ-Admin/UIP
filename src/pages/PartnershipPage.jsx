import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VolunteerHero from '../components/volunteer/VolunteerHero';
import Partnerships from '../components/volunteer/Partnerships'; // Path to the component above
import VolunteerCTA from '../components/volunteer/VolunteerCTA';

export default function PartnershipPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#3A3556]">
            <Navbar />

            <main id="partnerships" className="relative">
                {/* 1. Hero Section (Reused from Volunteer) */}
                <VolunteerHero />

                {/* 2. Main Partnership Content Built Above */}
                <Partnerships />
               
                {/* 3. Call to Action (Reused from Volunteer) */}
                <VolunteerCTA />
            </main>

            <Footer />
        </div>
    );
}