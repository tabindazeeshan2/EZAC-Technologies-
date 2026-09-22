"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Database,
  HardDrive,
  Server,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { GlowButton } from "@/components/glow-button";

const cloudProducts = [
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description:
      "Reliable cloud environments designed for performance, security and growth. We help you choose, configure and manage the right cloud foundation for your applications and data.",
    features: [
      "Managed cloud environments",
      "High-availability setups",
      "Auto-scaling configurations",
      "Cost-optimized architecture",
    ],
  },
  {
    icon: HardDrive,
    title: "VPS & Servers",
    description:
      "Dedicated and virtual private servers provisioned and tuned for your workloads. From development environments to production systems, we deliver stable and performant infrastructure.",
    features: [
      "VPS and dedicated servers",
      "Custom server configurations",
      "Resource monitoring",
      "Security hardening",
    ],
  },
  {
    icon: ArrowUpRight,
    title: "Application Deployment",
    description:
      "Smooth, repeatable deployments that get your applications into production with confidence. We handle the full path from build to live environment.",
    features: [
      "Zero-downtime deployments",
      "Environment configuration",
      "Rollback strategies",
      "Production readiness checks",
    ],
  },
  {
    icon: Workflow,
    title: "DevOps",
    description:
      "We build the operational practices and tooling that keep your systems running reliably. Infrastructure as code, monitoring and collaboration between development and operations.",
    features: [
      "Infrastructure as code",
      "Monitoring and alerting",
      "Log management",
      "Operational runbooks",
    ],
  },
  {
    icon: Code2,
    title: "CI / CD",
    description:
      "Automated pipelines that move code from commit to production faster and with fewer errors. Built for consistency, speed and team confidence.",
    features: [
      "Automated build pipelines",
      "Testing and quality gates",
      "Release automation",
      "Multi-environment support",
    ],
  },
  {
    icon: Database,
    title: "Backup Solutions",
    description:
      "Protect your data with reliable backup and recovery strategies. Designed so you can restore quickly and sleep better knowing your systems are covered.",
    features: [
      "Automated backup schedules",
      "Offsite and redundant storage",
      "Point-in-time recovery",
      "Disaster recovery planning",
    ],
  },
];

export default function CloudInfrastructurePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-260px] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-sky-500/[0.055] blur-[180px]" />

        <div className="absolute right-[-180px] top-[28%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.025] blur-[160px]" />

        <div className="absolute bottom-[-150px] left-[15%] h-[420px] w-[650px] rounded-full bg-sky-500/[0.025] blur-[150px]" />

        <div
          className="
            absolute inset-0 opacity-[0.018]
            [background-image:linear-gradient(rgba(56,189,248,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.55)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,8,23,0.45)_65%,rgba(2,8,23,0.9)_100%)]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

            {/* LEFT */}
            <Reveal>
              <div className="max-w-3xl">
                <div className="mb-8 flex items-center gap-3.5">
                  <span className="h-px w-11 bg-gradient-to-r from-sky-400 to-sky-400/0" />

                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.34em] text-sky-400/90">
                    Cloud & Infrastructure
                  </span>
                </div>

                <h1 className="text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.4rem] lg:leading-[0.94]">
                  Infrastructure
                  <span className="mt-2 block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                    built to perform.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                  We provide the infrastructure needed to deploy, operate and
                  scale your digital products reliably. From cloud hosting and
                  servers to DevOps and backup strategies, we keep your systems
                  running smoothly.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <GlowButton href="/#contact">
                    Start Your Project
                    <ArrowRight className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </GlowButton>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                  {[
                    "Cloud Infrastructure",
                    "DevOps",
                    "Deployment",
                    "Backup & Recovery",
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

            {/* RIGHT — SMALLER INFRASTRUCTURE CONTROL PANEL */}
            <Reveal delay={120}>
              <InfrastructurePanel />
            </Reveal>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE STACK */}
      <section className="relative border-y border-white/[0.055] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-14 max-w-3xl">
              <div className="flex items-center gap-3.5">
                <span className="h-px w-9 bg-gradient-to-r from-sky-400 to-sky-400/0" />

                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-sky-400/90">
                  Infrastructure Stack
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Everything behind
                <span className="bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  your product.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                From the infrastructure underneath your applications to the
                systems that deploy, monitor and protect them.
              </p>
            </div>
          </Reveal>

          {/* STACK */}
          <div className="space-y-3">
            {cloudProducts.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 50}>
                  <InfrastructureRow
                    icon={Icon}
                    title={item.title}
                    description={item.description}
                    features={item.features}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* RELIABILITY */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            {/* LEFT */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3.5">
                  <span className="h-px w-9 bg-gradient-to-r from-sky-400 to-sky-400/0" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-sky-400/90">
                    Built for Reliability
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                  Systems that stay
                  <span className="block bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">
                    ready.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
                  Infrastructure should work quietly in the background while
                  your team focuses on building and growing the product.
                </p>
              </div>
            </Reveal>

            {/* RIGHT */}
            <Reveal delay={100}>
              <div className="grid gap-3 sm:grid-cols-2">
                <ReliabilityCard
                  icon={Zap}
                  title="Performance"
                  text="Infrastructure configured around your workload and traffic."
                />

                <ReliabilityCard
                  icon={ShieldCheck}
                  title="Security"
                  text="Hardened environments with monitoring and controlled access."
                />

                <ReliabilityCard
                  icon={Workflow}
                  title="Automation"
                  text="Repeatable deployments and operational workflows."
                />

                <ReliabilityCard
                  icon={Database}
                  title="Recovery"
                  text="Backup and recovery strategies designed for continuity."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.055] py-28 sm:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.045] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/[0.055] text-sky-400 shadow-[0_0_40px_-10px_rgba(56,189,248,0.35)]">
              <Server className="size-7" strokeWidth={1.4} />
            </div>

            <h2 className="mt-10 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl sm:leading-[1.05]">
              Build on infrastructure
              <span className="mt-2 block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                you can depend on.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              Tell us about your applications, traffic and reliability goals.
              We’ll help design infrastructure that keeps everything running
              smoothly.
            </p>

            <div className="mt-11 flex justify-center">
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



