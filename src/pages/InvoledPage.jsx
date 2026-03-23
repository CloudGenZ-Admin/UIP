import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InvolvedHero from '../components/involved/involedHero';
import VolunteerRoles from '../components/involved/VolunteerRoles';
import DonationSection from '../components/involved/DonationSection';
import ImpactStats from '../components/involved/ImpactStats';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvolvedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <InvolvedHero />
        
        {/* Volunteer Section */}
        <VolunteerRoles />

        {/* Impact Stats */}
        <ImpactStats />

        {/* Donation Section */}
        <DonationSection />

        {/* Corporate Partnership CTA */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#1e1b4b] to-[#1E1B4B] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left text-white">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Corporate Partnerships</h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Partner with us to create workplace inclusion, sponsor community events, or organize team volunteering opportunities.
              </p>
              <Link to="/Partnership" className="inline-flex items-center gap-2 text-white font-bold text-lg border-b-2 border-pink-500 pb-1 hover:gap-4 transition-all">
                Work With Us <ArrowRight />
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 w-full">
               <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-white">
                  <h4 className="font-bold mb-1">Workplace Inclusion</h4>
                  <p className="text-white/50 text-sm">Training & consulting services</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-white">
                  <h4 className="font-bold mb-1">Event Sponsorship</h4>
                  <p className="text-white/50 text-sm">Direct impact workshops</p>
               </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 text-center">
          <h2 className="text-3xl font-black mb-8">Ready to Make a Difference?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/volunteer" className="px-10 py-4 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Start Volunteering</Link>
            <Link to="/donate" className="px-8 py-4 bg-[#0f0a2e] text-white rounded-2xl font-bold hover:scale-105 transition-transform">Make a Donation</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}