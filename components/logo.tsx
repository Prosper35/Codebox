import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Image
        src="/Codebox%20Games%20Logo.png"
        alt=""
        width={88}
        height={88}
        className="size-16 object-contain sm:size-20"
      />
      <span className="font-display text-xs font-bold tracking-[0.08em] text-foreground sm:text-base">
        CODEBOX GAMES
      </span>
    </div>
  )
}
