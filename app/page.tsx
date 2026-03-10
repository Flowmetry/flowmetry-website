import Image from "next/image";
import { Reveal } from "./components/Reveal";
import { ScrollProgress } from "./components/ScrollProgress";
import { ImpactCalculator } from "./components/ImpactCalculator";
import { AutomationBento } from "./components/AutomationBento";
import { ProblemSection } from "./components/ProblemSection";
import { KontaktSection } from "./components/KontaktSection";
import { HeroSection } from "./components/HeroSection";
import { PlanetBackground } from "./components/PlanetBackground";

// ─── Icons ─────────────────────────────────────────────────────────────────── (moved to client components)

// ─── Hero → imported from HeroSection.tsx ─────────────────────────────────────

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A2F3A]/40 bg-[#0F1115]/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-8 h-[68px] flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/flowmetry-logo-light.png"
            alt="Flowmetry"
            width={160}
            height={44}
            className="h-10 w-auto"
            priority
          />
        </a>
        <a
          href="https://links.flowmetry.ai/widget/booking/GO0EMLNeZSyGQphB9WEC"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3B82F6] hover:bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(59,130,246,0.25)]"
        >
          Systemanalyse anfragen
        </a>
      </div>
    </header>
  );
}


// ─── Drei Schritte Section ───────────────────────────────────────────────────

