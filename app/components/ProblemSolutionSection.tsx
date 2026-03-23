'use client';

import { motion } from 'framer-motion';
import { HoverBorderGradient } from './HoverBorderGradient';

/* ── Sparkline: volatile downward trend (left card) ───────────────────────── */
const DOWN_LINE = 'M 0,18 L 30,32 L 50,10 L 75,45 L 95,25 L 118,55 L 138,38 L 162,62 L 180,48 L 205,72 L 228,58 L 252,82 L 272,68 L 292,88 L 300,96';
const DOWN_FILL = `${DOWN_LINE} L 300,100 L 0,100 Z`;

function SparklineDown() {
  return (
    <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="problemFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgb(239,68,68)"  stopOpacity="0.28" />
          <stop offset="100%" stopColor="rgb(239,68,68)"  stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Fill */}
      <motion.path
        d={DOWN_FILL}
        fill="url(#problemFill)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      {/* Line */}
      <motion.path
        d={DOWN_LINE}
        fill="none"
        stroke="rgb(239,68,68)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
      />
      {/* End dot */}
      <motion.circle
        cx="300" cy="96" r="3"
        fill="rgb(239,68,68)"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1.5 }}
      />
    </svg>
  );
}

/* ── Sparkline: smooth exponential upward curve (right card) ──────────────── */
const UP_LINE = 'M 0,94 C 60,92 120,80 165,58 C 210,36 258,12 300,4';
const UP_FILL = `${UP_LINE} L 300,100 L 0,100 Z`;

function SparklineUp() {
  return (
    <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="solutionFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgb(34,211,238)"  stopOpacity="0.25" />
          <stop offset="100%" stopColor="rgb(34,211,238)"  stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Fill */}
      <motion.path
        d={UP_FILL}
        fill="url(#solutionFill)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      {/* Line */}
      <motion.path
        d={UP_LINE}
        fill="none"
        stroke="rgb(34,211,238)"
        strokeWidth="1.8"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.1 }}
      />
      {/* End dot */}
      <motion.circle
        cx="300" cy="4" r="3"
        fill="rgb(34,211,238)"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1.6 }}
      />
    </svg>
  );
}

/* ── Main Export ─────────────────────────────────────────────────────────────── */

export function ProblemSolutionSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Headline */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extralight text-white leading-tight">
            Wo steht{' '}
            <span className="bg-gradient-to-r from-[#A0F0FF] to-[#60D8FF] bg-clip-text text-transparent">
              dein Unternehmen
            </span>
            ?
          </h2>
        </div>

        {/* 2-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-2xl p-8 flex flex-col gap-6"
            style={{
              background: 'rgba(239,68,68,0.04)',
              border: '0.5px solid rgba(239,68,68,0.18)',
              boxShadow: '0 0 60px rgba(239,68,68,0.06)',
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-red-500/60 mb-2">
                  Jetzt
                </span>
                <h3 className="text-xl font-bold text-white">
                  Manuell & überlastet
                </h3>
              </div>
              {/* Danger icon */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(239,68,68,0.1)', border: '0.5px solid rgba(239,68,68,0.25)' }}
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="text-red-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
            </div>

            {/* Sparkline */}
            <div
              className="rounded-xl px-4 pt-4 pb-2"
              style={{
                background: 'rgba(239,68,68,0.04)',
                border: '0.5px solid rgba(239,68,68,0.14)',
                height: 130,
              }}
            >
              <SparklineDown />
            </div>

            <p className="text-sm text-white/55 leading-relaxed">
              Zeit verpufft in isolierten Tools und manuellem Chaos. Das Team ist ausgelastet, aber das Unternehmen skaliert nicht.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                'Fachkräfte machen Copy-Paste',
                'Hohe Fehlerquote bei Daten',
                'Verlorene Leads durch Wartezeit',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(239,68,68,0.6)' }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="rounded-2xl p-8 flex flex-col gap-6"
            style={{
              background: 'rgba(59,130,246,0.05)',
              border: '0.5px solid rgba(59,130,246,0.22)',
              boxShadow: '0 0 60px rgba(59,130,246,0.08)',
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400/60 mb-2">
                  Mit Flowmetry
                </span>
                <h3 className="text-xl font-bold text-white">
                  Automatisiert & skalierbar
                </h3>
              </div>
              {/* Check icon */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(59,130,246,0.12)', border: '0.5px solid rgba(59,130,246,0.28)' }}
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
            </div>

            {/* Sparkline */}
            <div
              className="rounded-xl px-4 pt-4 pb-2"
              style={{
                background: 'rgba(34,211,238,0.04)',
                border: '0.5px solid rgba(34,211,238,0.14)',
                height: 130,
              }}
            >
              <SparklineUp />
            </div>

            <p className="text-sm text-white/55 leading-relaxed">
              Wir vernetzen deine Software zu einer fehlerfreien Infrastruktur. Deine Prozesse laufen ab sofort lautlos auf Autopilot.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                'Nahtloser Datenfluss in Echtzeit',
                'Wenige bis keine manuellen Routineaufgaben',
                'Skalierung ohne extra Personalkosten',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(34,211,238,0.7)' }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <HoverBorderGradient
            as="button"
            className="flex items-center gap-2 font-medium"
            data-cal-link="erik-neinstel-mshw1t/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Jetzt Situation analysieren
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </HoverBorderGradient>
        </div>

      </div>
    </section>
  );
}
