import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CatalogueBrowser } from '@/components/catalogue-browser'
import {
  PageBackdrop,
  PageCta,
  PageHero,
  primaryButtonClass,
  secondaryButtonClass,
} from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { catalogueCategories, products } from '@/lib/catalogue'
import { quoteHref } from '@/lib/quote'

const description =
  'IT hardware from EZAC Technologies: laptops and computers, servers, networking equipment, accessories, CCTV and security equipment, and IT infrastructure — quoted on request.'

export const metadata: Metadata = {
  title: 'IT Hardware Catalogue',
  description,
  alternates: {
    canonical: 'https://www.ezactechnologies.com/catalogue',
  },
  openGraph: {
    title: 'IT Hardware Catalogue | EZAC Technologies',
    description,
    url: 'https://www.ezactechnologies.com/catalogue',
    siteName: 'EZAC Technologies',
    type: 'website',
  },
}

export default function CataloguePage() {
  const hasProducts = products.length > 0

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      <PageBackdrop />

      <PageHero
        eyebrow="Pricing & Catalogue"
        title="IT hardware"
        highlight="catalogue."
        description="Technology hardware for businesses — from computers and servers to networking, CCTV and IT infrastructure. Request a quotation for the equipment you need."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={quoteHref('IT & Hardware', 'IT hardware quotation')} className={primaryButtonClass}>
            Request a Quote
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <Link href="/pricing#it-and-hardware" className={secondaryButtonClass}>
            IT &amp; Hardware Services Pricing
          </Link>
        </div>
      </PageHero>

      <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        {hasProducts ? (
          <CatalogueBrowser
            products={products}
            categories={catalogueCategories.map(({ id, title }) => ({
              id,
              title,
            }))}
          />
        ) : (
          <>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {catalogueCategories.map((category, index) => {
                const Icon = category.icon

                return (
                  <Reveal as="li" key={category.id} delay={index * 60}>
                    <div className="group flex h-full flex-col rounded-2xl border border-sky-900/40 bg-[#040b1b]/80 p-7 transition-all duration-300 hover:border-sky-400/25">
                      <span className="flex size-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.06] text-sky-400">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <h2 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-white">
                        {category.title}
                      </h2>
                      <a
                        href={quoteHref('IT & Hardware', category.title)}
                        aria-label={`Request a quote for ${category.title}`}
                        className="group/link mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-sky-400 hover:text-sky-300"
                      >
                        Request a Quote
                        <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
                      </a>
                    </div>
                  </Reveal>
                )
              })}
            </ul>

            <p className="mt-10 max-w-2xl text-sm leading-6 text-slate-400">
              Hardware procurement is quoted separately based on your
              requirements. Tell us the equipment, quantities and any preferred
              brands, and we&apos;ll prepare a quotation.
            </p>
          </>
        )}
      </section>

      <PageCta
        eyebrow="Business Quotations"
        title="Equipping an office"
        highlight="or a whole site?"
        description="Share your requirements and we'll prepare a quotation covering hardware, setup and support."
      >
        <a href={quoteHref('IT & Hardware', 'IT hardware quotation')} className={primaryButtonClass}>
          Request a Quote
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </a>
        <Link href="/services/it-and-hardware" className={secondaryButtonClass}>
          IT &amp; Hardware Services
        </Link>
      </PageCta>
    </div>
  )
}
