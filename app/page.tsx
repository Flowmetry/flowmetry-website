'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Reveal }                  from './components/Reveal';
import { NoiseBackground }          from './components/ui/noise-background';
import { Navbar }                  from './components/Navbar';
import { HeroSection }             from './components/HeroSection';
import { ProblemSolutionSection }  from './components/ProblemSolutionSection';
import { ErgebnisseSection }       from './components/ErgebnisseSection';
import { WarumAndersSection }      from './components/WarumAndersSection';
import { LeistungenSection }       from './components/LeistungenSection';
import { ProzessSection }          from './components/ProzessSection';
import { FreebieSection }          from './components/FreebieSection';
import { UeberMichSection }        from './components/UeberMichSection';
import { FinalCTASection }         from './components/FinalCTASection';

// ─── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    question: 'Wie viel kostet eine Automatisierung / Beratung?',
    answer:
      'Das lässt sich nicht pauschal sagen – und genau das ist der Punkt. Jedes Business ist anders, jeder Engpass ist anders. Ich schaue mir zuerst an, was du brauchst, und mache dir dann ein individuelles Angebot. Kein Standardpaket, keine versteckten Kosten. Im kostenlosen Erstgespräch bekommst du eine erste Einschätzung.',
  },
  {
    question: 'Wie lange dauert eine Automatisierung?',
    answer:
      'Je nach Umfang zwischen 2 und 4 Wochen. Du bekommst regelmäßige Updates zum Stand – kein Warten im Dunkeln. Bevor wir starten, bekommst du eine realistische Zeiteinschätzung.',
  },
  {
    question: 'Was passiert danach?',
    answer:
      'Du hörst von mir – nicht andersrum. Wenn es neue Möglichkeiten gibt dein System zu verbessern, wenn ein relevantes Update kommt oder wenn ich Optimierungspotenzial sehe, melde ich mich proaktiv. Ich liefere nicht ab und verschwinde.',
  },
  {
    question: 'Was passiert, wenn sich unsere Abläufe ändern oder ein Fehler auftritt?',
    answer:
      'Ich stehe dir direkt zur Seite. Wenn sich Prozesse bei dir ändern, passe ich das System an. Wenn ein Fehler auftritt, reagiere ich – nicht erst nach drei Tagen, sondern zeitnah. Dafür bin ich dein Ansprechpartner.',
  },
  {
    question: 'Muss ich vorbereitet in das Erstgespräch kommen?',
    answer:
      'Nicht zwingend. Wenn du schon weißt was du brauchst oder Hintergrundinfos hast – gerne mitbringen, das beschleunigt den Prozess. Wenn nicht, ist das kein Problem. Dafür ist das Erstgespräch da – wir klären gemeinsam, wo der Hebel liegt.',
  },
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-12 md:py-24"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
      }}
    >
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-6 md:mb-14">
          <h2
            className="font-semibold tracking-tighter text-[#1C1614] leading-[1.05] mb-3"
            style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3rem)' }}
          >
            Häufige{' '}
            <span style={{ fontFamily: 'var(--font-signature)', fontStyle: 'italic', fontWeight: 700, color: '#8B4A1E', fontSize: '1.1em' }}>
              Fragen.
            </span>
          </h2>
          <p className="text-[#1C1614]/50 text-sm">
            Ehrliche Antworten auf die wichtigsten Fragen.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map(({ question, answer }, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: openIdx === i ? 'rgba(205,155,123,0.06)' : '#ffffff',
                border: `1px solid ${openIdx === i ? 'rgba(139,74,30,0.15)' : 'rgba(28,22,20,0.07)'}`,
              }}
            >
              <button
                className="w-full flex items-center justify-between px-7 py-6 text-left gap-6"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="text-base font-medium text-[#1C1614] leading-snug">{question}</span>
                <span
                  className="flex-shrink-0 text-[#1C1614]/40 transition-transform duration-300"
                  style={{ transform: openIdx === i ? 'rotate(180deg)' : 'none' }}
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {openIdx === i && (
                <div
                  className="px-7 pb-6 text-[#1C1614]/55 text-sm leading-relaxed"
                  style={{ borderTop: '0.5px solid rgba(28,22,20,0.07)' }}
                >
                  <div className="pt-5">{answer}</div>
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

const LEGAL_LINKS = [
  { label: 'Impressum',  href: '/impressum'  },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB',        href: '/agb'        },
];

function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{ borderColor: 'rgba(28,22,20,0.07)' }}
    >
      {/* FLOWMETRY – volle Breite, Brand-Farbe */}
      <div className="w-full pt-16 pb-2 overflow-hidden">
        <p
          className="font-black leading-none select-none text-center w-full"
          style={{
            fontSize: 'clamp(3rem, 14.5vw, 99rem)',
            letterSpacing: '0.06em',
            background: 'linear-gradient(to bottom, rgba(139,74,30,0.18) 0%, rgba(139,74,30,0.07) 60%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          FLOWMETRY
        </p>
      </div>

      {/* Bottom bar: Copyright · Legal · Icons – alles in einer Zeile */}
      <div
        className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 px-6 pb-6"
        style={{ borderTop: '0.5px solid rgba(28,22,20,0.07)', paddingTop: '16px' }}
      >
        <p className="text-[#1C1614]/30 text-xs whitespace-nowrap">
          © {new Date().getFullYear()} Flowmetry. Alle Rechte vorbehalten.
        </p>

        <div className="flex items-center gap-5">
          {LEGAL_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-xs text-[#1C1614]/30 hover:text-[#1C1614]/55 transition-colors whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* TikTok */}
          <a href="https://www.tiktok.com/@flowmetry.ai" target="_blank" rel="noopener noreferrer" className="text-[#1C1614]/30 hover:text-[#1C1614]/55 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/flowmetry.ai/" target="_blank" rel="noopener noreferrer" className="text-[#1C1614]/30 hover:text-[#1C1614]/55 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
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
    <div className="text-[#1C1614] min-h-screen relative overflow-x-hidden">
      <NoiseBackground />

      <div className="relative z-20">
        <Navbar />
        <HeroSection />
        <ProblemSolutionSection />
        <Reveal><ErgebnisseSection /></Reveal>
        <Reveal><WarumAndersSection /></Reveal>
        <Reveal><LeistungenSection /></Reveal>
        <Reveal><ProzessSection /></Reveal>
        <Reveal><FreebieSection /></Reveal>
        <Reveal><UeberMichSection /></Reveal>
        <Reveal><FAQSection /></Reveal>
        <Reveal><FinalCTASection /></Reveal>
        <Footer />
      </div>
    </div>
  );
}
