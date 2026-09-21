"use client";

import {
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  Database,
  LockKeyhole,
  Network,
  Radar,
  ShieldCheck,
  Activity,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { GlowButton } from "@/components/glow-button";

const securityProducts = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "We help protect your systems, networks and data from threats. From assessments and hardening to ongoing monitoring, security is built into everything we do.",
    features: [
      "Security assessments",
      "Endpoint and network protection",
      "Access control and policies",
      "Incident response planning",
    ],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Reliable database design, setup and management so your data stays available, consistent and ready for the applications that depend on it.",
    features: [
      "Database design and setup",
      "Performance tuning",
      "Backup and recovery",
      "Migration and upgrades",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Turn raw data into clear insights. We build pipelines, models and reports that help you understand performance, trends and opportunities.",
    features: [
      "Data pipelines and ETL",
      "Reporting and visualization",
      "Custom analytics models",
      "Self-serve dashboards",
    ],
  },
  {
    icon: Activity,
    title: "Business Intelligence",
    description:
      "BI solutions that give leaders and teams a single view of the business. Designed for clarity, speed and decisions that matter.",
    features: [
      "Executive dashboards",
      "KPI tracking systems",
      "Cross-department reporting",
      "Automated insights delivery",
    ],
  },
  {
    icon: Network,
    title: "System Integration",
    description:
      "Connect the tools and platforms your business already uses. We build the integrations that keep data flowing and reduce manual work between systems.",
    features: [
      "Application integrations",
      "Middleware and connectors",
      "Data synchronization",
      "Legacy system bridging",
    ],
  },
  {
    icon: Code2,
    title: "API Integration",
    description:
      "Secure, well-structured API connections that link your products, partners and internal systems. Built for reliability and long-term maintainability.",
    features: [
      "Third-party API connections",
      "Custom API development",
      "Authentication and security",
      "Monitoring and versioning",
    ],
  },
];

export default function SecurityDataPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
    
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-240px] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-sky-500/[0.055] blur-[180px]" />

        <div className="absolute -right-40 top-[24%] h-[540px] w-[540px] rounded-full bg-cyan-400/[0.025] blur-[160px]" />

        <div className="absolute bottom-[-160px] left-[12%] h-[450px] w-[700px] rounded-full bg-sky-500/[0.025] blur-[150px]" />

        <div
          className="
            absolute inset-0 opacity-[0.018]
            [background-image:linear-gradient(rgba(56,189,248,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.55)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,8,23,0.45)_65%,rgba(2,8,23,0.9)_100%)]" />
      </div>

      
      <section className="relative overflow-visible pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16 xl:gap-20">
            {/* LEFT */}
            <Reveal>
              <div className="max-w-[700px]">
                <div className="mb-7 flex items-center gap-3.5">
                  <span className="h-px w-11 bg-gradient-to-r from-sky-400 to-sky-400/0" />

                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.34em] text-sky-400/90">
                    Security & Data
                  </span>
                </div>

                {/* Safe line-height prevents descender clipping */}
                <h1
                  className="
                    max-w-[700px]
                    overflow-visible
                    text-[3.75rem]
                    font-semibold
                    leading-[1.06]
                    tracking-[-0.055em]
                    text-white
                    sm:text-[4.65rem]
                    sm:leading-[1.03]
                    lg:text-[5.15rem]
                    lg:leading-[1.02]
                    xl:text-[5.45rem]
                    xl:leading-[1.02]
                  "
                >
                  <span className="block">Protect, connect</span>

                  <span
                    className="
                      mt-1 block
                      bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff]
                      bg-clip-text
                      pb-[0.14em]
                      text-transparent
                    "
                  >
                    and unlock
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
                    your data.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-8">
                  We help organizations protect their technology environment,
                  connect their systems and turn business data into useful
                  insights—so you can operate securely and make better
                  decisions.
                </p>

                <div className="mt-9">
                  <GlowButton href="/#contact">
                    Start Your Project
                    <ArrowRight className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </GlowButton>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                  {[
                    "Cybersecurity",
                    "Data",
                    "Analytics",
                    "Integration",
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

            {/* RIGHT */}
            <Reveal delay={120}>
              <SecurityDataPanel />
            </Reveal>
          </div>
        </div>
      </section>

     
      <section
        id="capabilities"
        className="relative border-y border-white/[0.055] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-14 max-w-3xl">
              <div className="flex items-center gap-3.5">
                <span className="h-px w-9 bg-gradient-to-r from-sky-400 to-sky-400/0" />

                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-sky-400/90">
                  What We Provide
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Security, data and
                <span className="bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  connected systems.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                From protecting your technology environment to transforming
                data into useful information and connecting the systems behind
                your business.
              </p>
            </div>
          </Reveal>

        
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.055] md:grid-cols-2 lg:grid-cols-3">
            {securityProducts.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 55}>
                  <SecurityService
                    icon={Icon}
                    title={item.title}
                    description={item.description}
                    features={item.features}
                    featured={index === 0}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>


      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.045] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/[0.055] text-sky-400 shadow-[0_0_40px_-10px_rgba(56,189,248,0.35)]">
              <ShieldCheck className="size-7" strokeWidth={1.4} />
            </div>

            <h2 className="mt-10 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl sm:leading-[1.05]">
              Ready to protect
              <span className="mt-2 block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
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
                <ArrowRight className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}


