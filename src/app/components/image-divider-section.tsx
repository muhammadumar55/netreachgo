import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
// EDIT THIS: Change the image import below to use a different image
import brainImage from 'figma:asset/91e53ce50c283481300f6f6b0d478cbf343c913c.png';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';

export function ImageDividerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  const t = translations[language].imageDivider;

  return (
    <section ref={ref} className="relative py-16 bg-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-full rounded-3xl overflow-hidden"
        >
          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[5]" />
          
          {/* Text Overlay */}
          <div className="absolute bottom-8 left-8 z-10 max-w-2xl">
            <p className="text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="block text-xl md:text-3xl mb-2 [text-shadow:_0_4px_12px_rgb(0_0_0_/_80%)] md:[text-shadow:none]" style={{ fontWeight: 500, letterSpacing: '0.02em' }}>
                {t.title}
              </span>
              <span className="block text-sm md:text-base text-gray-300 [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)] md:[text-shadow:none]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, letterSpacing: '0.01em' }}>
                {t.description}
              </span>
            </p>
          </div>
          
          {/* EDIT THIS: Change the src, alt, and height as needed */}
          <img
            src={brainImage}
            alt="AI Agents working in futuristic office environment"
            className="w-full h-[500px] object-cover relative z-0"
          />
        </motion.div>
      </div>
    </section>
  );
}