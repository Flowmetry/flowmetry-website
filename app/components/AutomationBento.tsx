'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

// ─── Shared config ────────────────────────────────────────────────────────────

const spring = { type: 'spring', stiffness: 100, damping: 20 } as const;
// amount: 0.1 → fires when only 10 % visible — earlier trigger on mobile
// margin '0px 0px -50px 0px' → bottom threshold 50 px inside viewport
const vp     = { once: true, amount: 0.1, margin: '0px 0px -50px 0px' } as const;

// ─── Card 1 — Chat Visual ────────────────────────────────────────────────────

function TypingDot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="inline-block w-1.5 h-1.5 bg-white/40 rounded-full"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 0.7, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}

function ChatVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const durations = [2000, 2200, 3200];
    const t = setTimeout(() => setStep(s => (s + 1) % 3), durations[step]);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="flex items-center justify-center flex-1 py-6">
      <div
        className="relative rounded-[28px] overflow-hidden flex flex-col"
        style={{
          width: 162,
          height: 284,
          background: 'rgba(8,10,18,0.92)',
          border: '1px solid rgba(255,255,255,0.09)',
          boxShadow: '0 8px 40px rgba(59,130,246,0.12), 0 0 0 0.5px rgba(255,255,255,0.06)',
        }}
      >
        {/* Status bar */}
        <div className="flex justify-center pt-3 pb-2 flex-shrink-0">
          <div className="w-14 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* Chat messages */}
        <div className="flex-1 flex flex-col justify-end px-3 pb-3 gap-2.5 overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={spring}
                className="self-start flex items-center gap-1 px-3 py-2 rounded-2xl rounded-tl-sm"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              >
                <TypingDot delay={0} />
                <TypingDot delay={0.2} />
                <TypingDot delay={0.4} />
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="user"
                initial={{ opacity: 0, y: 10, scale: 0.93 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={spring}
                className="self-end text-[11px] leading-snug text-white/65 px-3 py-2 rounded-2xl rounded-tr-sm"
                style={{ background: 'rgba(255,255,255,0.08)', maxWidth: 120 }}
              >
                Hey, habt ihr morgen Zeit?
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, y: 10, scale: 0.93 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ...spring, delay: 0.2 }}
                className="self-start text-[11px] leading-snug text-white px-3 py-2 rounded-2xl rounded-tl-sm"
                style={{
                  background: 'rgba(59,130,246,0.22)',
                  border: '0.5px solid rgba(59,130,246,0.35)',
                  maxWidth: 130,
                }}
              >
                Klar! Termin ist gebucht. ✓
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input bar simulation */}
        <div className="flex-shrink-0 px-3 py-2.5" style={{ borderTop: '0.5px solid rgba(255,255,255,0.05)' }}>
          <div className="h-6 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.07)' }} />
        </div>
      </div>
    </div>
  );
}

// ─── Card 2 — Network Visual ─────────────────────────────────────────────────

const NET_NODES = [
  { cx: 100, cy: 22  },
  { cx: 172, cy: 74  },
  { cx: 148, cy: 158 },
  { cx:  52, cy: 158 },
  { cx:  28, cy: 74  },
];
const NET_EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 0],
  [0, 2], [1, 3],
];