function SecurityDataPanel() {
  return (
    <div className="relative mx-auto w-full max-w-[570px]">
      <div className="absolute -inset-20 rounded-full bg-sky-400/[0.035] blur-[130px]" />

      <div className="relative overflow-hidden rounded-[2rem] border border-sky-900/45 bg-[#030a18]/95 shadow-[0_35px_120px_-50px_rgba(14,165,233,0.45)] backdrop-blur-xl">
        {/* TOP BAR */}
        <div className="flex h-12 items-center justify-between border-b border-white/[0.06] px-5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="size-1.5 rounded-full bg-sky-400" />
              <span className="size-1.5 rounded-full bg-sky-400/30" />
              <span className="size-1.5 rounded-full bg-sky-400/15" />
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-slate-500">
              Security / Data Center
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(74,222,128,0.8)]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-slate-600">
              Protected
            </span>
          </div>
        </div>

        {/* MAIN VISUAL */}
        <div
          className="
            relative min-h-[560px] overflow-hidden p-5
            [background-image:linear-gradient(rgba(56,189,248,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.3)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,rgba(3,10,24,0.42)_58%,rgba(3,10,24,0.96)_100%)]" />

          {/* TOP STATUS */}
          <div className="relative z-20 grid grid-cols-3 gap-2">
            <SecurityMetric
              icon={ShieldCheck}
              label="SECURITY"
              value="ACTIVE"
            />

            <SecurityMetric
              icon={Database}
              label="DATA"
              value="SYNCED"
            />

            <SecurityMetric
              icon={Network}
              label="SYSTEMS"
              value="CONNECTED"
            />
          </div>

          {/* CENTRAL SECURITY CORE */}
          <div className="relative z-20 mx-auto mt-8 flex h-[225px] max-w-[400px] items-center justify-center">
            {/* outer rings */}
            <div className="absolute size-[210px] rounded-full border border-sky-400/[0.07]" />

            <div className="absolute size-[170px] rounded-full border border-sky-400/[0.09]" />

            <div className="absolute size-[135px] rounded-full border border-sky-400/[0.12]" />

            {/* orbit points */}
            <span className="absolute left-[16%] top-[28%] size-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]" />

            <span className="absolute right-[15%] top-[34%] size-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <span className="absolute bottom-[20%] left-[30%] size-1 rounded-full bg-sky-400/70" />

            <span className="absolute bottom-[24%] right-[29%] size-1 rounded-full bg-sky-400/70" />

            {/* CORE */}
            <div className="relative flex size-[112px] items-center justify-center rounded-[2rem] border border-sky-400/20 bg-[#020817]/95 shadow-[0_0_60px_-12px_rgba(56,189,248,0.65)]">
              <div className="absolute inset-4 rounded-[1.3rem] border border-sky-400/10 bg-sky-400/[0.015]" />

              <div className="relative flex flex-col items-center">
                <LockKeyhole
                  className="size-9 text-sky-400/90"
                  strokeWidth={1.2}
                />

                <div className="mt-2 flex gap-1">
                  <span className="size-1 rounded-full bg-emerald-400" />
                  <span className="size-1 rounded-full bg-sky-400/50" />
                  <span className="size-1 rounded-full bg-sky-400/20" />
                </div>
              </div>

              <span className="absolute bottom-3 font-mono text-[6px] uppercase tracking-[0.25em] text-slate-600">
                SECURE CORE
              </span>
            </div>
          </div>

          {/* CORE LABEL */}
          <div className="relative z-20 -mt-1 text-center">
            <div className="font-mono text-[8px] uppercase tracking-[0.28em] text-sky-400/70">
              Protected Data Environment
            </div>

            <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.18em] text-slate-600">
              Secure · Connected · Observable
            </div>
          </div>

          {/* DATA FLOW */}
          <div className="relative z-20 mx-auto mt-7 grid max-w-[400px] grid-cols-3 gap-2">
            <DataFlow
              icon={Database}
              label="DATA"
              value="SYNCED"
            />

            <DataFlow
              icon={BarChart3}
              label="INSIGHTS"
              value="READY"
            />

            <DataFlow
              icon={Network}
              label="APIs"
              value="ACTIVE"
            />
          </div>

          {/* THREAT / DATA STATUS */}
          <div className="relative z-20 mx-auto mt-5 max-w-[400px] rounded-2xl border border-white/[0.055] bg-[#030918]/90 p-4 backdrop-blur-md">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-slate-600">
                Environment Status
              </span>

              <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-emerald-400/60">
                Monitoring
              </span>
            </div>

            <SecurityStatus
              label="Threat protection"
              value="98%"
            />

            <SecurityStatus
              label="Data availability"
              value="99%"
            />

            <SecurityStatus
              label="System connectivity"
              value="96%"
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex h-12 items-center justify-between border-t border-white/[0.06] bg-[#030a18]/95 px-5">
          <div className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.7)]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-slate-600">
              Security Layer Active
            </span>
          </div>

          <span className="font-mono text-[8px] tracking-[0.16em] text-slate-700">
            LIVE
          </span>
        </div>
      </div>
    </div>
  );
}



