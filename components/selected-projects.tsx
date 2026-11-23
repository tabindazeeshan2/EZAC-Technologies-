import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ProjectCard } from '@/components/project-card'
import { getFeaturedProjects } from '@/lib/projects'

export function SelectedProjects() {
  const featured = getFeaturedProjects(4)

  if (featured.length === 0) {
    return null
  }

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#020817] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[30%] h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/[0.03] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-sky-400" />
                <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#7bc4ff]/80">
                  Selected Projects
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Work we&apos;ve
                <span className="block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                  designed and built.
                </span>
              </h2>
            </div>

            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-sky-400"
            >
              View all projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
