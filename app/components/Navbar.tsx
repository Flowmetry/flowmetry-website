'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';


const NAV_LINKS = [
  { label: 'Home',       href: '#'           },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Prozess',    href: '#prozess'    },
  { label: 'Freebie',    href: '#freebie'    },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6">

      {/* Kapsel */}
      <div
        className="w-full max-w-7xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(249,248,246,0.92)' : 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '0.5px solid rgba(28,22,20,0.12)',
          boxShadow: scrolled ? '0 4px 24px rgba(28,22,20,0.07)' : '0 2px 12px rgba(28,22,20,0.04)',
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/flowmetry-logo-kurz.png"
            alt="Flowmetry"
            width={44}
            height={44}
            className="h-9 w-auto"
            style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(70%) saturate(400%) hue-rotate(355deg) brightness(1.1)' }}
            priority
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-[#1C1614]/60 hover:text-[#1C1614] hover:bg-black/5 transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: '#8B4A1E' }}
            data-cal-link="erik-neinstel-mshw1t/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Erstgespräch
            <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            <span className="block w-5 h-[1.5px] bg-[#1C1614] origin-center transition-all duration-250"
              style={{ transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
            <span className="block w-5 h-[1.5px] bg-[#1C1614] transition-opacity duration-200"
              style={{ opacity: open ? 0 : 1 }} />
            <span className="block w-5 h-[1.5px] bg-[#1C1614] origin-center transition-all duration-250"
              style={{ transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="absolute top-full left-4 right-4 mt-2 rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(249,248,246,0.97)',
            backdropFilter: 'blur(20px)',
            border: '0.5px solid rgba(28,22,20,0.1)',
            boxShadow: '0 8px 32px rgba(28,22,20,0.08)',
          }}
        >
          <div className="px-6 py-4 flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3.5 text-sm text-[#1C1614]/60 hover:text-[#1C1614] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
