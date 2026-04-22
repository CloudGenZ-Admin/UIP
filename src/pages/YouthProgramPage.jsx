import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import YouthProgramForm from '../components/programs/YouthProgramForm'; // NEW 🌱
export default function PeerSupportPage() {
    return (
        <div className="min-h-screen  font-sans text-pride-navy">
            <Navbar />
            <main className="relative"> 
                <YouthProgramForm />
            </main>
            <Footer />
        </div>
    );
}