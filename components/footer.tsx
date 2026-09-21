import Image from 'next/image'
import Link from 'next/link'
import { LinkedInIcon, InstagramIcon } from '@/components/social-icons'
import { site, navLinks, services } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/50">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 min-[500px]:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="min-w-0 min-[500px]:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="EZAC Technologies Home"
            >
              <span className="relative inline-flex size-9 shrink-0 overflow-hidden rounded-md ring-1 ring-border">
                <Image
                  src="/ezac-logo.png"
                  alt="EZAC Technologies logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>

              <span className="text-base font-bold tracking-tight text-foreground">
                EZAC{' '}
                <span className="font-medium text-muted-foreground">
                  Technologies
                </span>
              </span>
            </Link>

            <p className="mt-4 text-sm font-medium text-brand-bright">
              {site.tagline}
            </p>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EZAC Technologies on LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background/40 text-muted-foreground transition-all hover:border-brand/50 hover:bg-brand/10 hover:text-brand-bright"
              >
                <LinkedInIcon className="size-4" />
              </a>

              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EZAC Technologies on Instagram"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background/40 text-muted-foreground transition-all hover:border-brand/50 hover:bg-brand/10 hover:text-brand-bright"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Navigation
            </h3>

            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={
                      link.href.startsWith('/')
                        ? link.href
                        : `/${link.href}`
                    }
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Services
            </h3>

            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/#${service.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-5 border-t border-border pt-7 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-8">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            © 2026 EZAC Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

