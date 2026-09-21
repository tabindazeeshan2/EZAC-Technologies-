'use client'

import {
  ArrowRight,
  Code2,
  Lightbulb,
  TrendingUp,
  Users,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { GlowButton } from '@/components/glow-button'
import { Logo } from '@/components/logo'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020817] pt-[76px] text-white"
    >
      {/* ========================================
          CLEAN GRADIENT BACKGROUND
          No circles
          No grid
          No diagonal lines
          No decorative lines
          ======================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Solid base */}
        <div className="absolute inset-0 bg-[#020817]" />

        {/* Soft blue atmospheric gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse 70% 60% at 12% 45%,
                rgba(7, 85, 180, 0.16) 0%,
                rgba(7, 85, 180, 0.07) 40%,
                transparent 75%
              ),
              radial-gradient(
                ellipse 60% 55% at 88% 30%,
                rgba(0, 110, 220, 0.12) 0%,
                rgba(0, 90, 190, 0.04) 45%,
                transparent 75%
              ),
              linear-gradient(
                135deg,
                #020817 0%,
                #031124 45%,
                #020817 100%
              )
            `,
          }}
        />

        {/* Very subtle overall lighting */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.015), transparent 35%, rgba(0,0,0,0.08) 100%)',
          }}
        />
      </div>

      {/* ========================================
          MAIN CONTENT
          ======================================== */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] max-w-[1200px] flex-col px-6 pb-16 pt-10 sm:px-8 lg:pt-16">
        {/* ======================================
            HERO TWO-COLUMN AREA
            ====================================== */}

        <div className="flex flex-1 flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* ====================================
              LEFT — TEXT CONTENT
              ==================================== */}

          <div className="flex max-w-[560px] flex-col items-center text-center lg:items-start lg:text-left">
            {/* Eyebrow */}
            <div className="mb-6">
              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#7bc4ff]/80">
                Driven by Innovation
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-balance text-[36px] font-bold leading-[1.1] tracking-tight text-white sm:text-[44px] md:text-[50px] lg:text-[54px]">
              Building Smart Solutions
              <br />
              for a{' '}
              <span className="bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                Better Tomorrow
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[440px] text-[15.5px] leading-relaxed text-white/55 sm:text-[16.5px]">
              We transform ideas into powerful digital products that help
              businesses grow, scale, and succeed in the digital era.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:gap-4">
              <GlowButton
                href="#contact"
                size="lg"
                className="h-[52px] min-w-[170px] rounded-full bg-[#078cff] px-8 text-[15px] font-semibold transition-all duration-300 hover:bg-[#1a9aff]"
              >
                Get Started

                <ArrowRight className="ml-2 size-4" />
              </GlowButton>

              <GlowButton
                href="#services"
                size="lg"
                variant="outline"
                className="h-[52px] min-w-[170px] rounded-full border-white/12 bg-white/[0.03] px-7 text-[15px] backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07]"
              >
                Explore Services
              </GlowButton>
            </div>
          </div>

          {/* ====================================
              RIGHT — LARGE LOGO
              ==================================== */}

          <div className="relative flex shrink-0 items-center justify-center">
            <Logo
              size="hero"
              showWordmark={false}
            />
          </div>
        </div>

        {/* ======================================
            FEATURE STRIP
            ====================================== */}

        <div className="mt-16 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          <FeatureCard
            icon={<Lightbulb className="size-5" />}
            title="Innovate"
            description="Turn ideas into products"
          />

          <FeatureCard
            icon={<Code2 className="size-5" />}
            title="Build"
            description="Reliable technology"
          />

          <FeatureCard
            icon={<TrendingUp className="size-5" />}
            title="Elevate"
            description="Grow with you"
          />

          <FeatureCard
            icon={<Users className="size-5" />}
            title="Partner"
            description="Long-term success"
          />
        </div>
      </div>
    </section>
  )
}

/* ============================================
   FEATURE CARD
   ============================================ */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
      {/* Icon */}
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#079cff] transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06]">
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-[14.5px] font-semibold text-white">
          {title}
        </p>

        <p className="mt-0.5 text-[13px] text-white/40">
          {description}
        </p>
      </div>
    </div>
  )
}