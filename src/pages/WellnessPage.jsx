import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WellnessForm from '../components/programs/WellnessForm';

export default function WellnessPage() {
    return (
        <div className="min-h-screen bg-teal-50 font-sans text-pride-navy">
            <Navbar />
            <main className="relative pt-20">
                <WellnessForm />
            </main>
            <Footer />
        </div>
    );
}