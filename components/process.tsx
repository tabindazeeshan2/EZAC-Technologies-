import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { processSteps } from '@/lib/site-config'

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Approach"
          title="How We Build"
          subtitle="From the first idea to a practical digital solution."
        />

        <div className="relative mt-16">
          {/* horizontal connector (desktop) */}
          <div
            className="pointer-events-none absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block"
            aria-hidden="true"
          />
          {/* vertical connector (mobile) */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-transparent via-brand/40 to-transparent lg:hidden"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} as="li" delay={i * 100} className="relative pl-20 lg:pl-0">
                <div className="flex size-12 items-center justify-center rounded-full border border-brand/40 bg-background text-sm font-bold text-brand-bright shadow-[0_0_24px_-6px_rgba(0,108,255,0.8)] max-lg:absolute max-lg:left-0">
                  {step.number}
                </div>
                <h3 className="mt-0 text-lg font-semibold text-foreground lg:mt-6">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
