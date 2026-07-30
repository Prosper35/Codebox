import { cn } from '@/lib/utils'

export function Logo({
  className,
  tone = 'light',
}: {
  className?: string
  tone?: 'light' | 'dark'
}) {
  return (
    <div className={cn('flex flex-col leading-none', className)}>
      <span
        className={cn(
          'font-display text-2xl font-bold tracking-tight md:text-[1.7rem]',
          tone === 'light' ? 'text-white' : 'text-foreground',
        )}
      >
        DIMENSION11
      </span>
      <span
        className={cn(
          'font-display text-[0.7rem] font-medium tracking-[0.08em]',
          tone === 'light' ? 'text-white/80' : 'text-foreground/70',
        )}
      >
        Studios
      </span>
    </div>
  )
}
