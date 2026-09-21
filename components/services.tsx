import { Check, Terminal } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/site-config'

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Digital solutions built to grow your business"
          subtitle="Digital solutions designed to help businesses build, automate and grow."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon

            return (
              <Reveal key={service.id} delay={i * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-sky-900/40 bg-[#070e24]/90 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/60 hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)]">
                  
                  {/* Cyber Corner Markers */}
                  <div className="absolute left-0 top-0 size-2 border-l-2 border-t-2 border-sky-400 opacity-40 transition-opacity group-hover:opacity-100" />
                  <div className="absolute right-0 top-0 size-2 border-r-2 border-t-2 border-sky-400 opacity-40 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 size-2 border-b-2 border-l-2 border-sky-400 opacity-40 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 right-0 size-2 border-b-2 border-r-2 border-sky-400 opacity-40 transition-opacity group-hover:opacity-100" />

                  <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,rgba(56,189,248,0.05)_50%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* FIXED TOP SECTION (Icon + Title + Description) */}
                  <div className="flex flex-col h-[220px]">
                    <div className="flex items-start justify-between">
                      <div className="relative inline-flex size-12 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-950/70 text-sky-400 shadow-[inset_0_0_12px_rgba(56,189,248,0.2)] transition-all duration-300 group-hover:scale-105 group-hover:border-sky-400 group-hover:bg-sky-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(56,189,248,0.8)]">
                        <Icon className="size-5.5 transition-transform duration-300 group-hover:rotate-3" />
                      </div>

                      <div className="flex items-center gap-1 font-mono text-xs font-semibold text-sky-500/60">
                        <Terminal className="size-3" />
                        <span>{service.number}</span>
                      </div>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-sky-300">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                  </div>

                  {/* PERFECTLY ALIGNED DIVIDER LINE & LIST */}
                  <div className="border-t border-sky-900/30 pt-5">
                    <ul className="space-y-2.5">
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2.5 text-[13px] text-slate-300"
                        >
                          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/30">
                            <Check className="size-2.5 stroke-[2.5]" />
                          </span>
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}