'use client';

import React, { useState } from 'react';
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
  ...props
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState(false);

  const Tag = Element as React.ComponentType<Record<string, unknown>>;

  return (
    <Tag
      className={cn(
        'relative flex h-min w-fit items-center justify-center rounded-full transition-all duration-200',
        containerClassName
      )}
      style={{
        background: hovered ? 'rgba(205,155,123,0.12)' : 'rgba(205,155,123,0.06)',
        border: `1px solid rgba(205,155,123,${hovered ? '0.5' : '0.25'})`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      {...props}
    >
      <div className={cn('relative z-10 px-6 py-3 text-sm text-[#1C1614]', className)}>
        {children}
      </div>
    </Tag>
  );
}
