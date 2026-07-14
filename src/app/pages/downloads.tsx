import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Download, BookOpen, FileText, Star, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';

export function DownloadsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  const t = translations[language].downloads;

  // ========================================
  // 📝 EDIT BOOK COVER IMAGES HERE
  // ========================================
  // Replace the image URLs below with your own book cover images
  // Recommended size: 400x600px or similar portrait ratio

  const BOOK_IMAGES = {
    // Free Downloads
    freeBook1: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop',
    freeBook2: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=600&fit=crop',
    freeBook3: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=600&fit=crop',

    // Premium Books
    premiumBook1: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop',
    premiumBook2: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=600&fit=crop',
    premiumBook3: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=600&fit=crop',
  };
  // ========================================

  const freeDownloads = [
    {
      title: language === 'en' ? 'AI Business Starter Guide' : 'Guía de Inicio de Negocio IA',
      description: language === 'en'
        ? 'Essential guide to implementing AI in your business. Learn the basics and get started today.'
        : 'Guía esencial para implementar IA en tu negocio. Aprende lo básico y comienza hoy.',
      pages: 25,
      format: 'PDF',
      size: '2.5 MB',
      image: BOOK_IMAGES.freeBook1,
    },
    {
      title: language === 'en' ? 'Automation Checklist' : 'Lista de Verificación de Automatización',
      description: language === 'en'
        ? 'Step-by-step checklist for automating your business processes effectively.'
        : 'Lista de verificación paso a paso para automatizar tus procesos de negocio efectivamente.',
      pages: 15,
      format: 'PDF',
      size: '1.8 MB',
      image: BOOK_IMAGES.freeBook2,
    },
    {
      title: language === 'en' ? 'AI Agents Overview' : 'Resumen de Agentes IA',
      description: language === 'en'
        ? 'Comprehensive overview of AI agents and how they can transform your operations.'
        : 'Resumen completo de agentes IA y cómo pueden transformar tus operaciones.',
      pages: 18,
      format: 'PDF',
      size: '2.1 MB',
      image: BOOK_IMAGES.freeBook3,
    },
  ];

  const premiumBooks = [
    {
      title: language === 'en' ? 'Complete AI Implementation Blueprint' : 'Plan Completo de Implementación IA',
      description: language === 'en'
        ? 'Master guide with templates, case studies, and implementation strategies for enterprise AI.'
        : 'Guía maestra con plantillas, casos de estudio y estrategias de implementación para IA empresarial.',
      pages: 150,
      format: 'PDF',
      size: '12 MB',
      price: '$49',
      rating: 4.8,
      reviews: 127,
      image: BOOK_IMAGES.premiumBook1,
    },
    {
      title: language === 'en' ? 'AI Business Scaling Playbook' : 'Manual de Escalamiento de Negocio IA',
      description: language === 'en'
        ? 'Proven strategies and frameworks for scaling your business with AI automation.'
        : 'Estrategias y marcos probados para escalar tu negocio con automatización IA.',
      pages: 200,
      format: 'PDF',
      size: '15 MB',
      price: '$79',
      rating: 4.9,
      reviews: 203,
      image: BOOK_IMAGES.premiumBook2,
    },
    {
      title: language === 'en' ? 'Customer Service AI Revolution' : 'Revolución IA en Servicio al Cliente',
      description: language === 'en'
        ? 'Transform your customer service with AI. Includes workflows, scripts, and integration guides.'
        : 'Transforma tu servicio al cliente con IA. Incluye flujos de trabajo, scripts y guías de integración.',
      pages: 120,
      format: 'PDF',
      size: '9.5 MB',
      price: '$39',
      rating: 4.7,
      reviews: 89,
      image: BOOK_IMAGES.premiumBook3,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section ref={ref} className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Download className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-light">{t.badge}</span>
            </div>

            <h1 className="text-5xl md:text-7xl mb-8" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-white mr-3"
              >
                {t.title1}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-yellow-400 mr-3"
              >
                {t.title2}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-blue-400"
              >
                {t.title3}
              </motion.span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.subtitle}
            </p>
          </motion.div>

          {/* Free Downloads Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Download className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
                <span className="text-white">{t.freeTitle1} </span>
                <span className="text-blue-400">{t.freeTitle2}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeDownloads.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-full rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 overflow-hidden">
                    {/* Book Cover Image */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-600/20 to-blue-800/20">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500/90 text-white text-xs font-bold">
                        FREE
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl mb-3 text-white font-light group-hover:text-blue-400 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          {item.pages} {language === 'en' ? 'pages' : 'páginas'}
                        </span>
                        <span>{item.format}</span>
                        <span>{item.size}</span>
                      </div>

                      {/* Download Button */}
                      <button className="w-full group/btn flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all">
                        <Download className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
                        <span style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {t.downloadFree}
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Premium Books Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
                <span className="text-white">{t.premiumTitle1} </span>
                <span className="text-yellow-400">{t.premiumTitle2}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumBooks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-full rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300 overflow-hidden">
                    {/* Book Cover Image */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-yellow-600/20 to-yellow-800/20">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-yellow-500/90 text-black text-xs font-bold">
                        PREMIUM
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl mb-3 text-white font-light group-hover:text-yellow-400 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {item.rating} ({item.reviews} {language === 'en' ? 'reviews' : 'reseñas'})
                        </span>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          {item.pages} {language === 'en' ? 'pages' : 'páginas'}
                        </span>
                        <span>{item.format}</span>
                        <span>{item.size}</span>
                      </div>

                      {/* Price and Buy Button */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold text-yellow-400" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {item.price}
                        </span>
                      </div>

                      <button className="w-full group/btn flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 text-white hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all">
                        <Lock className="w-4 h-4" />
                        <span style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {t.buyNow}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="mt-20 text-center"
          >
            <div className="p-12 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 backdrop-blur-sm">
              <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
                <span className="text-white">{t.ctaTitle1} </span>
                <span className="text-blue-400">{t.ctaTitle2}</span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                {t.ctaSubtitle}
              </p>
              <button className="group px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] transition-all">
                <span className="flex items-center gap-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {t.ctaButton}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
