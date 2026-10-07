import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Bot, Zap, TrendingUp, MessageSquare, DollarSign, Brain, MessagesSquare, Workflow, Star, Sparkles, X, CheckCircle2, ArrowRight, Activity } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { MatrixText } from '@/app/components/matrix-text';
import { Link } from 'react-router';

export function AIAgentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  const t = translations[language].agents;
  const [openAgent, setOpenAgent] = useState<number | null>(null);

  const agents = [
    { icon: MessageSquare, ...t.salesAgent, color: 'from-blue-500 to-cyan-500', glow: 'rgba(59,130,246,0.35)' },
    { icon: Bot, ...t.supportAgent, color: 'from-cyan-500 to-blue-500', glow: 'rgba(34,211,238,0.35)' },
    { icon: TrendingUp, ...t.marketingAgent, color: 'from-blue-600 to-indigo-600', glow: 'rgba(99,102,241,0.35)' },
    { icon: DollarSign, ...t.financeAgent, color: 'from-cyan-400 to-blue-400', glow: 'rgba(96,165,250,0.35)' },
    { icon: MessagesSquare, ...t.conversationAgent, color: 'from-blue-400 to-cyan-400', glow: 'rgba(56,189,248,0.35)' },
    { icon: Workflow, ...t.workflowAgent, color: 'from-cyan-500 to-teal-500', glow: 'rgba(45,212,191,0.35)' },
    { icon: Star, ...t.reviewsAgent, color: 'from-teal-400 to-cyan-400', glow: 'rgba(153,246,228,0.3)' },
    { icon: Sparkles, ...t.customAgent, color: 'from-blue-500 to-cyan-500', glow: 'rgba(59,130,246,0.35)' },
  ];

  const active = openAgent !== null ? agents[openAgent] : null;
  const stats = [
    { label: t.stats.alwaysActive, icon: Activity },
    { label: t.stats.fasterResponse, icon: Zap },
    { label: t.stats.scalable, icon: TrendingUp },
  ];

  return (
    <section ref={ref} id="agents" className="relative py-32 bg-black overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Brain className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-light">{t.badge}</span>
          </div>

          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white"
            >
              <MatrixText finalColor="text-white">{t.title}</MatrixText>
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="inline-block text-yellow-400"
              style={{ textShadow: '0 0 30px rgba(251, 191, 36, 0.4)' }}
            >
              <MatrixText delay={100} finalColor="text-yellow-400">{t.titleHighlight.split(' ')[0]}</MatrixText>
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="inline-block text-blue-400"
              style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
            >
              <MatrixText delay={200} finalColor="text-blue-400">{t.titleHighlight.split(' ').slice(1).join(' ')}</MatrixText>
            </motion.span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {stats.map((s, i) => (
            <div key={i} className="relative rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/30 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm px-6 py-5 flex items-center gap-4">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </div>
              <s.icon className="w-5 h-5 text-blue-300" />
              <span className="text-lg text-white font-light uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Agent tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {agents.map((agent, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setOpenAgent(index)}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
              whileHover={{ y: -8 }}
              className="group relative text-left rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 p-6 h-full flex flex-col overflow-hidden"
            >
              {/* hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${agent.glow}, transparent 70%)` }}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className={`inline-flex p-3.5 rounded-xl bg-gradient-to-r ${agent.color} shadow-lg`}>
                    <agent.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl text-white font-light mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {agent.title}
                </h3>
                <p className="text-gray-400 text-sm font-light mb-4 line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {agent.description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="text-xs uppercase tracking-widest font-light">{language === 'en' ? 'View Details' : 'Ver Detalles'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Agent detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setOpenAgent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden border border-blue-500/30 shadow-[0_0_80px_rgba(59,130,246,0.25)] bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              {/* modal header glow */}
              <div
                className="absolute inset-x-0 top-0 h-48 opacity-20 blur-3xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${active.glow}, transparent 70%)` }}
              />

              <button
                type="button"
                onClick={() => setOpenAgent(null)}
                aria-label="Close"
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 hover:text-blue-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${active.color} shadow-lg`}>
                    <active.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[10px] text-emerald-400 uppercase tracking-[0.2em] font-medium">
                        {language === 'en' ? 'Online 24/7' : 'En Línea 24/7'}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {active.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 text-base md:text-lg font-light mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {active.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-4 font-medium">
                    {language === 'en' ? 'What It Does' : 'Qué Hace'}
                  </h4>
                  <ul className="space-y-3">
                    {active.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-white font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/discovery"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] active:scale-95"
                  onClick={() => setOpenAgent(null)}
                >
                  <span style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {language === 'en' ? 'Deploy This Agent' : 'Despliega Este Agente'}
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
