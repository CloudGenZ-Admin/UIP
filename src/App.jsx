import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Programs from './pages/ProgramsPage';
import About from './pages/AboutPage.jsx'; // Import About Page
import Stories from './pages/StoriesPage.jsx';
import SupportPage from './pages/SupportPage.jsx';
import CarePack from './pages/CarePackPage.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
export default function App() {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
         <Route path="/stories" element={<Stories />} />
         <Route path="/support" element={<SupportPage />} />
         <Route path='/care-packs' element={<CarePack/>} />
         <Route path='/resources' element={<ResourcesPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
         
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}