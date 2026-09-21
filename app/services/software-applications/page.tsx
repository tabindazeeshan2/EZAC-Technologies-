import {
  ArrowRight,
  BarChart3,
  Code2,
  Database,
  Network,
  Smartphone,
  Workflow,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { GlowButton } from '@/components/glow-button'

const softwareProducts = [
  {
    icon: Code2,
    title: 'Custom Software',
    description:
      'We design and develop software tailored to your exact business processes. From internal tools to complex operational systems, every solution is built around how your team actually works.',
    features: [
      'Bespoke business applications',
      'Workflow-driven development',
      'Scalable architecture',
      'Full ownership of the codebase',
    ],
    size: 'large',
  },
  {
    icon: Workflow,
    title: 'Business Systems',
    description:
      'We create systems that streamline operations, connect teams and reduce manual work. Built to fit your existing processes while opening the door for future growth.',
    features: [
      'Internal operations platforms',
      'Process automation layers',
      'Team collaboration tools',
      'Role-based access control',
    ],
    size: 'medium',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'Native and cross-platform mobile apps that give your customers and teams access to your services anywhere. Clean interfaces, solid performance and reliable backend integration.',
    features: [
      'iOS and Android applications',
      'Cross-platform solutions',
      'Offline-capable experiences',
      'App Store deployment support',
    ],
    size: 'medium',
  },
  {
    icon: Database,
    title: 'ERP & CRM',
    description:
      'We implement and customize ERP and CRM platforms that centralize your data, improve visibility and help teams work from a single source of truth.',
    features: [
      'Customer relationship systems',
      'Resource planning platforms',
      'Sales and pipeline tools',
      'Custom modules and integrations',
    ],
    size: 'medium',
  },
  {
    icon: BarChart3,
    title: 'Custom Dashboards',
    description:
      'Real-time dashboards that turn raw data into clear, actionable insights. Designed for decision-makers who need visibility without complexity.',
    features: [
      'Live operational dashboards',
      'KPI and performance tracking',
      'Role-specific views',
      'Exportable reports and alerts',
    ],
    size: 'medium',
  },
  {
    icon: Network,
    title: 'API Development',
    description:
      'Secure, well-documented APIs that connect your systems, partners and third-party services. Built for reliability, versioning and long-term maintainability.',
    features: [
      'RESTful and modern APIs',
      'Authentication and rate limiting',
      'Clear documentation',
      'Integration with existing systems',
    ],
    size: 'large',
  },
]

export default function SoftwareApplicationsPage() {
  return (
    <main className="relative overflow-hidden bg-[#020817] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-sky-500/[0.07] blur-[180px]" />
        <div className="absolute -right-32 top-[30%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.03] blur-[160px]" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/[0.025] blur-[140px]" />
        <div
          className="
            absolute inset-0 opacity-[0.022]
            [background-image:linear-gradient(rgba(56,189,248,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.55)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,8,23,0.4)_70%,rgba(2,8,23,0.85)_100%)]" />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl">
              <div className="mb-8 flex items-center gap-3.5">
                <span className="h-px w-11 bg-gradient-to-r from-sky-400 to-sky-400/0" />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.38em] text-sky-400/90">
                  Service 02 / Software & Applications
                </span>
              </div>

              <h1 className="text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.5rem] lg:leading-[0.92]">
                Software built
                <span className="mt-1 block bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  around your business.
                </span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-8 text-slate-400/95 sm:text-lg sm:leading-8">
                Purpose-built software and applications engineered around your
                workflows, users and business requirements. From internal
                systems to customer-facing platforms, we deliver solutions that
                fit the way you work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section
        id="capabilities"
        className="relative border-y border-white/[0.055] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <div className="flex items-center gap-3.5">
                <span className="h-px w-9 bg-gradient-to-r from-sky-400 to-sky-400/0" />
                <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-sky-400/90">
                  What We Build
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Custom solutions designed
                <span className="bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">
                  {' '}
                  for real operations.
                </span>
              </h2>
            </div>
          </Reveal>

          {/* Bento grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {softwareProducts.map((item, index) => {
              const Icon = item.icon
              const isLarge = item.size === 'large'

              return (
                <Reveal
                  key={item.title}
                  delay={index * 60}
                  className={isLarge ? 'md:col-span-2 lg:col-span-2' : ''}
                >
                  <div
                    className={`
                      group relative h-full overflow-hidden rounded-[1.75rem]
                      border border-white/[0.065]
                      bg-[#030918]/80
                      backdrop-blur-sm
                      transition-all duration-500 ease-out
                      hover:border-sky-400/25
                      hover:bg-[#061124]/90
                      hover:shadow-[0_0_0_1px_rgba(56,189,248,0.08),0_24px_60px_-24px_rgba(14,165,233,0.18)]
                      ${isLarge ? 'p-8 sm:p-10' : 'p-7 sm:p-8'}
                    `}
                  >
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-sky-400/[0.08] via-transparent to-cyan-400/[0.04]" />
                    </div>

                    <div className="relative flex h-full flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <span
                          className={`
                            flex items-center justify-center
                            rounded-2xl
                            border border-sky-400/20
                            bg-sky-400/[0.06]
                            text-sky-400
                            shadow-[0_0_24px_-6px_rgba(56,189,248,0.35)]
                            transition-all duration-400
                            group-hover:border-sky-400/40
                            group-hover:bg-sky-400/[0.12]
                            group-hover:shadow-[0_0_32px_-4px_rgba(56,189,248,0.5)]
                            group-hover:scale-105
                            ${isLarge ? 'size-14' : 'size-12'}
                          `}
                        >
                          <Icon
                            className={isLarge ? 'size-6' : 'size-5'}
                            strokeWidth={1.5}
                          />
                        </span>

                        <span className="font-mono text-[11px] tracking-wider text-slate-600 transition-colors duration-300 group-hover:text-sky-400/60">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Title + description */}
                      <div className={`mt-7 ${isLarge ? 'max-w-xl' : ''}`}>
                        <h3
                          className={`
                            font-semibold tracking-tight text-white
                            transition-colors duration-300 group-hover:text-sky-50
                            ${isLarge ? 'text-2xl sm:text-3xl' : 'text-xl'}
                          `}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`
                            mt-3 leading-relaxed text-slate-500
                            transition-colors duration-300 group-hover:text-slate-400
                            ${isLarge ? 'text-base' : 'text-sm'}
                          `}
                        >
                          {item.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mt-auto pt-8">
                        <div className="border-t border-white/[0.06] pt-6">
                          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-slate-600">
                            Includes
                          </p>

                          <div
                            className={`
                              grid gap-x-6 gap-y-3
                              ${isLarge ? 'sm:grid-cols-2' : 'grid-cols-1'}
                            `}
                          >
                            {item.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80 shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                                <span className="text-sm leading-snug text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Accent line */}
                        <div className="mt-7 h-px w-10 origin-left bg-sky-400/40 transition-all duration-500 ease-out group-hover:w-16 group-hover:bg-sky-400" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.05] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex justify-center">
              <span className="flex size-16 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-400/[0.07] text-sky-400 shadow-[0_0_40px_-8px_rgba(56,189,248,0.4)]">
                <Code2 className="size-7" strokeWidth={1.4} />
              </span>
            </div>

            <h2 className="mt-10 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl sm:leading-[1.05]">
              Need custom software
              <span className="mt-1 block bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                for your business?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              Tell us about your workflows, users and goals. We’ll help design
              and build the right software solution for your organization.
            </p>

            <div className="mt-11 flex justify-center">
              <GlowButton href="/#contact">
                Start Your Project
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}