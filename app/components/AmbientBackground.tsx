'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

/* ── Ambient blob ─────────────────────────────────────────────────────────── */

function Blob({
  w, h, left, top, color, dur, delay = 0,
}: {
  w: number; h: number; left: string; top: string;
  color: string; dur: number; delay?: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: w, height: h, left, top,
        background: `radial-gradient(ellipse, ${color} 0%, transparent 70%)`,
        filter: 'blur(120px)',
      }}
      animate={{ x: [0, 45, -28, 18, 0], y: [0, -35, 22, -12, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

/* ── Planet orb — scroll-choreographed ───────────────────────────────────── */

function Planet({
  scrollYProgress, appear, disappear,
  left, top, size, color,
}: {
  scrollYProgress: MotionValue<number>;
  appear: number; disappear: number;
  left: string; top: string;
  size: number; color: string;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, appear - 0.06), appear, disappear, Math.min(1, disappear + 0.06)],
    [0, 0.55, 0.55, 0],
  );
  const y = useTransform(scrollYProgress, [appear, disappear], ['0px', '-45px']);

  return (
    <motion.div
      style={{
        position: 'absolute', left, top,
        width: size, height: size, borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
        filter: `blur(${Math.round(size / 2.5)}px)`,
        opacity, y,
        pointerEvents: 'none',
      }}
    />
  );
}

/* ── Main export ──────────────────────────────────────────────────────────── */

export function AmbientBackground() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Fixed ambient layer — z-0 so all content sits above */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        {/* ── Ambient blobs (very slow, large) ── */}
        <Blob w={900} h={700} left="-12%" top="-18%" color="rgba(59,130,246,0.085)"  dur={65} />
        <Blob w={750} h={750} left="58%"  top="42%"  color="rgba(139,92,246,0.07)"   dur={80} delay={14} />
        <Blob w={650} h={520} left="62%"  top="2%"   color="rgba(34,211,238,0.05)"   dur={72} delay={28} />
        <Blob w={600} h={600} left="-8%"  top="62%"  color="rgba(59,130,246,0.06)"   dur={90} delay={42} />

        {/* ── Planetary orbs (scroll-choreographed) ── */}
        <Planet scrollYProgress={scrollYProgress}
          appear={0.08} disappear={0.35}
          left="76%" top="16%"
          size={220} color="rgba(59,130,246,0.28)" />

        <Planet scrollYProgress={scrollYProgress}
          appear={0.20} disappear={0.48}
          left="4%"  top="36%"
          size={180} color="rgba(139,92,246,0.24)" />

        <Planet scrollYProgress={scrollYProgress}
          appear={0.32} disappear={0.62}
          left="70%" top="52%"
          size={200} color="rgba(34,211,238,0.20)" />

        <Planet scrollYProgress={scrollYProgress}
          appear={0.48} disappear={0.78}
          left="6%"  top="60%"
          size={160} color="rgba(139,92,246,0.22)" />

        <Planet scrollYProgress={scrollYProgress}
          appear={0.65} disappear={0.96}
          left="78%" top="68%"
          size={190} color="rgba(59,130,246,0.25)" />

      </div>

      {/* Noise texture overlay */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.025, mixBlendMode: 'overlay', zIndex: 1 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="amb-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#amb-noise)" />
      </svg>
    </>
  );
}
