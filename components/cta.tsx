
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-24 sm:py-32">

 

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main glow */}
        <div className="absolute left-1/2 top-[35%] h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/[0.035] blur-[160px]" />

        {/* Side glow */}
        <div className="absolute -right-40 top-[20%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.025] blur-[150px]" />

        {/* Grid */}
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
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              border border-sky-900/40
              bg-[#040b1b]/80
              shadow-[0_30px_100px_-50px_rgba(56,189,248,0.35)]
              backdrop-blur-xl
            "
          >


            {/* Top line */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

            {/* Vertical architectural line */}
            <div className="pointer-events-none absolute right-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-sky-400/[0.08] to-transparent" />

            {/* Secondary vertical line */}
            <div className="pointer-events-none absolute right-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-sky-400/[0.04] to-transparent" />

            {/* Decorative glow */}
            <div className="pointer-events-none absolute right-[5%] top-[15%] h-[400px] w-[400px] rounded-full bg-sky-400/[0.04] blur-[100px]" />

            <div className="relative px-7 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">

             

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-sky-400" />

                <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#7bc4ff]/80">
                  Start a Conversation
                </span>
              </div>

              

              <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-end">

                {/* Heading */}
                <div>
                  <h2
                    className="
                      max-w-4xl
                      text-4xl font-semibold
                      tracking-[-0.04em]
                      text-white
                      sm:text-5xl
                      lg:text-6xl
                    "
                  >
                    Have an idea?
                    <span className="block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                      Let&apos;s build it.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                    Whether you have a clear project in mind or simply want
                    to explore what&apos;s possible, let&apos;s talk.
                  </p>
                </div>

                {/* Side statement */}
                <div className="hidden border-l border-white/[0.08] pl-7 lg:block">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
                    Our approach
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
                    <span>Ideas</span>

                    <ArrowRight className="size-3 text-sky-400" />

                    <span>Solutions</span>

                    <ArrowRight className="size-3 text-sky-400" />

                    <span>Growth</span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    Technology designed around your goals, users and
                    business needs.
                  </p>
                </div>
              </div>

             

              <div className="mt-12 flex flex-col gap-6 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center sm:justify-between">

              

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
                  Start a Conversation

                  <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
                </a>

              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}

