import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Bot, Zap, TrendingUp, MessageSquare, DollarSign, Brain, MessagesSquare, Workflow, Star, Sparkles, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { MatrixText } from '@/app/components/matrix-text';

export function AIAgentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  const t = translations[language].agents;
  const [openAgent, setOpenAgent] = useState<number | null>(null);

  const agents = [
    { icon: MessageSquare, title: t.salesAgent.title, description: t.salesAgent.description, color: 'from-blue-500 to-cyan-500', features: t.salesAgent.features },
    { icon: Bot, title: t.supportAgent.title, description: t.supportAgent.description, color: 'from-cyan-500 to-blue-500', features: t.supportAgent.features },
    { icon: TrendingUp, title: t.marketingAgent.title, description: t.marketingAgent.description, color: 'from-blue-600 to-indigo-600', features: t.marketingAgent.features },
    { icon: DollarSign, title: t.financeAgent.title, description: t.financeAgent.description, color: 'from-cyan-400 to-blue-400', features: t.financeAgent.features },
    { icon: MessagesSquare, title: t.conversationAgent.title, description: t.conversationAgent.description, color: 'from-blue-400 to-cyan-400', features: t.conversationAgent.features },
    { icon: Workflow, title: t.workflowAgent.title, description: t.workflowAgent.description, color: 'from-cyan-500 to-teal-500', features: t.workflowAgent.features },
    { icon: Star, title: t.reviewsAgent.title, description: t.reviewsAgent.description, color: 'from-teal-400 to-cyan-400', features: t.reviewsAgent.features },
    { icon: Sparkles, title: t.customAgent.title, description: t.customAgent.description, color: 'from-blue-500 to-cyan-500', features: t.customAgent.features },
  ];

  return (
    <section ref={ref} id="agents" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
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
            >
              <MatrixText delay={100} finalColor="text-yellow-400">{t.titleHighlight.split(' ')[0]}</MatrixText>
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="inline-block text-blue-400"
            >
              <MatrixText delay={200} finalColor="text-blue-400">{t.titleHighlight.split(' ').slice(1).join(' ')}</MatrixText>
            </motion.span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${agent.color} opacity-0 ${openAgent === index ? 'opacity-10' : ''} blur-xl transition-opacity duration-300`} />
              
              <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:border-[rgba(255,255,255,0.3)] transition-all duration-200">
                {/* Clickable Header */}
                <button
                  onClick={() => setOpenAgent(openAgent === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${agent.color}`}>
                      <agent.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl md:text-2xl font-light ${index === 1 || index === 4 || index === 7 ? 'text-yellow-400' : index === 2 || index === 5 ? 'text-blue-400' : 'text-white'}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {agent.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openAgent === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-blue-400" />
                  </motion.div>
                </button>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openAgent === index ? 'auto' : 0,
                    opacity: openAgent === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-[rgba(255,255,255,0.1)]">
                    <p className="text-gray-400 mb-4 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {agent.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {agent.features.map((feature, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-sm rounded-full bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.2)] font-light"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}