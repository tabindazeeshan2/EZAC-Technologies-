'use client'

import { useMemo, useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import type { Project, ProjectCategory } from '@/lib/projects'
import { cn } from '@/lib/utils'

type Filter = 'All' | ProjectCategory

export function WorkGrid({
  projects,
  categories,
}: {
  projects: Project[]
  categories: ProjectCategory[]
}) {
  const [filter, setFilter] = useState<Filter>('All')

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter, projects]
  )

  const options: Filter[] = ['All', ...categories]

  return (
    <div>
      {categories.length > 1 && (
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mb-10 flex flex-wrap gap-2"
        >
          {options.map((option) => {
            const active = filter === option
            const count =
              option === 'All'
                ? projects.length
                : projects.filter((p) => p.category === option).length

            return (
              <button
                key={option}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(option)}
                className={cn(
                  'inline-flex h-9 items-center gap-2 rounded-xl border px-4 text-[13px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60',
                  active
                    ? 'border-sky-400/30 bg-sky-400/[0.1] text-white'
                    : 'border-white/[0.07] bg-white/[0.02] text-slate-400 hover:border-white/[0.12] hover:text-slate-200'
                )}
              >
                {option}
                <span
                  className={cn(
                    'font-mono text-[10px]',
                    active ? 'text-sky-300' : 'text-slate-600'
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      )}

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} project{visible.length === 1 ? '' : 's'}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {visible.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index < 2}
          />
        ))}
      </div>
    </div>
  )
}
