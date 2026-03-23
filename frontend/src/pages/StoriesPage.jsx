import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StoriesHero from '../components/Story/StoriesHero';
import CommunityStories from '../components/Story/CommunityStories';
import GlobalNews from '../components/Story/GlobalNews';
import ShareStoryForm from '../components/Story/ShareStoryForm';
import StoriesCTA from '../components/Story/StoriesCTA';

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-pride-navy">
      <Navbar />
      <main>
        <StoriesHero />
        <CommunityStories />
        <GlobalNews />
        <ShareStoryForm />
        <StoriesCTA />
      </main>
      <Footer />
    </div>
  );
}