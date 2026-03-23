'use client';

import { motion } from 'framer-motion';
import { HoverBorderGradient } from './HoverBorderGradient';

/* ── KPI icon helpers ──────────────────────────────────────────────────────── */

const IconCalendar = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="text-blue-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
);

const IconAutopilot = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="text-cyan-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

const IconSaved = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="text-green-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
  </svg>
);

const KPIS = [
  { value: '2–4 Wo.', label: 'bis Go-Live',         icon: <IconCalendar />  },
  { value: '24/7',    label: 'im Autopilot',         icon: <IconAutopilot /> },
  { value: '15h+',    label: 'pro Woche gespart',    icon: <IconSaved />     },
];

/* ── Main Export ─────────────────────────────────────────────────────────── */

export function HeroSection() {
  return (
    <section className="relative pt-[200px] md:pt-[260px] pb-24">

      {/* ── Subtle top-edge glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(56,189,248,0.22) 0%, transparent 60%)',
        }}
      />

      {/* ── Centre glow behind text ── */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          top: '10%', width: 800, height: 320,
          background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── Headline (wide container) ── */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center mb-6">
        <motion.h1
          className="font-extralight leading-[1.08] tracking-tight text-white w-full"
          style={{ fontSize: 'clamp(1.5rem, 7.5vw, 6.5rem)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.18 }}
        >
          <span className="block md:whitespace-nowrap">Die KI-Automatisierung</span>
          <span className="block md:whitespace-nowrap bg-gradient-to-r from-[#A0F0FF] via-[#7DD3FC] to-[#A0F0FF] bg-clip-text text-transparent">für dein Unternehmen</span>
        </motion.h1>
      </div>

      {/* ── Rest ── */}
      <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">

        {/* Subheadline */}
        <motion.p
          className="text-sm md:text-xl text-white/60 leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.36 }}
        >
          Maßgeschneiderte KI-Automatisierung für dein Team, deine Systeme und Prozesse.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-row items-center justify-center gap-3 mb-10 md:mb-14"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.48 }}
        >
          {/* Primary */}
          <HoverBorderGradient
            as="button"
            className="flex items-center gap-1.5 font-medium px-4 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm"
            data-cal-link="erik-neinstel-mshw1t/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Erstgespräch buchen
            <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </HoverBorderGradient>

          {/* Secondary */}
          <HoverBorderGradient
            as="a"
            href="#leistungen"
            className="flex items-center gap-2 text-white/80 font-medium px-4 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm"
          >
            Leistungen entdecken
          </HoverBorderGradient>
        </motion.div>

        {/* KPIs — always horizontal row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.62 }}
        >
          <div className="flex items-center justify-center divide-x divide-white/10">
            {KPIS.map(({ value, label }) => (
              <div key={label} className="px-4 sm:px-8 text-center">
                <div className="text-sm sm:text-xl font-bold text-white">{value}</div>
                <div className="text-[10px] sm:text-xs text-white/50 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
