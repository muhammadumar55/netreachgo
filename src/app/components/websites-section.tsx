import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Globe, Zap, ShieldCheck, Layers } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { MatrixText } from '@/app/components/matrix-text';
import Link from 'next/link';

export function WebsitesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  const t = translations[language].websites;

  const features = [
    { icon: Layers, title: t.experience, description: t.experienceDesc, gradient: 'from-blue-500 to-cyan-500' },
    { icon: Zap, title: t.performance, description: t.performanceDesc, gradient: 'from-cyan-500 to-blue-500' },
    { icon: ShieldCheck, title: t.security, description: t.securityDesc, gradient: 'from-blue-600 to-indigo-500' },
  ];

  return (
    <section ref={ref} id="websites" className="relative pt-32 pb-8 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.02) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium tracking-wider">{t.badge}</span>
          </div>

          <h2 className="text-5xl md:text-7xl mb-8" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white"
            >
              {t.title.split(' ')[0]}
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="inline-block text-yellow-400"
            >
              {t.title.split(' ')[1]}
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="inline-block text-blue-400"
            >
              {t.titleHighlight}
            </motion.span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-[rgba(255,255,255,0.1)] backdrop-blur-md hover:border-blue-500/30 transition-all duration-300"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-300`} />
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <Link href="/discovery" className="group px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all hover:scale-105 active:scale-95">
            <span className="text-white group-hover:text-yellow-400 transition-colors font-medium text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.getStarted || (language === 'en' ? 'Get Started' : 'Comenzar')}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}