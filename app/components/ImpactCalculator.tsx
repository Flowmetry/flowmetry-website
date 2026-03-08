"use client";

import { useState } from "react";

// ─── Preset toggles ────────────────────────────────────────────────────────────

const PRESETS = [
  { label: "Konservativ", grad: 0.3 },
  { label: "Realistisch", grad: 0.6 },
  { label: "Aggressiv", grad: 0.8 },
] as const;

// ─── Formatting helpers ────────────────────────────────────────────────────────

const eur = (n: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);

const num = (n: number, decimals = 1) =>
  new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);

// ─── Input row ─────────────────────────────────────────────────────────────────

function InputRow({
  label,
  helper,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
}: {
  label: string;
  helper?: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0 pr-3">
          <label className="text-[13px] text-[#9CA3AF]">{label}</label>
          {helper && (
            <p className="text-[11px] text-[#4B5563] mt-0.5">{helper}</p>
          )}
        </div>
        <span className="text-[13px] font-semibold text-white tabular-nums shrink-0">
          {value.toLocaleString("de-DE")}
          {suffix && <span className="text-[#9CA3AF] font-normal ml-1">{suffix}</span>}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 appearance-none rounded-full bg-[#1E2436] accent-[#3B82F6] cursor-pointer"
      />
      <div className="flex justify-between text-[11px] text-[#374151]">
        <span>{min.toLocaleString("de-DE")}</span>
        <span>{max.toLocaleString("de-DE")}</span>
      </div>
    </div>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────────

export function ImpactCalculator() {
  const [tasks, setTasks] = useState(120);
  const [minutes, setMinutes] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [rework, setRework] = useState(8);
  const [presetIdx, setPresetIdx] = useState(1); // default: Realistisch

  const automationRate = PRESETS[presetIdx].grad;
  const automationPct = Math.round(automationRate * 100);

  // ─── Calculations ────────────────────────────────────────────────────────────
  const manualHoursPerMonth = (tasks * minutes) / 60 * (1 + rework / 100);
  const manualCostPerMonth = manualHoursPerMonth * hourlyRate;
  const recoveredHoursPerMonth = manualHoursPerMonth * automationRate;
  const potentialSavingsPerMonth = manualCostPerMonth * automationRate;
  const perWeekRecovered = recoveredHoursPerMonth / 4.33;

  // Equivalent 2h focus blocks
  const equivalentBlocks = Math.round(recoveredHoursPerMonth / 2 * 10) / 10;

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3B82F6]/10 border border-[#3B82F6]/25 text-[#3B82F6] text-[12px] font-medium tracking-widest uppercase mb-4">
            ROI-Rechner
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Was kostet dich manuelle Arbeit?
          </h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto text-[15px]">
            Schätze deine manuellen Stunden – das Ergebnis rechnet live.
          </p>
        </div>

        {/* Card */}
        <div className="roi-calculator-card border border-[#2A2F3A]/60 rounded-2xl bg-[#0A0C12] overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#2A2F3A]/60">

            {/* ── Left: Inputs ───────────────────────────────────────────────── */}
            <div className="p-6 md:p-8 flex flex-col gap-6">
              <h3 className="text-[13px] font-semibold text-[#9CA3AF] uppercase tracking-widest">
                Deine Situation
              </h3>

              <InputRow
                label="Manuelle Vorgänge pro Monat"
                value={tasks}
                onChange={setTasks}
                min={0}
                max={500}
                step={5}
                suffix="Vorgänge"
              />
              <InputRow
                label="Zeit pro Vorgang"
                value={minutes}
                onChange={setMinutes}
                min={0}
                max={60}
                suffix="min"
              />
              <InputRow
                label="Stundensatz (intern oder extern)"
                value={hourlyRate}
                onChange={setHourlyRate}
                min={0}
                max={200}
                step={5}
                suffix="€/h"
              />
              <InputRow
                label="Fehler-/Nacharbeit (optional)"
                helper="Zeit durch Rückfragen, Übertragungsfehler oder manuelle Nacharbeit."
                value={rework}
                onChange={setRework}
                min={0}
                max={30}
                suffix="%"
              />

              {/* Automatisierungsgrad preset toggle */}
              <div className="flex flex-col gap-2">
                <span className="text-[13px] text-[#9CA3AF]">Automatisierungsgrad</span>
                <div className="flex rounded-lg overflow-hidden border border-[#2A2F3A]">
                  {PRESETS.map((p, i) => (
                    <button
                      key={p.label}
                      onClick={() => setPresetIdx(i)}
                      className={`flex-1 py-2 text-[13px] font-medium transition-colors duration-200 ${
                        presetIdx === i
                          ? "bg-[#3B82F6] text-white"
                          : "bg-[#161A22] text-[#6B7280] hover:text-[#9CA3AF]"
                      }`}
                    >
                      {p.label}
                      <span className="block text-[11px] opacity-75">{Math.round(p.grad * 100)} %</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Results ─────────────────────────────────────────────── */}
            <div className="p-6 md:p-8 flex flex-col gap-6">
              <h3 className="text-[13px] font-semibold text-[#9CA3AF] uppercase tracking-widest">
                Dein Potenzial
              </h3>

              {/* Hero number */}
              <div>
                <p className="text-[12px] text-[#6B7280] mb-0.5">
                  Potenzial (bei {automationPct} % Automation)
                </p>
                <p
                  className="text-5xl font-bold text-white tabular-nums"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {eur(potentialSavingsPerMonth)}
                  <span className="text-[#9CA3AF] text-xl font-normal ml-2">/ Monat</span>
                </p>
                <p className="text-[11px] text-[#4B5563] mt-1">
                  Geschätzter Wert der automatisierbaren Zeit.
                </p>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#161A22] rounded-xl p-4 border border-[#2A2F3A]/50">
                  <p className="text-[11px] text-[#6B7280] mb-1">Zurückgewonnene Zeit</p>
                  <p className="text-xl font-bold text-white tabular-nums">
                    {num(recoveredHoursPerMonth)} h
                  </p>
                  <p className="text-[11px] text-[#9CA3AF]">pro Monat</p>
                </div>
                <div className="bg-[#161A22] rounded-xl p-4 border border-[#2A2F3A]/50">
                  <p className="text-[11px] text-[#6B7280] mb-1">Im Alltag</p>
                  <p className="text-xl font-bold text-white tabular-nums">
                    {num(perWeekRecovered)} h
                  </p>
                  <p className="text-[11px] text-[#9CA3AF]">pro Woche</p>
                </div>
                <div className="bg-[#161A22] rounded-xl p-4 border border-[#2A2F3A]/50">
                  <p className="text-[11px] text-[#6B7280] mb-1">Gebundene Zeit</p>
                  <p className="text-xl font-bold text-[#F87171] tabular-nums">
                    {num(manualHoursPerMonth)} h
                  </p>
                  <p className="text-[11px] text-[#9CA3AF]">pro Monat</p>
                </div>
                <div className="bg-[#161A22] rounded-xl p-4 border border-[#2A2F3A]/50">
                  <p className="text-[11px] text-[#6B7280] mb-1">Pro Monat entspricht das</p>
                  {recoveredHoursPerMonth >= 2 ? (
                    <>
                      <p className="text-xl font-bold text-white tabular-nums">
                        {num(equivalentBlocks)} Blöcken
                      </p>
                      <p className="text-[11px] text-[#9CA3AF]">à 2 Stunden Fokuszeit</p>
                    </>
                  ) : (
                    <>
                      <p className="text-xl font-bold text-white tabular-nums">
                        {num(recoveredHoursPerMonth)} h
                      </p>
                      <p className="text-[11px] text-[#9CA3AF]">zusätzliche Fokuszeit</p>
                    </>
                  )}
                </div>
              </div>

              {/* Callout */}
              <div className="rounded-xl bg-red-500/5 border border-red-500/20 px-4 py-3 text-[13px] text-[#F87171]">
                Aktueller Aufwand (100 % manuell): ca.{" "}
                <span className="font-semibold">{eur(manualCostPerMonth)}/Monat</span> —{" "}
                <span className="font-semibold">{eur(manualCostPerMonth * 12)}/Jahr</span>.
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}