function NetworkVisual() {
  return (
    <div className="flex items-center justify-center flex-1 py-4">
      <svg
        viewBox="0 0 200 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[180px]"
        aria-hidden="true"
      >
        <defs>
          <filter id="ab-nf" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Pulsing edges */}
        {NET_EDGES.map(([a, b], i) => (
          <motion.path
            key={i}
            d={`M${NET_NODES[a].cx},${NET_NODES[a].cy} L${NET_NODES[b].cx},${NET_NODES[b].cy}`}
            stroke="#8B5CF6"
            strokeOpacity={0.3}
            strokeWidth={0.9}
            strokeDasharray="4 6"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{
              duration: 1.6 + i * 0.12,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.08,
            }}
          />
        ))}

        {/* Nodes */}
        {NET_NODES.map((n, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ ...spring, delay: i * 0.08 }}
          >
            <circle
              cx={n.cx} cy={n.cy} r={10}
              fill="rgba(139,92,246,0.09)"
              stroke="#8B5CF6"
              strokeOpacity={0.45}
              strokeWidth={1.2}
            />
            <circle
              cx={n.cx} cy={n.cy} r={3.5}
              fill="#8B5CF6"
              opacity={0.8}
              filter="url(#ab-nf)"
            />
          </motion.g>
        ))}

        {/* Pulse ring on top node */}
        <motion.circle
          cx={NET_NODES[0].cx} cy={NET_NODES[0].cy} r={10}
          fill="none"
          stroke="#8B5CF6"
          strokeOpacity={0.4}
          strokeWidth={1}
          animate={{ r: [10, 22, 10], strokeOpacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.circle
          cx={NET_NODES[2].cx} cy={NET_NODES[2].cy} r={10}
          fill="none"
          stroke="#8B5CF6"
          strokeOpacity={0.3}
          strokeWidth={1}
          animate={{ r: [10, 20, 10], strokeOpacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut', delay: 1.4 }}
        />
      </svg>
    </div>
  );
}

// ─── Card 3 — Outreach Visual ─────────────────────────────────────────────────

const OUTREACH_ITEMS = [
  {
    label: 'WhatsApp',
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.12)',
    border: 'rgba(34,197,94,0.22)',
    floatDur: 2.4,
    checkDelay: 0,
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: '#22C55E' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'E-Mail',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.22)',
    floatDur: 2.9,
    checkDelay: 1.1,
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: '#3B82F6' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Kalender',
    color: '#F97316',
    bg: 'rgba(249,115,22,0.12)',
    border: 'rgba(249,115,22,0.22)',
    floatDur: 3.3,
    checkDelay: 2.2,
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: '#F97316' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

function OutreachVisual() {
  return (
    <div className="flex items-center justify-center flex-1 py-4">
      <div className="flex flex-col gap-5">
        {OUTREACH_ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            className="relative"
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: item.floatDur,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.35,
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: item.bg,
                border: `0.5px solid ${item.border}`,
                boxShadow: `0 0 20px ${item.color}1A`,
              }}
            >
              {item.icon}
            </div>

            {/* Checkmark badge */}
            <motion.div
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: '#22C55E', boxShadow: '0 0 8px rgba(34,197,94,0.55)' }}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                scale:   [0.5, 0.5, 1.15, 1, 0.6],
              }}
              transition={{
                duration: 1.1,
                times: [0, 0.05, 0.25, 0.7, 1],
                repeat: Infinity,
                delay: item.checkDelay,
                repeatDelay: 3.8,
              }}
            >
              <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Card 4 — Analytics Chart ─────────────────────────────────────────────────

const CHART_D = 'M10,108 C35,98 55,86 85,74 C115,62 138,52 165,42 C192,32 218,24 250,15';

function AnalyticsVisual() {
  // Observe a div — IntersectionObserver is unreliable on SVG primitives on mobile.
  // Once the div is in view, drive all SVG animations via the `animate` prop.
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      ref={ref}
      className="flex-1 flex items-center justify-center py-6 px-4"
      style={{ overflow: 'visible' }}
    >
      <svg
        viewBox="0 0 265 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ overflow: 'visible', transform: 'translateZ(0)' }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ab-cg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#22C55E" stopOpacity="0"/>
          </linearGradient>
          <clipPath id="ab-cc">
            <rect x="0" y="0" width="265" height="125"/>
          </clipPath>
        </defs>

        {/* Grid */}
        {[28, 56, 84].map(y => (
          <line key={y} x1="8" y1={y} x2="260" y2={y} stroke="#22C55E" strokeOpacity={0.07} strokeWidth={0.6}/>
        ))}
        <line x1="8" y1="5" x2="8" y2="114" stroke="#22C55E" strokeOpacity={0.1} strokeWidth={0.6}/>

        {/* Area fill */}
        <motion.path
          d={`${CHART_D} L250,114 L10,114 Z`}
          fill="url(#ab-cg)"
          clipPath="url(#ab-cc)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6, delay: 1.6 }}
        />

        {/* Glow ambient layer — thick soft stroke, no SVG filter (avoids bbox artifact) */}
        <motion.path
          d={CHART_D}
          stroke="#22C55E"
          strokeWidth={8}
          strokeLinecap="round"
          fill="none"
          opacity={0.13}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />

        {/* Main line — CSS drop-shadow for glow, no SVG filter bbox artifact */}
        <motion.path
          d={CHART_D}
          stroke="#22C55E"
          strokeWidth={2}
          strokeLinecap="round"
          fill="none"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(34,197,94,0.8)) drop-shadow(0 0 16px rgba(34,197,94,0.35))',
            willChange: 'filter',
          }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.9 } : undefined}
          transition={{ duration: 1.8, ease: 'easeOut', opacity: { duration: 0.15 } }}
        />

        {/* Data point dots — end-dot uses CSS drop-shadow to avoid SVG bbox clipping */}
        {([[85, 74], [165, 42], [250, 15]] as [number, number][]).map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx} cy={cy} r={i === 2 ? 4 : 3}
            fill="#22C55E"
            style={i === 2 ? {
              filter: 'drop-shadow(0 0 8px #22C55E) drop-shadow(0 0 16px rgba(34,197,94,0.45))',
              willChange: 'filter, transform',
            } : undefined}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: i === 2 ? 1 : 0.65, scale: 1 } : undefined}
            transition={{ ...spring, delay: 0.7 + i * 0.45 }}
          />
        ))}
      </svg>
    </div>
  );
}

