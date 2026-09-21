import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { whyFeatures } from '@/lib/site-config'

export function WhyEzac() {
  return (
    <section id="why" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why EZAC"
          title="Technology That Works For Your Business"
          subtitle="We focus on building useful technology — solutions that look great, work reliably and solve real business problems."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyFeatures.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={i * 90}>
                <article className="group relative h-full rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand-bright transition-all duration-300 group-hover:shadow-[0_0_24px_-4px_rgba(22,131,255,0.8)]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
