"use client";

import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Database,
  Headphones,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Reveal } from "@/components/reveal";

const aiProducts = [
  {
    icon: BrainCircuit,
    title: "AI Applications",
    description:
      "We build intelligent applications that understand context, support decisions and deliver real value. From internal tools to customer-facing products, AI is embedded where it creates the most impact.",
    features: [
      "Custom AI-powered applications",
      "Intelligent decision support",
      "Context-aware experiences",
      "Secure and private AI deployments",
    ],
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Autonomous agents that handle multi-step tasks, research, and workflows on your behalf. Designed to operate reliably within your systems and business rules.",
    features: [
      "Task-oriented AI agents",
      "Multi-step workflow agents",
      "Research and analysis agents",
      "Human-in-the-loop controls",
    ],
  },
  {
    icon: Headphones,
    title: "AI Chatbots",
    description:
      "Conversational AI that answers questions, guides users and resolves requests around the clock. Built to sound natural and stay accurate to your knowledge base.",
    features: [
      "Customer support chatbots",
      "Internal knowledge assistants",
      "Lead qualification bots",
      "Multi-channel deployment",
    ],
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "We identify repetitive processes and turn them into reliable automated flows. Less manual work, fewer errors, and more time for high-value activities.",
    features: [
      "End-to-end process automation",
      "Approval and notification flows",
      "Document and data handling",
      "Cross-system orchestration",
    ],
  },
  {
    icon: Network,
    title: "AI Integrations",
    description:
      "Connect AI capabilities into your existing tools and platforms. We handle the integration layer so models, data and applications work together smoothly.",
    features: [
      "LLM and model integrations",
      "CRM and ERP AI connectors",
      "Custom tool calling",
      "Secure data pipelines",
    ],
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "Targeted automation of specific business processes—from data entry and reporting to customer onboarding. Focused solutions that deliver measurable efficiency gains.",
    features: [
      "Robotic process automation",
      "Scheduled and event-driven jobs",
      "Error handling and retries",
      "Audit logs and monitoring",
    ],
  },
];

