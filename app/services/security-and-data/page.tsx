import {
  ArrowRight,
  BarChart3,
  Code2,
  Database,
  Network,
  ShieldCheck,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { GlowButton } from '@/components/glow-button'

const securityProducts = [
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description:
      'We help protect your systems, networks and data from threats. From assessments and hardening to ongoing monitoring, security is built into everything we do.',
    features: [
      'Security assessments',
      'Endpoint and network protection',
      'Access control and policies',
      'Incident response planning',
    ],
    size: 'large',
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description:
      'Reliable database design, setup and management so your data stays available, consistent and ready for the applications that depend on it.',
    features: [
      'Database design and setup',
      'Performance tuning',
      'Backup and recovery',
      'Migration and upgrades',
    ],
    size: 'medium',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description:
      'Turn raw data into clear insights. We build pipelines, models and reports that help you understand performance, trends and opportunities.',
    features: [
      'Data pipelines and ETL',
      'Reporting and visualization',
      'Custom analytics models',
      'Self-serve dashboards',
    ],
    size: 'medium',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description:
      'BI solutions that give leaders and teams a single view of the business. Designed for clarity, speed and decisions that matter.',
    features: [
      'Executive dashboards',
      'KPI tracking systems',
      'Cross-department reporting',
      'Automated insights delivery',
    ],
    size: 'medium',
  },
  {
    icon: Network,
    title: 'System Integration',
    description:
      'Connect the tools and platforms your business already uses. We build the integrations that keep data flowing and reduce manual work between systems.',
    features: [
      'Application integrations',
      'Middleware and connectors',
      'Data synchronization',
      'Legacy system bridging',
    ],
    size: 'medium',
  },
  {
    icon: Code2,
    title: 'API Integration',
    description:
      'Secure, well-structured API connections that link your products, partners and internal systems. Built for reliability and long-term maintainability.',
    features: [
      'Third-party API connections',
      'Custom API development',
      'Authentication and security',
      'Monitoring and versioning',
    ],
    size: 'large',
  },
]

export default function SecurityDataPage() {
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
                  Service 06 / Security & Data
                </span>
              </div>

              <h1 className="text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.5rem] lg:leading-[0.92]">
                Protect, connect
                <span className="mt-1 block bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  and unlock your data.
                </span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-8 text-slate-400/95 sm:text-lg sm:leading-8">
                We help organizations protect their technology environment,
                connect their systems and turn business data into useful
                insights—so you can operate securely and make better decisions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities – Bento layout */}
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
                  What We Provide
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Security and data
                <span className="bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">
                  {' '}
                  that drive confidence.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {securityProducts.map((item, index) => {
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
                    <div className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-sky-400/[0.08] via-transparent to-cyan-400/[0.04]" />
                    </div>

                    <div className="relative flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <span
                          className={`
                            flex items-center justify-center rounded-2xl
                            border border-sky-400/20 bg-sky-400/[0.06] text-sky-400
                            shadow-[0_0_24px_-6px_rgba(56,189,248,0.35)]
                            transition-all duration-400
                            group-hover:border-sky-400/40 group-hover:bg-sky-400/[0.12]
                            group-hover:shadow-[0_0_32px_-4px_rgba(56,189,248,0.5)]
                            group-hover:scale-105
                            ${isLarge ? 'size-14' : 'size-12'}
                          `}
                        >
                          <Icon className={isLarge ? 'size-6' : 'size-5'} strokeWidth={1.5} />
                        </span>
                        <span className="font-mono text-[11px] tracking-wider text-slate-600 transition-colors duration-300 group-hover:text-sky-400/60">
                          0{index + 1}
                        </span>
                      </div>

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

                      <div className="mt-auto pt-8">
                        <div className="border-t border-white/[0.06] pt-6">
                          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-slate-600">
                            Includes
                          </p>
                          <div className={`grid gap-x-6 gap-y-3 ${isLarge ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                            {item.features.map((feature) => (
                              <div key={feature} className="flex items-start gap-3">
                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80 shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                                <span className="text-sm leading-snug text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
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
                <ShieldCheck className="size-7" strokeWidth={1.4} />
              </span>
            </div>
            <h2 className="mt-10 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl sm:leading-[1.05]">
              Ready to protect
              <span className="mt-1 block bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                and unlock your data?
              </span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              Tell us about your security needs, data challenges or integration
              goals. We’ll help design solutions that keep you protected and
              informed.
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