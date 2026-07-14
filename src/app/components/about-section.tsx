import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Eye, Zap, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { MatrixText } from '@/app/components/matrix-text';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const t = translations[language].about;

  const values = [
    {
      icon: Zap,
      title: t.value1Title,
      description: t.value1Text,
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: TrendingUp,
      title: t.value2Title,
      description: t.value2Text,
      gradient: 'from-violet-500 to-pink-500',
    },
    {
      icon: Award,
      title: t.value3Title,
      description: t.value3Text,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Target,
      title: t.value4Title,
      description: t.value4Text,
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section ref={ref} id="about" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] backdrop-blur-sm">
            <Users className="w-4 h-4 text-white" />
            <span className="text-sm text-white">{t.badge}</span>
          </div>

          <h2
            className="text-5xl md:text-7xl mb-8"
            style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white"
            >
              Building the{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="inline-block text-yellow-400"
            >
              Future of{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="inline-block text-blue-400"
            >
              {t.titleHighlight}
            </motion.span>
          </h2>

          <p
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            {t.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative p-10 rounded-2xl bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-[rgba(255,255,255,0.3)] backdrop-blur-sm hover:border-[rgba(255,255,255,0.5)] transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-500" />
            <Target className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-3xl mb-4 text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              {t.missionTitle}
            </h3>
            <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.missionText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative p-10 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
            <Eye className="w-12 h-12 text-cyan-400 mb-6" />
            <h3 className="text-3xl mb-4 text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              {t.visionTitle}
            </h3>
            <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.visionText}
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-[rgba(255,255,255,0.2)] backdrop-blur-sm hover:border-[rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl mb-3 text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}