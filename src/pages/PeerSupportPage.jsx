import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PeerSupportForm from '../components/programs/peer-support';

export default function PeerSupportPage() {
    return (
        <div className="min-h-screen  font-sans text-pride-navy">
            <Navbar />
            <main className="relative"> 
                <PeerSupportForm />
            </main>
            <Footer />
        </div>
    );
}