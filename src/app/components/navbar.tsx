import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import logo from "figma:asset/4e375985cfc5461eefdfde961d7f567e9c84118d.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.agents, href: '/#agents' },
    { label: t.websites, href: '/#websites' },
    { label: t.services, href: '/services' },
    { label: t.academy, href: '/#academy' },
    { label: t.about, href: '/about' },
    { label: t.downloads, href: '/downloads' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // If it's a hash link
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      
      // If we're not on home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Regular page navigation
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black border-b border-[rgba(255,255,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" onClick={handleLogoClick}>
            <img 
              src={logo} 
              alt="NetReachGo Logo" 
              className="h-10 md:h-12 w-auto transition-all group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors relative group py-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <div className="flex items-center gap-1.5 relative">
                  {link.label}
                </div>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Language Selector & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 p-1 rounded-lg bg-gray-900/50 border border-blue-500/20 backdrop-blur-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                    : 'hover:bg-gray-800/50'
                }`}
                title="English"
              >
                <span className="text-lg">🇺🇸</span>
                <span className="text-sm text-white font-medium">EN</span>
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  language === 'es'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                    : 'hover:bg-gray-800/50'
                }`}
                title="Español"
              >
                <span className="text-lg">🇵🇦</span>
                <span className="text-sm text-white font-medium">ES</span>
              </button>
            </div>

            <Link 
              to="/discovery"
              className="group px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all hover:scale-105 active:scale-95"
            >
              <span className="text-white group-hover:text-yellow-400 transition-colors font-medium" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.getStarted}</span>
            </Link>
          </div>

          {/* Mobile Language Selector & Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1 p-0.5 rounded-md bg-gray-900/50 border border-blue-500/20 backdrop-blur-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center px-2 py-1 rounded transition-all ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]'
                    : 'hover:bg-gray-800/50'
                }`}
                title="English"
              >
                <span className="text-lg">🇺🇸</span>
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`flex items-center px-2 py-1 rounded transition-all ${
                  language === 'es'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]'
                    : 'hover:bg-gray-800/50'
                }`}
                title="Español"
              >
                <span className="text-lg">🇵🇦</span>
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-[rgba(255,255,255,0.1)] bg-black"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors py-2 flex items-center justify-between"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span>{link.label}</span>
                </a>
              ))}

              <Link 
                to="/discovery"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-center"
              >
                {t.getStarted}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}