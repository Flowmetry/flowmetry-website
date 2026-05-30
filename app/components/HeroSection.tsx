'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { SectionBackground } from './ui/section-background';

const DashboardBanner = dynamic(() => import('./DashboardBanner').then(m => m.DashboardBanner), { ssr: false });

export function HeroSection() {
  return (
    <section className="relative pt-[100px] md:pt-[130px]">

      <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-lg text-xs font-semibold"
          style={{ background: 'rgba(139,74,30,0.04)', color: '#1C1614', border: '1px solid rgba(139,74,30,0.1)' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          KI-Berater & Automatisierer
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-semibold leading-[1.05] tracking-tighter text-[#1C1614] mb-6 text-[2.1rem] md:text-[clamp(1.5rem,3.4vw,3.8rem)]"
          style={{ wordSpacing: '-0.05em', transform: 'scaleX(1.06) scaleY(0.82)', transformOrigin: 'top center' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.18 }}
        >
          <span className="block">
            KI die für{' '}
            <span style={{ fontFamily: 'var(--font-signature)', fontStyle: 'italic', fontWeight: 700, color: '#8B4A1E', fontSize: '1.1em' }}>
              dein Business
            </span>
          </span>
          <span className="block">
            arbeitet und nicht nur{' '}
            <span className="relative inline-block text-[#1C1614]">
              existiert.
              <svg viewBox="0 0 200 8" preserveAspectRatio="none" className="absolute left-0 w-full" style={{ bottom: '-2px', height: '8px' }} aria-hidden="true">
                <rect x="0" y="1" width="200" height="5" rx="2" fill="#8B4A1E" opacity="0.9" />
              </svg>
            </span>
          </span>
        </motion.h1>

      </div>

      {/* ── Hintergrund-Bereich: Subheadline → Button → Banner ── */}
      <div className="relative w-full">
        {/* Grid Background */}
        <SectionBackground />

        {/* Mobile: Fade oben – überdeckt die harte Kante am Beginn des Grids */}
        <div
          className="md:hidden absolute top-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #ffffff, transparent)', zIndex: -1 }}
        />
        {/* Mobile: Fade unten – nur im pb-10-Bereich unter dem Banner, nicht dahinter */}
        <div
          className="md:hidden absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #ffffff, transparent)', zIndex: -1 }}
        />

        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center pt-4 pb-4">

          {/* Subheadline */}
          <motion.p
            className="text-sm md:text-base font-normal text-[#1C1614]/60 leading-relaxed mb-5 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.36 }}
          >
            {/* Mobile */}
            <span className="md:hidden">
              <span className="block">Die meisten nutzen 10% von dem was KI kann.</span>
              <span className="block">Ich zeige dir die anderen 90% durch</span>
              <span className="block">Beratung, Wissen oder ein fertiges System.</span>
            </span>
            {/* Desktop */}
            <span className="hidden md:block">
              <span className="block">Die meisten nutzen 10% von dem was KI kann. Ich zeige dir die anderen</span>
              <span className="block">90% durch Beratung, Wissen oder ein fertiges System.</span>
            </span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex flex-row items-center justify-center mb-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.48 }}
          >
            <button
              className="rounded-full px-10 py-4 text-base font-semibold text-white transition-all duration-200"
              style={{ background: '#8B4A1E' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#7a3f18')}
              onMouseLeave={e => (e.currentTarget.style.background = '#8B4A1E')}
              data-cal-link="erik-neinstel-mshw1t/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Kostenloses Erstgespräch
            </button>
          </motion.div>

        </div>

        {/* Dashboard Banner */}
        <DashboardBanner />

      </div>

    </section>
  );
}
