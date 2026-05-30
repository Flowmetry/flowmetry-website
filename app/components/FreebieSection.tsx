'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import React from 'react';
import Image from 'next/image';
import { NumberTicker } from './ui/number-ticker';
import { Brain, MessageSquare, Zap, Gift } from 'lucide-react';

const BRAND = '#8B4A1E';
const BRAND_LIGHT = 'rgba(139,74,30,0.07)';
const BRAND_BORDER = 'rgba(139,74,30,0.18)';

const INHALTE = [
  'Wie du Claude richtig einrichtest und sofort produktiv nutzt',
  'Die wichtigsten Features: Projects, Artifacts, Code, Cowork',
  'Konkrete Anwendungen statt theoretischer Erklärungen',
  'Skills, MCPs, Prompting – alles was du wissen musst, an einem Ort',
];

export function FreebieSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="freebie" className="py-12 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Headline oberhalb */}
        <div className="text-center mb-0 md:mb-10">
          <h2
            className="font-semibold tracking-tighter text-[#1C1614] leading-[1.05]"
            style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3rem)' }}
          >
            <span className="relative inline-block" style={{ fontFamily: 'var(--font-signature)', fontStyle: 'italic', fontWeight: 700, color: BRAND, fontSize: '1.1em' }}>
              Mein Geschenk
              <svg viewBox="0 0 200 8" preserveAspectRatio="none" className="absolute left-0 w-full" style={{ bottom: '-2px', height: '8px' }} aria-hidden="true">
                <rect x="0" y="2" width="200" height="3" rx="1.5" fill={BRAND} opacity="0.9" />
              </svg>
            </span>
            {' '}an dich.
          </h2>
        </div>

        {/* Karte */}
        <motion.div
          className="rounded-3xl md:overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-transparent md:bg-white md:shadow-[0_4px_24px_rgba(139,74,30,0.10),0_1px_4px_rgba(28,22,20,0.06)] border-0 md:border md:border-[rgba(139,74,30,0.18)]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Left: Text */}
          <div className="px-10 pt-6 pb-12 md:px-14 md:py-16 flex flex-col gap-7 bg-white md:bg-transparent rounded-3xl md:rounded-none border border-[rgba(139,74,30,0.18)] shadow-[0_8px_28px_rgba(28,22,20,0.07),0_1px_4px_rgba(28,22,20,0.04)] md:border-0 md:shadow-none relative z-0 mt-[-72px] md:mt-0">
            <span
              className="self-start text-[12px] font-semibold px-3 py-1.5 rounded-lg"
              style={{ background: BRAND_LIGHT, color: BRAND, border: `1px solid ${BRAND_BORDER}` }}
            >
              Freebie: How to Claude
            </span>

            <div className="flex flex-col gap-3">
              <h2
                className="font-semibold tracking-tighter text-[#1C1614] leading-[1.05]"
                style={{ fontSize: 'clamp(1.3rem, 2.2vw, 2.2rem)' }}
              >
                Kein Gespräch?{' '}
                <span style={{ fontFamily: 'var(--font-signature)', fontStyle: 'italic', fontWeight: 700, fontSize: '1.08em', color: BRAND }}>
                  Kein Problem.
                </span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-[#1C1614]/55">
                Ich lasse dich nicht ohne Orientierung. Für genau diese Fälle habe ich alles aufgeschrieben – strukturiert, verständlich, direkt umsetzbar.
              </p>
            </div>

            {/* Seitenzahl */}
            <div className="flex items-baseline gap-1">
              <NumberTicker
                value={45}
                className="font-bold tracking-tighter leading-none italic"
                style={{ fontSize: 'clamp(3.5rem, 3.5vw, 3.2rem)', color: BRAND, fontFamily: 'var(--font-signature)' }}
              />
              <span className="font-bold tracking-tighter italic" style={{ fontSize: 'clamp(3.5rem, 3.5vw, 3.2rem)', color: BRAND, lineHeight: 1, fontFamily: 'var(--font-signature)' }}>+</span>
              <span className="text-sm text-[#1C1614]/45 ml-1">Seiten</span>
            </div>

            {/* Inhalte */}
            <div className="flex flex-col gap-2.5">
              {INHALTE.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: BRAND_LIGHT, border: `1px solid ${BRAND_BORDER}` }}
                  >
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke={BRAND} strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed text-[#1C1614]/70">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="flex flex-col gap-2 pt-1"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <button
                className="self-start inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: BRAND }}
              >
                Bald erhältlich
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <p className="text-[11px] text-[#1C1614]/35">Kein Newsletter-Spam. Einmal rein, sofort nutzbar.</p>
            </motion.div>
          </div>

          {/* Right: Mockup – kinoreife Bühne */}
          <div
            className="flex order-first md:order-none items-center justify-center px-6 md:px-14 md:py-16 relative md:overflow-hidden h-[460px] md:h-auto bg-transparent md:bg-[#080200] z-10 pb-6 md:pb-0"
          >
            {/* Radial Glow von oben – nur Desktop */}
            <div
              className="hidden md:block absolute inset-0 z-0 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle 480px at 50% 0px, rgba(139,74,30,0.55), transparent)' }}
            />

            {/* Zweite Schicht – nur Desktop */}
            <div
              className="hidden md:block absolute inset-0 z-0 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle 220px at 50% -20px, rgba(220,130,60,0.3), transparent)' }}
            />

            {/* Tiefer Glow-Blob – nur Desktop */}
            <div className="hidden md:block absolute z-0 pointer-events-none"
                 style={{ width: 280, height: 280, borderRadius: '50%', background: 'rgba(139,74,30,0.28)', filter: 'blur(70px)', top: '50%', left: '50%', transform: 'translate(-50%, -42%)' }} />

            {/* Feine Lichtlinie oben – nur Desktop */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none"
                 style={{ width: '55%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(220,150,80,0.6), transparent)' }} />


<motion.div
              className="w-full max-w-[280px] md:max-w-[300px] rounded-2xl overflow-hidden relative z-10"
              style={{
                background: 'rgba(139,74,30,0.13)',
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
                border: '1px solid rgba(255,180,100,0.22)',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,200,120,0.15), -12px 0 30px rgba(0,0,0,0.35), 12px 0 30px rgba(0,0,0,0.35), 0 -12px 30px rgba(0,0,0,0.35)',
              }}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={inView ? { opacity: 1, y: 0, rotate: -2 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Brand-Hintergrund nur Mobile – liegt hinter dem Buchinhalt */}
              <div
                className="md:hidden absolute inset-0 pointer-events-none"
                style={{ background: 'rgba(80,30,8,0.92)', zIndex: -1 }}
              />

              {/* Cover */}
              <div className="h-56 md:h-44 flex flex-col items-center justify-center gap-3 px-6"
                   style={{ background: 'rgba(139,74,30,0.25)', borderBottom: '1px solid rgba(255,180,100,0.15)' }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden"
                     style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Image src="/logos/Claude.png" alt="Claude" width={44} height={44} className="w-11 h-11 object-contain" />
                </div>
                <div className="text-center">
                  <p className="text-[16px] font-bold text-white">How to Claude</p>
                </div>
              </div>
              {/* Chapters */}
              <div className="px-5 py-4 flex flex-col gap-2">
                {([
                  { icon: Brain,         label: 'KI-Grundlagen (Prompting, Halluzination...)' },
                  { icon: MessageSquare, label: 'Claude Chat, Cowork und Code' },
                  { icon: Zap,           label: 'Skills, Konnektoren, MCPs und mehr' },
                  { icon: Gift,          label: '10+ Bonus Seiten' },
                ] as { icon: React.ElementType; label: string }[]).map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
                         style={{ background: 'rgba(255,255,255,0.12)' }}>
                      <Icon size={9} color="rgba(255,220,180,0.85)" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] leading-tight" style={{ color: 'rgba(255,220,180,0.7)' }}>{label}</span>
                  </div>
                ))}
                <div className="mt-1 pt-3 flex items-center justify-between"
                     style={{ borderTop: '1px solid rgba(255,180,100,0.12)' }}>
                  <span className="text-[10px] font-semibold" style={{ color: 'rgba(255,200,140,0.9)' }}>Freebie</span>
                  <span className="text-[10px]" style={{ color: 'rgba(255,220,180,0.4)' }}>Zugang über Notion</span>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
