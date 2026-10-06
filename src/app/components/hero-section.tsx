import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Bot, Headphones } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { Link } from 'react-router';
import { MatrixRain } from '@/app/components/matrix-rain';

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Matrix Rain Effect */}
      <MatrixRain />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Floating AI Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-10 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-xl"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </div>
          <span className="text-xs text-blue-300 font-bold tracking-[0.2em] uppercase">{t.badge}</span>
        </motion.div>

        {/* Main Headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="block text-white"
            style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            {t.titleLine1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="block"
            style={{
              textShadow: '0 0 30px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.3), 0 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            <span className="text-yellow-300">{t.titleLine2}</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block text-blue-300"
            style={{
              textShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3), 0 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            {t.titleLine3}
          </motion.span>
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
          }}
        >
          {t.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/discovery" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            <div className="relative flex items-center gap-2 text-white">
              <Bot className="w-5 h-5" />
              <span style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link to="/discovery" className="group px-8 py-4 rounded-lg border-2 border-blue-500/30 bg-blue-500/5 backdrop-blur-sm transition-all hover:border-blue-500/60 hover:bg-blue-500/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] active:scale-95">
            <span className="text-blue-300 group-hover:text-blue-200 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.ctaSecondary}
            </span>
          </Link>

          <Link to="/support" className="group px-8 py-4 rounded-lg border-2 border-purple-500/30 bg-purple-500/5 backdrop-blur-sm transition-all hover:border-purple-500/60 hover:bg-purple-500/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] active:scale-95">
            <div className="flex items-center gap-2">
              <Headphones className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors" />
              <span className="text-purple-300 group-hover:text-purple-200 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                {language === 'en' ? '24/7 Support' : 'Soporte 24/7'}
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}