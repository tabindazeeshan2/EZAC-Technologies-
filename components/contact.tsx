'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send, Mail, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { LinkedInIcon, InstagramIcon } from '@/components/social-icons'
import { site, serviceOptions, budgetOptions } from '@/lib/site-config'
import { submitContactForm } from '@/lib/firebase/contacts'

type Errors = Partial<Record<'name' | 'email' | 'details', string>>

const fieldClass =
  'w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30'

const labelClass = 'mb-2 block text-sm font-medium text-foreground'

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

      // 1. Save to Firebase from client SDK
      await submitContactForm(payload)

      // 2. Trigger API route to send notification emails
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
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
            Contact
          </Reveal>
          <Reveal as="h2" delay={60} className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Build Something Great Together
          </Reveal>
          <Reveal as="p" delay={120} className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Tell us what you&apos;re looking to build, and let&apos;s explore how technology can help.
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card/50 p-7 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-foreground">Let&apos;s Talk</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Have a question or an idea? Get in touch with EZAC Technologies.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-background/40 px-4 py-3 text-sm text-foreground transition-colors hover:border-brand/50 hover:bg-brand/5"
                >
                  <Mail className="size-5 shrink-0 text-brand-bright" />
                  <span className="min-w-0 flex-1 truncate">{site.email}</span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand-bright" />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-background/40 px-4 py-3 text-sm text-foreground transition-colors hover:border-brand/50 hover:bg-brand/5"
                >
                  <LinkedInIcon className="size-5 shrink-0 text-brand-bright" />
                  <span className="min-w-0 flex-1 truncate">{site.linkedinName}</span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand-bright" />
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-background/40 px-4 py-3 text-sm text-foreground transition-colors hover:border-brand/50 hover:bg-brand/5"
                >
                  <InstagramIcon className="size-5 shrink-0 text-brand-bright" />
                  <span className="min-w-0 flex-1 truncate">{site.instagramHandle}</span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand-bright" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100} className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card/50 p-7 backdrop-blur-sm sm:p-8">
              {submitted ? (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <span className="inline-flex size-14 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand-bright">
                    <CheckCircle2 className="size-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    Thank you — your inquiry has been received.
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    We appreciate you reaching out to EZAC Technologies. We&apos;ll review your message and get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-brand-bright underline-offset-4 hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full Name <span className="text-brand-bright">*</span>
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
                      {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address <span className="text-brand-bright">*</span>
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
                      {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company <span className="text-muted-foreground">(optional)</span>
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
                      <select id="service" name="service" defaultValue="" className={fieldClass}>
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
                      Project Details <span className="text-brand-bright">*</span>
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
                    {errors.details && <p className="mt-1.5 text-xs text-destructive">{errors.details}</p>}
                  </div>

                  <div>
                    <label htmlFor="budget" className={labelClass}>
                      Budget Range <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <select id="budget" name="budget" defaultValue="" className={fieldClass}>
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

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(0,108,255,0.5),0_8px_30px_-8px_rgba(0,108,255,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-bright disabled:pointer-events-none disabled:opacity-60"
                  >
                    {submitting ? 'Sending...' : 'Send Inquiry'}
                    {!submitting && <Send className="size-4" />}
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