"use client";

import {
  ArrowRight,
  Camera,
  Check,
  HardDrive,
  Headphones,
  Laptop,
  Network,
  Server,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { GlowButton } from "@/components/glow-button";

const itProducts = [
  {
    icon: HardDrive,
    title: "Computers & Workstations",
    description:
      "We supply and configure reliable computing hardware tailored to your team’s needs—from everyday office workstations to high-performance machines for specialized workloads.",
    features: [
      "Business desktops and laptops",
      "High-performance workstations",
      "Custom hardware configurations",
      "Setup and deployment support",
    ],
  },
  {
    icon: Server,
    title: "Servers",
    description:
      "On-premise and hybrid server solutions designed for stability, performance and growth. We help you choose, install and maintain the right server infrastructure.",
    features: [
      "Tower and rack servers",
      "Storage and compute servers",
      "Virtualization-ready setups",
      "Hardware monitoring",
    ],
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Structured networking that keeps your organization connected and secure. From cabling and switches to routers and firewalls, we build networks that scale with you.",
    features: [
      "Structured cabling",
      "Switches and routers",
      "Firewall configuration",
      "Network segmentation",
    ],
  },
  {
    icon: Wifi,
    title: "Wi-Fi Solutions",
    description:
      "Reliable wireless coverage across offices, warehouses and multi-floor environments. Designed for performance, security and seamless roaming.",
    features: [
      "Enterprise Wi-Fi design",
      "Access point deployment",
      "Guest and staff networks",
      "Coverage optimization",
    ],
  },
  {
    icon: ShieldCheck,
    title: "CCTV Systems",
    description:
      "Surveillance systems that protect your premises and give you clear visibility. We design, install and maintain CCTV solutions tailored to your sites.",
    features: [
      "IP camera systems",
      "NVR and recording setups",
      "Remote viewing access",
      "Multi-site monitoring",
    ],
  },
  {
    icon: Headphones,
    title: "IT Support",
    description:
      "Responsive IT support that keeps your team productive. From day-to-day troubleshooting to proactive maintenance, we’re the technology partner you can rely on.",
    features: [
      "Helpdesk and remote support",
      "On-site assistance",
      "Preventive maintenance",
      "Hardware and software support",
    ],
  },
];

export default function ITHardwarePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-230px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-sky-500/[0.055] blur-[150px] sm:h-[620px] sm:w-[950px] lg:h-[720px] lg:w-[1100px] lg:blur-[180px]" />

        <div className="absolute -right-40 top-[25%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.025] blur-[130px] sm:h-[520px] sm:w-[520px] sm:blur-[160px]" />

        <div className="absolute bottom-[-160px] left-[10%] h-[360px] w-[560px] rounded-full bg-sky-500/[0.025] blur-[130px] sm:h-[460px] sm:w-[700px] sm:blur-[150px]" />

        <div
          className="
            absolute inset-0 opacity-[0.018]
            [background-image:linear-gradient(rgba(56,189,248,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.55)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,8,23,0.45)_65%,rgba(2,8,23,0.9)_100%)]" />
      </div>

      <section className="relative overflow-visible pb-16 pt-24 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-14 xl:gap-20">
            <Reveal>
              <div className="max-w-[700px]">
                <div className="mb-6 flex items-center gap-3.5 sm:mb-7">
                  <span className="h-px w-9 bg-gradient-to-r from-sky-400 to-sky-400/0 sm:w-11" />

                  <span className="font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-sky-400/90 sm:text-[10px] sm:tracking-[0.34em]">
                    IT & Hardware
                  </span>
                </div>

                <h1
                  className="
                    max-w-[700px]
                    overflow-visible
                    text-[3rem]
                    font-semibold
                    leading-[1.06]
                    tracking-[-0.055em]
                    text-white
                    min-[400px]:text-[3.35rem]
                    sm:text-[4.7rem]
                    sm:leading-[1.03]
                    lg:text-[5.2rem]
                    lg:leading-[1.02]
                    xl:text-[5.5rem]
                    xl:leading-[1.02]
                  "
                >
                  <span className="block">Technology</span>

                  <span
                    className="
                      mt-1 block
                      bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff]
                      bg-clip-text
                      pb-[0.10em]
                      text-transparent
                    "
                  >
                    that keeps you
                  </span>

                  <span
                    className="
                      block
                      bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff]
                      bg-clip-text
                      pb-[0.16em]
                      text-transparent
                    "
                  >
                    moving.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-7 sm:text-lg sm:leading-8">
                  From computing hardware and networking to IT support, we help
                  businesses build dependable technology infrastructure that
                  keeps teams productive and systems reliable.
                </p>

                <div className="mt-8 sm:mt-9">
                  <GlowButton href="/#contact">
                    Start Your Project
                    <ArrowRight className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </GlowButton>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 sm:mt-10 sm:gap-x-8">
                  {[
                    "Hardware",
                    "Networking",
                    "Security",
                    "IT Support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-slate-500"
                    >
                      <span className="size-1 rounded-full bg-sky-400/70" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <InfrastructureHub />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="relative border-y border-white/[0.055] py-16 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 grid gap-8 lg:mb-14 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3.5">
                  <span className="h-px w-8 bg-gradient-to-r from-sky-400 to-sky-400/0 sm:w-9" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-sky-400/90 sm:text-[10px] sm:tracking-[0.32em]">
                    What We Deliver
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-white sm:mt-6 sm:text-4xl lg:text-5xl">
                  The technology your
                  <span className="bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">
                    {" "}
                    business depends on.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:mt-5 sm:text-base">
                  Hardware, connectivity, security and support — designed to
                  work together as one dependable technology environment.
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="rounded-2xl border border-white/[0.055] bg-[#030918]/80 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/[0.04]">
                      <Laptop
                        className="size-4 text-sky-400/70"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
                        Technology Stack
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-xs text-slate-300">
                        <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.7)]" />
                        Connected
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-2">
            {itProducts.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 55}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.055] bg-[#030918]/75 p-5 transition-all duration-500 hover:border-sky-400/20 hover:bg-[#061124]/90 sm:p-7">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.07),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4 sm:gap-5">
                        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/[0.045] text-sky-400 transition-all duration-300 group-hover:border-sky-400/30 group-hover:bg-sky-400/[0.08] sm:size-11">
                            <Icon className="size-4.5 sm:size-5" strokeWidth={1.5} />
                          </div>

                          <div className="min-w-0">
                            <h3 className="text-sm font-semibold tracking-tight text-white sm:text-lg">
                              {item.title}
                            </h3>

                            <div className="mt-1 flex items-center gap-2">
                              <span className="size-1 rounded-full bg-emerald-400/70" />

                              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-slate-600">
                                Available
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="hidden size-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.05] bg-white/[0.015] sm:flex">
                          <span className="size-1.5 rounded-full bg-sky-400/30 transition-all duration-300 group-hover:bg-sky-400" />
                        </div>
                      </div>

                      <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400 sm:mt-6">
                        {item.description}
                      </p>

                      <div className="mt-5 border-t border-white/[0.055] pt-5 sm:mt-6">
                        <div className="mb-3 font-mono text-[8px] uppercase tracking-[0.25em] text-slate-600">
                          Service scope
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {item.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.012] px-2.5 py-2 text-[11px] text-slate-500 transition-colors duration-300 group-hover:border-sky-400/10 group-hover:text-slate-400"
                            >
                              <Check
                                className="size-3 shrink-0 text-sky-400/60"
                                strokeWidth={2}
                              />

                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.045] blur-[130px] sm:h-[560px] sm:w-[780px] sm:blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/[0.055] text-sky-400 shadow-[0_0_40px_-10px_rgba(56,189,248,0.35)] sm:size-16">
              <HardDrive className="size-6 sm:size-7" strokeWidth={1.4} />
            </div>

            <h2 className="mt-8 text-4xl font-semibold tracking-[-0.045em] text-white sm:mt-10 sm:text-6xl sm:leading-[1.05]">
              Need reliable IT
              <span className="mt-2 block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                for your business?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:mt-7 sm:text-lg">
              Tell us about your hardware, networking or support requirements.
              We’ll help build and maintain technology infrastructure you can
              depend on.
            </p>

            <div className="mt-9 flex justify-center sm:mt-11">
              <GlowButton href="/#contact">
                Start Your Project
                <ArrowRight className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function InfrastructureHub() {
  return (
    <div className="relative mx-auto w-full max-w-[570px]">
      <div className="absolute -inset-12 rounded-full bg-sky-400/[0.035] blur-[100px] sm:-inset-20 sm:blur-[130px]" />

      <div className="relative overflow-hidden rounded-[1.5rem] border border-sky-900/45 bg-[#030a18]/95 shadow-[0_35px_120px_-50px_rgba(14,165,233,0.45)] backdrop-blur-xl sm:rounded-[2rem]">
        <div className="flex h-11 items-center justify-between border-b border-white/[0.06] px-4 sm:h-12 sm:px-5">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="flex shrink-0 gap-1.5">
              <span className="size-1.5 rounded-full bg-sky-400" />
              <span className="size-1.5 rounded-full bg-sky-400/30" />
              <span className="size-1.5 rounded-full bg-sky-400/15" />
            </div>

            <span className="truncate font-mono text-[7px] uppercase tracking-[0.24em] text-slate-500 sm:text-[8px] sm:tracking-[0.3em]">
              Core Infrastructure
            </span>
          </div>

          <div className="ml-3 flex shrink-0 items-center gap-2">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(74,222,128,0.8)]" />

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.22em] text-slate-600 min-[400px]:block">
              Operational
            </span>
          </div>
        </div>

        <div
          className="
            relative min-h-[500px] overflow-hidden p-4
            [background-image:linear-gradient(rgba(56,189,248,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.3)_1px,transparent_1px)]
            [background-size:48px_48px]
            sm:min-h-[560px]
            sm:p-5
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_8%,rgba(3,10,24,0.42)_55%,rgba(3,10,24,0.96)_100%)]" />

          <div className="relative z-20 grid grid-cols-3 gap-1.5 min-[400px]:gap-2">
            <HubMetric icon={Laptop} label="DEVICES" value="CONNECTED" />

