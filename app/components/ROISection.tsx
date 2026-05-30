'use client';

import { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export function ROISection() {
  const [employees, setEmployees] = useState(3);
  const [hours, setHours] = useState(5);
  const [wage, setWage] = useState(25);

  const yearlyLoss = Math.round(employees * hours * wage * 44);
  const monthlyLoss = Math.round(yearlyLoss / 12);

  const fmt = (n: number) =>
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <section id="roi" className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-[#1C1614] mb-3">
            Was kostet dich{' '}
            <span className="text-red-500">manuelle Arbeit</span>?
          </h2>
          <p className="text-[#1C1614]/55 text-sm">
            Rechne dir aus, wie viel Kapital aktuell in ineffizienten Prozessen verbrennt.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-5 rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.7)', border: '0.5px solid rgba(28,22,20,0.1)', backdropFilter: 'blur(12px)' }}
        >
          {/* Left: Sliders */}
          <div className="col-span-3 p-8 md:p-12 flex flex-col justify-center gap-10">

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-[#1C1614]/55">Betroffene Mitarbeiter</label>
                <span className="text-lg font-semibold text-[#1C1614] tabular-nums">{employees}</span>
              </div>
              <input
                type="range" min="1" max="30" value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-1 rounded-lg appearance-none cursor-pointer"
                style={{ background: 'rgba(28,22,20,0.12)', accentColor: '#cd9b7b' }}
              />
              <div className="flex justify-between text-[10px] text-[#1C1614]/35 mt-3 font-medium">
                <span>1</span><span>30</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-[#1C1614]/55">Manuelle Stunden / Woche (pro Person)</label>
                <span className="text-lg font-semibold text-[#1C1614] tabular-nums">{hours}h</span>
              </div>
              <input
                type="range" min="1" max="20" value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-1 rounded-lg appearance-none cursor-pointer"
                style={{ background: 'rgba(28,22,20,0.12)', accentColor: '#cd9b7b' }}
              />
              <div className="flex justify-between text-[10px] text-[#1C1614]/35 mt-3 font-medium">
                <span>1h</span><span>20h</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-[#1C1614]/55">Durchschnittlicher Stundenlohn</label>
                <span className="text-lg font-semibold text-[#1C1614] tabular-nums">{wage} €</span>
              </div>
              <input
                type="range" min="15" max="100" step="5" value={wage}
                onChange={(e) => setWage(Number(e.target.value))}
                className="w-full h-1 rounded-lg appearance-none cursor-pointer"
                style={{ background: 'rgba(28,22,20,0.12)', accentColor: '#cd9b7b' }}
              />
              <div className="flex justify-between text-[10px] text-[#1C1614]/35 mt-3 font-medium">
                <span>15 €</span><span>100 €</span>
              </div>
            </div>

          </div>

          {/* Right: Result */}
          <div
            className="col-span-2 p-8 md:p-12 flex flex-col justify-center items-center text-center"
            style={{ background: 'rgba(205,155,123,0.06)', borderLeft: '0.5px solid rgba(205,155,123,0.15)' }}
          >
            <Calculator className="w-8 h-8 mb-6" style={{ color: 'rgba(205,155,123,0.5)' }} />

            <p className="text-[10px] uppercase tracking-widest font-bold mb-3" style={{ color: 'rgba(28,22,20,0.4)' }}>
              Dein monatlicher Verlust
            </p>

            <div className="text-5xl font-bold text-red-500 mb-2 tracking-tight tabular-nums">
              {fmt(monthlyLoss)}
            </div>
            <p className="text-sm text-[#1C1614]/45 mb-2">
              durch manuelle Arbeit jeden Monat.
            </p>
            <p className="text-sm font-medium text-[#1C1614]/60 mb-10">
              Das sind <span className="text-[#1C1614]">{fmt(yearlyLoss)}</span> im Jahr.
            </p>

            <button
              className="w-full flex justify-center items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold transition-colors text-white"
              style={{ background: '#cd9b7b' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#b8815e')}
              onMouseLeave={e => (e.currentTarget.style.background = '#cd9b7b')}
              data-cal-link="erik-neinstel-mshw1t/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Kostenfrei analysieren lassen
              <ArrowRight size={16} />
            </button>

            <p className="text-[10px] mt-6 leading-relaxed max-w-[280px]" style={{ color: 'rgba(28,22,20,0.35)' }}>
              *Konservative Berechnung: Mitarbeiter × Stunden × Stundenlohn × 44 effektive Arbeitswochen/Jahr (abzgl. Urlaub/Feiertage).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
