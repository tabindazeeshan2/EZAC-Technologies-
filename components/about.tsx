import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GlowButton } from '@/components/glow-button'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-secondary/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <Reveal
              as="p"
              className="text-xs font-semibold tracking-[0.2em] text-brand-bright uppercase"
            >
              About EZAC
            </Reveal>

            <Reveal
              as="h2"
              delay={60}
              className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Turning Ideas Into Digital Impact
            </Reveal>

            <Reveal
              as="p"
              delay={120}
              className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground"
            >
              EZAC Technologies is a technology and software solutions company
              focused on helping businesses turn ideas into practical,
              scalable and user-focused digital products. We build modern
              websites, mobile applications, custom software and intelligent
              automation solutions designed around real business needs.
            </Reveal>

            <Reveal
              as="p"
              delay={160}
              className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground"
            >
              From an initial concept to development and deployment, we work
              closely with our clients to understand their goals, identify the
              right technology and create solutions that are reliable,
              intuitive and built for long-term growth.
            </Reveal>

            <Reveal
              as="p"
              delay={200}
              className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground"
            >
              Our approach combines technical expertise, creative thinking and
              a strong focus on user experience. Whether you are establishing
              your digital presence, improving an existing product or
              automating repetitive business processes, we aim to make
              technology work for your business.
            </Reveal>

            {/* Focus Points */}
            <Reveal delay={240} className="mt-7">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-bright" />
                  <div>
                    <p className="text-sm font-semibold">
                      Business-Focused Solutions
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Technology designed around your goals and workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-bright" />
                  <div>
                    <p className="text-sm font-semibold">
                      Modern Technology
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Scalable solutions built with current technologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-bright" />
                  <div>
                    <p className="text-sm font-semibold">
                      User-Centered Development
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Interfaces and experiences built with users in mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-bright" />
                  <div>
                    <p className="text-sm font-semibold">
                      Long-Term Partnership
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      We focus on solutions that can grow with your business.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={280} className="mt-8">
              <GlowButton href="#contact" size="lg">
                Work With Us
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </GlowButton>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={120}>
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-brand/10 blur-3xl" />

              <div className="overflow-hidden rounded-2xl border border-border bg-card/40 shadow-2xl backdrop-blur-sm">
                <Image
                  src="/about-visual.png"
                  alt="Abstract network of glowing blue nodes representing digital transformation"
                  width={900}
                  height={720}
                  className="h-auto w-full"
                />
              </div>

              {/* Supporting information */}
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold">Technology</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Modern tools and development practices for reliable digital
                    solutions.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold">Innovation</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Practical ideas that help businesses improve, adapt and
                    grow.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}