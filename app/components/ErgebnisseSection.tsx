'use client';

import { motion } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const BRAND = '#8B4A1E';
const BRAND_LIGHT = 'rgba(139,74,30,0.08)';

/* ── Card 1: Workflow – 3 Nodes ohne Chrome ── */
function WorkflowViz() {
  const s = 44;
  const cy = 74; // vertikal mittig in viewBox 148

  const nodes = [
    {
      cx: 54,
      icon: 'M-8,-5 h16 v12 h-16 z M-8,-5 l8,6 l8,-6',
    },
    {
      cx: 130,
      icon: 'M-6,-9 h8 l4,4 v13 h-12 z M-6,-5 h5 M-6,-1 h8 M-6,3 h6 M2,-9 v4 h4',
    },
    {
      cx: 206,
      icon: 'M-7,-9 h9 l4,4 v13 h-13 z M2,-9 v4 h4 M-4,1 l2.5,3 l5,-5.5',
    },
  ];

  const connectors = [
    { x1: 54 + s/2 + 8, x2: 130 - s/2 - 8 },
    { x1: 130 + s/2 + 8, x2: 206 - s/2 - 8 },
  ];

  return (
    <div className="h-full flex items-center justify-center">
      <svg viewBox="0 0 260 148" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="nodeShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#1C1614" floodOpacity="0.10"/>
          </filter>
          <marker id="arrowHead" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
            <polyline points="0,0.5 3,2 0,3.5"
              fill="none" stroke="#1C1614" strokeWidth="1"
              strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>

        {/* Verbindungspfeile */}
        {connectors.map((c, i) => (
          <line
            key={i}
            x1={c.x1} y1={cy} x2={c.x2} y2={cy}
            stroke="#1C1614" strokeOpacity="0.55" strokeWidth="1"
            strokeLinecap="round"
            markerEnd="url(#arrowHead)"
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={i} filter="url(#nodeShadow)">
            <rect
              x={n.cx - s/2} y={cy - s/2}
              width={s} height={s} rx="10"
              fill="white"
            />
            <g transform={`translate(${n.cx},${cy})`}>
              <path
                d={n.icon}
                fill="none"
                stroke="#1C1614"
                strokeOpacity="0.85"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        ))}

      </svg>
    </div>
  );
}

