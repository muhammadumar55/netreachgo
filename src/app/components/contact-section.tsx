import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const t = translations[language].contact || {
    badge: 'GET IN TOUCH',
    title: 'Contact',
    titleHighlight: 'Us',
    subtitle: 'Have a project in mind? Let\'s discuss how our AI solutions can transform your business.',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'your.email@company.com',
    messagePlaceholder: 'Tell us about your project...',
    sendButton: 'Send Message',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Locations',
    emailValue: 'info@netreachgo.com',
    phoneValue: '+507 6323 0903',
    phoneValue2: '+1 888 831 7318',
    locationValue: 'New York • Florida • Panama City, Panama',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-659f52ae/contact`,
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
        console.error('Error submitting contact form:', result);
        setSubmitStatus('error');
      } else {
        console.log('Contact form submitted successfully:', result);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="relative py-32 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
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
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium tracking-wider">{t.badge}</span>
          </div>

          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white"
            >
              {t.title}
            </motion.span>
            {t.titleHighlight && (
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="inline-block text-blue-400"
              >
                {' '}{t.titleHighlight}
              </motion.span>
            )}
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-lg bg-gray-900/50 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-lg bg-gray-900/50 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-6 py-4 rounded-lg bg-gray-900/50 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="flex items-center justify-center gap-2 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {isSubmitting ? (language === 'en' ? 'Sending...' : 'Enviando...') : t.sendButton}
                  <Send className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isSubmitting ? 'animate-pulse' : ''}`} />
                </span>
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {language === 'en'
                    ? 'Message sent successfully! We\'ll get back to you soon.'
                    : '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.'}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {language === 'en'
                    ? 'Failed to send message. Please try again or contact us directly.'
                    : 'Error al enviar el mensaje. Por favor intente de nuevo o contáctenos directamente.'}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-blue-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.emailLabel}
                  </h3>
                  <a href={`mailto:${t.emailValue}`} className="text-gray-400 hover:text-blue-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.emailValue}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.phoneLabel}
                  </h3>
                  <div className="flex flex-col gap-1">
                    <a href={`tel:${t.phoneValue}`} className="text-gray-400 hover:text-blue-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t.phoneValue}
                    </a>
                    <a href={`tel:${t.phoneValue2}`} className="text-gray-400 hover:text-blue-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t.phoneValue2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {t.locationLabel}
                  </h3>
                  <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.locationValue}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {language === 'en' ? 'Response Time' : 'Tiempo de Respuesta'}
              </h3>
              <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                {language === 'en'
                  ? 'We typically respond within 24 hours during business days. For urgent inquiries, please call us directly.'
                  : 'Normalmente respondemos en 24 horas durante días hábiles. Para consultas urgentes, llámenos directamente.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
