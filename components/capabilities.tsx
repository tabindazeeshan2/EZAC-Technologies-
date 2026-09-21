import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { GlowButton } from '@/components/glow-button'
import { capabilities } from '@/lib/site-config'

export function Capabilities() {
  return (
    <section id="build" className="relative overflow-hidden py-24 sm:py-32">
      {/* Visual Background Layers */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.03] to-transparent" />
      
      {/* Background Radial Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[550px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/4 right-10 -z-10 h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />

      {/* Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Can Build"
          title="Ideas Into Digital Solutions"
          subtitle="Whether you're starting from an idea or looking to improve an existing process, we build technology around your goals."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <Reveal key={cap.title} delay={i * 90}>
                <article className="group relative flex h-full items-start gap-5 overflow-hidden rounded-2xl border border-border/80 bg-card/40 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-card/70 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-brand/5">
                  
                  {/* Subtle Gradient Glow Corner on Hover */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-all duration-500 group-hover:bg-brand/25" />

                  {/* Icon Container with Glow */}
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1 rounded-xl bg-brand/30 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative inline-flex size-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand-bright transition-all duration-300 group-hover:scale-105 group-hover:border-brand/60 group-hover:bg-brand/20 group-hover:shadow-[0_0_24px_-4px_rgba(22,131,255,0.8)]">
                      <Icon className="size-6 transition-transform duration-300 group-hover:rotate-3" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-brand-bright">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-justify text-muted-foreground/90">
                      {cap.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 flex justify-center" delay={120}>
          <GlowButton href="#contact" size="lg" className="group">
            Discuss Your Idea
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </GlowButton>
        </Reveal>
      </div>
    </section>
  )
}