function DreiSchritteSection() {
  return (
    <section
      id="wie-es-funktioniert"
      className="py-20"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            In 3 Schritten{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
              zum System
            </span>
          </h2>
          <p className="text-[#6B7280] text-sm max-w-xs mx-auto leading-relaxed">
            Strukturiert. Transparent. Produktionsbereit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* ── 01 Analyse — Radar ── */}
          <Reveal delay={0}>
            <div
              className="min-h-[420px] flex flex-col rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 60px rgba(59,130,246,0.11), 0 0 120px rgba(59,130,246,0.05), inset 0 1px 0 rgba(59,130,246,0.06)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold tracking-[0.22em] text-blue-400/40 select-none">01</span>
                <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-blue-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803M10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>

              <h3 className="text-[15px] font-semibold text-white mb-0">Analyse</h3>

              {/* Radar animation — free-floating, no container */}
              <div className="flex-1 flex items-center justify-center">
                <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[190px]" aria-hidden="true">
                  <defs>
                    <filter id="ds-rf" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="b"/>
                      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                    <filter id="ds-rf-sm" x="-80%" y="-80%" width="260%" height="260%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b"/>
                      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>

                  {/* Concentric rings */}
                  <circle cx="100" cy="90" r="72" fill="none" stroke="#3B82F6" strokeOpacity="0.09" strokeWidth="0.8"/>
                  <circle cx="100" cy="90" r="52" fill="none" stroke="#3B82F6" strokeOpacity="0.13" strokeWidth="0.8"/>
                  <circle cx="100" cy="90" r="32" fill="none" stroke="#3B82F6" strokeOpacity="0.18" strokeWidth="0.8"/>
                  <circle cx="100" cy="90" r="12" fill="none" stroke="#3B82F6" strokeOpacity="0.28" strokeWidth="0.8"/>

                  {/* Crosshairs */}
                  <line x1="22" y1="90" x2="178" y2="90" stroke="#3B82F6" strokeOpacity="0.07" strokeWidth="0.6" strokeDasharray="2 6"/>
                  <line x1="100" y1="12" x2="100" y2="168" stroke="#3B82F6" strokeOpacity="0.07" strokeWidth="0.6" strokeDasharray="2 6"/>

                  {/* Rotating sweep group */}
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 100 90" to="360 100 90" dur="4s" repeatCount="indefinite"/>
                    {/* Trailing sector (~60°) */}
                    <path d="M100 90 L100 18 A72 72 0 0 1 162.4 54 Z" fill="#3B82F6" fillOpacity="0.06"/>
                    {/* Leading edge line */}
                    <line x1="100" y1="90" x2="100" y2="18" stroke="#3B82F6" strokeOpacity="0.6" strokeWidth="1.2" filter="url(#ds-rf)"/>
                    {/* Tip dot */}
                    <circle cx="100" cy="20" r="2.8" fill="#3B82F6" opacity="0.9" filter="url(#ds-rf)"/>
                  </g>

                  {/* Blip A — ~45° clockwise from top, r≈52 → (137, 53), hit at keyTime 0.125 */}
                  <circle cx="137" cy="53" r="2.5" fill="#93C5FD">
                    <animate attributeName="opacity" values="0;0;0.9;0.4;0;0" keyTimes="0;0.10;0.14;0.22;0.32;1" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="r" values="2;2;3.5;2;2;2" keyTimes="0;0.10;0.14;0.22;0.32;1" dur="4s" repeatCount="indefinite"/>
                  </circle>

                  {/* Blip B — ~130° from top, r≈52 → (140, 130), hit at keyTime 0.361 */}
                  <circle cx="140" cy="130" r="2" fill="#60A5FA">
                    <animate attributeName="opacity" values="0;0;0.75;0.3;0;0" keyTimes="0;0.33;0.37;0.46;0.55;1" dur="4s" repeatCount="indefinite"/>
                  </circle>

                  {/* Blip C — ~230° from top, r≈35 → (62, 117), hit at keyTime 0.639 */}
                  <circle cx="63" cy="117" r="1.8" fill="#3B82F6">
                    <animate attributeName="opacity" values="0;0;0.8;0.35;0;0" keyTimes="0;0.61;0.65;0.73;0.82;1" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="r" values="1.5;1.5;3;1.5;1.5;1.5" keyTimes="0;0.61;0.65;0.73;0.82;1" dur="4s" repeatCount="indefinite"/>
                  </circle>

                  {/* Center dot */}
                  <circle cx="100" cy="90" r="3.5" fill="#3B82F6" opacity="0.7" filter="url(#ds-rf-sm)"/>
                  <circle cx="100" cy="90" r="7" fill="none" stroke="#3B82F6" strokeOpacity="0.22" strokeWidth="0.8"/>
                </svg>
              </div>

              <p className="text-[#9CA3AF] text-[13px] leading-relaxed">
                Prozesse aufnehmen, Hebel identifizieren und einen konkreten Plan erstellen.
              </p>
            </div>
          </Reveal>

          {/* ── 02 Umsetzung — Data Flow Grid ── */}
          <Reveal delay={90}>
            <div
              className="min-h-[420px] flex flex-col rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 60px rgba(34,211,238,0.10), 0 0 120px rgba(34,211,238,0.04), inset 0 1px 0 rgba(34,211,238,0.06)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold tracking-[0.22em] text-cyan-400/40 select-none">02</span>
                <div className="w-9 h-9 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-cyan-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-[15px] font-semibold text-white mb-0">Umsetzung</h3>

              {/* System grid / data flow animation */}
              <div className="flex-1 flex items-center justify-center">
                <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[190px]" aria-hidden="true">
                  <defs>
                    <filter id="ds-uf" x="-60%" y="-60%" width="220%" height="220%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b"/>
                      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                    <filter id="ds-uf-sm" x="-80%" y="-80%" width="260%" height="260%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b"/>
                      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>

                  {/* Network lines — Input(28,90) → TopNode(100,42) → Output(172,90) → BottomNode(100,138) → Input */}
                  <line x1="28" y1="90" x2="100" y2="42"  stroke="#22D3EE" strokeOpacity="0.22" strokeWidth="0.9"/>
                  <line x1="28" y1="90" x2="100" y2="138" stroke="#22D3EE" strokeOpacity="0.22" strokeWidth="0.9"/>
                  <line x1="100" y1="42"  x2="172" y2="90" stroke="#22D3EE" strokeOpacity="0.22" strokeWidth="0.9"/>
                  <line x1="100" y1="138" x2="172" y2="90" stroke="#22D3EE" strokeOpacity="0.22" strokeWidth="0.9"/>
                  {/* Cross connection */}
                  <line x1="100" y1="52" x2="100" y2="128" stroke="#22D3EE" strokeOpacity="0.1" strokeWidth="0.6" strokeDasharray="3 4"/>

                  {/* Nodes */}
                  <circle cx="28"  cy="90"  r="9"  fill="rgba(34,211,238,0.08)" stroke="#22D3EE" strokeOpacity="0.35" strokeWidth="1.2"/>
                  <circle cx="28"  cy="90"  r="3.5" fill="#22D3EE" opacity="0.55"/>
                  <circle cx="100" cy="42"  r="11" fill="rgba(34,211,238,0.1)"  stroke="#22D3EE" strokeOpacity="0.55" strokeWidth="1.2" filter="url(#ds-uf-sm)"/>
                  <circle cx="100" cy="42"  r="4.5" fill="#22D3EE" opacity="0.75"/>
                  <circle cx="100" cy="138" r="11" fill="rgba(34,211,238,0.1)"  stroke="#22D3EE" strokeOpacity="0.55" strokeWidth="1.2" filter="url(#ds-uf-sm)"/>
                  <circle cx="100" cy="138" r="4.5" fill="#22D3EE" opacity="0.75"/>
                  <circle cx="172" cy="90"  r="9"  fill="rgba(34,197,94,0.1)"   stroke="#22C55E" strokeOpacity="0.5"  strokeWidth="1.2"/>
                  <circle cx="172" cy="90"  r="3.5" fill="#22C55E" opacity="0.65"/>

                  {/* Pulse rings */}
                  <circle cx="100" cy="42" r="11" fill="none" stroke="#22D3EE" strokeOpacity="0.4" strokeWidth="1">
                    <animate attributeName="r" values="11;20;11" dur="2.8s" repeatCount="indefinite" begin="0s"/>
                    <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="2.8s" repeatCount="indefinite" begin="0s"/>
                  </circle>
                  <circle cx="100" cy="138" r="11" fill="none" stroke="#22D3EE" strokeOpacity="0.4" strokeWidth="1">
                    <animate attributeName="r" values="11;20;11" dur="2.8s" repeatCount="indefinite" begin="1.4s"/>
                    <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="2.8s" repeatCount="indefinite" begin="1.4s"/>
                  </circle>

                  {/* Flowing data dots */}
                  <circle r="2.8" fill="#22D3EE" filter="url(#ds-uf)">
                    <animateMotion path="M28,90 L100,42" dur="1.8s" repeatCount="indefinite" begin="0s"/>
                  </circle>
                  <circle r="2.2" fill="#22D3EE" filter="url(#ds-uf)">
                    <animateMotion path="M28,90 L100,138" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
                  </circle>
                  <circle r="2.5" fill="#22D3EE" filter="url(#ds-uf)">
                    <animateMotion path="M100,42 L172,90" dur="1.9s" repeatCount="indefinite" begin="0.9s"/>
                  </circle>
                  <circle r="2.5" fill="#22C55E" filter="url(#ds-uf)">
                    <animateMotion path="M100,138 L172,90" dur="2s" repeatCount="indefinite" begin="0.3s"/>
                  </circle>
                </svg>
              </div>

              <p className="text-[#9CA3AF] text-[13px] leading-relaxed">
                System bauen, integrieren und produktionsbereit in 2–4 Wochen live schalten.
              </p>
            </div>
          </Reveal>

          {/* ── 03 Livegang — Sine Wave ── */}
          <Reveal delay={180}>
            <div
              className="min-h-[420px] flex flex-col rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 60px rgba(34,197,94,0.09), 0 0 120px rgba(34,197,94,0.04), inset 0 1px 0 rgba(34,197,94,0.06)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold tracking-[0.22em] text-green-400/40 select-none">03</span>
                <div className="w-9 h-9 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-[15px] font-semibold text-white mb-0">Livegang & Betreuung</h3>

              {/* Moving sine wave — free-floating */}
              <div className="flex-1 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[190px]" aria-hidden="true" style={{overflow:"hidden"}}>
                  <defs>
                    <filter id="ds-lf" x="-20%" y="-60%" width="140%" height="220%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="b"/>
                      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                    <filter id="ds-lf-sm" x="-80%" y="-80%" width="260%" height="260%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b"/>
                      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                    <linearGradient id="ds-lg" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22C55E" stopOpacity="0.28"/>
                      <stop offset="100%" stopColor="#22C55E" stopOpacity="0"/>
                    </linearGradient>
                    <clipPath id="ds-lc">
                      <rect x="0" y="0" width="200" height="180"/>
                    </clipPath>
                  </defs>

                  {/* Status dots — top */}
                  <circle cx="20"  cy="24" r="5.5" fill="rgba(34,197,94,0.13)" stroke="#22C55E" strokeOpacity="0.55" strokeWidth="1.2"/>
                  <circle cx="20"  cy="24" r="2.5" fill="#22C55E" opacity="0.9" filter="url(#ds-lf-sm)"/>
                  <circle cx="40"  cy="24" r="5.5" fill="rgba(34,197,94,0.13)" stroke="#22C55E" strokeOpacity="0.55" strokeWidth="1.2"/>
                  <circle cx="40"  cy="24" r="2.5" fill="#22C55E" opacity="0.9" filter="url(#ds-lf-sm)"/>
                  <circle cx="60"  cy="24" r="5.5" fill="rgba(34,197,94,0.13)" stroke="#22C55E" strokeOpacity="0.55" strokeWidth="1.2"/>
                  <circle cx="60"  cy="24" r="2.5" fill="#22C55E" opacity="0.9" filter="url(#ds-lf-sm)"/>

                  {/* Status badge */}
                  <rect x="128" y="16" width="58" height="16" rx="8" fill="rgba(34,197,94,0.08)" stroke="#22C55E" strokeOpacity="0.22" strokeWidth="0.8"/>
                  <circle cx="140" cy="24" r="2.5" fill="#22C55E" opacity="0.7"/>
                  <rect x="148" y="21" width="30" height="2" rx="1" fill="#22C55E" opacity="0.3"/>
                  <rect x="148" y="25" width="22" height="2" rx="1" fill="#22C55E" opacity="0.18"/>

                  {/* Grid lines */}
                  <line x1="0" y1="90" x2="200" y2="90" stroke="#22C55E" strokeOpacity="0.08" strokeWidth="0.6"/>
                  <line x1="0" y1="114" x2="200" y2="114" stroke="#22C55E" strokeOpacity="0.06" strokeWidth="0.6"/>
                  <line x1="0" y1="66" x2="200" y2="66" stroke="#22C55E" strokeOpacity="0.06" strokeWidth="0.6"/>

                  {/* Animated sine wave — clipped to viewport */}
                  {/* Wave period=80px, amplitude=24px, center y=90. Range: x from -80 to 280 */}
                  <g clipPath="url(#ds-lc)">
                    {/* Area fill */}
                    <path d="M-80,90 C-70,66 -50,66 -40,90 C-30,114 -10,114 0,90 C10,66 30,66 40,90 C50,114 70,114 80,90 C90,66 110,66 120,90 C130,114 150,114 160,90 C170,66 190,66 200,90 C210,114 230,114 240,90 C250,66 270,66 280,90 L280,180 L-80,180 Z" fill="url(#ds-lg)">
                      <animateTransform attributeName="transform" type="translate" from="0,0" to="-80,0" dur="2.8s" repeatCount="indefinite"/>
                    </path>
                    {/* Main wave */}
                    <path d="M-80,90 C-70,66 -50,66 -40,90 C-30,114 -10,114 0,90 C10,66 30,66 40,90 C50,114 70,114 80,90 C90,66 110,66 120,90 C130,114 150,114 160,90 C170,66 190,66 200,90 C210,114 230,114 240,90 C250,66 270,66 280,90" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" opacity="0.7" filter="url(#ds-lf)">
                      <animateTransform attributeName="transform" type="translate" from="0,0" to="-80,0" dur="2.8s" repeatCount="indefinite"/>
                    </path>
                    {/* Bright highlight */}
                    <path d="M-80,90 C-70,66 -50,66 -40,90 C-30,114 -10,114 0,90 C10,66 30,66 40,90 C50,114 70,114 80,90 C90,66 110,66 120,90 C130,114 150,114 160,90 C170,66 190,66 200,90 C210,114 230,114 240,90 C250,66 270,66 280,90" stroke="#86EFAC" strokeWidth="0.8" strokeLinecap="round" opacity="0.5">
                      <animateTransform attributeName="transform" type="translate" from="0,0" to="-80,0" dur="2.8s" repeatCount="indefinite"/>
                    </path>
                  </g>
                </svg>
              </div>

              <p className="text-[#9CA3AF] text-[13px] leading-relaxed">
                Dauerhafter Betrieb, Monitoring und Optimierung – auch nach dem Launch.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

// ─── Automation Bento → imported from AutomationBento.tsx ────────────────────

// ─── Problem Section → imported from ProblemSection.tsx ──────────────────────

// ─── Kontakt Section → imported from KontaktSection.tsx ──────────────────────

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Für welche Unternehmen ist Flowmetry geeignet?",
    answer:
      "Flowmetry arbeitet mit Unternehmen, die ein hohes Anfragevolumen haben oder stark auf manuelle Prozesse angewiesen sind – z. B. Agenturen, Dienstleister, Beratungsunternehmen und schnell wachsende Unternehmen. Branchenunabhängig.",
  },
  {
    question: "Wie lange dauert die Implementierung?",
    answer:
      "Ein erstes System ist in der Regel innerhalb von 2–4 Wochen einsatzbereit. Der genaue Zeitrahmen hängt von der Komplexität deiner Prozesse und der Anzahl der zu integrierenden Systeme ab.",
  },
  {
    question: "Was kostet ein Automationssystem?",
    answer:
      "Jedes System wird individuell kalkuliert. Wir beginnen mit einer kostenlosen Systemanalyse, um Umfang und Investition realistisch einzuschätzen. Es gibt keine pauschalen Preismodelle – nur maßgeschneiderte Lösungen.",
  },
];

function FAQSection() {
  return (
    <section
      id="faq"
      className="py-20"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
              Häufige Fragen
            </span>
          </h2>
          <p className="text-[#9CA3AF]">
            Antworten auf die wichtigsten Fragen zu unserer Arbeitsweise.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '0.5px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-white/[0.03] transition-colors">
                <span className="font-medium pr-6">{question}</span>
                <span
                  className="w-7 h-7 flex items-center justify-center flex-shrink-0 rounded-full text-[#9CA3AF] group-open:rotate-45 transition-transform duration-200"
                  style={{ border: '0.5px solid rgba(255,255,255,0.12)' }}
                >
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <div
                className="px-6 pb-5 text-[#9CA3AF] text-sm leading-relaxed pt-4"
                style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)' }}
              >
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCtaSection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
      }}
    >
      {/* Mesh gradient — dark blue/violet depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'radial-gradient(at 0% 0%, hsla(210,100%,20%,0.15) 0, transparent 50%)',
            'radial-gradient(at 100% 100%, hsla(260,100%,20%,0.15) 0, transparent 50%)',
          ].join(', '),
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Starte jetzt deine{' '}
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
            Automatisierungs-Reise
          </span>
        </h2>
        <p className="text-[#9CA3AF] mb-10 max-w-md mx-auto">
          Kostenlose Systemanalyse – unverbindlich und in unter 30 Minuten.
        </p>
        <a
          href="https://links.flowmetry.ai/widget/booking/GO0EMLNeZSyGQphB9WEC"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold px-10 py-4 rounded-lg transition-colors text-base"
          style={{
            boxShadow: '0 0 40px rgba(59,130,246,0.42), 0 0 90px rgba(59,130,246,0.16)',
          }}
        >
          Systemanalyse anfragen
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer>
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/">
            <Image
              src="/flowmetry-logo-light.png"
              alt="Flowmetry"
              width={120}
              height={32}
              className="h-10 w-auto"
            />
          </a>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-[#9CA3AF] text-sm">
              © {new Date().getFullYear()} Flowmetry. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-5">
              {[
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "AGB", href: "/agb" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-[#6B7280] hover:text-[#9CA3AF] text-sm transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="text-white min-h-screen relative">
      <ScrollProgress />
      <PlanetBackground />

      <div className="relative z-20">
        <Nav />
        <HeroSection />
        <Reveal><DreiSchritteSection /></Reveal>
        <AutomationBento />
        <ProblemSection />
        <Reveal><ImpactCalculator /></Reveal>
        <KontaktSection />
        <Reveal><FAQSection /></Reveal>
        <Reveal><FinalCtaSection /></Reveal>
        <Footer />
      </div>
    </div>
  );
}
