'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionBackground } from './ui/section-background';

const BRAND = '#8B4A1E';

export function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="relative py-10 overflow-hidden" ref={ref}>
      <SectionBackground />
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="relative rounded-3xl px-8 py-10 md:px-20 md:py-12 text-center flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          {/* Weißer Glow-Schleier hinter dem Inhalt */}
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
            }}
          />

          {/* Brand-Glow hinter der Headline */}
          <div
            className="absolute pointer-events-none -z-10"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -62%)',
              width: '420px',
              height: '180px',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(139,74,30,0.13) 0%, transparent 70%)',
              filter: 'blur(32px)',
            }}
          />

          {/* Headline */}
          <h2
            className="font-semibold tracking-tighter leading-[1.05] text-[#1C1614] max-w-2xl"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3.4rem)' }}
          >
            Bereit dein System<br />
            <span style={{ fontFamily: 'var(--font-signature)', fontStyle: 'italic', fontWeight: 700, color: BRAND, fontSize: '1.1em' }}>
              zu bauen?
            </span>
          </h2>

          <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: 'rgba(28,22,20,0.5)' }}>
            Ein 30-minütiges Gespräch. Kein Verkaufsgespräch, kein Druck. Nur Klarheit darüber was in deinem Betrieb möglich ist.
          </p>

          {/* CTA Button */}
          <motion.button
            data-cal-link="erik-neinstel-mshw1t/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: BRAND, color: 'white' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Jetzt Erstgespräch buchen
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.button>

          <p className="text-[11px]" style={{ color: 'rgba(28,22,20,0.3)' }}>
            30 Minuten · Kostenlos · Unverbindlich
          </p>

        </motion.div>

      </div>
    </section>
  );
}
