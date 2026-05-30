'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BRAND = '#8B4A1E';

const ROWS = [
  {
    titel: 'Fortlaufende Betreuung',
    beschreibung: 'Wie lange und wie tief jemand wirklich mit KI arbeitet – nicht nur darüber spricht.',
    andere: false,
    flowmetry: true,
  },
  {
    titel: 'Berater-Background',
    beschreibung: 'Versteht der Anbieter wie Unternehmen denken – und kann er gleichzeitig selbst umsetzen?',
    andere: false,
    flowmetry: true,
  },
  {
    titel: 'Individuelle Lösung',
    beschreibung: 'Wird zuerst das Problem verstanden – oder kommt gleich ein vorgefertigtes Paket auf den Tisch?',
    andere: false,
    flowmetry: true,
  },
  {
    titel: 'Fortlaufende Betreuung',
    beschreibung: 'Was passiert nach dem Projekt – verschwindet der Anbieter oder bleibt er an deiner Seite?',
    andere: false,
    flowmetry: true,
  },
];

function RedX() {
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 md:w-9 md:h-9 rounded-full"
      style={{ background: 'rgba(229,28,28,0.12)' }}
    >
      <svg viewBox="0 0 13 13" fill="none" aria-hidden className="w-[10px] h-[10px] md:w-[13px] md:h-[13px]">
        <path d="M2.5 2.5l8 8M10.5 2.5l-8 8" stroke="#E51C1C" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function GreenCheck() {
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 md:w-9 md:h-9 rounded-full"
      style={{ background: 'rgba(22,198,83,0.15)' }}
    >
      <svg viewBox="0 0 14 14" fill="none" aria-hidden className="w-[11px] h-[11px] md:w-[14px] md:h-[14px]">
        <path d="M2 7.5l3.5 3.5 6.5-7" stroke="#16C653" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function WarumAndersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-12 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Headline */}
        <div className="mb-6 md:mb-16 text-center">
          <h2
            className="font-semibold tracking-tighter text-[#1C1614] leading-[1.05]"
            style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3rem)' }}
          >
            Warum{' '}
            <span style={{ fontFamily: 'var(--font-signature)', fontStyle: 'italic', fontWeight: 700, color: BRAND, fontSize: '1.1em' }}>
              anders
            </span>
            {' '}als alle anderen.
          </h2>
          <p className="text-sm md:text-base font-normal text-[#1C1614]/55 leading-relaxed mt-3 max-w-xl mx-auto">
            Jeder verspricht KI-Automatisierung. Der Unterschied liegt darin, wer sie wirklich versteht – und selbst lebt.
          </p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="w-full overflow-x-auto"
        >
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(28,22,20,0.28)' }}>

            {/* Header Row */}
            <div className="flex">
              {/* Leer oben links */}
              <div
                className="px-4 py-4 md:px-10 md:py-6"
                style={{ width: '45%', flexShrink: 0, background: '#FAFAFA' }}
              />
              {/* Typische Agenturen */}
              <div
                className="px-3 py-4 md:px-6 md:py-6 flex items-center justify-center"
                style={{
                  width: '27.5%',
                  flexShrink: 0,
                  background: '#FAFAFA',
                  borderLeft: '1px solid rgba(28,22,20,0.22)',
                }}
              >
                <span className="text-[10px] md:text-xs font-light md:font-bold tracking-widest uppercase text-center text-[#1C1614] md:text-[#1C1614]/45">
                  Typische Agenturen
                </span>
              </div>
              {/* Flowmetry – Logo */}
              <div
                className="px-3 py-4 md:px-6 md:py-6 flex items-center justify-center"
                style={{
                  width: '27.5%',
                  flexShrink: 0,
                  background: '#FDF9F6',
                  borderLeft: '1px solid rgba(28,22,20,0.22)',
                }}
              >
                <Image
                  src="/flowmetry-logo-kurz.png"
                  alt="Flowmetry"
                  width={44}
                  height={44}
                  className="h-6 md:h-9 w-auto"
                  style={{ objectFit: 'contain', filter: 'brightness(0) saturate(100%) invert(30%) sepia(70%) saturate(400%) hue-rotate(355deg) brightness(1.1)' }}
                  priority
                />
              </div>
            </div>

            {/* Data Rows */}
            {ROWS.map((row, i) => {
              const isLast = i === ROWS.length - 1;
              const leftBg = i % 2 === 0 ? '#FAFAFA' : '#FDFDFD';
              return (
                <motion.div
                  key={i}
                  className="flex"
                  style={{ borderTop: '1px solid rgba(28,22,20,0.22)' }}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.09, duration: 0.4 }}
                >
                  {/* Text links */}
                  <div
                    className="px-4 py-5 md:px-10 md:py-8"
                    style={{
                      width: '45%',
                      flexShrink: 0,
                      background: leftBg,
                    }}
                  >
                    <p className="text-xs md:text-base font-semibold text-[#1C1614] leading-snug">
                      {row.titel}
                    </p>
                  </div>

                  {/* Typische Agenturen – nur Icon */}
                  <div
                    className="px-3 py-5 md:px-6 md:py-8 flex items-center justify-center"
                    style={{
                      width: '27.5%',
                      flexShrink: 0,
                      background: leftBg,
                      borderLeft: '1px solid rgba(28,22,20,0.22)',
                    }}
                  >
                    <RedX />
                  </div>

                  {/* Flowmetry – nur Icon, Brand-Rahmen */}
                  <div
                    className="px-3 py-5 md:px-6 md:py-8 flex items-center justify-center"
                    style={{
                      width: '27.5%',
                      flexShrink: 0,
                      background: '#FDF9F6',
                      borderLeft: '1px solid rgba(28,22,20,0.22)',
                    }}
                  >
                    <GreenCheck />
                  </div>

                </motion.div>
              );
            })}

          </div>
        </motion.div>

      </div>
    </section>
  );
}
