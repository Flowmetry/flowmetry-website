'use client';

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useRef, useLayoutEffect, useState, useCallback, useEffect } from 'react';
import { CalendarDays, Lightbulb, Wrench, Users } from 'lucide-react';

const BRAND = '#8B4A1E';

const SCHRITTE = [
  {
    num: '1',
    icon: CalendarDays,
    title: 'Erstgespräch',
    points: [
      'Termin buchen & kennenlernen',
      'Alltag, Abläufe & Engpässe besprechen',
      'Kostenlos, unverbindlich, 30 Minuten',
    ],
    pointsMobile: [
      'Termin buchen & kennenlernen',
      'Alltag & Engpässe besprechen',
      'Kostenlos, unverbindlich, 30 Min.',
    ],
  },
  {
    num: '2',
    icon: Lightbulb,
    title: 'Empfehlung',
    points: [
      'Klare Einschätzung was für dich Sinn macht',
      'Beratung, Automatisierung oder System-Build',
      'Ehrlich – keine Verkaufsnummer',
    ],
    pointsMobile: [
      'Klare Einschätzung, was passt',
      'Beratung, Automation oder Build',
      'Ehrlich – keine Verkaufsnummer',
    ],
  },
  {
    num: '3',
    icon: Wrench,
    title: 'Umsetzung',
    points: [
      'Session, Workflow oder komplettes System',
      'Ich setze um was wir besprochen haben',
      'Regelmäßige Updates, kein Warten im Dunkeln',
    ],
    pointsMobile: [
      'Session, Workflow oder System',
      'Ich setze das Besprochene um',
      'Updates ohne Warten im Dunkeln',
    ],
  },
  {
    num: '4',
    icon: Users,
    title: 'Langfristig an deiner Seite',
    points: [
      'Erreichbar auch nach der Umsetzung',
      'Schnelle Hilfe bei Fehlern & Änderungen',
      'Wächst mit deinen Anforderungen',
    ],
    pointsMobile: [
      'Erreichbar nach der Umsetzung',
      'Hilfe bei Fehlern & Änderungen',
      'Wächst mit deinen Anforderungen',
    ],
  },
];

// ─── Step Visuals (rein visuell, kein Text) ───────────────────────────────────

