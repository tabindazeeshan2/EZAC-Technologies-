'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  Check,
  FileText,
  LockKeyhole,
  Mail,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react'

const policySections = [
  {
    id: 'info-collect',
    title: 'Information We Collect',
    content: (
      <>
        <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
          We may collect information that you voluntarily provide when you
          interact with our website, contact us, request information, or
          inquire about our services.
        </p>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
          This information may include
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            'Your full name and title',
            'Email address and contact details',
            'Company or organization name',
            'Direct phone number (if provided)',
            'Project or service requirements',
            'Any additional context in your communications',
          ].map((item) => (
            <div
              key={item}
              className="group/item flex items-center gap-3 rounded-xl border border-white/[0.055] bg-white/[0.018] p-4 transition-colors duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.025]"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80 shadow-[0_0_8px_rgba(56,189,248,0.4)]" />
              <span className="text-sm text-slate-400 transition-colors group-hover/item:text-slate-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'auto-collect',
    title: 'Information Collected Automatically',
    content: (
      <>
        <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
          When you visit our website, certain technical information may be
          collected automatically by our servers or integrated tools to ensure
          site reliability and security.
        </p>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
          Technical data parameters
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {[
            'IP address',
            'Browser & version',
            'Device architecture',
            'Operating system',
            'Page navigation path',
            'Session timestamps',
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-xl border border-white/[0.055] bg-[#030a18] px-3 py-3 text-center font-mono text-[10px] uppercase tracking-wider text-sky-400/70"
            >
              {tech}
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-500">
          This data is aggregated to evaluate system load, protect
          infrastructure against automated attacks, diagnose technical
          anomalies, and optimize overall site performance.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: (
      <>
        <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
          EZAC Technologies utilizes collected information solely for
          operational and strategic business purposes, including:
        </p>

        <div className="mt-6 space-y-3">
          {[
            'Promptly evaluating and responding to prospective client inquiries',
            'Formulating tailored technological solutions and project scope proposals',
            'Delivering clear ongoing service updates and consultation',
            'Continuously monitoring and improving website performance and UX',
            'Ensuring network security and preventing fraudulent activities',
            'Complying with applicable legal and statutory requirements',
          ].map((use) => (
            <div
              key={use}
              className="flex items-start gap-3 rounded-xl border border-white/[0.04] bg-white/[0.012] px-4 py-3.5"
            >
              <Check
                size={16}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-sky-400"
              />
              <span className="text-sm leading-6 text-slate-400">{use}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'legal-basis',
    title: 'Legal Basis for Processing',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        Where applicable, we process personal information under defined legal
        bases: explicit user consent, fulfillment of pre-contractual requests,
        legitimate business interests (e.g. maintaining security and providing
        support), or compliance with legal mandates.
      </p>
    ),
  },
  {
    id: 'sharing',
    title: 'How We Share Information',
    content: (
      <>
        <div className="flex items-start gap-4 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.025] p-5">
          <ShieldCheck
            size={20}
            strokeWidth={1.5}
            className="mt-0.5 shrink-0 text-emerald-400"
          />

          <div>
            <p className="text-sm font-semibold text-emerald-300">
              Strict Commitment
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              We never sell, rent, or trade your personal information to third
              parties.
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-[15px]">
          Information is shared only with trusted infrastructure providers who
          assist in hosting, database security, and electronic communications
          under strict confidentiality agreements.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
          We may disclose details when required by law enforcement, court
          order, or when necessary to defend our legal rights, property, or
          safety.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        Our digital platforms rely on reputable third-party vendors for cloud
        hosting, DNS services, and contact form processing. These entities
        process data under explicit instructions and maintain independent
        security compliance standards.
      </p>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and Tracking Technologies',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        We utilize essential session cookies to support platform functionality
        and basic analytics. You can control or disable cookie preferences
        directly through your browser settings, though certain functional
        features may be limited.
      </p>
    ),
  },
  {
    id: 'security',
    title: 'Data Security Measures',
    content: (
      <div className="rounded-2xl border border-sky-400/10 bg-sky-400/[0.018] p-5">
        <div className="flex items-start gap-4">
          <LockKeyhole
            size={20}
            strokeWidth={1.5}
            className="mt-0.5 shrink-0 text-sky-400"
          />

          <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
            We employ industry-standard administrative, physical, and
            technical safeguards—including TLS encryption and access-controlled
            databases—to safeguard your information. While no transmission
            method is 100% impenetrable, we actively maintain stringent
            security protocols.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'retention',
    title: 'Data Retention Policy',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        Personal details are retained only for the duration necessary to
        fulfill the operational purpose for which they were collected or to
        comply with applicable tax, accounting, and legal requirements.
      </p>
    ),
  },
  {
    id: 'rights',
    title: 'Your Privacy Rights',
    content: (
      <>
        <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
          Depending on your jurisdiction, you retain rights regarding your
          personal information:
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            'Right to request access to held records',
            'Right to rectify inaccurate information',
            'Right to request data erasure ("Right to be forgotten")',
            'Right to withdraw consent at any time',
            'Right to object to automated processing',
            'Right to receive a portable data copy',
          ].map((right) => (
            <div
              key={right}
              className="flex items-center gap-3 rounded-xl border border-white/[0.055] bg-white/[0.018] p-4"
            >
              <ShieldCheck
                size={16}
                strokeWidth={1.5}
                className="shrink-0 text-sky-400"
              />

              <span className="text-sm leading-6 text-slate-400">
                {right}
              </span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'children',
    title: "Children's Privacy",
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        Our services are designed for corporate clients and standard web users.
        We do not knowingly collect or solicit personal information from
        individuals under 13 years of age.
      </p>
    ),
  },
  {
    id: 'international',
    title: 'International Data Transfers',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        EZAC Technologies operates globally. Information submitted may be
        stored and processed on secure cloud infrastructure located outside
        your home state or country under recognized transfer safeguards.
      </p>
    ),
  },
  {
    id: 'external',
    title: 'External Web Links',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        Our website may contain links to third-party domains. EZAC Technologies
        does not control and is not liable for the privacy standards, content,
        or practices of external websites.
      </p>
    ),
  },
  {
    id: 'updates',
    title: 'Updates to This Privacy Policy',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        We reserve the right to revise this Privacy Policy periodically.
        Modifications take effect immediately upon publication, reflected by
        the updated Effective Date at the top of this document.
      </p>
    ),
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: (
      <div className="relative overflow-hidden rounded-2xl border border-sky-400/15 bg-sky-400/[0.025] p-6 sm:p-7">
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-400/[0.06] blur-[70px]" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Mail
                size={16}
                strokeWidth={1.5}
                className="text-sky-400"
              />

              <p className="text-sm font-semibold text-white">
                Have questions or data requests?
              </p>
            </div>

            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Our privacy and compliance team is available to assist you
              directly.
            </p>
          </div>

          <a
            href="/#contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#078cff] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,140,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#159cff] hover:shadow-[0_10px_35px_-8px_rgba(0,140,255,0.45)]"
          >
            Contact Legal Team

            <ArrowRight
              size={14}
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    ),
  },
]

export default function PrivacyPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState('info-collect')
  const [pageReady, setPageReady] = useState(false)
  const clickTargetRef = useRef<string | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  // Prevent flash: solid background + block scroll restoration until ready
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    document.documentElement.classList.add('privacy-page')
    document.body.style.backgroundColor = '#020817'

    let cancelled = false
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) {
          setPageReady(true)
        }
      })
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(id)
      document.documentElement.classList.remove('privacy-page')
      document.body.style.backgroundColor = ''
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto'
      }
    }
  }, [])

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return policySections
    }

    const query = searchQuery.toLowerCase()

    return policySections.filter(
      (section) =>
        section.title.toLowerCase().includes(query) ||
        section.id.toLowerCase().includes(query)
    )
  }, [searchQuery])

  useEffect(() => {
    if (filteredSections.length === 0) {
      return
    }

    if (!filteredSections.some((section) => section.id === activeSection)) {
      setActiveSection(filteredSections[0].id)
    }
  }, [filteredSections, activeSection])

  useEffect(() => {
    const getCurrentSection = () => {
      if (clickTargetRef.current) {
        const target = document.getElementById(clickTargetRef.current)

        if (target) {
          const targetTop = target.getBoundingClientRect().top

          if (targetTop <= 130 && targetTop >= -20) {
            clickTargetRef.current = null
          } else {
            return
          }
        } else {
          clickTargetRef.current = null
        }
      }

      if (filteredSections.length === 0) {
        return
      }

      const activationLine = 140
      let currentSection = filteredSections[0].id

      for (const section of filteredSections) {
        const element = document.getElementById(section.id)

        if (!element) {
          continue
        }

        const top = element.getBoundingClientRect().top

        if (top <= activationLine) {
          currentSection = section.id
        } else {
          break
        }
      }

      setActiveSection((current) =>
        current === currentSection ? current : currentSection
      )
    }

    const handleScroll = () => {
      if (animationFrameRef.current !== null) {
        return
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        animationFrameRef.current = null
        getCurrentSection()
      })
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    window.addEventListener('resize', handleScroll)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        getCurrentSection()
      })
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [filteredSections])

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault()

    const element = document.getElementById(id)

    if (!element) {
      return
    }

    clickTargetRef.current = id
    setActiveSection(id)

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      {/* Full-screen opaque blocker – covers everything (including under transparent Navbar) until ready */}
      {!pageReady && (
        <div
          className="fixed inset-0 z-[100] bg-[#020817]"
          aria-hidden="true"
        />
      )}

      <main
        className={`relative min-h-screen bg-[#020817] text-slate-200 antialiased selection:bg-sky-500/30 selection:text-white transition-opacity duration-150 ${
          pageReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-sky-500/[0.045] blur-[160px]" />

          <div className="absolute -right-48 top-[20%] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.025] blur-[170px]" />

          <div className="absolute -left-48 bottom-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.025] blur-[170px]" />

          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(56,189,248,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.5) 1px,transparent 1px)',
              backgroundSize: '70px 70px',
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,8,23,0.35)_55%,rgba(2,8,23,0.9)_100%)]" />
        </div>

        <section className="relative border-b border-white/[0.055]">
          <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-10">
            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-gradient-to-r from-sky-400 to-transparent" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-sky-400">
                  Legal / Privacy
                </span>
              </div>

              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.8rem]">
                Your privacy
                <span className="block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                  matters to us.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                This document outlines how EZAC Technologies manages, processes,
                and protects personal information gathered through our services
                and platforms.
              </p>

              <div className="mt-10 grid max-w-xl grid-cols-2 border-y border-white/[0.06] py-5 sm:grid-cols-3">
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-slate-600">
                    Document
                  </span>

                  <p className="mt-2 text-xs text-slate-300">
                    Privacy Policy
                  </p>
                </div>

                <div className="border-l border-white/[0.06] pl-5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-slate-600">
                    Effective
                  </span>

                  <p className="mt-2 text-xs text-slate-300">
                    August 15, 2026
                  </p>
                </div>

                <div className="mt-5 border-l-0 border-white/[0.06] pl-0 sm:mt-0 sm:border-l sm:pl-5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-slate-600">
                    Read Time
                  </span>

                  <p className="mt-2 text-xs text-slate-300">
                    Approximately 4 mins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
            <aside className="lg:block">
              <div className="sticky top-24">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-7 bg-sky-400/60" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-sky-400/80">
                    Privacy
                  </span>
                </div>

                <div className="relative">
                  <Search
                    size={15}
                    strokeWidth={1.5}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600"
                  />

                  <input
                    type="text"
                    placeholder="Search policy topics..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    className="h-11 w-full rounded-xl border border-white/[0.07] bg-[#040b1b]/80 pl-10 pr-10 text-xs text-slate-300 outline-none backdrop-blur-xl transition-all placeholder:text-slate-600 focus:border-sky-400/30 focus:ring-1 focus:ring-sky-400/10"
                  />

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 transition-colors hover:text-white"
                      aria-label="Clear search"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-sky-900/40 bg-[#040b1b]/75 backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
                      Sections
                    </span>

                    <span className="font-mono text-[9px] text-sky-400/70">
                      {filteredSections.length.toString().padStart(2, '0')}
                    </span>
                  </div>

                  <nav className="max-h-[calc(100vh-270px)] overflow-y-auto p-2">
                    {filteredSections.map((section, index) => {
                      const isActive = activeSection === section.id

                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={(event) =>
                            scrollToSection(event, section.id)
                          }
                          className={`group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 ${
                            isActive
                              ? 'border border-sky-400/15 bg-sky-400/[0.06] text-sky-300'
                              : 'border border-transparent text-slate-500 hover:bg-white/[0.025] hover:text-slate-300'
                          }`}
                        >
                          <span
                            className={`mt-0.5 w-5 shrink-0 font-mono text-[8px] ${
                              isActive
                                ? 'text-sky-400'
                                : 'text-slate-700'
                            }`}
                          >
                            {(index + 1).toString().padStart(2, '0')}
                          </span>

                          <span className="text-[11px] leading-5">
                            {section.title}
                          </span>
                        </a>
                      )
                    })}

                    {filteredSections.length === 0 && (
                      <div className="px-4 py-8 text-center">
                        <Search
                          size={20}
                          className="mx-auto text-slate-700"
                        />

                        <p className="mt-3 text-xs text-slate-600">
                          No matching topics found.
                        </p>
                      </div>
                    )}
                  </nav>
                </div>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="mb-10 overflow-hidden rounded-3xl border border-sky-900/40 bg-[#040b1b]/75 p-6 backdrop-blur-xl sm:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/[0.05]">
                    <FileText
                      size={20}
                      strokeWidth={1.4}
                      className="text-sky-400"
                    />
                  </div>

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-sky-400/80">
                      Privacy Overview
                    </span>

                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                      How we handle your information
                    </h2>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
                      This policy explains the information we collect, how it is
                      used, how it may be shared, and the rights available to
                      individuals regarding their personal information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {filteredSections.map((section, index) => (
                  <article
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 overflow-hidden rounded-3xl border border-sky-900/30 bg-[#040b1b]/70 backdrop-blur-xl transition-all duration-300 hover:border-sky-900/55"
                  >
                    <div className="border-b border-white/[0.055] px-6 py-6 sm:px-8">
                      <div className="flex items-center gap-4">
                        <span className="shrink-0 font-mono text-sm tracking-[0.15em] text-sky-400/70">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>

                        <h2 className="text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    <div className="px-6 py-7 sm:px-8 sm:py-8">
                      {section.content}
                    </div>
                  </article>
                ))}

                {filteredSections.length === 0 && (
                  <div className="rounded-3xl border border-white/[0.06] bg-[#040b1b]/70 px-6 py-16 text-center">
                    <Search
                      size={30}
                      strokeWidth={1.3}
                      className="mx-auto text-slate-700"
                    />

                    <h2 className="mt-5 text-lg font-semibold text-white">
                      No policy sections found
                    </h2>

                    <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                      Try searching for another privacy topic.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs font-medium text-slate-300 transition-colors hover:border-sky-400/25 hover:text-white"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
          <div className="relative overflow-hidden rounded-3xl border border-sky-900/40 bg-[#040b1b]/80 p-8 text-center shadow-[0_30px_100px_-60px_rgba(56,189,248,0.35)] backdrop-blur-xl sm:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/[0.045] blur-[100px]" />

            <div className="absolute -left-24 bottom-[-120px] h-72 w-72 rounded-full bg-blue-500/[0.035] blur-[100px]" />

            <div className="relative">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/[0.05]">
                <LockKeyhole
                  size={21}
                  strokeWidth={1.4}
                  className="text-sky-400"
                />
              </div>

              <div className="mt-6 font-mono text-[9px] uppercase tracking-[0.3em] text-sky-400/80">
                Privacy / Support
              </div>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Have questions about your information?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
                If you have questions about this Privacy Policy or would like to
                make a data request, contact our team directly.
              </p>

              <a
                href="/#contact"
                className="group mt-7 inline-flex h-11 items-center justify-center rounded-xl bg-[#078cff] px-6 text-[13px] font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,140,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#159cff] hover:shadow-[0_10px_35px_-8px_rgba(0,140,255,0.45)]"
              >
                Contact Legal Team

                <ArrowRight
                  size={14}
                  strokeWidth={2.2}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}