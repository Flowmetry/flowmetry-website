'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HoverBorderGradient } from './HoverBorderGradient';

const NAV_LINKS = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Prozess',    href: '#prozess'    },
  { label: 'ROI',        href: '#roi'        },
  { label: 'FAQ',        href: '#faq'        },
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
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.04)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '0.5px solid rgba(255,255,255,0.07)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/flowmetry-logo-light.png"
            alt="Flowmetry"
            width={140}
            height={38}
            className="h-11 w-auto"
            priority
          />
        </a>

        {/* Desktop — Glassmorphic pill nav (EtherealBeams style) */}
        <nav className="hidden md:flex items-center gap-0.5 rounded-full p-1"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <HoverBorderGradient
            as="button"
            containerClassName="hidden md:flex"
            className="flex items-center gap-2 font-medium whitespace-nowrap"
            data-cal-link="erik-neinstel-mshw1t/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Erstgespräch
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </HoverBorderGradient>

          {/* Hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            <span
              className="block w-5 h-[1.5px] bg-white origin-center transition-all duration-250"
              style={{ transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-5 h-[1.5px] bg-white transition-opacity duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-5 h-[1.5px] bg-white origin-center transition-all duration-250"
              style={{ transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(255,255,255,0.08)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3.5 text-sm text-white/70 hover:text-white transition-colors border-b"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                {label}
              </a>
            ))}
            <HoverBorderGradient
              as="button"
              containerClassName="mt-4 w-full justify-center"
              className="font-medium w-full text-center"
              data-cal-link="erik-neinstel-mshw1t/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Erstgespräch
            </HoverBorderGradient>
          </div>
        </div>
      )}
    </header>
  );
}
