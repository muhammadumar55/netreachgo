import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';

export function TeamPage() {
  const { language } = useLanguage();
  const t = translations[language].team;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const teamMembers = [
    {
      name: t.member1Name,
      role: t.member1Role,
      bio: t.member1Bio,
      image: 'https://assets.cdn.filesafe.space/3n7o4ZY2ZXykwB7qRwZ3/media/69e919c6717d5dd4e11d0744.png',
      hasRealImage: true,
    },
    {
      name: t.member2Name,
      role: t.member2Role,
      bio: t.member2Bio,
      image: 'https://assets.cdn.filesafe.space/3n7o4ZY2ZXykwB7qRwZ3/media/69e91775717d5dd4e11c6115.png',
      hasRealImage: true,
    },
    {
      name: t.member3Name,
      role: t.member3Role,
      bio: t.member3Bio,
      image: 'https://assets.cdn.filesafe.space/3n7o4ZY2ZXykwB7qRwZ3/media/69e595e18696a78b8d42a911.png',
      hasRealImage: true,
    },
    {
      name: t.member4Name,
      role: t.member4Role,
      bio: t.member4Bio,
      image: 'https://assets.cdn.filesafe.space/3n7o4ZY2ZXykwB7qRwZ3/media/69e585fe8696a78b8d3ef924.png',
      hasRealImage: true,
    },
    {
      name: t.member5Name,
      role: t.member5Role,
      bio: t.member5Bio,
      image: 'https://assets.cdn.filesafe.space/3n7o4ZY2ZXykwB7qRwZ3/media/69e586108696a78b8d3efd23.png',
      hasRealImage: true,
    },
    {
      name: t.member6Name,
      role: t.member6Role,
      bio: t.member6Bio,
      image: 'https://assets.cdn.filesafe.space/3n7o4ZY2ZXykwB7qRwZ3/media/69e586088696a78b8d3efbc5.png',
      hasRealImage: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
              <span className="text-cyan-400 text-sm font-bold tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {t.badge}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white mr-3"
            >
              {t.title.split(' ')[0]}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="inline-block text-yellow-400 mr-3"
            >
              {t.title.split(' ')[1]}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="inline-block text-blue-400"
            >
              {t.titleHighlight}
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section ref={ref} className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl border border-blue-500/20 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

                  {/* Avatar Placeholder */}
                  <div className="relative mb-6 w-full aspect-square rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 overflow-hidden">
                    {member.hasRealImage ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover rounded-[10px] ${
                          member.name === t.member3Name ? 'object-top' : 'object-[center_20%]'
                        }`}
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-40" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl font-bold text-white/30" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative space-y-3">
                    <h3 
                      className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-cyan-400 transition-all duration-300"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {member.name}
                    </h3>
                    
                    <p className="text-cyan-400 font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {member.role}
                    </p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomous Engineering System - AI Agents */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border border-blue-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-blue-300 font-bold tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.aiAgentsBadge}</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-white"
              >
                {t.aiAgentsTitle1}{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="inline-block text-yellow-400"
              >
                {t.aiAgentsTitle2}{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="inline-block text-blue-400"
              >
                {t.aiAgentsTitle3}
              </motion.span>
            </h2>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.aiAgentsSubtitle}
            </p>
          </motion.div>

          {/* AI Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Agent 1: Code Architect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-gray-900/40 to-black/40 border border-blue-500/30 backdrop-blur-xl hover:border-blue-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent transition-all duration-300" />

                <div className="relative">
                  {/* Status Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400 font-semibold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentStatus}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs text-blue-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {t.agent1Tag}
                    </div>
                  </div>

                  {/* Agent Avatar */}
                  <div className="mb-6 w-24 h-24 rounded-full border-4 border-blue-500/40 overflow-hidden bg-gradient-to-br from-blue-500/20 to-blue-700/20 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Agent Name */}
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent1Name}
                  </h3>

                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent1Role}
                  </h4>

                  <p className="text-sm text-gray-500 mb-4 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.agent1Desc}
                  </p>

                  {/* Key Tasks */}
                  <div className="space-y-2">
                    <p className="text-xs text-blue-300 font-semibold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentKeyTasks}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent1Task1}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent1Task2}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent1Task3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Agent 2: QA & Regression Sentinel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 via-gray-900/40 to-black/40 border border-purple-500/30 backdrop-blur-xl hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-300" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400 font-semibold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentStatus}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs text-purple-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {t.agent2Tag}
                    </div>
                  </div>

                  {/* Agent Avatar */}
                  <div className="mb-6 w-24 h-24 rounded-full border-4 border-purple-500/40 overflow-hidden bg-gradient-to-br from-purple-500/20 to-purple-700/20 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.3c-.6 0-1.3-.6-1.3-1.3v-3.5c0-.6.6-1.2 1.3-1.2V9.5C9.2 8.1 10.6 7 12 7z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Agent Name */}
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent2Name}
                  </h3>

                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent2Role}
                  </h4>

                  <p className="text-sm text-gray-500 mb-4 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.agent2Desc}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs text-purple-300 font-semibold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentKeyTasks}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent2Task1}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent2Task2}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent2Task3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Agent 3: SRE / Incident Responder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-red-950/40 via-gray-900/40 to-black/40 border border-red-500/30 backdrop-blur-xl hover:border-red-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-300" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400 font-semibold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentStatus}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-xs text-red-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {t.agent3Tag}
                    </div>
                  </div>

                  {/* Agent Avatar */}
                  <div className="mb-6 w-24 h-24 rounded-full border-4 border-red-500/40 overflow-hidden bg-gradient-to-br from-red-500/20 to-red-700/20 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Agent Name */}
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent3Name}
                  </h3>

                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-red-300 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent3Role}
                  </h4>

                  <p className="text-sm text-gray-500 mb-4 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.agent3Desc}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs text-red-300 font-semibold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentKeyTasks}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent3Task1}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent3Task2}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent3Task3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Agent 4: Synthetic Data Engineer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-green-950/40 via-gray-900/40 to-black/40 border border-green-500/30 backdrop-blur-xl hover:border-green-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-transparent transition-all duration-300" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400 font-semibold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentStatus}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-xs text-green-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {t.agent4Tag}
                    </div>
                  </div>

                  {/* Agent Avatar */}
                  <div className="mb-6 w-24 h-24 rounded-full border-4 border-green-500/40 overflow-hidden bg-gradient-to-br from-green-500/20 to-green-700/20 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Agent Name */}
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent4Name}
                  </h3>

                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent4Role}
                  </h4>

                  <p className="text-sm text-gray-500 mb-4 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.agent4Desc}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs text-green-300 font-semibold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentKeyTasks}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent4Task1}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent4Task2}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent4Task3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Agent 5: Technical Product Manager */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-gray-900/40 to-black/40 border border-cyan-500/30 backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-transparent transition-all duration-300" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400 font-semibold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentStatus}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-xs text-cyan-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {t.agent5Tag}
                    </div>
                  </div>

                  {/* Agent Avatar */}
                  <div className="mb-6 w-24 h-24 rounded-full border-4 border-cyan-500/40 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Agent Name */}
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent5Name}
                  </h3>

                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent5Role}
                  </h4>

                  <p className="text-sm text-gray-500 mb-4 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.agent5Desc}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs text-cyan-300 font-semibold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentKeyTasks}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent5Task1}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent5Task2}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent5Task3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Agent 6: Customer Success Agent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-yellow-950/40 via-gray-900/40 to-black/40 border border-yellow-500/30 backdrop-blur-xl hover:border-yellow-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:to-transparent transition-all duration-300" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400 font-semibold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentStatus}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-xs text-yellow-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {t.agent6Tag}
                    </div>
                  </div>

                  {/* Agent Avatar */}
                  <div className="mb-6 w-24 h-24 rounded-full border-4 border-yellow-500/40 overflow-hidden bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Agent Name */}
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent6Name}
                  </h3>

                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent6Role}
                  </h4>

                  <p className="text-sm text-gray-500 mb-4 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.agent6Desc}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs text-yellow-300 font-semibold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentKeyTasks}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent6Task1}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent6Task2}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent6Task3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Agent 7: Documentation & Knowledge Curator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-gray-900/40 to-black/40 border border-indigo-500/30 backdrop-blur-xl hover:border-indigo-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-transparent transition-all duration-300" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400 font-semibold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentStatus}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-xs text-indigo-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {t.agent7Tag}
                    </div>
                  </div>

                  {/* Agent Avatar */}
                  <div className="mb-6 w-24 h-24 rounded-full border-4 border-indigo-500/40 overflow-hidden bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Agent Name */}
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent7Name}
                  </h3>

                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.agent7Role}
                  </h4>

                  <p className="text-sm text-gray-500 mb-4 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.agent7Desc}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs text-indigo-300 font-semibold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.agentKeyTasks}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent7Task1}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent7Task2}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                        <span>{t.agent7Task3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* System Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-blue-500/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>7</div>
              <div className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>Active Agents</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-500/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>99.9%</div>
              <div className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>Uptime</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-purple-500/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>24/7</div>
              <div className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>Monitoring</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-cyan-500/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-400 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>∞</div>
              <div className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>Scalability</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
              <span className="text-purple-400 text-sm font-bold tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {t.techStackBadge}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white mr-3"
            >
              {t.techStackTitle1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="inline-block text-yellow-400 mr-3"
            >
              {t.techStackTitle2}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="inline-block text-blue-400"
            >
              {t.techStackTitle3}
            </motion.span>
          </h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-5xl mb-16 space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.techStackSubtitle}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.techStackDescription}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.techStackAI}
            </p>
          </motion.div>

          {/* Tech Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-black/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.categoryFrontend}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'HTML/CSS', 'JavaScript'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-black/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.categoryBackend}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Go (Golang)', 'Rust', 'Node.js', 'Python', 'Java'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-semibold"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Database & Caching */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-black/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/5 transition-all duration-300" />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.categoryDatabase}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL', 'Prisma', 'SQL', 'Redis'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Infrastructure & DevOps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-900/20 to-black/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-yellow-500/5 transition-all duration-300" />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.categoryInfrastructure}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Terraform', 'Kubernetes', 'Git', 'GitHub', 'REST APIs', 'Unit Testing'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm font-semibold"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI & Machine Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group relative md:col-span-2"
            >
              <div className="relative h-full rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-900/20 to-black/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-pink-400/40 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/0 to-pink-500/0 group-hover:from-pink-500/5 group-hover:to-pink-500/5 transition-all duration-300" />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-pink-400 mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.categoryAI}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['PyTorch', 'LangChain', 'Vector Databases', 'Pinecone', 'Milvus', 'Hugging Face', 'OpenAI SDK', 'Anthropic SDK'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm font-semibold"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Decorative Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-white mr-3"
              >
                {t.joinTitle1}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="inline-block text-yellow-400 mr-3"
              >
                {t.joinTitle2}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="inline-block text-blue-400"
              >
                {t.joinTitle3}
              </motion.span>
            </h2>
            <p className="text-gray-400 text-lg mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.joinDescription}
            </p>
            <a
              href="mailto:careers@netreachgo.com"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all hover:scale-105 active:scale-95"
            >
              <span className="text-white font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {t.joinButton}
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}