import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const photos = [
  {
    src: '/Lagos%20game%20week%20photos/CodeBox-Games-wins-Lagos-Games-Week-Pitch-Stage-with-Hell-Bleeds.jpg',
    alt: 'CodeBox Games holding the Lagos Games Week Pitch Stage winner prize',
    className:
      'aspect-[2/1] lg:col-span-8 lg:row-span-3 lg:aspect-auto',
    position: 'object-center',
  },
  {
    src: '/Lagos%20game%20week%20photos/1782151411416.jpg',
    alt: 'Pitch Stage winners and Lagos Games Week organizers on stage',
    className:
      'aspect-[3/4] lg:col-span-4 lg:row-span-5 lg:aspect-auto',
    position: 'object-center',
  },
  {
    src: '/Lagos%20game%20week%20photos/lagos-gamesweek7_orig.webp',
    alt: 'Hell Bleeds being presented to the Lagos Games Week audience',
    className:
      'aspect-[2/1] lg:col-span-5 lg:row-span-2 lg:aspect-auto',
    position: 'object-center',
  },
  {
    src: '/Lagos%20game%20week%20photos/1782151411507.jpg',
    alt: 'CodeBox Games team members holding the Pitch Stage winner prize',
    className:
      'aspect-[3/4] lg:col-span-3 lg:row-span-4 lg:aspect-auto',
    position: 'object-center',
  },
  {
    src: '/Lagos%20game%20week%20photos/1782151403359.jpg',
    alt: 'Panel session at Lagos Games Week',
    className:
      'aspect-[2/1] lg:col-span-5 lg:row-span-2 lg:aspect-auto',
    position: 'object-center',
  },
]

export function LagosGamesWeek() {
  return (
    <section className="overflow-hidden bg-[#080807] py-24 text-white md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
              Lagos Games Week / 2026
            </p>
            <h1 className="mt-5 font-display text-6xl font-bold uppercase leading-[0.86] tracking-tight text-balance sm:text-8xl">
              Hell Bleeds wins the pitch stage.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-7 text-white/65">
              CodeBox Games took Hell Bleeds to Lagos Games Week and emerged as
              the Pitch Stage winner, earning an all-expense-paid trip to
              Gamescom 2026.
            </p>
            <a
              href="https://www.isakaba.com/codebox-games-wins-lagos-games-week-pitch-stage-with-hell-bleeds/"
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand"
            >
              Read the story
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-5 grid gap-3 lg:auto-rows-[8rem] lg:grid-cols-12">
          {photos.map((photo, index) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden bg-white/5 ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 67vw, 100vw"
                className={`${photo.position} object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.24em] text-white/75">
                LGW / {String(index + 1).padStart(2, '0')}
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LagosGamesWeekTeaser() {
  return (
    <section className="relative flex min-h-[68svh] items-end overflow-hidden bg-black text-white">
      <Image
        src="/Lagos%20game%20week%20photos/CodeBox-Games-wins-Lagos-Games-Week-Pitch-Stage-with-Hell-Bleeds.jpg"
        alt="CodeBox Games holding the Lagos Games Week Pitch Stage winner prize"
        fill
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.7)_42%,rgba(0,0,0,0.14)_82%),linear-gradient(180deg,rgba(0,0,0,0.08)_20%,rgba(0,0,0,0.82)_100%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
          Studio news / Lagos Games Week 2026
        </p>
        <h2 className="mt-5 max-w-4xl font-display text-6xl font-bold uppercase leading-[0.86] tracking-tight text-balance sm:text-8xl">
          Pitch won. Next stop: Gamescom.
        </h2>
        <p className="mt-7 max-w-xl text-sm leading-7 text-white/70">
          Hell Bleeds won the Lagos Games Week Pitch Stage, earning CodeBox
          Games an all-expense-paid trip to Gamescom 2026.
        </p>
        <Link
          href="/news"
          className="group mt-8 inline-flex h-12 items-center justify-center gap-3 bg-brand px-6 text-xs font-bold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-white hover:text-black"
        >
          View news and gallery
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
