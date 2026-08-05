import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
}: {
  className?: string
}) {
  return (
    <>
      <Image
        src="/Codebox Games Logo black text.png"
        alt="Codebox Games"
        width={88}
        height={88}
        className={cn(
          'size-14 object-contain dark:hidden sm:size-16',
          className,
        )}
      />
      <Image
        src="/Codebox Games Logo.png"
        alt="Codebox Games"
        width={88}
        height={88}
        className={cn(
          'hidden size-14 object-contain dark:block sm:size-16',
          className,
        )}
      />
    </>
  )
}