// ─── Bento card wrapper ───────────────────────────────────────────────────────

function BentoCard({
  children,
  className = '',
  glowColor,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  glowColor: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`flex flex-col rounded-2xl p-7 ${className}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '0.5px solid rgba(255,255,255,0.08)',
        boxShadow: `0 0 60px ${glowColor}1C, 0 0 120px ${glowColor}0A, inset 0 1px 0 ${glowColor}12`,
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Section header label ─────────────────────────────────────────────────────

function PillarLabel({ num, color }: { num: string; color: string }) {
  return (
    <p
      className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-2 select-none"
      style={{ color: `${color}80` }}
    >
      Säule {num}
    </p>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function AutomationBento() {
  return (
    <section
      className="py-20"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 1, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={spring}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Was wir{' '}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
              automatisieren
            </span>
          </h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
            Von der ersten Anfrage bis zum laufenden Betrieb – vier Systeme,
            die dich täglich entlasten.
          </p>
        </motion.div>

        {/* Asymmetric bento grid: 3 cols, cards 1+4 span 2, cards 2+3 span 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">

          {/* ── Säule 01 — Lead-Gen & AI-Qualifizierung ── (col-span-2) */}
          <BentoCard className="md:col-span-2 min-h-[340px]" glowColor="#3B82F6" delay={0}>
            <div className="flex items-start justify-between gap-4 mb-1">
              <div>
                <PillarLabel num="01" color="#3B82F6" />
                <h3 className="text-[15px] font-semibold text-white">Lead-Gen & AI-Qualifizierung</h3>
              </div>
              <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
            </div>
            <p className="text-[#9CA3AF] text-[13px] leading-relaxed mb-2">
              AI qualifiziert Anfragen automatisch und bucht Termine – rund um die Uhr, ohne manuelle Eingriffe.
            </p>
            <ChatVisual />
          </BentoCard>

          {/* ── Säule 02 — Smart CRM & Daten-Infrastruktur ── (col-span-1) */}
          <BentoCard className="md:col-span-1 min-h-[340px]" glowColor="#8B5CF6" delay={0.1}>
            <div className="flex items-start justify-between gap-4 mb-1">
              <div>
                <PillarLabel num="02" color="#8B5CF6" />
                <h3 className="text-[15px] font-semibold text-white">Smart CRM & Daten-Infrastruktur</h3>
              </div>
              <div className="w-9 h-9 bg-violet-500/10 border border-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-violet-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 8.284-7.164 15-16 15a15.762 15.762 0 01-4.843-.768l-3.407.852 1.02-3.406A14.836 14.836 0 012.25 12c0-8.284 7.164-15 16-15s16 6.716 16 15z" />
                </svg>
              </div>
            </div>
            <p className="text-[#9CA3AF] text-[13px] leading-relaxed mb-2">
              Kontakte, Scores und Daten automatisch aktuell halten – kein manuelles Eintragen mehr.
            </p>
            <NetworkVisual />
          </BentoCard>

          {/* ── Säule 03 — Automatisierte Outreach-Engines ── (col-span-1) */}
          <BentoCard className="md:col-span-1 min-h-[300px]" glowColor="#F97316" delay={0.15}>
            <div className="flex items-start justify-between gap-4 mb-1">
              <div>
                <PillarLabel num="03" color="#F97316" />
                <h3 className="text-[15px] font-semibold text-white">Automatisierte Outreach-Engines</h3>
              </div>
              <div className="w-9 h-9 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-orange-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
            </div>
            <p className="text-[#9CA3AF] text-[13px] leading-relaxed mb-2">
              Follow-ups per WhatsApp, Mail und Kalender – automatisch und zur richtigen Zeit.
            </p>
            <OutreachVisual />
          </BentoCard>

          {/* ── Säule 04 — Real-time Analytics & Kontrolle ── (col-span-2) */}
          <BentoCard className="md:col-span-2 min-h-[300px]" glowColor="#22C55E" delay={0.2}>
            <div className="flex items-start justify-between gap-4 mb-1">
              <div>
                <PillarLabel num="04" color="#22C55E" />
                <h3 className="text-[15px] font-semibold text-white">Real-time Analytics & Kontrolle</h3>
              </div>
              <div className="w-9 h-9 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-green-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
            </div>
            <p className="text-[#9CA3AF] text-[13px] leading-relaxed mb-2">
              Echtzeit-Dashboards und automatische Reports – volle Transparenz ohne manuellen Aufwand.
            </p>
            <AnalyticsVisual />
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
