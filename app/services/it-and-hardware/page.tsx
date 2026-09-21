import {
  ArrowRight,
  HardDrive,
  Headphones,
  Network,
  ShieldCheck,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { GlowButton } from '@/components/glow-button'

const itProducts = [
  {
    icon: HardDrive,
    title: 'Computers & Workstations',
    description:
      'We supply and configure reliable computing hardware tailored to your team’s needs—from everyday office workstations to high-performance machines for specialized workloads.',
    features: [
      'Business desktops and laptops',
      'High-performance workstations',
      'Custom hardware configurations',
      'Setup and deployment support',
    ],
    size: 'large',
  },
  {
    icon: HardDrive,
    title: 'Servers',
    description:
      'On-premise and hybrid server solutions designed for stability, performance and growth. We help you choose, install and maintain the right server infrastructure.',
    features: [
      'Tower and rack servers',
      'Storage and compute servers',
      'Virtualization-ready setups',
      'Hardware monitoring',
    ],
    size: 'medium',
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    description:
      'Structured networking that keeps your organization connected and secure. From cabling and switches to routers and firewalls, we build networks that scale with you.',
    features: [
      'Structured cabling',
      'Switches and routers',
      'Firewall configuration',
      'Network segmentation',
    ],
    size: 'medium',
  },
  {
    icon: Network,
    title: 'Wi-Fi Solutions',
    description:
      'Reliable wireless coverage across offices, warehouses and multi-floor environments. Designed for performance, security and seamless roaming.',
    features: [
      'Enterprise Wi-Fi design',
      'Access point deployment',
      'Guest and staff networks',
      'Coverage optimization',
    ],
    size: 'medium',
  },
  {
    icon: ShieldCheck,
    title: 'CCTV Systems',
    description:
      'Surveillance systems that protect your premises and give you clear visibility. We design, install and maintain CCTV solutions tailored to your sites.',
    features: [
      'IP camera systems',
      'NVR and recording setups',
      'Remote viewing access',
      'Multi-site monitoring',
    ],
    size: 'medium',
  },
  {
    icon: Headphones,
    title: 'IT Support',
    description:
      'Responsive IT support that keeps your team productive. From day-to-day troubleshooting to proactive maintenance, we’re the technology partner you can rely on.',
    features: [
      'Helpdesk and remote support',
      'On-site assistance',
      'Preventive maintenance',
      'Hardware and software support',
    ],
    size: 'large',
  },
]

export default function ITHardwarePage() {
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
                  Service 05 / IT & Hardware
                </span>
              </div>

              <h1 className="text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.5rem] lg:leading-[0.92]">
                Technology infrastructure
                <span className="mt-1 block bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  for your organization.
                </span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-8 text-slate-400/95 sm:text-lg sm:leading-8">
                From computing hardware and networking to IT support, we help
                businesses build dependable technology infrastructure that
                keeps teams productive and systems reliable.
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
                  What We Deliver
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Dependable hardware
                <span className="bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">
                  {' '}
                  and IT support.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {itProducts.map((item, index) => {
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
                <HardDrive className="size-7" strokeWidth={1.4} />
              </span>
            </div>
            <h2 className="mt-10 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl sm:leading-[1.05]">
              Need reliable IT
              <span className="mt-1 block bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                for your business?
              </span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              Tell us about your hardware, networking or support requirements.
              We’ll help build and maintain technology infrastructure you can
              depend on.
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