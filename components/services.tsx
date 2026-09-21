'use client'

import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Database,
  Globe2,
  HardDrive,
  Headphones,
  Layers3,
  Network,
  ShieldCheck,
  Smartphone,
  Users,
  BarChart3,
  Workflow,
} from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const services = [
  {
    number: '01',
    slug: 'digital-products',
    title: 'Digital Products',
    short: 'Websites & digital experiences',
    description:
      'We design and build modern, high-performance digital experiences that help businesses establish a strong online presence, engage customers and achieve their goals.',
    icon: Globe2,
    capabilities: [
      { name: 'Corporate Websites', icon: Globe2 },
      { name: 'E-commerce Solutions', icon: Layers3 },
      { name: 'Web Applications', icon: Code2 },
      { name: 'Landing Pages', icon: ArrowUpRight },
      { name: 'CMS Development', icon: Database },
      { name: 'UI / UX Design', icon: Smartphone },
    ],
  },
  {
    number: '02',
    slug: 'software-applications',
    title: 'Software & Applications',
    short: 'Custom business software',
    description:
      'Purpose-built software and applications engineered around your workflows, users and business requirements.',
    icon: Code2,
    capabilities: [
      { name: 'Custom Software', icon: Code2 },
      { name: 'Business Systems', icon: Workflow },
      { name: 'Mobile Applications', icon: Smartphone },
      { name: 'ERP & CRM', icon: Database },
      { name: 'Custom Dashboards', icon: BarChart3 },
      { name: 'API Development', icon: Network },
    ],
  },
  {
    number: '03',
    slug: 'ai-and-automation',
    title: 'AI & Automation',
    short: 'Intelligent automation',
    description:
      'We build intelligent solutions that automate repetitive work, improve efficiency and create smarter customer and business experiences.',
    icon: Bot,
    capabilities: [
      { name: 'AI Applications', icon: Bot },
      { name: 'AI Agents', icon: Bot },
      { name: 'AI Chatbots', icon: Headphones },
      { name: 'Business Automation', icon: Workflow },
      { name: 'AI Integrations', icon: Network },
      { name: 'Process Automation', icon: ArrowRight },
    ],
  },
  {
    number: '04',
    slug: 'cloud-and-infrastructure',
    title: 'Cloud & Infrastructure',
    short: 'Scalable & secure cloud',
    description:
      'We provide the infrastructure needed to deploy, operate and scale your digital products reliably.',
    icon: Cloud,
    capabilities: [
      { name: 'Cloud Hosting', icon: Cloud },
      { name: 'VPS & Servers', icon: HardDrive },
      { name: 'Application Deployment', icon: ArrowUpRight },
      { name: 'DevOps', icon: Workflow },
      { name: 'CI / CD', icon: Code2 },
      { name: 'Backup Solutions', icon: Database },
    ],
  },
  {
    number: '05',
    slug: 'it-and-hardware',
    title: 'IT & Hardware',
    short: 'Technology infrastructure',
    description:
      'From computing hardware and networking to IT support, we help businesses build dependable technology infrastructure.',
    icon: HardDrive,
    capabilities: [
      { name: 'Computers & Workstations', icon: HardDrive },
      { name: 'Servers', icon: HardDrive },
      { name: 'Network Infrastructure', icon: Network },
      { name: 'Wi-Fi Solutions', icon: Network },
      { name: 'CCTV Systems', icon: ShieldCheck },
      { name: 'IT Support', icon: Headphones },
    ],
  },
  {
    number: '06',
    slug: 'security-and-data',
    title: 'Security & Data',
    short: 'Secure & unlock data',
    description:
      'We help organizations protect their technology environment, connect their systems and turn business data into useful insights.',
    icon: ShieldCheck,
    capabilities: [
      { name: 'Cybersecurity', icon: ShieldCheck },
      { name: 'Database Solutions', icon: Database },
      { name: 'Data Analytics', icon: BarChart3 },
      { name: 'Business Intelligence', icon: BarChart3 },
      { name: 'System Integration', icon: Network },
      { name: 'API Integration', icon: Code2 },
    ],
  },
]

