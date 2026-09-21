import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60'

const sizes = {
  md: 'h-11 px-6',
  lg: 'h-12 px-7 text-[0.95rem]',
}

const variants = {
  primary:
    'bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(0,108,255,0.5),0_8px_30px_-8px_rgba(0,108,255,0.7)] hover:bg-brand-bright hover:shadow-[0_0_0_1px_rgba(22,131,255,0.7),0_10px_40px_-6px_rgba(22,131,255,0.9)] hover:-translate-y-0.5',
  outline:
    'border border-border bg-white/[0.02] text-foreground backdrop-blur-sm hover:border-brand/60 hover:bg-brand/10 hover:-translate-y-0.5',
}

type GlowButtonProps = {
  children: ReactNode
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
} & ComponentProps<'a'>

export function GlowButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: GlowButtonProps) {
  return (
    <a
      className={cn(
        base,
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}