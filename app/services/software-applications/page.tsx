"use client";

import {
  ArrowRight,
  BarChart3,
  Code2,
  Database,
  Globe2,
  Layers3,
  Network,
  Smartphone,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Purpose-built applications designed around your business processes.",
    tags: ["Web Apps", "Platforms", "Workflows"],
  },
  {
    icon: Network,
    title: "Business Systems",
    description:
      "Connected systems that bring teams, processes and information together.",
    tags: ["Integration", "Operations", "Automation"],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Mobile experiences that keep your business connected wherever work happens.",
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    icon: Layers3,
    title: "ERP & CRM",
    description:
      "Integrated platforms for customers, resources and everyday operations.",
    tags: ["ERP", "CRM", "Data"],
  },
  {
    icon: BarChart3,
    title: "Custom Dashboards",
    description:
      "Focused interfaces that turn complex business data into clear visibility.",
    tags: ["Analytics", "Reporting", "Insights"],
  },
  {
    icon: Globe2,
    title: "API Development",
    description:
      "Reliable connections between your applications, platforms and services.",
    tags: ["APIs", "Integration", "Connectivity"],
  },
];

const systemNodes = [
  {
    icon: Network,
    title: "API",
    detail: "CONNECTED",
    position: "left-[4%] top-[18%]",
  },
  {
    icon: Database,
    title: "DATA",
    detail: "CENTRAL",
    position: "right-[4%] top-[18%]",
  },
  {
    icon: Smartphone,
    title: "MOBILE",
    detail: "READY",
    position: "left-[4%] bottom-[18%]",
  },
  {
    icon: Workflow,
    title: "WORKFLOW",
    detail: "AUTOMATED",
    position: "right-[4%] bottom-[18%]",
  },
];

