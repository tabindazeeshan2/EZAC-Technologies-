'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Menu, Search, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { GlowButton } from '@/components/glow-button'
import { navLinks } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const getHref = (href: string) => {
    if (href.startsWith('#') && pathname !== '/') return `/${href}`
    return href
  }

  const isActive = (href: string) => {
    if (href === '#home' || href === '/') return pathname === '/'
    if (!href.startsWith('#')) return pathname === href
    return false
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/[0.06] bg-[#020817]/85 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Smaller logo in navbar so hero logo remains the star */}
        <Logo size="default" className="relative z-10" />

        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <li key={link.href}>
                <a
                  href={getHref(link.href)}
                  className={cn(
                    'group relative flex h-[76px] items-center text-[13.5px] font-medium tracking-wide transition-colors duration-200',
                    active ? 'text-white' : 'text-white/50 hover:text-white'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute bottom-[22px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#079cff] shadow-[0_0_10px_rgba(7,156,255,0.7)] transition-all duration-300',
                      active
                        ? 'w-[22px] opacity-100'
                        : 'w-0 opacity-0 group-hover:w-[18px] group-hover:opacity-100'
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="flex size-9 items-center justify-center rounded-full text-white/45 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
          >
            <Search className="size-[17px]" strokeWidth={1.6} />
          </button>

          <GlowButton
            href={getHref('#contact')}
            size="md"
            className="h-[40px] rounded-full bg-[#078cff] px-5 text-[13px] font-semibold shadow-[0_0_18px_rgba(0,140,255,0.25)] transition-all duration-300 hover:bg-[#159cff] hover:shadow-[0_0_28px_rgba(0,140,255,0.4)]"
          >
            Get Started
            <ArrowRight className="ml-1.5 size-3.5" />
          </GlowButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all hover:border-blue-400/25 hover:bg-blue-500/[0.08] lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'border-t border-white/[0.07] bg-[#020817]/97 backdrop-blur-2xl transition-all duration-300 lg:hidden',
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        )}
      >
        <div className="px-6 py-6 sm:px-8">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <a
                  key={link.href}
                  href={getHref(link.href)}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-xl border px-4 py-3.5 text-[15px] font-medium transition-all',
                    active
                      ? 'border-blue-400/15 bg-blue-500/[0.09] text-white'
                      : 'border-transparent text-white/60 hover:border-white/[0.06] hover:bg-white/[0.04] hover:text-white'
                  )}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          <div className="mt-5">
            <GlowButton
              href={getHref('#contact')}
              size="lg"
              className="h-[50px] w-full rounded-xl bg-[#078cff]"
              onClick={() => setOpen(false)}
            >
              Get Started
              <ArrowRight className="ml-2 size-4" />
            </GlowButton>
          </div>
        </div>
      </div>
    </header>
  )
}