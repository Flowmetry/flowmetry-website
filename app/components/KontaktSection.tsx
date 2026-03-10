'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';

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

/* ── Field wrapper — capsule with focus glow ──────────────────────────────── */

function FieldWrap({ children }: { children: React.ReactNode }) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
      className="rounded-lg transition-all duration-300"
      style={{
        background: focused ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)',
        border: `1px solid ${focused ? 'rgba(34,211,238,0.42)' : 'rgba(255,255,255,0.1)'}`,
        boxShadow: focused
          ? '0 0 0 3px rgba(34,211,238,0.08), 0 0 22px rgba(34,211,238,0.14)'
          : '0 0 16px rgba(59,130,246,0.08)',
      }}
    >
      {children}
    </div>
  );
}

/* ── Input / textarea inner className ─────────────────────────────────────── */

const fieldCls =
  'w-full px-4 py-3.5 bg-transparent text-white text-sm ' +
  'placeholder:text-[#6B7280] focus:outline-none';

/* ── Contact Form ─────────────────────────────────────────────────────────── */

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const set = (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
    <form onSubmit={handleSubmit} className="space-y-5">

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-semibold tracking-[0.18em] text-[#4B5563] uppercase mb-3.5">
            Name
          </label>
          <FieldWrap>
            <input
              type="text"
              required
              placeholder="Dein Name"
              value={fields.name}
              onChange={set('name')}
              className={fieldCls}
            />
          </FieldWrap>
        </div>
        <div>
          <label className="block text-[10px] font-semibold tracking-[0.18em] text-[#4B5563] uppercase mb-3.5">
            E-Mail
          </label>
          <FieldWrap>
            <input
              type="email"
              required
              placeholder="du@unternehmen.de"
              value={fields.email}
              onChange={set('email')}
              className={fieldCls}
            />
          </FieldWrap>
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-semibold tracking-[0.18em] text-[#4B5563] uppercase mb-3.5">
          Unternehmen
        </label>
        <FieldWrap>
          <input
            type="text"
            placeholder="Dein Unternehmen (optional)"
            value={fields.company}
            onChange={set('company')}
            className={fieldCls}
          />
        </FieldWrap>
      </div>

      <div>
        <label className="block text-[10px] font-semibold tracking-[0.18em] text-[#4B5563] uppercase mb-3.5">
          Was möchtest du automatisieren?
        </label>
        <FieldWrap>
          <textarea
            required
            rows={4}
            placeholder="Beschreibe kurz, welche Prozesse du automatisieren möchtest..."
            value={fields.message}
            onChange={set('message')}
            className={`${fieldCls} resize-none`}
          />
        </FieldWrap>
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

const TRUST_ITEMS = [
  'Kostenlose Erstanalyse – unverbindlich',
  'Innerhalb von 2–4 Wochen live',
  'Maßgeschneidert, kein Template',
];

export function KontaktSection() {
  const trustRef = useRef<HTMLDivElement>(null);
  const trustInView = useInView(trustRef, { once: true, margin: '-40px' });

  return (
    <section
      id="kontakt"
      className="py-20 relative overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
      }}
    >

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">

        {/* Section heading — untouched */}
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

        {/* ── Terminal container ── */}
        <motion.div
          className="max-w-5xl mx-auto rounded-2xl p-8 md:p-10 lg:p-12"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '0.5px solid rgba(255,255,255,0.07)',
            boxShadow:
              '0 0 0 1px rgba(255,255,255,0.04), 0 0 70px rgba(59,130,246,0.14), 0 0 150px rgba(59,130,246,0.07), 0 0 40px rgba(34,211,238,0.04)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-start">

            {/* ── Left: pitch + indicator + checklist ── */}
            <div className="flex flex-col gap-8 pt-1 md:pt-2 md:pr-10 md:border-r md:border-white/[0.06] mb-10 md:mb-0">

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3 leading-snug">
                  Bereit für das<br />nächste Level?
                </h3>
                <p className="text-[#B4BEC9] leading-relaxed">
                  Lass uns gemeinsam schauen, wo wir bei dir Zeit und Kosten einsparen können.
                </p>
              </div>

              <OnlineIndicator />

              {/* Animated checkmark trust list */}
              <div ref={trustRef} className="flex flex-col gap-3">
                {TRUST_ITEMS.map((item, i) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <svg
                      width="15" height="15" viewBox="0 0 15 15" fill="none"
                      className="flex-shrink-0"
                    >
                      <motion.path
                        d="M2.5 7.5L5.5 10.5L12.5 4"
                        stroke="rgba(59,130,246,0.8)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={
                          trustInView
                            ? { pathLength: 1, opacity: 1 }
                            : { pathLength: 0, opacity: 0 }
                        }
                        transition={{
                          pathLength: { duration: 0.4, ease: 'easeOut', delay: 0.2 + i * 0.12 },
                          opacity:    { duration: 0.05, delay: 0.2 + i * 0.12 },
                        }}
                      />
                    </svg>
                    <span className="text-sm text-[#9CA3AF]">{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* ── Right: form ── */}
            <div className="md:pl-10">
              <ContactForm />
            </div>

          </div>
        </motion.div>

        {/* ── Footer — email ── */}
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#4B5563] text-xs mt-8">
            Oder direkt per E-Mail:{' '}
            <a
              href="mailto:kontakt@flowmetry.ai"
              className="text-[#9CA3AF] hover:text-white transition-colors"
            >
              kontakt@flowmetry.ai
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
