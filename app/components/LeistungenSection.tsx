'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import { MessageSquare, Zap, LayoutDashboard, Sparkles, Compass, Timer, RefreshCw, Clock, Bot, Layers, BarChart2, Target } from 'lucide-react';
import Image from 'next/image';

const BRAND = '#8B4A1E';
const BRAND_LIGHT = 'rgba(139,74,30,0.08)';
const SHADOW = '0 4px 14px rgba(28,22,20,0.09), 0 1px 4px rgba(28,22,20,0.05)';

/* ─────────────────────────────────────────
   Mobile detection + Bento observer hook
───────────────────────────────────────── */

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return mobile;
}

function useBentoObserver(count: number) {
  const isMobile = useIsMobile();
  const groupRefs = useRef<(HTMLDivElement | null)[]>(Array(count).fill(null));
  const [active, setActive] = useState<number | null>(null);
  const ratiosRef = useRef<number[]>(Array(count).fill(0));

  useEffect(() => {
    if (!isMobile) { setActive(null); return; }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const idx = groupRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx >= 0) ratiosRef.current[idx] = entry.intersectionRatio;
        });
        const maxIdx = ratiosRef.current.reduce(
          (best, r, i) => r > ratiosRef.current[best] ? i : best, 0
        );
        if (ratiosRef.current[maxIdx] > 0) setActive(maxIdx);
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] }
    );

    groupRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isMobile]);

  const cardStyle = (idx: number): React.CSSProperties => {
    const base: React.CSSProperties = {
      transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease',
    };
    if (!isMobile || active === null) return base;
    if (active === idx) return {
      ...base,
      transform: 'scale(1.015)',
      opacity: 1,
      position: 'relative',
      zIndex: 2,
    };
    return { ...base, transform: 'scale(0.97)', opacity: 0.55 };
  };

  const setRef = (idx: number) => (el: HTMLDivElement | null) => {
    groupRefs.current[idx] = el;
  };

  return { setRef, cardStyle };
}

/* ─────────────────────────────────────────
   KI-Beratung Bento
───────────────────────────────────────── */

const KI_CHECKLIST = [
  { icon: Sparkles, text: 'KI selbst anwenden, nicht nur davon hören' },
  { icon: Compass,  text: 'Jemand der dir zeigt, was Sinn macht' },
  { icon: Timer,    text: 'Keine Zeit für wochenlange Einarbeitung' },
];

