'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { cn } from '@/lib/utils';

type HoverBorderGradientProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
  [key: string]: unknown;
};

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Element = 'button',
  duration = 5,
  ...props
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState(false);
  const rotate = useMotionValue(0);

  useEffect(() => {
    const controls = animate(rotate, 360, {
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    });
    return controls.stop;
  }, [duration]);

  const Tag = Element as React.ComponentType<Record<string, unknown>>;

  return (
    <Tag
      className={cn(
        'relative flex h-min w-fit items-center justify-center rounded-full backdrop-blur-md',
        containerClassName
      )}
      style={{ background: 'rgba(255,255,255,0.05)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      {...props}
    >
      {/*
        CSS-mask trick: padding:1px defines the border channel.
        The mask punches out the content-box, leaving only the 1px rim visible.
        The rotating conic-gradient inside that rim creates the orbiting glow.
      */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          padding: '1px',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      >
        {/* Orbiting arc — always visible */}
        <motion.div
          className="absolute aspect-square w-[200%]"
          style={{
            rotate,
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            background:
              'conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(255,255,255,0.08) 78%, rgba(255,255,255,0.6) 87%, rgba(255,255,255,0.08) 96%, transparent 100%)',
          }}
        />
        {/* Full-border fill — fades in on hover / touch */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'rgba(255,255,255,0.55)',
            filter: 'blur(1px)',
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className={cn('relative z-10 px-6 py-3 text-sm text-white', className)}>
        {children}
      </div>
    </Tag>
  );
}