export function Services() {
  const [activeService, setActiveService] = useState(0)

  const active = services[activeService]
  const ActiveIcon = active.icon

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#020817] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[20%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/[0.035] blur-[160px]" />
        <div className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[150px]" />
        <div
          className="
            absolute inset-0 opacity-[0.018]
            [background-image:linear-gradient(rgba(56,189,248,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.5)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-sky-400" />
                <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#7bc4ff]/80">
                  Our Services
                </span>
              </div>

              <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Technology built around
                <span className="block text-sky-400 bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                  your business.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                From digital products and AI automation to infrastructure
                and IT solutions, EZAC Technologies brings the technology
                your business needs under one roof.
              </p>
            </div>

            <div className="hidden border-l border-white/[0.08] pl-7 lg:block">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
                Our approach
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
                <span>Ideas</span>
                <ArrowRight className="size-3 text-sky-400" />
                <span>Solutions</span>
                <ArrowRight className="size-3 text-sky-400" />
                <span>Growth</span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                End-to-end technology services designed to help businesses
                innovate, operate and scale.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-sky-900/40 bg-[#040b1b]/80 shadow-[0_30px_100px_-50px_rgba(56,189,248,0.35)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-[390px_1fr]">
              <div className="border-b border-white/[0.07] bg-[#030918]/80 lg:border-b-0 lg:border-r">
                {services.map((service, index) => {
                  const Icon = service.icon
                  const isActive = activeService === index

                  return (
                    <button
                      key={service.number}
                      type="button"
                      onMouseEnter={() => setActiveService(index)}
                      onFocus={() => setActiveService(index)}
                      onClick={() => setActiveService(index)}
                      className={`
                        group relative flex w-full items-center gap-4
                        border-b border-white/[0.055]
                        px-5 py-5 text-left
                        transition-all duration-300
                        last:border-b-0
                        sm:px-7
                        ${isActive
                          ? 'bg-sky-400/[0.06]'
                          : 'hover:bg-white/[0.025]'
                        }
                      `}
                    >
                      <span
                        className={`
                          absolute left-0 top-0 h-full w-[2px]
                          bg-sky-400 transition-opacity duration-300
                          ${isActive
                            ? 'opacity-100 shadow-[0_0_15px_rgba(56,189,248,0.9)]'
                            : 'opacity-0'
                          }
                        `}
                      />

                      <span
                        className={`
                          w-7 shrink-0 font-mono text-xs
                          ${isActive
                            ? 'text-sky-400'
                            : 'text-slate-700'
                          }
                        `}
                      >
                        {service.number}
                      </span>

                      <span
                        className={`
                          flex size-10 shrink-0 items-center justify-center
                          rounded-lg border
                          transition-all duration-300
                          ${isActive
                            ? 'border-sky-400/30 bg-sky-400/10 text-sky-400'
                            : 'border-white/[0.07] bg-white/[0.02] text-slate-600 group-hover:text-slate-400'
                          }
                        `}
                      >
                        <Icon className="size-4" strokeWidth={1.6} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={`
                            block text-sm font-medium transition-colors
                            ${isActive
                              ? 'text-white'
                              : 'text-slate-400 group-hover:text-slate-200'
                            }
                          `}
                        >
                          {service.title}
                        </span>

                        <span
                          className={`
                            mt-1 block truncate text-[11px]
                            ${isActive
                              ? 'text-slate-500'
                              : 'text-slate-700'
                            }
                          `}
                        >
                          {service.short}
                        </span>
                      </span>

                      <ArrowUpRight
                        className={`
                          size-4 shrink-0 transition-all duration-300
                          ${isActive
                            ? 'text-sky-400'
                            : 'text-slate-700 group-hover:text-slate-500'
                          }
                        `}
                      />
                    </button>
                  )
                })}
              </div>

              <div className="relative min-h-[590px] overflow-hidden">
                <div
                  className="
                    pointer-events-none absolute
                    -right-8 -top-12
                    font-mono text-[260px]
                    font-bold leading-none
                    text-white/[0.018]
                    select-none
                  "
                >
                  {active.number}
                </div>

                <div className="pointer-events-none absolute right-[-10%] top-[15%] h-[450px] w-[450px] rounded-full bg-sky-400/[0.045] blur-[100px]" />

                <div className="pointer-events-none absolute right-[12%] top-0 h-full w-px bg-gradient-to-b from-transparent via-sky-400/[0.08] to-transparent" />

                <div className="relative flex h-full flex-col p-7 sm:p-10 lg:p-14">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-sky-400">
                      {active.number}
                    </span>

                    <span className="h-px w-10 bg-sky-400/40" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600">
                      {active.title}
                    </span>
                  </div>

                  <div className="mt-10 flex size-16 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/[0.06] text-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.06)]">
                    <ActiveIcon
                      className="size-7"
                      strokeWidth={1.4}
                    />
                  </div>

                  <div className="mt-8 max-w-2xl">
                    <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[42px] lg:leading-[1.08]">
                      {active.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                      {active.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-12">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600">
                        Capabilities
                      </span>

                      <span className="h-px flex-1 bg-white/[0.06]" />
                    </div>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                      {active.capabilities.map((capability) => {
                        const CapabilityIcon = capability.icon

                        return (
                          <div
                            key={capability.name}
                            className="group/cap flex items-center gap-3"
                          >
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-400/[0.04] text-sky-400/70">
                              <CapabilityIcon
                                className="size-3.5"
                                strokeWidth={1.6}
                              />
                            </span>

                            <span className="text-sm text-slate-300 transition-colors group-hover/cap:text-white">
                              {capability.name}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-10 flex items-center gap-6">
                    <a
                      href="#contact"
                      className="
                        group inline-flex items-center justify-center gap-2
                        h-[40px]
                        rounded-2xl
                        bg-[#078cff]
                        px-5
                        text-[13px]
                        font-semibold
                        text-white
                        shadow-[0_0_18px_rgba(0,140,255,0.25)]
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#159cff]
                        hover:shadow-[0_0_28px_rgba(0,140,255,0.4)]
                      "
                    >
                      Start Your Project
                      <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                      href={`/services/${active.slug}`}
                      className="
                        text-sm font-medium text-slate-400
                        transition-colors hover:text-sky-400
                      "
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 grid border-y border-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            <ValueItem
              icon={Layers3}
              title="End-to-End Solutions"
              description="From strategy to implementation, we cover your technology journey."
            />

            <ValueItem
              icon={Users}
              title="Business-Focused"
              description="Technology designed around your goals, workflows and customers."
            />

            <ValueItem
              icon={BarChart3}
              title="Built to Scale"
              description="Solutions designed to grow alongside your organization."
            />

            <ValueItem
              icon={Headphones}
              title="Ongoing Support"
              description="Reliable support and technology partnership beyond launch."
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ValueItem({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Layers3
  title: string
  description: string
}) {
  return (
    <div className="group border-b border-white/[0.06] p-7 sm:border-r sm:last:border-r-0 lg:border-b-0">
      <Icon
        className="size-5 text-sky-400/80 transition-colors group-hover:text-sky-300"
        strokeWidth={1.5}
      />

      <h4 className="mt-5 text-sm font-semibold text-white">
        {title}
      </h4>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  )
}