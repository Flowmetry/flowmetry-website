'use client';

import { motion } from 'framer-motion';

/* ── Floating atmospheric gradients ─────────────────────────────────────── */

function FloatingGradients() {
  return (
    <>
      {/* Deep blue — top-left */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 720, height: 520,
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.10) 0%, transparent 70%)',
          left: '8%', top: '-18%',
        }}
        animate={{ x: [0, 38, -22, 14, 0], y: [0, -28, 36, -12, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Violet — bottom-right */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 620, height: 500,
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)',
          right: '4%', bottom: '-22%',
        }}
        animate={{ x: [0, -32, 24, -14, 0], y: [0, 32, -28, 16, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />
    </>
  );
}

/* ── Main Export ─────────────────────────────────────────────────────────── */

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-[120px] pb-24"
      style={{
        maskImage: 'linear-gradient(to bottom, black 75%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent)',
      }}
    >

      {/* ROI calculator pulse — global */}
      <style>{`
        @keyframes roi-glow {
          0%, 100% { box-shadow: 0 0 0 1px rgba(251,146,60,0.08), 0 0 24px rgba(251,146,60,0.04); }
          50%       { box-shadow: 0 0 0 1px rgba(251,146,60,0.20), 0 0 40px rgba(251,146,60,0.09); }
        }
        .roi-calculator-card { animation: roi-glow 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .roi-calculator-card { animation: none; } }
      `}</style>

      {/* ── Floating atmospheric gradients ── */}
      <FloatingGradients />

      {/* ── Dot grid — transparent centre creates depth behind planet ── */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #3A4055 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 52% 44% at 50% 42%, transparent 32%, black 62%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 52% 44% at 50% 42%, transparent 32%, black 62%)',
        }}
      />

      {/* ── Top edge glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 95% 65% at 50% -5%, rgba(59,130,246,0.38) 0%, transparent 62%)',
        }}
      />

      {/* ── Corona glow — planet light illuminating the text ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 55%, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-3xl mx-auto px-6 md:px-8 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="inline-flex rounded-md px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase mb-8"
          style={{
            background: 'rgba(10,13,20,0.72)',
            border: '1.5px solid rgba(59,130,246,0.6)',
            boxShadow: '0 0 22px rgba(59,130,246,0.16), inset 0 0 12px rgba(59,130,246,0.05)',
            color: '#8BAED4',
          }}
        >
          AI Automation Infrastruktur
        </motion.div>

        {/* Soft glow sitting directly behind headline */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            top: '12%',
            width: 700,
            height: 260,
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
            filter: 'blur(52px)',
          }}
        />

        {/* Headline */}
        <motion.h1
          className="text-[2.25rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.25rem] font-bold leading-[1.08] tracking-tight mb-5 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.18 }}
        >
          Automatisiere, was
          <br />
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
            dich ausbremst
          </span>
          .
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base md:text-lg text-[#9CA3AF] leading-relaxed mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.36 }}
        >
          Manuelle Prozesse kosten dich jeden Tag Zeit, Nerven und
          Geschwindigkeit – während andere Unternehmen längst automatisiert
          arbeiten.
        </motion.p>

        {/* KPIs — hover over the planet */}
        <motion.div
          className="flex items-center justify-center divide-x divide-[#2A2F3A]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.52 }}
        >
          {[
            { value: '< 5 Min', label: 'Reaktionszeit' },
            { value: '100%',    label: 'Automatisiert' },
            { value: '2–4 Wo.', label: 'Time to Live'  },
          ].map(({ value, label }) => (
            <div key={label} className="px-6 sm:px-10 text-center">
              <div className="text-xl font-bold text-white">{value}</div>
              <div className="text-xs text-[#9CA3AF] mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