function WannPanel() {
  const BG = '#F9F7F5';
  return (
    <div className="rounded-2xl overflow-hidden relative h-full" style={{ background: BG, boxShadow: SHADOW }}>
      <div className="absolute -bottom-10 -right-4 pointer-events-none select-none"
           style={{ fontSize: '320px', fontWeight: 900, color: 'rgba(139,74,30,0.055)', lineHeight: 1, letterSpacing: '-0.05em' }}>?</div>
      <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
           style={{ height: '52%', background: `linear-gradient(to bottom, ${BG} 35%, transparent)` }} />
      <div className="relative z-20 p-5 sm:p-8 h-full flex flex-col gap-5">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-lg mb-5"
                style={{ background: 'rgba(139,74,30,0.1)', color: BRAND }}>KI-Beratung</span>
          <h3 className="font-bold text-[#1C1614] leading-[1.0] tracking-tight sm:whitespace-nowrap"
              style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.8rem)' }}>Für dich, wenn …</h3>
        </div>
        <p style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)', color: 'rgba(28,22,20,0.6)', lineHeight: 1.65 }}>
          Du willst KI in deinem Business einsetzen, aber weißt nicht wo und wie du anfangen sollst. Dir fehlt jemand der es dir zeigt – ohne Umwege.
        </p>
        <div className="flex flex-col gap-3 mt-auto">
          {KI_CHECKLIST.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ background: 'rgba(139,74,30,0.1)' }}>
                <Icon className="w-4 h-4" style={{ color: BRAND }} strokeWidth={1.6} />
              </div>
              <span className="text-[13.5px] font-medium text-[#1C1614]/80 leading-snug">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WiePanel() {
  const BG = 'rgb(246,240,233)';
  const steps = ['Zoom Call', 'Live Q&A', 'Dein Material'];
  return (
    <div className="rounded-2xl overflow-hidden relative h-full" style={{ background: BG, boxShadow: SHADOW }}>
      <div className="absolute bottom-0 inset-x-0 px-5 sm:px-8 pb-7 flex items-center gap-1 sm:gap-3 z-0">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="px-3 py-1.5 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl text-[11px] sm:text-[13px] font-bold whitespace-nowrap tracking-tight"
                 style={{
                   background: i === steps.length - 1 ? BRAND : 'rgba(139,74,30,0.12)',
                   color: i === steps.length - 1 ? 'white' : BRAND,
                   boxShadow: i === steps.length - 1 ? '0 4px 12px rgba(139,74,30,0.3)' : 'none',
                 }}>{s}</div>
            {i < steps.length - 1 && (
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ flexShrink: 0, opacity: 0.22 }}>
                <path d="M1 5h14M10 1l4 4-4 4" stroke="#1C1614" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
           style={{ height: '55%', background: `linear-gradient(to bottom, ${BG} 30%, transparent)` }} />
      <div className="relative z-20 p-5 pb-32 sm:p-8 sm:pb-24 h-full flex flex-col justify-between">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-lg mb-5"
                style={{ background: 'rgba(139,74,30,0.1)', color: BRAND }}>Ablauf</span>
          <h3 className="font-bold text-[#1C1614] leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.8rem)' }}>Wie läuft<br />das ab?</h3>
        </div>
        <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', color: 'rgba(28,22,20,0.6)', lineHeight: 1.7, fontStyle: 'italic' }}>
          „1:1 über Zoom. Du schickst mir vorab deine Fragen, ich bereite mich vor. Aufzeichnung und Material bekommst du danach."
        </p>
      </div>
    </div>
  );
}

