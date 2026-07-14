import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Globe, Code2, Cpu, BarChart3, Rocket, MessageSquare, Zap, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { MatrixText } from '@/app/components/matrix-text';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    { icon: Globe, title: t.webDev.title, description: t.webDev.description, color: 'from-blue-500 to-cyan-500' },
    { icon: Cpu, title: t.aiAgents.title, description: t.aiAgents.description, color: 'from-cyan-500 to-blue-500' },
    { icon: Zap, title: t.automation.title, description: t.automation.description, color: 'from-blue-600 to-indigo-600' },
    { icon: BarChart3, title: t.marketing.title, description: t.marketing.description, color: 'from-cyan-400 to-blue-400' },
    { icon: MessageSquare, title: t.consultancy.title, description: t.consultancy.description, color: 'from-blue-400 to-cyan-400' },
    { icon: Rocket, title: t.academy.title, description: t.academy.description, color: 'from-cyan-500 to-teal-500' },
  ];

  return (
    <section ref={ref} id="services" className="relative py-32 bg-[#020205] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-light">{t.badge}</span>
          </div>

          <h2 className="text-5xl md:text-7xl mb-8" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white"
            >
              <MatrixText>{t.title}</MatrixText>
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="inline-block text-yellow-400"
            >
              <MatrixText delay={100}>AI</MatrixText>
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="inline-block text-blue-400"
            >
              <MatrixText delay={200}>Agents</MatrixText>
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative h-full"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>{service.title}</h3>
                <p className="text-gray-400 mb-8 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{service.description}</p>
                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-light uppercase tracking-widest">{t.learnMore}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}