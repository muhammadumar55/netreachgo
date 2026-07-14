import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Headphones, Video, Mail, Globe, Phone, CheckCircle2, Send } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface SupportFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  issueType: string;
  priority: string;
  description: string;
  loomUrl: string;
}

export function SupportPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  const t = translations[language].support;

  const [formData, setFormData] = useState<SupportFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    issueType: '',
    priority: '',
    description: '',
    loomUrl: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const issueTypes = [
    { value: 'AI Agent Issue', label: t.issueTypeAI },
    { value: 'Website Issue', label: t.issueTypeWebsite },
    { value: 'Automation Error', label: t.issueTypeAutomation },
    { value: 'CRM Integration', label: t.issueTypeCRM },
    { value: 'WhatsApp Problem', label: t.issueTypeWhatsApp },
    { value: 'Billing Support', label: t.issueTypeBilling },
    { value: 'API Error', label: t.issueTypeAPI },
    { value: 'Other', label: t.issueTypeOther }
  ];

  const priorityLevels = [
    { value: 'Low', label: t.priorityLow },
    { value: 'Medium', label: t.priorityMedium },
    { value: 'High', label: t.priorityHigh },
    { value: 'Emergency', label: t.priorityEmergency }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-659f52ae/support`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setSubmitError(result.error || 'Failed to submit support request');
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Support form error:', error);
      setSubmitError('Network error. Please try again or call emergency support.');
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
            <span className="text-white">{t.successTitle1} </span>
            <span className="text-blue-400">{t.successTitle2}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t.successSubtitle}
          </p>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/30 backdrop-blur-xl">
            <p className="text-gray-300 font-light leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.successMessage}
            </p>
            <p className="text-blue-400 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.successNote}
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Headphones className="w-4 h-4 text-blue-400" />
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
              {t.subtitle1}
              <br />
              <span className="text-blue-400">{t.subtitle2}</span>
            </p>
          </motion.div>

          {/* How to Get Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
              <span className="text-blue-400">{t.howToGetSupport}</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Loom Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-blue-500/20 backdrop-blur-sm"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-6">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {t.step1Title}
                </h3>
                <p className="text-gray-400 mb-4 font-light text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t.step1Description} <a href="https://loom.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Loom.com</a>:
                </p>
                <ul className="text-gray-400 text-sm space-y-2 font-light mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>• {t.step1Items[0]}</li>
                  <li>• {t.step1Items[1]}</li>
                  <li>• {t.step1Items[2]}</li>
                  <li>• {t.step1Items[3]}</li>
                </ul>
                <a
                  href="https://www.youtube.com/watch?v=PqoPJflyMkU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-light text-sm transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Video className="w-4 h-4" />
                  {t.step1Tutorial} →
                </a>
              </motion.div>

              {/* Website Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-blue-500/20 backdrop-blur-sm"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {t.step2Title}
                </h3>
                <p className="text-gray-400 mb-4 font-light text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t.step2Description}
                </p>
                <button
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all font-light text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {t.step2Button} →
                </button>
              </motion.div>

              {/* Email Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-blue-500/20 backdrop-blur-sm"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-white font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {t.step3Title}
                </h3>
                <p className="text-gray-400 mb-4 font-light text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t.step3Description}
                </p>
                <a
                  href="mailto:info@netreachgo.com"
                  className="text-blue-400 hover:text-blue-300 font-light text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  info@netreachgo.com →
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Support Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
              <span className="text-white">{t.formTitle1} </span>
              <span className="text-blue-400">{t.formTitle2}</span>
            </h2>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-800 backdrop-blur-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t.companyName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t.issueType} *
                    </label>
                    <select
                      required
                      value={formData.issueType}
                      onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <option value="">{t.issueTypePlaceholder}</option>
                      {issueTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t.priority} *
                    </label>
                    <select
                      required
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <option value="">{t.priorityPlaceholder}</option>
                      {priorityLevels.map((level) => (
                        <option key={level.value} value={level.value}>{level.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.description} *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder={t.descriptionPlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.loomUrl}
                  </label>
                  <input
                    type="url"
                    value={formData.loomUrl}
                    onChange={(e) => setFormData({ ...formData, loomUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder={t.loomUrlPlaceholder}
                  />
                  <p className="text-xs text-gray-500 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.loomUrlHelp}
                  </p>
                </div>

                {submitError && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full group flex items-center justify-center gap-2 px-8 py-4 rounded-lg transition-all ${
                    isSubmitting
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[0_0_40px_rgba(59,130,246,0.8)]'
                  }`}
                >
                  <span style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {isSubmitting ? t.submitting : t.submitButton}
                  </span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Emergency Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="p-12 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 backdrop-blur-sm">
              <div className="text-center mb-8">
                <Phone className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
                  <span className="text-white">{t.emergencyTitle1} </span>
                  <span className="text-red-400">{t.emergencyTitle2}</span>
                </h2>
                <p className="text-gray-400 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t.emergencySubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-xl bg-gray-900/50">
                  <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{t.panamaEmergency}</p>
                  <a href="tel:+50763230903" className="text-2xl text-blue-400 hover:text-blue-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    +507 6323-0903
                  </a>
                </div>
                <div className="text-center p-6 rounded-xl bg-gray-900/50">
                  <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{t.usEmergency}</p>
                  <a href="tel:+18888317318" className="text-2xl text-blue-400 hover:text-blue-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    +1 888-831-7318
                  </a>
                </div>
              </div>

              <p className="text-gray-400 text-sm text-center mt-6 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                {t.emergencyNote}
              </p>
            </div>
          </motion.div>

          {/* What Happens Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-12" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
              <span className="text-white">{t.whatHappensTitle1} </span>
              <span className="text-blue-400">{t.whatHappensTitle2}</span>
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
              {[
                t.step1,
                t.step2,
                t.step3,
                t.step4,
                t.step5
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{index + 1}</span>
                    </div>
                    <span className="text-white font-light text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{step}</span>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block w-8 h-[2px] bg-blue-500/30 mx-2" />
                  )}
                </motion.div>
              ))}
            </div>

            <p className="text-xl text-gray-400 mb-4 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.responseTime} <span className="text-blue-400">{t.responseTime2}</span>
            </p>
            <p className="text-gray-500 font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              {t.poweredBy}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
