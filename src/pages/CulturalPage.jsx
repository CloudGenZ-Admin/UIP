import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CulturalForm from '../components/programs/CulturalForm';

export default function CulturalPage() {
    return (
        <div className="min-h-screen bg-pink-50 font-sans text-pride-navy">
            <Navbar />
            <main className="relative pt-20">
                <CulturalForm />
            </main>
            <Footer />
        </div>
    );
}