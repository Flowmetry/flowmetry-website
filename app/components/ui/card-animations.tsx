'use client';

import { Filter, UserCheck, FileText, Database, ArrowRightLeft, Bot } from 'lucide-react';

/* ── Lead Gen Animation ──────────────────────────────────────────────────── */
export function LeadGenAnimation() {
  const dots = [
    { left: '15%', delay: '0s' },
    { left: '30%', delay: '0.55s' },
    { left: '50%', delay: '1.1s' },
    { left: '68%', delay: '0.3s' },
    { left: '82%', delay: '0.8s' },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(59,130,246,0.12) 0%, transparent 65%)' }}
      />

      {dots.map(({ left, delay }, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: '#22D3EE',
            left,
            top: 0,
            boxShadow: '0 0 8px rgba(34,211,238,0.8)',
            animation: `ca-fall 2.2s ease-in infinite`,
            animationDelay: delay,
          }}
        />
      ))}

      <div
        className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center"
        style={{ background: 'rgba(59,130,246,0.15)', border: '0.5px solid rgba(59,130,246,0.4)' }}
      >
        <Filter className="w-6 h-6 text-blue-400" />
      </div>

      <div
        className="absolute bottom-4 right-5 flex items-center gap-1.5"
        style={{ animation: 'ca-pulse 2.5s ease-in-out infinite' }}
      >
        <UserCheck className="w-4 h-4 text-cyan-400" />
        <span className="text-[10px] text-cyan-400/80 font-medium tracking-wide">Qualifiziert</span>
      </div>
    </div>
  );
}

/* ── Backoffice Animation ────────────────────────────────────────────────── */
export function BackofficeAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.09) 0%, transparent 65%)' }}
      />

      <div
        className="relative w-28 h-36 rounded-lg overflow-hidden flex-shrink-0"
        style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.15)' }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              background: 'rgba(255,255,255,0.18)',
              height: 5,
              left: 10,
              width: i === 0 ? '55%' : i === 4 ? '40%' : '75%',
              top: 12 + i * 22,
            }}
          />
        ))}

        {/* Scanning glow */}
        <div
          className="absolute left-0 right-0"
          style={{
            height: 28,
            background: 'linear-gradient(to bottom, transparent, rgba(34,211,238,0.15), transparent)',
            animation: 'ca-scan-glow 2s ease-in-out infinite',
          }}
        />
        {/* Laser line */}
        <div
          className="absolute left-0 right-0"
          style={{
            height: 2,
            background: 'linear-gradient(to right, transparent, rgba(34,211,238,0.95), transparent)',
            animation: 'ca-scan-line 2s ease-in-out infinite',
          }}
        />
      </div>

      <div
        className="absolute bottom-4 right-5 flex items-center gap-1.5"
        style={{ animation: 'ca-pulse 2.5s ease-in-out infinite', animationDelay: '0.5s' }}
      >
        <FileText className="w-4 h-4 text-cyan-400" />
        <span className="text-[10px] text-cyan-400/80 font-medium tracking-wide">Verarbeitet</span>
      </div>
    </div>
  );
}

/* ── CRM Animation ───────────────────────────────────────────────────────── */
export function CRMAnimation() {
  const nodes = [
    { icon: Database,       label: 'CRM',    x: '15%',  y: '52%', color: '#A78BFA', delay: '0s' },
    { icon: ArrowRightLeft, label: 'Sync',   x: '50%',  y: '30%', color: '#22D3EE', delay: '0.4s' },
    { icon: FileText,       label: 'Notion', x: '85%',  y: '52%', color: '#34D399', delay: '0.8s' },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 45%, rgba(167,139,250,0.08) 0%, transparent 65%)' }}
      />

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 15 52 Q 32 30 50 30"
          fill="none"
          stroke="rgba(167,139,250,0.5)"
          strokeWidth="0.7"
          strokeDasharray="3 2"
          strokeDashoffset="0"
          style={{ animation: 'ca-dash 1s linear infinite' }}
        />
        <path
          d="M 50 30 Q 68 30 85 52"
          fill="none"
          stroke="rgba(34,211,238,0.5)"
          strokeWidth="0.7"
          strokeDasharray="3 2"
          strokeDashoffset="0"
          style={{ animation: 'ca-dash 1s linear infinite', animationDelay: '0.3s' }}
        />
      </svg>

      {nodes.map(({ icon: Icon, label, x, y, color, delay }) => (
        <div
          key={label}
          className="absolute flex flex-col items-center gap-1"
          style={{
            left: x,
            top: y,
            transform: 'translate(-50%, -50%)',
            animation: `ca-node 2s ease-in-out infinite`,
            animationDelay: delay,
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${color}20`, border: `0.5px solid ${color}50`, color }}
          >
            <Icon className="w-4 h-4" />
          </div>
          <span className="text-[9px] text-white/50 font-medium">{label}</span>
        </div>
      ))}

      {/* Traveling dot */}
      <div
        className="absolute w-2 h-2 rounded-full"
        style={{
          background: '#22D3EE',
          boxShadow: '0 0 8px rgba(34,211,238,0.9)',
          top: '40%',
          left: '15%',
          animation: 'ca-travel 2.4s ease-in-out infinite',
        }}
      />
    </div>
  );
}

/* ── Support Animation ───────────────────────────────────────────────────── */
export function SupportAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(52,211,153,0.08) 0%, transparent 65%)' }}
      />

      <div className="flex flex-col gap-2.5 w-52">
        <div
          className="self-start px-3 py-2 rounded-2xl rounded-tl-sm text-[11px] text-white/75 max-w-[78%]"
          style={{
            background: 'rgba(255,255,255,0.09)',
            border: '0.5px solid rgba(255,255,255,0.15)',
            animation: 'ca-msg-user 5s ease-in-out infinite',
          }}
        >
          Wo ist meine Bestellung?
        </div>

        <div
          className="self-end px-3 py-2.5 rounded-2xl rounded-tr-sm flex items-center gap-1.5"
          style={{
            background: 'rgba(52,211,153,0.12)',
            border: '0.5px solid rgba(52,211,153,0.3)',
            animation: 'ca-msg-typing 5s ease-in-out infinite',
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              style={{
                animation: 'ca-bounce 0.6s ease-in-out infinite',
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        <div
          className="self-end px-3 py-2 rounded-2xl rounded-tr-sm text-[11px] text-emerald-300 max-w-[88%]"
          style={{
            background: 'rgba(52,211,153,0.1)',
            border: '0.5px solid rgba(52,211,153,0.25)',
            animation: 'ca-msg-bot 5s ease-in-out infinite',
          }}
        >
          Deine Bestellung ist unterwegs! 🚀
        </div>
      </div>

      <div
        className="absolute bottom-4 right-5 flex items-center gap-1.5"
        style={{ animation: 'ca-pulse 2.5s ease-in-out infinite' }}
      >
        <Bot className="w-4 h-4 text-emerald-400" />
        <span className="text-[10px] text-emerald-400/80 font-medium tracking-wide">KI-Agent</span>
      </div>
    </div>
  );
}
