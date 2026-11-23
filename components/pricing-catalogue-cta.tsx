import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Boxes, Tags } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  {
    href: '/pricing',
    icon: Tags,
    eyebrow: 'Pricing',
    title: 'Services & indicative pricing',
    description:
      'Indicative PKR and USD pricing across all six of our service areas.',
    cta: 'View pricing',
  },
  {
    href: '/catalogue',
    icon: Boxes,
    eyebrow: 'Catalogue',
    title: 'IT hardware catalogue',
    description:
      'Computers, servers, networking, accessories, CCTV and IT infrastructure — quoted on request.',
    cta: 'Explore catalogue',
  },
]

export function PricingCatalogueCta() {
  return (
    <section className="relative bg-[#020817] pb-8 pt-4 sm:pb-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        {items.map((item, index) => {
          const Icon = item.icon

          return (
            <Reveal key={item.href} delay={index * 80} className="h-full">
              <Link
                href={item.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sky-900/40 bg-[#040b1b]/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/25 sm:p-9"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

                <div className="flex items-start justify-between gap-6">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.06] text-sky-400">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <ArrowUpRight className="size-5 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400" />
                </div>

                <span className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                  {item.eyebrow}
                </span>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                  {item.description}
                </p>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-sky-400">
                  {item.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
