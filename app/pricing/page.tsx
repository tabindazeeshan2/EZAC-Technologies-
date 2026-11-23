import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Boxes, Info } from 'lucide-react'
import {
  PageBackdrop,
  PageCta,
  PageHero,
  primaryButtonClass,
  secondaryButtonClass,
} from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import {
  currencyNote,
  pricingCategories,
  pricingIntro,
  pricingNotes,
  type PricedService,
  type PricingCategory,
  type PricingPackage,
} from '@/lib/pricing'
import { quoteHref } from '@/lib/quote'
import { cn } from '@/lib/utils'

const description =
  'Indicative PKR and USD pricing for EZAC Technologies services: digital products, software, AI & automation, cloud, IT & hardware, and security & data.'

export const metadata: Metadata = {
  title: 'Pricing & Service Packages',
  description,
  alternates: {
    canonical: 'https://www.ezactechnologies.com/pricing',
  },
  openGraph: {
    title: 'Pricing & Service Packages | EZAC Technologies',
    description,
    url: 'https://www.ezactechnologies.com/pricing',
    siteName: 'EZAC Technologies',
    type: 'website',
  },
}

export default function PricingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      <PageBackdrop />

      <PageHero
        eyebrow="Pricing & Catalogue"
        title="Services &"
        highlight="indicative pricing."
        description={pricingIntro}
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={quoteHref()} className={primaryButtonClass}>
            Request a Quote
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <Link href="/catalogue" className={secondaryButtonClass}>
            IT Hardware Catalogue
          </Link>
        </div>
      </PageHero>

      {/* Category index */}
      <nav
        aria-label="Service categories"
        className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10"
      >
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pricingCategories.map((category) => (
            <li key={category.id}>
              <a
                href={`#${category.id}`}
                className="group flex items-center gap-4 rounded-xl border border-white/[0.07] border-t-sky-400/40 bg-[#040b1b]/70 px-5 py-4 transition-all hover:border-sky-400/25 hover:bg-sky-400/[0.04]"
              >
                <span className="font-mono text-lg font-semibold text-sky-400">
                  {category.number}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-white">
                    {category.title}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">
                    {category.services.length} services
                  </span>
                </span>
                <ArrowRight className="size-4 rotate-90 text-slate-600 transition-colors group-hover:text-sky-400" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Price tables */}
      <div className="relative mx-auto max-w-7xl space-y-20 px-5 pb-20 sm:px-8 lg:px-10">
        {pricingCategories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </div>

      {/* Notes */}
      <section className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        <Reveal>
          <div className="rounded-2xl border border-white/[0.07] border-l-2 border-l-sky-400 bg-[#040b1b]/70 p-7 sm:p-9">
            <h2 className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400">
              <Info className="size-3.5" />
              Pricing Notes
            </h2>
            <ul className="mt-5 space-y-3">
              {pricingNotes.map((note) => (
                <li key={note} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <span className="mt-2 size-1.5 shrink-0 rounded-[2px] bg-sky-400" />
                  {note}
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-white/[0.07] pt-6">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400">
                * Currency
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {currencyNote}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Catalogue teaser */}
      <section className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        <Reveal>
          <Link
            href="/catalogue"
            className="group flex flex-col gap-6 rounded-2xl border border-sky-900/40 bg-[#040b1b]/80 p-7 transition-all hover:border-sky-400/25 sm:flex-row sm:items-center sm:p-9"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.06] text-sky-400">
              <Boxes className="size-5" strokeWidth={1.5} />
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-white">
                Looking for IT hardware?
              </h2>
              <p className="mt-1.5 text-sm leading-6 text-slate-400">
                Browse our IT hardware catalogue — laptops, servers, networking,
                accessories, CCTV and infrastructure, quoted on request.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400">
              Explore Catalogue
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </section>

      <PageCta
        eyebrow="Tailored Quotation"
        title="Need something"
        highlight="custom?"
        description="Custom or larger projects receive a tailored quotation. Share your requirements and we'll get back to you."
      >
        <a href={quoteHref()} className={primaryButtonClass}>
          Request a Quote
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </a>
        <Link href="/work" className={secondaryButtonClass}>
          See Our Work
        </Link>
      </PageCta>
    </div>
  )
}

function CategorySection({ category }: { category: PricingCategory }) {
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      className="scroll-mt-28"
    >
      <Reveal>
        <div className="flex flex-col gap-4 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-4xl font-semibold text-sky-400 sm:text-5xl">
              {category.number}
            </span>
            <h2
              id={`${category.id}-title`}
              className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl"
            >
              {category.title}
            </h2>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
              {category.services.length} services
            </span>
            <Link
              href={category.serviceHref}
              className="text-slate-400 transition-colors hover:text-sky-400"
            >
              Learn more
            </Link>
          </div>
        </div>
      </Reveal>

      {category.packages && category.packages.length > 0 && (
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {category.packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} category={category} />
          ))}
        </div>
      )}

      <Reveal delay={80}>
        <div className="mt-6 overflow-hidden rounded-2xl border border-sky-900/40 bg-[#040b1b]/75">
          {/* Column headings (desktop) */}
          <div
            aria-hidden="true"
            className="hidden grid-cols-[1fr_220px_180px_150px] gap-4 bg-[#0b1a30] px-6 py-3.5 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-300 md:grid"
          >
            <span>Service</span>
            <span className="text-right">Price (PKR)</span>
            <span className="text-right">Price (USD)*</span>
            <span className="sr-only">Action</span>
          </div>

          <ul>
            {category.services.map((service, index) => (
              <ServiceRow
                key={service.name}
                service={service}
                category={category}
                striped={index % 2 === 1}
              />
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

function UnitSuffix({ unit }: { unit?: string }) {
  if (!unit) return null
  return <span className="text-sm font-normal text-sky-400">/{unit}</span>
}

function ServiceRow({
  service,
  category,
  striped,
}: {
  service: PricedService
  category: PricingCategory
  striped: boolean
}) {
  const { price } = service

  return (
    <li
      className={cn(
        'grid grid-cols-1 gap-2 border-t border-white/[0.05] px-6 py-4 first:border-t-0 md:grid-cols-[1fr_220px_180px_150px] md:items-center md:gap-4',
        striped && 'bg-white/[0.015]'
      )}
    >
      <span className="text-[15px] font-medium text-slate-100">
        {service.name}
      </span>

      {price.kind === 'range' ? (
        <>
          <span className="text-left md:text-right">
            <span className="mr-2 text-[11px] uppercase tracking-wider text-slate-500 md:hidden">
              PKR
            </span>
            <span className="hidden text-xs text-slate-500 md:inline">PKR </span>
            <span className="font-semibold text-white">{price.pkr}</span>
            <UnitSuffix unit={price.unit} />
          </span>
          <span className="text-left text-slate-300 md:text-right">
            <span className="mr-2 text-[11px] uppercase tracking-wider text-slate-500 md:hidden">
              USD*
            </span>
            {price.usd ? (
              <>
                <span className="hidden text-xs text-slate-500 md:inline">USD </span>
                <span className="font-semibold">{price.usd}</span>
                <UnitSuffix unit={price.unit} />
              </>
            ) : (
              <span className="italic text-slate-400">Contact for Pricing</span>
            )}
          </span>
        </>
      ) : (
        <>
          <span className="text-left italic text-slate-200 md:text-right">
            <span className="mr-2 text-[11px] not-italic uppercase tracking-wider text-slate-500 md:hidden">
              PKR
            </span>
            {price.pkrLabel}
          </span>
          <span className="text-left italic text-slate-400 md:text-right">
            <span className="mr-2 text-[11px] not-italic uppercase tracking-wider text-slate-500 md:hidden">
              USD*
            </span>
            {price.usdLabel}
          </span>
        </>
      )}

      <a
        href={quoteHref(category.contactService, service.name)}
        aria-label={`Request a quote for ${service.name}`}
        className="group mt-1 inline-flex items-center gap-1 text-[13px] font-medium text-sky-400 transition-colors hover:text-sky-300 md:mt-0 md:justify-self-end"
      >
        Request a Quote
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </a>
    </li>
  )
}

function PackageCard({
  pkg,
  category,
}: {
  pkg: PricingPackage
  category: PricingCategory
}) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl border bg-[#040b1b]/80 p-7',
        pkg.highlighted
          ? 'border-sky-400/35 shadow-[0_30px_80px_-45px_rgba(56,189,248,0.5)]'
          : 'border-sky-900/40'
      )}
    >
      <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
      <p className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white">
        {pkg.pricePkr ?? (
          <span className="text-base font-medium italic text-slate-400">
            Price to be added
          </span>
        )}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{pkg.description}</p>

      <ul className="mt-6 space-y-2.5">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex gap-2.5 text-sm text-slate-300">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-400" />
            {feature}
          </li>
        ))}
      </ul>

      {pkg.delivery && (
        <p className="mt-6 text-xs text-slate-500">
          Delivery: <span className="text-slate-300">{pkg.delivery}</span>
        </p>
      )}

      <div className="h-7 shrink-0" aria-hidden="true" />

      <a
        href={quoteHref(category.contactService, `${category.title} — ${pkg.name} package`)}
        className={cn(primaryButtonClass, 'mt-auto w-full')}
      >
        Request a Quote
      </a>
    </div>
  )
}
