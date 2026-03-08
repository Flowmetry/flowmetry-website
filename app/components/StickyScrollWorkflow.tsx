"use client";

import { useEffect, useRef, useState } from "react";

// ─── Step definitions ──────────────────────────────────────────────────────────

const STEPS = [
  {
    number: "01",
    title: "Eingang",
    subtitle: "Website · Portal · E-Mail",
    description:
      "Anfragen kommen automatisch rein – per Formular, E-Mail, API oder Portal. Kanalunabhängig und ohne manuellen Eingang.",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    accentText: "text-blue-400",
    activeBorder: "border-blue-500/40",
    activeShadow: "0 0 0 1px rgba(59,130,246,0.25), 0 0 32px rgba(59,130,246,0.1)",
    dotColor: "bg-blue-500",
    icon: (on: boolean) => (
      <svg
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className={`transition-colors duration-300 ${on ? "text-blue-400" : "text-[#4B5563]"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI Analyse",
    subtitle: "Extraktion · Klassifizierung",
    description:
      "Die AI liest, versteht und extrahiert alle relevanten Informationen – vollautomatisch in Echtzeit.",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",
    accentText: "text-cyan-400",
    activeBorder: "border-cyan-500/40",
    activeShadow: "0 0 0 1px rgba(34,211,238,0.25), 0 0 32px rgba(34,211,238,0.1)",
    dotColor: "bg-cyan-500",
    icon: (on: boolean) => (
      <svg
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className={`transition-colors duration-300 ${on ? "text-cyan-400" : "text-[#4B5563]"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Priorisierung",
    subtitle: "Score · Kategorie · Routing",
    description:
      "Jede Anfrage erhält einen Score und wird automatisch kategorisiert – nach deinen definierten Kriterien.",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    accentText: "text-violet-400",
    activeBorder: "border-violet-500/40",
    activeShadow: "0 0 0 1px rgba(139,92,246,0.25), 0 0 32px rgba(139,92,246,0.1)",
    dotColor: "bg-violet-500",
    icon: (on: boolean) => (
      <svg
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className={`transition-colors duration-300 ${on ? "text-violet-400" : "text-[#4B5563]"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Aktion",
    subtitle: "Termin · Sofortantwort · CRM",
    description:
      "Das System reagiert sofort: bucht einen Termin, sendet eine personalisierte Antwort oder leitet die Anfrage weiter.",
    accentBg: "bg-green-500/10",
    accentBorder: "border-green-500/20",
    accentText: "text-green-400",
    activeBorder: "border-green-500/40",
    activeShadow: "0 0 0 1px rgba(34,197,94,0.25), 0 0 32px rgba(34,197,94,0.1)",
    dotColor: "bg-green-500",
    icon: (on: boolean) => (
      <svg
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className={`transition-colors duration-300 ${on ? "text-green-400" : "text-[#4B5563]"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
];

// ─── Visual panels (browser-chrome style) ─────────────────────────────────────

function BrowserChrome({ title, statusText, statusColor }: { title: string; statusText: string; statusColor: string }) {
  return (
    <div className="bg-[#161B27] border-b border-[#1E2436] px-4 h-9 flex items-center gap-3 flex-shrink-0">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 text-center">
        <span className="text-[11px] text-[#4B5563] font-medium">{title}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${statusColor} animate-pulse`} />
        <span className={`text-[10px] font-medium`} style={{ color: "inherit" }}>
          {statusText}
        </span>
      </div>
    </div>
  );
}

function Visual0() {
  return (
    <div className="rounded-xl border border-[#252D42] bg-[#0A0C14] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      <div className="bg-[#161B27] border-b border-[#1E2436] px-4 h-9 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] text-[#4B5563] font-medium">Neue Anfrage</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[10px] text-blue-400 font-medium">Eingang</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 rounded-full bg-blue-500/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0 text-sm font-bold text-blue-400">
            M
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-sm font-semibold text-white">Max Mustermann</span>
              <span className="text-[10px] text-[#4B5563]">gerade eben</span>
            </div>
            <div className="text-[11px] text-[#6B7280]">max@beispiel.de · Website-Formular</div>
          </div>
        </div>
        <div className="bg-[#161A22] border border-[#1E2436] rounded-lg p-3 mb-4 text-[12px] text-[#9CA3AF] leading-relaxed italic">
          "Ich interessiere mich für eine ERP-Lösung für unser Unternehmen mit ca. 50 Mitarbeitern."
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Quelle", value: "Website-Formular" },
            { label: "Kanal", value: "Web" },
            { label: "Status", value: "Empfangen ✓", valueClass: "text-green-400" },
            { label: "Reaktionszeit", value: "< 1s" },
          ].map(({ label, value, valueClass }) => (
            <div key={label} className="bg-[#0C0E16] border border-[#1E2436] rounded-lg px-2.5 py-2">
              <div className="text-[9px] text-[#374151] mb-0.5">{label}</div>
              <div className={`text-[11px] font-medium ${valueClass ?? "text-white"}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Visual1() {
  const fields = [
    { key: "Name", value: "Max Mustermann" },
    { key: "Interesse", value: "ERP-Lösung" },
    { key: "Unternehmen", value: "50 Mitarbeiter GmbH" },
    { key: "Budget", value: "20–50k €" },
    { key: "Dringlichkeit", value: "Hoch" },
  ];
  return (
    <div className="rounded-xl border border-[#252D42] bg-[#0A0C14] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      <div className="bg-[#161B27] border-b border-[#1E2436] px-4 h-9 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] text-[#4B5563] font-medium">AI Extraktion</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] text-cyan-400 font-medium">Analysiert</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4 bg-[#0C1018] border border-cyan-500/15 rounded-lg p-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-cyan-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-white">Extraktion abgeschlossen</div>
            <div className="text-[10px] text-[#6B7280]">5 Felder erkannt · 100%</div>
          </div>
          <div className="text-xs font-bold text-cyan-400">✓</div>
        </div>
        <div className="space-y-2">
          {fields.map(({ key, value }) => (
            <div key={key} className="flex items-center gap-3 bg-[#0C0E16] border border-[#1E2436] rounded-lg px-3 py-2">
              <span className="text-[10px] text-green-400 flex-shrink-0">✓</span>
              <span className="text-[10px] text-[#6B7280] w-24 flex-shrink-0">{key}</span>
              <span className="text-[11px] text-white font-medium truncate">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Visual2() {
  return (
    <div className="rounded-xl border border-[#252D42] bg-[#0A0C14] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      <div className="bg-[#161B27] border-b border-[#1E2436] px-4 h-9 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] text-[#4B5563] font-medium">Lead Score</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <span className="text-[10px] text-violet-400 font-medium">Priorisiert</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-[10px] text-[#6B7280] mb-1">Lead Score</div>
            <div className="text-4xl font-bold text-white tabular-nums">
              91<span className="text-lg text-[#4B5563] font-normal">/100</span>
            </div>
          </div>
          <div className="w-16 h-16 rounded-full border-[3px] border-green-500/40 bg-green-500/5 flex items-center justify-center">
            <span className="text-green-400 text-lg font-bold">A+</span>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex items-center justify-between text-[10px] text-[#6B7280] mb-1.5">
            <span>Score</span>
            <span>91%</span>
          </div>
          <div className="h-2 bg-[#1E2436] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
              style={{ width: "91%" }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Kategorie", value: "Hot Lead", valueClass: "text-green-400" },
            { label: "Priorität", value: "Hoch", valueClass: "text-green-400" },
            { label: "Route", value: "Sales Team", valueClass: "text-white" },
            { label: "Reaktion", value: "Sofort", valueClass: "text-yellow-400" },
          ].map(({ label, value, valueClass }) => (
            <div key={label} className="bg-[#0C0E16] border border-[#1E2436] rounded-lg px-2.5 py-2">
              <div className="text-[9px] text-[#374151] mb-0.5">{label}</div>
              <div className={`text-[11px] font-semibold ${valueClass}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Visual3() {
  return (
    <div className="rounded-xl border border-[#252D42] bg-[#0A0C14] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      <div className="bg-[#161B27] border-b border-[#1E2436] px-4 h-9 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] text-[#4B5563] font-medium">Termin & Aktion</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-[10px] text-green-400 font-medium">Abgeschlossen</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-xl flex-shrink-0">
            ✓
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Termin automatisch gebucht</div>
            <div className="text-[11px] text-[#6B7280]">Keine manuelle Arbeit erforderlich</div>
          </div>
        </div>
        <div className="bg-[#0C1018] border border-green-500/15 rounded-lg p-3 mb-4">
          <div className="text-[10px] text-[#4B5563] font-semibold uppercase tracking-wide mb-2.5">
            Termindetails
          </div>
          {[
            { label: "Kontakt", value: "Max Mustermann" },
            { label: "Datum", value: "Fr, 07.03.2026" },
            { label: "Uhrzeit", value: "14:00 Uhr" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-3 mb-1.5 last:mb-0">
              <span className="text-[10px] text-[#4B5563] w-14 flex-shrink-0">{label}</span>
              <span className="text-[11px] text-white font-medium">{value}</span>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {[
            "E-Mail-Bestätigung gesendet",
            "CRM-Eintrag aktualisiert",
            "Kalender-Einladung versendet",
          ].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-[10px] text-green-400 flex-shrink-0">✓</span>
              <span className="text-[11px] text-[#9CA3AF]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const VISUALS = [Visual0, Visual1, Visual2, Visual3];

// ─── Component ────────────────────────────────────────────────────────────────

export function StickyScrollWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileStepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    // Desktop: observe left-column step containers
    const desktopObs: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveStep(i); },
        { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
      );
      obs.observe(el);
      desktopObs.push(obs);
    });

    // Mobile: observe mobile step wrappers, open the one in view
    const mobileObs: IntersectionObserver[] = [];
    mobileStepRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setMobileOpen(i); },
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      mobileObs.push(obs);
    });

    return () => {
      desktopObs.forEach((o) => o.disconnect());
      mobileObs.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <section id="wie-es-funktioniert" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#161A22] border border-[#2A2F3A] rounded-md px-3 py-1 text-[12px] text-[#3B82F6] font-medium tracking-widest uppercase mb-5">
            Beispiel: Automatisiertes Anfragensystem
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Wie das System arbeitet{" "}
            <span className="text-[#9CA3AF]">(in 30 Sekunden)</span>
          </h2>
          <p className="text-[#9CA3AF] max-w-lg mx-auto leading-relaxed">
            Vier Schritte. Vollständig automatisiert. Keine manuelle Arbeit.
          </p>
        </div>

        {/* ── Desktop: sticky scroll ─────────────────────────────────────────── */}
        <div className="hidden md:grid grid-cols-[1fr_420px] gap-16 items-start">
          {/* Left: step cards */}
          <div>
            {STEPS.map((step, i) => {
              const on = activeStep === i;
              return (
                <div
                  key={step.title}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className="min-h-[60vh] flex items-center py-6"
                >
                  <div
                    className={`w-full bg-[#161A22] border rounded-xl p-7 transition-all duration-500 ${
                      on ? step.activeBorder : "border-[#2A2F3A]"
                    }`}
                    style={on ? { boxShadow: step.activeShadow } : undefined}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className={`w-12 h-12 ${step.accentBg} border ${step.accentBorder} rounded-xl flex items-center justify-center transition-all duration-500`}
                      >
                        {step.icon(on)}
                      </div>
                      <span
                        className={`text-xs font-semibold tabular-nums transition-colors duration-300 ${
                          on ? step.accentText : "text-[#4B5563]"
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-semibold mb-1 transition-colors duration-300 ${
                        on ? "text-white" : "text-[#6B7280]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm font-medium ${step.accentText} mb-3 transition-opacity duration-300 ${
                        on ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      {step.subtitle}
                    </p>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        on ? "text-[#9CA3AF]" : "text-[#4B5563]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: sticky visual panel */}
          <div className="sticky top-[100px]">
            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-4">
              {STEPS.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Schritt ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeStep === i
                      ? `w-6 ${step.dotColor}`
                      : "w-1.5 bg-[#2A2F3A] hover:bg-[#3A3F4A]"
                  }`}
                />
              ))}
              <span className="ml-auto text-[10px] text-[#4B5563] tabular-nums">
                {activeStep + 1} / {STEPS.length}
              </span>
            </div>

            {/* Visual panel — all 4 layered, opacity-transitioned */}
            <div className="relative" style={{ minHeight: "440px" }}>
              {VISUALS.map((V, i) => (
                <div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    opacity: activeStep === i ? 1 : 0,
                    transform: activeStep === i ? "translateY(0px)" : "translateY(6px)",
                    transition: "opacity 400ms ease, transform 400ms ease",
                    pointerEvents: activeStep === i ? "auto" : "none",
                  }}
                >
                  <V />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile: accordion (auto-opens on scroll via IntersectionObserver) ── */}
        <div className="md:hidden space-y-3">
          {STEPS.map((step, i) => {
            const isOpen = mobileOpen === i;
            const panelId = `step-panel-${i}`;
            const V = VISUALS[i];
            return (
              <div
                key={step.title}
                ref={(el) => { mobileStepRefs.current[i] = el; }}
                className="rounded-xl overflow-hidden"
              >
                {/* Step header — always visible, clickable */}
                <button
                  onClick={() => setMobileOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={`w-full text-left bg-[#161A22] border rounded-xl px-5 py-4 transition-all duration-300 ${
                    isOpen ? step.activeBorder : "border-[#2A2F3A]"
                  }`}
                  style={isOpen ? { boxShadow: step.activeShadow } : undefined}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${step.accentBg} border ${step.accentBorder} rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300`}
                    >
                      {step.icon(isOpen)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-[10px] font-semibold ${step.accentText}`}>
                          {step.number}
                        </span>
                        <h3
                          className={`text-sm font-semibold transition-colors duration-300 ${
                            isOpen ? "text-white" : "text-[#9CA3AF]"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className={`text-xs ${step.accentText} opacity-70`}>{step.subtitle}</p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={`text-[#4B5563] flex-shrink-0 ${
                        reducedMotion ? "" : "transition-transform duration-300"
                      } ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>

                {/* Expandable panel */}
                <div
                  id={panelId}
                  role="region"
                  className="overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "700px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    transition: reducedMotion
                      ? "none"
                      : "max-height 400ms ease, opacity 300ms ease",
                  }}
                >
                  <div className="pt-3 pb-1">
                    <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4 px-1">
                      {step.description}
                    </p>
                    <V />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
