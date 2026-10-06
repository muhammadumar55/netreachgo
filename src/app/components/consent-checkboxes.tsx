import { useLanguage } from '@/app/context/language-context';

interface ConsentState {
  informational: boolean;
  promotional: boolean;
}

const CONSENT_TEXT = {
  en: {
    informational:
      'By submitting, you authorize Net Reach GO to text/call the number above for informational/transactional messages, possibly using automated means. Msg/data rates apply, msg frequency varies. Consent is not a condition of purchase. See terms and privacy policy. Text HELP for help and STOP to unsubscribe.',
    promotional:
      'By submitting, you authorize Net Reach GO to text/call the number above for promotional messages, possibly using automated means. Msg/data rates apply, msg frequency varies. Consent is not a condition of purchase. See terms and privacy policy. Text HELP for help and STOP to unsubscribe.',
  },
  es: {
    informational:
      'Al enviar, autorizas a Net Reach GO a enviar mensajes de texto/llamar al número indicado para mensajes informativos/transaccionales, posiblemente mediante medios automatizados. Se aplican tarifas de mensajes/datos, la frecuencia de mensajes varía. El consentimiento no es una condición de compra. Consulta los términos y la política de privacidad. Envía AYUDA para recibir ayuda y PARAR para cancelar la suscripción.',
    promotional:
      'Al enviar, autorizas a Net Reach GO a enviar mensajes de texto/llamar al número indicado para mensajes promocionales, posiblemente mediante medios automatizados. Se aplican tarifas de mensajes/datos, la frecuencia de mensajes varía. El consentimiento no es una condición de compra. Consulta los términos y la política de privacidad. Envía AYUDA para recibir ayuda y PARAR para cancelar la suscripción.',
  },
};

interface ConsentCheckboxesProps {
  consent: ConsentState;
  onChange: (consent: ConsentState) => void;
}

export function ConsentCheckboxes({ consent, onChange }: ConsentCheckboxesProps) {
  const { language } = useLanguage();
  const text = CONSENT_TEXT[language] || CONSENT_TEXT.en;

  return (
    <div className="space-y-4">
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={consent.informational}
          onChange={(e) => onChange({ ...consent, informational: e.target.checked })}
          className="mt-1 h-4 w-4 shrink-0 accent-blue-500 cursor-pointer"
        />
        <span className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          {text.informational}
        </span>
      </label>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={consent.promotional}
          onChange={(e) => onChange({ ...consent, promotional: e.target.checked })}
          className="mt-1 h-4 w-4 shrink-0 accent-blue-500 cursor-pointer"
        />
        <span className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          {text.promotional}
        </span>
      </label>
    </div>
  );
}

export type { ConsentState };
