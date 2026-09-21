import { Reveal } from '@/components/reveal'
import { whyFeatures } from '@/lib/site-config'

const featureDetails = [
  {
    focus: 'Turning ideas into opportunity',
    detail:
      'We explore new technologies and practical ideas to create digital products and experiences that solve real problems and open new possibilities for your business.',
    areas: ['Digital Products', 'AI & Automation', 'Digital Experiences'],
  },
  {
    focus: 'Built around your business',
    detail:
      'Every business works differently. We design software, systems and technology around your processes, requirements and goals rather than forcing you into a standard solution.',
    areas: ['Custom Software', 'Business Systems', 'System Integration'],
  },
  {
    focus: 'Ready for what comes next',
    detail:
      'We think beyond the immediate requirement. Our solutions are designed with flexibility, performance and future expansion in mind so your technology can evolve with your business.',
    areas: ['Cloud Solutions', 'Scalable Systems', 'Infrastructure'],
  },
  {
    focus: 'Technology that delivers value',
    detail:
      'Technology should create meaningful business value. We focus on improving processes, increasing efficiency and helping businesses make better use of their digital capabilities and data.',
    areas: ['Automation', 'Data & Analytics', 'IT Solutions'],
  },
]

export function WhyEzac() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#020817] py-24 sm:py-28 lg:py-32"
    >
      

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main atmospheric glow */}
        <div
          className="
            absolute
            -top-[300px]
            left-[28%]
            h-[650px]
            w-[760px]
            rounded-full
            bg-blue-600/[0.11]
            blur-[160px]
          "
        />

        {/* Lower blue atmosphere */}
        <div
          className="
            absolute
            -bottom-[280px]
            -left-[170px]
            h-[560px]
            w-[680px]
            rounded-full
            bg-sky-500/[0.09]
            blur-[130px]
          "
        />

        {/* Large orbital ring — top right */}
        <div
          className="
            absolute
            -right-[230px]
            -top-[270px]
            h-[540px]
            w-[540px]
            rounded-full
            border
            border-sky-400/25
            shadow-[0_0_100px_rgba(56,189,248,0.08)]
          "
        />

        <div
          className="
            absolute
            -right-[180px]
            -top-[220px]
            h-[440px]
            w-[440px]
            rounded-full
            border
            border-sky-400/[0.08]
          "
        />

        {/* Bottom orbital rings */}
        <div
          className="
            absolute
            -bottom-[340px]
            -left-[240px]
            h-[540px]
            w-[780px]
            rotate-[-18deg]
            rounded-[50%]
            border-t
            border-sky-400/25
          "
        />

        <div
          className="
            absolute
            -bottom-[300px]
            -left-[200px]
            h-[450px]
            w-[700px]
            rotate-[-18deg]
            rounded-[50%]
            border-t
            border-sky-400/[0.08]
          "
        />

        {/* Fine technical grid */}
        <div
          className="
            absolute inset-0 opacity-[0.018]
            [background-image:linear-gradient(rgba(56,189,248,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

      

        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-4xl">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-sky-400" />

                <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#7bc4ff]/80">
                  Why EZAC
                </span>
              </div>

              <h2
                className="
                  text-4xl font-bold
                  leading-[1]
                  tracking-[-0.055em]
                  text-white
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Technology with{' '}
                <span
                  className="
                    bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent
                  "
                >
                  purpose.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-7
                  text-slate-400
                  sm:text-lg
                  sm:leading-8
                "
              >
                We combine innovation, expertise and a deep understanding
                of your business to create technology that delivers
                real impact.
              </p>

            </div>

            {/* Small editorial label */}
            <div className="hidden border-l border-white/[0.10] pl-6 lg:block">

              <p
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  leading-6
                  text-slate-500
                "
              >
                Ideas
                <br />
                Solutions
                <br />
                Real Impact
              </p>

            </div>

          </div>
        </Reveal>

     

        <Reveal delay={120}>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">

            {whyFeatures.map((feature, index) => {
              const Icon = feature.icon
              const details = featureDetails[index]

              return (
                <article
                  key={feature.title}
                  className="
                    group
                    relative
                    min-h-[410px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-sky-400/[0.14]
                    bg-gradient-to-br
                    from-[#091a31]
                    via-[#061225]
                    to-[#030916]
                    p-7
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-sky-400/35
                    hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                    sm:p-8
                    lg:min-h-[430px]
                    lg:p-9
                  "
                >

                  

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      size-72
                      rounded-full
                      bg-sky-400/[0.07]
                      blur-[80px]
                      transition-all
                      duration-700
                      group-hover:bg-sky-400/[0.15]
                    "
                  />

                  {/* Decorative orbital circle */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -bottom-28
                      size-72
                      rounded-full
                      border
                      border-sky-400/[0.08]
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-14
                      -bottom-20
                      size-56
                      rounded-full
                      border
                      border-sky-400/[0.05]
                    "
                  />

                

                  <div className="relative flex items-start justify-between">

                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-[0.3em]
                        text-sky-400
                      "
                    >
                      0{index + 1}
                    </span>

                    <div
                      className="
                        flex
                        size-14
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-sky-400/20
                        bg-sky-400/[0.045]
                        text-sky-400
                        shadow-[0_0_30px_rgba(56,189,248,0.05)]
                        transition-all
                        duration-500
                        group-hover:border-sky-400/50
                        group-hover:bg-sky-400/[0.09]
                        group-hover:shadow-[0_0_40px_rgba(56,189,248,0.16)]
                      "
                    >
                      <Icon
                        className="size-6"
                        strokeWidth={1.4}
                      />
                    </div>

                  </div>

                 

                  <div className="relative mt-9">

                    <h3
                      className="
                        text-2xl
                        font-semibold
                        tracking-[-0.025em]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-sky-300
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-medium
                        text-sky-400
                      "
                    >
                      {details.focus}
                    </p>

                  </div>

          

                  <p
                    className="
                      relative
                      mt-5
                      max-w-xl
                      text-sm
                      leading-7
                      text-slate-300
                    "
                  >
                    {details.detail}
                  </p>

                 

                  <div className="relative mt-7">

                    <div className="mb-3 flex items-center gap-3">

                      <span className="h-px w-6 bg-sky-400/70" />

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.22em]
                          text-slate-300
                        "
                      >
                        Areas we cover
                      </span>

                    </div>

                    <div className="flex flex-wrap gap-2">

                      {details.areas.map((area) => (
                        <span
                          key={area}
                          className="
                            rounded-md
                            border
                            border-sky-400/[0.20]
                            bg-sky-400/[0.045]
                            px-3
                            py-2
                            text-xs
                            font-medium
                            text-slate-200
                            transition-all
                            duration-300
                            group-hover:border-sky-400/35
                            group-hover:bg-sky-400/[0.09]
                            group-hover:text-white
                          "
                        >
                          {area}
                        </span>
                      ))}

                    </div>

                  </div>

                  

                  <div
                    className="
                      absolute
                      bottom-7
                      left-7
                      h-[2px]
                      w-10
                      bg-gradient-to-r
                      from-sky-400
                      to-cyan-400/20
                      transition-all
                      duration-500
                      group-hover:w-20
                      sm:left-8
                      lg:left-9
                    "
                  />

                </article>
              )
            })}

          </div>
        </Reveal>

      </div>
    </section>
  )
}