function SecurityMetric({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.055] bg-[#030918]/80 px-3 py-3">
      <div className="flex items-center justify-between">
        <Icon
          className="size-3.5 text-sky-400/70"
          strokeWidth={1.4}
        />

        <span className="size-1 rounded-full bg-emerald-400/60" />
      </div>

      <div className="mt-2 font-mono text-[7px] uppercase tracking-[0.18em] text-slate-600">
        {label}
      </div>

      <div className="mt-1 font-mono text-[9px] text-sky-400/80">
        {value}
      </div>
    </div>
  );
}



function DataFlow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.05] bg-[#020817]/75 px-3 py-3">
      <div className="flex items-center justify-between">
        <Icon
          className="size-3.5 text-sky-400/65"
          strokeWidth={1.4}
        />

        <span className="size-1 rounded-full bg-sky-400/60" />
      </div>

      <div className="mt-2 font-mono text-[7px] uppercase tracking-[0.18em] text-slate-600">
        {label}
      </div>

      <div className="mt-1 text-[9px] text-slate-400">
        {value}
      </div>
    </div>
  );
}


function SecurityStatus({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex items-center gap-3">
        <span className="size-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(74,222,128,0.7)]" />

        <span className="min-w-0 flex-1 truncate text-[10px] text-slate-400">
          {label}
        </span>

        <div className="hidden w-28 sm:block">
          <div className="h-1 overflow-hidden rounded-full bg-white/[0.04]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-500/80 to-cyan-400/90"
              style={{ width: value }}
            />
          </div>
        </div>

        <span className="w-9 text-right font-mono text-[8px] text-sky-400/70">
          {value}
        </span>
      </div>
    </div>
  );
}



function SecurityService({
  icon: Icon,
  title,
  description,
  features,
  featured = false,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`
        group relative h-full overflow-hidden
        bg-[#030918]/90
        p-6
        transition-all duration-500
        hover:bg-[#061124]
        sm:p-7
        ${featured ? "lg:col-span-1" : ""}
      `}
    >
      {/* subtle hover glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_48%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        {/* HEADER */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-11 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/[0.045] text-sky-400 transition-all duration-300 group-hover:border-sky-400/30 group-hover:bg-sky-400/[0.08]">
            <Icon className="size-5" strokeWidth={1.5} />
          </div>

          <span className="mt-2 size-1.5 rounded-full bg-sky-400/25 transition-all duration-300 group-hover:bg-sky-400 group-hover:shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
        </div>

        {/* TITLE */}
        <h3 className="mt-6 text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-sky-50">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
          {description}
        </p>

        {/* FEATURES */}
        <div className="mt-auto pt-7">
          <div className="border-t border-white/[0.055] pt-5">
            <div className="mb-4 font-mono text-[8px] uppercase tracking-[0.25em] text-slate-600">
              Service scope
            </div>

            <div className="space-y-2.5">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2.5 text-[11px] leading-5 text-slate-500 transition-colors duration-300 group-hover:text-slate-400"
                >
                  <span className="mt-[6px] flex size-3 shrink-0 items-center justify-center rounded-full border border-sky-400/15 bg-sky-400/[0.035]">
                    <Check
                      className="size-2 text-sky-400/70"
                      strokeWidth={2.2}
                    />
                  </span>

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ACCENT */}
          <div className="mt-6 h-px w-8 bg-sky-400/30 transition-all duration-500 group-hover:w-14 group-hover:bg-sky-400" />
        </div>
      </div>
    </div>
  );
}