'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const BRAND = '#8B4A1E';
const BRAND_LIGHT = 'rgba(139,74,30,0.08)';
const BRAND_MID = 'rgba(139,74,30,0.15)';

/* ── Card 1: Copy-Paste ── */
const TABLE_ROWS = [
  { name: 'Max Müller', betrag: '2.400 €' },
  { name: 'Anna Schmidt', betrag: '890 €' },
  { name: 'Peter Braun', betrag: '1.750 €' },
];

type CopyPhase = 'to-name' | 'copy-menu' | 'to-kopieren' | 'copied' | 'to-field' | 'paste-menu' | 'to-einfuegen' | 'pasted';

function SmallCursor() {
  return (
    <svg width="13" height="17" viewBox="0 0 13 17" fill="none">
      <path d="M1 1L1 14.5L4.2 10.5L6.5 16L8.3 15.3L6 9.8L11.5 9.8L1 1Z"
        fill="white" stroke="#1C1614" strokeWidth="0.9" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function ManualWorkAnim() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef0 = useRef<HTMLDivElement>(null);
  const rowRef1 = useRef<HTMLDivElement>(null);
  const rowRef2 = useRef<HTMLDivElement>(null);
  const rowRefs = [rowRef0, rowRef1, rowRef2];
  const kopierenRef = useRef<HTMLDivElement>(null);
  const einfuegenRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  const inView = useInView(containerRef, { once: false });
  const [row, setRow] = useState(0);
  const [phase, setPhase] = useState<CopyPhase>('to-name');
  const [curPos, setCurPos] = useState({ x: 40, y: 60 });
  const [menuAnchor, setMenuAnchor] = useState({ x: 0, y: 0 });
  const [pastedName, setPastedName] = useState('');
  const [pastedBetrag, setPastedBetrag] = useState('');

  // Measure position of an element relative to the container
  const measure = (el: HTMLElement | null, ox = 8, oy = 8) => {
    if (!el || !containerRef.current) return { x: 40, y: 60 };
    const cr = containerRef.current.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    return { x: er.left - cr.left + ox, y: er.top - cr.top + oy };
  };

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    let r = 0;

    const go = async () => {
      while (!cancelled) {
        setRow(r);
        setPhase('to-name');
        await delay(80);
        const namePos = measure(rowRefs[r].current, 18, 10);
        setCurPos(namePos);
        await delay(750);
        if (cancelled) break;

        // Right-click on name → copy menu anchored at cursor tip
        setMenuAnchor({ x: namePos.x + 6, y: namePos.y + 6 });
        setPhase('copy-menu');
        await delay(420);
        if (cancelled) break;

        // Cursor moves to "Kopieren" item (measured from DOM)
        setPhase('to-kopieren');
        await delay(60);
        const kopPos = measure(kopierenRef.current, 14, 9);
        setCurPos(kopPos);
        await delay(520);
        if (cancelled) break;

        setPhase('copied');
        await delay(220);
        if (cancelled) break;

        // Move to right field
        setPhase('to-field');
        await delay(60);
        const fp = measure(fieldRef.current, 22, 10);
        setCurPos(fp);
        await delay(750);
        if (cancelled) break;

        // Right-click on field → paste menu
        setMenuAnchor({ x: fp.x + 6, y: fp.y + 6 });
        setPhase('paste-menu');
        await delay(420);
        if (cancelled) break;

        // Cursor moves to "Einfügen" item
        setPhase('to-einfuegen');
        await delay(60);
        const einfPos = measure(einfuegenRef.current, 14, 9);
        setCurPos(einfPos);
        await delay(520);
        if (cancelled) break;

        setPhase('pasted');
        setPastedName(TABLE_ROWS[r].name);
        setPastedBetrag(TABLE_ROWS[r].betrag);
        await delay(1300);
        if (cancelled) break;

        setPastedName('');
        setPastedBetrag('');
        r = (r + 1) % 3;
        await delay(120);
      }
    };

    go();
    return () => { cancelled = true; };
  }, [inView]);

  const showCopyMenu = phase === 'copy-menu' || phase === 'to-kopieren';
  const showPasteMenu = phase === 'paste-menu' || phase === 'to-einfuegen';
  const highlightRow = ['to-name', 'copy-menu', 'to-kopieren', 'copied'].includes(phase);

  return (
    <div ref={containerRef} className="relative flex items-center justify-center h-full gap-3 px-4 pb-6 pt-8">

      {/* LEFT: Spreadsheet */}
      <div className="flex-1 rounded-xl overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="grid grid-cols-2 px-2.5 py-2" style={{ background: '#f6f6f6', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          {['Name', 'Betrag'].map(h => (
            <span key={h} className="text-[8px] font-semibold text-[#1C1614]/40 uppercase tracking-wide">{h}</span>
          ))}
        </div>
        {TABLE_ROWS.map((tableRow, i) => (
          <motion.div
            key={tableRow.name}
            ref={rowRefs[i]}
            className="grid grid-cols-2 px-2.5 py-2"
            animate={{ background: row === i && highlightRow ? 'rgba(139,74,30,0.08)' : 'white' }}
            transition={{ duration: 0.15 }}
            style={{ borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.04)' : 'none' }}
          >
            <span className="text-[9px] font-medium text-[#1C1614]/80 truncate">{tableRow.name}</span>
            <span className="text-[9px] text-[#1C1614]/50">{tableRow.betrag}</span>
          </motion.div>
        ))}
      </div>

      {/* RIGHT: Angebot */}
      <div className="flex-1 rounded-xl overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.07)', background: 'white' }}>
        <div className="px-2.5 py-2" style={{ background: '#f6f6f6', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <span className="text-[8px] font-semibold text-[#1C1614]/40 uppercase tracking-wide">Angebot</span>
        </div>
        <div className="px-3 py-2.5 flex flex-col gap-2">
          <div className="text-[8px] text-[#1C1614]/40 font-medium">Empfänger</div>
          <div ref={fieldRef} className="rounded-md px-2 py-1.5 min-h-[22px]" style={{ border: '1px solid rgba(0,0,0,0.10)', background: '#fafafa' }}>
            <AnimatePresence mode="wait">
              {pastedName && (
                <motion.span key={pastedName} className="text-[9px] font-medium text-[#1C1614]"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  {pastedName}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div className="text-[8px] text-[#1C1614]/40 font-medium">Betrag</div>
          <div className="rounded-md px-2 py-1.5 min-h-[22px]" style={{ border: '1px solid rgba(0,0,0,0.10)', background: '#fafafa' }}>
            <AnimatePresence mode="wait">
              {pastedBetrag && (
                <motion.span key={pastedBetrag} className="text-[9px] font-medium text-[#1C1614]"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  {pastedBetrag}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Cursor – follows measured positions */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ top: 0, left: 0, zIndex: 50 }}
        animate={{ x: curPos.x, y: curPos.y }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
      >
        <SmallCursor />
      </motion.div>

      {/* Copy context menu – anchored at cursor right-click position */}
      <AnimatePresence>
        {showCopyMenu && (
          <motion.div
            className="absolute pointer-events-none rounded-lg overflow-hidden"
            style={{ left: menuAnchor.x, top: menuAnchor.y, zIndex: 40, background: 'white', boxShadow: '0 8px 24px rgba(0,0,0,0.13), 0 2px 6px rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.09)', minWidth: 118 }}
            initial={{ opacity: 0, scale: 0.92, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.11 }}
          >
            {['Ausschneiden', 'Kopieren', 'Link kopieren'].map((item, i) => (
              <div
                key={item}
                ref={item === 'Kopieren' ? kopierenRef : undefined}
                className="px-3 py-1.5 text-[9px] font-medium"
                style={{
                  background: item === 'Kopieren' && phase === 'to-kopieren' ? 'rgba(139,74,30,0.09)' : 'transparent',
                  color: item === 'Kopieren' && phase === 'to-kopieren' ? BRAND : '#1C1614',
                  borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                }}
              >
                {item}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Paste context menu */}
      <AnimatePresence>
        {showPasteMenu && (
          <motion.div
            className="absolute pointer-events-none rounded-lg overflow-hidden"
            style={{ left: menuAnchor.x, top: menuAnchor.y, zIndex: 40, background: 'white', boxShadow: '0 8px 24px rgba(0,0,0,0.13), 0 2px 6px rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.09)', minWidth: 110 }}
            initial={{ opacity: 0, scale: 0.92, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.11 }}
          >
            {['Einfügen', 'Alles auswählen'].map((item, i) => (
              <div
                key={item}
                ref={item === 'Einfügen' ? einfuegenRef : undefined}
                className="px-3 py-1.5 text-[9px] font-medium"
                style={{
                  background: item === 'Einfügen' && phase === 'to-einfuegen' ? 'rgba(139,74,30,0.09)' : 'transparent',
                  color: item === 'Einfügen' && phase === 'to-einfuegen' ? BRAND : '#1C1614',
                  borderBottom: i < 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                }}
              >
                {item}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

function delay(ms: number) { return new Promise(r => setTimeout(r, ms)); }

/* ── Card 2: Tools ohne System ── */
const AI_TOOLS = [
  { name: 'Claude', src: '/logos/Claude.png', cx: '50%', cy: '20%', cardBg: '#ffffff' },
  { name: 'ChatGPT', src: '/logos/ChatGPT.png', cx: '24%', cy: '70%', cardBg: '#ffffff' },
  { name: 'Gemini', src: '/logos/Gemini.png', cx: '76%', cy: '70%', cardBg: '#ffffff' },
];


/* Cursor: ChatGPT → Gemini → Claude → loop */
// positions match AI_TOOLS cx/cy
const CURSOR_KEYFRAMES = {
  left: ['24%', '24%', '76%', '76%', '50%', '50%', '24%'],
  top:  ['70%', '70%', '70%', '70%', '20%', '20%', '70%'],
};
const CURSOR_TIMES = [0, 0.1, 0.38, 0.48, 0.75, 0.88, 1];

function ToolCursor({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="absolute pointer-events-none flex items-start gap-1.5"
      style={{ zIndex: 20, left: '24%', top: '70%' }}
      animate={inView ? CURSOR_KEYFRAMES : {}}
      transition={{
        duration: 5.5,
        times: CURSOR_TIMES,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Clean modern cursor */}
      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.5 1L1.5 15.5L4.8 11.2L7 17L9 16.2L6.8 10.5L12 10.5L1.5 1Z"
          fill="white"
          stroke="#1C1614"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      {/* hmm capsule */}
      <div
        className="text-[10px] font-medium px-2.5 py-1 rounded-full"
        style={{
          background: 'white',
          border: '1px solid rgba(28,22,20,0.10)',
          color: '#1C1614',
          boxShadow: '0 2px 10px rgba(0,0,0,0.09)',
          whiteSpace: 'nowrap',
          marginTop: '1px',
        }}
      >
        hmm...
      </div>
    </motion.div>
  );
}

function ToolsWithoutSystemAnim() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      {AI_TOOLS.map(({ name, src, cx, cy, cardBg }, i) => (
        <motion.div
          key={name}
          className="absolute"
          style={{ left: cx, top: cy, transform: 'translate(-50%, -50%)' }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            {/* Gradient border wrapper */}
            <div
              className="rounded-[18px] p-[1.5px]"
              style={{
                background: 'linear-gradient(135deg, rgba(139,74,30,0.35) 0%, rgba(180,160,140,0.15) 50%, rgba(139,74,30,0.2) 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(139,74,30,0.08)',
              }}
            >
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(145deg, #ffffff 0%, #faf7f5 100%)' }}
              >
                <img
                  src={src}
                  alt={name}
                  className="object-contain"
                  style={{
                    width: name === 'ChatGPT' ? '4rem' : '3.5rem',
                    height: name === 'ChatGPT' ? '4rem' : '3.5rem',
                    filter: name === 'ChatGPT' ? 'brightness(0)' : 'none',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}

      <ToolCursor inView={inView} />
    </div>
  );
}

/* ── Card 3: Broken step-by-step ── */
const BROKEN_STEPS = [
  { num: 1, source: 'YouTube', text: 'Starte einfach mit ChatGPT' },
  { num: 2, source: 'KI-Guru', text: 'Vergiss ChatGPT – Prompts sind falsch' },
  { num: 3, source: 'Newsletter', text: 'Claude ist eigentlich viel besser' },
  { num: 4, source: 'Reddit', text: 'KI ist sowieso überschätzt' },
  { num: 5, source: 'LinkedIn', text: 'Mit System wird alles einfach' },
];

function BrokenStepsAnim() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRef0 = useRef<HTMLDivElement>(null);
  const stepRef1 = useRef<HTMLDivElement>(null);
  const stepRef2 = useRef<HTMLDivElement>(null);
  const stepRef3 = useRef<HTMLDivElement>(null);
  const stepRef4 = useRef<HTMLDivElement>(null);
  const stepRefs = [stepRef0, stepRef1, stepRef2, stepRef3, stepRef4];

  const inView = useInView(containerRef, { once: false });
  const [activeStep, setActiveStep] = useState(-1);
  const [curPos, setCurPos] = useState({ x: 20, y: 60 });

  const measure = (el: HTMLElement | null, ox = 6, oy = 10) => {
    if (!el || !containerRef.current) return { x: 20, y: 60 };
    const cr = containerRef.current.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    return { x: er.left - cr.left + ox, y: er.top - cr.top + oy };
  };

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;

    const go = async () => {
      await delay(300);
      while (!cancelled) {
        for (let i = 0; i < BROKEN_STEPS.length; i++) {
          if (cancelled) break;
          const pos = measure(stepRefs[i].current, 6, 10);
          setCurPos(pos);
          await delay(220);
          setActiveStep(i);
          await delay(1100);
        }
        if (cancelled) break;
        setActiveStep(-1);
        await delay(700);
      }
    };

    go();
    return () => { cancelled = true; };
  }, [inView]);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center h-full px-4 py-5">
      <div
        className="w-full rounded-xl overflow-hidden"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.07)', background: 'white' }}
      >
        {/* Header */}
        <div className="px-3 py-2" style={{ background: '#f6f6f6', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <span className="text-[8px] font-semibold text-[#1C1614]/40 uppercase tracking-wide">Dein KI-Lernpfad</span>
        </div>

        {/* Steps */}
        {BROKEN_STEPS.map((step, i) => (
          <motion.div
            key={i}
            ref={stepRefs[i]}
            className="flex items-center gap-2.5 px-3 py-2.5"
            animate={{ background: activeStep === i ? 'rgba(139,74,30,0.06)' : 'white' }}
            transition={{ duration: 0.15 }}
            style={{ borderBottom: i < BROKEN_STEPS.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none' }}
          >
            <div
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold"
              style={{
                background: activeStep === i ? BRAND : 'rgba(28,22,20,0.07)',
                color: activeStep === i ? 'white' : 'rgba(28,22,20,0.35)',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              {step.num}
            </div>
            <div
              className="flex-shrink-0 px-1.5 py-0.5 rounded text-[7.5px] font-semibold"
              style={{ background: 'rgba(28,22,20,0.05)', color: 'rgba(28,22,20,0.4)' }}
            >
              {step.source}
            </div>
            <span
              className="text-[9px] font-medium leading-tight"
              style={{ color: activeStep === i ? '#1C1614' : 'rgba(28,22,20,0.55)' }}
            >
              {step.text}
            </span>
          </motion.div>
        ))}

        {/* "..." row */}
        <div className="flex items-center gap-2.5 px-3 py-2" style={{ borderTop: '1px solid rgba(0,0,0,0.04)' }}>
          <div
            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(28,22,20,0.04)' }}
          >
            <span className="text-[8px]" style={{ color: 'rgba(28,22,20,0.2)', letterSpacing: '0.5px' }}>···</span>
          </div>
          <span className="text-[9px]" style={{ color: 'rgba(28,22,20,0.2)' }}>und weiter...</span>
        </div>
      </div>

      {/* Cursor */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ top: 0, left: 0, zIndex: 30 }}
        animate={{ x: curPos.x, y: curPos.y }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <SmallCursor />
      </motion.div>
    </div>
  );
}

/* ── Cards Data ── */
const CARDS = [
  {
    title: 'Manuelle Arbeit frisst deinen Tag',
    text: 'E-Mails, Angebote, Content, Daten – alles von Hand. Nicht weil du willst, sondern weil du keinen besseren Weg kennst.',
    Anim: ManualWorkAnim,
  },
  {
    title: 'Tools ohne System',
    text: 'Du nutzt ChatGPT oder Claude. Frage rein, Antwort raus. Aber morgen fängst du wieder bei null an. Kein Workflow, kein System.',
    Anim: ToolsWithoutSystemAnim,
  },
  {
    title: 'Keiner zeigt dir den Weg',
    text: 'YouTube verwirrt. KI-Gurus versprechen die Welt. Aber niemand setzt sich hin und zeigt dir Schritt für Schritt wie es wirklich funktioniert.',
    Anim: BrokenStepsAnim,
  },
];

/* ── Main Export ── */
export function ProblemSolutionSection() {
  return (
    <section className="py-12 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Headline */}
        <div className="text-center mb-6 md:mb-14">
          <h2
            className="font-semibold tracking-tighter text-[#1C1614] leading-[1.05]"
            style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3rem)' }}
          >
            <span className="block">
              <span style={{ fontFamily: 'var(--font-signature)', fontStyle: 'italic', fontWeight: 700, color: '#8B4A1E', fontSize: '1.1em' }}>
                Warum du härter
              </span>
              {' '}arbeitest
            </span>
            <span className="block">als du müsstest.</span>
          </h2>
          <p className="text-[15px] md:text-base font-normal text-[#1C1614]/60 leading-relaxed mt-3 max-w-xl mx-auto">
            <span className="block">Während du noch manuell arbeitest, setzen andere</span>
            <span className="block">längst KI ein und ziehen an dir vorbei.</span>
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map(({ title, text, Anim }, i) => (
            <motion.div
              key={title}
              className="rounded-2xl overflow-hidden bg-white flex flex-col"
              style={{
                border: '1px solid rgba(28,22,20,0.08)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                height: '500px',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Visualization – 2/3 of card */}
              <div
                className="relative"
                style={{ height: '66%', background: 'rgba(249,246,243,0.6)', flexShrink: 0 }}
              >
                <div className="h-full w-full">
                  <Anim />
                </div>
                {/* Gradient fade into text */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
                />
              </div>

              {/* Text – 1/3 of card */}
              <div className="px-7 pb-8 pt-1 flex flex-col gap-3 flex-1">
                <h3
                  className="font-medium tracking-tighter text-[#1C1614] leading-[1.1]"
                  style={{ fontSize: 'clamp(1.45rem, 1.9vw, 1.85rem)' }}
                >
                  {title}
                </h3>
                <p className="text-sm font-normal text-[#1C1614]/60 leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
