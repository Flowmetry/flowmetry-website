import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
  'rounded-2xl border text-[#1C1614]',
  {
    variants: {
      variant: {
        default: 'bg-white border-[rgba(28,22,20,0.08)] shadow-sm',
        soft:    'bg-[rgba(249,246,243,0.7)] border-[rgba(28,22,20,0.06)]',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant }), className)} {...props} />
  )
)
Card.displayName = 'Card'

export { Card }
