import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Rocket, ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { MatrixText } from '@/app/components/matrix-text';
import { Link } from 'react-router';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { language } = useLanguage();
  const t = translations[language].cta;

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-light">{t.tagline}</span>
          </div>

          {/* Headline */}
          <h2
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white"
            >
              Listo para{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="inline-block text-yellow-400"
            >
              Desplegar{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="inline-block text-blue-400"
            >
              agentes IA?
            </motion.span>
          </h2>

          <p
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/discovery"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.8)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
              <div className="relative flex items-center gap-3 text-white">
                <Rocket className="w-6 h-6" />
                <span className="text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {t.button}
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/discovery"
              className="group px-10 py-5 rounded-xl border-2 border-blue-500/30 bg-blue-500/5 backdrop-blur-sm transition-all hover:border-blue-500/60 hover:bg-blue-500/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            >
              <div className="flex items-center gap-3 text-blue-300 group-hover:text-blue-200 transition-colors">
                <Calendar className="w-6 h-6" />
                <span className="text-lg font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t.ctaSecondary || 'Schedule Demo'}
                </span>
              </div>
            </Link>
          </div>

          {/* Trust Indicators */}
          
        </motion.div>
      </div>
    </section>
  );
}