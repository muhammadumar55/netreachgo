import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Rocket, Building2, Target, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface FormData {
  businessName: string;
  industry: string;
  projectType: string[];
  budget: string;
  timeline: string;
  features: string[];
  goals: string;
  contactName: string;
  email: string;
  phone: string;
}

export function DiscoveryPage() {
  const { language } = useLanguage();
  const t = translations[language].discovery;
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    industry: '',
    projectType: [],
    budget: '',
    timeline: '',
    features: [],
    goals: '',
    contactName: '',
    email: '',
    phone: '',
  });

  const steps = [
    { icon: Building2, title: t.step1Title },
    { icon: Target, title: t.step2Title },
    { icon: Zap, title: t.step3Title },
    { icon: Rocket, title: t.step4Title },
  ];

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-659f52ae/discovery`,
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
        console.error('Error submitting discovery form:', result);
        setSubmitError(result.error || 'Failed to submit form');
        setIsSubmitting(false);
        return;
      }

      console.log('Discovery form submitted successfully:', result);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Discovery form submission error:', error);
      setSubmitError('Network error. Please try again.');
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.businessName && formData.industry && formData.projectType;
      case 1:
        return formData.budget && formData.timeline;
      case 2:
        return formData.features.length > 0 && formData.goals;
      case 3:
        return formData.contactName && formData.email;
      default:
        return false;
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
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white"
            >
              {t.successTitle1}{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-yellow-400"
            >
              {t.successTitle2}{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-blue-400"
            >
              {t.successTitle3}
            </motion.span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t.successSubtitle}
          </p>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/30 backdrop-blur-xl">
            <p className="text-gray-300 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.successMessage}
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-light">{t.badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-4" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 430 }}>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white"
            >
              {t.title1}{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-yellow-400"
            >
              {t.title2}{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-blue-400"
            >
              {t.title3}
            </motion.span>
          </h1>
          <p className="text-xl text-gray-400 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              
              return (
                <div key={index} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-[0_0_30px_rgba(59,130,246,0.6)]'
                          : isCompleted
                          ? 'bg-blue-600'
                          : 'bg-gray-800 border border-gray-700'
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${isActive || isCompleted ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <span className={`text-xs mt-2 ${isActive ? 'text-blue-400' : 'text-gray-600'}`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                      isCompleted ? 'bg-blue-600' : 'bg-gray-800'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <motion.div
          className="rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-800 backdrop-blur-xl p-8 md:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Business Info */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {t.businessName}
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder={t.businessNamePlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {t.industry}
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all [&>option]:bg-gray-900 [&>option]:text-white"
                      >
                        <option value="">{t.selectIndustry}</option>
                        <option value="technology">{t.technology}</option>
                        <option value="healthcare">{t.healthcare}</option>
                        <option value="finance">{t.finance}</option>
                        <option value="ecommerce">{t.ecommerce}</option>
                        <option value="education">{t.education}</option>
                        <option value="realestate">{t.realestate}</option>
                        <option value="other">{t.other}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {t.projectType}
                      </label>
                      <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {language === 'en' ? 'Select all that apply' : 'Selecciona todos los que apliquen'}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { value: 'new', label: t.newWebsite },
                          { value: 'redesign', label: t.redesign },
                          { value: 'aiagents', label: t.aiAgents },
                          { value: 'both', label: t.websiteAndAI },
                          { value: 'mobile', label: language === 'en' ? 'Mobile App Development' : 'Desarrollo de App Móvil' },
                          { value: 'customai', label: language === 'en' ? 'Custom AI Agent' : 'Agente IA Personalizado' },
                          { value: 'software', label: language === 'en' ? 'Custom Software' : 'Software Personalizado' },
                          { value: 'seo', label: language === 'en' ? 'SEO & Digital Marketing' : 'SEO y Marketing Digital' },
                          { value: 'consulting', label: language === 'en' ? 'IT Consulting' : 'Consultoría IT' },
                          { value: 'other', label: language === 'en' ? 'Other Services' : 'Otros Servicios' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              const isSelected = formData.projectType.includes(option.value);
                              setFormData({
                                ...formData,
                                projectType: isSelected
                                  ? formData.projectType.filter(v => v !== option.value)
                                  : [...formData.projectType, option.value]
                              });
                            }}
                            className={`p-4 rounded-lg border-2 transition-all text-left ${
                              formData.projectType.includes(option.value)
                                ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                                : 'border-gray-700 bg-black/30 text-gray-400 hover:border-gray-600'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Budget & Timeline */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {t.budget}
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { value: 'under5k', label: t.under5k },
                          { value: '5k-10k', label: t.range5to10 },
                          { value: '10k-25k', label: t.range10to25 },
                          { value: 'over25k', label: t.over25k },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: option.value })}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              formData.budget === option.value
                                ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                                : 'border-gray-700 bg-black/30 text-gray-400 hover:border-gray-600'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {t.timeline}
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { value: 'asap', label: t.asap },
                          { value: '1-2months', label: t.oneToTwo },
                          { value: '3-6months', label: t.threeToSix },
                          { value: 'flexible', label: t.flexible },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: option.value })}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              formData.timeline === option.value
                                ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                                : 'border-gray-700 bg-black/30 text-gray-400 hover:border-gray-600'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Features & Goals */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {t.features}
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { value: 'ecommerce', label: t.ecommerceFeature },
                          { value: 'cms', label: t.cms },
                          { value: 'booking', label: t.booking },
                          { value: 'analytics', label: t.analytics },
                          { value: 'chatbot', label: t.chatbot },
                          { value: 'automation', label: t.automation },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleFeatureToggle(option.value)}
                            className={`p-4 rounded-lg border-2 transition-all text-left ${
                              formData.features.includes(option.value)
                                ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                                : 'border-gray-700 bg-black/30 text-gray-400 hover:border-gray-600'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {t.goals}
                      </label>
                      <textarea
                        value={formData.goals}
                        onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                        placeholder={t.goalsPlaceholder}
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Info */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {t.contactName}
                      </label>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder={t.contactNamePlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {t.email}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder={t.emailPlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {t.phone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder={t.phonePlaceholder}
                      />
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20">
                      <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {t.privacyNote}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-800">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  currentStep === 0
                    ? 'opacity-0 pointer-events-none'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>{t.back}</span>
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className={`flex items-center gap-2 px-8 py-3 rounded-lg transition-all ${
                    isStepValid()
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.next}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isStepValid() || isSubmitting}
                  className={`group flex items-center gap-2 px-8 py-3 rounded-lg transition-all ${
                    isStepValid() && !isSubmitting
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[0_0_40px_rgba(59,130,246,0.8)]'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {isSubmitting ? 'Submitting...' : t.submit}
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>

            {/* Error Message */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-center"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {submitError}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}