import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowRight, Play } from 'lucide-react'

const trailerUrl =
  'https://drive.google.com/file/d/11s7_reU1tg6AOGrYAYZKTb-Uozwj06HA/view?usp=sharing'

export function Hero() {
  return (
    <section
      id="top"
      className="relative -mt-20 flex min-h-[100svh] overflow-hidden bg-black text-white sm:-mt-[88px]"
    >
      <Image
        src="/3.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/3.jpg"
        className="animate-cinematic-push absolute -top-[6%] left-0 h-[112%] w-full object-cover object-center motion-reduce:hidden"
        aria-hidden="true"
      >
        <source src="/Short.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.56)_42%,rgba(0,0,0,0.12)_75%),linear-gradient(180deg,rgba(0,0,0,0.34)_0%,transparent_45%,rgba(0,0,0,0.76)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 pb-28 pt-40 md:pb-36 md:pt-48">
        <div className="max-w-3xl">
          <p className="animate-reveal-up text-xs font-bold uppercase tracking-[0.28em] text-brand">
            A dark fantasy action-adventure
          </p>
          <h1 className="animate-reveal-up animation-delay-100 mt-5 font-display text-[clamp(5.5rem,15vw,12rem)] font-extrabold uppercase leading-[0.72] tracking-[-0.035em]">
            Hell
            <span className="block text-brand">Bleeds</span>
          </h1>
          <p className="animate-reveal-up animation-delay-200 mt-8 max-w-xl text-sm leading-7 text-white/76 sm:text-base">
            African folklore collides with cinematic action in a world where
            old stories refuse to stay buried.
          </p>

          <div className="animate-reveal-up animation-delay-300 mt-9 flex flex-wrap gap-3">
            <a
              href={trailerUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-3 bg-brand px-6 text-xs font-bold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-white"
            >
              <Play className="size-3.5 fill-current" />
              Watch trailer
            </a>
            <Link
              href="/games"
              className="inline-flex h-12 items-center justify-center border border-white/45 px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              Explore the game
              <ArrowRight className="ml-3 size-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-6 py-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/60 sm:grid-cols-4">
          <span>Codebox Games</span>
          <span>Nigeria</span>
          <span>In development</span>
          <Link
            href="#game"
            className="flex items-center justify-end gap-2 text-white transition-colors hover:text-brand"
          >
            Discover
            <ArrowDown className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
