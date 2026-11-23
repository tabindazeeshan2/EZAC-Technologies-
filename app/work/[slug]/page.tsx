import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import {
  Eyebrow,
  PageBackdrop,
  PageCta,
  primaryButtonClass,
  secondaryButtonClass,
} from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { getProject, projects } from '@/lib/projects'
import { quoteHref } from '@/lib/quote'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {}
  }

  const url = `https://www.ezactechnologies.com/work/${project.slug}`

  return {
    title: `${project.name} | Case Study`,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.name} | EZAC Technologies`,
      description: project.summary,
      url,
      siteName: 'EZAC Technologies',
      type: 'article',
      images: [{ url: project.poster.src, alt: project.poster.alt }],
    },
  }
}

const narrative = [
  { key: 'challenge', title: 'The Challenge' },
  { key: 'solution', title: 'Our Solution' },
  { key: 'outcome', title: 'The Outcome' },
] as const

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]
  const sections = narrative.filter((item) => project[item.key])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      <PageBackdrop />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:px-10">
        <Link
          href="/work"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          All projects
        </Link>

        <div className="grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-16">
          <Reveal>
            <Eyebrow className="mb-6">{project.category}</Eyebrow>

            {project.label && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {project.label}
              </p>
            )}

            <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>

            <p className="mt-6 bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-xl font-medium tracking-[-0.02em] text-transparent sm:text-2xl">
              {project.headline}
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              {project.summary}
            </p>

            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 border-t border-white/[0.07] pt-7">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
                  Category
                </dt>
                <dd className="mt-2 text-sm text-slate-200">
                  {project.category}
                </dd>
              </div>
              {project.client && (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
                    Client
                  </dt>
                  <dd className="mt-2 text-sm text-slate-200">
                    {project.client}
                  </dd>
                </div>
              )}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={quoteHref(undefined, `A project similar to ${project.name}`)}
                className={primaryButtonClass}
              >
                Discuss a Similar Project
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryButtonClass}
                >
                  View Project
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-sky-900/40 bg-[#061225] shadow-[0_40px_120px_-60px_rgba(56,189,248,0.5)]">
              <Image
                src={project.poster.src}
                alt={project.poster.alt}
                width={project.poster.width}
                height={project.poster.height}
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        <Reveal>
          <Eyebrow className="mb-5">Key Features</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            What the platform does
          </h2>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-3xl border border-sky-900/40 bg-[#040b1b]/75">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <li
                key={feature.title}
                className="flex gap-4 border-b border-white/[0.06] p-6 sm:border-r sm:p-7"
              >
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/[0.06] text-sky-400">
                  <Check className="size-3.5" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-white">
                    {feature.title}
                  </h3>
                  {feature.description && (
                    <p className="mt-1.5 text-sm leading-6 text-slate-400">
                      {feature.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {project.tagline && (
          <p className="mt-10 text-center text-lg font-medium italic tracking-[-0.01em] text-slate-300">
            {project.tagline}
          </p>
        )}
      </section>

      {/* Optional case-study narrative (shown only when filled in lib/projects.ts) */}
      {sections.length > 0 && (
        <section className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {sections.map((item) => (
              <div
                key={item.key}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-7"
              >
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-sky-400">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project[item.key]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.technologies.length > 0 && (
        <section className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <Eyebrow className="mb-5">Technologies Used</Eyebrow>
          <ul className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3.5 py-2 text-sm text-slate-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Next project */}
      {next && next.slug !== project.slug && (
        <section className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.015] p-7 transition-colors hover:border-sky-400/25 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                Next project
              </span>
              <p className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">
                {next.name}
              </p>
            </div>
            <ArrowRight className="size-5 text-sky-400 transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      )}

      <PageCta
        eyebrow="Build Something Similar"
        title="Need a platform"
        highlight="like this?"
        description="Let's talk about your requirements and how we can build a solution around them."
      >
        <a
          href={quoteHref(undefined, `A project similar to ${project.name}`)}
          className={primaryButtonClass}
        >
          Request a Quote
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </a>
        <Link href="/work" className={secondaryButtonClass}>
          View All Projects
        </Link>
      </PageCta>
    </div>
  )
}
