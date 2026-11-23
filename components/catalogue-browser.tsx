'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Package, Search, SearchX } from 'lucide-react'
import type { Availability, Product } from '@/lib/catalogue'
import { quoteHref } from '@/lib/quote'
import { cn } from '@/lib/utils'

const availabilityStyle: Record<Availability, string> = {
  'In Stock': 'border-emerald-400/25 bg-emerald-400/[0.08] text-emerald-300',
  'Available on Order': 'border-sky-400/25 bg-sky-400/[0.08] text-sky-300',
  'Out of Stock': 'border-rose-400/25 bg-rose-400/[0.08] text-rose-300',
  'Contact for Availability': 'border-white/10 bg-white/[0.04] text-slate-300',
}

export function CatalogueBrowser({
  products,
  categories,
}: {
  products: Product[]
  /** Plain { id, title } pairs — icons can't be passed to a client component. */
  categories: { id: string; title: string }[]
}) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('all')

  const categoryTitle = (id: string) =>
    categories.find((c) => c.id === id)?.title ?? id

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()

    return products.filter((product) => {
      if (category !== 'all' && product.category !== category) return false
      if (!q) return true

      return [product.name, product.brand, product.model, ...product.specs]
        .join(' ')
        .toLowerCase()
        .includes(q)
    })
  }, [products, query, category])

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-2"
        >
          {[{ id: 'all', title: 'All' }, ...categories].map((option) => {
            const active = category === option.id

            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(option.id)}
                className={cn(
                  'inline-flex h-9 items-center rounded-xl border px-4 text-[13px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60',
                  active
                    ? 'border-sky-400/30 bg-sky-400/[0.1] text-white'
                    : 'border-white/[0.07] bg-white/[0.02] text-slate-400 hover:border-white/[0.12] hover:text-slate-200'
                )}
              >
                {option.title}
              </button>
            )
          })}
        </div>

        <label className="relative block w-full lg:w-80">
          <span className="sr-only">Search products</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name, brand, model or spec"
            className="h-10 w-full rounded-xl border border-white/[0.08] bg-[#020817]/70 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/20"
          />
        </label>
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} product{visible.length === 1 ? '' : 's'} found
      </p>

      {visible.length === 0 ? (
        <div className="flex flex-col items-center rounded-2xl border border-white/[0.07] bg-white/[0.015] px-6 py-16 text-center">
          <SearchX className="size-8 text-slate-600" strokeWidth={1.5} />
          <p className="mt-4 text-base font-medium text-white">
            No matching products
          </p>
          <p className="mt-2 max-w-sm text-sm text-slate-400">
            Try another search, or ask us for a quote and we&apos;ll source it
            for you.
          </p>
        </div>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <li
              key={product.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-sky-900/40 bg-[#040b1b]/80"
            >
              <div className="relative aspect-[4/3] border-b border-white/[0.06] bg-white/[0.03]">
                {product.image ? (
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-6"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-slate-700">
                    <Package className="size-10" strokeWidth={1.2} aria-hidden="true" />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-sky-400/90">
                    {categoryTitle(product.category)}
                  </span>
                  <span
                    className={cn(
                      'shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-medium',
                      availabilityStyle[product.availability]
                    )}
                  >
                    {product.availability}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-white">
                  {product.name}
                </h3>

                <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                  <div className="flex gap-1">
                    <dt className="text-slate-600">Brand</dt>
                    <dd>{product.brand}</dd>
                  </div>
                  <div className="flex gap-1">
                    <dt className="text-slate-600">Model</dt>
                    <dd>{product.model}</dd>
                  </div>
                </dl>

                {product.specs.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex gap-2 text-sm text-slate-300">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-sky-400/70" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/[0.06] pt-5">
                  <p className="text-base font-semibold text-white">
                    {product.pricePkr ?? (
                      <span className="text-sm font-medium italic text-slate-400">
                        Contact for Pricing
                      </span>
                    )}
                  </p>
                  <a
                    href={quoteHref(
                      'IT & Hardware',
                      `${product.brand} ${product.model} — ${product.name}`
                    )}
                    aria-label={`Request a quote for ${product.name}`}
                    className="group inline-flex shrink-0 items-center gap-1 text-[13px] font-medium text-sky-400 hover:text-sky-300"
                  >
                    Request a Quote
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
