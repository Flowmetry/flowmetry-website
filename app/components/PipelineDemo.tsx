"use client";

import { useEffect, useState } from "react";

// ─── Step definitions ──────────────────────────────────────────────────────────

const STEPS = [
  {
    label: "Neue Anfrage",
    activeClass: "bg-blue-500/15 border-blue-500/50",
    shadow: "0 0 18px rgba(59,130,246,0.45)",
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.7)",
    icon: (on: boolean) => (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className={`transition-colors duration-500 ${on ? "text-blue-400" : "text-[#374151]"}`}
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
    label: "AI Analyse",
    activeClass: "bg-cyan-500/15 border-cyan-500/50",
    shadow: "0 0 18px rgba(34,211,238,0.45)",
    color: "#22D3EE",
    glow: "rgba(34,211,238,0.7)",
    icon: (on: boolean) => (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className={`transition-colors duration-500 ${on ? "text-cyan-400" : "text-[#374151]"}`}
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
    label: "Priorisierung",
    activeClass: "bg-violet-500/15 border-violet-500/50",
    shadow: "0 0 18px rgba(139,92,246,0.45)",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.7)",
    icon: (on: boolean) => (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className={`transition-colors duration-500 ${on ? "text-violet-400" : "text-[#374151]"}`}
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
    label: "Termin",
    activeClass: "bg-green-500/15 border-green-500/50",
    shadow: "0 0 18px rgba(34,197,94,0.45)",
    color: "#22C55E",
    glow: "rgba(34,197,94,0.7)",
    icon: (on: boolean) => (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className={`transition-colors duration-500 ${on ? "text-green-400" : "text-[#374151]"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12V12zm0 3h.008v.008H12v-.008zm0 3h.008v.008H12v-.008zm3-6h.008v.008H15V12zm0 3h.008v.008H15v-.008zm0 3h.008v.008H15v-.008zm-6 0h.008v.008H9v-.008zm0-3h.008v.008H9V15z"
        />
      </svg>
    ),
  },
];

// Icon centers with justify-around and 4 equal items:
// 12.5%, 37.5%, 62.5%, 87.5% — mathematically guaranteed regardless of container/item size.
const DOT_LEFT = [12.5, 37.5, 62.5, 87.5]; // desktop (%)

// Mobile: each step row is ~56px tall, connector is ~36px → total per segment ~92px
// Dot vertical center per step (in px from top of mobile container)
// Step 0 center: 28px, Step 1: 120px, Step 2: 212px, Step 3: 304px
const DOT_TOP = [28, 120, 212, 304]; // mobile (px)

// ─── Component ────────────────────────────────────────────────────────────────

export function PipelineDemo() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion: keep step 0 highlighted, no loop
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const t = setInterval(
      () => setActiveStep((p) => (p + 1) % STEPS.length),
      1200
    );
    return () => clearInterval(t);
  }, []);

  const cur = STEPS[activeStep];

  return (
    <div className="border border-[#2A2F3A]/50 rounded-2xl bg-[#0A0C12] px-6 py-8 mb-14">

      {/* ═══ Desktop layout ═══════════════════════════════════════════════════ */}
      <div className="hidden md:block relative">

        {/* Connecting line */}
        <div
          className="absolute left-[12.5%] right-[12.5%] h-px bg-[#1E2436] pointer-events-none"
          style={{ top: "24px" }}
        />

        {/* Glowing dot — transitions between icon centers */}
        <div
          className="absolute w-3 h-3 rounded-full pointer-events-none z-10"
          style={{
            left: `${DOT_LEFT[activeStep]}%`,
            top: "18px",
            transform: "translateX(-50%)",
            background: cur.color,
            boxShadow: `0 0 10px 4px ${cur.glow}`,
            transition: [
              "left 700ms ease-out",
              "background 350ms ease",
              "box-shadow 350ms ease",
            ].join(", "),
          }}
        />

        {/* Step cards */}
        <div className="flex justify-around items-start">
          {STEPS.map((step, i) => {
            const on = activeStep === i;
            return (
              <div
                key={step.label}
                className="flex flex-col items-center gap-2"
                style={{ width: "80px" }}
              >
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-500 ${
                    on ? step.activeClass : "bg-[#161A22] border-[#2A2F3A]"
                  }`}
                  style={on ? { boxShadow: step.shadow } : undefined}
                >
                  {step.icon(on)}
                </div>
                <span
                  className={`text-[11px] font-medium text-center leading-tight transition-colors duration-500 ${
                    on ? "text-white" : "text-[#4B5563]"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ Mobile layout ════════════════════════════════════════════════════ */}
      <div className="md:hidden relative flex flex-col" style={{ minHeight: `${DOT_TOP[3] + 28}px` }}>

        {/* Vertical connecting line */}
        <div
          className="absolute left-[25px] bg-[#1E2436] pointer-events-none"
          style={{ width: "1px", top: "28px", bottom: "28px" }}
        />

        {/* Glowing dot — moves down with translateY */}
        <div
          className="absolute w-3 h-3 rounded-full pointer-events-none z-10"
          style={{
            left: "19px",
            top: `${DOT_TOP[activeStep]}px`,
            transform: "translateY(-50%)",
            background: cur.color,
            boxShadow: `0 0 10px 4px ${cur.glow}`,
            transition: [
              "top 700ms ease-out",
              "background 350ms ease",
              "box-shadow 350ms ease",
            ].join(", "),
          }}
        />

        {/* Step rows — absolutely positioned for consistent spacing */}
        {STEPS.map((step, i) => {
          const on = activeStep === i;
          return (
            <div
              key={step.label}
              className="absolute left-0 right-0"
              style={{ top: `${DOT_TOP[i] - 28}px` }}
            >
              <div
                className={`flex items-center gap-4 px-3 py-3 rounded-xl border transition-all duration-500 ${
                  on ? step.activeClass : "border-transparent"
                }`}
                style={on ? { boxShadow: step.shadow } : undefined}
              >
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
                  {step.icon(on)}
                </div>
                <span
                  className={`text-sm font-medium transition-colors duration-500 ${
                    on ? "text-white" : "text-[#4B5563]"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
