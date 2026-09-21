import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site-config'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  showWordmark?: boolean
  size?: 'default' | 'lg' | 'hero'
}

export function Logo({
  className = '',
  showWordmark = true,
  size = 'default',
}: LogoProps) {
  const isLarge = size === 'lg'
  const isHero = size === 'hero'

  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn(
        'group inline-flex shrink-0 items-center select-none',
        isHero ? 'flex-col' : isLarge ? 'gap-3.5' : 'gap-2.5',
        className
      )}
    >
      {/* Logo Icon */}
      <span
        className={cn(
          'relative flex shrink-0 items-center justify-center',
          isHero
            ? 'h-[300px] w-[320px] sm:h-[360px] sm:w-[380px] md:h-[420px] md:w-[440px] lg:h-[460px] lg:w-[480px]'
            : isLarge
              ? 'h-[52px] w-[60px]'
              : 'h-[40px] w-[46px]'
        )}
      >
        <Image
          src="/ezac-logo.png"
          alt="EZAC Technologies"
          fill
          priority
          sizes={isHero ? '480px' : '60px'}
          className={cn(
            'object-contain transition-transform duration-500',
            isHero
              ? 'group-hover:scale-[1.03]'
              : 'group-hover:scale-[1.04]'
          )}
        />
      </span>

      {/* Wordmark */}
      {showWordmark && !isHero && (
        <span className="flex flex-col justify-center">
          <span className="flex items-baseline whitespace-nowrap leading-none">
            <span
              className={cn(
                'font-bold tracking-[-0.03em] text-white',
                isLarge ? 'text-[22px]' : 'text-[17px]'
              )}
            >
              EZAC
            </span>

            <span
              className={cn(
                'ml-1.5 font-medium tracking-[-0.02em] text-white/50',
                isLarge ? 'text-[16px]' : 'text-[13px]'
              )}
            >
              Technologies
            </span>
          </span>

          {/* Tagline */}
          {isLarge && (
            <span className="mt-1.5 text-[6.5px] font-medium uppercase tracking-[0.28em] text-[#55bfff]/70">
              Ideas Today · A Brighter Tomorrow
            </span>
          )}
        </span>
      )}
    </Link>
  )
}