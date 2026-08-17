import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';

export function Layout() {
  const router = useRouter();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}