export default function AIAutomationPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-sky-500/[0.055] blur-[180px]" />

        <div className="absolute -right-48 top-[28%] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.025] blur-[170px]" />

        <div className="absolute -left-48 bottom-[8%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.025] blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.5) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,8,23,0.35)_60%,rgba(2,8,23,0.9)_100%)]" />
      </div>

 
      <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40 lg:px-10 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      
          <Reveal>
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-gradient-to-r from-sky-400 to-transparent" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-sky-400">
                AI & Automation
                </span>
              </div>

              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.7rem]">
                Intelligent systems
                <span className="block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                  that work for you.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                We build intelligent solutions that automate repetitive work,
                improve efficiency and create smarter customer and business
                experiences. From AI agents and chatbots to full process
                automation, we help you put intelligence to work.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="group inline-flex h-10 items-center justify-center rounded-xl bg-[#078cff] px-5 text-[13px] font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,140,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#159cff] hover:shadow-[0_10px_35px_-8px_rgba(0,140,255,0.4)]"
                >
                  Start Your Project

                  <ArrowRight
                    size={14}
                    strokeWidth={2.2}
                    className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#capabilities"
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 text-[13px] font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/25 hover:bg-sky-400/[0.04] hover:text-white"
                >
                  Explore AI Capabilities
                </a>
              </div>

              {/* Technical metadata */}
              <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/[0.06] py-5">
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-slate-600">
                    Intelligence
                  </span>

                  <p className="mt-2 text-xs text-slate-300">
                    AI-powered
                  </p>
                </div>

                <div className="border-l border-white/[0.06] pl-5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-slate-600">
                    Operations
                  </span>

                  <p className="mt-2 text-xs text-slate-300">
                    Automated
                  </p>
                </div>

                <div className="border-l border-white/[0.06] pl-5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-slate-600">
                    Systems
                  </span>

                  <p className="mt-2 text-xs text-slate-300">
                    Connected
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

      
          <Reveal delay={120}>
            <div className="relative mx-auto w-full max-w-[570px]">
              <div className="absolute -inset-16 rounded-full bg-cyan-400/[0.035] blur-[120px]" />

              <div className="relative min-h-[510px] overflow-hidden rounded-3xl border border-sky-900/40 bg-[#030a18]/95 shadow-[0_35px_120px_-50px_rgba(14,165,233,0.4)] backdrop-blur-xl sm:min-h-[550px]">

             
                <div className="absolute inset-x-0 top-0 z-30 flex h-12 items-center justify-between border-b border-white/[0.06] px-5">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400/30" />
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400/15" />
                    </div>

                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-500">
                      AI / Real-Time Processing
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(74,222,128,0.8)]" />

                    <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-slate-600">
                      System Active
                    </span>
                  </div>
                </div>

                
                <div
                  className="absolute inset-0 top-12 opacity-[0.15]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(56,189,248,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.15) 1px,transparent 1px)",
                    backgroundSize: "46px 46px",
                  }}
                />

                {/* Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(2,8,23,0.25)_55%,rgba(2,8,23,0.75)_100%)]" />

                
                
                <div className="absolute inset-x-8 bottom-[95px] top-[100px]">

                  
                  <div className="absolute left-0 top-[24%]">
                    <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-slate-600">
                      Input Stream
                    </span>

                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-sky-400/70" />
                        <span className="h-px w-16 bg-gradient-to-r from-sky-400/40 to-transparent" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-sky-400/40" />
                        <span className="h-px w-10 bg-gradient-to-r from-sky-400/25 to-transparent" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-sky-400/30" />
                        <span className="h-px w-20 bg-gradient-to-r from-sky-400/20 to-transparent" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2">

                    {/* Outer glow */}
                    <div className="absolute -inset-20 rounded-full bg-sky-400/[0.035] blur-[55px]" />

                    {/* Processing rings */}
                    <div className="absolute -inset-14 rounded-full border border-sky-400/[0.035]" />

                    <div className="absolute -inset-8 rounded-full border border-sky-400/[0.055]" />

                    {/* Engine */}
                    <div className="relative flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full border border-sky-400/20 bg-[#061127]/95 shadow-[0_0_80px_-25px_rgba(56,189,248,0.75)] backdrop-blur-xl sm:h-[165px] sm:w-[165px]">

                      {/* Neural pattern */}
                      <div className="absolute inset-5 rounded-full border border-dashed border-sky-400/[0.12]" />

                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/[0.06]">
                        <BrainCircuit
                          size={25}
                          strokeWidth={1.2}
                          className="text-sky-300"
                        />

                        <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
                      </div>

                      <span className="mt-3 font-mono text-[7px] uppercase tracking-[0.35em] text-sky-400/65">
                        AI ENGINE
                      </span>

                      <span className="mt-1 text-xs font-semibold text-white">
                        Processing
                      </span>
                    </div>
                  </div>

                 
                  <div className="absolute right-0 top-[24%] text-right">
                    <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-slate-600">
                      Output Stream
                    </span>

                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-end gap-2">
                        <span className="h-px w-16 bg-gradient-to-l from-cyan-400/40 to-transparent" />
                        <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
                      </div>

                      <div className="flex items-center justify-end gap-2">
                        <span className="h-px w-10 bg-gradient-to-l from-cyan-400/25 to-transparent" />
                        <span className="h-1 w-1 rounded-full bg-cyan-400/40" />
                      </div>

                      <div className="flex items-center justify-end gap-2">
                        <span className="h-px w-20 bg-gradient-to-l from-cyan-400/20 to-transparent" />
                        <span className="h-1 w-1 rounded-full bg-cyan-400/30" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-[69%] w-full -translate-x-1/2">
                    <div className="relative flex h-[55px] items-center justify-center overflow-hidden">

                      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

                      <div className="relative flex h-full items-center justify-center gap-[3px]">
                        {[
                          14, 22, 10, 30, 18, 38, 25, 48, 32, 58, 42, 68,
                          50, 34, 62, 45, 72, 38, 55, 30, 46, 20, 35, 15,
                        ].map((height, index) => (
                          <span
                            key={index}
                            className="w-[2px] rounded-full bg-sky-400/40"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>

                      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_16px_rgba(56,189,248,0.9)]" />
                    </div>

                    <div className="mt-3 text-center">
                      <span className="font-mono text-[7px] uppercase tracking-[0.35em] text-slate-700">
                       
                      </span>
                    </div>
                  </div>

                
                  <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-2">
                    <AIProcessingMetric
                      label="DATA"
                      value="ACTIVE"
                    />

                    <AIProcessingMetric
                      label="REASON"
                      value="OPTIMIZED"
                      active
                    />

                    <AIProcessingMetric
                      label="ACTION"
                      value="READY"
                    />
                  </div>
                </div>

              
                <div className="absolute inset-x-0 bottom-0 z-30 flex h-12 items-center justify-between border-t border-white/[0.06] bg-[#030a18]/95 px-5">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(74,222,128,0.7)]" />

                    <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-slate-600">
                      Processing in real time
                    </span>
                  </div>

                 
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      
      <section
        id="capabilities"
        className="relative border-y border-white/[0.055] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-gradient-to-r from-sky-400 to-transparent" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-sky-400">
                    What We Build
                  </span>
                </div>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
                  AI and automation
                  <span className="bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                    {" "}
                    designed for real impact.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-500 lg:justify-self-end">
                Intelligent technology that supports people, automates
                processes and connects the systems behind your business.
              </p>
            </div>
          </Reveal>

    
          <div className="mt-14 overflow-hidden rounded-3xl border border-sky-900/40 bg-[#040b1b]/75 backdrop-blur-xl">

            {aiProducts.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 50}>
                  <article
                    className={`group relative ${
                      index !== aiProducts.length - 1
                        ? "border-b border-white/[0.06]"
                        : ""
                    }`}
                  >
                    {/* Hover background */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-400/[0.025] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Active edge */}
                    <div className="absolute bottom-0 left-0 top-0 w-px bg-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative grid gap-6 px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[72px_0.85fr_1fr] lg:items-center lg:gap-10 lg:px-10">

                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02] transition-all duration-300 group-hover:border-sky-400/25 group-hover:bg-sky-400/[0.05]">
                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className="text-sky-400 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Main content */}
                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-sky-50 sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                          {item.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {item.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/70 shadow-[0_0_8px_rgba(56,189,248,0.4)]" />

                            <span className="text-xs text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

     
      <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-sky-900/40 bg-[#040b1b]/80 p-7 shadow-[0_30px_100px_-60px_rgba(56,189,248,0.35)] backdrop-blur-xl sm:p-10 lg:p-12">

            <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-sky-400/[0.035] blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-20">

              {/* Text */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-sky-400/60" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-sky-400/80">
                    Intelligence in Action
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Connect intelligence
                  <span className="block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                    to the work.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
                  AI becomes valuable when it is connected to the people,
                  information and processes that keep your business moving.
                </p>
              </div>

              {/* Process */}
              <div className="grid gap-3 sm:grid-cols-3">

                <FlowItem
                  icon={Database}
                  title="DATA"
                  description="Information"
                />

                <FlowConnector />

                <FlowItem
                  icon={BrainCircuit}
                  title="AI"
                  description="Intelligence"
                  highlight
                />

                <FlowConnector />

                <FlowItem
                  icon={Workflow}
                  title="ACTION"
                  description="Automation"
                />

              </div>
            </div>
          </div>
        </Reveal>
      </section>

      
      <div className="mx-auto max-w-7xl px-5 pb-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-5">

          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400/70 shadow-[0_0_12px_rgba(56,189,248,0.6)]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600">
              Intelligence / Automation / Systems
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-sky-400/30" />
          </div>

          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />

        </div>
      </div>

      <section className="relative overflow-hidden pb-28 pt-20 sm:pb-32 sm:pt-24">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.04] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">

          <Reveal>

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/[0.055] text-sky-400 shadow-[0_0_30px_-10px_rgba(56,189,248,0.4)]">
              <Sparkles size={23} strokeWidth={1.4} />
            </div>

            <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600">
              Start a Conversation
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl sm:leading-[1.05]">
              Ready to put AI
              <span className="block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                to work for you?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Tell us about the repetitive work, customer touchpoints or
              decisions you want to improve. We&apos;ll help design intelligent
              solutions that deliver real results.
            </p>

            <div className="mt-9 flex justify-center">
              <a
                href="/#contact"
                className="group inline-flex h-10 items-center justify-center rounded-xl bg-[#078cff] px-5 text-[13px] font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,140,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#159cff] hover:shadow-[0_10px_35px_-8px_rgba(0,140,255,0.4)]"
              >
                Start Your Project

                <ArrowRight
                  size={14}
                  strokeWidth={2.2}
                  className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

          </Reveal>
        </div>
      </section>
    </main>
  );
}



function AIProcessingMetric({
  label,
  value,
  active = false,
}: {
  label: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-3 py-3 ${
        active
          ? "border-sky-400/15 bg-sky-400/[0.035]"
          : "border-white/[0.05] bg-white/[0.012]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[7px] tracking-[0.25em] text-slate-600">
          {label}
        </span>

        <span
          className={`h-1 w-1 rounded-full ${
            active ? "bg-sky-400" : "bg-slate-700"
          }`}
        />
      </div>

      <div
        className={`mt-2 font-mono text-[9px] tracking-[0.18em] ${
          active ? "text-sky-400/80" : "text-slate-600"
        }`}
      >
        {value}
      </div>
    </div>
  );
}



function FlowItem({
  icon: Icon,
  title,
  description,
  highlight = false,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 text-center transition-all duration-300 ${
        highlight
          ? "border-sky-400/20 bg-sky-400/[0.045] shadow-[0_0_40px_-20px_rgba(56,189,248,0.45)]"
          : "border-white/[0.06] bg-white/[0.015]"
      }`}
    >
      <div
        className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${
          highlight
            ? "border border-sky-400/20 bg-sky-400/[0.07]"
            : "border border-white/[0.06] bg-white/[0.02]"
        }`}
      >
        <Icon
          size={18}
          strokeWidth={1.4}
          className="text-sky-400"
        />
      </div>

      <p className="mt-4 font-mono text-[8px] tracking-[0.25em] text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-xs text-slate-600">
        {description}
      </p>
    </div>
  );
}



function FlowConnector() {
  return (
    <div className="hidden items-center justify-center sm:flex">
      <div className="relative h-px w-full bg-gradient-to-r from-sky-400/10 via-sky-400/35 to-sky-400/10">
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/70 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
      </div>
    </div>
  );
}