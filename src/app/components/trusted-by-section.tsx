import image_e1f5026259a4ce66fcfa21f738b8cad52a57a9b0 from 'figma:asset/e1f5026259a4ce66fcfa21f738b8cad52a57a9b0.png'
import image_1da2d5c836937b6dbe9a78f43536ba7a7279624a from 'figma:asset/1da2d5c836937b6dbe9a78f43536ba7a7279624a.png'
import image_5fab9ddb03c458b462f098d5001c2f3a04453a1d from 'figma:asset/5fab9ddb03c458b462f098d5001c2f3a04453a1d.png'
import image_8e61ff6d84a6a99399f6420a5a46c0a95d6b1add from 'figma:asset/8e61ff6d84a6a99399f6420a5a46c0a95d6b1add.png'
import image_bd02b4d4289daa26ee5fcf3b653d8165561da5bc from 'figma:asset/bd02b4d4289daa26ee5fcf3b653d8165561da5bc.png'
import image_e2ce520bfaa02ab68d9b396f4503dfbaf4cace03 from 'figma:asset/e2ce520bfaa02ab68d9b396f4503dfbaf4cace03.png'
import image_8d644bc96e176232e66f1fd36772293be785cd38 from 'figma:asset/8d644bc96e176232e66f1fd36772293be785cd38.png'
import image_24ffeb724724a6e426ac44ada3202ddbdf4333e7 from 'figma:asset/24ffeb724724a6e426ac44ada3202ddbdf4333e7.png'
import image_db05451811a142b29c05d596970ca148831d3545 from 'figma:asset/db05451811a142b29c05d596970ca148831d3545.png'
import image_897fb76e73104af3bbf7fdddd6214ac3a698b986 from 'figma:asset/897fb76e73104af3bbf7fdddd6214ac3a698b986.png'
import image_ae1e586141603bebc45e471237bcad1d446d6e80 from 'figma:asset/ae1e586141603bebc45e471237bcad1d446d6e80.png'
import image_e74f527a2bab981d9605ed3a847e4d3bcd1557b8 from 'figma:asset/e74f527a2bab981d9605ed3a847e4d3bcd1557b8.png'
import image_4b9d278a6faa6a7f1cef0764e2aca0d5640bfa06 from 'figma:asset/4b9d278a6faa6a7f1cef0764e2aca0d5640bfa06.png'
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '@/app/context/language-context';
import { translations } from '@/app/translations';

const tiestoLogo = "https://images.unsplash.com/photo-1586867026567-b9b63ae58472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGJyYW5kJTIwbG9nb3xlbnwxfHx8fDE3NzIwNDc2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function TrustedBySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const t = translations[language].trustedBy;

  return (
    <section ref={ref} className="relative py-12 md:py-20 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 md:mb-16"
        >
          <h3 
            className="text-xs md:text-sm tracking-[0.3em] text-gray-400 font-light uppercase mb-2" 
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t.title}
          </h3>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex"
            style={{
              width: 'fit-content',
            }}
          >
            {/* First set of logos */}
            <motion.div
              className="flex items-center gap-4 md:gap-16 px-2 md:px-8"
              animate={{
                x: [0, -100 + '%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[
                image_897fb76e73104af3bbf7fdddd6214ac3a698b986,
                image_e74f527a2bab981d9605ed3a847e4d3bcd1557b8,
                image_ae1e586141603bebc45e471237bcad1d446d6e80,
                image_e1f5026259a4ce66fcfa21f738b8cad52a57a9b0,
                image_db05451811a142b29c05d596970ca148831d3545,
                image_8e61ff6d84a6a99399f6420a5a46c0a95d6b1add,
                image_8d644bc96e176232e66f1fd36772293be785cd38,
                image_e2ce520bfaa02ab68d9b396f4503dfbaf4cace03,
                image_bd02b4d4289daa26ee5fcf3b653d8165561da5bc,
                image_1da2d5c836937b6dbe9a78f43536ba7a7279624a,
              ].map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex items-center justify-center h-20 w-32 md:h-28 md:w-56 flex-shrink-0"
                >
                  <img 
                    src={logo} 
                    alt="Client Logo" 
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>

            {/* Duplicate set for seamless loop */}
            <motion.div
              className="flex items-center gap-4 md:gap-16 px-2 md:px-8"
              animate={{
                x: [0, -100 + '%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[
                image_897fb76e73104af3bbf7fdddd6214ac3a698b986,
                image_e74f527a2bab981d9605ed3a847e4d3bcd1557b8,
                image_ae1e586141603bebc45e471237bcad1d446d6e80,
                image_e1f5026259a4ce66fcfa21f738b8cad52a57a9b0,
                image_db05451811a142b29c05d596970ca148831d3545,
                image_8e61ff6d84a6a99399f6420a5a46c0a95d6b1add,
                image_8d644bc96e176232e66f1fd36772293be785cd38,
                image_e2ce520bfaa02ab68d9b396f4503dfbaf4cace03,
                image_bd02b4d4289daa26ee5fcf3b653d8165561da5bc,
                image_1da2d5c836937b6dbe9a78f43536ba7a7279624a,
              ].map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex items-center justify-center h-20 w-32 md:h-28 md:w-56 flex-shrink-0"
                >
                  <img 
                    src={logo} 
                    alt="Client Logo" 
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}