import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import agentsImage from 'figma:asset/ce803c89d8302eea77edf27ccf4b7585026595d1.png';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';

export function FeaturedCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  const t = translations[language].featuredCard;

  return (
    <section ref={ref} className="relative py-16 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* AI Agents Multitasking Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-full rounded-3xl overflow-hidden group"
        >
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[5]" />
          
          <img
            src={agentsImage}
            alt="AI Agents multitasking in a futuristic office environment"
            className="w-full h-[500px] object-cover relative z-0"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <h3 className="text-2xl md:text-4xl mb-3 text-white font-light [text-shadow:_0_4px_12px_rgb(0_0_0_/_80%)] md:[text-shadow:none]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              {t.title}
            </h3>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl font-light [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)] md:[text-shadow:none]" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}