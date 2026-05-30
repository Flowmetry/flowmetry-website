'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { CheckCircle, TrendingUp, Users, FileText, Share2, Zap } from 'lucide-react';

const KPI_CARDS = [
  { label: 'Neue Leads', value: '142', change: '+24%', color: '#8B4A1E', icon: Users },
  { label: 'Angebote versendet', value: '38', change: '+61%', color: '#16a34a', icon: FileText },
  { label: 'Social Media Posts', value: '94', change: '+180%', color: '#7c3aed', icon: Share2 },
  { label: 'CRM-Einträge', value: '1.204', change: 'automatisch', color: '#0284c7', icon: TrendingUp },
];

const AUTOMATIONS = [
  { name: 'Lead-Qualifizierung', status: 'aktiv', runs: '1.204 Läufe', color: '#16a34a' },
  { name: 'Angebotserstellung', status: 'aktiv', runs: '38 heute', color: '#16a34a' },
  { name: 'Social Media Planer', status: 'aktiv', runs: '94 Posts', color: '#16a34a' },
  { name: 'CRM-Synchronisation', status: 'aktiv', runs: 'Echtzeit', color: '#16a34a' },
  { name: 'E-Mail Follow-up', status: 'aktiv', runs: '56 gesendet', color: '#16a34a' },
];

const NAV_ITEMS = ['Dashboard', 'Automationen', 'Leads', 'Angebote', 'CRM', 'Einstellungen'];

