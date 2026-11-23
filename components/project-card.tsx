import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project
  priority?: boolean
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sky-900/40 bg-[#040b1b]/80 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/25 hover:shadow-[0_30px_80px_-45px_rgba(56,189,248,0.45)]">
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-sky-400/0 to-transparent transition-all duration-500 group-hover:via-sky-400/50" />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-[#061225]">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040b1b]/60 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sky-400/90">
          {project.category}
        </span>

        <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-white">
          <Link
            href={`/work/${project.slug}`}
            className="outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline"
          >
            {project.name}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {project.summary}
        </p>

        {project.technologies.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-white/[0.07] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 transition-colors group-hover:text-sky-300">
            Explore Case Study
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  )
}
