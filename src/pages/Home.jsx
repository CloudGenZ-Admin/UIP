import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Ticker from '../components/Ticker';
import About from '../components/About';
import Programs from '../components/Program';
import Donate from '../components/Donate';
import Gallery from '../components/Gallery';
import Events from '../components/Event';
import Stories from '../components/Stories';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import WhatWeDo from '../components/WhatWeDo';
import CommunityGallery from '../components/CommunityGallery';
import CommunityVid from '../components/CommunityVid';
export default function Home() {
  return (
   <div className="min-h-screen bg-[#FAFAFA]  overflow-x-hidden text-[#1e1e2e]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Ticker />
        <WhatWeDo />
      
        <About />
        <CommunityVid/>
        <Partners />
        {/* <Programs /> */}
        <Donate />
        {/* <Gallery /> */}
        <Events />
        {/* <Stories /> */}
      </main>
      <Footer />
    </div>
  );
}