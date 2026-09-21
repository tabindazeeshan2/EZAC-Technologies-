import { Reveal } from '@/components/reveal'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl text-left'
      }
    >
      {eyebrow && (
        <Reveal
          as="p"
          className="text-xs font-semibold tracking-[0.2em] text-brand-bright uppercase"
        >
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={60}
        className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </Reveal>
      {subtitle && (
        <Reveal
          as="p"
          delay={120}
          className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground"
        >
          {subtitle}
        </Reveal>
      )}
    </div>
  )
}
