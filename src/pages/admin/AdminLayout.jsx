import { Navigate, Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout() {
  const token = localStorage.getItem('adminToken');
  
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    // Added flex-col for mobile, md:flex-row for desktop
    <div className="flex flex-col md:flex-row h-screen w-full bg-[#f8fafc] font-sans overflow-hidden">
      
      {/* Sidebar will naturally sit at top on mobile, or left on desktop depending on its internal CSS */}
      <AdminSidebar />
      
      {/* Responsive padding: p-4 on mobile, md:p-8 on desktop */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 relative w-full h-full">
        
        {/* Background gradient for admin area */}
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-br from-[#A855F7]/10 to-transparent -z-10"></div>
        
        {/* Render child pages */}
        <Outlet />
        
      </main>
    </div>
  );
}