function MiniChart() {
  const bars = [40, 65, 45, 80, 60, 90, 75, 95, 70, 88, 92, 100];
  return (
    <div className="flex items-end gap-1 h-12">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm"
          style={{ background: i >= bars.length - 3 ? '#8B4A1E' : '#e5e7eb' }}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="w-full h-full bg-white rounded-b-xl overflow-hidden flex">

      {/* Sidebar */}
      <div className="w-44 flex-shrink-0 border-r border-gray-100 bg-gray-50/80 p-3 flex flex-col gap-1">
        <div className="flex items-center gap-2 px-2 py-2 mb-2">
          <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: '#8B4A1E' }}>
            <Zap size={10} className="text-white" />
          </div>
          <span className="text-xs font-bold text-gray-800">Flowmetry</span>
        </div>
        {NAV_ITEMS.map((item, i) => (
          <div
            key={item}
            className="px-2 py-1.5 rounded-lg text-xs transition-colors"
            style={{
              background: i === 0 ? 'rgba(139,74,30,0.08)' : 'transparent',
              color: i === 0 ? '#8B4A1E' : '#6b7280',
              fontWeight: i === 0 ? 600 : 400,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Übersicht</h3>
            <p className="text-[10px] text-gray-400">Heute, {new Date().toLocaleDateString('de-DE')}</p>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold" style={{ background: 'rgba(22,163,74,0.1)', color: '#16a34a' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Alle Systeme aktiv
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {KPI_CARDS.map(({ label, value, change, color, icon: Icon }, i) => (
            <motion.div
              key={label}
              className="bg-white rounded-xl p-3 border border-gray-100"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: `${color}15` }}>
                  <Icon size={12} style={{ color }} />
                </div>
                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: `${color}12`, color }}>
                  {change}
                </span>
              </div>
              <div className="text-base font-bold text-gray-900">{value}</div>
              <div className="text-[9px] text-gray-400 mt-0.5">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart + Automations */}
        <div className="grid grid-cols-5 gap-3">

          {/* Chart */}
          <div className="col-span-3 bg-white rounded-xl p-3 border border-gray-100" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-700">Lead-Wachstum</span>
              <span className="text-[9px] text-gray-400">Letzte 12 Wochen</span>
            </div>
            <MiniChart />
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp size={10} className="text-green-500" />
              <span className="text-[9px] text-green-600 font-medium">+142% seit Automatisierung</span>
            </div>
          </div>

          {/* Automation Status */}
          <div className="col-span-2 bg-white rounded-xl p-3 border border-gray-100" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <span className="text-xs font-semibold text-gray-700 block mb-2">Automationen</span>
            <div className="flex flex-col gap-1.5">
              {AUTOMATIONS.map(({ name, runs }, i) => (
                <motion.div
                  key={name}
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span className="text-[9px] text-gray-600 truncate max-w-[80px]">{name}</span>
                  </div>
                  <span className="text-[9px] text-gray-400">{runs}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const BENEFIT_LEFT = {
  metric: '−78%',
  label: 'Reaktionszeit',
  sub: 'auf Kundenanfragen',
  icon: '⚡',
  color: '#8B4A1E',
};

const BENEFIT_RIGHT = {
  metric: '+15h',
  label: 'pro Woche',
  sub: 'zurückgewonnen',
  icon: '🕐',
  color: '#16a34a',
};

function BenefitCard({ metric, label, sub, icon, color, side }: typeof BENEFIT_LEFT & { side: 'left' | 'right' }) {
  return (
    <motion.div
      className="hidden md:block absolute top-1/2 -translate-y-1/2 w-36 rounded-2xl p-4 bg-white"
      style={{
        [side === 'left' ? 'left' : 'right']: '-72px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        border: '1px solid rgba(0,0,0,0.06)',
        zIndex: 10,
      }}
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-2xl font-bold" style={{ color }}>{metric}</div>
      <div className="text-xs font-semibold text-gray-800">{label}</div>
      <div className="text-[10px] text-gray-400">{sub}</div>
    </motion.div>
  );
}

const NAT_W = 720;
const NAT_H = 376; // 36px chrome + 340px dashboard

export function DashboardBanner() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function compute() {
      if (!wrapperRef.current || window.innerWidth >= 768) {
        setScale(1);
        return;
      }
      setScale(wrapperRef.current.offsetWidth / NAT_W);
    }
    compute();
    window.addEventListener('resize', compute, { passive: true });
    return () => window.removeEventListener('resize', compute);
  }, []);

  const scaled = scale < 1;

  return (
    <section className="relative pt-0 pb-10 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Floating Benefit Cards – nur Desktop */}
          <BenefitCard {...BENEFIT_LEFT} side="left" />
          <BenefitCard {...BENEFIT_RIGHT} side="right" />

          {/* Mobile Overlay Tags */}
          <div
            className="md:hidden absolute top-0 right-4 -translate-y-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full pointer-events-none"
            style={{ background: 'white', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', border: '1px solid rgba(0,0,0,0.06)' }}
          >
            <span>🕐</span>
            <span className="text-[10px] font-semibold text-gray-800">+15h pro Woche</span>
          </div>
          <div
            className="md:hidden absolute bottom-0 left-4 translate-y-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full pointer-events-none"
            style={{ background: 'white', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', border: '1px solid rgba(0,0,0,0.06)' }}
          >
            <span>⚡</span>
            <span className="text-[10px] font-semibold text-gray-800">−78% Reaktionszeit</span>
          </div>

          {/* Scale-Wrapper */}
          <div ref={wrapperRef} className="mx-0 md:mx-12 rounded-2xl md:rounded-none shadow-[0_8px_28px_rgba(0,0,0,0.09),0_2px_8px_rgba(0,0,0,0.05)] md:shadow-none">
            <div style={scaled ? { height: NAT_H * scale, overflow: 'hidden' } : undefined}>
              <div style={scaled ? { width: NAT_W, transformOrigin: 'top left', transform: `scale(${scale})` } : undefined}>

                {/* Browser Frame */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: '0 24px 80px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  {/* Browser Chrome */}
                  <div className="h-9 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                      <div className="w-3 h-3 rounded-full bg-green-400/70" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-white rounded-md px-4 py-1 text-[10px] text-gray-400 border border-gray-200 w-48 text-center">
                        app.flowmetry.ai/dashboard
                      </div>
                    </div>
                  </div>

                  {/* Dashboard */}
                  <div style={{ height: 340 }}>
                    <Dashboard />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
