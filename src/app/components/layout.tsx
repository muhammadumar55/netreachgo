import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';

export function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}