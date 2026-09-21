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

const policySections = [
  {
    id: 'info-collect',
    title: 'Information We Collect',
    content: (
      <>
        <p className="text-slate-300 leading-relaxed mb-4">
          We may collect information that you voluntarily provide when you interact with our website, contact us, request information, or inquire about our services.
        </p>
        <p className="text-sm font-semibold text-slate-200 mb-3">This information may include:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Your full name and title',
            'Email address and contact details',
            'Company or organization name',
            'Direct phone number (if provided)',
            'Project or service requirements',
            'Any additional context in your communications',
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
    id: 'auto-collect',
    title: 'Information Collected Automatically',
    content: (
      <>
        <p className="text-slate-300 leading-relaxed mb-4">
          When you visit our website, certain technical information may be collected automatically by our servers or integrated tools to ensure site reliability and security.
        </p>
        <p className="text-sm font-semibold text-slate-200 mb-3">Technical data parameters:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
          {[
            'IP address',
            'Browser & version',
            'Device architecture',
            'Operating system',
            'Page navigation path',
            'Session timestamps',
          ].map((tech, idx) => (
            <div key={idx} className="rounded-lg border border-slate-800 bg-[#09101f] p-2.5 text-center text-xs font-mono text-blue-300">
              {tech}
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">
          This data is aggregated to evaluate system load, protect infrastructure against automated attacks, diagnose technical anomalies, and optimize overall site performance.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: (
      <>
        <p className="text-slate-300 leading-relaxed mb-4">
          EZAC Technologies utilizes collected information solely for operational and strategic business purposes, including:
        </p>
        <ul className="space-y-3">
          {[
            'Promptly evaluating and responding to prospective client inquiries',
            'Formulating tailored technological solutions and project scope proposals',
            'Delivering clear ongoing service updates and consultation',
            'Continuously monitoring and improving website performance and UX',
            'Ensuring network security and preventing fraudulent activities',
            'Complying with applicable legal and statutory requirements',
          ].map((use, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
              <svg className="size-5 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{use}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'legal-basis',
    title: 'Legal Basis for Processing',
    content: (
      <p className="text-slate-300 leading-relaxed">
        Where applicable, we process personal information under defined legal bases: explicit user consent, fulfillment of pre-contractual requests, legitimate business interests (e.g. maintaining security and providing support), or compliance with legal mandates.
      </p>
    ),
  },
  {
    id: 'sharing',
    title: 'How We Share Information',
    content: (
      <>
        <div className="mb-4 rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-4 text-emerald-300 text-sm font-medium flex items-center gap-3">
          <svg className="size-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Strict Commitment: We never sell, rent, or trade your personal information to third parties.
        </div>
        <p className="text-slate-300 leading-relaxed mb-3">
          Information is shared only with trusted infrastructure providers who assist in hosting, database security, and electronic communications under strict confidentiality agreements.
        </p>
        <p className="text-slate-300 leading-relaxed">
          We may disclose details when required by law enforcement, court order, or when necessary to defend our legal rights, property, or safety.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    content: (
      <p className="text-slate-300 leading-relaxed">
        Our digital platforms rely on reputable third-party vendors for cloud hosting, DNS services, and contact form processing. These entities process data under explicit instructions and maintain independent security compliance standards.
      </p>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and Tracking Technologies',
    content: (
      <p className="text-slate-300 leading-relaxed">
        We utilize essential session cookies to support platform functionality and basic analytics. You can control or disable cookie preferences directly through your browser settings, though certain functional features may be limited.
      </p>
    ),
  },
  {
    id: 'security',
    title: 'Data Security Measures',
    content: (
      <p className="text-slate-300 leading-relaxed">
        We employ industry-standard administrative, physical, and technical safeguards—including TLS encryption and access-controlled databases—to safeguard your information. While no transmission method is 100% impenetrable, we actively maintain stringent security protocols.
      </p>
    ),
  },
  {
    id: 'retention',
    title: 'Data Retention Policy',
    content: (
      <p className="text-slate-300 leading-relaxed">
        Personal details are retained only for the duration necessary to fulfill the operational purpose for which they were collected or to comply with applicable tax, accounting, and legal requirements.
      </p>
    ),
  },
  {
    id: 'rights',
    title: 'Your Privacy Rights',
    content: (
      <>
        <p className="text-slate-300 leading-relaxed mb-4">
          Depending on your jurisdiction, you retain rights regarding your personal information:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Right to request access to held records',
            'Right to rectify inaccurate information',
            'Right to request data erasure ("Right to be forgotten")',
            'Right to withdraw consent at any time',
            'Right to object to automated processing',
            'Right to receive a portable data copy',
          ].map((right, idx) => (
            <div key={idx} className="flex items-center gap-3 rounded-lg border border-slate-800 bg-[#0d1527]/60 p-3 text-sm text-slate-300">
              <svg className="size-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{right}</span>
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
      <p className="text-slate-300 leading-relaxed">
        Our services are designed for corporate clients and standard web users. We do not knowingly collect or solicit personal information from individuals under 13 years of age.
      </p>
    ),
  },
  {
    id: 'international',
    title: 'International Data Transfers',
    content: (
      <p className="text-slate-300 leading-relaxed">
        EZAC Technologies operates globally. Information submitted may be stored and processed on secure cloud infrastructure located outside your home state or country under recognized transfer safeguards.
      </p>
    ),
  },
  {
    id: 'external',
    title: 'External Web Links',
    content: (
      <p className="text-slate-300 leading-relaxed">
        Our website may contain links to third-party domains. EZAC Technologies does not control and is not liable for the privacy standards, content, or practices of external websites.
      </p>
    ),
  },
  {
    id: 'updates',
    title: 'Updates to This Privacy Policy',
    content: (
      <p className="text-slate-300 leading-relaxed">
        We reserve the right to revise this Privacy Policy periodically. Modifications take effect immediately upon publication, reflected by the updated Effective Date at the top of this document.
      </p>
    ),
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: (
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl border border-blue-500/30 bg-blue-950/20 p-6">
        <div>
          <p className="text-slate-200 font-medium mb-1">Have questions or data requests?</p>
          <p className="text-sm text-slate-400">Our privacy and compliance team is available to assist you directly.</p>
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



export default function PrivacyPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState('info-collect')

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return policySections
    const query = searchQuery.toLowerCase()
    return policySections.filter(
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

    policySections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-200 antialiased selection:bg-blue-600 selection:text-white">
      {/* Background Subtle Gradient Overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950/50 to-[#030712]" />

      

      {/* Hero Header */}
      <section className="relative pt-28 pb-10 border-b border-slate-800/80 bg-gradient-to-b from-[#080e1e] to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
              Legal Information
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-base text-slate-400 sm:text-lg leading-relaxed">
              This document outlines how EZAC Technologies manages, processes, and protects personal information gathered through our services and platforms.
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
                Est. Read Time: 4 mins
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
                  placeholder="Search policy topics..."
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
                At <strong className="text-white">EZAC Technologies</strong>, transparency and security are central to our values. This Privacy Policy clarifies how personal data is collected, utilized, and safeguarded when you access our platforms, services, and associated domains.
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
                <p className="text-slate-400 text-sm">No policy sections matching "{searchQuery}"</p>
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

    
    </div>
  )
}