function InfrastructurePanel() {
  return (
    <div className="relative mx-auto w-full max-w-[470px]">
      <div className="absolute -inset-12 rounded-full bg-sky-400/[0.035] blur-[100px]" />

      <div className="relative overflow-hidden rounded-3xl border border-sky-900/40 bg-[#030a18]/95 shadow-[0_35px_120px_-50px_rgba(14,165,233,0.42)] backdrop-blur-xl">

        {/* TOP BAR */}
        <div className="flex h-11 items-center justify-between border-b border-white/[0.06] px-4">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="size-1.5 rounded-full bg-sky-400" />
              <span className="size-1.5 rounded-full bg-sky-400/30" />
              <span className="size-1.5 rounded-full bg-sky-400/15" />
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-slate-500">
              Infrastructure / Control
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(74,222,128,0.8)]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
              Operational
            </span>
          </div>
        </div>

        {/* GRID */}
        <div
          className="
            relative min-h-[390px] overflow-hidden px-4 py-5
            [background-image:linear-gradient(rgba(56,189,248,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.35)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        >
          {/* VIGNETTE */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(3,10,24,0.55)_75%,rgba(3,10,24,0.95)_100%)]" />

          {/* TOP STATUS */}
          <div className="relative z-10 grid grid-cols-3 gap-2">
            <StatusMini label="CPU" value="24%" />
            <StatusMini label="MEMORY" value="41%" />
            <StatusMini label="UPTIME" value="99.99%" />
          </div>

          {/* SERVER RACK */}
          <div className="relative z-10 mx-auto mt-5 max-w-[340px]">
            <div className="rounded-2xl border border-sky-400/15 bg-[#061124]/90 p-2.5 shadow-[0_0_50px_-20px_rgba(56,189,248,0.45)]">
              <div className="mb-2.5 flex items-center justify-between px-2">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-slate-600">
                    Production Cluster
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    Core Infrastructure
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

                  <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-emerald-400/70">
                    Healthy
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <ServerRow
                  name="Application"
                  detail="Running"
                  load="32%"
                />

                <ServerRow
                  name="Database"
                  detail="Connected"
                  load="18%"
                />

                <ServerRow
                  name="Storage"
                  detail="Protected"
                  load="46%"
                />

                <ServerRow
                  name="Deployment"
                  detail="Ready"
                  load="12%"
                />
              </div>
            </div>
          </div>

          {/* CONNECTION SIGNAL */}
          <div className="relative z-10 mx-auto mt-5 flex max-w-[340px] items-center gap-2">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-400/30 to-sky-400/10" />

            <div className="flex items-center gap-2 rounded-full border border-sky-400/10 bg-[#030a18]/80 px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]" />

              <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-slate-600">
                Systems connected
              </span>
            </div>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-400/30 to-sky-400/10" />
          </div>

          {/* INFRASTRUCTURE LAYERS */}
          <div className="relative z-10 mx-auto mt-5 grid max-w-[340px] grid-cols-3 gap-2">
            <InfrastructureNode
              icon={Cloud}
              label="CLOUD"
              status="ONLINE"
            />

            <InfrastructureNode
              icon={Workflow}
              label="DEVOPS"
              status="ACTIVE"
            />

            <InfrastructureNode
              icon={Database}
              label="BACKUP"
              status="READY"
            />
          </div>

          {/* BOTTOM GRAPH */}
          <div className="relative z-10 mx-auto mt-5 max-w-[340px] rounded-xl border border-white/[0.05] bg-white/[0.012] p-2.5">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-slate-600">
                System Load
              </span>

              <span className="font-mono text-[7px] text-sky-400/60">
                LIVE
              </span>
            </div>

            <div className="flex h-8 items-end gap-[3px]">
              {[
                28,
                42,
                35,
                48,
                38,
                55,
                44,
                62,
                50,
                58,
                46,
                66,
                54,
                60,
                52,
                70,
                58,
                63,
                55,
                68,
                60,
                72,
                62,
                76,
              ].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-sm bg-sky-400/25 transition-all duration-500 hover:bg-sky-400/60"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex h-11 items-center justify-between border-t border-white/[0.06] bg-[#030a18]/95 px-4">
          <div className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.7)]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-slate-600">
              All systems operational
            </span>
          </div>

          <span className="font-mono text-[8px] tracking-[0.16em] text-slate-700">
            REAL-TIME
          </span>
        </div>
      </div>
    </div>
  );
}



