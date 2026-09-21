import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GlowButton } from '@/components/glow-button'

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020817] py-24 sm:py-32"
    >
     

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main atmospheric glow */}
        <div className="absolute left-[15%] top-[20%] h-[550px] w-[550px] rounded-full bg-sky-500/[0.035] blur-[150px]" />

        {/* Right glow */}
        <div className="absolute -right-40 top-[30%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[150px]" />

        {/* Subtle architectural grid */}
        <div
          className="
            absolute inset-0 opacity-[0.018]
            [background-image:linear-gradient(rgba(56,189,248,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.5)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      

        <Reveal>
          <div className="mb-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-sky-400" />

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-[#7bc4ff]/80">
                About EZAC
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Turning ideas into
              <span className="block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                digital impact.
              </span>
            </h2>
          </div>
        </Reveal>

        

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

       

          <div>
            <Reveal delay={60}>
              <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                EZAC Technologies is a technology and software solutions
                company focused on helping businesses turn ideas into
                practical, scalable and user-focused digital products.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                From modern websites and mobile applications to custom
                software and intelligent automation, we build technology
                around real business needs — not the other way around.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                From concept to development and deployment, we work closely
                with our clients to understand their goals, identify the
                right technology and create solutions designed for reliability,
                usability and long-term growth.
              </p>
            </Reveal>

           

            <Reveal delay={180} className="mt-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600">
                  What we focus on
                </span>

                <span className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">

                {/* Item 01 */}
                <div className="group flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-400/[0.04]">
                    <CheckCircle2
                      className="size-4 text-sky-400"
                      strokeWidth={1.6}
                    />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-slate-200 transition-colors group-hover:text-white">
                      Business-Focused Solutions
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Technology designed around your goals and workflows.
                    </p>
                  </div>
                </div>

                {/* Item 02 */}
                <div className="group flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-400/[0.04]">
                    <CheckCircle2
                      className="size-4 text-sky-400"
                      strokeWidth={1.6}
                    />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-slate-200 transition-colors group-hover:text-white">
                      Modern Technology
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Scalable solutions built with current technologies.
                    </p>
                  </div>
                </div>

                {/* Item 03 */}
                <div className="group flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-400/[0.04]">
                    <CheckCircle2
                      className="size-4 text-sky-400"
                      strokeWidth={1.6}
                    />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-slate-200 transition-colors group-hover:text-white">
                      User-Centered Development
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Interfaces and experiences built with users in mind.
                    </p>
                  </div>
                </div>

                {/* Item 04 */}
                <div className="group flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-400/[0.04]">
                    <CheckCircle2
                      className="size-4 text-sky-400"
                      strokeWidth={1.6}
                    />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-slate-200 transition-colors group-hover:text-white">
                      Long-Term Partnership
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Solutions designed to grow with your business.
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>

         

            <Reveal delay={220} className="mt-10">
          <a
  href="#contact"
  className="
    group inline-flex items-center justify-center gap-2
    h-[40px]
    rounded-2xl
    bg-[#078cff]
    px-5
    text-[13px]
    font-semibold
    text-white
    shadow-[0_0_18px_rgba(0,140,255,0.25)]
    transition-all duration-300
    hover:-translate-y-0.5
    hover:bg-[#159cff]
    hover:shadow-[0_0_28px_rgba(0,140,255,0.4)]
  "
>
  Work With Us
  <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
</a>
            </Reveal>
          </div>


          <Reveal delay={120}>
            <div className="relative">

              {/* Image glow */}
              <div className="pointer-events-none absolute right-[10%] top-[10%] h-[350px] w-[350px] rounded-full bg-sky-400/[0.06] blur-[100px]" />

              {/* Image container */}
              <div
                className="
                  relative overflow-hidden rounded-3xl
                  border border-sky-900/40
                  bg-[#040b1b]/80
                  shadow-[0_30px_100px_-50px_rgba(56,189,248,0.35)]
                  backdrop-blur-xl
                "
              >
                {/* Decorative top line */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

                <Image
                  src="/about-visual.png"
                  alt="Abstract network of glowing blue nodes representing digital transformation"
                  width={900}
                  height={720}
                  className="h-auto w-full opacity-90"
                />

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020817]/50 via-transparent to-transparent" />

                {/* Corner label */}
                <div className="absolute left-6 top-6 flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-sky-400">
                    01
                  </span>

                  <span className="h-px w-8 bg-sky-400/40" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
                    Digital Transformation
                  </span>
                </div>
              </div>

              

              <div className="mt-5 grid grid-cols-2 gap-4">

                <div
                  className="
                    rounded-xl
                    border border-white/[0.07]
                    bg-[#030918]/80
                    p-5
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-sky-400/20
                    hover:bg-sky-400/[0.03]
                  "
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-5 bg-sky-400/60" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                      Technology
                    </span>
                  </div>

                  <p className="text-sm font-medium text-slate-200">
                    Modern Technology
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Modern tools and development practices for reliable digital
                    solutions.
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border border-white/[0.07]
                    bg-[#030918]/80
                    p-5
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-sky-400/20
                    hover:bg-sky-400/[0.03]
                  "
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-5 bg-sky-400/60" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                      Innovation
                    </span>
                  </div>

                  <p className="text-sm font-medium text-slate-200">
                    Practical Innovation
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
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
