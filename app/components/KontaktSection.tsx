'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const WEBHOOK_URL = 'https://n8n.flowmetry.ai/webhook/contact-form';

/* ── Online Indicator ─────────────────────────────────────────────────────── */

function OnlineIndicator() {
  return (
    <div className="flex items-center gap-3.5">
      <div className="relative w-9 h-9 flex items-center justify-center flex-shrink-0">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{ border: '1px solid rgba(34,197,94,0.35)' }}
            animate={{ scale: [1, 2.3, 1], opacity: [0.45, 0, 0.45] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut', delay: i * 1.1 }}
          />
        ))}
        <div
          className="w-3 h-3 rounded-full relative z-10"
          style={{
            background: '#22C55E',
            boxShadow: '0 0 10px rgba(34,197,94,0.7), 0 0 22px rgba(34,197,94,0.3)',
          }}
        />
      </div>
      <div>
        <p className="text-sm font-medium text-white">Online · Verfügbar</p>
        <p className="text-xs text-[#6B7280] mt-0.5">Antwort meist innerhalb von 24h</p>
      </div>
    </div>
  );
}

/* ── Shared input className ───────────────────────────────────────────────── */

const fieldCls =
  'w-full py-3.5 bg-transparent border-b border-white/10 text-white text-sm ' +
  'placeholder:text-[#6B7280] focus:outline-none focus:border-cyan-400/50 ' +
  'focus:shadow-[0_5px_20px_-8px_rgba(34,211,238,0.42)] ' +
  'transition-[border-color,box-shadow] duration-300';

/* ── Contact Form ─────────────────────────────────────────────────────────── */

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const set = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setFields({ name: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)' }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 11.5l5 5 9-9" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-white font-semibold">Nachricht gesendet!</p>
        <p className="text-[#9CA3AF] text-sm">Wir melden uns innerhalb von 24 Stunden.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-xs text-[#6B7280] hover:text-[#9CA3AF] transition-colors mt-2"
        >
          Neue Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="block text-[10px] font-semibold tracking-[0.18em] text-[#4B5563] uppercase mb-3.5">
            Name
          </label>
          <input
            type="text"
            required
            placeholder="Dein Name"
            value={fields.name}
            onChange={set('name')}
            className={fieldCls}
          />
        </div>
        <div>
          <label className="block text-[10px] font-semibold tracking-[0.18em] text-[#4B5563] uppercase mb-3.5">
            E-Mail
          </label>
          <input
            type="email"
            required
            placeholder="du@unternehmen.de"
            value={fields.email}
            onChange={set('email')}
            className={fieldCls}
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-semibold tracking-[0.18em] text-[#4B5563] uppercase mb-3.5">
          Unternehmen
        </label>
        <input
          type="text"
          placeholder="Dein Unternehmen (optional)"
          value={fields.company}
          onChange={set('company')}
          className={fieldCls}
        />
      </div>

      <div>
        <label className="block text-[10px] font-semibold tracking-[0.18em] text-[#4B5563] uppercase mb-3.5">
          Was möchtest du automatisieren?
        </label>
        <textarea
          required
          rows={4}
          placeholder="Beschreibe kurz, welche Prozesse du automatisieren möchtest..."
          value={fields.message}
          onChange={set('message')}
          className={`${fieldCls} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-400">Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>
      )}

      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
        transition={{ type: 'spring', stiffness: 380, damping: 22 }}
        className="w-full text-white font-semibold py-3.5 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
          boxShadow: '0 0 22px rgba(59,130,246,0.25)',
        }}
      >
        {status === 'loading' ? 'Wird gesendet…' : 'Nachricht senden'}
      </motion.button>
    </form>
  );
}

/* ── Main Section ─────────────────────────────────────────────────────────── */

export function KontaktSection() {
  return (
    <section id="kontakt" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">

        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Kontakt{' '}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
              aufnehmen
            </span>
          </h2>
          <p className="text-[#9CA3AF] leading-relaxed">
            Schreib uns direkt – wir melden uns innerhalb von 24 Stunden.
          </p>
        </motion.div>

        {/* 2-column grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-start max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
        >

          {/* ── Left: text + indicator ── */}
          <div className="flex flex-col gap-8 pt-1 md:pt-3">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3 leading-snug">
                Bereit für das<br />nächste Level?
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Lass uns gemeinsam schauen, wo wir bei dir Zeit und Kosten einsparen können.
              </p>
            </div>

            <OnlineIndicator />

            {/* Trust points */}
            <div className="flex flex-col gap-2.5">
              {[
                'Kostenlose Erstanalyse – unverbindlich',
                'Innerhalb von 2–4 Wochen live',
                'Maßgeschneidert, kein Template',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(59,130,246,0.65)' }}
                  />
                  <span className="text-sm text-[#9CA3AF]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div>
            <ContactForm />

            <p className="text-center text-[#4B5563] text-xs mt-5">
              Oder direkt per E-Mail:{' '}
              <a
                href="mailto:kontakt@flowmetry.ai"
                className="text-[#9CA3AF] hover:text-white transition-colors"
              >
                kontakt@flowmetry.ai
              </a>
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