export default function SoftwareApplicationsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
     
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-sky-500/[0.035] blur-[170px]" />

        <div className="absolute -right-40 top-[25%] h-[550px] w-[550px] rounded-full bg-blue-500/[0.025] blur-[180px]" />

        <div className="absolute bottom-[-150px] left-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.5) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:px-10 lg:pb-28">
        <div className="grid items-center gap-16 lg:grid-cols-[0.82fr_1.18fr]">
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-sky-400/70" />

              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-sky-300/80">
               Software & Applications
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[70px]">
              Software that
              <br />
              <span className="bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                moves business.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
              Custom software and connected applications designed to simplify
              operations, connect information and help your business move
              forward.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="group inline-flex h-10 items-center justify-center rounded-xl bg-[#078cff] px-5 text-[13px] font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,140,255,0.25)] transition-all duration-300 hover:bg-[#159cff] hover:shadow-[0_10px_35px_-8px_rgba(0,140,255,0.4)]"
              >
                Start Your Project
                <ArrowRight
                  size={14}
                  strokeWidth={2.2}
                  className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#solutions"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 text-[13px] font-semibold text-slate-300 transition-all duration-300 hover:border-sky-400/25 hover:bg-sky-400/[0.05] hover:text-white"
              >
                View Solutions
              </a>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <div className="h-px w-14 bg-sky-400/30" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600">
                Systems / Applications / Integration
              </span>
            </div>
          </div>

          
          <div className="relative">
            <div className="absolute inset-10 rounded-full bg-sky-500/[0.04] blur-[100px]" />

            <div className="relative h-[480px] overflow-hidden rounded-3xl border border-sky-900/40 bg-[#030a18]/90 shadow-[0_35px_120px_-55px_rgba(56,189,248,0.45)] sm:h-[540px]">
              {/* Header */}
              <div className="absolute inset-x-0 top-0 z-40 flex h-12 items-center justify-between border-b border-white/[0.06] px-5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400/15" />
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-slate-500">
                    EZAC / Software Core
                  </span>
                </div>

                <span className="font-mono text-[9px] tracking-[0.22em] text-slate-600">
                  SYS.02
                </span>
              </div>

              {/* Grid */}
              <div
                className="absolute inset-0 top-12 opacity-[0.28]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(56,189,248,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.12) 1px,transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              {/* Horizontal central line */}
              <div className="absolute left-[13%] right-[13%] top-1/2 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />

              {/* Vertical central line */}
              <div className="absolute bottom-[15%] left-1/2 top-[15%] w-px bg-gradient-to-b from-transparent via-sky-400/15 to-transparent" />

              
              <div className="absolute left-[20%] top-[29%] h-px w-[27%] rotate-[23deg] bg-sky-400/20" />

              <div className="absolute right-[20%] top-[29%] h-px w-[27%] -rotate-[23deg] bg-sky-400/20" />

              <div className="absolute bottom-[29%] left-[20%] h-px w-[27%] -rotate-[23deg] bg-sky-400/20" />

              <div className="absolute bottom-[29%] right-[20%] h-px w-[27%] rotate-[23deg] bg-sky-400/20" />

              {/* Connection points */}
              <div className="absolute left-[31%] top-[34%] h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />

              <div className="absolute right-[31%] top-[34%] h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />

              <div className="absolute bottom-[34%] left-[31%] h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />

              <div className="absolute bottom-[34%] right-[31%] h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />

              
              {systemNodes.map((node) => {
                const Icon = node.icon;

                return (
                  <div
                    key={node.title}
                    className={`absolute ${node.position} z-20`}
                  >
                    <div className="group flex h-[76px] w-[105px] flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-[#071226]/90 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/25 hover:bg-[#09172c] sm:h-[86px] sm:w-[120px]">
                      <Icon
                        size={18}
                        strokeWidth={1.4}
                        className="text-sky-400 transition-transform duration-300 group-hover:scale-110"
                      />

                      <span className="mt-2 font-mono text-[8px] tracking-[0.25em] text-slate-300">
                        {node.title}
                      </span>

                      <span className="mt-1 font-mono text-[7px] tracking-[0.2em] text-slate-600">
                        {node.detail}
                      </span>
                    </div>
                  </div>
                );
              })}

              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute -inset-14 rounded-full border border-sky-400/[0.04]" />

                <div className="absolute -inset-9 rounded-full border border-sky-400/[0.07]" />

                <div className="absolute -inset-4 rounded-full border border-sky-400/[0.1]" />

                <div className="relative flex h-[160px] w-[160px] flex-col items-center justify-center rounded-[32px] border border-sky-400/20 bg-[#061127]/95 shadow-[0_0_90px_-30px_rgba(56,189,248,0.65)] backdrop-blur-xl sm:h-[180px] sm:w-[180px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.06]">
                    <Code2
                      size={23}
                      strokeWidth={1.4}
                      className="text-sky-300"
                    />
                  </div>

                  <span className="mt-4 font-mono text-[8px] uppercase tracking-[0.32em] text-sky-400/70">
                    APPLICATION
                  </span>

                  <span className="mt-1 text-base font-semibold tracking-tight text-white">
                    Core System
                  </span>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />

                    <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-slate-500">
                      Operational
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom information */}
              <div className="absolute inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-white/[0.06] bg-[#030a18]/85 px-5 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-slate-500">
                    System connected
                  </span>
                </div>

                <span className="font-mono text-[8px] tracking-[0.2em] text-sky-400/50">
                  04 MODULES
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section
        id="solutions"
        className="relative mx-auto max-w-7xl scroll-mt-20 px-5 pb-20 sm:px-8 lg:px-10"
      >
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-sky-400/60" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-sky-300/70">
                What We Build
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Software for the way
              <br />
              <span className="bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                your business works.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 lg:justify-self-end">
            From individual applications to connected business platforms, we
            create software around your actual operational requirements.
          </p>
        </div>


        <div className="overflow-hidden rounded-3xl border border-sky-900/40 bg-[#040b1b]/75 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className={`group relative min-h-[270px] p-7 transition-colors duration-300 hover:bg-sky-400/[0.025] sm:p-8 ${
                    index < 3 ? "border-b border-white/[0.06]" : ""
                  } ${
                    index % 3 !== 2
                      ? "lg:border-r lg:border-white/[0.06]"
                      : ""
                  } ${
                    index % 2 === 0
                      ? "md:border-r md:border-white/[0.06] lg:border-r"
                      : ""
                  }`}
                >
                  {/* Top accent */}
                  <div className="absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-sky-400/0 via-sky-400/0 to-sky-400/0 transition-all duration-500 group-hover:via-sky-400/50 sm:left-8 sm:right-8" />

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02] transition-all duration-300 group-hover:border-sky-400/20 group-hover:bg-sky-400/[0.05]">
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-sky-400 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em] text-white">
                    {solution.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    {solution.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.06] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-600 transition-colors duration-300 group-hover:border-sky-400/[0.1] group-hover:text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

     
      <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        <div className="flex items-center gap-5">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400/70 shadow-[0_0_12px_rgba(56,189,248,0.6)]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600">
              Software / Applications / Integration
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-sky-400/30" />
          </div>

          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
        </div>
      </div>

      <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-sky-900/40 bg-[#040b1b]/85 px-7 py-14 text-center shadow-[0_30px_100px_-55px_rgba(56,189,248,0.35)] backdrop-blur-xl sm:px-12 sm:py-16">
          {/* CTA glow */}
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.035] blur-[110px]" />

          <div className="relative">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-sky-400/50" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-sky-300/70">
                Build Something Useful
              </span>

              <span className="h-px w-7 bg-sky-400/50" />
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Have an idea for a
              <br />
              <span className="bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                software solution?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-500">
              Let&apos;s turn the requirement into a focused, scalable and
              practical digital product.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="group inline-flex h-10 items-center justify-center rounded-xl bg-[#078cff] px-6 text-[13px] font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,140,255,0.25)] transition-all duration-300 hover:bg-[#159cff] hover:shadow-[0_10px_35px_-8px_rgba(0,140,255,0.4)]"
              >
                Start Your Project

                <ArrowRight
                  size={14}
                  strokeWidth={2.2}
                  className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}