function NachherPanel() {
  const BG = 'white';
  const chips = ['Klarheit', 'Aufzeichnung', 'Material'];
  return (
    <div className="rounded-2xl overflow-hidden relative h-full" style={{ background: BG, boxShadow: SHADOW }}>
      <div className="absolute pointer-events-none z-0"
           style={{ bottom: -80, right: -80, width: 380, height: 380, background: 'radial-gradient(circle, rgba(139,74,30,0.11) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 inset-x-0 px-5 sm:px-8 pb-7 flex gap-1.5 sm:gap-3 z-0">
        {chips.map((c, i) => (
          <div key={i} className="flex-1 flex items-center gap-1.5 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-3 rounded-xl"
               style={{ background: 'rgba(139,74,30,0.07)', border: '1px solid rgba(139,74,30,0.14)' }}>
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: BRAND }} />
            <span className="text-[11px] sm:text-[13px] font-bold" style={{ color: BRAND }}>{c}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
           style={{ height: '55%', background: `linear-gradient(to bottom, ${BG} 30%, transparent)` }} />
      <div className="relative z-20 p-5 pb-32 sm:p-8 sm:pb-24 h-full flex flex-col justify-between">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-lg mb-5"
                style={{ background: 'rgba(139,74,30,0.1)', color: BRAND }}>Dein Ergebnis</span>
          <h3 className="font-bold text-[#1C1614] leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.8rem)' }}>Was du<br />danach hast.</h3>
        </div>
        <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', color: 'rgba(28,22,20,0.6)', lineHeight: 1.7, fontStyle: 'italic' }}>
          „Klarheit. Du weißt was du brauchst, was du zuerst umsetzt und wie. Plus Aufzeichnung und Material."
        </p>
      </div>
    </div>
  );
}

function FuerWenPanel() {
  return (
    <div className="rounded-2xl overflow-hidden relative h-full"
         style={{ background: BRAND, boxShadow: '0 6px 24px rgba(139,74,30,0.28), 0 2px 6px rgba(139,74,30,0.16)' }}>
      <div className="absolute pointer-events-none"
           style={{ bottom: -60, right: -60, width: 260, height: 260, background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)' }} />
      <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
           style={{ height: '45%', background: `linear-gradient(to bottom, ${BRAND} 20%, transparent)` }} />
      <div className="relative z-20 p-6 flex flex-col h-full">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-lg mb-4"
                style={{ background: 'rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.85)' }}>Zielgruppe</span>
          <h3 className="font-bold text-white leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)' }}>Für wen<br />ist das?</h3>
        </div>
        <p className="mt-6" style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontStyle: 'italic' }}>
          „Agenturen, Selbstständige und Teams die KI einsetzen wollen – aber keine Wochen mit YouTube-Recherche verschwenden wollen."
        </p>
      </div>
    </div>
  );
}

function ChatViz() {
  const { setRef, cardStyle } = useBentoObserver(4);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 sm:auto-rows-[300px] lg:auto-rows-auto gap-3 lg:h-[740px]">
      <div ref={setRef(0)} className="col-span-2" style={cardStyle(0)}><WannPanel /></div>
      <div ref={setRef(1)} className="col-span-2" style={cardStyle(1)}><WiePanel /></div>
      <div ref={setRef(2)} className="col-span-2" style={cardStyle(2)}><NachherPanel /></div>
      {/* Cards 4+5 treated as one group */}
      <div ref={setRef(3)} className="col-span-2 grid grid-cols-2 gap-3" style={cardStyle(3)}>
        <FuerWenPanel />
        <div className="rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative h-full"
             style={{ background: '#F9F7F5', boxShadow: SHADOW }}>
          <div className="absolute -top-4 -left-2 pointer-events-none select-none"
               style={{ fontSize: '120px', fontFamily: 'Georgia, serif', color: 'rgba(139,74,30,0.1)', lineHeight: 1 }}>"</div>
          <div className="relative z-10">
            <Image src="/erik.jpg" alt="Erik Bauer" width={40} height={40}
              className="rounded-full object-cover"
              style={{ width: 40, height: 40, boxShadow: '0 2px 8px rgba(139,74,30,0.2)' }} />
          </div>
          <p className="relative z-10 font-bold leading-snug text-[#1C1614]"
             style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.25rem)' }}>
            „Ob KI ins Team integrieren, Engpässe finden oder etwas ganz Individuelles – ich schaue mir dein Business an und zeige dir den kürzesten Weg zur Umsetzung."
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Automatisierung Bento
───────────────────────────────────────── */

const AUTO_CHECKLIST = [
  { icon: RefreshCw, text: 'Wiederkehrende Aufgaben die dich täglich ausbremsen' },
  { icon: Clock,     text: 'Keine Zeit und kein Interesse, es selbst zu automatisieren' },
  { icon: Bot,       text: 'Du willst ein System das läuft – ohne dich' },
];

function AutoWannPanel() {
  const BG = '#F9F7F5';
  return (
    <div className="rounded-2xl overflow-hidden relative h-full" style={{ background: BG, boxShadow: SHADOW }}>
      <div className="absolute -bottom-10 -right-4 pointer-events-none select-none"
           style={{ fontSize: '320px', fontWeight: 900, color: 'rgba(139,74,30,0.055)', lineHeight: 1, letterSpacing: '-0.05em' }}>∞</div>
      <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
           style={{ height: '52%', background: `linear-gradient(to bottom, ${BG} 35%, transparent)` }} />
      <div className="relative z-20 p-5 sm:p-8 h-full flex flex-col gap-5">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-lg mb-5"
                style={{ background: 'rgba(139,74,30,0.1)', color: BRAND }}>Prozess-Automatisierung</span>
          <h3 className="font-bold text-[#1C1614] leading-[1.0] tracking-tight sm:whitespace-nowrap"
              style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.8rem)' }}>Für dich, wenn …</h3>
        </div>
        <p style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)', color: 'rgba(28,22,20,0.6)', lineHeight: 1.65 }}>
          Dieselben Aufgaben fressen dir jeden Tag Zeit – E-Mails, Rechnungen, Daten hin- und herschieben. Du willst es abgeben, nicht selbst lösen.
        </p>
        <div className="flex flex-col gap-3 mt-auto">
          {AUTO_CHECKLIST.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ background: 'rgba(139,74,30,0.1)' }}>
                <Icon className="w-4 h-4" style={{ color: BRAND }} strokeWidth={1.6} />
              </div>
              <span className="text-[13.5px] font-medium text-[#1C1614]/80 leading-snug">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AutoWiePanel() {
  const BG = 'rgb(246,240,233)';
  const steps = ['Analyse', 'Aufbau', 'Go-Live'];
  return (
    <div className="rounded-2xl overflow-hidden relative h-full" style={{ background: BG, boxShadow: SHADOW }}>
      <div className="absolute bottom-0 inset-x-0 px-5 sm:px-8 pb-7 flex items-center gap-1 sm:gap-3 z-0">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="px-3 py-1.5 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl text-[11px] sm:text-[13px] font-bold whitespace-nowrap tracking-tight"
                 style={{
                   background: i === steps.length - 1 ? BRAND : 'rgba(139,74,30,0.12)',
                   color: i === steps.length - 1 ? 'white' : BRAND,
                   boxShadow: i === steps.length - 1 ? '0 4px 12px rgba(139,74,30,0.3)' : 'none',
                 }}>{s}</div>
            {i < steps.length - 1 && (
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ flexShrink: 0, opacity: 0.22 }}>
                <path d="M1 5h14M10 1l4 4-4 4" stroke="#1C1614" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
           style={{ height: '55%', background: `linear-gradient(to bottom, ${BG} 30%, transparent)` }} />
      <div className="relative z-20 p-5 pb-32 sm:p-8 sm:pb-24 h-full flex flex-col justify-between">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-lg mb-5"
                style={{ background: 'rgba(139,74,30,0.1)', color: BRAND }}>Ablauf</span>
          <h3 className="font-bold text-[#1C1614] leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.8rem)' }}>Wie läuft<br />das ab?</h3>
        </div>
        <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', color: 'rgba(28,22,20,0.6)', lineHeight: 1.7, fontStyle: 'italic' }}>
          „Wir analysieren gemeinsam den Prozess, ich baue den Workflow und du gehst live – fertig eingerichtet, sofort produktiv."
        </p>
      </div>
    </div>
  );
}

function AutoNachherPanel() {
  const BG = 'white';
  const chips = ['Stabiler Workflow', 'Vollautomatisch', 'Sofort produktiv'];
  return (
    <div className="rounded-2xl overflow-hidden relative h-full" style={{ background: BG, boxShadow: SHADOW }}>
      <div className="absolute pointer-events-none z-0"
           style={{ bottom: -80, right: -80, width: 380, height: 380, background: 'radial-gradient(circle, rgba(139,74,30,0.11) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 inset-x-0 px-5 sm:px-8 pb-7 flex gap-1.5 sm:gap-3 z-0">
        {chips.map((c, i) => (
          <div key={i} className="flex-1 flex items-center gap-1.5 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-3 rounded-xl"
               style={{ background: 'rgba(139,74,30,0.07)', border: '1px solid rgba(139,74,30,0.14)' }}>
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: BRAND }} />
            <span className="text-[11px] sm:text-[13px] font-bold" style={{ color: BRAND }}>{c}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
           style={{ height: '55%', background: `linear-gradient(to bottom, ${BG} 30%, transparent)` }} />
      <div className="relative z-20 p-5 pb-32 sm:p-8 sm:pb-24 h-full flex flex-col justify-between">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-lg mb-5"
                style={{ background: 'rgba(139,74,30,0.1)', color: BRAND }}>Dein Ergebnis</span>
          <h3 className="font-bold text-[#1C1614] leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.8rem)' }}>Was du<br />danach hast.</h3>
        </div>
        <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', color: 'rgba(28,22,20,0.6)', lineHeight: 1.7, fontStyle: 'italic' }}>
          „Einen fertigen Workflow der läuft, ohne dass du täglich Hand anlegen musst."
        </p>
      </div>
    </div>
  );
}

function AutoFuerWenPanel() {
  return (
    <div className="rounded-2xl overflow-hidden relative h-full"
         style={{ background: BRAND, boxShadow: '0 6px 24px rgba(139,74,30,0.28), 0 2px 6px rgba(139,74,30,0.16)' }}>
      <div className="absolute pointer-events-none"
           style={{ bottom: -60, right: -60, width: 260, height: 260, background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)' }} />
      <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
           style={{ height: '45%', background: `linear-gradient(to bottom, ${BRAND} 20%, transparent)` }} />
      <div className="relative z-20 p-6 flex flex-col h-full">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-lg mb-4 self-start"
                style={{ background: 'rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.85)' }}>Zielgruppe</span>
          <h3 className="font-bold text-white leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)' }}>Für wen<br />ist das?</h3>
        </div>
        <p className="mt-6" style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontStyle: 'italic' }}>
          „Für alle, die täglich dieselben Schritte wiederholen und wissen, dass das auch eine Maschine erledigen könnte."
        </p>
      </div>
    </div>
  );
}

function AutoBento() {
  const { setRef, cardStyle } = useBentoObserver(4);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 sm:auto-rows-[300px] lg:auto-rows-auto gap-3 lg:h-[740px]">
      <div ref={setRef(0)} className="col-span-2" style={cardStyle(0)}><AutoWannPanel /></div>
      <div ref={setRef(1)} className="col-span-2" style={cardStyle(1)}><AutoWiePanel /></div>
      <div ref={setRef(2)} className="col-span-2" style={cardStyle(2)}><AutoNachherPanel /></div>
      <div ref={setRef(3)} className="col-span-2 grid grid-cols-2 gap-3" style={cardStyle(3)}>
        <AutoFuerWenPanel />
        <div className="rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative h-full"
             style={{ background: '#F9F7F5', boxShadow: SHADOW }}>
          <div className="absolute -top-4 -left-2 pointer-events-none select-none"
               style={{ fontSize: '120px', fontFamily: 'Georgia, serif', color: 'rgba(139,74,30,0.1)', lineHeight: 1 }}>"</div>
          <div className="relative z-10">
            <Image src="/erik.jpg" alt="Erik Bauer" width={40} height={40}
              className="rounded-full object-cover"
              style={{ width: 40, height: 40, boxShadow: '0 2px 8px rgba(139,74,30,0.2)' }} />
          </div>
          <p className="relative z-10 font-bold leading-snug text-[#1C1614]"
             style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.25rem)' }}>
            „Was vorher 2 Stunden täglich kostete, läuft jetzt vollautomatisch – ohne dass ich etwas tue."
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Dashboard Bento
───────────────────────────────────────── */

const DASH_CHECKLIST = [
  { icon: Layers,    text: 'Fünf Tools offen, keins zeigt dir das Gesamtbild' },
  { icon: BarChart2, text: 'KPIs verstreut statt auf einen Blick' },
  { icon: Target,    text: 'Entscheidungen aus dem Bauch statt aus Daten' },
];

function DashWannPanel() {
  const BG = '#F9F7F5';
  return (
    <div className="rounded-2xl overflow-hidden relative h-full" style={{ background: BG, boxShadow: SHADOW }}>
      <div className="absolute -bottom-10 -right-4 pointer-events-none select-none"
           style={{ fontSize: '320px', fontWeight: 900, color: 'rgba(139,74,30,0.055)', lineHeight: 1, letterSpacing: '-0.05em' }}>#</div>
      <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
           style={{ height: '52%', background: `linear-gradient(to bottom, ${BG} 35%, transparent)` }} />
      <div className="relative z-20 p-5 sm:p-8 h-full flex flex-col gap-5">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-lg mb-5"
                style={{ background: 'rgba(139,74,30,0.1)', color: BRAND }}>Operations-Dashboard</span>
          <h3 className="font-bold text-[#1C1614] leading-[1.0] tracking-tight sm:whitespace-nowrap"
              style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.8rem)' }}>Für dich, wenn …</h3>
        </div>
        <p style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)', color: 'rgba(28,22,20,0.6)', lineHeight: 1.65 }}>
          Dein Business steckt in fünf verschiedenen Tabs. Kein Überblick, keine KPIs auf einen Blick, keine zentrale Stelle für alles.
        </p>
        <div className="flex flex-col gap-3 mt-auto">
          {DASH_CHECKLIST.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ background: 'rgba(139,74,30,0.1)' }}>
                <Icon className="w-4 h-4" style={{ color: BRAND }} strokeWidth={1.6} />
              </div>
              <span className="text-[13.5px] font-medium text-[#1C1614]/80 leading-snug">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashWiePanel() {
  const BG = 'rgb(246,240,233)';
  const steps = ['Daten-Audit', 'Anbindung', 'Dashboard'];
  return (
    <div className="rounded-2xl overflow-hidden relative h-full" style={{ background: BG, boxShadow: SHADOW }}>
      <div className="absolute bottom-0 inset-x-0 px-5 sm:px-8 pb-7 flex items-center gap-1 sm:gap-3 z-0">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="px-3 py-1.5 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl text-[11px] sm:text-[13px] font-bold whitespace-nowrap tracking-tight"
                 style={{
                   background: i === steps.length - 1 ? BRAND : 'rgba(139,74,30,0.12)',
                   color: i === steps.length - 1 ? 'white' : BRAND,
                   boxShadow: i === steps.length - 1 ? '0 4px 12px rgba(139,74,30,0.3)' : 'none',
                 }}>{s}</div>
            {i < steps.length - 1 && (
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ flexShrink: 0, opacity: 0.22 }}>
                <path d="M1 5h14M10 1l4 4-4 4" stroke="#1C1614" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
           style={{ height: '55%', background: `linear-gradient(to bottom, ${BG} 30%, transparent)` }} />
      <div className="relative z-20 p-5 pb-32 sm:p-8 sm:pb-24 h-full flex flex-col justify-between">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-lg mb-5"
                style={{ background: 'rgba(139,74,30,0.1)', color: BRAND }}>Ablauf</span>
          <h3 className="font-bold text-[#1C1614] leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.8rem)' }}>Wie läuft<br />das ab?</h3>
        </div>
        <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', color: 'rgba(28,22,20,0.6)', lineHeight: 1.7, fontStyle: 'italic' }}>
          „Wir schauen welche Daten du hast, ich verbinde die Quellen und baue dir ein Dashboard das täglich aktuell ist."
        </p>
      </div>
    </div>
  );
}

function DashNachherPanel() {
  const BG = 'white';
  const chips = ['Live-Daten', 'Zentrales Dashboard', 'Klare Entscheidungen'];
  return (
    <div className="rounded-2xl overflow-hidden relative h-full" style={{ background: BG, boxShadow: SHADOW }}>
      <div className="absolute pointer-events-none z-0"
           style={{ bottom: -80, right: -80, width: 380, height: 380, background: 'radial-gradient(circle, rgba(139,74,30,0.11) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 inset-x-0 px-5 sm:px-8 pb-7 flex gap-1.5 sm:gap-3 z-0">
        {chips.map((c, i) => (
          <div key={i} className="flex-1 flex items-center gap-1.5 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-3 rounded-xl"
               style={{ background: 'rgba(139,74,30,0.07)', border: '1px solid rgba(139,74,30,0.14)' }}>
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: BRAND }} />
            <span className="text-[11px] sm:text-[13px] font-bold" style={{ color: BRAND }}>{c}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
           style={{ height: '55%', background: `linear-gradient(to bottom, ${BG} 30%, transparent)` }} />
      <div className="relative z-20 p-5 pb-32 sm:p-8 sm:pb-24 h-full flex flex-col justify-between">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-lg mb-5"
                style={{ background: 'rgba(139,74,30,0.1)', color: BRAND }}>Dein Ergebnis</span>
          <h3 className="font-bold text-[#1C1614] leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.8rem)' }}>Was du<br />danach hast.</h3>
        </div>
        <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', color: 'rgba(28,22,20,0.6)', lineHeight: 1.7, fontStyle: 'italic' }}>
          „Ein zentrales Dashboard mit allen Zahlen die zählen – live, ohne manuellen Aufwand."
        </p>
      </div>
    </div>
  );
}

function DashFuerWenPanel() {
  return (
    <div className="rounded-2xl overflow-hidden relative h-full"
         style={{ background: BRAND, boxShadow: '0 6px 24px rgba(139,74,30,0.28), 0 2px 6px rgba(139,74,30,0.16)' }}>
      <div className="absolute pointer-events-none"
           style={{ bottom: -60, right: -60, width: 260, height: 260, background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)' }} />
      <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
           style={{ height: '45%', background: `linear-gradient(to bottom, ${BRAND} 20%, transparent)` }} />
      <div className="relative z-20 p-6 flex flex-col h-full">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-lg mb-4 self-start"
                style={{ background: 'rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.85)' }}>Zielgruppe</span>
          <h3 className="font-bold text-white leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)' }}>Für wen<br />ist das?</h3>
        </div>
        <p className="mt-6" style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontStyle: 'italic' }}>
          „Für Unternehmer die mehrere Tools nutzen und trotzdem keinen klaren Überblick über ihr Business haben."
        </p>
      </div>
    </div>
  );
}

function DashBento() {
  const { setRef, cardStyle } = useBentoObserver(4);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 sm:auto-rows-[300px] lg:auto-rows-auto gap-3 lg:h-[740px]">
      <div ref={setRef(0)} className="col-span-2" style={cardStyle(0)}><DashWannPanel /></div>
      <div ref={setRef(1)} className="col-span-2" style={cardStyle(1)}><DashWiePanel /></div>
      <div ref={setRef(2)} className="col-span-2" style={cardStyle(2)}><DashNachherPanel /></div>
      <div ref={setRef(3)} className="col-span-2 grid grid-cols-2 gap-3" style={cardStyle(3)}>
        <DashFuerWenPanel />
        <div className="rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative h-full"
             style={{ background: '#F9F7F5', boxShadow: SHADOW }}>
          <div className="absolute -top-4 -left-2 pointer-events-none select-none"
               style={{ fontSize: '120px', fontFamily: 'Georgia, serif', color: 'rgba(139,74,30,0.1)', lineHeight: 1 }}>"</div>
          <div className="relative z-10">
            <Image src="/erik.jpg" alt="Erik Bauer" width={40} height={40}
              className="rounded-full object-cover"
              style={{ width: 40, height: 40, boxShadow: '0 2px 8px rgba(139,74,30,0.2)' }} />
          </div>
          <p className="relative z-10 font-bold leading-snug text-[#1C1614]"
             style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.25rem)' }}>
            „Ich entscheide nur noch auf Basis von Daten – nicht aus dem Bauch heraus."
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Tab-Daten
───────────────────────────────────────── */

const TABS = [
  { icon: MessageSquare,   label: 'KI-Beratung',             Viz: ChatViz   },
  { icon: Zap,             label: 'Prozess-Automatisierung',  Viz: AutoBento },
  { icon: LayoutDashboard, label: 'Operations-Dashboard',     Viz: DashBento },
];

/* ─────────────────────────────────────────
   Animierter Tab
───────────────────────────────────────── */

function FeatureTab({ icon: Icon, label, selected, onClick }: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  const tabRef = useRef<HTMLDivElement>(null);
  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(90px 45px at ${xPct}% ${yPct}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !selected) return;
    xPct.set(0);
    yPct.set(0);
    const { height, width } = tabRef.current.getBoundingClientRect();
    const c = height * 2 + width * 2;
    const times: [number, number, number, number, number] = [
      0, width / c, (width + height) / c, (width * 2 + height) / c, 1,
    ];
    const a1 = animate(xPct, [0, 100, 100, 0, 0], { duration: 4, times, ease: 'linear', repeat: Infinity });
    const a2 = animate(yPct, [0, 0, 100, 100, 0], { duration: 4, times, ease: 'linear', repeat: Infinity });
    return () => { a1.stop(); a2.stop(); };
  }, [selected]);

  return (
    <div
      ref={tabRef}
      onClick={onClick}
      className="relative flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer select-none"
      style={{ border: `1px solid rgba(139,74,30,0.25)`, background: 'white' }}
    >
      {selected && (
        <motion.div
          style={{
            maskImage,
            WebkitMaskImage: maskImage,
            position: 'absolute',
            inset: '-1px',
            border: `2px solid ${BRAND}`,
            borderRadius: '13px',
            pointerEvents: 'none',
          }}
        />
      )}
      <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#1C1614', strokeWidth: 1.25 }} />
      <span className="text-[13px] font-medium whitespace-nowrap" style={{ color: '#1C1614' }}>{label}</span>
    </div>
  );
}

function TabRow({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  return (
    <>
      <div className="flex flex-col items-center gap-3 md:hidden">
        <div className="flex gap-3">
          <FeatureTab icon={TABS[1].icon} label={TABS[1].label} selected={active === 1} onClick={() => onSelect(1)} />
          <FeatureTab icon={TABS[2].icon} label={TABS[2].label} selected={active === 2} onClick={() => onSelect(2)} />
        </div>
        <FeatureTab icon={TABS[0].icon} label={TABS[0].label} selected={active === 0} onClick={() => onSelect(0)} />
      </div>
      <div className="hidden md:flex flex-wrap justify-center gap-3">
        {TABS.map((t, i) => (
          <FeatureTab key={t.label} icon={t.icon} label={t.label} selected={active === i} onClick={() => onSelect(i)} />
        ))}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────
   Section
───────────────────────────────────────── */

const slideVariants = {
  enter: (d: number) => ({ opacity: 0, y: d > 0 ? 16 : -16 }),
  center: { opacity: 1, y: 0 },
  exit:  (d: number) => ({ opacity: 0, y: d > 0 ? -16 : 16 }),
};

export function LeistungenSection() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (i: number) => {
    setDir(i > active ? 1 : -1);
    setActive(i);
  };

  const { Viz } = TABS[active];

  return (
    <section id="leistungen" className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="font-semibold tracking-tighter text-[#1C1614] leading-[1.05] text-center mb-3"
          style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3rem)' }}
        >
          Was ich{' '}
          <span style={{ fontFamily: 'var(--font-signature)', fontStyle: 'italic', fontWeight: 700, color: BRAND, fontSize: '1.1em' }}>
            konkret
          </span>
          {' '}für dich tue.
        </h2>
      </div>

      <div className="relative w-full">
        <div
          className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#e6e6e6_1px,transparent_1px),linear-gradient(to_bottom,#e6e6e6_1px,transparent_1px)] bg-[size:6rem_4rem]"
          style={{
            maskImage: 'radial-gradient(ellipse 75% 90% at 50% 55%, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at 50% 55%, black 30%, transparent 75%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 pt-4 pb-4">
          <p className="text-sm md:text-base font-normal text-[#1C1614]/55 leading-relaxed mb-5 md:mb-10 text-center max-w-xl mx-auto">
            Drei Leistungen. Jede davon gebaut, um echte Zeit zu sparen und echte Ergebnisse zu liefern.
          </p>
          <div className="flex justify-center mb-5 md:mb-10">
            <TabRow active={active} onSelect={go} />
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-full">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={active}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Viz />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
