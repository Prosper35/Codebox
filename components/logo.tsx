import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
}: {
  className?: string
}) {
  return (
    <Image
      src="/Codebox%20Games%20Logo.png"
      alt="Codebox Games"
      width={88}
      height={88}
      className={cn('size-20 object-contain', className)}
    />
  )
}
