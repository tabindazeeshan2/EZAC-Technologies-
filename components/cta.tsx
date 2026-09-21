import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GlowButton } from '@/components/glow-button'

export function CTA() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* background visual */}
            <Image
              src="/cta-bg.png"
              alt=""
              fill
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 object-cover opacity-50"
            />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/20 to-background/70" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-64 w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[120px] motion-safe:animate-pulse-glow" />
            {/* light trail */}
            <div className="pointer-events-none absolute top-1/3 left-0 -z-10 h-px w-1/2 bg-gradient-to-r from-transparent via-brand-bright to-transparent motion-safe:animate-trail" />

            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Have an Idea? Let&apos;s Build It.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whether you have a clear project in mind or simply want to explore
              what&apos;s possible, let&apos;s talk.
            </p>

            <div className="mt-9 flex justify-center">
              <GlowButton href="#contact" size="lg">
                Start a Conversation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </GlowButton>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Let&apos;s turn your idea into a digital solution.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
