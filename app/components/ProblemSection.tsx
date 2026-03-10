'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

/* ── Chaos Visual (Chaos in Prozessen) ───────────────────────────────────── */

const TASKS = [
  { cx: -38, cy: -22, cr: -11 },
  { cx:  24, cy:  28, cr:   9 },
  { cx: -16, cy:  32, cr: -15 },
  { cx:  42, cy: -14, cr:  12 },
  { cx: -28, cy:   6, cr:  -7 },
  { cx:  10, cy: -28, cr:  13 },
];

const taskVariants = {
  floating: (i: number) => {
    const t = TASKS[i];
    return {
      x: [t.cx, t.cx * 0.65, t.cx * 1.25, t.cx * 0.85, t.cx],
      y: [t.cy, t.cy * 1.28, t.cy * 0.65, t.cy * 1.15, t.cy],
      rotate: [t.cr, t.cr * 1.2, t.cr * 0.75, t.cr * 1.1, t.cr],
      opacity: 0.28,
      transition: {
        duration: 2.6 + i * 0.4,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    };
  },
  ordered: (i: number) => ({
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 0.65,
    transition: {
      type: 'spring' as const,
      stiffness: 75,
      damping: 13,
      delay: i * 0.07,
    },
  }),
};

function ChaosVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="relative h-14 flex items-center">
      <div className="relative w-full">
        {TASKS.map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={taskVariants}
            animate={inView ? 'ordered' : 'floating'}
            className="absolute rounded"
            style={{
              width: 36 + (i % 3) * 10,
              height: 9,
              left: `${i * 14 + 1}%`,
              top: '50%',
              marginTop: -4,
              background: 'rgba(255,255,255,0.04)',
              border: '0.5px solid rgba(255,255,255,0.1)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Clock Visual (Langsame Reaktionszeiten) ─────────────────────────────── */

function ClockVisual() {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16" aria-hidden="true">
      <defs>
        <filter id="ps-cglow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Face rings */}
      <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <circle cx="40" cy="40" r="28" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

      {/* Hour marks */}
      {Array.from({ length: 12 }, (_, h) => {
        const a = (h / 12) * Math.PI * 2 - Math.PI / 2;
        const r1 = 30;
        const r2 = h % 3 === 0 ? 34 : 32;
        return (
          <line
            key={h}
            x1={40 + r1 * Math.cos(a)} y1={40 + r1 * Math.sin(a)}
            x2={40 + r2 * Math.cos(a)} y2={40 + r2 * Math.sin(a)}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={h % 3 === 0 ? 1.2 : 0.6}
          />
        );
      })}

      {/* Danger glow ring */}
      <circle cx="40" cy="40" r="26" fill="none" stroke="rgba(239,68,68,0.06)" strokeWidth="9" />

      {/* Hour hand */}
      <motion.g
        style={{ transformOrigin: '40px 40px' }}
        animate={{ rotate: [110, 125, 108, 130, 116, 360 + 110] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <line x1="40" y1="40" x2="40" y2="22"
          stroke="rgba(255,255,255,0.25)" strokeWidth="1.8" strokeLinecap="round" />
      </motion.g>

      {/* Minute hand — nervous */}
      <motion.g
        style={{ transformOrigin: '40px 40px' }}
        animate={{ rotate: [0, 28, -20, 42, -9, 58, -4, 360] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <line x1="40" y1="40" x2="40" y2="9"
          stroke="rgba(239,68,68,0.8)" strokeWidth="1.5" strokeLinecap="round"
          filter="url(#ps-cglow)"
        />
      </motion.g>

      {/* Center dot */}
      <circle cx="40" cy="40" r="2.5" fill="rgba(239,68,68,0.7)" />
    </svg>
  );
}

/* ── Stack Visual (Fehlende Priorisierung) ───────────────────────────────── */

const PLATES = [
  { w: 90,  r:  3.5, xd:  2   },
  { w: 72,  r: -2.5, xd: -2   },
  { w: 98,  r:  4.5, xd:  2.5 },
  { w: 66,  r: -3.5, xd: -1.5 },
  { w: 82,  r:  2.2, xd:  1   },
];

function StackVisual() {
  return (
    <div className="relative h-[62px] flex items-end justify-center">
      {PLATES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded"
          style={{
            width: p.w,
            height: 9,
            bottom: i * 12,
            left: '50%',
            marginLeft: -p.w / 2,
            background: 'rgba(255,255,255,0.04)',
            border: '0.5px solid rgba(255,255,255,0.1)',
          }}
          animate={{
            rotate: [p.r, p.r * 1.35, p.r * 0.55, p.r * 1.2, p.r],
            x: [0, p.xd * 4, -p.xd * 2.5, p.xd * 3, 0],
          }}
          transition={{
            duration: 2.3 + i * 0.28,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.13,
          }}
        />
      ))}
    </div>
  );
}

/* ── Pain Point Item ──────────────────────────────────────────────────────── */

interface PainPointProps {
  num: string;
  title: string;
  description: string;
  visual: ReactNode;
  delay: number;
  isLast?: boolean;
}

function PainPoint({ num, title, description, visual, delay, isLast = false }: PainPointProps) {
  return (
    <motion.div
      className={`relative flex gap-6 ${isLast ? '' : 'pb-14'}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {/* Timeline dot + connecting line */}
      <div className="flex flex-col items-center flex-shrink-0 w-5 mt-1">
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.24)',
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(239,68,68,0.65)' }} />
        </div>
        {!isLast && (
          <div
            className="flex-1 w-px mt-2"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">

        {/* Visual + number stacked — number definitively behind animation */}
        <div
          className="relative mb-4"
          style={{ isolation: 'isolate' }}
        >
          {/* Number — z:-10 within isolated stacking context */}
          <span
            className="absolute -z-10 pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[90px] font-black leading-none text-white/20"
            aria-hidden="true"
          >
            {num}
          </span>

          {/* Animated visual — on top */}
          <div className="relative z-10">{visual}</div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-[#9CA3AF] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

/* ── Right panel: subtle "ordered" contrast ──────────────────────────────── */

function OrderPanel() {
  const rows = 9, cols = 6;
  return (
    <div className="flex flex-col gap-2" aria-hidden="true" style={{ opacity: 0.055 }}>
      {Array.from({ length: rows }, (_, r) => (
        <div key={r} className="flex gap-2">
          {Array.from({ length: cols }, (_, c) => (
            <div
              key={c}
              className="rounded-sm bg-white"
              style={{ width: 18, height: 7 }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/* ── Main Export ──────────────────────────────────────────────────────────── */

export function ProblemSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
      }}
    >
      {/* Flickering danger glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(239,68,68,0.055) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.55, 1, 0.65, 1, 0.42, 1, 0.72, 0.55] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Warum du{' '}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
              automatisieren solltest
            </span>
          </h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
            Langsame Reaktionen, manuelle Arbeit und fehlende Priorisierung
            kosten jeden Tag Umsatz – und lassen sich systematisch lösen.
          </p>
        </div>

        {/* Timeline + right panel */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-10 items-start max-w-4xl mx-auto">

          {/* Left: pain points */}
          <div>
            <PainPoint
              num="01"
              title="Chaos in Prozessen"
              description="Manuelle Abläufe, doppelte Arbeit und fehlende Struktur sorgen dafür, dass dein Team Zeit mit Aufgaben verbringt, die automatisiert werden könnten."
              visual={<ChaosVisual />}
              delay={0}
            />
            <PainPoint
              num="02"
              title="Langsame Reaktionszeiten"
              description="Prozesse bleiben liegen, weil sie manuell bearbeitet werden müssen – während Kunden und Partner schnelle Antworten erwarten."
              visual={<ClockVisual />}
              delay={0.1}
            />
            <PainPoint
              num="03"
              title="Fehlende Priorisierung"
              description="Wichtiges und Unwichtiges landet im selben Eingang. Ohne automatische Priorisierung gehen wertvolle Vorgänge im Tagesgeschäft unter."
              visual={<StackVisual />}
              delay={0.2}
              isLast
            />
          </div>

          {/* Right: ordered contrast grid */}
          <div className="hidden md:flex items-start justify-center pt-24 sticky top-32">
            <OrderPanel />
          </div>

        </div>
      </div>
    </section>
  );
}
