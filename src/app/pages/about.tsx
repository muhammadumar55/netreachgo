import { useRef } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { Sparkles, Target, Eye, Zap, Users, TrendingUp, Award, Rocket } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import aiHologramImage from 'figma:asset/3bd36d9e38a01a66a3e8145d8e2eb6f23bb3fb2c.png';
import { Link } from 'react-router';

const aiWomanImage = 'https://images.unsplash.com/photo-1699062139074-f7b6f776c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwd29tYW4lMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzY2NTg1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language].about;
  
  const valuesRef = useRef(null);
  
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Sparkles,
      title: t.value1Title,
      text: t.value1Text,
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: Target,
      title: t.value2Title,
      text: t.value2Text,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Eye,
      title: t.value3Title,
      text: t.value3Text,
      gradient: 'from-cyan-500 to-yellow-400',
    },
    {
      icon: Zap,
      title: t.value4Title,
      text: t.value4Text,
      gradient: 'from-yellow-400 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
          
          {/* Floating Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs tracking-[0.3em] text-blue-300 font-light uppercase">
                {t.badge}
              </span>
            </div>
          </motion.div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white"
            >
              {t.title}{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="inline-block text-yellow-400"
            >
              AI-Powered{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="inline-block text-blue-400"
            >
              Enterprise
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            At NetReach, we believe in effortless growth powered by innovation and technology. With over 15 years of experience in the tech industry, we created our all-in-one platform that integrates cutting-edge artificial intelligence and automation to streamline your marketing and sales efforts. Everything you need is in one place—designed to help you attract more customers, keep them engaged, and scale your business seamlessly. Our state-of-the-art software solutions are built to empower you with the tools and insights you need to work smarter, not harder. Automate your processes, elevate your strategies, and focus on what truly matters—creating meaningful connections and driving real success.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* AI Technology Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="relative group max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-500">
                <img
                  src="https://assets.cdn.filesafe.space/3n7o4ZY2ZXykwB7qRwZ3/media/69e5a6732c135a8c837ac53e.jpeg"
                  alt="AI Hologram Business Professional"
                  className="w-full h-[400px] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 md:p-12 hover:border-purple-500/40 transition-all duration-500">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mb-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 
                  className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-400 to-blue-400 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {t.missionTitle}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t.missionText}
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 md:p-12 hover:border-blue-500/40 transition-all duration-500">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 
                  className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-400 to-blue-400 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {t.visionTitle}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t.visionText}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-white"
              >
                Our{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="inline-block text-yellow-400"
              >
                Core{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="inline-block text-blue-400"
              >
                Values
              </motion.span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-5 rounded-2xl blur-xl group-hover:opacity-10 transition-all duration-500`} />
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl mb-4 shadow-lg`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-3 text-white"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {value.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl mb-8 shadow-[0_0_40px_rgba(139,92,246,0.4)]">
              <Users className="w-10 h-10 text-white" />
            </div>
            
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-white"
              >
                {language === 'en' ? 'Built by ' : 'Construido por '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="inline-block text-yellow-400"
              >
                {language === 'en' ? 'Vision' : 'Vision'}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="inline-block text-blue-400"
              >
                {language === 'en' ? 'aries' : 'arios'}
              </motion.span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.teamText}{' '}
              <Link to="/team" className="text-blue-400 hover:text-blue-300 underline transition-colors">
                Meet our team
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-blue-900/10 to-black" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 md:p-16">
              <h2
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-white"
                >
                  {language === 'en' ? 'Ready to Transform ' : '¿Listo para Transformar '}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="inline-block text-yellow-400"
                >
                  {language === 'en' ? 'Your ' : 'Tu '}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="inline-block text-blue-400"
                >
                  {language === 'en' ? 'Business?' : 'Negocio?'}
                </motion.span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {t.ctaSubtitle}
              </p>
              
              <Link to="/discovery">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all text-white text-lg font-bold"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  <span className="group-hover:text-yellow-400 transition-colors">
                    {t.ctaButton}
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}