<HubMetric icon={Wifi} label="NETWORK" value="ONLINE" />

<HubMetric icon={ShieldCheck} label="SECURITY" value="ACTIVE" />
          </div>

          <div className="relative z-20 mx-auto mt-7 grid h-[250px] w-full max-w-[470px] grid-cols-[minmax(0,1fr)_94px_minmax(0,1fr)] grid-rows-[1fr_1fr] items-center gap-x-1.5 gap-y-2 min-[400px]:grid-cols-[minmax(0,1fr)_110px_minmax(0,1fr)] min-[400px]:gap-x-2 sm:mt-8 sm:h-[290px] sm:grid-cols-[1fr_150px_1fr] sm:gap-x-3 sm:gap-y-3">
            <div className="col-start-1 row-start-1 justify-self-end">
              <HubNode
                icon={Laptop}
                title="Workstations"
                status="CONNECTED"
              />
            </div>

            <div className="col-start-3 row-start-1 justify-self-start">
              <HubNode icon={Server} title="Servers" status="ONLINE" />
            </div>

            <div className="col-start-1 row-start-2 justify-self-end">
              <HubNode icon={Wifi} title="Wi-Fi" status="ACTIVE" />
            </div>

            <div className="col-start-3 row-start-2 justify-self-start">
              <HubNode icon={Camera} title="CCTV" status="SECURED" />
            </div>

            <div className="col-start-2 row-span-2 row-start-1 flex h-full items-center justify-center">
              <CoreServer />
            </div>

            <div className="pointer-events-none absolute inset-0">
              <span className="absolute left-[27%] top-[25%] h-px w-[22%] bg-gradient-to-r from-sky-400/10 via-sky-400/50 to-sky-400/80 sm:left-[29%] sm:w-[18%]" />

              <span className="absolute right-[27%] top-[25%] h-px w-[22%] bg-gradient-to-l from-sky-400/10 via-sky-400/50 to-sky-400/80 sm:right-[29%] sm:w-[18%]" />

              <span className="absolute left-[27%] top-[75%] h-px w-[22%] bg-gradient-to-r from-sky-400/10 via-sky-400/50 to-sky-400/80 sm:left-[29%] sm:w-[18%]" />

              <span className="absolute right-[27%] top-[75%] h-px w-[22%] bg-gradient-to-l from-sky-400/10 via-sky-400/50 to-sky-400/80 sm:right-[29%] sm:w-[18%]" />

              <span className="absolute left-[47%] top-[25%] size-1.5 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_9px_rgba(56,189,248,0.9)] sm:left-[46%]" />

              <span className="absolute right-[47%] top-[25%] size-1.5 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_9px_rgba(56,189,248,0.9)] sm:right-[46%]" />

              <span className="absolute left-[47%] top-[75%] size-1.5 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_9px_rgba(56,189,248,0.9)] sm:left-[46%]" />

              <span className="absolute right-[47%] top-[75%] size-1.5 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_9px_rgba(56,189,248,0.9)] sm:right-[46%]" />
            </div>
          </div>

          <div className="relative z-20 -mt-1 text-center">
            <div className="font-mono text-[7px] uppercase tracking-[0.24em] text-sky-400/70 sm:text-[8px] sm:tracking-[0.28em]">
              Core Infrastructure
            </div>

            <div className="mt-1 font-mono text-[6px] uppercase tracking-[0.14em] text-slate-600 sm:text-[7px] sm:tracking-[0.18em]">
              Stable · Secure · Connected
            </div>
          </div>

          <div className="relative z-20 mt-5 rounded-2xl border border-white/[0.055] bg-[#030918]/90 p-3.5 backdrop-blur-md sm:mt-6 sm:p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-slate-600 sm:text-[8px] sm:tracking-[0.25em]">
                System Status
              </span>

              <span className="text-right font-mono text-[6px] uppercase tracking-[0.14em] text-slate-700 sm:text-[7px] sm:tracking-[0.18em]">
                All Systems Operational
              </span>
            </div>

            <HubStatus
  label="Network infrastructure"
  value="CONNECTED"
