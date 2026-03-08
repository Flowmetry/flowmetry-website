import Image from "next/image";
import { Reveal } from "./components/Reveal";
import { ScrollProgress } from "./components/ScrollProgress";
import { StickyScrollWorkflow } from "./components/StickyScrollWorkflow";
import { ImpactCalculator } from "./components/ImpactCalculator";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconStop() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-red-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-yellow-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-orange-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="text-[#3B82F6]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

// ─── Workflow Mockup ─────────────────────────────────────────────────────────

function WorkflowMockup() {
  const kpis = [
    { label: "Entgangene Anfragen", value: "0",      sub: "dieser Monat", color: "#22C55E", bg: "rgba(34,197,94,0.05)",   border: "rgba(34,197,94,0.16)"  },
    { label: "Follow-Ups",          value: "20",     sub: "ausstehend",   color: "#3B82F6", bg: "rgba(59,130,246,0.05)",  border: "rgba(59,130,246,0.16)" },
    { label: "Reaktionszeit",       value: "4m 32s", sub: "Median",       color: "#22D3EE", bg: "rgba(34,211,238,0.05)",  border: "rgba(34,211,238,0.16)" },
    { label: "Lead Score Ø",        value: "82",     sub: "von 100",      color: "#8B5CF6", bg: "rgba(139,92,246,0.05)",  border: "rgba(139,92,246,0.16)" },
  ];

  // Pipeline: step 2 (Priorisierung) is currently active
  const pipeline = [
    { label: "Eingang",       color: "#3B82F6", done: true,  active: false },
    { label: "AI Analyse",    color: "#22D3EE", done: true,  active: false },
    { label: "Priorisierung", color: "#8B5CF6", done: false, active: true  },
    { label: "Termin",        color: "#22C55E", done: false, active: false },
  ];

  const feed = [
    { name: "Thomas Bauer",   tag: "Hot Lead",       tagClass: "text-green-400 bg-green-500/10",   score: 91, time: "12s" },
    { name: "Anna Koch",      tag: "Follow-up",      tagClass: "text-yellow-400 bg-yellow-500/10", score: 34, time: "1m"  },
    { name: "Max Mustermann", tag: "Termin gebucht", tagClass: "text-blue-400 bg-blue-500/10",     score: 78, time: "3m"  },
  ];

  return (
    <div className="relative max-w-3xl mx-auto select-none px-4 md:px-0">

      {/* Background glow — centered, contained above fold */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-70px -50px 0px -50px",
          background: "radial-gradient(ellipse 80% 58% at 50% 36%, rgba(59,130,246,0.26) 0%, rgba(34,211,238,0.06) 48%, transparent 68%)",
          zIndex: -1,
        }}
      />

      {/* Perspective wrapper — .dashboard-3d handles responsive rotateX */}
      <div
        className="dashboard-3d"
        style={{
          filter: [
            "drop-shadow(0 0 40px rgba(59,130,246,0.26))",
            "drop-shadow(0 0 12px rgba(34,211,238,0.08))",
            "drop-shadow(0 28px 60px rgba(0,0,0,0.7))",
          ].join(" "),
        }}
      >
        {/* ── Outer frame / shell ──────────────────────────────────────────── */}
        <div
          style={{
            background: "linear-gradient(175deg, #13161F 0%, #0C0E17 100%)",
            border: "1px solid #232736",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 1px 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(59,130,246,0.10), 0 0 48px rgba(59,130,246,0.07)",
          }}
        >
          {/* Top accent line — blue → cyan */}
          <div
            style={{
              height: "2px",
              background: "linear-gradient(90deg, transparent 5%, rgba(59,130,246,0.9) 28%, rgba(34,211,238,0.85) 72%, transparent 95%)",
            }}
          />

          {/* ── A) STATUS BAR ───────────────────────────────────────────────── */}
          <div
            className="px-5 md:px-6 py-3 flex items-center justify-between"
            style={{ borderBottom: "1px solid #191D2B" }}
          >
            <div>
              <p className="text-[13px] font-semibold text-white tracking-tight leading-tight">Flowmetry Control Center</p>
              <div className="flex items-center gap-2 mt-0.5">
                <p className="text-[10px] text-[#6B7280]">flowmetry.ai/dashboard</p>
                <span className="text-[#374151] text-[10px]">·</span>
                <p className="text-[10px] text-[#6B7280]">Letzte Aktualisierung: gerade eben</p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0 ml-4">
              <div
                className="flex items-center gap-1.5 rounded px-2 py-1"
                style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.18)" }}
              >
                <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-[10px] text-green-400 font-medium whitespace-nowrap">Alle Systeme aktiv</span>
              </div>
            </div>
          </div>

          {/* ── Inner dashboard surface ──────────────────────────────────────── */}
          <div className="bg-[#07090F] p-3 md:p-4 flex flex-col gap-3">

            {/* ── B) KPI ROW ──────────────────────────────────────────────────── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-lg p-3"
                  style={{ background: kpi.bg, border: `1px solid ${kpi.border}` }}
                >
                  <p className="text-[9px] text-[#4B5563] uppercase tracking-wider mb-2 leading-tight font-medium">{kpi.label}</p>
                  <p
                    className="text-[18px] md:text-[20px] font-bold tabular-nums leading-none mb-1"
                    style={{ color: kpi.color }}
                  >
                    {kpi.value}
                  </p>
                  <p className="text-[9px] text-[#374151]">{kpi.sub}</p>
                </div>
              ))}
            </div>

            {/* ── C) PIPELINE ─────────────────────────────────────────────────── */}
            <div
              className="rounded-lg px-3 py-2.5"
              style={{ background: "#0B0D16", border: "1px solid #191D2B" }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-[9px] text-[#374151] uppercase tracking-widest font-medium">Aktiver Prozess</p>
                <p className="text-[9px] text-[#374151]">1 Vorgang läuft</p>
              </div>

              {/* Desktop: horizontal flow */}
              <div className="hidden md:flex items-center gap-1">
                {pipeline.map((step, i) => (
                  <div key={step.label} className="flex items-center flex-1 min-w-0">
                    <div
                      className="flex-1 flex items-center gap-1.5 py-1.5 px-2 rounded"
                      style={{
                        background: step.active
                          ? `${step.color}18`
                          : step.done
                          ? `${step.color}0A`
                          : "rgba(255,255,255,0.02)",
                        border: step.active
                          ? `1px solid ${step.color}45`
                          : step.done
                          ? `1px solid ${step.color}22`
                          : "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{
                          background: step.active ? step.color : step.done ? step.color : "#2A3040",
                          opacity: step.done && !step.active ? 0.6 : 1,
                        }}
                      />
                      <span
                        className="text-[10px] font-medium truncate"
                        style={{
                          color: step.active ? step.color : step.done ? `${step.color}88` : "#374151",
                        }}
                      >
                        {step.label}
                      </span>
                    </div>
                    {i < pipeline.length - 1 && (
                      <div className="w-4 flex-shrink-0 flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4h5M4.5 1.5L7 4l-2.5 2.5" stroke="#1E2430" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile: 2×2 compact grid */}
              <div className="grid grid-cols-2 gap-1.5 md:hidden">
                {pipeline.map((step) => (
                  <div
                    key={step.label}
                    className="flex items-center gap-1.5 py-1.5 px-2 rounded"
                    style={{
                      background: step.active ? `${step.color}18` : step.done ? `${step.color}0A` : "rgba(255,255,255,0.02)",
                      border: step.active ? `1px solid ${step.color}45` : step.done ? `1px solid ${step.color}22` : "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: step.active ? step.color : step.done ? step.color : "#2A3040", opacity: step.done && !step.active ? 0.6 : 1 }} />
                    <span className="text-[10px] font-medium" style={{ color: step.active ? step.color : step.done ? `${step.color}88` : "#374151" }}>{step.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── D) LIVE FEED ────────────────────────────────────────────────── */}
            <div
              className="rounded-lg overflow-hidden"
              style={{ border: "1px solid #191D2B" }}
            >
              <div
                className="px-3 py-2 flex items-center gap-2"
                style={{ background: "#0B0D16", borderBottom: "1px solid #191D2B" }}
              >
                <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] font-medium text-[#4B5563] uppercase tracking-wider">Live Feed</span>
                <span className="ml-auto text-[9px] text-[#2A3040] font-mono">Echtzeit</span>
              </div>
              {feed.map((item, i) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between px-3 py-2"
                  style={{
                    background: "#07090F",
                    borderBottom: i < feed.length - 1 ? "1px solid #191D2B" : undefined,
                  }}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-[11px] text-[#D1D5DB] font-medium truncate">{item.name}</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium flex-shrink-0 ${item.tagClass}`}>
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                    <span className="text-[11px] font-semibold text-white tabular-nums">
                      {item.score}<span className="text-[#2A3040] font-normal text-[9px]">/100</span>
                    </span>
                    <span className="text-[9px] text-[#374151] font-mono w-5 text-right">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Sockel — soft ground shadow */}
      <div
        style={{
          margin: "0 10%",
          height: "20px",
          background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(59,130,246,0.14) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}

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

// ─── Hero ─────────────────────────────────────────────────────────────────────

const TECH_CHIPS = ["Claude", "ChatGPT", "n8n", "REST APIs", "CRM", "WhatsApp", "Gmail", "Calendar"];

function Hero() {
  return (
    <section className="relative overflow-hidden pt-[100px] pb-0">
      {/* CSS keyframes for tech rail */}
      <style>{`
        @keyframes rail-slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tech-rail-inner {
          animation: rail-slide 24s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-rail-inner { animation: none; }
        }
        .dashboard-3d {
          transform: perspective(1200px) rotateX(8deg);
          transform-origin: 50% 100%;
        }
        @media (max-width: 767px) {
          .dashboard-3d {
            transform: perspective(800px) rotateX(2deg);
          }
        }
        /* Problem section — sticky note rotations */
        .problem-sticky-0 { transform: rotate(-1.6deg) translateY(-4px); box-shadow: 0 8px 28px rgba(0,0,0,0.45); }
        .problem-sticky-1 { transform: rotate(0.6deg)  translateY(3px);  box-shadow: 0 8px 28px rgba(0,0,0,0.45); }
        .problem-sticky-2 { transform: rotate(1.5deg)  translateY(-3px); box-shadow: 0 8px 28px rgba(0,0,0,0.45); }
        @media (max-width: 767px) {
          .problem-sticky-0 { transform: rotate(-0.6deg) translateY(-2px); }
          .problem-sticky-1 { transform: rotate(0.25deg) translateY(1px);  }
          .problem-sticky-2 { transform: rotate(0.6deg)  translateY(-1px); }
        }
        /* Deliverables staircase layout */
        @media (min-width: 768px) {
          .deliverable-stagger { padding-top: 28px; }
        }
        @media (max-width: 767px) {
          .deliverable-stagger { padding-left: 16px; }
        }
        /* ROI Calculator warm-pulse glow */
        @keyframes roi-glow {
          0%, 100% { box-shadow: 0 0 0 1px rgba(251,146,60,0.08), 0 0 24px rgba(251,146,60,0.04); }
          50%       { box-shadow: 0 0 0 1px rgba(251,146,60,0.20), 0 0 40px rgba(251,146,60,0.09); }
        }
        .roi-calculator-card { animation: roi-glow 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .roi-calculator-card { animation: none; }
        }
      `}</style>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #3A4055 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 110% 65% at 50% -10%, rgba(59,130,246,0.32) 0%, transparent 58%)",
        }}
      />
      {/* No bottom fade — CTAs stay fully visible */}

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        {/* Text block — centered */}
        <div className="text-center max-w-3xl mx-auto pt-16 pb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#161A22] border border-[#2A2F3A] rounded-md px-3 py-1 text-[12px] text-[#6B7280] font-medium tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse" />
            AI Automation Infrastruktur
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] tracking-tight mb-6">
            AI-Automation für
            <br />
            Unternehmen mit{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
              Anfragevolumen.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed">
            Maßgeschneiderte Automationssysteme, die Anfragen verarbeiten,
            qualifizieren und automatisch weiterverarbeiten.
          </p>
        </div>

        {/* MacBook Mockup */}
        <div className="relative z-0">
          <WorkflowMockup />
        </div>

        {/* CTAs + KPIs */}
        <div className="text-center pt-10 pb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="https://links.flowmetry.ai/widget/booking/GO0EMLNeZSyGQphB9WEC"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              Kostenlose Systemanalyse
            </a>
            <a
              href="#wie-es-funktioniert"
              className="w-full sm:w-auto bg-[#161A22] border border-[#2A2F3A] hover:border-[#3B82F6]/50 text-white font-semibold px-8 py-4 rounded-lg transition-all group"
            >
              So funktioniert es{" "}
              <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Social proof / KPIs */}
          <div className="flex items-center justify-center gap-6 sm:gap-10">
            {[
              { value: "< 5 Min", label: "Reaktionszeit" },
              { value: "100%", label: "Automatisiert" },
              { value: "2–4 Wo.", label: "Time to Live" },
            ].map(({ value, label }, i) => (
              <div key={label} className="flex items-center gap-6 sm:gap-10">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{value}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">{label}</div>
                </div>
                {i < 2 && <div className="w-px h-8 bg-[#2A2F3A]" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── Animated Tech Rail — end of Hero ────────────────────────────── */}
        <div
          className="relative overflow-hidden pb-12"
          style={{
            maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="tech-rail-inner flex items-center gap-3 w-max py-1">
            {[...TECH_CHIPS, ...TECH_CHIPS].map((chip, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-md bg-[#161A22] border border-[#2A2F3A]/60 text-[11px] text-[#374151] font-medium tracking-wide whitespace-nowrap"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Automation Overview Section ─────────────────────────────────────────────

function ChatbotMock() {
  return (
    <div className="mt-4 rounded-lg border border-[#1E2436] overflow-hidden">
      <div className="bg-[#0C0E16] p-3 space-y-2">
        <div className="flex justify-start">
          <div className="bg-[#1E2436] text-[11px] text-[#9CA3AF] px-3 py-1.5 rounded-2xl rounded-tl-sm max-w-[80%]">
            Wie kann ich helfen?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-violet-500/20 text-[11px] text-white px-3 py-1.5 rounded-2xl rounded-tr-sm max-w-[80%]">
            Ich brauche ein Angebot
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-[#1E2436] text-[11px] text-[#9CA3AF] px-3 py-1.5 rounded-2xl rounded-tl-sm max-w-[80%]">
            Verstanden – Termin gebucht ✓
          </div>
        </div>
      </div>
    </div>
  );
}

function CRMListMock() {
  return (
    <div className="mt-4 rounded-lg border border-[#1E2436] overflow-hidden">
      <div className="bg-[#0C0E16]">
        {[
          { name: "Max M.", score: 91, tag: "Sales", tagClass: "bg-green-500/15 text-green-400" },
          { name: "Anna K.", score: 34, tag: "Filter", tagClass: "bg-red-500/15 text-red-400" },
          { name: "Tom B.", score: 78, tag: "Follow-up", tagClass: "bg-yellow-500/15 text-yellow-400" },
        ].map((row, i, arr) => (
          <div
            key={row.name}
            className={`flex items-center gap-3 px-3 py-2 ${i < arr.length - 1 ? "border-b border-[#1E2436]" : ""}`}
          >
            <span className="text-[11px] text-white flex-1">{row.name}</span>
            <span className="text-[10px] font-bold text-white tabular-nums w-6 text-right">{row.score}</span>
            <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${row.tagClass}`}>{row.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineMock() {
  return (
    <div className="mt-4 space-y-1.5">
      {[
        { day: "Tag 0", label: "Sofortantwort", done: true },
        { day: "Tag 2", label: "Follow-up", done: true },
        { day: "Tag 7", label: "Erinnerung", done: false },
        { day: "Tag 14", label: "Abschluss-Ping", done: false },
      ].map((item, i, arr) => (
        <div key={item.day} className="flex items-start gap-2">
          <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
            <div className={`w-2 h-2 rounded-full ${item.done ? "bg-blue-400" : "bg-[#2A2F3A]"}`} />
            {i < arr.length - 1 && <div className="w-px h-4 bg-[#1E2436]" />}
          </div>
          <div className="flex items-center justify-between flex-1 -mt-0.5">
            <span className="text-[10px] text-[#4B5563] w-10 flex-shrink-0">{item.day}</span>
            <span className={`text-[11px] flex-1 ${item.done ? "text-white" : "text-[#4B5563]"}`}>{item.label}</span>
            <span className={`text-[10px] ${item.done ? "text-green-400" : "text-[#2A2F3A]"}`}>{item.done ? "✓" : "○"}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      {[
        { label: "Anfragen", value: "127", valueClass: "text-white" },
        { label: "Ø Score", value: "82", valueClass: "text-green-400" },
        { label: "Bearbeitet", value: "98%", valueClass: "text-white" },
        { label: "Offen", value: "3", valueClass: "text-yellow-400" },
      ].map(({ label, value, valueClass }) => (
        <div key={label} className="bg-[#0C0E16] border border-[#1E2436] rounded-lg px-3 py-2">
          <div className="text-[9px] text-[#4B5563] mb-1">{label}</div>
          <div className={`text-base font-bold ${valueClass}`}>{value}</div>
        </div>
      ))}
    </div>
  );
}

const automationTiles = [
  {
    title: "AI Chatbot & Qualifizierung",
    subtitle: "Vorqualifizierung in Echtzeit",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    accentText: "text-violet-400",
    hoverBorder: "hover:border-violet-500/30",
    Visual: ChatbotMock,
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    title: "CRM & Lead-Routing",
    subtitle: "Automatisches Scoring & Weiterleitung",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",
    accentText: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/30",
    Visual: CRMListMock,
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-cyan-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Follow-up Sequenzen",
    subtitle: "Automatisierte Nachverfolgung",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    accentText: "text-blue-400",
    hoverBorder: "hover:border-blue-500/30",
    Visual: TimelineMock,
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "Reporting & Monitoring",
    subtitle: "Transparenz in Echtzeit",
    accentBg: "bg-green-500/10",
    accentBorder: "border-green-500/20",
    accentText: "text-green-400",
    hoverBorder: "hover:border-green-500/30",
    Visual: DashboardMock,
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-green-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

function AutomationOverviewSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Automationen, die echte{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
              Arbeit abnehmen
            </span>
          </h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
            Wir bauen Systeme, die repetitive Aufgaben übernehmen –
            kanalunabhängig, messbar und dauerhaft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {automationTiles.map(({ title, subtitle, accentBg, accentBorder, accentText, hoverBorder, Visual, icon }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div
                className={`h-full bg-[#161A22] border border-[#2A2F3A] rounded-xl p-6 transition-all duration-200 ${hoverBorder}`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className={`w-10 h-10 ${accentBg} border ${accentBorder} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {icon}
                  </div>
                  <div>
                    <h3 className={`text-sm font-semibold ${accentText}`}>{title}</h3>
                    <p className="text-[11px] text-[#6B7280]">{subtitle}</p>
                  </div>
                </div>
                <Visual />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Problem Section ──────────────────────────────────────────────────────────

const problems = [
  {
    Icon: IconWrench,
    bgColor: "bg-orange-500/10",
    hoverBorder: "hover:border-orange-500/30",
    title: "Chaos in Prozessen",
    description:
      "Manuelle Abläufe, doppelte Arbeit und fehlende Struktur sorgen dafür, dass dein Team Zeit mit Aufgaben verbringt, die automatisiert werden könnten.",
  },
  {
    Icon: IconClock,
    bgColor: "bg-yellow-500/10",
    hoverBorder: "hover:border-yellow-500/30",
    title: "Langsame Reaktionszeiten",
    description:
      "Prozesse bleiben liegen, weil sie manuell bearbeitet werden müssen – während Kunden und Partner schnelle Antworten erwarten.",
  },
  {
    Icon: IconStop,
    bgColor: "bg-red-500/10",
    hoverBorder: "hover:border-red-500/30",
    title: "Fehlende Priorisierung",
    description:
      "Wichtiges und Unwichtiges landet im selben Eingang. Ohne automatische Priorisierung gehen wertvolle Vorgänge im Tagesgeschäft unter.",
  },
];

function ProblemSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Stage light spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Das kostet dich{" "}
            <span className="text-[#9CA3AF]">Zeit und Umsatz</span>
          </h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
            Langsame Reaktionen, manuelle Arbeit und fehlende Priorisierung
            kosten jeden Tag Umsatz – und lassen sich systematisch lösen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map(({ Icon, bgColor, hoverBorder, title, description }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div
                className={`h-full bg-[#161A22] border border-[#2A2F3A] rounded-xl p-6 transition-colors duration-200 ${hoverBorder} problem-sticky-${i}`}
              >
                <div
                  className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center mb-5`}
                >
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─── Why Flowmetry ────────────────────────────────────────────────────────────

const whyPoints = [
  {
    title: "Keine Standardlösung",
    description:
      "Wir bauen keine SaaS-Tools. Jedes System wird auf deine Prozesse zugeschnitten und dauerhaft betrieben.",
  },
  {
    title: "Self-hosted Infrastruktur",
    description:
      "Deine Daten bleiben unter deiner Kontrolle – keine externen Abhängigkeiten, keine Black Boxes.",
  },
  {
    title: "Vollständige Transparenz",
    description:
      "Jedes Modul ist nachvollziehbar und wartbar. Du siehst jederzeit, was das System macht und warum.",
  },
  {
    title: "Messbare Ergebnisse",
    description:
      "Wir bauen auf Outcomes: weniger manuelle Arbeit, schnellere Reaktionszeiten, höhere Abschlussraten.",
  },
];

// ─── Was du bekommst ──────────────────────────────────────────────────────────

const deliverables = [
  {
    number: "01",
    title: "System-Blueprint",
    subtitle: "Prozessaufnahme & Architektur",
    description: "Wir analysieren deine Prozesse, identifizieren Automatisierungspotenziale und entwerfen die Systemarchitektur.",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    accentText: "text-blue-400",
    hoverBorder: "hover:border-blue-500/30",
    tags: ["Prozessanalyse", "Architektur", "Zeitplan"],
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Build & Rollout",
    subtitle: "Implementierung & Integrationen",
    description: "Vollständige Implementierung – nahtlos integriert in dein bestehendes Stack. Produktionsbereit in 2–4 Wochen.",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",
    accentText: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/30",
    tags: ["CRM / GHL", "Kalender", "E-Mail", "API"],
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-cyan-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Monitoring & Wartung",
    subtitle: "Uptime · Audit Log · Alerts",
    description: "Proaktives Monitoring, automatische Alerts und vollständiger Audit Log – damit das System zuverlässig läuft.",
    accentBg: "bg-green-500/10",
    accentBorder: "border-green-500/20",
    accentText: "text-green-400",
    hoverBorder: "hover:border-green-500/30",
    tags: ["Uptime 99.9%", "Alerts", "DSGVO", "Auto-Retry"],
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-green-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Optimierung",
    subtitle: "Conversion & Prozess-Verbesserungen",
    description: "Laufende Analyse und Verbesserung auf Basis echter Daten – Conversion, Reaktionszeiten, Prozessqualität.",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    accentText: "text-violet-400",
    hoverBorder: "hover:border-violet-500/30",
    tags: ["A/B Testing", "Metriken", "Reporting"],
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

function WasduBekommstSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="text-[10px] font-semibold text-[#3B82F6]/60 tracking-[0.2em] uppercase mb-4 select-none">
            Einmal erklären. Dann beweisen. Dann liefern.
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Was du{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
              bekommst
            </span>
          </h2>
          <p className="text-[#9CA3AF] max-w-lg mx-auto leading-relaxed">
            Kein Konzept, keine Folien. Konkrete Systeme, die direkt laufen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:pb-7">
          {deliverables.map(({ number, title, subtitle, description, accentBg, accentBorder, accentText, hoverBorder, tags, icon }, i) => (
            <div key={title} className={i % 2 === 1 ? "deliverable-stagger" : ""}>
              <Reveal delay={i * 80} className="h-full">
                <div className={`h-full bg-[#161A22] border border-[#2A2F3A] rounded-xl p-6 transition-colors duration-200 ${hoverBorder}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-9 h-9 ${accentBg} border ${accentBorder} rounded-lg flex items-center justify-center`}>
                      {icon}
                    </div>
                    <span className={`text-[10px] font-semibold tabular-nums ${accentText}`}>{number}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-0.5">{title}</h3>
                  <p className={`text-xs font-medium ${accentText} mb-3`}>{subtitle}</p>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">{description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span key={tag} className="text-[10px] text-[#6B7280] bg-[#0F1115] border border-[#2A2F3A] rounded px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
              Warum{" "}
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
                Flowmetry
              </span>
            </h2>
            <p className="text-[#9CA3AF] leading-relaxed mb-8 text-lg">
              Wir sind kein Tool-Anbieter und kein Consulting-Unternehmen. Wir
              bauen AI-Systeme, die dauerhaft laufen und echte Ergebnisse
              liefern.
            </p>
            <a
              href="https://links.flowmetry.ai/widget/booking/GO0EMLNeZSyGQphB9WEC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Kostenlose Systemanalyse <span>→</span>
            </a>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {whyPoints.map(({ title, description }) => (
              <div
                key={title}
                className="flex gap-4 bg-[#0F1115] border border-[#2A2F3A] rounded-xl p-5 hover:border-[#3B82F6]/30 transition-all duration-200"
              >
                <div className="w-6 h-6 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <IconCheck />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{title}</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Häufige Fragen
          </h2>
          <p className="text-[#9CA3AF]">
            Antworten auf die wichtigsten Fragen zu unserer Arbeitsweise.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group bg-[#161A22] border border-[#2A2F3A] rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-white/[0.02] transition-colors">
                <span className="font-medium pr-6">{question}</span>
                <span className="w-7 h-7 flex items-center justify-center flex-shrink-0 border border-[#2A2F3A] rounded-full text-[#9CA3AF] group-open:rotate-45 transition-transform duration-200">
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-[#9CA3AF] text-sm leading-relaxed border-t border-[#2A2F3A] pt-4">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer CTA ───────────────────────────────────────────────────────────────

function FooterCTA() {
  return (
    <section id="kontakt" className="py-28 relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Bereit, manuelle Arbeit
          <br />
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
            zu eliminieren?
          </span>
        </h2>
        <p className="text-[#9CA3AF] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Starte mit einer kostenlosen Systemanalyse. Wir schauen uns gemeinsam
          an, wo Automation in deinem Unternehmen sofort wirkt.
        </p>
        <a
          href="https://links.flowmetry.ai/widget/booking/GO0EMLNeZSyGQphB9WEC"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg"
        >
          Kostenlose Systemanalyse anfragen <span>→</span>
        </a>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-10 border-t border-[#2A2F3A]/40">
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
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-[#0F1115] text-white min-h-screen relative">
      <ScrollProgress />

      {/* Global dot grid */}
      <div
        className="fixed inset-0 opacity-[0.07] pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #3B82F6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow zone 1 – top / hero area */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Glow zone 2 – mid-page */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.05) 0%, transparent 70%)",
        }}
      />
      {/* Glow zone 3 – bottom / CTA area */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <Nav />
        <Hero />
        <Reveal><AutomationOverviewSection /></Reveal>
        <Reveal><ProblemSection /></Reveal>
        <Reveal><ImpactCalculator /></Reveal>
        <StickyScrollWorkflow />
        <Reveal><WasduBekommstSection /></Reveal>
        <Reveal><WhySection /></Reveal>
        <Reveal><FAQSection /></Reveal>
        <Reveal><FooterCTA /></Reveal>
        <Footer />
      </div>
    </div>
  );
}