/* ── Card 2: FlowmetryOS – Vorher / Nachher ── */
function DashboardViz() {
  const W = 248;
  const H = 128;

  const cards = [
    { rot: '-9deg', tx: '-80px', ty: '10px',  z: 1, op: 0.06 },
    { rot:  '6deg', tx:  '76px', ty: '14px',  z: 2, op: 0.07 },
    { rot: '-2deg', tx:  '-4px', ty: '-12px', z: 3, op: 0.10 },
  ];

  return (
    <div className="h-full flex flex-col px-5 pb-4 gap-0">

      {/* ══ VORHER (50%) ══ */}
      <div className="flex-1 flex flex-col gap-2 pt-3 pb-3 min-h-0">
        <span className="self-start text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full flex-shrink-0"
          style={{ background: 'rgba(28,22,20,0.07)', color: 'rgba(28,22,20,0.45)' }}>
          Vorher
        </span>
        {/* 3 quadratische Karten im Fächer */}
        <div className="flex-1 relative min-h-0 flex items-center justify-center scale-75 md:scale-100 origin-center">
          {cards.map((card, idx) => (
            <div key={idx} className="absolute" style={{
              width: W, height: H,
              transform: `rotate(${card.rot}) translate(${card.tx}, ${card.ty})`,
              zIndex: card.z,
              borderRadius: 10,
              background: 'white',
              border: '1px solid rgba(28,22,20,0.09)',
              boxShadow: `0 3px 14px rgba(28,22,20,${card.op})`,
              overflow: 'hidden',
            }}>
              {/* Traffic lights */}
              <div style={{ height: 26, borderBottom: '1px solid rgba(28,22,20,0.06)', display: 'flex', alignItems: 'center', gap: 5, padding: '0 10px' }}>
                {['#FF5F57','#FEBC2E','#28C840'].map((c,i)=>(
                  <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: c, opacity: 0.75 }}/>
                ))}
              </div>
              {/* Mini-Inhalt je nach Karte */}
              {idx === 0 && (
                <div style={{ padding: '9px 11px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[65,45,80,38].map((w,i)=>(
                    <div key={i} style={{ height: 5, width: `${w}%`, borderRadius: 99, background: `rgba(28,22,20,${i===0?0.13:0.07})` }}/>
                  ))}
                  <div style={{ display: 'flex', gap: 3, marginTop: 2 }}>
                    {[16,11,20,14,24,17].map((h,i)=>(
                      <div key={i} style={{ width: 9, height: h, borderRadius: 2, background: `rgba(28,22,20,${i===4?0.16:0.09})` }}/>
                    ))}
                  </div>
                </div>
              )}
              {idx === 1 && (
                <div style={{ padding: '9px 11px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', gap: 5 }}>
                    {[0,1,2].map(j=>(
                      <div key={j} style={{ flex: 1, height: 34, borderRadius: 6, background: j===0?'rgba(139,74,30,0.09)':'rgba(28,22,20,0.05)' }}/>
                    ))}
                  </div>
                  {[55,38].map((w,i)=>(
                    <div key={i} style={{ height: 5, width: `${w}%`, borderRadius: 99, background: 'rgba(28,22,20,0.08)' }}/>
                  ))}
                </div>
              )}
              {idx === 2 && (
                <div style={{ padding: '9px 11px' }}>
                  <svg width="100%" height="66" viewBox="0 0 130 66" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="prevFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(28,22,20,0.12)"/>
                        <stop offset="100%" stopColor="rgba(28,22,20,0)"/>
                      </linearGradient>
                    </defs>
                    {[17,33,50].map(y=>(
                      <line key={y} x1="0" y1={y} x2="130" y2={y} stroke="rgba(28,22,20,0.05)" strokeWidth="1"/>
                    ))}
                    <path d="M0,62 C22,54 44,44 65,30 C86,18 108,10 130,5 L130,66 L0,66 Z" fill="url(#prevFill)"/>
                    <path d="M0,62 C22,54 44,44 65,30 C86,18 108,10 130,5" fill="none" stroke="rgba(28,22,20,0.3)" strokeWidth="1.5"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ══ NACHHER (50%) ══ */}
      <div className="flex-1 flex flex-col gap-2 pt-3 min-h-0">
        <span className="self-start text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full flex-shrink-0"
          style={{ background: 'rgba(139,74,30,0.1)', color: BRAND }}>
          Nachher
        </span>
        {/* Ein Browser-Fenster – ~70% Breite, zentriert */}
        <div className="flex-1 min-h-0" style={{
          width: '72%',
          margin: '0 auto',
          borderRadius: 10,
          background: 'white',
          boxShadow: '0 4px 18px rgba(28,22,20,0.11)',
          overflow: 'hidden',
        }}>
          <svg width="100%" height="100%" viewBox="0 0 420 172" preserveAspectRatio="none">
            <defs>
              <linearGradient id="crmFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={BRAND} stopOpacity="0.20"/>
                <stop offset="100%" stopColor={BRAND} stopOpacity="0.01"/>
              </linearGradient>
            </defs>

            {/* ── Browser-Chrome ── */}
            <line x1="0" y1="26" x2="420" y2="26" stroke="rgba(28,22,20,0.05)" strokeWidth="1"/>
            {[10,20,30].map((x,i)=>(
              <circle key={i} cx={x} cy="13" r="3.5"
                fill={['#FF5F57','#FEBC2E','#28C840'][i]} fillOpacity="0.75"/>
            ))}
            <rect x="42" y="6" width="130" height="18" rx="3" fill="rgba(139,74,30,0.04)"/>
            <circle cx="52" cy="15" r="2.5" fill={BRAND} fillOpacity="0.35"/>
            <text x="58" y="18.5" fontSize="8" fontWeight="600" fill="rgba(139,74,30,0.5)" fontFamily="Arial, sans-serif">Dashboard</text>

            {/* Sidebar */}
            <rect x="0" y="26" width="28" height="146" fill="rgba(28,22,20,0.015)"/>
            <line x1="28" y1="26" x2="28" y2="172" stroke="rgba(28,22,20,0.05)" strokeWidth="1"/>
            <rect x="9" y="33" width="12" height="12" rx="3" fill={BRAND} fillOpacity="0.7"/>
            {[52,62,72,82,92,102,112,122,132,142,152,162].map((y,i)=>(
              <rect key={i} x="7" y={y} width="14" height="3" rx="99"
                fill={`rgba(28,22,20,${i<3?[0.14,0.09,0.07][i]:0.04})`}/>
            ))}

            {/* KPI-Kacheln */}
            {[
              { x: 36,  label: '14',    sub: 'Leads',    accent: true  },
              { x: 135, label: '€9.2k', sub: 'Pipeline', accent: false },
              { x: 234, label: '4',     sub: 'Angebote', accent: false },
            ].map((k,i)=>(
              <g key={i}>
                <rect x={k.x} y="31" width="90" height="20" rx="4"
                  fill={k.accent ? 'rgba(139,74,30,0.07)' : 'rgba(28,22,20,0.03)'}/>
                <text x={k.x+7} y="41" fontSize="8" fontWeight="700"
                  fill={k.accent ? BRAND : 'rgba(28,22,20,0.60)'}
                  fontFamily="Arial, sans-serif">{k.label}</text>
                <text x={k.x+40} y="41" fontSize="6.5" fill="rgba(28,22,20,0.35)"
                  fontFamily="Arial, sans-serif">{k.sub}</text>
              </g>
            ))}

            {/* Area Chart */}
            {[65,80,96,112,127].map(y=>(
              <line key={y} x1="36" y1={y} x2="330" y2={y}
                stroke="rgba(28,22,20,0.04)" strokeWidth="1"/>
            ))}
            <path d="M36,124 C80,115 130,104 180,91 C230,78 280,70 330,60 L330,127 L36,127 Z"
              fill="url(#crmFill)"/>
            <path d="M36,124 C80,115 130,104 180,91 C230,78 280,70 330,60"
              fill="none" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round"/>
            {[[36,124],[100,112],[180,91],[260,75],[330,60]].map(([x,y],i)=>(
              <circle key={i} cx={x} cy={y} r="2.2" fill="white" stroke={BRAND} strokeWidth="1.3"/>
            ))}

            {/* Aktivitätsliste rechts */}
            <line x1="340" y1="30" x2="340" y2="128" stroke="rgba(28,22,20,0.04)" strokeWidth="1"/>
            {[
              { y: 52,  dot: BRAND,                 label: 'Angebot #14', op: 0.70 },
              { y: 73,  dot: 'rgba(139,74,30,0.4)', label: 'Follow-Up',   op: 0.43 },
              { y: 94,  dot: 'rgba(28,22,20,0.2)',  label: 'Demo heute',  op: 0.43 },
              { y: 115, dot: 'rgba(28,22,20,0.15)', label: 'Rechnung ok', op: 0.32 },
            ].map((item,i)=>(
              <g key={i}>
                <circle cx="350" cy={item.y} r="2.8" fill={item.dot}/>
                <text x="358" y={item.y+3.5} fontSize="8" fill={`rgba(28,22,20,${item.op})`}
                  fontFamily="Arial, sans-serif">{item.label}</text>
              </g>
            ))}

            {/* ── Unterer Streifen: Metrik-Zeilen ── */}
            <line x1="28" y1="132" x2="420" y2="132" stroke="rgba(28,22,20,0.05)" strokeWidth="1"/>
            {[
              { y: 146, label: 'Umsatz',   val: 0.72 },
              { y: 157, label: 'Pipeline', val: 0.54 },
              { y: 168, label: 'Kunden',   val: 0.88 },
            ].map((row,i)=>(
              <g key={i}>
                <text x="36" y={row.y} fontSize="7" fill="rgba(28,22,20,0.38)"
                  fontFamily="Arial, sans-serif">{row.label}</text>
                <rect x="90" y={row.y-7} width="200" height="4" rx="99"
                  fill="rgba(28,22,20,0.05)"/>
                <rect x="90" y={row.y-7} width={200*row.val} height="4" rx="99"
                  fill={BRAND} fillOpacity={i===0?0.5:i===1?0.35:0.6}/>
                <text x="296" y={row.y} fontSize="7" fill="rgba(28,22,20,0.35)"
                  fontFamily="Arial, sans-serif">{Math.round(row.val*100)}%</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── Card 3: PersonalOS – Node Graph ── */
function PersonalOSViz() {
  type Pt = { x: number; y: number; r: number };

  const nodes: Pt[] = [
    { x: 52,  y: 38,  r: 2.5 },
    { x: 158, y: 28,  r: 3   },
    { x: 224, y: 62,  r: 2.5 },
    { x: 34,  y: 88,  r: 3   },
    { x: 112, y: 74,  r: 2.5 },
    { x: 196, y: 110, r: 2.5 },
    { x: 68,  y: 128, r: 2.5 },
    { x: 148, y: 118, r: 3   },
    { x: 228, y: 140, r: 2.5 },
    { x: 94,  y: 44,  r: 2.5 },
  ];

  const edges: [number, number][] = [
    [0, 3], [0, 9], [0, 4],
    [1, 2], [1, 4], [1, 7],
    [2, 5], [2, 8],
    [3, 6],
    [4, 7], [4, 6],
    [5, 7], [5, 8],
    [6, 7],
    [7, 8],
    [9, 1], [9, 4],
  ];

  return (
    <div className="h-full flex items-center justify-center px-4 pb-2">
      <svg viewBox="0 0 260 148" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">

        <defs>
          <radialGradient id="netGlow" cx="0" cy="0" r="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#8B4A1E" stopOpacity="0.28"/>
            <stop offset="100%" stopColor="#8B4A1E" stopOpacity="0"/>
            <animate attributeName="cx"
              values="52;94;158;224;196;148;68;34;94;52"
              dur="6s" repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
            />
            <animate attributeName="cy"
              values="38;44;28;62;110;118;128;88;44;38"
              dur="6s" repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
            />
          </radialGradient>
        </defs>

        {/* Basis-Linien schwarz */}
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="#1C1614" strokeOpacity="0.3" strokeWidth="1"
            strokeLinecap="round"
          />
        ))}

        {/* Glow-Linien – wanderndes Leuchten */}
        {edges.map(([a, b], i) => (
          <line
            key={`g${i}`}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="url(#netGlow)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x} cy={n.y} r={n.r}
            fill="#1C1614"
          />
        ))}

      </svg>
    </div>
  );
}

/* ── Main Section ── */
export function ErgebnisseSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Headline */}
        <div className="text-center mb-6 md:mb-14">
          <h2
            className="font-semibold tracking-tighter text-[#1C1614] leading-[1.05]"
            style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3rem)' }}
          >
            Systeme die{' '}
            <span style={{ fontFamily: 'var(--font-signature)', fontStyle: 'italic', fontWeight: 700, color: BRAND, fontSize: '1.1em' }}>
              heute noch
            </span>
            {' '}laufen.
          </h2>
          <p className="text-sm md:text-base font-normal text-[#1C1614]/60 leading-relaxed mt-3 max-w-xl mx-auto">
            <span className="block">Für Kunden gebaut. Für mich selbst genutzt.</span>
            <span className="block">Drei Systeme die täglich im Einsatz sind.</span>
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

          {/* Card 1 – large left */}
          <motion.div
            className="md:col-span-3 rounded-2xl overflow-hidden bg-white flex flex-col relative min-h-[620px] md:min-h-[496px]"
            style={{ border: '1px solid rgba(28,22,20,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            {/* Punkt-Hintergrund */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(139,74,30,0.55) 1.5px, transparent 1.5px)',
                backgroundSize: '16px 16px',
                maskImage: 'radial-gradient(ellipse 70% 60% at 50% 38%, black 0%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 38%, black 0%, transparent 100%)',
              }}
            />
            {/* Sanftes Leuchten – warmer Brand-Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 65% 55% at 50% 42%, rgba(139,74,30,0.10) 0%, rgba(139,74,30,0.03) 50%, transparent 75%)',
                filter: 'blur(18px)',
              }}
            />
            {/* Weißer Verlauf über Headline-Bereich */}
            <div
              className="absolute inset-x-0 top-0 pointer-events-none"
              style={{ height: '40%', background: 'linear-gradient(to top, transparent 0%, white 55%)' }}
            />
            <div className="px-6 pt-6 pb-3 relative text-center">
              <h3 className="text-3xl font-semibold text-[#1C1614] tracking-tight mb-1.5">
                <span className="block md:inline">FlowmetryOS</span>
                <span className="hidden md:inline"> – </span>
                <span className="inline-block md:inline text-2xl md:text-3xl relative">
                  Alles in einem Ort
                  <svg className="md:hidden absolute left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" style={{ bottom: '-2px', height: '8px' }} aria-hidden="true">
                    <rect x="0" y="3" width="200" height="2" rx="1" fill="#8B4A1E" opacity="0.45" />
                  </svg>
                </span>
              </h3>
              <p className="text-base md:text-lg text-[#1C1614]/50 leading-relaxed mt-2 md:mt-0">
                Dashboard das Instagram, Tasks, Content und CRM und mehr vereint.
              </p>
            </div>
            <div className="flex-1 pb-6 relative">
              <DashboardViz />
            </div>
          </motion.div>

          {/* Right column */}
          <div className="md:col-span-2 flex flex-col gap-4 md:-mt-6 md:-mb-6">

            {/* Card 2 */}
            <motion.div
              className="flex-1 rounded-2xl overflow-hidden bg-white flex flex-col relative"
              style={{ border: '1px solid rgba(28,22,20,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', minHeight: '200px' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Punkt-Hintergrund */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(139,74,30,0.35) 1.5px, transparent 1.5px)',
                  backgroundSize: '16px 16px',
                  maskImage: 'radial-gradient(ellipse 70% 60% at 50% 38%, black 0%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 38%, black 0%, transparent 100%)',
                }}
              />
              {/* Weißer Verlauf über Headline-Bereich */}
              <div
                className="absolute inset-x-0 top-0 pointer-events-none"
                style={{ height: '52%', background: 'linear-gradient(to top, transparent 0%, white 55%)' }}
              />
              <div className="px-5 pt-4 pb-2 relative text-center">
                <h3 className="text-lg font-semibold text-[#1C1614] tracking-tight mb-0.5">
                  Rechnungen die sich selbst sortieren
                </h3>
                <p className="text-base text-[#1C1614]/50 leading-relaxed">
                  Rechnungen werden erkannt und im Ordner abgelegt.
                </p>
              </div>
              <div className="flex-1 pb-4 relative">
                <WorkflowViz />
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="flex-1 rounded-2xl overflow-hidden bg-white flex flex-col relative"
              style={{ border: '1px solid rgba(28,22,20,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', minHeight: '200px' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Punkt-Hintergrund – Ränder stark transparent */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(139,74,30,0.35) 1.5px, transparent 1.5px)',
                  backgroundSize: '16px 16px',
                  maskImage: 'radial-gradient(ellipse 70% 60% at 50% 38%, black 0%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 38%, black 0%, transparent 100%)',
                }}
              />
              {/* Weißer Verlauf – deckt Headline-Bereich ab, stärker zur Umrandung */}
              <div
                className="absolute inset-x-0 top-0 pointer-events-none"
                style={{
                  height: '52%',
                  background: 'linear-gradient(to top, transparent 0%, white 55%)',
                }}
              />
              <div className="px-5 pt-4 pb-2 relative text-center">
                <h3 className="text-lg font-semibold text-[#1C1614] tracking-tight mb-0.5">
                  PersonalOS – KI die immer versteht
                </h3>
                <p className="text-base text-[#1C1614]/50 leading-relaxed">
                  Strukturierter Kontext der KI 24/7 die beste Antwort liefert.
                </p>
              </div>
              <div className="flex-1 pb-4 relative">
                <PersonalOSViz />
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
