// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import VolunteerHero from '../components/volunteer/VolunteerHero';
// import VolunteerRoles from '../components/volunteer/VolunteerRoles';
// import TrainingSupport from '../components/volunteer/TrainingSupport';
// import VolunteerCTA from '../components/volunteer/VolunteerCTA';

// export default function VolunteerPage() {
//   return (
//     <div className="min-h-screen bg-white font-sans text-[#3A3556]">
//       <Navbar />
      
//       <main id="volunteer" className="relative">
//         <VolunteerHero />
//         <VolunteerRoles />
//         <TrainingSupport />
//         <VolunteerCTA />
//       </main>

//       <Footer />
//     </div>
//   );
// }

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VolunteerHero from '../components/volunteer/VolunteerHero';
import VolunteerRoles from '../components/volunteer/VolunteerRoles';
import TrainingSupport from '../components/volunteer/TrainingSupport';
import VolunteerCTA from '../components/volunteer/VolunteerCTA';
import Donate from '../components/volunteer/Donate';
import Partnerships from '../components/volunteer/Partnerships';

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#A855F7]/30">
      <Navbar />
      <main>
        <VolunteerHero />
        <VolunteerRoles />
        <TrainingSupport />
        {/* <Donate /> */}
        {/* <Partnerships /> */}
        {/* <VolunteerCTA /> */}
      </main>
      <Footer />
    </div>
  );
}