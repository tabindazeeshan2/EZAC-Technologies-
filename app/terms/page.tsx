'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  FileText,
  LockKeyhole,
  Mail,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react'

const termsSections = [
  {
    id: 'about-terms',
    title: 'About These Terms',
    content: (
      <>
        <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
          These Terms of Service apply to your access to and use of the EZAC
          Technologies website, including its pages, content, features, and
          contact functionality.
        </p>

        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-[15px]">
          These terms apply to website use only. Specific services, projects,
          software, consulting engagements, or other work provided by EZAC
          Technologies may be subject to separate agreements, proposals,
          statements of work, or contracts.
        </p>
      </>
    ),
  },

  {
    id: 'use-of-website',
    title: 'Use of the Website',
    content: (
      <>
        <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
          You may use this website for lawful purposes and in accordance with
          these Terms of Service.
        </p>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
          You explicitly agree not to
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            'Use the website for any unlawful or fraudulent purpose',
            'Attempt unauthorized access to website systems or servers',
            'Interfere with or disrupt platform security',
            'Introduce malicious code, malware, or viruses',
            'Scrape, copy, or systematically collect content',
            'Impersonate EZAC Technologies or its representatives',
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
    id: 'website-content',
    title: 'Website Content',
    content: (
      <>
        <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
          We make reasonable efforts to provide accurate information. However,
          website content is provided for general informational purposes and may
          not always be complete, current, or error-free.
        </p>

        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-[15px]">
          Information regarding our services, capabilities, technologies, and
          solutions may change without prior notice.
        </p>

        <p className="mt-5 text-sm leading-7 text-slate-500">
          Nothing on this website should be interpreted as a guarantee that a
          particular service or result will be suitable for your specific
          requirements.
        </p>
      </>
    ),
  },

  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        Unless otherwise stated, the website and its contents—including design,
        branding, logos, text, graphics, images, and code—are owned by or
        licensed to EZAC Technologies. You may not reproduce, modify,
        distribute, or create derivative works without prior written permission.
      </p>
    ),
  },

  {
    id: 'branding',
    title: 'EZAC Technologies Branding',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        The EZAC Technologies name, logo, trademarks, service marks, and
        branding elements may not be used in any manner that suggests
        sponsorship, partnership, endorsement, or affiliation without explicit
        written authorization.
      </p>
    ),
  },

  {
    id: 'user-submissions',
    title: 'User-Submitted Information',
    content: (
      <>
        <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
          If you submit details through our contact forms, you are responsible
          for ensuring accuracy and having the legitimate right to provide that
          information.
        </p>

        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-[15px]">
          Do not submit highly sensitive or proprietary details through general
          web forms unless explicitly requested. Handling of personal data is
          governed by our Privacy Policy.
        </p>
      </>
    ),
  },

  {
    id: 'third-party-links',
    title: 'Third-Party Links & Services',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        Our platform may contain links to third-party domains provided for
        convenience. EZAC Technologies does not control and is not liable for
        third-party content, privacy policies, or operational security practices.
      </p>
    ),
  },

  {
    id: 'availability',
    title: 'Availability of the Website',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        While we strive for maximum uptime, we do not guarantee uninterrupted or
        error-free availability. We reserve the right to restrict, modify, or
        suspend website segments for maintenance, updates, or technical security
        operations.
      </p>
    ),
  },

  {
    id: 'no-advice',
    title: 'No Professional Advice',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        Information published here serves general informational purposes only and
        does not constitute technical, legal, or financial advice. Service
        engagements are governed exclusively by executed project agreements.
      </p>
    ),
  },

  {
    id: 'warranties-disclaimer',
    title: 'Disclaimer of Warranties',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        To the extent permitted by law, the website and its materials are
        provided on an &quot;as is&quot; and &quot;as available&quot; basis without express or
        implied warranties regarding accuracy, completeness, or defect
        corrections.
      </p>
    ),
  },

  {
    id: 'limitation-liability',
    title: 'Limitation of Liability',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        To the maximum extent permitted under applicable law, EZAC Technologies
        shall not be liable for indirect, incidental, consequential, or punitive
        damages resulting from your access to or inability to use this platform.
      </p>
    ),
  },

  {
    id: 'indemnification',
    title: 'Indemnification',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        You agree to hold harmless EZAC Technologies against claims,
        liabilities, losses, or expenses resulting from your violation of these
        Terms of Service or unauthorized use of the platform.
      </p>
    ),
  },

  {
    id: 'privacy-reference',
    title: 'Privacy Integration',
    content: (
      <div className="flex items-start gap-4 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.025] p-5">
        <ShieldCheck
          size={20}
          strokeWidth={1.5}
          className="mt-0.5 shrink-0 text-emerald-400"
        />

        <div>
          <p className="text-sm font-semibold text-emerald-300">
            Data Protection
          </p>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            Your usage of the platform involves data processing governed by our
            Privacy Policy. Please review our data protection practices prior to
            submitting personal or business details.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'terms-updates',
    title: 'Changes to These Terms',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        We reserve the right to revise these Terms of Service periodically.
        Revisions take immediate effect upon publishing, indicated by the
        updated Effective Date at the top of the page.
      </p>
    ),
  },

  {
    id: 'severability',
    title: 'Severability',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        If any clause within these Terms is declared invalid or unenforceable by
        court decree, that provision will be modified to the minimum extent
        necessary, leaving the remaining terms fully active.
      </p>
    ),
  },

  {
    id: 'governing-law',
    title: 'Governing Law',
    content: (
      <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
        These Terms are governed by and construed in accordance with the
        applicable laws operating within the registered jurisdiction of EZAC
        Technologies, without giving effect to conflict-of-law principles.
      </p>
    ),
  },

  {
    id: 'contact-terms',
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
                Questions regarding our Terms of Service?
              </p>
            </div>

            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Our legal and compliance team is ready to address your inquiries.
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

export default function TermsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState('about-terms')
  const clickedSection = useRef<string | null>(null)

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return termsSections
    }

    const query = searchQuery.toLowerCase()

    return termsSections.filter(
      (section) =>
        section.title.toLowerCase().includes(query) ||
        section.id.toLowerCase().includes(query)
    )
  }, [searchQuery])

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150
      const clickedId = clickedSection.current

      if (clickedId) {
        const clickedElement = document.getElementById(clickedId)

        if (clickedElement) {
          const clickedTop =
            clickedElement.getBoundingClientRect().top + window.scrollY

          if (window.scrollY < clickedTop - 150) {
            return
          }

          clickedSection.current = null
        } else {
          clickedSection.current = null
        }
      }

      let currentSection = termsSections[0].id

      for (const section of termsSections) {
        const element = document.getElementById(section.id)

        if (!element) continue

        const sectionTop =
          element.getBoundingClientRect().top + window.scrollY

        if (sectionTop <= scrollPosition) {
          currentSection = section.id
        } else {
          break
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    })

    updateActiveSection()

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
    }
  }, [])

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault()

    const element = document.getElementById(id)

    if (!element) return

    clickedSection.current = id
    setActiveSection(id)

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-slate-200 antialiased selection:bg-sky-500/30 selection:text-white">
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
                Legal / Terms
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.8rem]">
              Clear terms.

              <span className="block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
                Fair use.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              These terms govern your access to and usage of the EZAC
              Technologies website, features, and digital content.
            </p>

            <div className="mt-10 grid max-w-xl grid-cols-2 border-y border-white/[0.06] py-5 sm:grid-cols-3">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-slate-600">
                  Document
                </span>

                <p className="mt-2 text-xs text-slate-300">
                  Terms of Service
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
                  Approximately 5 mins
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
                  Terms
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
                  placeholder="Search terms topics..."
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
                            isActive ? 'text-sky-400' : 'text-slate-700'
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
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-sky-400/80">
                      Terms Overview
                    </span>
                  </div>

                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                    How you may use this website
                  </h2>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
                    Welcome to EZAC Technologies. By accessing or utilizing this
                    website, you agree to comply with and be bound by the terms
                    outlined below.
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
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm tracking-[0.15em] text-sky-400/70">
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
                    No terms sections found
                  </h2>

                  <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Try searching for another terms topic.
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
              Terms / Support
            </div>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Have questions about these terms?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              If you have questions about these Terms of Service or need
              clarification on any section, contact our team directly.
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
  )
}