function StatusMini({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.05] bg-white/[0.012] px-3 py-2">
      <div className="font-mono text-[7px] tracking-[0.2em] text-slate-600">
        {label}
      </div>

      <div className="mt-1.5 font-mono text-[10px] text-sky-400/80">
        {value}
      </div>
    </div>
  );
}



function ServerRow({
  name,
  detail,
  load,
}: {
  name: string;
  detail: string;
  load: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.045] bg-[#020817]/65 px-2.5 py-2">
      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-400/[0.035]">
        <Server
          className="size-3.5 text-sky-400/70"
          strokeWidth={1.5}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-medium text-slate-300">
            {name}
          </span>

          <span className="font-mono text-[7px] text-slate-600">
            {load}
          </span>
        </div>

        <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/[0.04]">
          <div
            className="h-full rounded-full bg-sky-400/50"
            style={{ width: load }}
          />
        </div>
      </div>

      <span className="hidden font-mono text-[7px] uppercase tracking-[0.12em] text-emerald-400/60 sm:block">
        {detail}
      </span>
    </div>
  );
}



function InfrastructureNode({
  icon: Icon,
  label,
  status,
}: {
  icon: typeof Cloud;
  label: string;
  status: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.05] bg-white/[0.012] px-2.5 py-2.5">
      <div className="flex items-center justify-between">
        <Icon
          className="size-3.5 text-sky-400/65"
          strokeWidth={1.5}
        />

        <span className="size-1 rounded-full bg-emerald-400/70" />
      </div>

      <div className="mt-2.5 font-mono text-[7px] tracking-[0.2em] text-slate-500">
        {label}
      </div>

      <div className="mt-1 text-[9px] text-slate-600">
        {status}
      </div>
    </div>
  );
}



function InfrastructureRow({
  icon: Icon,
  title,
  description,
  features,
}: {
  icon: typeof Cloud;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.055] bg-[#030918]/75 p-5 transition-all duration-400 hover:border-sky-400/20 hover:bg-[#061124]/85 sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[220px_1fr_1.1fr] lg:items-center lg:gap-10">

        {/* TITLE */}
        <div className="flex items-center gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/[0.045] text-sky-400 transition-all duration-300 group-hover:border-sky-400/30 group-hover:bg-sky-400/[0.08]">
            <Icon className="size-5" strokeWidth={1.5} />
          </div>

          <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
            {title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p className="max-w-xl text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
          {description}
        </p>

        {/* FEATURES */}
        <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2.5 text-xs text-slate-500"
            >
              <span className="flex size-4 shrink-0 items-center justify-center rounded-full border border-sky-400/15 bg-sky-400/[0.035]">
                <Check
                  className="size-2.5 text-sky-400/70"
                  strokeWidth={2}
                />
              </span>

              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



function ReliabilityCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Zap;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.055] bg-[#030918]/75 p-6 transition-all duration-400 hover:border-sky-400/20 hover:bg-[#061124]/85">
      <div className="flex size-10 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/[0.045] text-sky-400">
        <Icon className="size-4.5" strokeWidth={1.5} />
      </div>

      <h3 className="mt-5 text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}