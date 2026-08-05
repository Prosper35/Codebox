import Image from 'next/image'
import { Play } from 'lucide-react'

const trailerUrl = 'https://youtu.be/2q_qoHTgPGY'

export function GamesHero() {
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-black text-white">
      <Image
        src="/3.jpg"
        alt="Hell Bleeds warrior standing before flames"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.46)_48%,rgba(0,0,0,0.08)_76%),linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.84)_100%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 pb-16 pt-32 md:grid-cols-12 md:items-end md:pb-24">
        <div className="md:col-span-8">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
            Now in development
          </p>
          <h1 className="mt-4 font-display text-7xl font-extrabold uppercase leading-[0.78] tracking-[-0.03em] sm:text-9xl lg:text-[10rem]">
            Hell
            <span className="block text-brand">Bleeds</span>
          </h1>
        </div>
        <div className="border-t border-white/25 pt-5 md:col-span-4">
          <p className="text-sm leading-7 text-white/68">
            A dark fantasy action-adventure where African folklore, cinematic
            storytelling, and intense encounters collide.
          </p>
          <a
            href={trailerUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-11 items-center justify-center gap-3 bg-brand px-5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-white"
          >
            <Play className="size-3.5 fill-current" />
            Watch trailer
          </a>
        </div>
      </div>
    </section>
  )
}
