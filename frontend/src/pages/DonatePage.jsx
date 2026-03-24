import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Donate from '../components/volunteer/Donate'; 
import VolunteerHero from '../components/volunteer/VolunteerHero';
import VolunteerCTA from '../components/volunteer/VolunteerCTA';

export default function DonatePage() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#3A3556]">
            <Navbar />

            <main id="donate" className="relative">
                <VolunteerHero />

                 <Donate />
               
                {/* <VolunteerCTA /> */}

               
            </main>

            <Footer />
        </div>
    );
}