function Step1Visual() {
  // 7 Spalten × 3 Reihen, Zelle [col=3, row=1] markiert
  // Grid: startX=26, cw=52, gx=4 → 7*52+6*4=388, endet bei 26+388=414
  // Grid: startY=72, ch=30, gy=6 → 3*30+2*6=102, endet bei 72+102=174
  const cw = 52, ch = 30, gx = 4, gy = 6;
  const sx = 26, sy = 72;
  const hCol = 3, hRow = 1;

  return (
    <div className="w-full h-full flex items-center justify-center p-5">
      <svg
        viewBox="0 0 440 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* 3-D Tiefenschichten */}
        <rect x="16" y="16" width="416" height="170" rx="14" fill="rgba(139,74,30,0.05)" />
        <rect x="10" y="10" width="422" height="176" rx="14" fill="rgba(139,74,30,0.09)" />

        {/* Fenster */}
        <rect x="3" y="3" width="434" height="185" rx="14" fill="white" />

        {/* Titelleiste */}
        <rect x="3" y="3" width="434" height="36" rx="14" fill="#F4F4F5" />
        <rect x="3" y="27" width="434" height="12" fill="#F4F4F5" />

        {/* Traffic Lights */}
        <circle cx="23" cy="21" r="5.5" fill="#FF5F57" />
        <circle cx="39" cy="21" r="5.5" fill="#FFBD2E" />
        <circle cx="55" cy="21" r="5.5" fill="#28CA41" />

        {/* URL-Leiste */}
        <rect x="74" y="11" width="282" height="20" rx="10" fill="#E4E4E6" />
        <rect x="86" y="18" width="6" height="6" rx="3" fill="#C4C4C6" />
        <rect x="98" y="19.5" width="90" height="4" rx="2" fill="#C4C4C6" />

        {/* Separator */}
        <line x1="3" y1="39" x2="437" y2="39" stroke="#E8E8EA" strokeWidth="1" />

        {/* Monats-Nav: gefärbter Bar + zwei Pfeil-Shapes */}
        <rect x={sx} y="48" width="64" height="10" rx="5" fill="rgba(139,74,30,0.28)" />
        <path d="M398 57 L404 52 L404 62 Z" fill="rgba(28,22,20,0.14)" />
        <path d="M416 57 L410 52 L410 62 Z" fill="rgba(28,22,20,0.14)" />

        {/* Wochentag-Köpfe: 7 dünne Pillen */}
        {Array.from({ length: 7 }).map((_, c) => (
          <rect
            key={`hd${c}`}
            x={sx + c * (cw + gx)}
            y="63"
            width={cw}
            height="5"
            rx="2.5"
            fill="rgba(28,22,20,0.07)"
          />
        ))}

        {/* Kalender-Zellen */}
        {Array.from({ length: 3 }).map((_, r) =>
          Array.from({ length: 7 }).map((_, c) => {
            const isHL = c === hCol && r === hRow;
            const isPast = r < hRow || (r === hRow && c < hCol);
            return (
              <rect
                key={`${r}-${c}`}
                x={sx + c * (cw + gx)}
                y={sy + r * (ch + gy)}
                width={cw}
                height={ch}
                rx="8"
                fill={isHL ? BRAND : isPast ? 'rgba(139,74,30,0.09)' : '#F0F0F2'}
              />
            );
          })
        )}

        {/* Maus-Cursor — Spitze ~10px über Zellen-Mitte */}
        <g transform="translate(200, 103) scale(1.22)">
          <path
            d="M1,1 L1,16.5 L4.2,12.5 L7,19.5 L9.4,18.4 L6.6,11.5 L11.2,11.5 Z"
            fill="white"
            stroke={BRAND}
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </g>

        {/* Tooltip rechts vom Cursor */}
        <filter id="tooltip-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.18)" />
        </filter>
        <rect x="218" y="100" width="116" height="28" rx="7"
          fill="white"
          filter="url(#tooltip-shadow)"
        />
        <text
          x="226" y="118"
          fontFamily="Arial, sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="#1C1614"
        >
          Montag · 11 Uhr
        </text>
      </svg>
    </div>
  );
}

