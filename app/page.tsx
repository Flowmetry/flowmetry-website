'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Search, List, Mail, Blocks, Zap, CheckCircle } from 'lucide-react';
import { GlareCard }               from './components/ui/glare-card';
import { Reveal }                  from './components/Reveal';
import { BeamsBackground }          from './components/BeamsBackground';
import { Navbar }                  from './components/Navbar';
import { HeroSection }             from './components/HeroSection';
import { TechLogoBar }             from './components/TechLogoBar';
import { ProblemSolutionSection }  from './components/ProblemSolutionSection';
import { ServicesGrid }            from './components/ServicesGrid';
import { ROISection }              from './components/ROISection';

// ─── 3 Schritte ───────────────────────────────────────────────────────────────

function DreiSchritteSection() {
  return (
    <section id="prozess" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-3">
            In 3 Schritten{' '}
            <span className="bg-gradient-to-r from-[#A0F0FF] to-[#60D8FF] bg-clip-text text-transparent">
              zum System
            </span>
          </h2>
          <p className="text-white/80 text-sm">Strukturiert. Transparent. Produktionsbereit.</p>
        </div>

        <div className="relative max-w-6xl mx-auto mt-4">

          {/* Animierter Verbindungspfad (nur Desktop) */}
          <div className="hidden md:block absolute top-[150px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 z-0">
            <motion.div
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[-3px] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

            {/* Karte 1: Analyse – leicht nach rechts gekippt */}
            <GlareCard mobilePreset={{ rx: -4, ry: 2, mx: 30, my: 40 }} className="flex flex-col items-start justify-start p-6 md:p-8 bg-[#090A0F]/70 backdrop-blur-md border border-white/5 relative overflow-hidden h-[300px] md:h-[420px]">
              <div className="flex items-start justify-between w-full z-10">
                <div
                  className="text-4xl md:text-6xl font-black text-cyan-400 mb-4 md:mb-6"
                  style={{ textShadow: '0 0 30px rgba(34,211,238,0.6), 0 0 10px rgba(34,211,238,0.4)' }}
                >
                  1
                </div>
                <span className="text-[10px] md:text-xs font-medium text-cyan-300/80 border border-cyan-400/30 rounded-full px-2.5 py-1 bg-cyan-400/10">30 Minuten</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 z-10">Analyse Status Quo</h3>
              <p className="text-slate-400 text-sm leading-relaxed z-10">
                Wir analysieren deine Prozesse und zeigen dir genau, wo KI den größten Hebel ansetzt.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-[120px] md:h-[180px] flex items-center justify-center">
                <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute left-6 top-8 bg-slate-800/80 p-3 rounded-full border border-white/5 shadow-lg">
                  <List size={20} className="text-slate-300" />
                </motion.div>
                <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity }} className="absolute right-8 top-12 bg-slate-800/80 p-4 rounded-full border border-white/5 shadow-lg">
                  <Mail size={24} className="text-slate-300" />
                </motion.div>
                <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 3, repeat: Infinity }} className="absolute bg-blue-500/10 p-5 rounded-full border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.2)] mt-8">
                  <Search size={32} className="text-blue-400" />
                </motion.div>
              </div>
            </GlareCard>

            {/* Karte 2: Umsetzung – mittig, leicht nach vorne gekippt */}
            <GlareCard mobilePreset={{ rx: 2, ry: -3, mx: 65, my: 35 }} className="flex flex-col items-start justify-start p-6 md:p-8 bg-[#090A0F]/70 backdrop-blur-md border border-white/5 relative overflow-hidden h-[300px] md:h-[420px]">
              <div className="flex items-start justify-between w-full z-10">
                <div
                  className="text-4xl md:text-6xl font-black text-cyan-400 mb-4 md:mb-6"
                  style={{ textShadow: '0 0 30px rgba(34,211,238,0.6), 0 0 10px rgba(34,211,238,0.4)' }}
                >
                  2
                </div>
                <span className="text-[10px] md:text-xs font-medium text-cyan-300/80 border border-cyan-400/30 rounded-full px-2.5 py-1 bg-cyan-400/10">2–4 Wochen</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 z-10">Umsetzung des Systems</h3>
              <p className="text-slate-400 text-sm leading-relaxed z-10">
                Wir bauen deine Automationen und vernetzen alle Tools. In 2–4 Wochen produktionsbereit.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-[120px] md:h-[180px] flex items-center justify-center">
                <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute left-10 top-16 bg-slate-800/80 p-3 rounded-xl border border-white/5 shadow-lg">
                  <Blocks size={24} className="text-slate-300" />
                </motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute right-12 top-6 bg-slate-800/80 p-3 rounded-xl border border-white/5 shadow-lg">
                  <Blocks size={20} className="text-slate-400" />
                </motion.div>
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bg-cyan-500/10 p-5 rounded-full border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.2)] mt-8">
                  <Zap size={32} className="text-cyan-400" />
                </motion.div>
              </div>
            </GlareCard>

            {/* Karte 3: Livegang – nach links gekippt */}
            <GlareCard mobilePreset={{ rx: 5, ry: 3, mx: 70, my: 60 }} className="flex flex-col items-start justify-start p-6 md:p-8 bg-[#090A0F]/70 backdrop-blur-md border border-white/5 relative overflow-hidden h-[300px] md:h-[420px]">
              <div className="flex items-start justify-between w-full z-10">
                <div
                  className="text-4xl md:text-6xl font-black text-cyan-400 mb-4 md:mb-6"
                  style={{ textShadow: '0 0 30px rgba(34,211,238,0.6), 0 0 10px rgba(34,211,238,0.4)' }}
                >
                  3
                </div>
                <span className="text-[10px] md:text-xs font-medium text-cyan-300/80 border border-cyan-400/30 rounded-full px-2.5 py-1 bg-cyan-400/10 italic">∞</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 z-10">Livegang & Betreuung</h3>
              <p className="text-slate-400 text-sm leading-relaxed z-10">
                Launch mit Einführung – danach übernehmen wir Monitoring und laufende Optimierung.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-[120px] md:h-[180px] flex items-center justify-center">
                <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-emerald-900/10 to-transparent pointer-events-none" />
                <div className="relative mt-12 w-[80%] h-[100px] bg-slate-900/80 rounded-t-xl border-t border-l border-r border-white/10 shadow-2xl overflow-hidden flex flex-col">
                  <div className="w-full h-6 bg-slate-800/50 border-b border-white/5 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                      <CheckCircle size={16} />
                      <span className="text-xs font-bold uppercase tracking-wider">System Live</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </GlareCard>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    question: 'Welche Vorteile bietet KI-Automatisierung für mein Unternehmen?',
    answer:
      'KI-Automatisierung übernimmt repetitive, regelbasierte Aufgaben – rund um die Uhr, fehlerfrei und skalierbar. Dein Team gewinnt wertvolle Zeit zurück, Reaktionszeiten sinken drastisch, und du kannst mehr Volumen mit gleicher Mannschaftsstärke bewältigen. Der ROI zeigt sich oft schon nach wenigen Wochen.',
  },
  {
    question: 'Ist das DSGVO-konform?',
    answer:
      'Ja. Wir setzen ausschließlich auf DSGVO-konforme Infrastruktur – entweder EU-basierte Anbieter oder Lösungen mit entsprechenden Standardvertragsklauseln. Personenbezogene Daten werden nicht unnötig gespeichert oder verarbeitet. Auf Wunsch erläutern wir die technische Umsetzung im Detail.',
  },
  {
    question: 'Mir fehlt die Weitsicht – was kann man überhaupt automatisieren?',
    answer:
      'Das ist häufiger als du denkst. Genau dafür gibt es die kostenlose Systemanalyse. Wir schauen gemeinsam auf deine täglichen Abläufe und identifizieren die Hebel mit dem größten Einsparpotenzial. Typische Kandidaten: E-Mail-Bearbeitung, Lead-Qualifizierung, Terminbuchung, Rechnungsverarbeitung, Kundennachrichten.',
  },
  {
    question: 'Brauche ich technisches Vorwissen oder eine eigene IT-Abteilung?',
    answer:
      'Nein, absolut nicht. Wir übernehmen die komplette technische Umsetzung. Du musst uns nur in einfachen Worten erklären, wie dein Tagesgeschäft aktuell abläuft – den Rest (Schnittstellen, Programmierung, KI-Setup) erledigen komplett wir.',
  },
  {
    question: 'Müssen wir unsere bestehende Software dafür wechseln?',
    answer:
      'In den allermeisten Fällen: Nein. Wir bauen unsere Automatisierungen exakt um deinen bestehenden Tech-Stack herum. Egal ob du mit Microsoft 365, Google Workspace, spezifischen CRMs oder Branchen-Software arbeitest – wir verbinden deine Tools, anstatt sie auszutauschen.',
  },
  {
    question: 'Ersetzt die KI meine Mitarbeiter?',
    answer:
      'Im Gegenteil: Sie entlastet sie. Die KI übernimmt die stupiden, repetitiven Copy-Paste-Aufgaben. Dein Team hat endlich wieder den Kopf frei für die Dinge, die wirklich Umsatz bringen: Kundenberatung, Strategie und kreative Problemlösungen.',
  },
  {
    question: 'Wie viel meiner eigenen Zeit kostet die Umsetzung?',
    answer:
      'Sehr wenig. Nach einem intensiven Kick-off-Call, in dem wir deinen Prozess aufnehmen, arbeiten wir autark. Du musst uns nicht managen. Wir melden uns erst wieder bei dir, wenn das System testbereit ist.',
  },
  {
    question: 'Was passiert, wenn sich unsere Abläufe ändern oder ein Fehler auftritt?',
    answer:
      'Wir lassen dich nach dem Livegang nicht im Stich. Wir bieten optional dauerhafte Betreuung und Monitoring an. Wenn sich ein Tool ändert, passen wir die Workflows im Hintergrund einfach für dich an.',
  },
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
      }}
    >
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extralight mb-3">
            <span className="bg-gradient-to-r from-[#A0F0FF] to-[#60D8FF] bg-clip-text text-transparent">
              Häufige Fragen
            </span>
          </h2>
          <p className="text-white/60 text-sm">
            <span className="text-white/80">Ehrliche Antworten auf die wichtigsten Fragen.</span>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map(({ question, answer }, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden transition-all duration-200"
              style={{
                background: openIdx === i ? 'rgba(59,130,246,0.06)' : 'rgba(255,255,255,0.03)',
                border: `0.5px solid ${openIdx === i ? 'rgba(59,130,246,0.25)' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="text-sm font-medium text-white leading-snug">{question}</span>
                <span
                  className="w-7 h-7 flex items-center justify-center flex-shrink-0 rounded-full text-white/60 transition-transform duration-200"
                  style={{
                    border: '0.5px solid rgba(255,255,255,0.12)',
                    transform: openIdx === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </button>

              {openIdx === i && (
                <div
                  className="px-6 pb-5 text-white/60 text-sm leading-relaxed"
                  style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="pt-4">{answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────

const FOOTER_LINKS = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Prozess',    href: '#prozess'    },
  { label: 'ROI',        href: '#roi'        },
  { label: 'FAQ',        href: '#faq'        },
];

const LEGAL_LINKS = [
  { label: 'Impressum',  href: '/impressum'  },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB',        href: '/agb'        },
];

function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Left: Logo + Punchline */}
          <div className="flex flex-col gap-4">
            <a href="/">
              <Image
                src="/flowmetry-logo-light.png"
                alt="Flowmetry"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-[200px]">
              Automatisierung, die wirklich läuft – 24/7.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/35 mb-1">
              Navigation
            </p>
            {FOOTER_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-white/50 hover:text-white/60 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right: Legal */}
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/35 mb-1">
              Rechtliches
            </p>
            {LEGAL_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-white/50 hover:text-white/60 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} Flowmetry. Alle Rechte vorbehalten.
          </p>

        </div>

      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function (...args: any[]) {
        const cal = C.Cal;
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (args[0] === L) {
          const api: any = (...a: any[]) => { p(api, a); };
          const ns = args[1];
          api.q = api.q || [];
          if (typeof ns === 'string') {
            cal.ns[ns] = cal.ns[ns] || api;
            p(cal.ns[ns], args); p(cal, ['initNamespace', ns]);
          } else p(cal, args);
          return;
        }
        p(cal, args);
      };
    })(window, 'https://app.cal.eu/embed/embed.js', 'init');

    const Cal = (window as any).Cal;
    Cal('init', '30min', { origin: 'https://app.cal.eu' });
    Cal.ns['30min']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
  }, []);

  return (
    <div className="text-white min-h-screen relative overflow-x-hidden">
      <BeamsBackground />

      <div className="relative z-20">
        <Navbar />
        <HeroSection />
        <TechLogoBar />
        <ProblemSolutionSection />
        <Reveal><ServicesGrid /></Reveal>
        <Reveal><DreiSchritteSection /></Reveal>
        <Reveal><ROISection /></Reveal>
        <Reveal><FAQSection /></Reveal>
        <Footer />
      </div>
    </div>
  );
}
