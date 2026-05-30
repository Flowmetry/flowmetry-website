'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import React from 'react';
import { Gem, Zap, Lightbulb } from 'lucide-react';

const BRAND = '#8B4A1E';
const BRAND_LIGHT = 'rgba(139,74,30,0.08)';

const P1 = 'Der Markt ist voll mit Leuten die über KI reden. Agenturen die alles versprechen, Freelancer die prompten können aber dein Business nicht verstehen, und YouTube-Videos die dich mehr verwirren als weiterbringen.';
const P2 = 'Ich bin keins davon. Ich baue mein eigenes Business komplett mit KI. Dieselben Tools, dieselbe Denkweise, dieselbe Tiefe – nur auf dein Problem angewendet.';
const SPEED = 10;

export function UeberMichSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [p1Shown, setP1Shown] = useState(0);
  const [p2Shown, setP2Shown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const delay = setTimeout(() => {
      setTyping(true);
      let i = 0;
      const t1 = setInterval(() => {
        i++;
        setP1Shown(i);
        if (i >= P1.length) {
          clearInterval(t1);
          let j = 0;
          const t2 = setInterval(() => {
            j++;
            setP2Shown(j);
            if (j >= P2.length) {
              clearInterval(t2);
              setTyping(false);
            }
          }, SPEED);
        }
      }, SPEED);
      return () => clearInterval(t1);
    }, 500);
    return () => clearTimeout(delay);
  }, [inView]);

  const cursorInP1 = typing && p1Shown < P1.length;
  const cursorInP2 = typing && p1Shown >= P1.length;
  const showCloseQuote = p2Shown >= P2.length;

  return (
    <section className="py-12 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left: Photo */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Photo */}
              <div
                className="w-[340px] h-[430px] md:w-[420px] md:h-[530px] rounded-3xl overflow-hidden"
                style={{
                  border: '1px solid rgba(28,22,20,0.08)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                  background: 'linear-gradient(145deg, rgba(139,74,30,0.08) 0%, rgba(139,74,30,0.04) 100%)',
                }}
              >
                <img
                  src="/erik.jpg"
                  alt="Erik"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Badge: Qualitätsarbeit – rechts, oberes Drittel */}
              <div
                className="badge-qualitaet absolute z-10 flex items-center gap-2 px-5 py-2.5 text-[15px] font-semibold"
                style={{
                  background: 'rgba(139,74,30,0.55)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  borderRadius: '8px',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(139,74,30,0.25)',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-signature)',
                  fontStyle: 'italic',
                }}
              >
                <Gem size={14} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                Qualitätsarbeit
              </div>

              {/* Badge: Kein Bullshit – links, Mitte */}
              <div
                className="badge-kein-bullshit absolute z-10 flex items-center gap-2 px-5 py-2.5 text-[15px] font-semibold"
                style={{
                  background: 'rgba(139,74,30,0.55)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  borderRadius: '8px',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(139,74,30,0.25)',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-signature)',
                  fontStyle: 'italic',
                }}
              >
                <Zap size={14} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                Kein Bullshit
              </div>

              {/* Badge: Proaktives Mitdenken – unten, leicht rechts */}
              <div
                className="absolute z-10 flex items-center gap-2 px-5 py-2.5 text-[15px] font-semibold"
                style={{
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-30%)',
                  background: 'rgba(139,74,30,0.55)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  borderRadius: '8px',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(139,74,30,0.25)',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-signature)',
                  fontStyle: 'italic',
                }}
              >
                <Lightbulb size={14} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                Proaktives Mitdenken
              </div>

              {/* Decorative accent */}
              <div
                className="absolute -bottom-4 right-0 md:-right-4 w-24 h-24 rounded-2xl -z-10"
                style={{ background: BRAND_LIGHT, border: '1px solid rgba(139,74,30,0.12)' }}
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="flex flex-col md:h-[530px] md:justify-between"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2
              className="font-semibold tracking-tighter text-[#1C1614] leading-[1.05] mb-8"
              style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3rem)' }}
            >
              Dein{' '}
              <span style={{ fontFamily: 'var(--font-signature)', fontStyle: 'italic', fontWeight: 700, color: BRAND, fontSize: '1.08em' }}>
                Ansprechpartner.
              </span>
            </h2>

            <div className="flex flex-col gap-6">
              <style>{`
                @keyframes cursor-blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
                .typing-cursor {
                  display: inline-block;
                  width: 2px;
                  height: 1em;
                  background: ${BRAND};
                  vertical-align: text-bottom;
                  margin-left: 1px;
                  animation: cursor-blink 0.6s step-end infinite;
                }
              `}</style>

              {/* Paragraph 1 – typewriter */}
              <p className="text-xl md:text-2xl text-[#1C1614] leading-snug italic" style={{ textWrap: 'pretty' } as React.CSSProperties}>
                <span
                  style={{
                    fontSize: '1.5em',
                    lineHeight: 0,
                    verticalAlign: '-0.15em',
                    opacity: p1Shown > 0 ? 1 : 0,
                    transition: 'opacity 0.05s',
                  }}
                >„</span>
                {P1.slice(0, p1Shown)}
                {cursorInP1 && <span className="typing-cursor" aria-hidden />}
              </p>

              {/* Paragraph 2 – typewriter (starts after p1 is done) */}
              <p className="text-xl md:text-2xl text-[#1C1614] leading-snug italic" style={{ textWrap: 'pretty' } as React.CSSProperties}>
                {P2.slice(0, p2Shown)}
                {cursorInP2 && <span className="typing-cursor" aria-hidden />}
                <span
                  style={{
                    fontSize: '1.5em',
                    lineHeight: 0,
                    verticalAlign: '-0.15em',
                    opacity: showCloseQuote ? 1 : 0,
                    transition: 'opacity 0.15s',
                  }}
                >“</span>
              </p>
            </div>

            {/* Name Card + Button */}
            <div className="mt-auto flex flex-col gap-5">
              {/* Identity Card */}
              <div
                className="px-5 py-4 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 4px 32px rgba(28,22,20,0.06), inset 0 1px 0 rgba(255,255,255,0.95)',
                  WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 55%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 55%, transparent 100%)',
                }}
              >
                <div className="flex flex-col gap-0">
                  <div className="flex items-center gap-2.5">
                    <style>{`
                      @keyframes dot-pulse {
                        0%   { transform: scale(1); opacity: 0.55; }
                        100% { transform: scale(4); opacity: 0; }
                      }
                      .dot-ring { animation: dot-pulse 2s ease-out infinite; }
                      .dot-ring-2 { animation: dot-pulse 2s ease-out 1s infinite; }
                      .badge-qualitaet { top: 22%; right: -44px; padding: 6px 12px; font-size: 12px; }
                      .badge-kein-bullshit { top: 52%; left: -40px; padding: 6px 12px; font-size: 12px; }
                      @media (min-width: 768px) {
                        .badge-qualitaet { right: -56px; padding: 10px 20px; font-size: 15px; }
                        .badge-kein-bullshit { left: -52px; padding: 10px 20px; font-size: 15px; }
                      }
                    `}</style>
                    <span className="relative flex-shrink-0 inline-flex items-center justify-center w-2 h-2">
                      <span
                        className="dot-ring absolute rounded-full w-full h-full"
                        style={{ background: BRAND }}
                      />
                      <span
                        className="dot-ring-2 absolute rounded-full w-full h-full"
                        style={{ background: BRAND }}
                      />
                      <span
                        className="relative rounded-full w-2 h-2"
                        style={{ background: BRAND }}
                      />
                    </span>
                    <span className="text-[1.35rem] font-semibold tracking-tight text-[#1C1614]">
                      Erik Neinstel
                    </span>
                  </div>
                  <span
                    className="text-[13px] font-light tracking-[0.14em] uppercase pl-[19px]"
                    style={{ color: 'rgba(28,22,20,0.4)' }}
                  >
                    Gründer
                  </span>
                </div>
              </div>

              <button
                data-cal-link="erik-neinstel-mshw1t/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="self-start inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: BRAND }}
              >
                Kostenloses Erstgespräch buchen
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