function Step2Visual() {
  // Drei Optionszeilen: Radio-Kreis + Balken, mittlere aktiv
  const rows = [false, true, false];

  return (
    <div className="w-full h-full flex items-center justify-center px-10 py-6">
      <div className="w-full max-w-[320px] flex flex-col gap-2.5">
        {rows.map((active, i) => (
          <div
            key={i}
            className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl"
            style={active ? {
              background: 'rgba(139,74,30,0.07)',
              outline: '1.5px solid rgba(139,74,30,0.25)',
            } : {
              background: 'rgba(28,22,20,0.03)',
              outline: '1.5px solid rgba(28,22,20,0.07)',
            }}
          >
            {/* Radio-Kreis */}
            <div
              className="w-4 h-4 rounded-full flex-shrink-0 border-2 flex items-center justify-center"
              style={active ? {
                background: BRAND,
                borderColor: BRAND,
              } : {
                background: 'transparent',
                borderColor: 'rgba(28,22,20,0.18)',
              }}
            >
              {active && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
            </div>

            {/* Balken-Platzhalter / aktiver Text */}
            <div className="flex-1 flex flex-col gap-1.5">
              {active ? (
                <>
                  <span className="text-[11px] font-semibold leading-none" style={{ color: BRAND }}>Beratung</span>
                  <span className="text-[9px] leading-none" style={{ color: 'rgba(139,74,30,0.55)' }}>Empfohlen für dich</span>
                </>
              ) : (
                <>
                  <div className="h-2 rounded-full w-3/5" style={{ background: 'rgba(28,22,20,0.10)' }} />
                  <div className="h-1.5 rounded-full w-2/5" style={{ background: 'rgba(28,22,20,0.06)' }} />
                </>
              )}
            </div>

            {/* Aktiv-Badge */}
            {active && (
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: BRAND, opacity: 0.7 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Step3Visual() {
  // Drei verbundene Nodes mit Pfeilverbindungen, letzter aktiv
  return (
    <div className="w-full h-full flex items-center justify-center px-10 py-6">
      <div className="w-full max-w-[340px] flex flex-col gap-3">
        {/* Node-Reihe */}
        <div className="flex items-center">
          {[false, false, true].map((active, i) => (
            <div key={i} className="flex items-center flex-1 min-w-0">
              <div
                className="flex-1 h-16 rounded-xl flex items-center justify-center"
                style={active ? {
                  background: 'rgba(139,74,30,0.10)',
                  outline: '1.5px solid rgba(139,74,30,0.30)',
                } : {
                  background: 'rgba(28,22,20,0.05)',
                  outline: '1.5px solid rgba(28,22,20,0.08)',
                }}
              >
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md" style={{ background: active ? `rgba(139,74,30,0.30)` : 'rgba(28,22,20,0.10)' }} />
                  <div className="w-8 h-1.5 rounded-full" style={{ background: active ? `rgba(139,74,30,0.20)` : 'rgba(28,22,20,0.07)' }} />
                </div>
              </div>
              {i < 2 && (
                <svg width="28" height="10" viewBox="0 0 28 10" fill="none" className="flex-shrink-0 mx-1">
                  <line x1="0" y1="5" x2="20" y2="5" stroke="rgba(139,74,30,0.25)" strokeWidth="1.5" strokeDasharray="3 2" />
                  <path d="M18 2 L22 5 L18 8" stroke="rgba(139,74,30,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Fortschritts-Streifen */}
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(28,22,20,0.06)' }}>
          <div className="h-full w-full rounded-full" style={{ background: `linear-gradient(to right, ${BRAND}, rgba(139,74,30,0.4))` }} />
        </div>

        {/* Floating Label unter aktivem Node */}
        <div className="flex justify-end pr-1">
          <div
            className="px-3 py-1.5 rounded-lg bg-white text-[11px] font-semibold"
            style={{ color: '#1C1614', boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
          >
            Erik <span style={{ fontStyle: 'italic' }}>schreibt...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step4Visual() {
  // Status-Zeilen mit Punkt-Indikatoren + Puls-Linie, kein Text
  return (
    <div className="w-full h-full flex items-center justify-center px-10 py-6 relative">
      <div className="w-full max-w-[320px] flex flex-col gap-2.5">
        {/* Status-Zeilen */}
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: 'rgba(28,22,20,0.03)', outline: '1px solid rgba(28,22,20,0.07)' }}
          >
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#22C55E', boxShadow: '0 0 6px rgba(34,197,94,0.50)' }} />
            <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(28,22,20,0.09)', width: `${70 - i * 12}%` }} />
            <div className="h-1.5 rounded-full w-10 flex-shrink-0" style={{ background: 'rgba(28,22,20,0.06)' }} />
          </div>
        ))}

        {/* Puls-Linie */}
        <svg viewBox="0 0 300 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full mt-1" style={{ opacity: 0.45 }}>
          <path
            d="M0,11 L50,11 L62,2 L74,20 L86,2 L98,20 L110,11 L160,11 L168,7 L176,15 L184,7 L192,15 L200,11 L300,11"
            stroke="#22C55E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Floating Label – schwebt über der ersten Statuszeile, rechts */}
      <div
        className="absolute px-3 py-1.5 rounded-lg bg-white text-[11px] font-semibold"
        style={{
          color: '#1C1614',
          boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
          top: '22%',
          right: '8%',
        }}
      >
        Immer <span style={{ fontStyle: 'italic' }}>erreichbar.</span>
      </div>
    </div>
  );
}

const STEP_VISUALS = [
  <Step1Visual key="1" />,
  <Step2Visual key="2" />,
  <Step3Visual key="3" />,
  <Step4Visual key="4" />,
];

// Smooth opacity fade: 0.28 wenn Dot weit unter Mitte, 1 wenn Dot die Mitte erreicht hat.
// Läuft als pure MotionValue – kein React-Re-Render.
function useStepOpacity(
  scrollY: MotionValue<number>,
  index: number,
  dotAbsY: React.MutableRefObject<number[]>,
) {
  return useTransform(scrollY, (y) => {
    const dotY = dotAbsY.current[index];
    if (!dotY) return 0.28;
    const center = y + window.innerHeight * 0.5;
    const dist = dotY - center; // positiv = Dot noch unterhalb der Mitte
    if (dist <= 0) return 1;
    if (dist >= 120) return 0.28;
    return 1 - (1 - 0.28) * (dist / 120);
  });
}

export function ProzessSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textContainerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ulRefs = useRef<(HTMLUListElement | null)[]>([]);

  const dotAbsY = useRef<number[]>([]);
  const lineMaxRef = useRef(0);
  const lineTrackRef = useRef(0);
  const lastStepBottomAbsY = useRef(0);

  const [lineTop, setLineTop] = useState(0);
  const [lineMaxHeight, setLineMaxHeight] = useState(0);
  const [lineTrackHeight, setLineTrackHeight] = useState(0);

  // Dynamische Platzhalter-Geometrie (Höhe + Offset von Zahlenmitte bis letzter Bullet)
  const [placeholderStyles, setPlaceholderStyles] = useState<{ marginTop: number; height: number }[]>(
    SCHRITTE.map(() => ({ marginTop: 50, height: 160 }))
  );

  // Nur State für Dot-Zustand – wird max. 3× pro Timeline-Durchlauf geändert
  const [activeStep, setActiveStep] = useState(-1);
  const activeStepRef = useRef(-1);

  const { scrollY } = useScroll();

  // ── Messung ────────────────────────────────────────────────────────────────
  const measure = useCallback(() => {
    const container = timelineRef.current;
    if (!container) return;

    const containerAbsTop = container.getBoundingClientRect().top + window.scrollY;
    const positions: number[] = [];
    const relPositions: number[] = [];

    dotRefs.current.forEach((el) => {
      if (!el) { positions.push(0); relPositions.push(0); return; }
      const r = el.getBoundingClientRect();
      const absCenter = r.top + window.scrollY + r.height / 2;
      positions.push(absCenter);
      relPositions.push(absCenter - containerAbsTop);
    });

    dotAbsY.current = positions;

    const first = relPositions[0] ?? 0;
    const last = relPositions[relPositions.length - 1] ?? 0;
    setLineTop(first);
    setLineMaxHeight(last - first);
    lineMaxRef.current = last - first;

    const lastStepEl = stepRefs.current[SCHRITTE.length - 1];
    if (lastStepEl) {
      const sr = lastStepEl.getBoundingClientRect();
      const extBottom = sr.bottom + window.scrollY - containerAbsTop;
      setLineTrackHeight(extBottom - first);
      lineTrackRef.current = extBottom - first;
      lastStepBottomAbsY.current = sr.bottom + window.scrollY;
    } else {
      setLineTrackHeight(last - first);
      lineTrackRef.current = last - first;
      lastStepBottomAbsY.current = positions[positions.length - 1] ?? 0;
    }

    // Platzhalter-Geometrie: Oberkante = Zahlenmitte, Unterkante = letzter Bullet
    const newPlaceholderStyles = SCHRITTE.map((_, i) => {
      const numberEl = numberRefs.current[i];
      const textContainerEl = textContainerRefs.current[i];
      const ulEl = ulRefs.current[i];
      if (!numberEl || !textContainerEl || !ulEl) return { marginTop: 50, height: 160 };

      const textTop = textContainerEl.getBoundingClientRect().top + window.scrollY;
      const numberRect = numberEl.getBoundingClientRect();
      const ulRect = ulEl.getBoundingClientRect();

      const numberCenterY = numberRect.top + window.scrollY + numberRect.height / 2;
      const ulBottomY = ulRect.bottom + window.scrollY;

      return {
        marginTop: numberCenterY - textTop,
        height: Math.max(40, ulBottomY - numberCenterY),
      };
    });
    setPlaceholderStyles(newPlaceholderStyles);
  }, []);

  useLayoutEffect(() => {
    measure();
    document.fonts?.ready.then(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener('resize', measure);
    return () => { ro.disconnect(); window.removeEventListener('resize', measure); };
  }, [measure]);

  // ── Bar-Fill: reine MotionValue, kein React-State ──────────────────────────
  const fillHeightRaw = useTransform(scrollY, (y) => {
    const pos = dotAbsY.current;
    if (!pos.length || !lineMaxRef.current) return 0;

    const center = y + window.innerHeight * 0.5;
    const first = pos[0];
    const last = pos[pos.length - 1];
    const stepEnd = lastStepBottomAbsY.current;

    if (center <= last) {
      return Math.max(0, (center - first) / (last - first)) * lineMaxRef.current;
    } else {
      const phase2Range = stepEnd - last;
      const phase2Progress = phase2Range > 0 ? Math.min(1, (center - last) / phase2Range) : 1;
      return lineMaxRef.current + phase2Progress * (lineTrackRef.current - lineMaxRef.current);
    }
  });
  const fillHeight = fillHeightRaw;

  // ── Step-Opazitäten: reine MotionValues ───────────────────────────────────
  const stepOpacity0 = useStepOpacity(scrollY, 0, dotAbsY);
  const stepOpacity1 = useStepOpacity(scrollY, 1, dotAbsY);
  const stepOpacity2 = useStepOpacity(scrollY, 2, dotAbsY);
  const stepOpacity3 = useStepOpacity(scrollY, 3, dotAbsY);
  const stepOpacities = [stepOpacity0, stepOpacity1, stepOpacity2, stepOpacity3];

  // ── Dot-Zustand: Re-Render nur beim Stufenwechsel ─────────────────────────
  useEffect(() => {
    return scrollY.on('change', (y) => {
      const pos = dotAbsY.current;
      if (!pos.length || !lineMaxRef.current) return;

      const center = y + window.innerHeight * 0.5;
      const first = pos[0];

      let newActive = -1;
      if (center >= first) {
        let closest = 0;
        let minDist = Infinity;
        pos.forEach((p, i) => {
          const d = Math.abs(p - center);
          if (d < minDist) { minDist = d; closest = i; }
        });
        newActive = closest;
      }

      if (newActive !== activeStepRef.current) {
        activeStepRef.current = newActive;
        setActiveStep(newActive);
      }
    });
  }, [scrollY]);

  return (
    <section id="prozess" className="py-12 md:py-24">
      <div className="max-w-[1120px] mx-auto px-8">

        {/* Headline */}
        <div className="text-center mb-8 md:mb-24">
          <h2
            className="font-semibold tracking-tighter text-[#1C1614] leading-[1.05]"
            style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3rem)' }}
          >
            Du willst ein{' '}
            <span style={{ fontFamily: 'var(--font-signature)', fontStyle: 'italic', fontWeight: 700, color: BRAND, fontSize: '1.1em' }}>
              Erstgespräch?
            </span>
          </h2>
          <p className="text-sm md:text-base font-normal text-[#1C1614]/60 leading-relaxed mt-3 max-w-xl mx-auto">
            <span className="block">Strukturiert. Transparent. Ohne versteckte Agenda.</span>
            <span className="block">Du weißt nach 30 Minuten genau was möglich ist.</span>
          </p>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>

          {/* Grauer Track – Dot 1 bis Ende Schritt 4 */}
          {lineTrackHeight > 0 && (
            <div
              className="absolute rounded-full"
              style={{
                width: '8px',
                left: '16px',
                top: lineTop,
                height: lineTrackHeight,
                background: 'rgba(28,22,20,0.10)',
              }}
            />
          )}

          {/* Brand-Fill */}
          {lineMaxHeight > 0 && (
            <motion.div
              className="absolute rounded-full origin-top"
              style={{
                width: '8px',
                left: '16px',
                top: lineTop,
                height: fillHeight,
                background: BRAND,
              }}
            />
          )}

          {/* Steps */}
          <div className="flex flex-col">
            {SCHRITTE.map((s, i) => {
              const isPast = activeStep > i;
              const isActive = activeStep === i;

              return (
                <div
                  key={s.num}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className="flex items-start gap-10 pb-20 last:pb-0"
                >

                  {/* Dot */}
                  <div className="w-10 flex-shrink-0 flex justify-center pt-10 relative z-10">
                    <motion.div
                      ref={(el) => { dotRefs.current[i] = el; }}
                      className="rounded-full border-2"
                      animate={
                        isActive
                          ? { borderColor: BRAND, backgroundColor: BRAND, width: '26px', height: '26px', boxShadow: `0 0 0 6px rgba(139,74,30,0.12)` }
                          : isPast
                          ? { borderColor: BRAND, backgroundColor: BRAND, width: '20px', height: '20px', boxShadow: 'none' }
                          : { borderColor: 'rgba(28,22,20,0.18)', backgroundColor: 'white', width: '20px', height: '20px', boxShadow: 'none' }
                      }
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  </div>

                  {/* Inhalt */}
                  <div className="flex-1 flex items-start justify-between gap-6">

                    {/* Text */}
                    <motion.div
                      className="flex-1"
                      ref={(el) => { textContainerRefs.current[i] = el; }}
                      style={{ opacity: stepOpacities[i] }}
                    >
                      <div
                        ref={(el) => { numberRefs.current[i] = el; }}
                        className="font-black select-none"
                        style={{
                          fontSize: 'clamp(96px, 11vw, 144px)',
                          lineHeight: 0.82,
                          color: 'rgba(28,22,20,0.10)',
                        }}
                      >
                        {s.num}
                      </div>

                      <h3
                        className="font-bold tracking-tight mb-3"
                        style={{
                          fontSize: 'clamp(1.7rem, 2.6vw, 2.4rem)',
                          color: BRAND,
                          fontStyle: 'italic',
                          fontFamily: 'var(--font-signature)',
                        }}
                      >
                        {s.title}
                      </h3>

                      <ul ref={(el) => { ulRefs.current[i] = el; }} className="flex flex-col gap-2">
                        {s.points.map((point, pi) => (
                          <li key={pi} className="flex items-center gap-2.5">
                            <span className="font-bold flex-shrink-0" style={{ color: BRAND, fontSize: '1.1rem' }}>+</span>
                            <span className="text-[#1C1614]/65 leading-snug" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.1rem)' }}>
                              <span className="md:hidden">{s.pointsMobile[pi]}</span>
                              <span className="hidden md:inline">{point}</span>
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Mobile Visual – nur auf kleinen Screens */}
                      <div
                        className="md:hidden mt-5 w-full rounded-2xl overflow-hidden relative"
                        style={{
                          height: '220px',
                          background: '#ffffff',
                          boxShadow: '0 10px 36px rgba(139,74,30,0.10), 0 3px 10px rgba(139,74,30,0.06)',
                        }}
                      >
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,74,30,0.25) 1.2px, transparent 0)',
                            backgroundSize: '20px 20px',
                            maskImage: 'radial-gradient(ellipse at center, transparent 38%, black 56%, transparent 84%)',
                            WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 38%, black 56%, transparent 84%)',
                          }}
                        />
                        <div className="relative flex-1 flex z-10 w-full h-full">
                          {STEP_VISUALS[i]}
                        </div>
                      </div>
                    </motion.div>

                    {/* Visualisierung */}
                    <motion.div
                      className="hidden md:flex w-[470px] flex-shrink-0 rounded-2xl overflow-hidden relative"
                      style={{
                        background: '#ffffff',
                        background: '#ffffff',
                        boxShadow: '0 10px 36px rgba(139,74,30,0.10), 0 3px 10px rgba(139,74,30,0.06)',
                        opacity: stepOpacities[i],
                        marginTop: placeholderStyles[i].marginTop,
                        height: placeholderStyles[i].height,
                        alignSelf: 'flex-start',
                      }}
                    >
                      {/* Dot-Pattern: in der Mitte transparent (hinter Visuals), Ring sichtbar, Rand ausblendet */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,74,30,0.25) 1.2px, transparent 0)',
                          backgroundSize: '20px 20px',
                          maskImage: 'radial-gradient(ellipse at center, transparent 38%, black 56%, transparent 84%)',
                          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 38%, black 56%, transparent 84%)',
                        }}
                      />
                      {/* Inhalt über dem Dot-Pattern */}
                      <div className="relative flex-1 flex z-10">
                        {STEP_VISUALS[i]}
                      </div>
                    </motion.div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button
            data-cal-link="erik-neinstel-mshw1t/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: BRAND }}
          >
            Kostenloses Erstgespräch buchen
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <p className="text-xs text-[#1C1614]/35 mt-3">30 Minuten · Kostenlos · Unverbindlich</p>
        </div>

      </div>
    </section>
  );
}
