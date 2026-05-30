'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export type TerminalLine =
  | { type: 'command'; text: string }
  | { type: 'success'; text: string }
  | { type: 'info'; text: string; sub?: string }
  | { type: 'output'; text: string };

interface Props {
  lines: TerminalLine[];
  /** ms per character for typing */
  speed?: number;
  /** ms delay between lines appearing */
  lineDelay?: number;
}

export function TerminalWindow({ lines, speed = 38, lineDelay = 280 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });
  const [visible, setVisible] = useState<number>(0);
  const [typed, setTyped] = useState<string>('');
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView) {
      setVisible(0);
      setTyped('');
      setTyping(false);
      return;
    }

    let cancelled = false;

    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    const run = async () => {
      await sleep(300);
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        const line = lines[i];

        if (line.type === 'command') {
          setTyping(true);
          let t = '';
          for (const ch of line.text) {
            if (cancelled) return;
            t += ch;
            setTyped(t);
            await sleep(speed);
          }
          setTyping(false);
          await sleep(180);
          setVisible(i + 1);
          setTyped('');
        } else {
          await sleep(lineDelay);
          if (cancelled) return;
          setVisible(i + 1);
        }

        await sleep(60);
      }
    };

    run();
    return () => { cancelled = true; };
  }, [inView, lines, speed, lineDelay]);

  return (
    <div ref={ref} className="w-full h-full flex flex-col" style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}>
      {/* Chrome */}
      <div
        className="flex items-center gap-1.5 px-4 py-3 flex-shrink-0"
        style={{ background: '#1A1A1A', borderRadius: '10px 10px 0 0' }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57', boxShadow: '0 0 0 0.5px rgba(0,0,0,0.15)' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E', boxShadow: '0 0 0 0.5px rgba(0,0,0,0.15)' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#28C840', boxShadow: '0 0 0 0.5px rgba(0,0,0,0.15)' }} />
        <span className="ml-3 text-[11px] text-white/30 tracking-wide">terminal</span>
      </div>

      {/* Body */}
      <div
        className="flex-1 px-5 py-4 overflow-hidden flex flex-col gap-1.5"
        style={{ background: '#141414', borderRadius: '0 0 10px 10px' }}
      >
        {lines.map((line, i) => {
          const show = i < visible;
          const isCurrentCommand = line.type === 'command' && i === visible && typing;

          if (isCurrentCommand) {
            return (
              <div key={i} className="flex items-center gap-1.5 text-[12px] leading-relaxed">
                <span style={{ color: '#8B4A1E' }}>$</span>
                <span style={{ color: '#E8E8E8' }}>{typed}</span>
                <span
                  className="inline-block w-[7px] h-[13px] ml-0.5"
                  style={{ background: '#8B4A1E', animation: 'blink 1s step-end infinite' }}
                />
              </div>
            );
          }

          if (!show) return null;

          if (line.type === 'command') {
            return (
              <div key={i} className="flex items-center gap-1.5 text-[12px] leading-relaxed">
                <span style={{ color: '#8B4A1E' }}>$</span>
                <span style={{ color: '#E8E8E8' }}>{line.text}</span>
              </div>
            );
          }
          if (line.type === 'success') {
            return (
              <div key={i} className="text-[12px] leading-relaxed" style={{ color: '#4ADE80' }}>
                ✔ {line.text}
              </div>
            );
          }
          if (line.type === 'info') {
            return (
              <div key={i} className="text-[12px] leading-relaxed" style={{ color: '#60A5FA' }}>
                <span>ℹ {line.text}</span>
                {line.sub && <span className="block pl-4 text-[11px] opacity-70">{line.sub}</span>}
              </div>
            );
          }
          if (line.type === 'output') {
            return (
              <div key={i} className="text-[12px] leading-relaxed mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {line.text}
              </div>
            );
          }
          return null;
        })}

        {/* Idle cursor when done */}
        {visible >= lines.length && !typing && (
          <div className="flex items-center gap-1.5 text-[12px]">
            <span style={{ color: '#8B4A1E' }}>$</span>
            <span
              className="inline-block w-[7px] h-[13px]"
              style={{ background: '#8B4A1E', animation: 'blink 1s step-end infinite' }}
            />
          </div>
        )}
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </div>
  );
}
