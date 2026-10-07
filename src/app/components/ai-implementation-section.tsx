import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { BrainCircuit, Search, Plug, GraduationCap, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { MatrixText } from '@/app/components/matrix-text';

export function AIImplementationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  const t = translations[language].aiImplementation;

  const steps = [
    { icon: Search, title: t.step1.title, description: t.step1.description, color: 'from-blue-500 to-cyan-500' },
    { icon: Plug, title: t.step2.title, description: t.step2.description, color: 'from-indigo-500 to-blue-500' },
    { icon: GraduationCap, title: t.step3.title, description: t.step3.description, color: 'from-cyan-500 to-teal-500' },
  ];

  return (
    <section ref={ref} id="ai-implementation" className="relative py-32 bg-[#020205] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
            <BrainCircuit className="w-4 h-4 text-blue-400" />
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
            >
              <MatrixText delay={100} finalColor="text-yellow-400">{t.titleHighlight}</MatrixText>
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="inline-block text-blue-400"
            >
              <MatrixText delay={200} finalColor="text-blue-400">{t.titleHighlight2}</MatrixText>
            </motion.span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color}`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-5xl font-light text-white/10" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-2xl mb-4 text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>{step.title}</h3>
              <p className="text-gray-400 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl border-2 border-blue-500/30 bg-blue-500/5 backdrop-blur-sm transition-all hover:border-blue-500/60 hover:bg-blue-500/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
          >
            <span className="text-lg font-light uppercase tracking-widest text-blue-300 group-hover:text-blue-200 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              {t.cta}
            </span>
            <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