/>

<HubStatus
  label="Hardware environment"
  value="READY"
/>

<HubStatus
  label="Support coverage"
  value="AVAILABLE"
/>
          </div>
        </div>

        <div className="flex h-11 items-center justify-between border-t border-white/[0.06] bg-[#030a18]/95 px-4 sm:h-12 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.7)]" />

            <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-slate-600 sm:text-[8px] sm:tracking-[0.22em]">
              Infrastructure Ready
            </span>
          </div>

          <span className="font-mono text-[7px] tracking-[0.14em] text-slate-700 sm:text-[8px] sm:tracking-[0.16em]">
            SYSTEM
          </span>
        </div>
      </div>
    </div>
  );
}

function CoreServer() {
  return (
    <div className="relative flex size-[92px] items-center justify-center min-[400px]:size-[104px] sm:size-[142px]">
      <div className="absolute -inset-6 rounded-full bg-sky-400/[0.065] blur-3xl sm:-inset-8" />

      <div className="relative flex size-full items-center justify-center rounded-[1.4rem] border border-sky-400/20 bg-[#020817]/95 shadow-[0_0_55px_-14px_rgba(56,189,248,0.6)] sm:rounded-[1.8rem]">
        <div className="absolute inset-3.5 rounded-[1rem] border border-sky-400/10 bg-sky-400/[0.015] min-[400px]:inset-4 sm:inset-5 sm:rounded-[1.35rem]" />

        <div className="relative flex flex-col items-center">
          <Server
            className="size-7 text-sky-400/90 min-[400px]:size-8 sm:size-10"
            strokeWidth={1.1}
          />

          <div className="mt-1.5 flex gap-1 sm:mt-2">
            <span className="size-1 rounded-full bg-sky-400" />
            <span className="size-1 rounded-full bg-sky-400/50" />
            <span className="size-1 rounded-full bg-sky-400/20" />
          </div>
        </div>

        <span className="absolute bottom-2.5 font-mono text-[5px] uppercase tracking-[0.24em] text-slate-600 sm:bottom-4 sm:text-[6px] sm:tracking-[0.28em]">
          CORE
        </span>
      </div>
    </div>
  );
}

