'use client'

import React, { useState, useEffect, useMemo } from 'react'

function Logo({
  className = '',
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <a
      href="/"
      aria-label="EZAC Technologies home"
      className={`flex items-center gap-2.5 group ${className}`}
    >
      <span className="relative inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-blue-950/80 ring-1 ring-blue-500/30 transition-transform group-hover:scale-105">
        {!imgError ? (
          <img
            src="/ezac-logo.jpeg"
            alt="EZAC Technologies logo"
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-xs font-black tracking-tighter text-blue-400">EZ</span>
        )}
      </span>
      {showWordmark && (
        <span className="text-base font-bold leading-none tracking-tight text-white">
          EZAC
          <span className="ml-1 font-medium text-slate-400">Technologies</span>
        </span>
      )}
    </a>
  )
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
]

const termsSections = [
  {
    id: 'about-terms',
    title: 'About These Terms',
    content: (
      <>
        <p className="text-slate-300 leading-relaxed mb-4">
          These Terms of Service apply to your access to and use of the EZAC Technologies website, including its pages, content, features, and contact functionality.
        </p>
        <p className="text-slate-300 leading-relaxed">
          These terms apply to website use only. Specific services, projects, software, consulting engagements, or other work provided by EZAC Technologies may be subject to separate agreements, proposals, statements of work, or contracts.
        </p>
      </>
    ),
  },
  {
    id: 'use-of-website',
    title: 'Use of the Website',
    content: (
      <>
        <p className="text-slate-300 leading-relaxed mb-4">
          You may use this website for lawful purposes and in accordance with these Terms of Service.
        </p>
        <p className="text-sm font-semibold text-slate-200 mb-3">You explicitly agree not to:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Use the website for any unlawful or fraudulent purpose',
            'Attempt unauthorized access to website systems/servers',
            'Interfere with or disrupt platform security',
            'Introduce malicious code, malware, or viruses',
            'Scrape, copy, or systematically collect content',
            'Impersonate EZAC Technologies or its representatives',
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 rounded-lg border border-slate-800 bg-[#0d1527]/70 p-3 text-sm text-slate-300">
              <span className="size-2 rounded-full bg-blue-400 shrink-0" />
              <span>{item}</span>
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
        <p className="text-slate-300 leading-relaxed mb-3">
          We make reasonable efforts to provide accurate information. However, website content is provided for general informational purposes and may not always be complete, current, or error-free.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Information regarding our services, capabilities, technologies, and solutions may change without prior notice.
        </p>
        <p className="text-sm text-slate-400 leading-relaxed">
          Nothing on this website should be interpreted as a guarantee that a particular service or result will be suitable for your specific requirements.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: (
      <p className="text-slate-300 leading-relaxed">
        Unless otherwise stated, the website and its contents—including design, branding, logos, text, graphics, images, and code—are owned by or licensed to EZAC Technologies. You may not reproduce, modify, distribute, or create derivative works without prior written permission.
      </p>
    ),
  },
  {
    id: 'branding',
    title: 'EZAC Technologies Branding',
    content: (
      <p className="text-slate-300 leading-relaxed">
        The EZAC Technologies name, logo, trademarks, service marks, and branding elements may not be used in any manner that suggests sponsorship, partnership, endorsement, or affiliation without explicit written authorization.
      </p>
    ),
  },
  {
    id: 'user-submissions',
    title: 'User-Submitted Information',
    content: (
      <>
        <p className="text-slate-300 leading-relaxed mb-3">
          If you submit details through our contact forms, you are responsible for ensuring accuracy and having the legitimate right to provide that information.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Do not submit highly sensitive or proprietary details through general web forms unless explicitly requested. Handling of personal data is governed by our Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links & Services',
    content: (
      <p className="text-slate-300 leading-relaxed">
        Our platform may contain links to third-party domains provided for convenience. EZAC Technologies does not control and is not liable for third-party content, privacy policies, or operational security practices.
      </p>
    ),
  },
  {
    id: 'availability',
    title: 'Availability of the Website',
    content: (
      <p className="text-slate-300 leading-relaxed">
        While we strive for maximum uptime, we do not guarantee uninterrupted or error-free availability. We reserve the right to restrict, modify, or suspend website segments for maintenance, updates, or technical security operations.
      </p>
    ),
  },
  {
    id: 'no-advice',
    title: 'No Professional Advice',
    content: (
      <p className="text-slate-300 leading-relaxed">
        Information published here serves general informational purposes only and does not constitute technical, legal, or financial advice. Service engagements are governed exclusively by executed project agreements.
      </p>
    ),
  },
  {
    id: 'warranties-disclaimer',
    title: 'Disclaimer of Warranties',
    content: (
      <p className="text-slate-300 leading-relaxed">
        To the extent permitted by law, the website and its materials are provided on an "as is" and "as available" basis without express or implied warranties regarding accuracy, completeness, or defect corrections.
      </p>
    ),
  },
  {
    id: 'limitation-liability',
    title: 'Limitation of Liability',
    content: (
      <p className="text-slate-300 leading-relaxed">
        To the maximum extent permitted under applicable law, EZAC Technologies shall not be liable for indirect, incidental, consequential, or punitive damages resulting from your access to or inability to use this platform.
      </p>
    ),
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    content: (
      <p className="text-slate-300 leading-relaxed">
        You agree to hold harmless EZAC Technologies against claims, liabilities, losses, or expenses resulting from your violation of these Terms of Service or unauthorized use of the platform.
      </p>
    ),
  },
  {
    id: 'privacy-reference',
    title: 'Privacy Integration',
    content: (
      <p className="text-slate-300 leading-relaxed">
        Your usage of the platform involves data processing governed by our Privacy Policy. Please review our data protection practices prior to submitting personal or business details.
      </p>
    ),
  },
  {
    id: 'terms-updates',
    title: 'Changes to These Terms',
    content: (
      <p className="text-slate-300 leading-relaxed">
        We reserve the right to revise these Terms of Service periodically. Revisions take immediate effect upon publishing, indicated by the updated Effective Date at the top of the page.
      </p>
    ),
  },
  {
    id: 'severability',
    title: 'Severability',
    content: (
      <p className="text-slate-300 leading-relaxed">
        If any clause within these Terms is declared invalid or unenforceable by court decree, that provision will be modified to the minimum extent necessary, leaving the remaining terms fully active.
      </p>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    content: (
      <p className="text-slate-300 leading-relaxed">
        These Terms are governed by and construed in accordance with the applicable laws operating within the registered jurisdiction of EZAC Technologies, without giving effect to conflict-of-law principles.
      </p>
    ),
  },
  {
    id: 'contact-terms',
    title: 'Contact Us',
    content: (
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl border border-blue-500/30 bg-blue-950/20 p-6">
        <div>
          <p className="text-slate-200 font-medium mb-1">Questions regarding our Terms of Service?</p>
          <p className="text-sm text-slate-400">Our legal and compliance team is ready to address your inquiries.</p>
        </div>
        <a
          href="/#contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-500 hover:shadow-blue-500/25"
        >
          Contact Legal Team
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    ),
  },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-800/80 bg-[#040814]/90 backdrop-blur-md shadow-xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 ring-1 ring-blue-400/40 transition-all hover:bg-blue-500 hover:shadow-blue-500/40"
          >
            Get Started
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-200 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((val) => !val)}
        >
          {open ? (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`overflow-hidden border-t border-slate-800/80 bg-[#040814]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-300 hover:bg-slate-800/50 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 pt-2 border-t border-slate-800">
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default function TermsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState('about-terms')

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return termsSections
    const query = searchQuery.toLowerCase()
    return termsSections.filter(
      (sec) =>
        sec.title.toLowerCase().includes(query) ||
        sec.id.toLowerCase().includes(query)
    )
  }, [searchQuery])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    termsSections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-200 antialiased selection:bg-blue-600 selection:text-white">
      {/* Background Subtle Gradient Overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950/50 to-[#030712]" />

      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-28 pb-10 border-b border-slate-800/80 bg-gradient-to-b from-[#080e1e] to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
              Legal Agreement
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-base text-slate-400 sm:text-lg leading-relaxed">
              These terms govern your access to and usage of the EZAC Technologies website, features, and digital content.
            </p>

            {/* Quick Meta Stats */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/80 px-3 py-1.5">
                <svg className="size-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Effective Date: August 15, 2026
              </span>
              <span className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/80 px-3 py-1.5">
                <svg className="size-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Est. Read Time: 5 mins
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container with Sticky TOC */}
      <main className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Left Sidebar: Search & Sticky Table of Contents */}
          <aside className="lg:col-span-4 lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search terms topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-slate-800 bg-[#09101f] px-4 py-2.5 pl-10 text-sm text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <svg
                  className="absolute left-3 top-3 size-4 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-xs text-slate-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Navigation Links */}
              <div className="rounded-xl border border-slate-800/80 bg-[#070e1c]/60 p-4 max-h-[calc(100vh-180px)] overflow-y-auto custom-scrollbar">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 px-2">
                  Table of Contents ({filteredSections.length})
                </p>
                <nav className="space-y-1">
                  {filteredSections.map((sec, index) => {
                    const isActive = activeSection === sec.id
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' })
                          setActiveSection(sec.id)
                        }}
                        className={`group flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                          isActive
                            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                            : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                        }`}
                      >
                        <span className={`flex size-5 shrink-0 items-center justify-center rounded text-[10px] font-mono ${
                          isActive ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                        }`}>
                          {index + 1}
                        </span>
                        <span className="truncate">{sec.title}</span>
                      </a>
                    )
                  })}
                </nav>
              </div>

            </div>
          </aside>

          {/* Right Content Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Introductory Statement */}
            <div className="rounded-xl border border-slate-800 bg-[#080f20]/70 p-6 sm:p-8 backdrop-blur-sm">
              <p className="text-base text-slate-200 leading-relaxed">
                Welcome to <strong className="text-white">EZAC Technologies</strong>. By accessing or utilizing this website, you agree to comply with and be bound by the terms outlined below.
              </p>
            </div>

            {/* Policy Sections */}
            {filteredSections.length > 0 ? (
              filteredSections.map((sec, idx) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-24 rounded-xl border border-slate-800/80 bg-[#060b17]/80 p-6 sm:p-8 transition-colors hover:border-slate-700/80"
                >
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/80">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-blue-950 text-xs font-bold text-blue-400 border border-blue-800/50">
                      {idx + 1}
                    </span>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                      {sec.title}
                    </h2>
                  </div>
                  <div>{sec.content}</div>
                </section>
              ))
            ) : (
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-12 text-center">
                <p className="text-slate-400 text-sm">No terms matching "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 text-xs text-blue-400 hover:underline font-medium"
                >
                  Reset search query
                </button>
              </div>
            )}

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-800/80 py-8 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo showWordmark={true} />
          <p>© {new Date().getFullYear()} EZAC Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}