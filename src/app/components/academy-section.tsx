import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Award, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { MatrixText } from '@/app/components/matrix-text';
import { Link } from 'react-router';

const programIcons = [BookOpen, Sparkles, Award];

export function AcademySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  const t = translations[language].academy;

  return (
    <section ref={ref} id="academy" className="relative pb-32 pt-0 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">{t.badge}</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
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
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="inline-block text-yellow-400"
            >
              {t.titleMiddle}
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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {t.programs.map((program, index) => {
            const Icon = programIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
                  <div className="relative">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6"><Icon className="w-8 h-8 text-white" /></div>
                    <div className="absolute top-0 right-0 px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">{program.level}</div>
                    <h3 className="text-2xl mb-3 text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>{program.title}</h3>
                    <div className="text-sm text-gray-400 mb-6"><span className="inline-flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" />{program.duration} {t.program}</span></div>
                    <div className="space-y-2"><p className="text-xs text-gray-500 mb-2 font-light">{t.keyTopics}</p>{program.topics.map((topic, i) => (<div key={i} className="flex items-start gap-2 text-sm text-gray-400"><div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" /><span>{topic}</span></div>))}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link to="/discovery" className="group inline-flex px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]">
            <span className="text-white flex items-center gap-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.cta}<GraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" /></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}