import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Globe, Code2, Cpu, BarChart3, Rocket, MessageSquare, Zap, ArrowRight, Sparkles, Shield, Terminal } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { MatrixText } from '@/app/components/matrix-text';

export function ServicesPage() {
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
    { icon: Shield, title: t.offGrid.title, description: t.offGrid.description, color: 'from-green-500 to-emerald-500' },
    { icon: Terminal, title: t.softwareDev.title, description: t.softwareDev.description, color: 'from-purple-500 to-violet-500' },
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-white">
      <section ref={ref} className="relative py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]" />
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
                {t.title}
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-yellow-400"
                style={{ textShadow: '0 0 30px rgba(251, 191, 36, 0.4)' }}
              >
                AI
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-blue-400"
                style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
              >
                Agents
              </motion.span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
              {language === 'en' 
                ? 'Comprehensive AI-powered solutions designed to transform your business operations and accelerate growth.'
                : 'Soluciones completas impulsadas por IA diseñadas para transformar las operaciones de tu negocio y acelerar el crecimiento.'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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

          {/* NetReachGo All-in-One Platform Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-32 mb-32"
          >
            <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-blue-900/20 via-gray-900/40 to-cyan-900/20 border border-blue-500/20 backdrop-blur-sm overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-300 font-light uppercase tracking-widest">
                    {language === 'en' ? 'Complete Solution' : 'Solución Completa'}
                  </span>
                </div>

                <h3 className="text-4xl md:text-6xl mb-8" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
                  <motion.span
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-white"
                  >
                    NetReachGo{' '}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-yellow-400"
                    style={{ textShadow: '0 0 30px rgba(251, 191, 36, 0.4)' }}
                  >
                    All-in-One{' '}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-blue-400"
                    style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
                  >
                    Platform
                  </motion.span>
                </h3>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {language === 'en'
                    ? 'Experience the future of business automation with our unified platform. NetReachGo combines AI Agents, Web Development, Marketing Automation, and Consultancy into one seamless ecosystem designed to scale your business to new heights.'
                    : 'Experimenta el futuro de la automatización empresarial con nuestra plataforma unificada. NetReachGo combina Agentes de IA, Desarrollo Web, Automatización de Marketing y Consultoría en un ecosistema integral diseñado para escalar tu negocio a nuevas alturas.'}
                </p>

                <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {[
                    {
                      icon: Cpu,
                      title: language === 'en' ? 'AI-Powered' : 'Impulsado por IA',
                      description: language === 'en' ? 'Advanced AI agents' : 'Agentes de IA avanzados'
                    },
                    {
                      icon: Zap,
                      title: language === 'en' ? 'Automated' : 'Automatizado',
                      description: language === 'en' ? 'Streamlined workflows' : 'Flujos de trabajo optimizados'
                    },
                    {
                      icon: Globe,
                      title: language === 'en' ? 'Integrated' : 'Integrado',
                      description: language === 'en' ? 'Unified ecosystem' : 'Ecosistema unificado'
                    },
                    {
                      icon: Rocket,
                      title: language === 'en' ? 'Scalable' : 'Escalable',
                      description: language === 'en' ? 'Grow without limits' : 'Crece sin límites'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="p-6 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                    >
                      <feature.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                      <h4 className="text-lg mb-2 text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="mt-12 group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                  <div className="relative flex items-center gap-3 text-white">
                    <span className="text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {language === 'en' ? 'Explore Platform' : 'Explorar Plataforma'}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Additional Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-32 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-light">
                {language === 'en' ? 'WHY CHOOSE US' : 'POR QUÉ ELEGIRNOS'}
              </span>
            </div>

            <h3 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-white"
              >
                {language === 'en' ? 'Enterprise-Grade ' : 'Soluciones de '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-yellow-400"
              >
                {language === 'en' ? 'AI ' : 'IA de Grado '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-blue-400"
              >
                {language === 'en' ? 'Solutions' : 'Empresarial'}
              </motion.span>
            </h3>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
              {language === 'en'
                ? 'We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive measurable results. Our team of experts ensures seamless integration and ongoing support for your success.'
                : 'Combinamos tecnología de IA de vanguardia con profunda experiencia en la industria para entregar soluciones que generan resultados medibles. Nuestro equipo de expertos asegura una integración perfecta y soporte continuo para tu éxito.'}
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: language === 'en' ? 'Custom Solutions' : 'Soluciones Personalizadas',
                  description: language === 'en' 
                    ? 'Tailored AI implementations designed specifically for your business needs and goals.'
                    : 'Implementaciones de IA diseñadas específicamente para las necesidades y objetivos de tu negocio.'
                },
                {
                  title: language === 'en' ? '24/7 Support' : 'Soporte 24/7',
                  description: language === 'en'
                    ? 'Round-the-clock technical support and maintenance to ensure optimal performance.'
                    : 'Soporte técnico y mantenimiento las 24 horas para garantizar un rendimiento óptimo.'
                },
                {
                  title: language === 'en' ? 'Proven Results' : 'Resultados Comprobados',
                  description: language === 'en'
                    ? 'Track record of delivering successful AI projects across diverse industries.'
                    : 'Historial de entrega de proyectos de IA exitosos en diversas industrias.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm"
                >
                  <h4 className="text-xl mb-3 text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}