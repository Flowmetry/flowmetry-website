"use client";

import { useState } from "react";

// ─── Preset toggles ────────────────────────────────────────────────────────────

const PRESETS = [
  { label: "Konservativ", grad: 0.3 },
  { label: "Realistisch", grad: 0.6 },
  { label: "Aggressiv",   grad: 0.8 },
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
        className="ic-slider w-full h-1.5 appearance-none rounded-full cursor-pointer"
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
  const [tasks,      setTasks]      = useState(120);
  const [minutes,    setMinutes]    = useState(10);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [rework,     setRework]     = useState(8);
  const [presetIdx,  setPresetIdx]  = useState(1);

  const automationRate = PRESETS[presetIdx].grad;
  const automationPct  = Math.round(automationRate * 100);

  const manualHoursPerMonth      = (tasks * minutes) / 60 * (1 + rework / 100);
  const manualCostPerMonth       = manualHoursPerMonth * hourlyRate;
  const recoveredHoursPerMonth   = manualHoursPerMonth * automationRate;
  const potentialSavingsPerMonth = manualCostPerMonth  * automationRate;
  const perWeekRecovered         = recoveredHoursPerMonth / 4.33;
  const equivalentBlocks         = Math.round(recoveredHoursPerMonth / 2 * 10) / 10;

  return (
    <section
      id="roi"
      className="py-20 px-4 max-w-6xl mx-auto"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
      }}
    >

      {/* Slider glow CSS */}
      <style>{`
        .ic-slider {
          background: rgba(255,255,255,0.08);
        }
        .ic-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #3B82F6;
          box-shadow: 0 0 10px rgba(59,130,246,0.75), 0 0 20px rgba(59,130,246,0.3);
          cursor: pointer;
          transition: box-shadow 150ms ease;
        }
        .ic-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 14px rgba(59,130,246,0.9), 0 0 28px rgba(59,130,246,0.45);
        }
        .ic-slider::-moz-range-thumb {
          width: 16px; height: 16px;
          border-radius: 50%; border: none;
          background: #3B82F6;
          box-shadow: 0 0 10px rgba(59,130,246,0.75);
          cursor: pointer;
        }
        .ic-slider::-webkit-slider-runnable-track {
          background: rgba(255,255,255,0.08);
          height: 6px; border-radius: 3px;
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-12">
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-[11px] font-semibold tracking-[0.18em] uppercase mb-4"
          style={{
            background: 'rgba(10,13,20,0.72)',
            border: '1.5px solid rgba(59,130,246,0.45)',
            boxShadow: '0 0 18px rgba(59,130,246,0.12), inset 0 0 10px rgba(59,130,246,0.04)',
            color: '#8BAED4',
          }}
        >
          ROI-Rechner
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Was kostet dich manuelle Arbeit?
        </h2>
        <p className="text-[#9CA3AF] max-w-xl mx-auto text-[15px]">
          Schätze deine manuellen Stunden – das Ergebnis rechnet live.
        </p>
      </div>

      {/* Glass card */}
      <div
        className="roi-calculator-card rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '0.5px solid rgba(255,255,255,0.09)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.03), 0 0 60px rgba(59,130,246,0.10), 0 0 120px rgba(59,130,246,0.05)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
        }}
      >
        <div
          className="grid md:grid-cols-2"
        >

          {/* ── Left: Inputs ── */}
          <div
            className="p-6 md:p-8 flex flex-col gap-6"
            style={{
              borderRight: '0.5px solid rgba(255,255,255,0.06)',
              borderBottom: '0.5px solid rgba(255,255,255,0.06)',
            }}
          >
            <h3 className="text-[13px] font-semibold text-[#9CA3AF] uppercase tracking-widest">
              Deine Situation
            </h3>

            <InputRow label="Manuelle Vorgänge pro Monat" value={tasks}      onChange={setTasks}      min={0} max={500} step={5}  suffix="Vorgänge" />
            <InputRow label="Zeit pro Vorgang"             value={minutes}    onChange={setMinutes}    min={0} max={60}            suffix="min"      />
            <InputRow label="Stundensatz"                  value={hourlyRate} onChange={setHourlyRate} min={0} max={200} step={5}  suffix="€/h"      />
            <InputRow
              label="Fehler-/Nacharbeit (optional)"
              helper="Zeit durch Rückfragen, Übertragungsfehler oder manuelle Nacharbeit."
              value={rework}
              onChange={setRework}
              min={0} max={30}
              suffix="%"
            />

            {/* Automatisierungsgrad preset toggle */}
            <div className="flex flex-col gap-2">
              <span className="text-[13px] text-[#9CA3AF]">Automatisierungsgrad</span>
              <div
                className="flex rounded-lg overflow-hidden"
                style={{ border: '0.5px solid rgba(255,255,255,0.1)' }}
              >
                {PRESETS.map((p, i) => (
                  <button
                    key={p.label}
                    onClick={() => setPresetIdx(i)}
                    className="flex-1 py-2 text-[13px] font-medium transition-colors duration-200"
                    style={
                      presetIdx === i
                        ? { background: '#3B82F6', color: '#fff' }
                        : { background: 'rgba(255,255,255,0.03)', color: '#6B7280' }
                    }
                  >
                    {p.label}
                    <span className="block text-[11px] opacity-75">{Math.round(p.grad * 100)} %</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Results ── */}
          <div className="p-6 md:p-8 flex flex-col gap-6">
            <h3 className="text-[13px] font-semibold text-[#9CA3AF] uppercase tracking-widest">
              Dein Potenzial
            </h3>

            {/* Hero number */}
            <div>
              <p className="text-[12px] text-[#6B7280] mb-0.5">
                Potenzial (bei {automationPct} % Automation)
              </p>
              <p className="text-5xl font-bold text-white tabular-nums" style={{ letterSpacing: '-0.02em' }}>
                {eur(potentialSavingsPerMonth)}
                <span className="text-[#9CA3AF] text-xl font-normal ml-2">/ Monat</span>
              </p>
              <p className="text-[11px] text-[#4B5563] mt-1">
                Geschätzter Wert der automatisierbaren Zeit.
              </p>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Zurückgewonnene Zeit', value: `${num(recoveredHoursPerMonth)} h`, sub: 'pro Monat',  color: 'white'    },
                { label: 'Im Alltag',            value: `${num(perWeekRecovered)} h`,        sub: 'pro Woche',  color: 'white'    },
                { label: 'Gebundene Zeit',        value: `${num(manualHoursPerMonth)} h`,     sub: 'pro Monat',  color: '#F87171'  },
                {
                  label: 'Pro Monat entspricht das',
                  value: recoveredHoursPerMonth >= 2
                    ? `${num(equivalentBlocks)} Blöcken`
                    : `${num(recoveredHoursPerMonth)} h`,
                  sub: recoveredHoursPerMonth >= 2 ? 'à 2h Fokuszeit' : 'zusätzliche Fokuszeit',
                  color: 'white',
                },
              ].map(({ label, value, sub, color }) => (
                <div key={label} className="rounded-xl p-4">
                  <p className="text-[11px] text-[#6B7280] mb-1">{label}</p>
                  <p className="text-xl font-bold tabular-nums" style={{ color }}>{value}</p>
                  <p className="text-[11px] text-[#9CA3AF]">{sub}</p>
                </div>
              ))}
            </div>

            {/* Callout */}
            <div
              className="rounded-xl px-4 py-3 text-[13px] text-[#F87171]"
              style={{ background: 'rgba(239,68,68,0.06)', border: '0.5px solid rgba(239,68,68,0.2)' }}
            >
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
