import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { Link } from 'react-router';
import logo from "figma:asset/4e375985cfc5461eefdfde961d7f567e9c84118d.png";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  const t = translations[language].footer;
  const navT = translations[language].nav;

  const links = [
    { title: t.company, items: [
      { label: t.about, href: '/about' },
      { label: navT.team, href: '/team' },
      { label: t.services, href: '/services' },
      { label: t.academy, href: '/#academy' },
      { label: t.careers, href: '#' }
    ]},
    { title: t.solutions, items: [
      { label: t.aiAgents, href: '/#agents' },
      { label: t.webDev, href: '/#websites' },
      { label: t.automation, href: '/services' },
      { label: 'Consultancy', href: '/services' }
    ]},
    { title: t.legal, items: [
      { label: t.privacy, href: '#' },
      { label: t.terms, href: '#' },
      { label: t.cookies, href: '#' }
    ]},
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Chat widget temporarily disabled to debug regex error
  // useEffect(() => {
  //   // Delay chat widget loading to avoid conflicts
  //   const timeoutId = setTimeout(() => {
  //     try {
  //       const script = document.createElement('script');
  //       script.src = 'https://beta.leadconnectorhq.com/loader.js';
  //       script.setAttribute('data-resources-url', 'https://beta.leadconnectorhq.com/chat-widget/loader.js');
  //       script.setAttribute('data-widget-id', '6931959121b060905eb0608c');
  //       script.async = true;
  //       script.defer = true;

  //       script.onerror = (error) => {
  //         console.error('Chat widget script failed to load:', error);
  //       };

  //       document.body.appendChild(script);
  //     } catch (error) {
  //       console.error('Error loading chat widget:', error);
  //     }
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  return (
    <footer ref={ref} className="relative pt-24 pb-12 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-blue-600/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img src={logo} alt="NetReachGo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 mb-8 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.tagline}
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {links.map((group, i) => (
            <div key={i}>
              <h4 className="text-white mb-6 uppercase tracking-widest text-sm font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.items.map((item, j) => (
                  <li key={j}>
                    {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                      <Link to={item.href} className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} NetReachGo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-gray-500 text-sm font-light">
              <MapPin className="w-4 h-4" /> Panama City, Panama
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}