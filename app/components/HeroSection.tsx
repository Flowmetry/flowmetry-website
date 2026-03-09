'use client';

import { motion } from 'framer-motion';

/* ── Particle system ─────────────────────────────────────────────────────── */

interface Particle {
  startX: number; startY: number;
  midX:   number; midY:   number;
  dur:    number; delay:  number; rdly: number;
  blue:   boolean; size:  number; mobile: boolean;
}

function buildParticles(): Particle[] {
  const p: Particle[] = [];

  /** Perpendicular-offset midpoint → curved arc toward (0,0) */
  const crv = (sx: number, sy: number, pa: number) => {
    const l = Math.sqrt(sx * sx + sy * sy) || 1;
    return { midX: sx * 0.45 + (-sy / l) * pa, midY: sy * 0.45 + (sx / l) * pa };
  };

  const add = (
    sx: number, sy: number, pa: number,
    dur: number, delay: number, rdly: number,
    blue: boolean, mob: boolean,
  ) => {
    const { midX, midY } = crv(sx, sy, pa);
    p.push({ startX: sx, startY: sy, midX, midY, dur, delay, rdly, blue,
      size: Math.abs(pa) >= 55 ? 3 : 2, mobile: mob });
  };

  /* ── LEFT edge (13) ── */
  add(-355, -195,  45, 2.8, 0.0, 1.2, true,  true );
  add(-370, -130, -35, 3.1, 0.7, 0.8, false, true );
  add(-345,  -65,  55, 2.6, 1.5, 1.4, true,  true );
  add(-360,    5, -40, 3.3, 0.3, 0.9, false, true );
  add(-350,   75,  50, 2.9, 2.1, 1.1, true,  true );
  add(-375,  145, -30, 3.0, 0.9, 0.7, false, true );
  add(-340,  200,  45, 2.7, 1.6, 1.3, true,  false);
  add(-365, -165, -50, 3.2, 2.4, 0.8, false, false);
  add(-355, -100,  40, 2.8, 0.5, 1.0, true,  false);
  add(-380,   35, -55, 3.4, 1.2, 1.5, false, false);
  add(-345,  110,  35, 2.5, 2.8, 0.6, true,  false);
  add(-370,  175, -45, 3.1, 0.2, 1.2, false, false);
  add(-360,  -40,  60, 2.9, 1.9, 0.9, true,  false);

  /* ── RIGHT edge (13) ── */
  add( 355, -185, -45, 3.0, 0.4, 1.1, false, true );
  add( 370, -115,  40, 2.7, 1.1, 0.8, true,  true );
  add( 345,  -50, -50, 3.2, 0.0, 1.4, false, true );
  add( 360,   20,  35, 2.8, 1.8, 0.9, true,  true );
  add( 350,   90, -40, 3.1, 0.6, 1.0, false, true );
  add( 375,  160,  55, 2.9, 2.3, 0.7, true,  true );
  add( 340, -150, -35, 3.3, 1.4, 1.3, false, false);
  add( 365,  -80,  45, 2.6, 0.8, 1.1, true,  false);
  add( 355,   55, -55, 3.0, 2.0, 0.8, false, false);
  add( 380,  130,  30, 2.8, 0.3, 1.5, true,  false);
  add( 345,  195, -40, 3.4, 1.7, 0.6, false, false);
  add( 370,   -5,  50, 2.7, 2.6, 1.0, true,  false);
  add( 355, -215, -45, 3.1, 1.0, 1.2, false, false);

  /* ── TOP edge (12) ── */
  add(-215, -240,  50, 2.9, 0.2, 1.3, true,  true );
  add(-150, -255, -40, 3.1, 1.0, 0.9, false, true );
  add( -80, -245,  55, 2.7, 1.8, 1.1, true,  true );
  add(  -5, -260, -35, 3.3, 0.5, 0.8, false, true );
  add(  65, -250,  45, 2.8, 2.2, 1.4, true,  true );
  add( 135, -240, -50, 3.0, 0.9, 0.7, false, false);
  add( 200, -255,  40, 2.6, 1.5, 1.0, true,  false);
  add(-175, -260, -45, 3.2, 0.0, 1.2, false, false);
  add( -45, -245,  55, 2.9, 2.5, 0.9, true,  false);
  add( 105, -255, -35, 3.1, 0.7, 1.5, false, false);
  add( 175, -245,  50, 2.7, 1.3, 0.6, true,  false);
  add(-125, -260, -55, 3.4, 2.0, 1.1, false, false);

  /* ── BOTTOM edge (12) ── */
  add(-205,  240, -50, 3.0, 0.6, 1.0, false, true );
  add(-135,  255,  40, 2.8, 1.4, 0.8, true,  true );
  add( -60,  245, -45, 3.2, 0.1, 1.3, false, true );
  add(  20,  260,  55, 2.9, 2.0, 1.1, true,  true );
  add(  90,  250, -35, 3.1, 0.8, 0.7, false, true );
  add( 165,  240,  50, 2.7, 1.6, 1.4, true,  false);
  add(-175,  255, -40, 3.3, 0.3, 0.9, false, false);
  add( -25,  245,  45, 2.8, 2.3, 1.2, true,  false);
  add( 110,  260, -55, 3.0, 1.1, 0.8, false, false);
  add( 185,  250,  35, 2.6, 0.4, 1.5, true,  false);
  add(-105,  245, -50, 3.4, 1.9, 0.6, false, false);
  add(  50,  255,  45, 2.9, 2.7, 1.0, true,  false);

  return p;
}

