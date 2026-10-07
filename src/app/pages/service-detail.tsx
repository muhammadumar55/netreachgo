import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { MatrixText } from '@/app/components/matrix-text';
import { serviceBySlug, serviceOrder } from '@/app/components/services-config';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const config = slug ? serviceBySlug[slug] : undefined;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  const t = translations[language].services;
  const p = t.servicePage;

  if (!config) {
    return <Navigate to="/services" replace />;
  }

  const service = t[config.key];
  const Icon = config.icon;

  // Split the title into white / yellow / blue spans like the rest of the site
  const words = service.title.split(' ');
  let whiteWords = words.slice(0, -2);
  let yellowWords = words.slice(-2, -1);
  let blueWords = words.slice(-1);
  if (words.length === 2) {
    whiteWords = words.slice(0, 1);
    yellowWords = [];
    blueWords = words.slice(1);
  }
  if (yellowWords[0] === '&') {
    yellowWords = [words.slice(-3, -1).join(' ')];
    whiteWords = words.slice(0, -3);
  }

  return (
    <div className="min-h-screen bg-[#020205] text-white">
      <section ref={ref} className="relative py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-light uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
              <ArrowLeft className="w-4 h-4" />
              {p.backLabel}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Icon className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-light uppercase tracking-widest">{p.badge}</span>
            </div>

            <h1 className="text-5xl md:text-7xl mb-8 leading-snug" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
              {whiteWords.length > 0 && (
                <motion.span
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-white"
                >
                  <MatrixText finalColor="text-white">{whiteWords.join(' ')}</MatrixText>
                </motion.span>
              )}{' '}
              {yellowWords.length > 0 && (
                <motion.span
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="inline-block text-yellow-400"
                  style={{ textShadow: '0 0 30px rgba(251, 191, 36, 0.4)' }}
                >
                  <MatrixText delay={100} finalColor="text-yellow-400">{yellowWords.join(' ')}</MatrixText>
                </motion.span>
              )}{' '}
              {blueWords.length > 0 && (
                <motion.span
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="inline-block text-blue-400"
                  style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
                >
                  <MatrixText delay={200} finalColor="text-blue-400">{blueWords.join(' ')}</MatrixText>
                </motion.span>
              )}
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              {service.pageSubtitle}
            </p>

            <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${config.color} mt-12`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-white" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
              {p.featuresTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-32">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                className="flex items-start gap-4 p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
              >
                <CheckCircle2 className="w-7 h-7 text-blue-400 shrink-0 mt-1" />
                <p className="text-lg text-gray-300 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-32"
          >
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-900/20 via-gray-900/40 to-cyan-900/20 border border-blue-500/20 backdrop-blur-sm overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-300 font-light uppercase tracking-widest">{p.badge}</span>
                </div>
                <h3 className="text-3xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
                  {p.ctaTitle}
                </h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {p.ctaText}
                </p>
                <Link
                  to="/discovery"
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] active:scale-95"
                >
                  <span className="text-lg text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>{p.ctaButton}</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Other services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl mb-10 text-white" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
              {p.otherServices}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceOrder.filter((s) => s.slug !== config.slug).map((s) => {
                const OtherIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                  >
                    <OtherIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-light text-gray-300 group-hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t[s.key].title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
