// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Programs from './pages/ProgramsPage';
// import About from './pages/AboutPage.jsx'; 
// import Stories from './pages/StoriesPage.jsx';
// import SupportPage from './pages/SupportPage.jsx';
// import CarePack from './pages/CarePackPage.jsx'
// import ResourcesPage from './pages/ResourcesPage.jsx';
// import ContactPage from './pages/ContactPage.jsx';
// import VolunteerPage from './pages/VolunteerPage.jsx';
// import Donate from './pages/DonatePage.jsx';
// import PartnershipPage from './pages/PartnershipPage.jsx';

// // Import the new PAGES we just created!
// import PeerSupportPage from './pages/PeerSupportPage.jsx';
// import WellnessPage from './pages/WellnessPage.jsx';
// import CulturalPage from './pages/CulturalPage.jsx';
// import InvolvedPage from './pages/InvoledPage.jsx';
// import ScrollToTop from './pages/ScrollToTop.jsx'
// export default function App() {
//    return (
//     <Router>
//       <ScrollToTop /> 
//       <Routes>
        
//         <Route path="/" element={<Home/>} />
//         <Route path="/programs" element={<Programs />} />
        
//         {/* The 3 New Routes pointing to your Pages */}
//         <Route path="/programs/peer-support" element={<PeerSupportPage />} />
//         <Route path="/programs/wellness" element={<WellnessPage />} />
//         <Route path="/programs/cultural" element={<CulturalPage />} />
        
//         <Route path="/about" element={<About />} />
//         <Route path="/stories" element={<Stories />} />
//         <Route path="/support" element={<SupportPage />} />
//         <Route path='/care-packs' element={<CarePack/>} />
//         <Route path='/resources' element={<ResourcesPage/>} />
//         <Route path='/contact' element={<ContactPage/>} />
//         <Route path="/volunteer" element={<VolunteerPage />} />
//         <Route path="/donate" element={<Donate />} /> 
//         <Route path="/Partnership" element={<PartnershipPage />} /> 
        
//          <Route path="/involed" element={< InvolvedPage />} /> 
        
//       </Routes>
//     </Router>
//   );
// }

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// --- PUBLIC PAGES IMPORT ---
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
import PeerSupportPage from './pages/PeerSupportPage.jsx';
import WellnessPage from './pages/WellnessPage.jsx';
import CulturalPage from './pages/CulturalPage.jsx';
import InvolvedPage from './pages/InvoledPage.jsx';
import ScrollToTop from './pages/ScrollToTop.jsx';

// --- ADMIN PAGES IMPORT ---
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminLayout from './pages/admin/AdminLayout.jsx';
import AdminStories from './pages/admin/AdminStories.jsx';
import AdminPeer from './pages/admin/AdminPeer.jsx';
import AdminWellness from './pages/admin/AdminWellness.jsx';
import AdminCultural from './pages/admin/AdminCultural.jsx';
import AdminEvent from './pages/admin/AdminEvents.jsx';

export default function App() {
   return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        
        {/* ===================== PUBLIC ROUTES ===================== */}
        <Route path="/" element={<Home/>} />
        <Route path="/programs" element={<Programs />} />
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
        <Route path="/involed" element={<InvolvedPage />} /> 

        {/* ===================== ADMIN ROUTES ===================== */}
        {/* Public Login Route */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
        {/* Protected Admin Routes Wrapper */}
        <Route element={<AdminLayout />}>
          {/* Default admin route redirects to stories */}
          <Route path="/admin" element={<Navigate to="/admin/stories" replace />} />
          
          {/* CRUD Pages */}
          <Route path="/admin/stories" element={<AdminStories />} />
          <Route path="/admin/peer-support" element={<AdminPeer />} />
          <Route path="/admin/wellness" element={<AdminWellness />} />
          <Route path="/admin/cultural" element={<AdminCultural />} />
          <Route path="/admin/events" element={<AdminEvent />} />
         
        </Route>
        
      </Routes>
    </Router>
  );
}