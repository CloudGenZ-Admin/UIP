import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Programs from './pages/ProgramsPage';
import About from './pages/AboutPage.jsx'; 
import Stories from './pages/StoriesPage.jsx';
import SupportPage from './pages/SupportPage.jsx';
import CarePack from './pages/CarePackPage.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import VolunteerPage from './pages/VolunteerPage.jsx';
import Donate from './pages/DonatePage.jsx';
import PartnershipPage from './pages/PartnershipPage.jsx';

// Import the new PAGES we just created!
import PeerSupportPage from './pages/PeerSupportPage.jsx';
import WellnessPage from './pages/WellnessPage.jsx';
import CulturalPage from './pages/CulturalPage.jsx';

export default function App() {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/programs" element={<Programs />} />
        
        {/* The 3 New Routes pointing to your Pages */}
        <Route path="/programs/peer-support" element={<PeerSupportPage />} />
        <Route path="/programs/wellness" element={<WellnessPage />} />
        <Route path="/programs/cultural" element={<CulturalPage />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path='/care-packs' element={<CarePack/>} />
        <Route path='/resources' element={<ResourcesPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/donate" element={<Donate />} /> 
        <Route path="/Partnership" element={<PartnershipPage />} /> 

      </Routes>
    </Router>
  );
}