'use client';

import { useState, useEffect } from 'react';
import { CardStack, CardStackItem } from './ui/card-stack';
import { LeadGenAnimation, BackofficeAnimation, CRMAnimation, SupportAnimation } from './ui/card-animations';

type ServiceItem = CardStackItem & {
  color: string;
};

const servicesItems: ServiceItem[] = [
  {
    id: 'lead-gen',
    title: 'KI-Vertrieb & Lead-Generierung',
    description:
      'Keine kalten Anfragen mehr manuell aussortieren. KI-Chatbots auf der Webseite, automatische Qualifizierung und smarte Follow-ups.',
    color: '#cd9b7b',
  },
  {
    id: 'backoffice',
    title: 'Backoffice- & Admin-Automatisierung',
    description:
      'Schluss mit manuellem Abtippen. Automatische Rechnungsverarbeitung, E-Mail-Sortierung und Dokumentenerstellung.',
    color: '#b8815e',
  },
  {
    id: 'crm',
    title: 'CRM & Nahtloser Datenfluss',
    description:
      'Alle deine Tools sprechen miteinander. Leads landen im CRM, Tasks in Notion, Infos in Slack. Keine Daten-Silos mehr.',
    color: '#A78BFA',
  },
  {
    id: 'support',
    title: 'Kundenservice & Support',
    description:
      'Schnelle Antworten ohne Team-Störung. KI-Beantwortung von Standard-Tickets und automatische Terminbuchungen.',
    color: '#34D399',
  },
];


export function ServicesGrid() {
  const [cardWidth, setCardWidth] = useState(580);
  const [cardHeight, setCardHeight] = useState(340);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setCardWidth(w - 48);
        setCardHeight(340);
      } else if (w < 640) {
        setCardWidth(Math.min(w - 48, 400));
        setCardHeight(350);
      } else {
        setCardWidth(580);
        setCardHeight(340);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section id="leistungen" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-[#1C1614] mb-3">
            Möglichkeiten der{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #cd9b7b, #b8815e)' }}>
              Automatisierung
            </span>
          </h2>
          <p className="text-[#1C1614]/55 text-sm max-w-sm mx-auto">
            Von Vertrieb bis Support – wir automatisieren die Prozesse, die dein Team ausbremsen.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <CardStack<ServiceItem>
            items={servicesItems}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            overlap={0.52}
            spreadDeg={44}
            autoAdvance
            intervalMs={isMobile ? 5000 : 3500}
            pauseOnHover
            showDots
            renderCard={(item, { active }) => {
              const isActive = isMobile ? false : active;
              return (
              <div
                className="flex flex-col h-full w-full rounded-2xl overflow-hidden"
                style={{
                  background: active
                    ? `rgba(255,255,255,0.85)`
                    : 'rgba(255,255,255,0.55)',
                  backdropFilter: active ? 'blur(8px)' : 'blur(2px)',
                  WebkitBackdropFilter: active ? 'blur(8px)' : 'blur(2px)',
                  border: `1px solid ${item.color}40`,
                  boxShadow: isActive ? `0 0 40px ${item.color}15, inset 0 0 0 0.5px ${item.color}25` : `inset 0 0 0 0.5px ${item.color}15`,
                }}
              >
                {/* Animation area */}
                <div
                  className="h-[180px] w-full flex-shrink-0"
                  style={{ borderBottom: '0.5px solid rgba(28,22,20,0.06)', background: 'rgba(249,248,246,0.6)' }}
                >
                  {item.id === 'lead-gen' && <LeadGenAnimation />}
                  {item.id === 'backoffice' && <BackofficeAnimation />}
                  {item.id === 'crm' && <CRMAnimation />}
                  {item.id === 'support' && <SupportAnimation />}
                </div>

                {/* Text area */}
                <div className="p-6 flex flex-col justify-center flex-1">
                  <h3 className="text-base font-semibold text-[#1C1614] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#1C1614]/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );}}
          />
        </div>

      </div>
    </section>
  );
}
