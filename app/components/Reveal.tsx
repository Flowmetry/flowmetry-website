"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // mounted: false on server → no animation styles → content visible by default
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Skip animation entirely
      return;
    }

    // Check if element is already in the viewport at page load
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight * 0.95;

    if (alreadyVisible) {
      // Don't animate items already in view — just show them
      return;
    }

    // Element is below the fold — enable animation
    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Until mounted on client: no inline styles → content is fully visible (SSR-safe)
  const style =
    mounted
      ? {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(14px)",
          transition: `opacity 520ms ease ${delay}ms, transform 520ms ease ${delay}ms`,
        }
      : undefined;

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
