import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const pillars = ['African folklore', 'Cinematic storytelling', 'Action-adventure']

export function GameIntro() {
  return (
    <section id="game" className="surface-grid bg-background py-24 text-foreground md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              The game
            </span>
          </div>
          <h2 className="mt-10 max-w-lg font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight text-balance sm:text-7xl">
            A world where old stories draw blood.
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            <em>Hell Bleeds</em> is a dark fantasy action-adventure that draws
            from African stories, history, and mythology. Built around cinematic
            storytelling and engaging combat, it is the first expression of our
            ambition to create original African games for a global audience.
          </p>
          <div className="mt-9 divide-y divide-border border-y border-border">
            {pillars.map((pillar, index) => (
              <div key={pillar} className="flex items-center gap-5 py-4">
                <span className="font-display text-sm font-bold text-brand">
                  0{index + 1}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.16em]">
                  {pillar}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/games"
            className="group mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-brand"
          >
            Enter the world
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="relative lg:col-span-7 lg:pl-10">
          <div className="absolute -left-3 top-10 hidden h-3/4 w-px bg-brand lg:block" />
          <div className="group relative aspect-[4/5] overflow-hidden bg-black sm:aspect-[16/11] lg:aspect-[4/5]">
            <Image
              src="/3.jpg"
              alt="Hell Bleeds warrior standing before a burning village"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/70">
              Development image / Hell Bleeds
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