const PARTICLES = buildParticles();

/* ── Automation Core ─────────────────────────────────────────────────────── */

function AutomationCore() {
  return (
    <div className="relative w-full flex items-center justify-center" style={{ height: 310 }}>

      {/* Particles — overflow clipped by section's overflow-hidden */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full${p.mobile ? '' : ' hidden sm:block'}`}
            style={{
              width:  p.size,
              height: p.size,
              background: p.blue
                ? 'rgba(59,130,246,0.9)'
                : 'rgba(34,211,238,0.8)',
            }}
            animate={{
              x:       [p.startX, p.midX, 0],
              y:       [p.startY, p.midY, 0],
              opacity: [0, 0.85, 0],
              scale:   [1.4, 1.0, 0.1],
            }}
            transition={{
              duration:    p.dur,
              delay:       p.delay,
              repeat:      Infinity,
              repeatDelay: p.rdly,
              ease:        'easeIn',
              times:       [0, 0.45, 1],
            }}
          />
        ))}
      </div>

      {/* Core — springs in from a point on load */}
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 55, damping: 16, delay: 0.28 }}
      >
        {/* Kinetic orbital ring 1 — slow clockwise, large */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 370, height: 370,
            border: '0.5px solid rgba(59,130,246,0.1)',
            scaleY: 0.28,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />

        {/* Kinetic orbital ring 2 — counter-clockwise */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 290, height: 290,
            border: '0.5px solid rgba(34,211,238,0.08)',
            scaleY: 0.3,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 62, repeat: Infinity, ease: 'linear' }}
        />

        {/* Kinetic orbital ring 3 — inner, steeper tilt */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 215, height: 215,
            border: '0.5px solid rgba(139,92,246,0.07)',
            scaleY: 0.22,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear', delay: 4 }}
        />

        {/* Atmospheric outer ring */}
        <motion.div
          className="absolute rounded-full"
          style={{ width: 250, height: 250, border: '0.5px solid rgba(59,130,246,0.09)' }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.45, 0.15, 0.45] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Second orbital ring */}
        <motion.div
          className="absolute rounded-full"
          style={{ width: 185, height: 185, border: '0.5px solid rgba(59,130,246,0.17)' }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.22, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
        />

        {/* Main glowing ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 120, height: 120,
            border: '1px solid rgba(34,211,238,0.42)',
            boxShadow: '0 0 28px rgba(34,211,238,0.11), 0 0 60px rgba(34,211,238,0.05)',
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Core radial glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 82, height: 82,
            background:
              'radial-gradient(circle, rgba(59,130,246,0.38) 0%, rgba(34,211,238,0.22) 40%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 56, height: 56,
            border: '1.5px solid rgba(34,211,238,0.68)',
            boxShadow: '0 0 18px rgba(34,211,238,0.28), inset 0 0 12px rgba(34,211,238,0.06)',
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.65 }}
        />

        {/* Center dot */}
        <div
          style={{
            position: 'relative', zIndex: 10,
            width: 13, height: 13, borderRadius: '50%',
            background: '#22D3EE',
            boxShadow: '0 0 16px rgba(34,211,238,0.95), 0 0 36px rgba(34,211,238,0.5)',
          }}
        />
      </motion.div>
    </div>
  );
}

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

/* ── Scroll Incentive ────────────────────────────────────────────────────── */

function ScrollIncentive() {
  return (
    <motion.div
      className="flex flex-col items-center mt-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    >
      <div className="relative" style={{ width: 1, height: 20 }}>
        <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.2)' }} />
        <motion.div
          style={{
            position: 'absolute', left: -1.5, top: -2,
            width: 4, height: 4, borderRadius: '50%',
            background: 'rgba(255,255,255,0.65)',
            boxShadow: '0 0 5px rgba(255,255,255,0.35)',
          }}
          animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}

/* ── Main Export ─────────────────────────────────────────────────────────── */

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-28">

      {/* ROI calculator CSS — injected here for global availability */}
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

      {/* ── Dot grid — masked toward core ── */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #3A4055 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 62% 52% at 50% 42%, transparent 18%, black 62%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 62% 52% at 50% 42%, transparent 18%, black 62%)',
        }}
      />

      {/* ── Top blue glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 95% 65% at 50% -5%, rgba(59,130,246,0.38) 0%, transparent 62%)',
        }}
      />

      {/* ── Center depth ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(59,130,246,0.09) 0%, transparent 70%)',
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

        {/* Headline — slides in from top */}
        <motion.h1
          className="text-[2.25rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.25rem] font-bold leading-[1.08] tracking-tight mb-6"
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
          className="text-base md:text-lg text-[#9CA3AF] leading-relaxed mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.36 }}
        >
          Manuelle Prozesse kosten dich jeden Tag Zeit, Nerven und
          Geschwindigkeit – während andere Unternehmen längst automatisiert
          arbeiten.
        </motion.p>

        {/* Automation Core — springs from a point */}
        <AutomationCore />

        {/* Scroll incentive */}
        <ScrollIncentive />

        {/* KPIs */}
        <motion.div
          className="flex items-center justify-center divide-x divide-[#2A2F3A]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
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
