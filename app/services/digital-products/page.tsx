import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Globe2,
  Palette,
  ShoppingCart,
  Smartphone,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'

const digitalProducts = [
  {
    icon: Globe2,
    number: '01',
    title: 'Business Websites',
    description:
      'Professional websites that build credibility and make it easy for customers to connect.',
    features: [
      'Corporate websites',
      'Service-based websites',
      'Responsive design',
      'Contact integration',
    ],
    size: 'large',
  },
  {
    icon: ShoppingCart,
    number: '02',
    title: 'E-commerce Websites',
    description:
      'Modern online stores designed for smooth browsing, shopping and customer interaction.',
    features: [
      'Product catalogues',
      'Shopping cart',
      'Product management',
      'Responsive shopping',
    ],
    size: 'medium',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Custom Web Applications',
    description:
      'Purpose-built applications designed around your business requirements.',
    features: [
      'Business applications',
      'User accounts',
      'Dashboards',
      'Database systems',
    ],
    size: 'medium',
  },
  {
    icon: ArrowUpRight,
    number: '04',
    title: 'Landing Pages',
    description:
      'Focused digital pages that communicate your message and drive action.',
    features: [
      'Product pages',
      'Campaign pages',
      'Lead generation',
      'Conversion-focused layouts',
    ],
    size: 'medium',
  },
  {
    icon: Database,
    number: '05',
    title: 'CMS Development',
    description:
      'Flexible content systems that make managing your digital presence easier.',
    features: [
      'Content management',
      'Page management',
      'Product management',
      'Admin interfaces',
    ],
    size: 'medium',
  },
  {
    icon: Palette,
    number: '06',
    title: 'UI / UX Design',
    description:
      'Clean and intuitive interfaces designed around your users and brand.',
    features: [
      'Website interfaces',
      'Application interfaces',
      'Responsive layouts',
      'User-focused experiences',
    ],
    size: 'large',
  },
]

