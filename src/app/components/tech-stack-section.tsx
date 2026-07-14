import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2 } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';

export function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium tracking-wider">
              {language === 'en' ? 'TECHNOLOGIES' : 'TECNOLOGÍAS'}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl mb-16" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white"
            >
              {language === 'en' ? 'Our ' : 'Nuestro '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="inline-block text-yellow-400"
            >
              Tech{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="inline-block text-blue-400"
            >
              {language === 'en' ? 'Stack' : 'Stack'}
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm p-4">
            <img
              src="https://assets.cdn.filesafe.space/3n7o4ZY2ZXykwB7qRwZ3/media/69e7eb52da11eeea68f07a74.png"
              alt={language === 'en' ? 'Tech Stack' : 'Stack Tecnológico'}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
