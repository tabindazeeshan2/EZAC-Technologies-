import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  PageBackdrop,
  PageCta,
  PageHero,
  primaryButtonClass,
  secondaryButtonClass,
} from '@/components/page-hero'
import { WorkGrid } from '@/components/work-grid'
import { getActiveProjectCategories, projects } from '@/lib/projects'
import { quoteHref } from '@/lib/quote'

const description =
  'Explore projects designed and built by EZAC Technologies — HR, CRM, AI customer support, AI agents, solar, construction, furniture and manufacturing systems.'

export const metadata: Metadata = {
  title: 'Our Work | Projects & Case Studies',
  description,
  alternates: {
    canonical: 'https://www.ezactechnologies.com/work',
  },
  openGraph: {
    title: 'Our Work | EZAC Technologies',
    description,
    url: 'https://www.ezactechnologies.com/work',
    siteName: 'EZAC Technologies',
    type: 'website',
  },
}

export default function WorkPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      <PageBackdrop />

      <PageHero
        eyebrow="Our Work"
        title="Projects that put"
        highlight="ideas to work."
        description="A selection of software, AI and digital platforms designed and built by EZAC Technologies."
      />

      <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        <WorkGrid
          projects={projects}
          categories={getActiveProjectCategories()}
        />
      </section>

      <PageCta
        eyebrow="Start a Project"
        title="Have a project"
        highlight="in mind?"
        description="Tell us what you want to build and we'll help you plan the right solution."
      >
        <a href={quoteHref()} className={primaryButtonClass}>
          Request a Quote
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </a>
        <Link href="/pricing" className={secondaryButtonClass}>
          View Pricing
        </Link>
      </PageCta>
    </div>
  )
}