export default function DigitalProductsPage() {
  return (
    <main className="relative overflow-hidden bg-[#020817] text-white">

      

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main atmospheric glow */}
        <div className="absolute left-1/2 top-[-280px] h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-sky-500/[0.055] blur-[180px]" />

        {/* Right glow */}
        <div className="absolute -right-40 top-[35%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.025] blur-[160px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[15%] -left-40 h-[450px] w-[450px] rounded-full bg-sky-500/[0.02] blur-[150px]" />

        {/* Technical grid */}
        <div
          className="
            absolute inset-0 opacity-[0.018]
            [background-image:linear-gradient(rgba(56,189,248,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.5)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* Edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,8,23,0.35)_60%,rgba(2,8,23,0.9)_100%)]" />

      </div>


    

      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

        

            <Reveal>

              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-10 bg-gradient-to-r from-sky-400 to-transparent" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-sky-400">
                  Digital Products
                </span>

              </div>


              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.5rem] lg:leading-[0.94]">

                Digital products

                <span className="block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                  built for business.
                </span>

              </h1>


              <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                We design and develop websites, applications and digital
                experiences that help businesses build, connect and grow.
              </p>


              {/* Hero buttons */}

              <div className="mt-9 flex flex-wrap items-center gap-4">

                <a
                  href="/#contact"
                  className="
                    group inline-flex h-[40px] items-center justify-center gap-2
                    rounded-xl
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
                  href="#capabilities"
                  className="
                    inline-flex h-[40px] items-center justify-center gap-2
                    rounded-xl
                    border border-white/[0.09]
                    bg-white/[0.025]
                    px-5
                    text-[13px]
                    font-medium
                    text-slate-300
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-sky-400/30
                    hover:bg-sky-400/[0.04]
                    hover:text-white
                  "
                >
                  Explore Capabilities

                  <ArrowDown className="size-3.5" />
                </a>

              </div>

            </Reveal>



            <Reveal delay={120}>

              <div className="relative mx-auto w-full max-w-[560px]">

                {/* Main atmospheric glow */}

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.07] blur-[100px]" />



                <div className="absolute -right-2 top-2 z-30 hidden rounded-xl border border-sky-400/15 bg-[#061124]/90 px-4 py-3 shadow-[0_20px_50px_-25px_rgba(56,189,248,0.4)] backdrop-blur-xl sm:block">

                  <div className="flex items-center gap-3">

                    <span className="flex size-7 items-center justify-center rounded-lg bg-sky-400/[0.08] text-sky-400">
                      <Globe2 className="size-3.5" />
                    </span>

                    <div>

                      <p className="text-[10px] font-medium text-slate-200">
                        Digital Experience
                      </p>

                      <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-slate-600">
                        Live system
                      </p>

                    </div>

                    <span className="ml-2 size-1.5 rounded-full bg-sky-400 shadow-[0_0_9px_rgba(56,189,248,0.9)]" />

                  </div>

                </div>



                <div className="relative z-10 overflow-hidden rounded-[1.75rem] border border-sky-900/50 bg-[#030a19]/95 shadow-[0_35px_100px_-35px_rgba(14,165,233,0.35)] backdrop-blur-xl">

                  {/* Browser top bar */}

                  <div className="flex h-12 items-center border-b border-white/[0.055] px-5">

                    <div className="flex gap-1.5">

                      <span className="size-2 rounded-full bg-white/10" />
                      <span className="size-2 rounded-full bg-white/10" />
                      <span className="size-2 rounded-full bg-white/10" />

                    </div>


                    <div className="mx-auto flex h-6 w-52 items-center justify-center rounded-md border border-white/[0.05] bg-white/[0.02]">

                      <span className="font-mono text-[7px] tracking-[0.15em] text-slate-700">
                        ezac.digital / project
                      </span>

                    </div>


                    <div className="w-12" />

                  </div>



                  <div className="relative p-5 sm:p-7">

                    {/* Mini navigation */}

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <div className="flex size-7 items-center justify-center rounded-lg bg-sky-400 text-[8px] font-bold text-[#020817]">
                          E
                        </div>

                        <div className="h-2 w-16 rounded-full bg-white/[0.08]" />

                      </div>


                      <div className="flex gap-2">

                        <span className="h-2 w-8 rounded-full bg-white/[0.06]" />
                        <span className="h-2 w-8 rounded-full bg-white/[0.06]" />
                        <span className="h-2 w-12 rounded-full bg-sky-400/30" />

                      </div>

                    </div>


                    {/* Main interface */}

                    <div className="mt-7 grid grid-cols-[1fr_0.72fr] gap-4">

                    

                      <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#061124]">

                        <div className="relative h-[190px] overflow-hidden">

                          {/* Glow */}

                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(14,165,233,0.18),transparent_40%)]" />


                          {/* Content */}

                          <div className="relative p-5">

                            <div className="h-2 w-16 rounded-full bg-sky-400/60" />

                            <div className="mt-5 h-5 w-40 rounded-md bg-white/[0.09]" />

                            <div className="mt-2 h-3 w-28 rounded-md bg-white/[0.045]" />

                            <div className="mt-5 h-7 w-20 rounded-lg bg-[#078cff] shadow-[0_0_20px_rgba(0,140,255,0.25)]" />

                          </div>


                          {/* Product visual */}

                          <div className="absolute bottom-[-15px] right-[-10px] h-28 w-36 rotate-[-8deg] rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-400/[0.16] to-transparent shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)]">

                            <div className="absolute left-4 top-4 size-8 rounded-lg border border-sky-400/20 bg-sky-400/[0.08]" />

                            <div className="absolute bottom-4 left-4 h-2 w-20 rounded-full bg-white/[0.08]" />

                            <div className="absolute bottom-8 left-4 h-1.5 w-12 rounded-full bg-sky-400/30" />

                          </div>

                        </div>

                      </div>


                   

                      <div className="space-y-4">

                        {/* Performance */}

                        <div className="rounded-2xl border border-white/[0.06] bg-[#061124] p-4">

                          <div className="flex items-center justify-between">

                            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-slate-600">
                              System Status
                            </span>

                            <ArrowUpRight className="size-3 text-sky-400" />

                          </div>


                          <div className="mt-4 text-xl font-semibold text-white">
                            Optimized
                          </div>


                          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.05]">

                            <div className="h-full w-[98%] rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]" />

                          </div>

                        </div>


                        {/* Commerce */}

                        <div className="rounded-2xl border border-white/[0.06] bg-[#061124] p-4">

                          <div className="flex items-center gap-2">

                            <ShoppingCart className="size-3.5 text-sky-400" />

                            <span className="text-[10px] font-medium text-slate-300">
                              Commerce
                            </span>

                          </div>


                          <div className="mt-4 grid grid-cols-3 gap-2">

                            <span className="h-8 rounded-lg bg-sky-400/[0.07]" />
                            <span className="h-8 rounded-lg bg-white/[0.035]" />
                            <span className="h-8 rounded-lg bg-white/[0.035]" />

                          </div>

                        </div>

                      </div>

                    </div>



                    <div className="mt-4 grid grid-cols-3 gap-3">

                      {[
                        ['Web', '01'],
                        ['Apps', '02'],
                        ['Data', '03'],
                      ].map(([label, number]) => (

                        <div
                          key={label}
                          className="rounded-xl border border-white/[0.055] bg-white/[0.015] px-3 py-3"
                        >

                          <div className="flex items-center justify-between">

                            <span className="text-[10px] text-slate-400">
                              {label}
                            </span>

                            <span className="font-mono text-[7px] text-sky-400/50">
                              {number}
                            </span>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>


          

                <div className="absolute -bottom-7 -left-5 z-20 hidden w-44 rounded-2xl border border-sky-900/50 bg-[#040b1b]/95 p-4 shadow-[0_25px_60px_-25px_rgba(14,165,233,0.35)] backdrop-blur-xl sm:block">

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
                      Responsive
                    </span>

                    <Smartphone className="size-3.5 text-sky-400" />

                  </div>


                  <div className="mt-4 flex items-end gap-1.5">

                    <div className="h-6 w-3 rounded-sm bg-sky-400/20" />
                    <div className="h-9 w-3 rounded-sm bg-sky-400/30" />
                    <div className="h-12 w-3 rounded-sm bg-sky-400/60" />
                    <div className="h-8 w-3 rounded-sm bg-sky-400/35" />
                    <div className="h-10 w-3 rounded-sm bg-sky-400/45" />

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


     
      <section
        id="capabilities"
        className="relative border-y border-white/[0.055] py-20 sm:py-28"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section heading */}

          <Reveal>

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-9 bg-gradient-to-r from-sky-400 to-transparent" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-sky-400">
                    What We Offer
                  </span>

                </div>


                <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">

                  Digital solutions

                  <span className="bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                    {' '}built around your needs.
                  </span>

                </h2>

              </div>


              <p className="max-w-sm text-sm leading-6 text-slate-500">
                From your first digital touchpoint to complete business
                platforms, we create technology that fits the way you work.
              </p>

            </div>

          </Reveal>



          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">

            {digitalProducts.map((item, index) => {

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
                      group relative h-full overflow-hidden
                      rounded-3xl
                      border border-white/[0.065]
                      bg-[#040b1b]/80
                      shadow-[0_25px_70px_-50px_rgba(56,189,248,0.35)]
                      backdrop-blur-xl
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-sky-400/25
                      hover:bg-[#061124]/90
                      hover:shadow-[0_30px_80px_-45px_rgba(14,165,233,0.22)]
                      ${isLarge ? 'p-8 sm:p-10' : 'p-7 sm:p-8'}
                    `}
                  >

                    {/* Card glow */}

                    <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-sky-400/[0.035] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                    <div className="relative flex h-full flex-col">

                      {/* Card header */}

                      <div className="flex items-start justify-between">

                        <div
                          className={`
                            flex items-center justify-center
                            rounded-2xl
                            border border-sky-400/20
                            bg-sky-400/[0.055]
                            text-sky-400
                            transition-all duration-300
                            group-hover:border-sky-400/35
                            group-hover:bg-sky-400/[0.09]
                            group-hover:shadow-[0_0_28px_-8px_rgba(56,189,248,0.45)]
                            ${isLarge ? 'size-14' : 'size-12'}
                          `}
                        >

                          <Icon
                            className={isLarge ? 'size-6' : 'size-5'}
                            strokeWidth={1.5}
                          />

                        </div>


                        <span className="font-mono text-[10px] tracking-[0.18em] text-slate-600 transition-colors group-hover:text-sky-400/60">
                          {item.number}
                        </span>

                      </div>


                      {/* Title and description */}

                      <div className="mt-7">

                        <h3
                          className={`
                            font-semibold tracking-[-0.025em] text-white
                            transition-colors group-hover:text-sky-50
                            ${isLarge ? 'text-2xl sm:text-3xl' : 'text-xl'}
                          `}
                        >
                          {item.title}
                        </h3>


                        <p
                          className={`
                            mt-3 max-w-xl leading-6 text-slate-500
                            transition-colors group-hover:text-slate-400
                            ${isLarge ? 'text-base' : 'text-sm'}
                          `}
                        >
                          {item.description}
                        </p>

                      </div>


                      {/* Features */}

                      <div className="mt-auto pt-8">

                        <div className="border-t border-white/[0.055] pt-6">

                          <div className="mb-4 flex items-center justify-between">

                            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-slate-600">
                              Includes
                            </span>

                            <ArrowUpRight className="size-3.5 text-slate-700 transition-colors group-hover:text-sky-400" />

                          </div>


                          <div
                            className={`
                              grid gap-x-6 gap-y-3
                              ${isLarge ? 'sm:grid-cols-2' : 'grid-cols-1'}
                            `}
                          >

                            {item.features.map((feature) => (

                              <div
                                key={feature}
                                className="flex items-center gap-3"
                              >

                                <span className="size-1.5 shrink-0 rounded-full bg-sky-400/80 shadow-[0_0_8px_rgba(56,189,248,0.45)]" />

                                <span className="text-sm text-slate-400 transition-colors group-hover:text-slate-300">
                                  {feature}
                                </span>

                              </div>

                            ))}

                          </div>

                        </div>


                        {/* Accent line */}

                        <div className="mt-7 h-px w-8 bg-sky-400/40 transition-all duration-500 group-hover:w-14 group-hover:bg-sky-400" />

                      </div>

                    </div>

                  </div>

                </Reveal>

              )
            })}

          </div>

        </div>

      </section>


      

      <section className="relative overflow-hidden py-24 sm:py-32">

        {/* CTA glow */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.04] blur-[150px]" />


        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">

          <Reveal>

            {/* Icon */}

            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/[0.055] text-sky-400 shadow-[0_0_30px_-10px_rgba(56,189,248,0.4)]">

              <Smartphone
                className="size-6"
                strokeWidth={1.4}
              />

            </div>


            {/* Label */}

            <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600">
              Start a Conversation
            </p>


            {/* Heading */}

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl sm:leading-[1.05]">

              Have a digital project

              <span className="block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                in mind?
              </span>

            </h2>


            {/* Description */}

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Tell us what you need and let&apos;s turn your idea into a
              professional digital solution.
            </p>


            {/* CTA button */}

            <div className="mt-9 flex justify-center">

              <a
                href="/#contact"
                className="
                  group inline-flex h-[40px] items-center justify-center gap-2
                  rounded-xl
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

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  )
}