import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

/** Ambient glow + grid background used behind inner pages. */
export function PageBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-300px] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-sky-500/[0.055] blur-[180px]" />
      <div className="absolute -right-48 top-[28%] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.025] blur-[170px]" />
      <div className="absolute -left-48 bottom-[8%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.025] blur-[170px]" />
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.5) 1px,transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />
    </div>
  )
}

/** Eyebrow line used across the site: "—— LABEL". */
export function Eyebrow({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-9 bg-gradient-to-r from-sky-400 to-transparent" />
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-sky-400">
        {children}
      </span>
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  eyebrow: string
  title: string
  highlight: string
  description: string
  children?: ReactNode
}) {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40 lg:px-10">
      <Reveal>
        <Eyebrow className="mb-7">{eyebrow}</Eyebrow>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
          {title}
          <span className="block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text pb-1 text-transparent">
            {highlight}
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>

        {children}
      </Reveal>
    </section>
  )
}

/** Closing call-to-action panel for inner pages. */
export function PageCta({
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  eyebrow: string
  title: string
  highlight: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-sky-900/40 bg-[#040b1b]/85 px-7 py-14 text-center shadow-[0_30px_100px_-55px_rgba(56,189,248,0.35)] backdrop-blur-xl sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.035] blur-[110px]" />

          <div className="relative">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-sky-400/50" />
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-sky-300/70">
                {eyebrow}
              </span>
              <span className="h-px w-7 bg-sky-400/50" />
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              {title}
              <br />
              <span className="bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                {highlight}
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {children}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export const primaryButtonClass =
  'group inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#078cff] px-5 text-[13px] font-semibold text-white shadow-[0_0_18px_rgba(0,140,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#159cff] hover:shadow-[0_0_28px_rgba(0,140,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60'

export const secondaryButtonClass =
  'group inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-white/[0.09] bg-white/[0.02] px-5 text-[13px] font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/30 hover:bg-sky-400/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60'
