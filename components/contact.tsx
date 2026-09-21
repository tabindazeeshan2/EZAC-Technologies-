'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send, Mail, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { LinkedInIcon, InstagramIcon } from '@/components/social-icons'
import { site, serviceOptions, budgetOptions } from '@/lib/site-config'
import { submitContactForm } from '@/lib/firebase/contacts'

type Errors = Partial<Record<'name' | 'email' | 'details', string>>

const fieldClass =
  'w-full rounded-xl border border-white/[0.07] bg-[#020817]/70 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-sky-400/60 focus:bg-[#040b1b] focus:ring-1 focus:ring-sky-400/20'

const labelClass =
  'mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300'

export function Contact() {
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const details = String(data.get('details') ?? '').trim()

    const nextErrors: Errors = {}

    if (!name) {
      nextErrors.name = 'Please enter your full name.'
    }

    if (!email) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!details) {
      nextErrors.details = 'Please tell us a little about your project.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setSubmitting(true)

    try {
      const payload = {
        name,
        email,
        company: String(data.get('company') ?? '').trim(),
        service: String(data.get('service') ?? '').trim(),
        details,
        budget: String(data.get('budget') ?? '').trim(),
      }

      await submitContactForm(payload)

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}))
        console.warn('Email trigger note:', errData.error || response.statusText)
      }

      setSubmitted(true)
      form.reset()
    } catch (error) {
      console.error('Error submitting contact form:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020817] py-24 sm:py-28"
    >
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/[0.035] blur-[160px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[150px]" />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.5) 1px,transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal
            as="p"
            className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-sky-400"
          >
            Contact / Start a Conversation
          </Reveal>

          <Reveal
            as="h2"
            delay={60}
            className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
          >
            Let&apos;s Build
            <span className="block bg-gradient-to-r from-[#5ec8ff] via-[#078cff] to-[#3ad4ff] bg-clip-text text-transparent">
              Something Great.
            </span>
          </Reveal>

          <Reveal
            as="p"
            delay={120}
            className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-7 text-slate-400 sm:text-base"
          >
            Tell us what you&apos;re looking to build, and let&apos;s explore
            how technology can turn your idea into something real.
          </Reveal>
        </div>

        {/* Main contact area */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">

          {/* Contact information */}
          <Reveal className="lg:col-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-sky-900/40 bg-[#040b1b]/80 p-7 shadow-[0_30px_100px_-50px_rgba(56,189,248,0.35)] backdrop-blur-xl sm:p-8">

              {/* Panel glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-400/[0.05] blur-3xl" />

              <div className="relative">
                

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                  Let&apos;s Talk
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
                  Have a question, a project idea, or a business challenge?
                  Get in touch with EZAC Technologies.
                </p>
              </div>

              <div className="relative mt-8 space-y-3">

                {/* Email */}
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#020817]/60 px-4 py-3.5 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/30 hover:bg-sky-400/[0.035]"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.06]">
                    <Mail className="size-4 text-sky-400" />
                  </span>

                  <span className="min-w-0 flex-1 truncate">
                    {site.email}
                  </span>

                  <ArrowUpRight className="size-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400" />
                </a>

                {/* LinkedIn */}
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#020817]/60 px-4 py-3.5 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/30 hover:bg-sky-400/[0.035]"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.06]">
                    <LinkedInIcon className="size-4 text-sky-400" />
                  </span>

                  <span className="min-w-0 flex-1 truncate">
                    {site.linkedinName}
                  </span>

                  <ArrowUpRight className="size-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400" />
                </a>

                {/* Instagram */}
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#020817]/60 px-4 py-3.5 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/30 hover:bg-sky-400/[0.035]"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.06]">
                    <InstagramIcon className="size-4 text-sky-400" />
                  </span>

                  <span className="min-w-0 flex-1 truncate">
                    {site.instagramHandle}
                  </span>

                  <ArrowUpRight className="size-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400" />
                </a>

              </div>

              
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100} className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-sky-900/40 bg-[#040b1b]/80 p-7 shadow-[0_30px_100px_-50px_rgba(56,189,248,0.35)] backdrop-blur-xl sm:p-8">

              <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-sky-400/[0.035] blur-3xl" />

              {submitted ? (
                <div className="relative flex min-h-80 flex-col items-center justify-center text-center">

                  <span className="inline-flex size-14 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/[0.08] text-sky-400 shadow-[0_0_30px_rgba(0,140,255,0.15)]">
                    <CheckCircle2 className="size-7" />
                  </span>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    Thank you — your inquiry has been received.
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
                    We appreciate you reaching out to EZAC Technologies.
                    We&apos;ll review your message and get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 inline-flex h-10 items-center justify-center rounded-full border border-sky-400/30 px-5 text-[13px] font-semibold text-sky-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-sky-400/[0.06]"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="relative space-y-5">

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full Name <span className="text-sky-400">*</span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        className={fieldClass}
                        placeholder="Jane Doe"
                      />

                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address <span className="text-sky-400">*</span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        className={fieldClass}
                        placeholder="jane@company.com"
                      />

                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company{' '}
                        <span className="text-slate-600">(optional)</span>
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className={fieldClass}
                        placeholder="Company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className={labelClass}>
                        Service Needed
                      </label>

                      <select
                        id="service"
                        name="service"
                        defaultValue=""
                        className={fieldClass}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="details" className={labelClass}>
                      Project Details <span className="text-sky-400">*</span>
                    </label>

                    <textarea
                      id="details"
                      name="details"
                      rows={5}
                      aria-required="true"
                      aria-invalid={!!errors.details}
                      className={`${fieldClass} resize-y`}
                      placeholder="Tell us a little about your idea, requirements or business challenge..."
                    />

                    {errors.details && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.details}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budget" className={labelClass}>
                      Budget Range{' '}
                      <span className="text-slate-600">(optional)</span>
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Select a range
                      </option>

                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Exact EZAC button style */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="
                      group inline-flex h-[40px] w-full items-center justify-center gap-2
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
                      disabled:pointer-events-none
                      disabled:opacity-60
                    "
                  >
                    {submitting ? 'Sending...' : 'Send Inquiry'}

                    {!submitting && (
                      <Send className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>

                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}