function HubMetric({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.055] bg-[#030918]/80 px-2.5 py-2.5 min-[400px]:px-3 min-[400px]:py-3">
      <div className="flex items-center justify-between">
        <Icon className="size-3 text-sky-400/70 sm:size-3.5" strokeWidth={1.4} />

        <span className="size-1 rounded-full bg-emerald-400/60" />
      </div>

      <div className="mt-1.5 font-mono text-[6px] uppercase tracking-[0.14em] text-slate-600 sm:mt-2 sm:text-[7px] sm:tracking-[0.18em]">
        {label}
      </div>

      <div className="mt-1 font-mono text-[8px] text-sky-400/80 sm:text-[9px]">
        {value}
      </div>
    </div>
  );
}

function HubNode({
  icon: Icon,
  title,
  status,
}: {
  icon: LucideIcon;
  title: string;
  status: string;
}) {
  return (
    <div className="flex h-[84px] w-[96px] flex-col rounded-2xl border border-sky-400/10 bg-[#030918]/95 p-3 shadow-[0_15px_40px_-20px_rgba(14,165,233,0.35)] backdrop-blur-md min-[400px]:h-[92px] min-[400px]:w-[108px] min-[400px]:p-3.5 sm:h-[105px] sm:w-[138px] sm:p-4">
      <div className="flex items-center justify-between">
        <div className="flex size-6 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-400/[0.035] min-[400px]:size-7">
          <Icon
            className="size-3 text-sky-400/75 min-[400px]:size-3.5"
            strokeWidth={1.4}
          />
        </div>

        <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(74,222,128,0.7)]" />
      </div>

      <div className="mt-auto truncate text-[8px] font-medium text-slate-300 min-[400px]:text-[9px] sm:text-[10px]">
        {title}
      </div>

      <div className="mt-1 truncate font-mono text-[5px] uppercase tracking-[0.12em] text-slate-600 min-[400px]:text-[6px] min-[400px]:tracking-[0.16em]">
        {status}
      </div>
    </div>
  );
}

function HubStatus({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex items-center gap-2.5 sm:gap-3">
        <span className="size-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(74,222,128,0.7)]" />

        <span className="min-w-0 flex-1 truncate text-[9px] text-slate-400 sm:text-[10px]">
          {label}
        </span>

        <div className="hidden w-32 gap-1 sm:flex">
          <span className="h-1 flex-1 rounded-full bg-sky-400/70" />
          <span className="h-1 flex-1 rounded-full bg-sky-400/50" />
          <span className="h-1 flex-1 rounded-full bg-sky-400/30" />
          <span className="h-1 flex-1 rounded-full bg-sky-400/15" />
        </div>

        <span className="w-auto text-right font-mono text-[7px] uppercase tracking-[0.08em] text-sky-400/70 sm:text-[8px]">
          {value}
        </span>
      </div>
    </div>
  );
}