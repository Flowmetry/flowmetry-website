'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

/* ── Scroll keypoints ─────────────────────────────────────────────────────── */
// [hero, AutomationBento convergence, mid-page, end]
const KEYS: number[] = [0, 0.28, 0.62, 1.0];

/* ── Planet data ──────────────────────────────────────────────────────────── */
interface P {
  x:       number[];
  y:       number[];
  scl:     number[]; // scale
  size:    number;
  color:   string;
  blur:    number;
}

const PLANETS: P[] = [
  // top-left → converge → drift right → exit bottom
  { x: [-440, -72, 270, -310], y: [-200, -38, -160, 320],  scl: [1.0, 1.35, 0.9, 0.65], size: 320, color: 'rgba(59,130,246,0.60)',  blur: 120 },
  // bottom-right → converge → drift left → exit top
  { x: [ 470,  80,-320,  220], y: [ 240,  68, 305, -200],  scl: [1.0, 1.20, 0.85,0.70], size: 260, color: 'rgba(139,92,246,0.60)',  blur: 120 },
  // bottom-left → converge → drift right
  { x: [-290,  58, 380, -150], y: [ 340,  88,-210,  275],  scl: [1.0, 1.28, 0.92,0.78], size: 240, color: 'rgba(34,211,238,0.55)',  blur: 120 },
  // top-right → converge → drift left
  { x: [ 380, -58,-220,  360], y: [-275, -78, 250, -145],  scl: [1.0, 1.18, 0.95,0.68], size: 280, color: 'rgba(59,130,246,0.58)',  blur: 120 },
  // bottom-center → converge → exit top-right
  { x: [ -58, -25,-365,  415], y: [ 415, 108,-290,   80],  scl: [1.0, 1.22, 0.88,0.72], size: 220, color: 'rgba(139,92,246,0.55)',  blur: 120 },
];

/* ── Planet component — each gets its own useTransform calls ──────────────── */
function Planet({ p, sy }: { p: P; sy: MotionValue<number> }) {
  const motionX  = useTransform(sy, KEYS, p.x);
  const motionY  = useTransform(sy, KEYS, p.y);
  const motionSc = useTransform(sy, KEYS, p.scl);
  const motionOp = useTransform(sy, [0, 0.04, 0.93, 1.0], [0, 0.92, 0.92, 0]);

  return (
    <motion.div
      style={{
        position:     'absolute',
        left:         '50%',
        top:          '40%',
        width:        p.size,
        height:       p.size,
        marginLeft:   -p.size / 2,
        marginTop:    -p.size / 2,
        borderRadius: '50%',
        background:   `radial-gradient(circle, ${p.color} 0%, transparent 65%)`,
        filter:       `blur(${p.blur}px)`,
        x:            motionX,
        y:            motionY,
        scale:        motionSc,
        opacity:      motionOp,
        pointerEvents:'none',
      }}
    />
  );
}

/* ── Central AI core ──────────────────────────────────────────────────────── */
function AICore() {
  return (
    <div style={{ position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}>
      {/* Outer atmospheric pulse */}
      <motion.div
        style={{
          width: 700, height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.13) 0%, rgba(34,211,238,0.05) 45%, transparent 70%)',
          filter: 'blur(90px)',
          marginLeft: -350, marginTop: -350,
          position: 'absolute',
        }}
        animate={{ scale: [1, 1.10, 1], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Mid glow */}
      <motion.div
        style={{
          width: 280, height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.40) 0%, rgba(34,211,238,0.18) 50%, transparent 70%)',
          filter: 'blur(45px)',
          marginLeft: -140, marginTop: -140,
          position: 'absolute',
        }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
      {/* Bright inner core */}
      <motion.div
        style={{
          width: 80, height: 80,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.85) 0%, rgba(34,211,238,0.45) 60%, transparent 80%)',
          filter: 'blur(16px)',
          marginLeft: -40, marginTop: -40,
          position: 'absolute',
        }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </div>
  );
}

/* ── Main export ──────────────────────────────────────────────────────────── */
export function CosmosBackground() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{
          zIndex: 0,
          maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        }}
      >
        <AICore />
        {PLANETS.map((p, i) => (
          <Planet key={i} p={p} sy={scrollYProgress} />
        ))}
      </div>

      {/* Noise texture */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.028, mixBlendMode: 'overlay', zIndex: 1 }}
        aria-hidden="true"
      >
        <filter id="cosmos-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cosmos-noise)" />
      </svg>
    </>
  );
}
