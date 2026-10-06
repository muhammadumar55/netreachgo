import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';

// Dedicated opt-in page for the GHL A2P compliance chat widget.
// IMPORTANT: This page must contain NO other forms that collect phone
// numbers or opt-in consent (contact forms, lead capture, appointment forms).
// The chat widget (loaded site-wide via index.html) is the ONLY consent-
// collecting element allowed here per carrier A2P requirements.
export function SmsChatPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Chat With Us',
      subtitle:
        'Have a question or want to know more about our AI solutions? Use the chat window on this page and a representative will get right back to you.',
      hint: 'Tap the chat bubble in the corner of your screen to start.',
      smsNote:
        'By submitting your number in the chat, you authorize Net Reach GO to text/call you for informational/transactional and promotional messages, possibly using automated means. Msg/data rates may apply. Consent is not a condition of purchase. Reply HELP for help or STOP to unsubscribe at any time.',
      phoneLabel: 'Or call us directly:',
    },
    es: {
      title: 'Chatea Con Nosotros',
      subtitle:
        '¿Tienes alguna pregunta o quieres saber más sobre nuestras soluciones de IA? Usa el chat en esta página y un representante te responderá de inmediato.',
      hint: 'Toca el burbuja de chat en la esquina de tu pantalla para comenzar.',
      smsNote:
        'Al enviar tu número en el chat, autorizas a Net Reach GO a enviarte mensajes de texto/llamadas informativas/transaccionales y promocionales, posiblemente mediante medios automatizados. Pueden aplicar tarifas de mensajes/datos. El consentimiento no es condición de compra. Responde HELP para ayuda o STOP para cancelar en cualquier momento.',
      phoneLabel: 'O llámanos directamente:',
    },
  }[language];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/40">
          <MessageCircle className="h-8 w-8 text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
        <p className="text-lg text-gray-300 mb-4">{content.subtitle}</p>
        <p className="text-base text-blue-400 mb-10">{content.hint}</p>
        <div className="flex items-center justify-center gap-2 mb-10 text-gray-300">
          <Phone className="h-4 w-4" />
          <span>{content.phoneLabel}</span>
          <a href="tel:+17722777778" className="font-medium text-white hover:text-blue-400 transition-colors">
            (772) 277-7778
          </a>
        </div>
        <p className="text-xs leading-relaxed text-gray-500 max-w-xl mx-auto">{content.smsNote}</p>
      </motion.div>
    </div>
  );
}
