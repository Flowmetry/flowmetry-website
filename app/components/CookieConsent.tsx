'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CONSENT_KEY = 'cookie-consent';

export type ConsentValue = 'accepted' | 'rejected';

/**
 * Read the stored consent value (or null if not yet decided).
 * Call this from any client component to conditionally load analytics/GHL.
 *
 * Example:
 *   if (getCookieConsent() === 'accepted') { loadAnalytics(); }
 */
export function getCookieConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null;
  return (localStorage.getItem(CONSENT_KEY) as ConsentValue) ?? null;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show after mount (localStorage is client-only) and if no prior decision.
    if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
    // Dispatch event — future analytics / GHL scripts can listen for this.
    window.dispatchEvent(new CustomEvent('cookieConsent', { detail: 'accepted' }));
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 140, damping: 22 }}
          className="fixed bottom-0 left-0 right-0 z-[999] px-4 pb-4 md:px-6 md:pb-6"
          role="dialog"
          aria-label="Cookie-Einstellungen"
        >
          <div
            className="max-w-4xl mx-auto rounded-2xl px-6 py-5"
            style={{
              background: 'rgba(10,13,20,0.94)',
              border: '0.5px solid rgba(255,255,255,0.10)',
              boxShadow:
                '0 0 0 1px rgba(255,255,255,0.04), ' +
                '0 -8px 40px rgba(59,130,246,0.10), ' +
                '0 4px 60px rgba(0,0,0,0.6)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">

              {/* Text */}
              <p className="text-sm text-[#9CA3AF] leading-relaxed flex-1">
                Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Details finden Sie
                in unserer{' '}
                <a
                  href="/datenschutz"
                  className="text-[#60A5FA] hover:text-white transition-colors underline underline-offset-2"
                >
                  Datenschutzerklärung
                </a>
                .
              </p>

              {/* Gleichwertige Buttons */}
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={reject}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-sm font-medium text-[#9CA3AF] hover:text-white transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '0.5px solid rgba(255,255,255,0.14)',
                  }}
                >
                  Nur notwendige
                </button>
                <button
                  onClick={accept}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
                  style={{
                    background: 'rgba(59,130,246,0.18)',
                    border: '0.5px solid rgba(59,130,246,0.45)',
                    boxShadow: '0 0 16px rgba(59,130,246,0.18)',
                  }}
                >
                  Alle akzeptieren
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
